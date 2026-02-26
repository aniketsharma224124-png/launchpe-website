/* ─────────────────────────────────────────
   demo.js — LaunchPe Demo Engine v2
   Features: platform previews, inline edit,
   copy, Hinglish toggle, interactive calendar
───────────────────────────────────────── */

const DATA = {
    'indiastartupmap.com': {
        ico: '🗺️', name: 'IndiaStartupMap', url: 'indiastartupmap.com',
        desc: 'State-wise startup discovery map — premium map spots, 3 listing tiers, Razorpay payments.',
        tags: ['Startup Directory', 'India · B2B', 'SaaS'],
        count: '47 matches · 6 platforms',
        rMeta: '12 subreddits · 3 post angles',
        rComms: [['r/india', '800K', '94%'], ['r/indianstartups', '120K', '99%'], ['r/entrepreneur', '1.4M', '87%']],
        rPost: {
            title: 'I mapped every startup in India by state — here\'s the data',
            body: 'Spent 3 weeks mapping every startup in India by state. Karnataka alone has 1,200+. UP has more than most people expect. The Northeast is almost invisible.\n\nBuilt a free tool so anyone can browse by state — click any state to see who\'s building there.',
            sub: 'r/indianstartups',
            upvotes: '342'
        },
        liPost: {
            body: 'I shipped IndiaStartupMap in 14 days with zero team.\n\nNo funding. No agency. Just code and a clear problem.\n\nHere\'s what I learned about finding first users in India 👇\n\n100,000+ startups exist here. Most are invisible to each other.\n\nSo I mapped them — all of them — by state.\n\nKarnataka: 1,200+\nMaharashtra: 980+\nDelhi NCR: 870+\nUP: More than you\'d think.\n\nThe tool is free to browse. Listing starts at ₹999.',
            name: 'You',
            role: 'Founder at IndiaStartupMap',
            likes: 847,
            comments: 124,
            reposts: 89
        },
        twPost: {
            thread: [
                'I mapped every startup in India by state.',
                'Findings:\n→ Karnataka: 1,200+ (not just Bangalore)\n→ UP has more than you think\n→ Northeast: almost zero visibility\n→ Tier 2 cities are rising fast',
                'Built this as a free tool. Click any state on the map and see who\'s building there.\n\nindiastartupmap.com',
                'If you\'re a founder in India, list your startup.\n\nFree tier available. Premium spots from ₹999.\n\nRT if you want more tools like this for the Indian ecosystem 🇮🇳'
            ],
            handle: '@yourhandle'
        },
        waPost: {
            en: 'Built something useful — IndiaStartupMap shows every Indian startup by state. Free to browse, good for networking. Listing is ₹999. Check it: indiastartupmap.com',
            hi: 'Yaar ek useful cheez banayi hai — IndiaStartupMap pe har state ke startups dikh rahe hain. Free mein browse karo, networking ke liye badhiya hai. Listing ₹999 se start. Dekh le: indiastartupmap.com'
        },
        waComms: [['Startup India groups', '98%'], ['IIT/IIM Alumni groups', '91%'], ['VC / Angel groups', '88%']],
        cal: [
            {
                n: 1, d: 'Today', label: 'Mon', dots: ['#FF4500', '#0A66C2'], today: true,
                posts: [
                    { platform: 'Reddit', sub: 'r/indianstartups', type: 'I Built This', color: '#FF4500' },
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Founder Story', color: '#0A66C2' }
                ]
            },
            {
                n: 2, d: 'Tue', label: 'Tue', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Data Insight', color: '#0A66C2' }]
            },
            {
                n: 3, d: 'Wed', label: 'Wed', dots: ['#FF4500', '#0F1419'],
                posts: [
                    { platform: 'Reddit', sub: 'r/india', type: 'Discussion', color: '#FF4500' },
                    { platform: 'Twitter', sub: 'Thread', type: 'Data Thread', color: '#0F1419' }
                ]
            },
            {
                n: 4, d: 'Thu', label: 'Thu', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Hot Take', color: '#0A66C2' }]
            },
            {
                n: 5, d: 'Fri', label: 'Fri', dots: ['#25D366'],
                posts: [{ platform: 'WhatsApp', sub: '5 groups', type: 'Casual Share', color: '#25D366' }]
            },
            {
                n: 7, d: 'Sun', label: 'Sun', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/entrepreneur', type: 'Lesson Learned', color: '#FF4500' }]
            },
            {
                n: 10, d: 'Wed', label: 'Wed', dots: ['#0A66C2', '#FF4500'],
                posts: [
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Product Demo', color: '#0A66C2' },
                    { platform: 'Reddit', sub: 'r/startups', type: 'Show & Tell', color: '#FF4500' }
                ]
            },
            {
                n: 14, d: 'Sun', label: 'Sun', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/SideProject', type: 'Progress Update', color: '#FF4500' }]
            },
            {
                n: 21, d: 'Sun', label: 'Sun', dots: ['#0A66C2', '#0F1419'],
                posts: [
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Milestone Post', color: '#0A66C2' },
                    { platform: 'Twitter', sub: 'Thread', type: 'Growth Thread', color: '#0F1419' }
                ]
            },
            {
                n: 30, d: 'Fri', label: 'Fri', dots: ['#2D6A4F'],
                posts: [{ platform: 'Product Hunt', sub: 'Launch', type: 'PH Launch Day', color: '#2D6A4F' }]
            }
        ],
        score: 78, sTitle: 'High Viral Potential',
        sDesc: 'Strong founder story, shareable data, clear Indian identity hook. Launch Reddit + LinkedIn same day — Twitter thread 48 hrs later for maximum reach.'
    },
    'myresume.ai': {
        ico: '📄', name: 'MyResume AI', url: 'myresume.ai',
        desc: 'AI resume builder generating ATS-optimised, job-specific resumes in under 2 minutes.',
        tags: ['Career Tool', 'AI · B2C', 'India Market'],
        count: '52 matches · 6 platforms',
        rMeta: '14 subreddits · 3 post angles',
        rComms: [['r/developersIndia', '180K', '99%'], ['r/cscareerquestions', '700K', '94%'], ['r/india', '800K', '91%']],
        rPost: {
            title: '0 callbacks for 2 months. Rebuilt my resume with AI. 3 interviews in a week.',
            body: 'Was getting 0 callbacks for 2 months. Decided to try AI to rebuild my resume from scratch.\n\nGot 3 interview calls the next week.\n\nHere\'s exactly what changed — the AI fixed my formatting, added metrics to every bullet, and tailored it per job posting. Sharing what worked in case others are stuck.',
            sub: 'r/developersIndia',
            upvotes: '891'
        },
        liPost: {
            body: '0 callbacks for 8 weeks.\nThen I rebuilt my resume with AI.\n3 calls in 7 days.\n\nHere\'s exactly what changed 👇\n\nMost Indian resumes make the same 4 ATS mistakes:\n1. PDF formatting that scanners can\'t read\n2. No quantified achievements\n3. Skills section longer than experience\n4. Generic objective statement\n\nI used myresume.ai to fix all 4 in under 2 minutes.\n\nThe difference was immediate. Recruiter literally said "this is one of the cleanest resumes I\'ve seen."\n\nFree to try. No catch.',
            name: 'You',
            role: 'Founder at MyResume AI',
            likes: 1243,
            comments: 287,
            reposts: 156
        },
        twPost: {
            thread: [
                'Reviewed 200 Indian tech resumes.\n\nThe same 4 mistakes appear 90% of the time.',
                '→ Wrong format for ATS scanners\n→ No numbers on achievements\n→ Skills section too long\n→ Generic objective statement\n\nHere\'s how to fix each one 🧵',
                'Mistake 1: PDF formatting.\n\nMost ATS systems parse your resume as plain text. Fancy layouts = broken parsing.\n\nFix: Use a clean, single-column format with standard headings.',
                'Built a free tool that fixes all 4 automatically.\n\nmyresume.ai — paste your resume, get an ATS-optimised version in 2 minutes.\n\nAlready used by 10K+ Indian devs.'
            ],
            handle: '@yourhandle'
        },
        waPost: {
            en: 'Hey, found a useful tool — myresume.ai builds ATS-optimised resumes in 2 minutes with AI. Got 3x more callbacks after using it. Free to try.',
            hi: 'Bhai yeh tool try karo — myresume.ai. Resume 2 minute mein AI se banao, ATS-optimised. Mere callbacks 3x ho gaye. Free mein try kar sakte ho.'
        },
        waComms: [['Placement cell groups', '99%'], ['Dev community groups', '96%'], ['College batch groups', '93%']],
        cal: [
            {
                n: 1, d: 'Today', label: 'Mon', dots: ['#FF4500', '#0A66C2', '#25D366'], today: true,
                posts: [
                    { platform: 'Reddit', sub: 'r/developersIndia', type: 'I Built This', color: '#FF4500' },
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Transformation Story', color: '#0A66C2' },
                    { platform: 'WhatsApp', sub: '8 groups', type: 'Casual Share', color: '#25D366' }
                ]
            },
            {
                n: 2, d: 'Tue', label: 'Tue', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Data Insight', color: '#0A66C2' }]
            },
            {
                n: 3, d: 'Wed', label: 'Wed', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/cscareerquestions', type: 'Helpful Post', color: '#FF4500' }]
            },
            {
                n: 5, d: 'Fri', label: 'Fri', dots: ['#0F1419'],
                posts: [{ platform: 'Twitter', sub: 'Thread', type: 'Tips Thread', color: '#0F1419' }]
            },
            {
                n: 7, d: 'Sun', label: 'Sun', dots: ['#FF4500', '#25D366'],
                posts: [
                    { platform: 'Reddit', sub: 'r/india', type: 'Story Post', color: '#FF4500' },
                    { platform: 'WhatsApp', sub: '5 groups', type: 'Results Share', color: '#25D366' }
                ]
            },
            {
                n: 10, d: 'Wed', label: 'Wed', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Milestone', color: '#0A66C2' }]
            },
            {
                n: 14, d: 'Sun', label: 'Sun', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/resumes', type: 'Tool Share', color: '#FF4500' }]
            },
            {
                n: 18, d: 'Thu', label: 'Thu', dots: ['#0A66C2', '#FF4500'],
                posts: [
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Case Study', color: '#0A66C2' },
                    { platform: 'Reddit', sub: 'r/jobs', type: 'Resource', color: '#FF4500' }
                ]
            },
            {
                n: 25, d: 'Thu', label: 'Thu', dots: ['#0F1419'],
                posts: [{ platform: 'Twitter', sub: 'Thread', type: 'Results Thread', color: '#0F1419' }]
            },
            {
                n: 30, d: 'Tue', label: 'Tue', dots: ['#2D6A4F'],
                posts: [{ platform: 'Product Hunt', sub: 'Launch', type: 'PH Launch Day', color: '#2D6A4F' }]
            }
        ],
        score: 93, sTitle: 'Very High Viral Potential',
        sDesc: 'Personal transformation story with proof, massive job-anxiety market, extremely shareable results. Will spread fast in college placement WhatsApp groups and on LinkedIn.'
    },
    'zapbook.in': {
        ico: '⚡', name: 'ZapBook', url: 'zapbook.in',
        desc: 'One-click appointment booking — WhatsApp confirmation, UPI payment, zero back-and-forth.',
        tags: ['Booking SaaS', 'B2B · India', 'WhatsApp-native'],
        count: '38 matches · 5 platforms',
        rMeta: '10 subreddits · 3 post angles',
        rComms: [['r/india', '800K', '88%'], ['r/smallbusiness', '900K', '91%'], ['r/freelance', '300K', '87%']],
        rPost: {
            title: 'My CA spent 3 days scheduling a 30-min meeting. Built him a fix.',
            body: 'My CA was scheduling appointments over WhatsApp — 3 days of back-and-forth for a 30-min meeting. "Tu free hai kab?" × 20 messages.\n\nBuilt him a one-click booking page: client picks a slot, pays via UPI, gets WhatsApp confirmation automatically.\n\n40% fewer no-shows in the first month. Now sharing it for anyone else who needs it.',
            sub: 'r/india',
            upvotes: '456'
        },
        liPost: {
            body: 'Indian professionals are losing clients over WhatsApp scheduling chaos.\n\n"Tu free hai kab?" followed by 20 messages.\n\nBuilt a fix — one link, client picks slot, UPI paid, WhatsApp confirmation sent automatically.\n\nHere\'s what happened when 12 doctors tested it for a month 👇\n\n→ 40% fewer no-shows\n→ 3 hours saved per week\n→ Zero scheduling complaints\n\nIt\'s free to set up: zapbook.in',
            name: 'You',
            role: 'Founder at ZapBook',
            likes: 634,
            comments: 98,
            reposts: 67
        },
        twPost: {
            thread: [
                'Indian professionals lose 3 hrs/week on appointment scheduling.\n\n"Tu free hai kab?" deserves better.',
                'Built a WhatsApp-native booking page for doctors, CAs, tutors.\n\n→ One link to share\n→ UPI-first payments\n→ Auto WhatsApp confirmations\n→ Zero back-and-forth',
                '12 doctors tested it for a month.\n\nResults:\n• 40% fewer no-shows\n• 3 hours saved per week\n• Patients loved the simplicity',
                'Free to set up. No credit card needed.\n\nzapbook.in\n\nIf you know a doctor/CA/tutor who\'d benefit, tag them 👇'
            ],
            handle: '@yourhandle'
        },
        waPost: {
            en: 'Hey — if you\'re a doctor, CA, or tutor, this might be useful. zapbook.in lets you create a free booking page. Clients pick a slot, pay via UPI, get WhatsApp confirmation automatically. Zero back-and-forth.',
            hi: 'Agar tum doctor, CA, ya tutor ho — yeh useful hai. zapbook.in pe free booking page banao. Clients directly slot book karein, UPI se payment, WhatsApp pe confirmation automatic. Koi back-and-forth nahi.'
        },
        waComms: [['CA & Tax groups', '96%'], ['Doctor community groups', '94%'], ['Freelancer groups', '91%']],
        cal: [
            {
                n: 1, d: 'Today', label: 'Mon', dots: ['#FF4500', '#25D366'], today: true,
                posts: [
                    { platform: 'Reddit', sub: 'r/india', type: 'I Built This', color: '#FF4500' },
                    { platform: 'WhatsApp', sub: '6 groups', type: 'Casual Share', color: '#25D366' }
                ]
            },
            {
                n: 3, d: 'Wed', label: 'Wed', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Founder Story', color: '#0A66C2' }]
            },
            {
                n: 5, d: 'Fri', label: 'Fri', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/smallbusiness', type: 'Tool Share', color: '#FF4500' }]
            },
            {
                n: 7, d: 'Sun', label: 'Sun', dots: ['#25D366'],
                posts: [{ platform: 'WhatsApp', sub: '4 groups', type: 'Results Share', color: '#25D366' }]
            },
            {
                n: 10, d: 'Wed', label: 'Wed', dots: ['#0A66C2', '#FF4500'],
                posts: [
                    { platform: 'LinkedIn', sub: 'Feed post', type: 'Case Study', color: '#0A66C2' },
                    { platform: 'Reddit', sub: 'r/freelance', type: 'Tool Recommendation', color: '#FF4500' }
                ]
            },
            {
                n: 14, d: 'Sun', label: 'Sun', dots: ['#FF4500'],
                posts: [{ platform: 'Reddit', sub: 'r/Entrepreneur', type: 'Lesson Learned', color: '#FF4500' }]
            },
            {
                n: 17, d: 'Wed', label: 'Wed', dots: ['#0F1419'],
                posts: [{ platform: 'Twitter', sub: 'Thread', type: 'Problem Thread', color: '#0F1419' }]
            },
            {
                n: 21, d: 'Sun', label: 'Sun', dots: ['#0A66C2'],
                posts: [{ platform: 'LinkedIn', sub: 'Feed post', type: 'Milestone', color: '#0A66C2' }]
            },
            {
                n: 25, d: 'Thu', label: 'Thu', dots: ['#FF4500', '#25D366'],
                posts: [
                    { platform: 'Reddit', sub: 'r/india', type: 'Update Post', color: '#FF4500' },
                    { platform: 'WhatsApp', sub: '6 groups', type: 'Testimonial', color: '#25D366' }
                ]
            },
            {
                n: 30, d: 'Tue', label: 'Tue', dots: ['#2D6A4F'],
                posts: [{ platform: 'Product Hunt', sub: 'Launch', type: 'PH Launch Day', color: '#2D6A4F' }]
            }
        ],
        score: 81, sTitle: 'High Viral Potential',
        sDesc: 'Universal frustration every Indian recognises. Strong B2B2C loop — each professional\'s booking page shows "Powered by ZapBook" creating organic client exposure.'
    }
};

