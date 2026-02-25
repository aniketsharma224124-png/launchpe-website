/* ─────────────────────────────────────────
   demo.js — LaunchPe Interactive Demo
───────────────────────────────────────── */

const DEMO_DATA = {
  'indiastartupmap.com': {
    ico: '🗺️', name: 'IndiaStartupMap', url: 'indiastartupmap.com',
    desc: 'State-wise Indian startup discovery map with 3 listing tiers and Razorpay-powered payments.',
    tags: ['Startup Directory', 'India · B2B', 'SaaS'],
    statusText: 'Analysed ✓',
    communities: [
      ['r/india', '800K members', '94%'],
      ['r/indianstartups', '120K members', '99%'],
      ['r/entrepreneur', '1.4M members', '87%'],
      ['r/startups', '900K members', '82%'],
      ['r/SaaS', '180K members', '79%'],
    ],
    commLabel: '15 communities · 6 platforms',
    redditPost: `Spent 3 weeks mapping every startup in India by state.\n\nKarnataka alone has 1,200+. UP has more than most people expect. The Northeast is almost invisible on the startup map.\n\nBuilt a free tool so anyone can browse by state — click any state to see who's building there.`,
    linkedinPost: `I shipped IndiaStartupMap in 14 days with zero team.\n\nNo funding. No agency. Just code and a clear problem.\n\nHere's what I learned about finding first users in India 👇\n\n100,000+ startups exist here. Most are invisible to each other...`,
    twitterPost: `I mapped every startup in India by state.\n\nFindings:\n→ Karnataka: 1,200+ (not just Bangalore)\n→ UP has more than you think\n→ Northeast: almost zero visibility\n→ Tier 2 cities are rising fast\n\nFull interactive map 🧵`,
    whatsappPost: `Built something useful — IndiaStartupMap shows every Indian startup by state. Free to browse, helpful for networking & BD. Listing starts ₹999. Check it: indiastartupmap.com`,
    calendar: [
      { n:1, d:'Today', dots:['#F59E0B','#3B82F6'], today:true },
      { n:2, d:'Thu', dots:['#10B981'] },
      { n:3, d:'Fri', dots:['#F59E0B','#10B981'] },
      { n:4, d:'Sat', dots:[] },
      { n:5, d:'Sun', dots:[] },
      { n:6, d:'Mon', dots:['#3B82F6','#F59E0B'] },
      { n:7, d:'Tue', dots:['#10B981'] },
      { n:8, d:'Wed', dots:['#F59E0B'] },
      { n:9, d:'Thu', dots:['#3B82F6'] },
      { n:10, d:'Fri', dots:['#10B981','#F59E0B'] },
    ],
    score: 78,
    scoreTitle: 'High Viral Potential',
    scoreDesc: 'Strong founder story with shareable data. Indian identity hook resonates on LinkedIn + Reddit. Launch both same day, Twitter thread 48 hrs later.'
  },
  'myresume.ai': {
    ico: '📄', name: 'MyResume AI', url: 'myresume.ai',
    desc: 'AI resume builder that generates ATS-optimised, job-specific resumes in under 2 minutes.',
    tags: ['Career Tool', 'AI · B2C', 'India Market'],
    statusText: 'Analysed ✓',
    communities: [
      ['r/developersIndia', '180K members', '99%'],
      ['r/cscareerquestions', '700K members', '94%'],
      ['r/india', '800K members', '91%'],
      ['r/jobs', '600K members', '88%'],
      ['r/resumes', '310K members', '96%'],
    ],
    commLabel: '14 communities · 6 platforms',
    redditPost: `Was getting 0 callbacks for 2 months. Rebuilt my resume with AI last week.\n\nGot 3 interview calls in 7 days.\n\nHere's exactly what changed — sharing in case anyone else is stuck in the same loop.`,
    linkedinPost: `0 callbacks for 8 weeks.\nThen I rebuilt my resume with AI.\n3 calls in 7 days.\n\nHere's what actually changed 👇\n\nMost Indian resumes make the same 4 ATS mistakes...`,
    twitterPost: `Reviewed 200 Indian tech resumes.\n\nThe same 4 mistakes appear 90% of the time:\n→ Wrong format for ATS scanners\n→ No numbers on achievements\n→ Skills section too long\n→ Generic objective statement\n\nThread on fixing all 4 🧵`,
    whatsappPost: `Bhai yeh try karo — myresume.ai. AI se 2 minute mein ATS-optimised resume. Mujhe 3x zyada callbacks mile. Free mein try kar sakte ho.`,
    calendar: [
      { n:1, d:'Today', dots:['#F59E0B','#3B82F6','#10B981'], today:true },
      { n:2, d:'Thu', dots:['#10B981','#F59E0B'] },
      { n:3, d:'Fri', dots:['#3B82F6'] },
      { n:4, d:'Sat', dots:['#10B981'] },
      { n:5, d:'Sun', dots:[] },
      { n:6, d:'Mon', dots:['#F59E0B','#3B82F6'] },
      { n:7, d:'Tue', dots:['#10B981','#F59E0B'] },
      { n:8, d:'Wed', dots:['#3B82F6'] },
      { n:9, d:'Thu', dots:['#10B981'] },
      { n:10, d:'Fri', dots:['#F59E0B','#3B82F6','#10B981'] },
    ],
    score: 93,
    scoreTitle: 'Very High Viral Potential',
    scoreDesc: 'Personal transformation story with proof. Massive job-anxiety market in India. Will spread fast in college placement WhatsApp groups and on LinkedIn.'
  },
  'zapbook.in': {
    ico: '⚡', name: 'ZapBook', url: 'zapbook.in',
    desc: 'One-click appointment booking with WhatsApp confirmation, UPI payment, zero back-and-forth.',
    tags: ['Booking SaaS', 'B2B · India', 'WhatsApp-native'],
    statusText: 'Analysed ✓',
    communities: [
      ['r/india', '800K members', '88%'],
      ['r/smallbusiness', '900K members', '91%'],
      ['r/freelance', '300K members', '87%'],
      ['r/Entrepreneur', '1.4M members', '80%'],
      ['r/digitalnomad', '450K members', '72%'],
    ],
    commLabel: '12 communities · 5 platforms',
    redditPost: `My CA was scheduling appointments over WhatsApp — 3 days of back-and-forth for a 30-min meeting.\n\nBuilt him a one-click booking page with UPI payments + WhatsApp confirmation.\n\n40% fewer no-shows in the first month. Sharing if anyone else needs this.`,
    linkedinPost: `Indian professionals are losing clients over WhatsApp scheduling chaos.\n\n"Tu free hai kab?" followed by 20 messages.\n\nBuilt a fix — one link, client picks slot, UPI paid, WhatsApp confirmation sent. Here's what happened when doctors tested it 👇`,
    twitterPost: `Indian professionals lose 3 hrs/week on appointment scheduling.\n\n"Tu free hai kab?" deserves better.\n\nBuilt WhatsApp-native booking for doctors, CAs, tutors.\n→ One link to share\n→ UPI-first payments\n→ Auto WhatsApp confirmations 🧵`,
    whatsappPost: `Doctor, CA, ya tutor ho? yeh useful hai. zapbook.in pe free booking page banao. Clients directly slot book karein, UPI payment + WhatsApp confirmation automatic.`,
    calendar: [
      { n:1, d:'Today', dots:['#F59E0B','#10B981'], today:true },
      { n:2, d:'Thu', dots:['#3B82F6'] },
      { n:3, d:'Fri', dots:['#F59E0B'] },
      { n:4, d:'Sat', dots:[] },
      { n:5, d:'Sun', dots:[] },
      { n:6, d:'Mon', dots:['#10B981','#F59E0B'] },
      { n:7, d:'Tue', dots:['#3B82F6','#10B981'] },
      { n:8, d:'Wed', dots:['#F59E0B'] },
      { n:9, d:'Thu', dots:['#3B82F6'] },
      { n:10, d:'Fri', dots:['#10B981','#F59E0B'] },
    ],
    score: 81,
    scoreTitle: 'High Viral Potential',
    scoreDesc: 'Universal frustration every Indian professional recognises. B2B2C loop — each booking page shows "Powered by ZapBook" creating organic client exposure.'
  }
};

