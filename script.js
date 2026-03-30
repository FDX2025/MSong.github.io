'use strict';

/* ============================================================
   CURSOR GLOW
   ============================================================ */
const cursorGlow = document.getElementById('cursorGlow');
let mx = 0, my = 0, gx = 0, gy = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animGlow() {
  gx += (mx - gx) * 0.08;
  gy += (my - gy) * 0.08;
  if (cursorGlow) {
    cursorGlow.style.left = gx + 'px';
    cursorGlow.style.top  = gy + 'px';
  }
  requestAnimationFrame(animGlow);
})();

/* ============================================================
   HERO CANVAS — PARTICLE NETWORK
   ============================================================ */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * canvas.width;
      this.y  = init ? Math.random() * canvas.height : (Math.random() > 0.5 ? -5 : canvas.height + 5);
      this.vx = (Math.random() - 0.5) * 0.28;
      this.vy = (Math.random() - 0.5) * 0.28;
      this.r  = Math.random() * 1.4 + 0.4;
      this.op = Math.random() * 0.5 + 0.1;
      this.col = Math.random() > 0.5 ? '#9f86c0' : '#5e548e';
    }
    step() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -10 || this.x > canvas.width + 10 ||
          this.y < -10 || this.y > canvas.height + 10) this.reset(false);
    }
    draw() {
      ctx.globalAlpha = this.op;
      ctx.fillStyle   = this.col;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    const count = Math.min(75, Math.floor(canvas.width * canvas.height / 14000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawLines() {
    const maxD = 115;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < maxD) {
          ctx.globalAlpha = (1 - d / maxD) * 0.14;
          ctx.strokeStyle = '#5e548e';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    drawLines();
    particles.forEach(p => { p.step(); p.draw(); });
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  resize();
  init();
  frame();
  window.addEventListener('resize', () => { resize(); init(); });
})();

/* ============================================================
   NAVBAR — scroll + active + mobile toggle
   ============================================================ */
const navbar     = document.getElementById('navbar');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');
const sections   = document.querySelectorAll('section[id]');

function updateNav() {
  // Scrolled glass state
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Active section highlight
  let active = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) active = sec.id;
  });
  navLinkEls.forEach(el => {
    el.classList.toggle('active', el.getAttribute('href') === '#' + active);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

navLinkEls.forEach(el => el.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
}));

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');

  // Stagger siblings that share the same parent
  const parents = new Map();
  els.forEach(el => {
    const p = el.parentElement;
    if (!parents.has(p)) parents.set(p, []);
    parents.get(p).push(el);
  });
  parents.forEach(children => {
    children.forEach((el, i) => {
      if (i > 0) el.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
})();

/* ============================================================
   RESEARCH CARDS — expand / collapse
   ============================================================ */
document.querySelectorAll('.research-card').forEach(card => {
  card.querySelector('.rc-toggle').addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = card.classList.contains('expanded');

    // Close all
    document.querySelectorAll('.research-card').forEach(c => {
      c.classList.remove('expanded');
      c.querySelector('.rc-expand').classList.remove('open');
    });

    // Open this one if it was closed
    if (!isOpen) {
      card.classList.add('expanded');
      card.querySelector('.rc-expand').classList.add('open');
    }
  });
});

/* ============================================================
   PUBLICATION CARDS — abstract toggle
   ============================================================ */
document.querySelectorAll('.pub-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card    = btn.closest('.pub-card');
    const abstract = card.querySelector('.pub-abstract');
    const open    = abstract.classList.contains('open');
    abstract.classList.toggle('open', !open);
    btn.classList.toggle('active', !open);
  });
});

/* ============================================================
   PUBLICATION FILTER TABS
   ============================================================ */
document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pub-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

/* ============================================================
   NEWS YEAR FILTER
   ============================================================ */
document.querySelectorAll('.nf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const year = btn.dataset.year;
    document.querySelectorAll('.news-item').forEach(item => {
      item.classList.toggle('hidden', year !== 'all' && item.dataset.year !== year);
    });
  });
});

/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================================
   SECTION DIVIDERS — inject a thin top border line on each section
   ============================================================ */
document.querySelectorAll('.section').forEach((sec, i) => {
  if (i === 0) return;
  const div = document.createElement('div');
  div.className = 'section-divider';
  sec.prepend(div);
});

/* ============================================================
   SCROLL INDICATOR — hide on first scroll
   ============================================================ */
const scrollIndicator = document.getElementById('scrollIndicator');
if (scrollIndicator) {
  window.addEventListener('scroll', function hideOnScroll() {
    if (window.scrollY > 80) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.transition = 'opacity 0.5s ease';
      window.removeEventListener('scroll', hideOnScroll);
    }
  }, { passive: true });
}