// ── Current state ─────────────────────────
let currentData = null;
let hinglishMode = false;
let selectedCalDay = null;

function pick(url) {
    document.getElementById('urlInput').value = url;
}

function runDemo() {
    const raw = document.getElementById('urlInput').value.trim()
        .replace(/https?:\/\//, '').split('/')[0].toLowerCase();
    const d = DATA[raw] || DATA['indiastartupmap.com'];
    currentData = d;
    hinglishMode = false;

    document.getElementById('result').classList.remove('on');
    document.getElementById('loader').classList.remove('on');

    const steps = [
        ['Scanning website...', 'Extracting product context'],
        ['Understanding product...', 'Identifying audience segments'],
        ['Mapping communities...', 'Analysing 2,400+ communities'],
        ['Writing content...', 'Generating platform-native posts'],
        ['Building calendar...', 'Scheduling for maximum reach'],
    ];

    const loader = document.getElementById('loader');
    loader.classList.add('on');
    let i = 0;

    const iv = setInterval(() => {
        if (i < steps.length) {
            document.getElementById('lm').textContent = steps[i][0];
            document.getElementById('ls').textContent = steps[i][1];
            i++;
        } else {
            clearInterval(iv);
            loader.classList.remove('on');
            populateResult(d);
        }
    }, 560);
}

function populateResult(d) {
    // Product info
    document.getElementById('pIco').textContent = d.ico;
    document.getElementById('pName').textContent = d.name;
    document.getElementById('pDesc').textContent = d.desc;
    document.getElementById('pTags').innerHTML = d.tags.map(t => `<span class="ptag">${t}</span>`).join('');
    document.getElementById('comCount').textContent = d.count;
    document.getElementById('rMeta').textContent = d.rMeta;

    // Reddit communities
    document.getElementById('rComms').innerHTML = d.rComms.map(([n, s, p]) =>
        `<div class="c-row"><span class="cn">${n}</span><span class="cs">${s}</span><span class="cp">${p}</span></div>`
    ).join('');

    // Reddit post — real card
    document.getElementById('redditCard').innerHTML = renderRedditCard(d.rPost);

    // LinkedIn post — real card
    document.getElementById('linkedinCard').innerHTML = renderLinkedInCard(d.liPost);

    // Twitter post — thread
    document.getElementById('twitterCard').innerHTML = renderTwitterThread(d.twPost);

    // WhatsApp
    document.getElementById('waComms').innerHTML = d.waComms.map(([n, p]) =>
        `<div class="c-row"><span class="cn" style="font-family:var(--ff)">${n}</span><span class="cp">${p}</span></div>`
    ).join('');
    document.getElementById('whatsappCard').innerHTML = renderWhatsAppCard(d.waPost);
    updateHinglishToggle();

    // Calendar
    renderCalendar(d.cal);

    // Viral score
    document.getElementById('vNum').textContent = d.score;
    document.getElementById('vTitle').textContent = d.sTitle;
    document.getElementById('vDesc').textContent = d.sDesc;
    const offset = 163 - (d.score / 100) * 163;
    document.getElementById('scoreArc').setAttribute('stroke-dashoffset', offset);

    document.getElementById('result').classList.add('on');
    setTimeout(() => {
        document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// ═══════════════════════════════════════
// PLATFORM PREVIEW CARDS
// ═══════════════════════════════════════

function renderRedditCard(r) {
    return `
    <div class="reddit-preview">
      <div class="reddit-votes">
        <button class="reddit-arrow reddit-up">▲</button>
        <span class="reddit-score">${r.upvotes}</span>
        <button class="reddit-arrow">▼</button>
      </div>
      <div class="reddit-content">
        <div class="reddit-sub-line">
          <span class="reddit-sub-icon" style="background:#FF4500">r/</span>
          <span class="reddit-sub-name">${r.sub}</span>
          <span class="reddit-dot">·</span>
          <span class="reddit-meta">Posted by u/you · just now</span>
        </div>
        <div class="reddit-title" contenteditable="true" data-post-id="reddit-title">${r.title}</div>
        <div class="reddit-body" contenteditable="true" data-post-id="reddit-body">${r.body.replace(/\n/g, '<br>')}</div>
        <div class="reddit-actions">
          <span class="reddit-action">💬 Comments</span>
          <span class="reddit-action">↗ Share</span>
          <span class="reddit-action">⭐ Save</span>
        </div>
      </div>
      <div class="post-toolbar">
        <button class="tool-btn copy-btn" onclick="copyPostText('reddit-body')">📋 Copy</button>
        <button class="tool-btn regen-btn" onclick="regeneratePost('reddit')">↻ Regenerate</button>
      </div>
    </div>`;
}

function renderLinkedInCard(li) {
    return `
    <div class="li-preview">
      <div class="li-header">
        <div class="li-avatar">${li.name.charAt(0)}</div>
        <div class="li-author">
          <div class="li-author-name">${li.name} <span class="li-1st">· 1st</span></div>
          <div class="li-author-role">${li.role}</div>
          <div class="li-author-time">Just now · 🌐</div>
        </div>
        <span class="li-follow">+ Follow</span>
      </div>
      <div class="li-body" contenteditable="true" data-post-id="linkedin-body">${li.body.replace(/\n/g, '<br>')}</div>
      <div class="li-engagement">
        <div class="li-reactions">
          <span class="li-reaction-icons">👍❤️🎉</span>
          <span class="li-reaction-count">${li.likes.toLocaleString()}</span>
        </div>
        <div class="li-comment-count">${li.comments} comments · ${li.reposts} reposts</div>
      </div>
      <div class="li-action-bar">
        <button class="li-action">👍 Like</button>
        <button class="li-action">💬 Comment</button>
        <button class="li-action">↗ Repost</button>
        <button class="li-action">📨 Send</button>
      </div>
      <div class="post-toolbar">
        <button class="tool-btn copy-btn" onclick="copyPostText('linkedin-body')">📋 Copy</button>
        <button class="tool-btn regen-btn" onclick="regeneratePost('linkedin')">↻ Regenerate</button>
      </div>
    </div>`;
}

function renderTwitterThread(tw) {
    const tweets = tw.thread.map((text, i) => `
    <div class="tw-tweet ${i < tw.thread.length - 1 ? 'tw-has-thread' : ''}">
      ${i > 0 ? '<div class="tw-thread-line-top"></div>' : ''}
      ${i < tw.thread.length - 1 ? '<div class="tw-thread-line-bottom"></div>' : ''}
      <div class="tw-avatar">Y</div>
      <div class="tw-tweet-content">
        <div class="tw-tweet-header">
          <span class="tw-name">You</span>
          <span class="tw-handle">${tw.handle}</span>
          <span class="tw-dot">·</span>
          <span class="tw-time">now</span>
          ${i === 0 ? '<span class="tw-thread-label">Thread</span>' : ''}
        </div>
        <div class="tw-tweet-body" contenteditable="true" data-post-id="twitter-${i}">${text.replace(/\n/g, '<br>')}</div>
        <div class="tw-tweet-actions">
          <span class="tw-act">💬 ${Math.floor(Math.random() * 40 + 5)}</span>
          <span class="tw-act">🔁 ${Math.floor(Math.random() * 80 + 20)}</span>
          <span class="tw-act">❤️ ${Math.floor(Math.random() * 300 + 50)}</span>
          <span class="tw-act">📊 ${(Math.random() * 40 + 10).toFixed(1)}K</span>
        </div>
      </div>
    </div>`).join('');

    return `
    <div class="tw-preview">
      ${tweets}
      <div class="post-toolbar">
        <button class="tool-btn copy-btn" onclick="copyPostText('twitter-0')">📋 Copy thread</button>
        <button class="tool-btn regen-btn" onclick="regeneratePost('twitter')">↻ Regenerate</button>
      </div>
    </div>`;
}

function renderWhatsAppCard(wa) {
    const text = hinglishMode ? wa.hi : wa.en;
    return `
    <div class="wa-preview">
      <div class="wa-bubble">
        <div class="wa-text" contenteditable="true" data-post-id="whatsapp-body">${text}</div>
        <div class="wa-time">Just now ✓✓</div>
      </div>
      <div class="post-toolbar">
        <button class="tool-btn copy-btn" onclick="copyPostText('whatsapp-body')">📋 Copy</button>
        <button class="tool-btn regen-btn" onclick="regeneratePost('whatsapp')">↻ Regenerate</button>
      </div>
    </div>`;
}

// ═══════════════════════════════════════
// COPY TO CLIPBOARD + TOAST
// ═══════════════════════════════════════

function copyPostText(postId) {
    const el = document.querySelector(`[data-post-id="${postId}"]`);
    if (!el) return;
    const text = el.innerText || el.textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋');
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Copied to clipboard! 📋');
    });
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('show');
    void toast.offsetWidth; // trigger reflow
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

// ═══════════════════════════════════════
// REGENERATE (simulated)
// ═══════════════════════════════════════

function regeneratePost(platform) {
    const variations = {
        reddit: [
            'Here\'s a different angle — focused on the data story rather than the build story. Emphasising surprising findings.',
            'Took a more personal approach — leading with the frustration that inspired the build, then the payoff.',
            'Rewritten as a question-led post — engages comments faster on Reddit.',
        ],
        linkedin: [
            'Restructured with a stronger hook and added a clear CTA at the end. More metrics-driven.',
            'Shortened to 8 lines — optimal for mobile LinkedIn feed. Punchier, less scroll needed.',
            'Added a "hot take" angle — slightly contrarian position to drive engagement and comments.',
        ],
        twitter: [
            'Thread rewritten with a more provocative hook. First tweet now designed to stop the scroll.',
            'Changed to a list-format thread — each tweet is a standalone insight. Higher save rate.',
            'Narrative thread version — tells the build story chronologically. Better for founder audiences.',
        ],
        whatsapp: [
            'Made it shorter and more conversational. Feels like a genuine friend recommendation.',
            'Added a personal proof point — "I used this and..." format drives more clicks.',
            'Restructured with the link first — in groups, people often don\'t read past line 2.',
        ]
    };

    const v = variations[platform];
    const msg = v[Math.floor(Math.random() * v.length)];
    showToast(`↻ Regenerated — ${msg.split('.')[0]}.`);
}

// ═══════════════════════════════════════
// HINGLISH TOGGLE
// ═══════════════════════════════════════

function toggleHinglish() {
    hinglishMode = !hinglishMode;
    updateHinglishToggle();
    if (currentData) {
        document.getElementById('whatsappCard').innerHTML = renderWhatsAppCard(currentData.waPost);
    }
}

function updateHinglishToggle() {
    const toggle = document.getElementById('hinglishToggle');
    if (toggle) {
        toggle.classList.toggle('active', hinglishMode);
        const label = toggle.querySelector('.toggle-label');
        if (label) label.textContent = hinglishMode ? 'Hinglish' : 'English';
    }
}

// ═══════════════════════════════════════
// INTERACTIVE CALENDAR
// ═══════════════════════════════════════

function renderCalendar(cal) {
    selectedCalDay = cal[0]; // default to today

    const grid = document.getElementById('calGrid');
    grid.innerHTML = cal.map((day, idx) => `
    <div class="cal-c ${day.today ? 'today' : ''} ${idx === 0 ? 'cal-selected' : ''}" 
         onclick="selectCalDay(${idx})" data-cal-idx="${idx}">
      <div class="cn2">${day.n}</div>
      <div class="cd">${day.d}</div>
      <div class="cdots">${day.dots.map(c => `<div class="cdot" style="background:${c}"></div>`).join('')}</div>
    </div>`).join('');

    renderCalDetail(cal[0]);
}

function selectCalDay(idx) {
    const cal = currentData.cal;
    selectedCalDay = cal[idx];

    // Update selection UI
    document.querySelectorAll('.cal-c').forEach(el => el.classList.remove('cal-selected'));
    document.querySelector(`[data-cal-idx="${idx}"]`)?.classList.add('cal-selected');

    renderCalDetail(cal[idx]);
}

function renderCalDetail(day) {
    const detail = document.getElementById('calDetail');
    if (!detail) return;

    if (!day.posts || day.posts.length === 0) {
        detail.innerHTML = `<div class="cal-detail-empty">No posts scheduled for Day ${day.n}.</div>`;
        return;
    }

    detail.innerHTML = `
    <div class="cal-detail-header">
      <div class="cal-detail-day">Day ${day.n}</div>
      <div class="cal-detail-label">${day.posts.length} post${day.posts.length > 1 ? 's' : ''} scheduled</div>
    </div>
    <div class="cal-detail-posts">
      ${day.posts.map(p => `
        <div class="cal-post-item">
          <div class="cal-post-dot" style="background:${p.color}"></div>
          <div class="cal-post-info">
            <div class="cal-post-platform">${p.platform}</div>
            <div class="cal-post-sub">${p.sub} · ${p.type}</div>
          </div>
          <div class="cal-post-time">${getPostTime(p.platform)}</div>
        </div>`).join('')}
    </div>`;
}

function getPostTime(platform) {
    const times = {
        'Reddit': '10:00 AM',
        'LinkedIn': '9:00 AM',
        'Twitter': '12:30 PM',
        'WhatsApp': '7:00 PM',
        'Product Hunt': '12:01 AM PST'
    };
    return times[platform] || '10:00 AM';
}
