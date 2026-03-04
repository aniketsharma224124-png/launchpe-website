/* ─────────────────────────────────────────
   demo.js — LaunchPe v4
   • Groq key lives ONLY in Netlify env vars
   • Real website scraping via /.netlify/functions/analyze
   • Unlimited regeneration for all paid plans
   • Custom angle: "describe what you want to post"
   • Platform-native previews, Hinglish toggle
   • Interactive calendar with post buttons
─────────────────────────────────────────── */

// ── Secure API endpoints (no key in frontend)
const API_BASE = '/.netlify/functions';

// ── Real community links
const COMMUNITY_LINKS = {
  'r/india':               'https://www.reddit.com/r/india/',
  'r/indianstartups':      'https://www.reddit.com/r/indianstartups/',
  'r/entrepreneur':        'https://www.reddit.com/r/entrepreneur/',
  'r/developersIndia':     'https://www.reddit.com/r/developersIndia/',
  'r/cscareerquestions':   'https://www.reddit.com/r/cscareerquestions/',
  'r/smallbusiness':       'https://www.reddit.com/r/smallbusiness/',
  'r/freelance':           'https://www.reddit.com/r/freelance/',
  'r/startups':            'https://www.reddit.com/r/startups/',
  'r/SideProject':         'https://www.reddit.com/r/SideProject/',
  'r/SaaS':                'https://www.reddit.com/r/SaaS/',
  'r/Entrepreneur':        'https://www.reddit.com/r/Entrepreneur/',
  'Startup India groups':  'https://t.me/startupindia',
  'IIT/IIM Alumni groups': 'https://t.me/iitalumni',
  'VC / Angel groups':     'https://t.me/indianvcangels',
  'Placement cell groups': 'https://t.me/placementcells',
  'Dev community groups':  'https://t.me/devcommunityindia',
  'CA & Tax groups':       'https://t.me/cataxindia',
  'Doctor community groups':'https://t.me/doctorsindia',
  'Freelancer groups':     'https://t.me/freelancersindia',
  'Indian Startups':       'https://t.me/indianstartups',
  'SaaS India':            'https://t.me/saaborindia'
};

