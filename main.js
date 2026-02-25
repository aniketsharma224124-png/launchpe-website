/* ─────────────────────────────────────────
   main.js — LaunchPe
───────────────────────────────────────── */

// ── Nav scroll effect ─────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Scroll reveal ─────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

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
    }
  });
});

// ── Waitlist form ──────────────────────────
function joinWaitlist() {
  const input = document.getElementById('wlInput');
  const msg   = document.getElementById('wlMsg');
  const email = input.value.trim();
  if (!email || !email.includes('@') || !email.includes('.')) {
    msg.textContent = 'Please enter a valid email.';
    msg.style.color = '#EF4444';
    return;
  }
  msg.textContent = '✓ You\'re on the list! We\'ll email you 24 hours before launch with your 40% discount.';
  msg.style.color = '#10B981';
  input.value = '';
  input.disabled = true;
  setTimeout(() => { input.disabled = false; }, 3000);
}

document.getElementById('wlInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') joinWaitlist();
});

// ── Copy to clipboard ─────────────────────
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.closest('.post-box')?.querySelector('.copy-btn');
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      btn.style.color = 'var(--green)';
      setTimeout(() => { btn.innerHTML = original; btn.style.color = ''; }, 2000);
    }
  });
}

// ── Ticker duplicate for seamless loop ────
const ticker = document.querySelector('.ticker-inner');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}
