/* ─────────────────────────────────────────
   netlify/functions/regenerate.js
   LaunchPe — Secure Content Regeneration
   
   Accepts: platform, productData, customDescription
   Returns: { content: "new post text" }
─────────────────────────────────────────── */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

const PLATFORM_INSTRUCTIONS = {
  reddit: {
    format: 'Reddit post body text only (no title). 2-3 short paragraphs. Authentic founder voice. No marketing language. Provide genuine value. Ends with a soft mention of the product URL.',
    maxTokens: 600,
    temp: 0.9
  },
  linkedin: {
    format: 'LinkedIn post. Use line breaks after each sentence (\\n). Start with a strong 1-line hook. 6-10 lines total. Use 1-2 emojis max. End with the product URL. Professional but personal.',
    maxTokens: 600,
    temp: 0.85
  },
  twitter: {
    format: 'A 4-tweet Twitter thread. Separate each tweet with "|||". First tweet is the hook (under 280 chars). Each tweet under 280 chars. Last tweet has CTA with URL.',
    maxTokens: 500,
    temp: 0.9
  },
  whatsapp: {
    format: 'Short WhatsApp message. Max 3 sentences. Sounds like a friend sharing, not marketing. Casual, genuine. Include the product URL naturally.',
    maxTokens: 200,
    temp: 0.9
  }
};

exports.handler = async (event) => {

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
      body: JSON.stringify({ error: 'API key not configured.' })
    };
  }

  let platform, productName, productUrl, productDesc, customDescription;
  try {
    const body = JSON.parse(event.body || '{}');
    platform = (body.platform || '').toLowerCase();
    productName = body.productName || 'Product';
    productUrl = body.productUrl || '';
    productDesc = body.productDesc || '';
    customDescription = body.customDescription || '';

    if (!platform || !PLATFORM_INSTRUCTIONS[platform]) {
      throw new Error(`Invalid platform: ${platform}`);
    }
  } catch (e) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: e.message }) };
  }

  const instructions = PLATFORM_INSTRUCTIONS[platform];

  // Build the regeneration prompt
  const customAngle = customDescription
    ? `\n\nUSER'S REQUESTED ANGLE: "${customDescription}"\nBuild the post around this specific angle/topic/tone the user asked for.`
    : '\n\nCreate a completely fresh variation — different angle, different hook, different structure than typical posts for this product.';

  const prompt = `You are a professional launch content writer for Indian startups.

PRODUCT: ${productName}
URL: ${productUrl}
DESCRIPTION: ${productDesc}
PLATFORM: ${platform.toUpperCase()}
${customAngle}

WRITE A NEW ${platform.toUpperCase()} POST following this format exactly:
${instructions.format}

RULES:
- Be specific to this actual product — no generic content
- Make it authentic, not salesy
- Optimized for engagement on ${platform}
- India-aware context where relevant
- Output ONLY the post text — no labels, no JSON, no preamble, no "Here is your post:"`;

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
          { role: 'system', content: 'You are a professional content writer. Output ONLY the requested post text with no preamble, labels, or explanation.' },
          { role: 'user', content: prompt }
        ],
        temperature: instructions.temp,
        max_tokens: instructions.maxTokens
      })
    });

    if (!groqResponse.ok) {
      const status = groqResponse.status;
      if (status === 429) {
        return { statusCode: 429, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Rate limit. Please wait a moment.' }) };
      }
      const errText = await groqResponse.text();
      return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: `AI error: ${errText.substring(0, 100)}` }) };
    }

    const data = await groqResponse.json();
    let content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Empty response from AI' }) };
    }

    // For Twitter: split by ||| separator into thread array
    if (platform === 'twitter') {
      const tweets = content.split('|||').map(t => t.trim()).filter(t => t.length > 0);
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ content, tweets })
      };
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ content })
    };

  } catch (e) {
    console.error('regenerate function error:', e);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: e.message || 'Internal error' })
    };
  }
};