// ── Demo data (shown to free/guest users)
const DATA = {
  'indiastartupmap.com': {
    ico:'🗺️', name:'IndiaStartupMap', url:'indiastartupmap.com',
    desc:'State-wise startup discovery map — premium map spots, 3 listing tiers, Razorpay payments.',
    tags:['Startup Directory','India · B2B','SaaS'],
    count:'47 matches · 6 platforms', rMeta:'12 subreddits · 3 post angles',
    rComms:[['r/india','800K','94%'],['r/indianstartups','120K','99%'],['r/entrepreneur','1.4M','87%']],
    rPost:{
      title:"I mapped every startup in India by state — here's the data",
      body:"Spent 3 weeks mapping every startup in India by state. Karnataka alone has 1,200+. UP has more than most expect. The Northeast is almost invisible.\n\nBuilt a free tool so anyone can browse by state — click any state to see who's building there.",
      sub:'r/indianstartups', upvotes:'342'
    },
    liPost:{
      body:"I shipped IndiaStartupMap in 14 days with zero team.\n\nNo funding. No agency. Just code and a clear problem.\n\nHere's what I learned about finding first users in India 👇\n\n100,000+ startups exist here. Most are invisible to each other.\n\nSo I mapped them — all of them — by state.\n\nKarnataka: 1,200+\nMaharashtra: 980+\nDelhi NCR: 870+\n\nThe tool is free to browse. Listing starts at ₹999.",
      name:'You', role:'Founder at IndiaStartupMap', likes:847, comments:124, reposts:89
    },
    twPost:{
      thread:[
        'I mapped every startup in India by state.',
        'Findings:\n→ Karnataka: 1,200+ (not just Bangalore)\n→ UP has more than you think\n→ Northeast: almost zero visibility\n→ Tier 2 cities are rising fast',
        'Built this as a free tool. Click any state to see who\'s building there.\n\nindiastartupmap.com',
        'If you\'re a founder in India, list your startup.\n\nFree tier available. Premium spots ₹999.\n\nRT if you want more tools like this 🇮🇳'
      ],
      handle:'@yourhandle'
    },
    waPost:{
      en:"Built something useful — IndiaStartupMap shows every Indian startup by state. Free to browse, good for networking. Listing is ₹999. Check it: indiastartupmap.com",
      hi:"Yaar ek useful cheez banayi hai — IndiaStartupMap pe har state ke startups dikh rahe hain. Free mein browse karo, networking ke liye badhiya hai. Listing ₹999 se start. Dekh le: indiastartupmap.com"
    },
    waComms:[['Startup India groups','98%'],['IIT/IIM Alumni groups','91%'],['VC / Angel groups','88%']],
    score:78, sTitle:'High Viral Potential',
    sDesc:'Strong founder story, shareable data, clear Indian identity hook. Launch Reddit + LinkedIn same day — Twitter thread 48 hrs later for maximum reach.'
  },
  'myresume.ai': {
    ico:'📄', name:'MyResume AI', url:'myresume.ai',
    desc:'AI resume builder generating ATS-optimised, job-specific resumes in under 2 minutes.',
    tags:['Career Tool','AI · B2C','India Market'],
    count:'52 matches · 6 platforms', rMeta:'14 subreddits · 3 post angles',
    rComms:[['r/developersIndia','180K','99%'],['r/cscareerquestions','700K','94%'],['r/india','800K','91%']],
    rPost:{
      title:'0 callbacks for 2 months. Rebuilt my resume with AI. 3 interviews in a week.',
      body:"Was getting 0 callbacks for 2 months. Tried rebuilding my resume with AI.\n\nGot 3 interview calls the next week. The AI fixed formatting, added metrics to every bullet, tailored it per job posting.\n\nSharing in case others are stuck.",
      sub:'r/developersIndia', upvotes:'891'
    },
    liPost:{
      body:"0 callbacks for 8 weeks.\nThen I rebuilt my resume with AI.\n3 calls in 7 days.\n\nHere's what changed 👇\n\nMost Indian resumes make the same 4 ATS mistakes:\n1. PDF formatting scanners can't read\n2. No quantified achievements\n3. Skills section longer than experience\n4. Generic objective statement\n\nFixed all 4 in 2 minutes with myresume.ai\n\nFree to try. No catch.",
      name:'You', role:'Founder at MyResume AI', likes:1243, comments:287, reposts:156
    },
    twPost:{
      thread:[
        'Reviewed 200 Indian tech resumes.\n\nThe same 4 mistakes appear 90% of the time.',
        '→ Wrong format for ATS scanners\n→ No numbers on achievements\n→ Skills section too long\n→ Generic objective statement\n\nHere\'s how to fix each 🧵',
        'Mistake 1: PDF formatting.\n\nMost ATS parse your resume as plain text. Fancy layouts = broken parsing.\n\nFix: Use a clean single-column format.',
        'Built a free tool that fixes all 4 automatically.\n\nmyresume.ai — ATS-optimised in 2 minutes.\n\nAlready used by 10K+ Indian devs.'
      ],
      handle:'@yourhandle'
    },
    waPost:{
      en:'Hey, found a useful tool — myresume.ai builds ATS-optimised resumes in 2 minutes with AI. Got 3x more callbacks after using it. Free to try.',
      hi:'Bhai yeh tool try karo — myresume.ai. Resume 2 minute mein AI se banao, ATS-optimised. Mere callbacks 3x ho gaye. Free mein try kar sakte ho.'
    },
    waComms:[['Placement cell groups','99%'],['Dev community groups','96%'],['IIT/IIM Alumni groups','93%']],
    score:93, sTitle:'Very High Viral Potential',
    sDesc:'Personal transformation story with real proof. Massive job-anxiety market. Will spread fast in college placement WhatsApp groups and on LinkedIn.'
  },
  'zapbook.in': {
    ico:'⚡', name:'ZapBook', url:'zapbook.in',
    desc:'One-click appointment booking — WhatsApp confirmation, UPI payment, zero back-and-forth.',
    tags:['Booking SaaS','B2B · India','WhatsApp-native'],
    count:'38 matches · 5 platforms', rMeta:'10 subreddits · 3 post angles',
    rComms:[['r/india','800K','88%'],['r/smallbusiness','900K','91%'],['r/freelance','300K','87%']],
    rPost:{
      title:'My CA spent 3 days scheduling a 30-min meeting. Built him a fix.',
      body:"My CA was scheduling via WhatsApp — 3 days of back-and-forth for a 30-min meeting. \"Tu free hai kab?\" × 20 messages.\n\nBuilt him a one-click booking page: client picks slot, pays via UPI, WhatsApp confirmation automatic.\n\n40% fewer no-shows in month one.",
      sub:'r/india', upvotes:'456'
    },
    liPost:{
      body:"Indian professionals are losing clients over WhatsApp scheduling chaos.\n\n\"Tu free hai kab?\" followed by 20 messages.\n\nBuilt a fix — one link, client picks slot, UPI paid, WhatsApp confirmation sent.\n\nWhat happened when 12 doctors tested it 👇\n\n→ 40% fewer no-shows\n→ 3 hours saved per week\n→ Zero scheduling complaints\n\nFree to set up: zapbook.in",
      name:'You', role:'Founder at ZapBook', likes:634, comments:98, reposts:67
    },
    twPost:{
      thread:[
        'Indian professionals lose 3 hrs/week on appointment scheduling.\n\n"Tu free hai kab?" deserves better.',
        'Built a WhatsApp-native booking page for doctors, CAs, tutors.\n\n→ One link to share\n→ UPI-first payments\n→ Auto WhatsApp confirmations\n→ Zero back-and-forth',
        '12 doctors tested it for a month.\n\n• 40% fewer no-shows\n• 3 hours saved per week\n• Patients loved the simplicity',
        'Free to set up. No card needed.\n\nzapbook.in\n\nTag a doctor/CA/tutor who needs this 👇'
      ],
      handle:'@yourhandle'
    },
    waPost:{
      en:"Hey — if you're a doctor, CA, or tutor, this might be useful. zapbook.in — free booking page. Clients pick a slot, pay via UPI, WhatsApp confirmation automatic.",
      hi:"Agar tum doctor, CA, ya tutor ho — yeh useful hai. zapbook.in pe free booking page banao. Clients slot book karein, UPI se payment, WhatsApp pe confirmation automatic."
    },
    waComms:[['CA & Tax groups','96%'],['Doctor community groups','94%'],['Freelancer groups','91%']],
    score:81, sTitle:'High Viral Potential',
    sDesc:'Universal frustration every Indian recognises. B2B2C loop — each professional\'s page shows "Powered by ZapBook" creating organic exposure.'
  }
};

// ── State
let currentData  = null;
let hinglishMode = false;
let selectedCalDay = null;
let userPlanCache  = null;

function pick(url){ document.getElementById('urlInput').value = url; }

