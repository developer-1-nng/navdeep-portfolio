/* ═══════════════════════════════════════════════════
   PORTFOLIO DATA — ✏️ EDIT ALL YOUR INFO HERE
═══════════════════════════════════════════════════ */
const PORTFOLIO_DATA = {

  /* ── Typing animation phrases */
  typingPhrases: [
    'Frontend Engineer',
    'Angular Specialist',
    'TypeScript Engineer',
    'RxJS Practitioner',
    'UI Performance Expert'
  ],

  /* ── Counter targets */
  counters: { years: 4, projects: 10, apps: 6 },

  /* ── Skills: [emoji, name, level(0-100)] */
  skills: [
    ['🅰', 'Angular (v11–19)', 96],
    ['📘', 'TypeScript', 93],
    ['🌐', 'JavaScript ES6+', 91],
    ['🔄', 'RxJS', 90],
    ['📄', 'HTML5', 94],
    ['🎨', 'CSS3 / SCSS', 91],
    ['💎', 'Angular Material', 88],
    ['🔌', 'REST APIs', 89],
    ['📊', 'D3.js / amCharts', 80],
    ['🔧', 'Git / GitHub / GitLab', 92],
    ['🔐', 'Keycloak / OAuth2 / OIDC', 82],
    ['🛡', 'RBAC / Security', 80],
    ['⚡', 'Performance Optimization', 85],
    ['🧪', 'Jasmine / Karma / TDD', 79],
    ['🗄', 'Node.js / Express.js', 68],
    ['☁', 'Azure Pipelines / CI-CD', 70],
  ],

  /* ── Experience */
  experience: [
    {
      company: 'Sibiliti (Centelon Solutions)',
      role: 'Senior Software Engineer I',
      duration: 'Aug 2024 – Present',
      location: 'Pune, India',
      responsibilities: [
        'Implemented secure authentication using Keycloak with OAuth2 and OpenID Connect',
        'Designed and implemented Role-Based Access Control (RBAC) for feature-level permissions',
        'Developed enterprise-grade reusable Angular components and shared UI modules',
        'Implemented route guards to detect unsaved form changes and prevent data loss',
        'Resolved security vulnerabilities and dependency issues identified during security audits',
        'Delivered pixel-perfect responsive UI from Figma using Angular Material, SCSS, Flexbox, and CSS Grid',
        'Optimized application performance using lazy loading, efficient RxJS patterns, and improved change detection',
        'Integrated RESTful APIs and managed complex asynchronous data flows using reactive programming',
        'Leveraged AI-assisted tools including GitHub Copilot and Claude Code for rapid UI scaffolding, debugging, and code generation',
        'Participated in Agile ceremonies, sprint planning, backlog grooming, and peer code reviews',
      ],
      tags: ['Angular 19', 'Keycloak', 'OAuth2', 'RBAC', 'RxJS', 'Angular Material', 'SCSS', 'GitHub Copilot'],
    },
    {
      company: 'Sibiliti (Centelon Solutions)',
      role: 'Software Engineer I',
      duration: 'Sep 2022 – Jul 2024',
      location: 'Pune, India',
      responsibilities: [
        'Developed configurable dynamic forms and reusable data table components powering multiple modules',
        'Built interactive analytics dashboards using D3.js, dc.js, and amCharts for data visualization',
        'Integrated backend services using Angular services, RxJS operators, and REST APIs',
        'Developed complex UI including nested tables, repeatable sections, and dependent dropdowns',
        'Implemented custom Angular directives for input masking and advanced UI behaviours',
        'Built reusable global search and filtering system with dynamic query builder',
        'Performed Angular version upgrades and dependency migrations across the codebase',
        'Maintained multiple Angular applications derived from a shared base architecture',
      ],
      tags: ['Angular 13–17', 'D3.js', 'dc.js', 'amCharts', 'RxJS', 'TypeScript', 'PrimeNG', 'AG Grid'],
    },
    {
      company: 'Sibiliti (Centelon Solutions)',
      role: 'Junior Software Engineer',
      duration: 'Mar 2022 – Jul 2022',
      location: 'Pune, India',
      responsibilities: [
        'Assisted development of Angular modules using Reactive Forms and Angular Material',
        'Implemented pagination, sorting, and filtering with backend API integration',
        'Supported frontend feature development and debugging on enterprise applications',
      ],
      tags: ['Angular 11', 'Reactive Forms', 'Angular Material', 'REST APIs', 'Git'],
    },
  ],

  /* ── Projects */
  projects: [
    {
      emoji: '📋',
      gradient: 'linear-gradient(135deg,#0D1320,#1a2a4a)',
      title: 'Dynamic Form Builder',
      featured: true,
      description: 'Drag-and-drop Angular form designer with field placement, resizing, and nested layouts using Angular Gridster. Features real-time preview, configuration panel, and JSON schema generation for backend-driven form rendering.',
      tech: ['Angular', 'TypeScript', 'Angular Material', 'Angular Gridster', 'JSON Schema'],
      github: 'https://github.com/developer-1-nng/form-designer',
      demo: 'https://form-designer-eight.vercel.app/',
    },
    {
      emoji: '🔍',
      gradient: 'linear-gradient(135deg,#0D1320,#1a0d0d)',
      title: 'Crime Intelligence System',
      featured: false,
      description: 'Angular 19 application for crime data analysis and intelligence reporting. Built with component-based architecture, TypeScript, and SCSS — showcasing structured data presentation and clean UI design.',
      tech: ['Angular 19', 'TypeScript', 'SCSS', 'HTML5', 'Angular CLI'],
      github: 'https://github.com/developer-1-nng/crime-intelligence-system',
      demo: 'https://crime-intelligence-system.vercel.app/',
    },
    {
      emoji: '📊',
      gradient: 'linear-gradient(135deg,#0D1320,#1a3020)',
      title: 'Interactive Analytics Dashboard',
      featured: false,
      description: 'Data-driven analytics platform with rich visualizations built using D3.js, dc.js, and amCharts. Features cross-filtering, drill-downs, and real-time data updates via reactive RxJS streams.',
      tech: ['Angular', 'D3.js', 'dc.js', 'amCharts', 'RxJS', 'REST APIs'],
      github: 'https://github.com/developer-1-nng',
      demo: '#',
    },
    {
      emoji: '🔐',
      gradient: 'linear-gradient(135deg,#0D1320,#2a1a3a)',
      title: 'Secure Enterprise App (Keycloak)',
      featured: false,
      description: 'Enterprise Angular application with Keycloak-based SSO, OAuth2/OIDC authentication, role-based access control (RBAC), route guards for unsaved changes, and OWASP-compliant security practices.',
      tech: ['Angular', 'Keycloak', 'OAuth2', 'OpenID Connect', 'RBAC', 'SCSS'],
      github: 'https://github.com/developer-1-nng',
      demo: '#',
    },
    {
      emoji: '📦',
      gradient: 'linear-gradient(135deg,#0D1320,#0d2010)',
      title: 'ngx-mat-selection-list-search',
      featured: true,
      npm: 'https://www.npmjs.com/package/ngx-mat-selection-list-search',
      description: 'Published npm library — a lightweight, plug-and-play Angular package that seamlessly integrates search into Angular Material\'s mat-selection-list. Fills a real gap: no existing package solved this before.',
      tech: ['Angular', 'Angular Material', 'TypeScript', 'npm Package', 'Open Source'],
      github: 'https://github.com/developer-1-nng',
      demo: 'https://www.npmjs.com/package/ngx-mat-selection-list-search',
    },
  ],

  /* ── Certifications & Awards */
  certifications: [
    { icon: '📦', name: 'ngx-mat-selection-list-search', issuer: 'Published npm Package — Open Source Author', year: '2025' },
    { icon: '🅰', name: 'Angular – The Complete Guide (2025 Edition)', issuer: 'Udemy', year: '2025' },
    { icon: '🧪', name: 'Unit Testing JavaScript with Jasmine', issuer: 'Udemy', year: '2023' },
    { icon: '🌐', name: 'Responsive Real-World Websites with HTML & CSS', issuer: 'Udemy', year: '2022' },
    { icon: '🏆', name: 'Stand Out Performer Award', issuer: 'Sibiliti', year: 'Mar 2025' },
    { icon: '🤝', name: 'Ace Alliance Award', issuer: 'Sibiliti — Outstanding Teamwork', year: 'Sep 2023' },
  ],
};