const LOADING_STEPS = [
  ['Scanning website…',       'Reading product pages & extracting context'],
  ['Understanding product…',  'Identifying audience, problem, differentiation'],
  ['Mapping communities…',    'Matching against 2,400+ tracked communities'],
  ['Writing content…',        'Generating platform-native posts in your voice'],
  ['Building launch calendar…','Scheduling for optimal reach & timing'],
];

// ── Active tab tracking ────────────────────
let activeTab = 'communities';

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.demo-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab));
}

// ── Set example URL ────────────────────────
function setExample(url) {
  document.getElementById('demoInput').value = url;
}

// ── Run Demo ───────────────────────────────
function runDemo() {
  const rawInput = document.getElementById('demoInput').value.trim()
    .replace(/^https?:\/\//, '').split('/')[0].toLowerCase();

  const data = DEMO_DATA[rawInput] || DEMO_DATA['indiastartupmap.com'];

  const resultEl = document.getElementById('demoResult');
  const loaderEl = document.getElementById('demoLoader');
  const lmEl     = document.getElementById('lm');
  const lsEl     = document.getElementById('ls');

  // Reset
  resultEl.classList.remove('on');
  loaderEl.classList.remove('on');

  // Start loading sequence
  loaderEl.classList.add('on');
  let step = 0;
  lmEl.textContent = LOADING_STEPS[0][0];
  lsEl.textContent = LOADING_STEPS[0][1];

  const interval = setInterval(() => {
    step++;
    if (step < LOADING_STEPS.length) {
      lmEl.textContent = LOADING_STEPS[step][0];
      lsEl.textContent = LOADING_STEPS[step][1];
    } else {
      clearInterval(interval);
      loaderEl.classList.remove('on');
      renderResult(data);
    }
  }, 600);
}

// ── Render result ──────────────────────────
function renderResult(d) {
  // Product row
  document.getElementById('rIco').textContent  = d.ico;
  document.getElementById('rName').textContent = d.name;
  document.getElementById('rDesc').textContent = d.desc;
  document.getElementById('rTags').innerHTML   = d.tags.map(t => `<span class="ptag">${t}</span>`).join('');
  document.getElementById('rStatus').textContent = d.statusText;
  document.getElementById('rCommLabel').textContent = d.commLabel;

  // Communities
  document.getElementById('rComms').innerHTML = d.communities.map(([name, size, fit]) => `
    <div class="comm-row">
      <span class="comm-name">${name}</span>
      <span class="comm-size">${size}</span>
      <span class="comm-fit">${fit} fit</span>
    </div>`).join('');

  // Posts
  document.getElementById('rReddit').textContent   = d.redditPost;
  document.getElementById('rLinkedin').innerHTML   = d.linkedinPost.replace(/\n/g, '<br>');
  document.getElementById('rTwitter').innerHTML    = d.twitterPost.replace(/\n/g, '<br>');
  document.getElementById('rWhatsapp').textContent = d.whatsappPost;

  // Calendar
  document.getElementById('rCal').innerHTML = d.calendar.map(day => `
    <div class="cal-day ${day.today ? 'today' : ''}">
      <div class="cal-n">${day.n}</div>
      <div class="cal-d">${day.d}</div>
      <div class="cal-dots">
        ${day.dots.map(c => `<div class="cal-dot" style="background:${c}"></div>`).join('')}
      </div>
    </div>`).join('');

  // Score
  const circumference = 2 * Math.PI * 28; // r=28, C≈175.9
  const offset = circumference - (d.score / 100) * circumference;
  document.getElementById('rScoreNum').textContent = d.score;
  document.getElementById('rScoreArc').setAttribute('stroke-dasharray', circumference);
  document.getElementById('rScoreArc').setAttribute('stroke-dashoffset', offset);
  document.getElementById('rScoreTitle').textContent = d.scoreTitle;
  document.getElementById('rScoreDesc').textContent  = d.scoreDesc;

  // Show
  const result = document.getElementById('demoResult');
  result.classList.add('on');
  setTimeout(() => {
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 80);

  // Reset to first tab
  switchTab('communities');
}

// ── Enter key for demo input ───────────────
document.getElementById('demoInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') runDemo();
});