// ═══════════════════════════════════════
// PLAN CHECKER
// ═══════════════════════════════════════
async function getUserPlan(){
  if(userPlanCache !== null) return userPlanCache;
  if(typeof currentUser==='undefined'||!currentUser) return null;
  try{
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if(!doc.exists||!doc.data().plan) return null;
    const data = doc.data();
    const exp  = data.planExpiresAt?.toDate();
    if(exp && exp < new Date()) return { plan:data.plan, expired:true };
    userPlanCache = { plan:data.plan, expired:false };
    return userPlanCache;
  }catch(e){ return null; }
}
function isPremium(p)    { return p && !p.expired && p.plan==='Premium Growth'; }
function hasActivePlan(p){ return p && !p.expired; }

if(typeof auth!=='undefined'){
  auth.onAuthStateChanged(()=>{ userPlanCache=null; updateDemoSectionForPlan(); });
}

async function updateDemoSectionForPlan(){
  const p = await getUserPlan();
  const ey  = document.querySelector('#demo .ey');
  const h2  = document.querySelector('#demo h2');
  const sub = document.querySelector('#demo .sub');
  const ex  = document.querySelector('.example-row');
  if(hasActivePlan(p)){
    if(ey)  ey.textContent  = 'Launch Engine';
    if(h2)  h2.innerHTML    = 'Analyze <em>any product</em>';
    if(sub) sub.textContent = 'Paste any product URL. LaunchPe fetches your actual website and generates real, platform-native launch content in under 60 seconds.';
    if(ex)  ex.style.display = 'none';
  } else {
    if(ey)  ey.textContent  = 'Live demo';
    if(h2)  h2.innerHTML    = 'See it work <em>in real time</em>';
    if(sub) sub.textContent = 'Paste any product URL and watch LaunchPe build a complete launch strategy in under 60 seconds.';
    if(ex)  ex.style.display = '';
  }
}
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>setTimeout(updateDemoSectionForPlan,800));
} else { setTimeout(updateDemoSectionForPlan,800); }

// ═══════════════════════════════════════
// RUN DEMO
// ═══════════════════════════════════════
async function runDemo(){
  const raw = document.getElementById('urlInput').value.trim()
    .replace(/^https?:\/\//,'').split('/')[0].toLowerCase();
  if(!raw){ showToast('Please enter a URL to analyze'); return; }

  hinglishMode = false;
  const planInfo = await getUserPlan();
  const isDemoUrl = !!DATA[raw];

  document.getElementById('result').classList.remove('on');
  document.getElementById('loader').classList.remove('on');

  const steps=[
    ['Fetching website...','Reading your actual product page'],
    ['Reading content...','Extracting features, value props, and audience'],
    ['Mapping communities...','Matching against 2,400+ real communities'],
    ['Writing content...','Generating platform-native posts in your voice'],
    ['Building calendar...','Scheduling 30 days for maximum reach'],
  ];
  const loader = document.getElementById('loader');
  loader.classList.add('on');
  let si=0;
  const stepIv = setInterval(()=>{
    if(si<steps.length){
      document.getElementById('lm').textContent=steps[si][0];
      document.getElementById('ls').textContent=steps[si][1];
      si++;
    }
  }, isDemoUrl ? 560 : 1400);

  // Demo URLs — free users can see these
  if(isDemoUrl){
    await new Promise(r=>setTimeout(r, steps.length*580));
    clearInterval(stepIv);
    loader.classList.remove('on');
    currentData = DATA[raw];
    populateResult(DATA[raw]);
    return;
  }

  // Non-demo URL → needs paid plan
  if(!hasActivePlan(planInfo)){
    clearInterval(stepIv);
    loader.classList.remove('on');
    showUpgradePrompt(raw);
    return;
  }

  // Paid user → call Netlify Function (real website scraping + Groq)
  try{
    const res = await fetch(`${API_BASE}/analyze`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ url: raw })
    });
    clearInterval(stepIv);
    loader.classList.remove('on');

    if(!res.ok){
      const err = await res.json().catch(()=>({}));
      if(res.status===429) showToast('⏳ AI is busy — please wait 10 seconds and try again');
      else showToast('⚠️ Analysis failed: '+(err.error||'Server error'));
      const fb = generateFallbackData(raw);
      currentData = fb; populateResult(fb);
      return;
    }

    const aiData = await res.json();
    aiData.cal = generateCalendar(aiData);
    currentData = aiData;
    if(aiData._fetchSuccess===false) showToast('ℹ️ Website blocked crawling — used domain-based analysis');
    populateResult(aiData);

  } catch(e){
    clearInterval(stepIv);
    loader.classList.remove('on');
    console.error('Analysis error:',e);
    showToast('⚠️ Connection error — showing smart template');
    const fb = generateFallbackData(raw);
    currentData = fb; populateResult(fb);
  }
}

