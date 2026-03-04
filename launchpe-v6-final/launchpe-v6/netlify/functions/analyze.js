/* ─────────────────────────────────────────
   netlify/functions/analyze.js
   LaunchPe — Secure AI Analysis
   
   SETUP: In Netlify dashboard →
   Site settings → Environment variables → Add:
   Key: GROQ_API_KEY
   Value: your-groq-key-here
─────────────────────────────────────────── */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'API key not configured. Add GROQ_API_KEY in Netlify environment variables.' })
    };
  }

  let url;
  try {
    const body = JSON.parse(event.body || '{}');
    url = body.url;
    if (!url) throw new Error('No URL provided');
  } catch (e) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // ── Step 1: Fetch real website content ──────────────────
  let websiteContent = '';
  let fetchSuccess = false;

  const urlsToTry = [
    `https://${url}`,
    `https://www.${url}`,
    `http://${url}`
  ];

  for (const targetUrl of urlsToTry) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; LaunchPe-Bot/1.0; +https://launchpe.in)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5'
        }
      });
      clearTimeout(timeout);

      if (res.ok) {
        const html = await res.text();

        // Extract meaningful text from HTML
        websiteContent = html
          // Remove scripts, styles, SVGs
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
          .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, ' ')
          // Extract meta descriptions (very valuable)
          .replace(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/gi, ' META_DESC: $1 ')
          .replace(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/gi, ' META_DESC: $1 ')
          // Extract title
          .replace(/<title[^>]*>([^<]+)<\/title>/gi, ' PAGE_TITLE: $1 ')
          // Extract h1, h2 headings
          .replace(/<h1[^>]*>([^<]+)<\/h1>/gi, ' H1: $1 ')
          .replace(/<h2[^>]*>([^<]+)<\/h2>/gi, ' H2: $1 ')
          // Extract alt text from images
          .replace(/<img[^>]*alt=["']([^"']+)["'][^>]*>/gi, ' IMG_ALT: $1 ')
          // Strip remaining HTML tags
          .replace(/<[^>]+>/g, ' ')
          // Clean up whitespace
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/\s+/g, ' ')
          .trim()
          // Take first 4000 chars — enough for AI to understand the product
          .substring(0, 4000);

        fetchSuccess = true;
        break;
      }
    } catch (e) {
      // Try next URL format
      continue;
    }
  }

  if (!fetchSuccess || !websiteContent) {
    websiteContent = `Website at ${url} could not be fetched. Infer product details from domain name only.`;
  }

  // ── Step 2: Build AI prompt with real website content ───
  const systemPrompt = `You are LaunchPe, a professional viral launch intelligence tool for Indian founders. 
You analyze products and create precise, platform-native launch content.
You ONLY output perfectly valid raw JSON. No markdown, no backticks, no preamble.
All newlines inside string values MUST be escaped as \\n.
Never output unescaped control characters inside strings.`;

  const userPrompt = `Analyze this product website and create a complete viral launch strategy.

WEBSITE URL: ${url}
ACTUAL WEBSITE CONTENT:
---
${websiteContent}
---

Based on the ACTUAL website content above (not assumptions), generate a launch strategy in this EXACT JSON format:

{
  "ico": "single emoji representing this product",
  "name": "exact product name from website",
  "url": "${url}",
  "desc": "one precise sentence describing what this product does based on the website",
  "tags": ["Category", "Market", "Type"],
  "count": "XX matches · Y platforms",
  "rMeta": "X subreddits · 3 post angles",
  "rComms": [
    ["r/subreddit1", "memberCount e.g. 800K", "relevance% e.g. 94%"],
    ["r/subreddit2", "memberCount", "relevance%"],
    ["r/subreddit3", "memberCount", "relevance%"]
  ],
  "rPost": {
    "title": "compelling Reddit title — not clickbait, genuine value",
    "body": "Reddit post body — 2-3 short paragraphs, authentic founder voice, specific to this product. NO generic marketing. Include real details from the website.",
    "sub": "r/bestmatchingsubreddit",
    "upvotes": "estimated upvotes as string e.g. 340"
  },
  "liPost": {
    "body": "LinkedIn founder story — uses line breaks \\n between each line, personal tone, mentions specific product features, ends with URL",
    "name": "You",
    "role": "Founder at ProductName",
    "likes": 500,
    "comments": 80,
    "reposts": 45
  },
  "twPost": {
    "thread": [
      "Tweet 1: strong hook based on the real problem this product solves",
      "Tweet 2: specific details/data points from the product",
      "Tweet 3: proof or result or benefit",
      "Tweet 4: CTA with URL"
    ],
    "handle": "@yourhandle"
  },
  "waPost": {
    "en": "casual WhatsApp English message — short, genuine, not spammy, mentions the product by name",
    "hi": "same message in natural Hinglish — conversational, sounds like a friend sharing"
  },
  "waComms": [
    ["Specific Indian WhatsApp/Telegram group type 1 relevant to this product", "relevance%"],
    ["Specific group type 2", "relevance%"],
    ["Specific group type 3", "relevance%"]
  ],
  "score": 75,
  "sTitle": "High Viral Potential",
  "sDesc": "Two short sentences: why this score, what makes this product shareable, which platform will work best."
}

RULES:
- Use ONLY information from the actual website content above
- Posts must be specific to this product — no generic templates
- Reddit posts should provide genuine value, not advertisements
- LinkedIn must use the founder storytelling format with line breaks
- Twitter thread must have a scroll-stopping first tweet
- WhatsApp message must sound like a real person, not a marketer
- Subreddits must be real and highly relevant to this product category
- Score should honestly reflect viral potential based on the product`;

  // ── Step 3: Call Groq API ────────────────────────────────
  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.75,
        max_tokens: 4096,
        response_format: { type: 'json_object' }
      })
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      const status = groqResponse.status;
      if (status === 429) {
        return { statusCode: 429, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Rate limit exceeded. Please wait a moment and try again.' }) };
      }
      return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: `Groq API error: ${errText.substring(0, 200)}` }) };
    }

    const groqData = await groqResponse.json();
    const content = groqData.choices?.[0]?.message?.content;

    if (!content) {
      return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Empty response from AI' }) };
    }

    // Clean up any potential markdown fences
    const cleaned = content.replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleaned);

    // Add website fetch status to response
    parsed._fetchSuccess = fetchSuccess;

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(parsed)
    };

  } catch (e) {
    console.error('analyze function error:', e);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: e.message || 'Internal error' })
    };
  }
};