/* ═══════════════════════════════════════════════════
   FORM VARS
═══════════════════════════════════════════════════ */

const FORMSPREE_URL = "https://formspree.io/f/mwvzqeqd"

/* ═══════════════════════════════════════════════════
   RENDER SKILLS
═══════════════════════════════════════════════════ */
const skillsGrid = document.getElementById('skillsGrid');
PORTFOLIO_DATA.skills.forEach(([icon, name, level], i) => {
  const delay = (i % 4) * 0.08;
  skillsGrid.innerHTML += `
    <div class="skill-card reveal" style="transition-delay:${delay}s">
      <div class="skill-icon-wrap">${icon}</div>
      <div class="skill-name">${name}</div>
      <div class="skill-level">
        <div class="skill-level-fill" data-level="${level}"></div>
      </div>
      <div class="skill-pct">${level}%</div>
    </div>
  `;
});

/* ═══════════════════════════════════════════════════
   RENDER EXPERIENCE
═══════════════════════════════════════════════════ */
const timeline = document.getElementById('timeline');
PORTFOLIO_DATA.experience.forEach(exp => {
  timeline.innerHTML += `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-company">${exp.company}</div>
            <div class="exp-role">${exp.role}</div>
          </div>
          <div class="exp-meta">
            <span class="exp-duration">${exp.duration}</span>
            <span class="exp-location">📍 ${exp.location}</span>
          </div>
        </div>
        <ul class="exp-responsibilities">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <div class="exp-tags">
          ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
});

/* ═══════════════════════════════════════════════════
   RENDER PROJECTS
═══════════════════════════════════════════════════ */
const projectsGrid = document.getElementById('projectsGrid');
PORTFOLIO_DATA.projects.forEach(p => {
  const isNpm = !!p.npm;
  projectsGrid.innerHTML += `
    <div class="project-card reveal">
      <div class="project-thumb" style="background:${p.gradient}">
        <div class="project-thumb-inner">${p.emoji}</div>
        <div class="project-thumb-overlay"></div>
        ${p.featured && isNpm ? '<span class="project-featured-badge" style="background:#CC3534">📦 npm Package</span>' : p.featured ? '<span class="project-featured-badge">Featured</span>' : ''}
      </div>
      <div class="project-body">
        <div class="project-title" style="${isNpm ? 'font-family:monospace;font-size:.92rem;letter-spacing:-.01em' : ''}">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        ${isNpm ? `
        <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.8rem">
          <span style="font-size:.72rem;background:rgba(204,53,52,.12);color:#f87171;border:1px solid rgba(204,53,52,.25);padding:.2rem .7rem;border-radius:100px;font-weight:500">✦ Open Source</span>
          <span style="font-size:.72rem;background:rgba(34,197,94,.1);color:#4ade80;border:1px solid rgba(34,197,94,.2);padding:.2rem .7rem;border-radius:100px;font-weight:500">⬇ npm install</span>
        </div>` : ''}
        <div class="project-tech">
          ${p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.github}" class="btn-project btn-project-github" target="_blank" rel="noopener">
            ⟨/⟩ GitHub
          </a>
          <a href="${isNpm ? p.npm : p.demo}" class="btn-project btn-project-demo" target="_blank" rel="noopener">
            ${isNpm ? '📦 View on npm' : '↗ Live Demo'}
          </a>
        </div>
      </div>
    </div>
  `;
});

/* ═══════════════════════════════════════════════════
   RENDER CERTIFICATIONS
═══════════════════════════════════════════════════ */
const certGrid = document.getElementById('certGrid');
PORTFOLIO_DATA.certifications.forEach((cert, i) => {
  const delay = (i % 3) * 0.1;
  certGrid.innerHTML += `
    <div class="cert-card reveal" style="transition-delay:${delay}s">
      <div class="cert-icon">${cert.icon}</div>
      <div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-year">${cert.year}</div>
      </div>
    </div>
  `;
});



/* ═══════════════════════════════════════════════════
   TYPING ANIMATION
═══════════════════════════════════════════════════ */
(function () {
  const el = document.getElementById('typedText');
  const phrases = PORTFOLIO_DATA.typingPhrases;
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
    }
    setTimeout(type, deleting ? 45 : 80);
  }
  setTimeout(type, 800);
})();

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1600) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════════════
   INTERSECTION OBSERVER (reveal + counters + skills)
═══════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      /* skill bar fill */
      const fill = e.target.querySelector('.skill-level-fill');
      if (fill) {
        const lvl = fill.dataset.level / 100;
        fill.style.transform = `scaleX(${lvl})`;
      }
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* counter observer */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(document.getElementById('counter-years'), PORTFOLIO_DATA.counters.years);
      animateCounter(document.getElementById('counter-projects'), PORTFOLIO_DATA.counters.projects);
      animateCounter(document.getElementById('counter-apps'), PORTFOLIO_DATA.counters.apps);
      counterObs.disconnect();
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObs.observe(heroStats);

/* ═══════════════════════════════════════════════════
   NAVBAR SCROLL + SMOOTH SCROLL
═══════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

function smoothScrollTo(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const navHeight = navbar.getBoundingClientRect().height;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* Intercept ALL internal anchor clicks (nav, mobile menu, CTAs) */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    e.preventDefault();
    smoothScrollTo(id);
  });
});

/* ═══════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════ */
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
});
/* Restore saved theme */
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.dataset.theme = saved;

/* ═══════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════ */
const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('hamburgerBtn').addEventListener('click', () => mobileMenu.classList.add('open'));
document.getElementById('mobileClose').addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ═══════════════════════════════════════════════════
   SCROLL TO TOP
═══════════════════════════════════════════════════ */
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════ */
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn = this.querySelector('.btn-submit');
  const success = document.getElementById('formSuccess');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = new FormData(this);

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      success.style.display = 'block';
      this.reset();
      btn.textContent = 'Message Sent!';
    } else {
      btn.textContent = 'Failed';
      alert('Something went wrong.');
    }

  } catch (error) {
    btn.textContent = 'Error';
    alert('Network error.');
  }

  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 3000);
});

/* ═══════════════════════════════════════════════════
   ACTIVE NAV LINK (scroll spy)
═══════════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const spyObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id
          ? 'var(--blue-400)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => spyObs.observe(s));