function showUpgradePrompt(url){
  const result = document.getElementById('result');
  result.innerHTML=`
  <div class="upgrade-prompt">
    <div class="upgrade-icon">🔒</div>
    <h3 class="upgrade-title">Unlock Real URL Analysis</h3>
    <p class="upgrade-desc">To analyze <strong>${url}</strong>, you need a LaunchPe plan. LaunchPe fetches your actual website HTML and generates content specific to what you actually built.</p>
    <div class="upgrade-features">
      <div class="upgrade-feature"><span class="fc">✓</span> AI reads your real website content</div>
      <div class="upgrade-feature"><span class="fc">✓</span> 15–40+ best-match communities</div>
      <div class="upgrade-feature"><span class="fc">✓</span> 15 ready-to-post content pieces</div>
      <div class="upgrade-feature"><span class="fc">✓</span> 20-day launch calendar</div>
      <div class="upgrade-feature"><span class="fc">✓</span> Unlimited content regeneration</div>
    </div>
    <div class="upgrade-btns">
      <a href="#pricing" class="btn-solid" onclick="document.getElementById('result').innerHTML=''">Get a Plan — from ₹1,499 →</a>
      <button class="btn-outline btn-sm" onclick="document.getElementById('urlInput').value='indiastartupmap.com';runDemo();">Try the demo instead</button>
    </div>
  </div>`;
  result.classList.add('on');
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ═══════════════════════════════════════
// CALENDAR GENERATOR
// ═══════════════════════════════════════
function generateCalendar(data){
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const platforms=[
    {platform:'Reddit',color:'#FF4500'},
    {platform:'LinkedIn',color:'#0A66C2'},
    {platform:'Twitter',color:'#0F1419'},
    {platform:'WhatsApp',color:'#25D366'},
    {platform:'Product Hunt',color:'#2D6A4F'}
  ];
  const types=['I Built This','Founder Story','Data Thread','Casual Share','Discussion','Case Study','Milestone','Tips Thread','Hot Take','Progress Update'];
  const calDays=[1,2,3,5,7,10,14,21,25,30];
  return calDays.map(n=>{
    if(n===30) return {n,d:'Fri',label:'Fri',dots:['#2D6A4F'],posts:[{platform:'Product Hunt',sub:'Launch',type:'PH Launch Day',color:'#2D6A4F'}]};
    const num = n===1?3:n<=7?2:1;
    const shuffled=[...platforms].sort(()=>Math.random()-.5);
    const posts=shuffled.slice(0,num).map(p=>({
      platform:p.platform,
      sub:p.platform==='Reddit'?(data.rComms?.[0]?.[0]||'r/india'):'Feed post',
      type:types[Math.floor(Math.random()*types.length)],
      color:p.color
    }));
    return {n,d:n===1?'Today':days[n%7],label:days[n%7],today:n===1,dots:posts.map(p=>p.color),posts};
  });
}

// ═══════════════════════════════════════
// SMART FALLBACK
// ═══════════════════════════════════════
function generateFallbackData(url){
  const name=url.replace(/\.(com|in|io|app|co|ai|dev|org|net)$/i,'')
    .replace(/[.-]/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  const d={
    ico:'🚀',name,url,
    desc:`${name} — a product built for the Indian market.`,
    tags:['Startup','India','Product'],
    count:'30+ matches · 5 platforms',rMeta:'8 subreddits · 3 post angles',
    rComms:[['r/india','800K','90%'],['r/indianstartups','120K','95%'],['r/startups','1.2M','85%']],
    rPost:{
      title:`I built ${name} — solving a real problem for Indian founders`,
      body:`Been working on ${name} and finally ready to share.\n\nThe problem: Most tools aren't built for the Indian market — different payments, different behaviour, different scale.\n\nBuilt ${name} from scratch with an India-first approach.\n\nWould love your feedback!`,
      sub:'r/indianstartups', upvotes:'200+'
    },
    liPost:{
      body:`Just shipped ${name}.\n\nNo VC funding. No big team. Just a clear problem and code.\n\nBuilt for India. Priced for India. Designed for how we actually work.\n\nCheck it out: ${url}`,
      name:'You',role:`Founder at ${name}`,likes:500,comments:80,reposts:45
    },
    twPost:{
      thread:[
        `Just launched ${name} 🚀`,
        `Why? Because Indian founders deserve tools built for them.\n\nNot US tools with an Indian pricing page.\n\nActual tools that understand our market.`,
        `${name} is live.\n\nCheck it out: ${url}`,
        `If you're building for India, give it a try.\n\nRT to help other founders find it 🇮🇳`
      ],
      handle:'@yourhandle'
    },
    waPost:{
      en:`Hey, check this out — ${name} (${url}). Built for the Indian market. Might be useful for you.`,
      hi:`Arre yeh dekh — ${name} (${url}). India ke liye specifically banaya gaya hai. Kaam ka lag sakta hai.`
    },
    waComms:[['Startup India groups','93%'],['Dev community groups','89%'],['IIT/IIM Alumni groups','85%']],
    score:70,sTitle:'Good Viral Potential',
    sDesc:`${name} addresses an India-specific need. Focus on authentic community engagement on Reddit and LinkedIn to build early traction.`
  };
  d.cal=generateCalendar(d);
  return d;
}

// ═══════════════════════════════════════
// POPULATE RESULTS
// ═══════════════════════════════════════
async function populateResult(d){
  const planInfo = await getUserPlan();
  document.getElementById('pIco').textContent  = d.ico;
  document.getElementById('pName').textContent = d.name;
  document.getElementById('pDesc').textContent = d.desc;
  document.getElementById('pTags').innerHTML   = d.tags.map(t=>`<span class="ptag">${t}</span>`).join('');

  let cc = d.count;
  if(isPremium(planInfo))       cc='40+ matches · 5 platforms';
  else if(hasActivePlan(planInfo)) cc='20+ matches · 4 platforms';
  document.getElementById('comCount').textContent = cc;
  document.getElementById('rMeta').textContent    = d.rMeta;

  // Clickable community rows
  document.getElementById('rComms').innerHTML = d.rComms.map(([n,s,p])=>{
    const link=COMMUNITY_LINKS[n]||`https://www.reddit.com/${n.replace('r/','')}/`;
    return `<div class="c-row c-row-link" onclick="window.open('${link}','_blank')" title="Open ${n}">
      <span class="cn">${n}</span><span class="cs">${s}</span><span class="cp">${p}</span><span class="c-arrow">↗</span>
    </div>`;
  }).join('');

  document.getElementById('redditCard').innerHTML   = renderRedditCard(d.rPost);
  document.getElementById('linkedinCard').innerHTML = renderLinkedInCard(d.liPost);
  document.getElementById('twitterCard').innerHTML  = renderTwitterThread(d.twPost);

  document.getElementById('waComms').innerHTML = d.waComms.map(([n,p])=>{
    const link=COMMUNITY_LINKS[n]||'#';
    return `<div class="c-row c-row-link" onclick="if('${link}'!='#')window.open('${link}','_blank')" title="${n}">
      <span class="cn" style="font-family:var(--ff)">${n}</span><span class="cp">${p}</span><span class="c-arrow">↗</span>
    </div>`;
  }).join('');
  document.getElementById('whatsappCard').innerHTML = renderWhatsAppCard(d.waPost);
  updateHinglishToggle();

  renderCalendar(d.cal);

  document.getElementById('vNum').textContent   = d.score;
  document.getElementById('vTitle').textContent = d.sTitle;
  document.getElementById('vDesc').textContent  = d.sDesc;
  document.getElementById('scoreArc').setAttribute('stroke-dashoffset', 163-(d.score/100)*163);

  renderPremiumFeatures(d, planInfo);

  document.getElementById('result').classList.add('on');
  setTimeout(()=>document.getElementById('result').scrollIntoView({behavior:'smooth',block:'nearest'}),100);
}

// ═══════════════════════════════════════
// PLATFORM CARDS
// ═══════════════════════════════════════
function renderRedditCard(r){
  return `<div class="reddit-preview">
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
      <div class="reddit-body"  contenteditable="true" data-post-id="reddit-body">${r.body.replace(/\n/g,'<br>')}</div>
      <div class="reddit-actions">
        <span class="reddit-action">💬 Comments</span>
        <span class="reddit-action">↗ Share</span>
        <span class="reddit-action">⭐ Save</span>
      </div>
    </div>
    <div class="post-toolbar">
      <button class="tool-btn copy-btn"  onclick="copyPostText('reddit-body')">📋 Copy</button>
      <button class="tool-btn regen-btn" onclick="regeneratePost('reddit')">↻ Regenerate</button>
      <button class="tool-btn post-btn"  onclick="postToPlatform('Reddit','reddit-body')">📤 Post Now →</button>
    </div>
    ${angleBox('reddit')}
  </div>`;
}

function renderLinkedInCard(li){
  return `<div class="li-preview">
    <div class="li-header">
      <div class="li-avatar">${li.name.charAt(0)}</div>
      <div class="li-author">
        <div class="li-author-name">${li.name} <span class="li-1st">· 1st</span></div>
        <div class="li-author-role">${li.role}</div>
        <div class="li-author-time">Just now · 🌐</div>
      </div>
      <span class="li-follow">+ Follow</span>
    </div>
    <div class="li-body" contenteditable="true" data-post-id="linkedin-body">${li.body.replace(/\n/g,'<br>')}</div>
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
      <button class="tool-btn copy-btn"  onclick="copyPostText('linkedin-body')">📋 Copy</button>
      <button class="tool-btn regen-btn" onclick="regeneratePost('linkedin')">↻ Regenerate</button>
      <button class="tool-btn post-btn"  onclick="postToPlatform('LinkedIn','linkedin-body')">📤 Post Now →</button>
    </div>
    ${angleBox('linkedin')}
  </div>`;
}

function renderTwitterThread(tw){
  const tweets = tw.thread.map((text,i)=>`
  <div class="tw-tweet ${i<tw.thread.length-1?'tw-has-thread':''}">
    ${i>0?'<div class="tw-thread-line-top"></div>':''}
    ${i<tw.thread.length-1?'<div class="tw-thread-line-bottom"></div>':''}
    <div class="tw-avatar">Y</div>
    <div class="tw-tweet-content">
      <div class="tw-tweet-header">
        <span class="tw-name">You</span>
        <span class="tw-handle">${tw.handle}</span>
        <span class="tw-dot">·</span>
        <span class="tw-time">now</span>
        ${i===0?'<span class="tw-thread-label">Thread</span>':''}
      </div>
      <div class="tw-tweet-body" contenteditable="true" data-post-id="twitter-${i}">${text.replace(/\n/g,'<br>')}</div>
      <div class="tw-tweet-actions">
        <span class="tw-act">💬 ${Math.floor(Math.random()*40+5)}</span>
        <span class="tw-act">🔁 ${Math.floor(Math.random()*80+20)}</span>
        <span class="tw-act">❤️ ${Math.floor(Math.random()*300+50)}</span>
        <span class="tw-act">📊 ${(Math.random()*40+10).toFixed(1)}K</span>
      </div>
    </div>
  </div>`).join('');
  return `<div class="tw-preview">
    ${tweets}
    <div class="post-toolbar">
      <button class="tool-btn copy-btn"  onclick="copyPostText('twitter-0')">📋 Copy thread</button>
      <button class="tool-btn regen-btn" onclick="regeneratePost('twitter')">↻ Regenerate</button>
      <button class="tool-btn post-btn"  onclick="postToPlatform('Twitter','twitter-0')">📤 Post Now →</button>
    </div>
    ${angleBox('twitter')}
  </div>`;
}

function renderWhatsAppCard(wa){
  const text = hinglishMode ? wa.hi : wa.en;
  return `<div class="wa-preview">
    <div class="wa-bubble">
      <div class="wa-text" contenteditable="true" data-post-id="whatsapp-body">${text}</div>
      <div class="wa-time">Just now ✓✓</div>
    </div>
    <div class="post-toolbar">
      <button class="tool-btn copy-btn"  onclick="copyPostText('whatsapp-body')">📋 Copy</button>
      <button class="tool-btn regen-btn" onclick="regeneratePost('whatsapp')">↻ Regenerate</button>
      <button class="tool-btn post-btn"  onclick="postToPlatform('WhatsApp','whatsapp-body')">📤 Share Now →</button>
    </div>
    ${angleBox('whatsapp')}
  </div>`;
}

// ── Custom Angle Box ("Describe what you want")
function angleBox(platform){
  return `<div class="angle-wrap">
    <button class="angle-toggle" onclick="toggleAngle('${platform}')">✏️ Describe what you want → AI writes it</button>
    <div class="angle-box" id="angle-${platform}" style="display:none">
      <textarea class="angle-input" id="angle-txt-${platform}"
        placeholder="E.g. 'Focus on the pricing value', 'Write from a user's perspective who saved time', 'Make it funny and casual', 'Target freelancers specifically', 'Emphasise the India-first angle'..."
        rows="3"></textarea>
      <button class="tool-btn angle-submit" onclick="regenWithAngle('${platform}')">✨ Generate with this angle</button>
    </div>
  </div>`;
}

function toggleAngle(p){
  const box=document.getElementById(`angle-${p}`);
  if(!box) return;
  const open = box.style.display!=='none';
  box.style.display = open?'none':'block';
  if(!open) setTimeout(()=>box.querySelector('textarea')?.focus(),80);
}

// ═══════════════════════════════════════
// REGENERATE — UNLIMITED FOR ALL PAID PLANS
// ═══════════════════════════════════════
async function regeneratePost(platform, customDescription=''){
  const planInfo = await getUserPlan();
  if(!hasActivePlan(planInfo)){ showUpgradeModal(); return; }
  if(!currentData){ showToast('Please run an analysis first'); return; }

  // Show loading state on the post
  const idMap={reddit:'reddit-body',linkedin:'linkedin-body',twitter:'twitter-0',whatsapp:'whatsapp-body'};
  const el = document.querySelector(`[data-post-id="${idMap[platform]}"]`);
  if(el){ el.style.opacity='0.35'; el.style.pointerEvents='none'; }

  showToast('↻ Writing new content...');

  try{
    const res = await fetch(`${API_BASE}/regenerate`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        platform,
        productName: currentData.name,
        productUrl:  currentData.url,
        productDesc: currentData.desc,
        customDescription
      })
    });

    if(!res.ok){
      const err=await res.json().catch(()=>({}));
      showToast(res.status===429?'⏳ AI busy — wait a moment':'⚠️ Regeneration failed — try again');
      return;
    }

    const data = await res.json();

    if(platform==='twitter' && data.tweets?.length){
      data.tweets.forEach((tweet,i)=>{
        const t=document.querySelector(`[data-post-id="twitter-${i}"]`);
        if(t) t.innerHTML=tweet.replace(/\n/g,'<br>');
      });
    } else if(data.content && el){
      el.innerHTML=data.content.replace(/\n/g,'<br>');
    }
    showToast('✅ Content regenerated!');
  } catch(e){
    console.error('Regen error:',e);
    showToast('⚠️ Connection error');
  } finally {
    if(el){ el.style.opacity=''; el.style.pointerEvents=''; }
  }
}

