'use strict';

/* ============================================================
   HELPER — escape HTML entities
   ============================================================ */
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ============================================================
   RENDER SITE FROM SITE_DATA
   ============================================================ */
(function render() {
  const d = SITE_DATA;
  const p = d.profile;

  /* --- Profile / Hero --- */
  document.getElementById('heroLabel').textContent = p.title;

  document.getElementById('heroName').innerHTML =
    esc(p.name.first) + '<br><span class="name-accent">' + esc(p.name.last) + '</span>';

  document.getElementById('heroIdentity').innerHTML =
    esc(p.degree) + '<br><span class="hero-institution">' + esc(p.institution) + '</span>';

  document.getElementById('heroIntro').textContent = p.intro;

  const researchEl = document.getElementById('heroResearch');
  if (p.researchInterests) {
    researchEl.textContent = 'My research interests include ' + p.researchInterests + '.';
  } else {
    researchEl.textContent = 'My research interests include .';
  }

  /* Avatar */
  document.getElementById('heroAvatar').innerHTML =
    '<img src="' + esc(p.photo) + '" alt="' + esc(p.name.first + ' ' + p.name.last) + '"' +
    ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
    '<span class="avatar-placeholder" style="display:none">' +
    esc(p.name.first[0] + p.name.last[0]) + '</span>';

  /* Contact links */
  document.getElementById('heroContact').innerHTML =
    '<a href="mailto:' + esc(p.email) + '" class="hero-email">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg> ' +
      esc(p.email) + '</a>' +
    '<a href="' + esc(p.linkedin) + '" class="hero-email" target="_blank" rel="noopener noreferrer">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> ' +
      'LinkedIn</a>';

  /* Footer */
  document.getElementById('footerName').textContent = p.name.first + ' ' + p.name.last;
  document.getElementById('footerCopy').textContent = '© ' + new Date().getFullYear() + ' ' + p.name.first + ' ' + p.name.last + '. All rights reserved.';

  /* --- Honors --- */
  document.getElementById('honorsContainer').innerHTML = d.honors.map(h =>
    '<div class="hero-honor-item">' +
      '<div class="hero-honor-icon">◈</div>' +
      '<div class="hero-honor-body">' +
        '<span class="hero-honor-title">' + esc(h.title) + '</span>' +
        '<span class="hero-honor-sub">' + esc(h.description) + '</span>' +
      '</div>' +
    '</div>'
  ).join('');

  /* --- Education --- */
  document.getElementById('eduContainer').innerHTML = d.education.map(e =>
    '<div class="hero-edu-item">' +
      '<img src="' + esc(e.logo) + '" alt="' + esc(e.institution) + '" class="hero-edu-logo">' +
      '<div class="hero-edu-body">' +
        '<span class="hero-edu-date">' + esc(e.period) + '</span>' +
        '<span class="hero-edu-inst">' + esc(e.institution) + '</span>' +
        '<span class="hero-edu-deg">' + esc(e.degree) + '</span>' +
      '</div>' +
    '</div>'
  ).join('');

  /* --- Research cards --- */
  const researchIcons = [
    '<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="5" fill="#9f86c0"/><ellipse cx="30" cy="30" rx="27" ry="11" stroke="#5e548e" stroke-width="1.5" fill="none"/><ellipse cx="30" cy="30" rx="27" ry="11" stroke="#5e548e" stroke-width="1.5" fill="none" transform="rotate(60 30 30)"/><ellipse cx="30" cy="30" rx="27" ry="11" stroke="#9f86c0" stroke-width="1" fill="none" transform="rotate(120 30 30)" opacity="0.5"/></svg>',
    '<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="30,4 56,19 56,41 30,56 4,41 4,19" stroke="#5e548e" stroke-width="1.5" fill="none"/><polygon points="30,14 46,23 46,37 30,46 14,37 14,23" stroke="#9f86c0" stroke-width="1" fill="none"/><circle cx="30" cy="30" r="5" fill="#9f86c0"/><line x1="30" y1="4" x2="30" y2="14" stroke="#5e548e" stroke-width="1"/><line x1="56" y1="19" x2="46" y2="23" stroke="#5e548e" stroke-width="1"/><line x1="56" y1="41" x2="46" y2="37" stroke="#5e548e" stroke-width="1"/><line x1="30" y1="56" x2="30" y2="46" stroke="#5e548e" stroke-width="1"/><line x1="4" y1="41" x2="14" y2="37" stroke="#5e548e" stroke-width="1"/><line x1="4" y1="19" x2="14" y2="23" stroke="#5e548e" stroke-width="1"/></svg>',
  ];

  document.getElementById('researchContainer').innerHTML = d.research.map((r, i) =>
    '<div class="research-card reveal">' +
      '<div class="rc-inner">' +
        '<div class="rc-icon">' + (researchIcons[i] || researchIcons[0]) + '</div>' +
        '<h3>' + esc(r.title) + '</h3>' +
        '<p class="rc-summary">' + esc(r.summary) + '</p>' +
        '<div class="rc-expand">' +
          '<p>' + esc(r.detail) + '</p>' +
          '<div class="rc-tags">' + r.tags.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' +
        '</div>' +
        '<button class="rc-toggle">Explore <span class="t-arrow">→</span></button>' +
      '</div>' +
    '</div>'
  ).join('');

  /* --- Publications --- */
  // Build filter buttons
  const pubTypes = [...new Set(d.publications.map(p => p.type))];
  document.getElementById('pubFilters').innerHTML =
    '<button class="pf-btn active" data-filter="all">All</button>' +
    pubTypes.map(t => '<button class="pf-btn" data-filter="' + esc(t) + '">' + esc(t[0].toUpperCase() + t.slice(1)) + '</button>').join('');

  const toggleSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
  const viewSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

  document.getElementById('pubContainer').innerHTML = d.publications.map(pub => {
    const badgesHtml = pub.badges.map(b => {
      const cls = b.toLowerCase() === 'sci' ? 'sci' : b.toLowerCase() === 'accepted' ? 'accepted' : 'journal';
      return '<span class="ptag ' + cls + '">' + esc(b) + '</span>';
    }).join('');

    return '<div class="pub-card' + (pub.type === 'patent' ? ' patent-card' : '') + ' reveal" data-type="' + esc(pub.type) + '">' +
      '<div class="pub-body">' +
        '<div class="pub-top">' +
          '<div class="pub-meta">' +
            '<span class="ptag ' + esc(pub.type) + '">' + esc(pub.type[0].toUpperCase() + pub.type.slice(1)) + '</span>' +
            badgesHtml +
            (pub.year ? '<span class="pub-year">' + esc(pub.year) + '</span>' : '') +
          '</div>' +
          '<h3 class="pub-title">' + esc(pub.title) + '</h3>' +
          '<p class="pub-authors">' + esc(pub.authors) + '</p>' +
          (pub.venue ? '<p class="pub-venue"><em>' + esc(pub.venue) + '</em>' + (pub.year ? ', ' + esc(pub.year) : '') + '</p>' : '') +
        '</div>' +
        '<div class="pub-abstract"><p>' + esc(pub.abstract) + '</p></div>' +
      '</div>' +
      '<div class="pub-actions">' +
        '<button class="pub-toggle-btn" title="Abstract">' + toggleSvg + '</button>' +
        (pub.link ? '<a href="' + esc(pub.link) + '" class="pub-view-btn" title="View Paper" target="_blank">' + viewSvg + '</a>' : '') +
      '</div>' +
    '</div>';
  }).join('');

  /* --- News --- */
  const newsYears = [...new Set(d.news.map(n => n.year))];
  document.getElementById('newsFilters').innerHTML =
    '<button class="nf-btn active" data-year="all">All</button>' +
    newsYears.map(y => '<button class="nf-btn" data-year="' + esc(y) + '">' + esc(y) + '</button>').join('');

  document.getElementById('newsContainer').innerHTML = d.news.map(n =>
    '<div class="news-item reveal" data-year="' + esc(n.year) + '">' +
      '<div class="ni-marker"><div class="ni-dot"></div></div>' +
      '<div class="ni-body">' +
        '<span class="ni-date">' + esc(n.date) + '</span>' +
        '<p>' + esc(n.text) + '</p>' +
      '</div>' +
    '</div>'
  ).join('');

  /* --- Experience --- */
  document.getElementById('expContainer').innerHTML = d.experience.map(e =>
    '<div class="exp-card reveal">' +
      '<div class="exp-head">' +
        '<div class="exp-logo"><img src="' + esc(e.logo) + '" alt="' + esc(e.company) + '"></div>' +
        '<div class="exp-info">' +
          '<h4 class="exp-company">' + esc(e.company) + '</h4>' +
          '<p class="exp-role">' + esc(e.role) + '</p>' +
          '<span class="exp-period">' + esc(e.period) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="exp-locs">' + e.locations.map(l => '<span class="loc-tag">' + esc(l) + '</span>').join('') + '</div>' +
      '<ul class="exp-points">' + e.points.map(pt => '<li>' + esc(pt) + '</li>').join('') + '</ul>' +
    '</div>'
  ).join('');

  /* --- Talks --- */
  document.getElementById('talksContainer').innerHTML = d.talks.map(t =>
    '<div class="talk-row reveal">' +
      '<span class="talk-date">' + esc(t.date) + '</span>' +
      '<div class="talk-body">' +
        '<p>' + esc(t.text) + '</p>' +
        (t.videoLink ? '<a href="' + esc(t.videoLink) + '" class="link-btn link-btn-sm">Watch Video →</a>' : '') +
      '</div>' +
    '</div>'
  ).join('');

})();

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
  navbar.classList.toggle('scrolled', window.scrollY > 40);

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

    document.querySelectorAll('.research-card').forEach(c => {
      c.classList.remove('expanded');
      c.querySelector('.rc-expand').classList.remove('open');
    });

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
   SECTION DIVIDERS
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
