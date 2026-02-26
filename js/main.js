/* ─────────────────────────────────────────
   main.js — LaunchPe Interactions
───────────────────────────────────────── */

// ── Nav scroll effect ─────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Scroll reveal ─────────────────────────
const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// ── FAQ accordion ─────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ── Smooth scroll for anchor links ────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        }
    });
});

// ── Mobile hamburger menu ─────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
    if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// ── Event delegation ──────────────────────
document.addEventListener('click', e => {
    // Example pills
    const pill = e.target.closest('.ex-pill');
    if (pill && pill.dataset.url) {
        pick(pill.dataset.url);
        return;
    }

    // Analyze button
    if (e.target.closest('#btnGo')) {
        runDemo();
        return;
    }

    // Pricing buttons → scroll to pricing or trigger payment
    if (e.target.closest('#basicBtn') || e.target.closest('#premiumBtn')) {
        // In production, this would trigger Razorpay checkout
        const plan = e.target.closest('#basicBtn') ? 'Basic (₹999)' : 'Premium (₹2,999/mo)';
        alert(`${plan} — Payment integration coming soon! Razorpay checkout will open here.`);
        return;
    }
});

// ── Enter key on demo input ───────────────
document.getElementById('urlInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') runDemo();
});

// ── Back to top button ────────────────────
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