async function regenWithAngle(platform){
  const desc=document.getElementById(`angle-txt-${platform}`)?.value?.trim()||'';
  if(!desc){ showToast('Please describe what angle you want'); return; }
  await regeneratePost(platform, desc);
  // Close box after success
  const box=document.getElementById(`angle-${platform}`);
  if(box) box.style.display='none';
}

// ═══════════════════════════════════════
// POST TO PLATFORM
// ═══════════════════════════════════════
function postToPlatform(platform, postId){
  requireAuth(async(user)=>{
    const p=await getUserPlan();
    if(!hasActivePlan(p)){ showUpgradeModal(); return; }
    const el=document.querySelector(`[data-post-id="${postId}"]`);
    const content=el?(el.innerText||el.textContent):'';
    let url='';
    switch(platform){
      case 'Reddit':
        const sub=(currentData?.rPost?.sub||'r/indianstartups').replace('r/','');
        const title=encodeURIComponent(currentData?.rPost?.title||'Check this out');
        url=`https://www.reddit.com/r/${sub}/submit?type=TEXT&title=${title}&text=${encodeURIComponent(content)}`;
        break;
      case 'LinkedIn':
        navigator.clipboard?.writeText(content);
        url=`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(content)}`;
        showToast('📋 Content copied — paste with Ctrl+V if needed');
        break;
      case 'Twitter':
        url=`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.substring(0,280))}`;
        break;
      case 'WhatsApp':
        url=`https://web.whatsapp.com/send?text=${encodeURIComponent(content)}`;
        break;
      case 'Product Hunt':
        url='https://www.producthunt.com/posts/new';
        break;
    }
    if(url){
      window.open(url,'_blank');
      setTimeout(()=>{
        if(confirm(`Did you post on ${platform}? Click OK to track it in your dashboard.`))
          saveUserPost(platform,content,currentData?.rPost?.sub||'');
      },3000);
    }
  });
}

