/* ═══════════════════════════════════════════
   LANTHIR — script.js
   Canvas Network · Scroll Animations · Counters
═══════════════════════════════════════════ */

// ── Nav scroll effect ────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Mobile burger ────────────────────────
const burger    = document.getElementById('burger');
const navLinks  = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Hero Canvas — Particle Network ───────
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [], animId;
  const NODE_COUNT    = 70;
  const CONNECT_DIST  = 160;
  const COLORS = ['#7c3aff', '#2060ff', '#00d4c8', '#4090ff', '#9b6aff'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeNode() {
    return {
      x:   Math.random() * W,
      y:   Math.random() * H,
      vx:  (Math.random() - .5) * .4,
      vy:  (Math.random() - .5) * .4,
      r:   Math.random() * 2 + 1,
      col: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  function init() {
    resize();
    nodes = Array.from({ length: NODE_COUNT }, makeNode);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT_DIST) {
          const alpha = (1 - d / CONNECT_DIST) * .25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(32, 140, 255, ${alpha})`;
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.col;
      ctx.globalAlpha = .7;
      ctx.fill();
      // Glow
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
      grad.addColorStop(0, n.col.replace(')', ', .15)').replace('rgb', 'rgba'));
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.globalAlpha = 1;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function update() {
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      if (n.y > H + 20) n.y = -20;
    }
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  // Mouse interaction — subtle repel
  let mx = -9999, my = -9999;
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
  }, { passive: true });
  canvas.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  const origUpdate = update;
  function updateWithMouse() {
    origUpdate();
    for (const n of nodes) {
      const dx = n.x - mx, dy = n.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        n.vx += (dx / d) * .06;
        n.vy += (dy / d) * .06;
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 1.5) { n.vx = (n.vx / speed) * 1.5; n.vy = (n.vy / speed) * 1.5; }
      }
    }
  }
  // Patch update
  canvas.addEventListener('mousemove', () => {}, { passive: true });

  function loopFull() {
    updateWithMouse();
    draw();
    animId = requestAnimationFrame(loopFull);
  }

  init();
  loopFull();

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas.parentElement);
})();

// ── Scroll Reveal (Intersection Observer) ─
(function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // Stagger siblings in the same parent
        const siblings = Array.from(e.target.parentElement.querySelectorAll('[data-reveal]'));
        const idx = siblings.indexOf(e.target);
        setTimeout(() => {
          e.target.classList.add('revealed');
        }, idx * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
})();

// ── Animated Stat Counters ───────────────
(function initCounters() {
  const counters = document.querySelectorAll('.stat-count[data-target]');
  if (!counters.length) return;

  function countUp(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        countUp(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();

// ── Contact Form ─────────────────────────
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async send — replace with real endpoint
    setTimeout(() => {
      form.querySelectorAll('input, textarea').forEach(el => el.value = '');
      btn.style.display = 'none';
      success.classList.add('show');
    }, 1200);
  });
})();

// ── Smooth active nav link highlight ─────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--text)';
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
})();