// ═══════════════════════════════════════
// PREMIUM FEATURES
// ═══════════════════════════════════════
function renderPremiumFeatures(d,planInfo){
  document.querySelectorAll('.premium-section').forEach(el=>el.remove());
  const result=document.getElementById('result');
  const cta=result.querySelector('.demo-cta');
  const ins=(el)=>{ if(cta) result.insertBefore(el,cta); else result.appendChild(el); };

  if(isPremium(planInfo)){
    // Product Hunt kit
    const ph=document.createElement('div');
    ph.className='premium-section ph-kit-section';
    ph.innerHTML=`
    <div class="d-sec">
      <div class="d-sec-l">🚀 Product Hunt Launch Kit</div>
      <div class="d-sec-r" style="color:var(--moss)">Premium</div>
    </div>
    <div class="ph-kit">
      <div class="ph-kit-card">
        <div class="ph-kit-label">Tagline</div>
        <div class="ph-kit-content" contenteditable="true">${d.name} — ${d.desc.split('.')[0]}</div>
        <button class="tool-btn copy-btn" onclick="copyText(this.previousElementSibling)">📋</button>
      </div>
      <div class="ph-kit-card">
        <div class="ph-kit-label">PH Description</div>
        <div class="ph-kit-content" contenteditable="true">We're launching ${d.name} today! ${d.desc} Built for the Indian market. We'd love your support and feedback!</div>
        <button class="tool-btn copy-btn" onclick="copyText(this.previousElementSibling)">📋</button>
      </div>
      <div class="ph-kit-card">
        <div class="ph-kit-label">Maker's First Comment</div>
        <div class="ph-kit-content" contenteditable="true">Hey Product Hunt! 👋 I'm the maker of ${d.name}. ${d.sDesc} Would love to hear what you think — happy to answer any questions!</div>
        <button class="tool-btn copy-btn" onclick="copyText(this.previousElementSibling)">📋</button>
      </div>
      <a href="https://www.producthunt.com/posts/new" target="_blank" class="btn-solid btn-sm" style="margin-top:12px">🚀 Launch on Product Hunt →</a>
    </div>`;
    ins(ph);

    // Reply suggestions
    const rep=document.createElement('div');
    rep.className='premium-section reply-section';
    rep.innerHTML=`
    <div class="d-sec">
      <div class="d-sec-l">💬 Reply Suggestions</div>
      <div class="d-sec-r" style="color:var(--moss)">Premium</div>
    </div>
    <p style="font-size:13px;color:var(--ink3);margin-bottom:12px">Pre-written replies for when someone asks a question your product answers.</p>
    <div class="reply-cards">
      <div class="reply-card">
        <div class="reply-q">"Anyone know a good tool for ${d.tags[0]?.toLowerCase()||'this'}?"</div>
        <div class="reply-a" contenteditable="true">Hey! I actually built something for this — ${d.name} (${d.url}). ${d.desc.split('.')[0]}. Happy to answer any questions!</div>
        <button class="tool-btn copy-btn" onclick="copyText(this.previousElementSibling)">📋 Copy</button>
      </div>
      <div class="reply-card">
        <div class="reply-q">"Looking for recommendations for ${d.tags[1]?.toLowerCase()||'something like this'}"</div>
        <div class="reply-a" contenteditable="true">Check out ${d.name} — ${d.desc.split('.')[0]}. Specifically built for the Indian market. Free to try at ${d.url}</div>
        <button class="tool-btn copy-btn" onclick="copyText(this.previousElementSibling)">📋 Copy</button>
      </div>
    </div>`;
    ins(rep);
  }

  // Upsell banner for non-premium
  if(!isPremium(planInfo)){
    const banner=document.createElement('div');
    banner.className='premium-section upgrade-banner-inline';
    const hasBasic=hasActivePlan(planInfo);
    banner.innerHTML=`
    <div class="upgrade-banner-content">
      <div style="font-size:20px">⚡</div>
      <div>
        <strong>${hasBasic?'Upgrade to Premium':'Get a plan'}</strong>
        <div style="font-size:12px;color:var(--ink3);margin-top:2px">
          ${hasBasic
            ?'Unlock Product Hunt kit, reply suggestions, 40+ communities.'
            :'Get AI analysis, communities, 15 content pieces, and a 20-day calendar.'}
        </div>
      </div>
      <a href="#pricing" class="btn-solid btn-sm">${hasBasic?'Upgrade — ₹2,499/mo':'Get Started — ₹1,499'}</a>
    </div>`;
    ins(banner);
  }
}

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════
function copyPostText(id){
  const el=document.querySelector(`[data-post-id="${id}"]`);
  if(el) copyText(el);
}
function copyText(el){
  const text=el.innerText||el.textContent;
  navigator.clipboard.writeText(text).then(()=>showToast('Copied! 📋')).catch(()=>{
    const ta=document.createElement('textarea'); ta.value=text;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta); showToast('Copied! 📋');
  });
}
function showToast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2400);
}
function showUpgradeModal(){
  document.getElementById('upgradeModal')?.remove();
  const m=document.createElement('div');
  m.id='upgradeModal'; m.className='auth-modal-overlay active';
  m.innerHTML=`<div class="auth-modal" style="text-align:center;padding:40px 32px">
    <button class="auth-close" onclick="this.closest('.auth-modal-overlay').remove()">✕</button>
    <div style="font-size:40px;margin-bottom:12px">🔒</div>
    <h3 class="auth-title">Get a Plan</h3>
    <p class="auth-subtitle" style="margin-bottom:20px">Unlock unlimited AI analysis and content generation.</p>
    <div style="text-align:left;margin:0 auto 20px;max-width:280px;font-size:13px;color:var(--ink2);line-height:2">
      ✓ AI reads your actual website<br>✓ 15–40+ communities mapped<br>✓ 15 ready-to-post content pieces<br>✓ Unlimited content regeneration<br>✓ Custom angle generation<br>✓ 20-day launch calendar
    </div>
    <a href="#pricing" class="btn-solid" onclick="this.closest('.auth-modal-overlay').remove()">See Plans — from ₹1,499 →</a>
  </div>`;
  document.body.appendChild(m);
}

// Hinglish
function toggleHinglish(){ hinglishMode=!hinglishMode; updateHinglishToggle(); if(currentData) document.getElementById('whatsappCard').innerHTML=renderWhatsAppCard(currentData.waPost); }
function updateHinglishToggle(){ const t=document.getElementById('hinglishToggle'); if(t){ t.classList.toggle('active',hinglishMode); const l=t.querySelector('.toggle-label'); if(l) l.textContent=hinglishMode?'Hinglish':'English'; } }

// Calendar
function renderCalendar(cal){
  selectedCalDay=cal[0];
  const grid=document.getElementById('calGrid');
  grid.innerHTML=cal.map((day,idx)=>`
  <div class="cal-c ${day.today?'today':''} ${idx===0?'cal-selected':''}" onclick="selectCalDay(${idx})" data-cal-idx="${idx}">
    <div class="cn2">${day.n}</div>
    <div class="cd">${day.d}</div>
    <div class="cdots">${day.dots.map(c=>`<div class="cdot" style="background:${c}"></div>`).join('')}</div>
  </div>`).join('');
  renderCalDetail(cal[0]);
}
function selectCalDay(idx){
  const cal=currentData.cal; selectedCalDay=cal[idx];
  document.querySelectorAll('.cal-c').forEach(el=>el.classList.remove('cal-selected'));
  document.querySelector(`[data-cal-idx="${idx}"]`)?.classList.add('cal-selected');
  renderCalDetail(cal[idx]);
}
function renderCalDetail(day){
  const detail=document.getElementById('calDetail'); if(!detail) return;
  if(!day.posts?.length){ detail.innerHTML=`<div class="cal-detail-empty">No posts scheduled for Day ${day.n}.</div>`; return; }
  detail.innerHTML=`
  <div class="cal-detail-header">
    <div class="cal-detail-day">Day ${day.n}</div>
    <div class="cal-detail-label">${day.posts.length} post${day.posts.length>1?'s':''} scheduled</div>
  </div>
  <div class="cal-detail-posts">
    ${day.posts.map(p=>`
    <div class="cal-post-item">
      <div class="cal-post-dot" style="background:${p.color}"></div>
      <div class="cal-post-info">
        <div class="cal-post-platform">${p.platform}</div>
        <div class="cal-post-sub">${p.sub} · ${p.type}</div>
      </div>
      <div class="cal-post-time">${getPostTime(p.platform)}</div>
      <button class="cal-post-btn" onclick="calPostNow('${p.platform}','${p.sub}')">📤 Post</button>
    </div>`).join('')}
  </div>`;
}
function calPostNow(platform,sub){
  requireAuth(()=>{
    const name=currentData?.name||'Product', url=currentData?.url||'';
    const urls={
      Reddit:`https://www.reddit.com/r/${sub.replace('r/','').replace(/ /g,'')}/submit?type=TEXT&title=${encodeURIComponent('Check out '+name)}`,
      LinkedIn:'https://www.linkedin.com/feed/?shareActive=true',
      Twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(name+' → '+url)}`,
      WhatsApp:`https://web.whatsapp.com/send?text=${encodeURIComponent('Check out '+name+': '+url)}`,
      'Product Hunt':'https://www.producthunt.com/posts/new'
    };
    if(urls[platform]){
      window.open(urls[platform],'_blank'); showToast(`📤 Opening ${platform}...`);
      setTimeout(()=>{ if(confirm(`Did you post on ${platform}?`)) saveUserPost(platform,`${name} — ${sub}`,sub); },3000);
    }
  });
}
function getPostTime(p){ return {Reddit:'10:00 AM',LinkedIn:'9:00 AM',Twitter:'12:30 PM',WhatsApp:'7:00 PM','Product Hunt':'12:01 AM PST'}[p]||'10:00 AM'; }
async function saveUserPost(platform,content,sub){
  if(typeof currentUser==='undefined'||!currentUser) return;
  try{ await db.collection('users').doc(currentUser.uid).collection('posts').add({platform,content:content.substring(0,500),sub:sub||'',postedAt:firebase.firestore.FieldValue.serverTimestamp()}); showToast('📤 Tracked in dashboard!'); }
  catch(e){ console.error(e); }
}

// Inject angle-box CSS once
(function(){
  if(document.getElementById('lp-angle-css')) return;
  const s=document.createElement('style'); s.id='lp-angle-css';
  s.textContent=`
  .angle-wrap{margin-top:10px}
  .angle-toggle{width:100%;background:transparent;border:1.5px dashed var(--line2);border-radius:8px;padding:7px 14px;font-size:12px;color:var(--ink3);cursor:pointer;text-align:left;font-family:var(--ff);transition:.15s}
  .angle-toggle:hover{color:var(--moss);border-color:var(--moss-line);background:var(--moss-bg)}
  .angle-box{margin-top:8px}
  .angle-input{width:100%;padding:10px 14px;background:var(--page);border:1.5px solid var(--line2);border-radius:9px;font-family:var(--ff);font-size:13px;color:var(--ink);resize:vertical;outline:none;transition:border-color .15s;line-height:1.6;box-sizing:border-box}
  .angle-input:focus{border-color:var(--moss-line)}
  .angle-input::placeholder{color:var(--ink3);font-size:12px}
  .angle-submit{margin-top:8px;background:var(--moss-bg)!important;color:var(--moss)!important;border:1px solid var(--moss-line)!important}
  .angle-submit:hover{background:var(--moss)!important;color:#fff!important}`;
  document.head.appendChild(s);
})();
