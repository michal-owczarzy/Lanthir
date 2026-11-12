/* ═══════════════════════════════════════════════════════════
   LANTHIR — trail.js  (homepage · the trace)
   One line of the hero's own ASCII characters that the reader draws down the
   page. It leaves the horizon at the scroll cue, sweeps into the left margin
   and runs beside the content, turning in to a checkpoint beside every
   section's label. A checkpoint lights when the line reaches it, the way a
   health check turns green, and its label takes the signal colour. At the
   footer the line runs out into the sky behind the closing name.

   · Drawn on a canvas that lives in page coordinates and is re-anchored
     around the screen on every frame, so it scrolls with the page on the
     compositor and never swims against the labels it points at.
   · It only ever runs in the margin (the opening sweep crosses the empty
     foot of the hero), so it sits above the page without covering text,
     and darkens over the light chapters.
   · The head churns through the ramp while it draws and settles into a
     resting comet when the page stops.
   · Reduced motion: the whole line, drawn and lit, moving only with the page.
   · ?trail=off removes it.
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const host = document.getElementById('trail');
  if (!host) return;
  if (new URLSearchParams(location.search).get('trail') === 'off') { host.remove(); return; }
  const canvas = host.querySelector('canvas');
  const ctx = canvas && canvas.getContext('2d');
  if (!ctx) { host.remove(); return; }

  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STOPS = ['sluzby', 'reference', 'cenik', 'postup', 'faq', 'about', 'dalsi-sluzby', 'kontakt'];
  const FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
  const HEAD = '@#8S0Xx';     /* the resting head, brightest first: the hero's ramp */
  const BOIL = '@#8S0Xx+=';   /* what the head churns through while it draws */
  const BODY = '+x=+x+=X+x';  /* the settled line */
  const BURST = '+x=+x+=x';
  const READ = 0.62;          /* the head rides this far down the screen */
  const DARK  = { head: '#eef1f2', near: '#a8f4ff', body: '#1fcded', node: '#1fcded', idle: '#8a9199' };
  const LIGHT = { head: '#0f1113', near: '#0d4a57', body: '#087286', node: '#087286', idle: '#59616a' };

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const ss = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  /* layout position, ignoring the reveal transforms */
  const docTop = el => { let y = 0; for (let e = el; e; e = e.offsetParent) y += e.offsetTop; return y; };
  const docLeft = el => { let x = 0; for (let e = el; e; e = e.offsetParent) x += e.offsetLeft; return x; };
  /* a fixed hash, so the line is the same on every visit */
  const hash = n => {
    let h = Math.imul(n ^ 0x9e3779b9, 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };

  let S = [];          /* samples along the line: { x, y, r, light, near } */
  let CP = [];         /* checkpoints: { i, x, y, tag, light, lit, at } */
  let fs = 12, W = 0, H = 0, dpr = 1, docEnd = 0, sweepY = 0, fadeN = 1, laneW = 0, contentL = 0, cpX0 = 0;
  let cur = -1, target = -1, active = 0, raf = 0, last = 0, tick = 0, burstUntil = 0;
  let cw = 0, chh = 0, cdpr = 0;

  /* ── The route ──────────────────────────────
     Every part of the line is a graph x(y), so y only ever grows along it
     and the screen's slice of it is one binary search away. */
  const build = () => {
    W = document.documentElement.clientWidth;
    H = innerHeight;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    const hero = document.querySelector('.hero');
    const mark = document.querySelector('.footer-mark');
    const footer = document.querySelector('.footer');
    const tags = STOPS.map(id => document.getElementById(id))
      .map(s => s && s.querySelector('.tag'))
      .filter(t => t && t.offsetParent);
    /* a rebuild keeps the head where it was on the page, and the nodes it
       has passed stay lit without landing again */
    const headY = S.length && cur >= 0 ? S[Math.min(S.length - 1, Math.floor(cur))].y : -1;
    S = []; CP = [];
    if (!hero || !mark || !tags.length) return;

    const L = docLeft(tags[0]);                       /* where the content starts */
    fs = L < 30 ? 10 : L < 60 ? 11 : L < 110 ? 12 : 14;
    const step = fs * 0.72;
    const cpX = L - clamp(L * 0.3, fs * 0.9, 46);     /* the node, just left of the label */
    const outer = Math.max(fs * 0.5, L * 0.14);
    const D = Math.max(0, cpX - outer);
    const xo = outer + D * 0.4, amp = D * 0.25;       /* the lane the line wanders in */
    laneW = cpX + fs * 2;
    contentL = L; cpX0 = cpX;

    const lights = Array.from(document.querySelectorAll('.chapter-light'))
      .map(s => [docTop(s), docTop(s) + s.offsetHeight]);
    const isLight = y => lights.some(r => y >= r[0] && y < r[1]);

    const heroEnd = docTop(hero) + hero.offsetHeight;
    const start = { x: W / 2, y: heroEnd - H * 0.04 };          /* the foot of the scroll cue */
    const stops = tags.map(t => ({ x: cpX, y: docTop(t) + t.offsetHeight / 2, tag: t }));
    const end = { x: xo, y: docTop(mark) + mark.offsetHeight * 0.5 };
    docEnd = footer ? docTop(footer) + footer.offsetHeight : document.documentElement.scrollHeight;
    sweepY = stops[0].y;

    /* Each leg is a point function p(u), u 0..1, with y never decreasing.
       The opening sweep is a cubic: down off the cue, across the empty foot
       of the hero, and down into the first node from above. The rest run
       the margin: out from a node, a slow wander, back in to the next. */
    const legs = [];
    {
      const a = start, b = stops[0], dy = Math.max(1, b.y - a.y);
      const y1 = a.y + dy * 0.62, y2 = b.y - dy * 0.62;
      const P = [a.x, a.y, a.x, y1, b.x, y2, b.x, b.y];
      legs.push({ a, b, len: Math.abs(b.x - a.x) + dy, p: u => {
        const v = 1 - u, A = v * v * v, B = 3 * v * v * u, C = 3 * v * u * u, E = u * u * u;
        return [A * P[0] + B * P[2] + C * P[4] + E * P[6], A * P[1] + B * P[3] + C * P[5] + E * P[7]];
      } });
    }
    for (let k = 0; k < stops.length; k++) {
      const a = stops[k], b = k + 1 < stops.length ? stops[k + 1] : end, lastLeg = k + 1 === stops.length;
      const len = Math.max(1, b.y - a.y);
      const r = Math.min(0.42, (H * 0.32) / len);
      const n = Math.max(1, Math.round(len / (H * 0.85)));
      const sign = k % 2 ? 1 : -1;
      legs.push({ a, b, len, p: t => {
        const env = lastLeg ? ss(0, r, t) : ss(0, r, t) * ss(0, r, 1 - t);
        const x = a.x + (xo - a.x) * env + sign * amp * Math.sin(Math.PI * n * t) * env * (lastLeg ? 1 - t : 1);
        return [x, a.y + len * t];
      } });
    }

    /* walk the legs, one character every `step` of arc */
    for (let li = 0; li < legs.length; li++) {
      const g = legs[li];
      if (li > 0) {                      /* every leg after the sweep starts on a checkpoint */
        CP.push({ i: S.length, x: g.a.x, y: g.a.y, tag: g.a.tag, light: isLight(g.a.y), lit: false, at: 0 });
        S.push({ x: g.a.x, y: g.a.y, r: hash(S.length), light: isLight(g.a.y), near: CP.length - 1 });
      } else {
        S.push({ x: g.a.x, y: g.a.y, r: hash(0), light: isLight(g.a.y), near: -1 });
      }
      const N = Math.ceil(g.len / 1.2);
      let px = g.a.x, py = g.a.y, acc = 0;
      for (let j = 1; j < N; j++) {
        const [x, y] = g.p(j / N);
        acc += Math.hypot(x - px, y - py);
        px = x; py = y;
        if (acc >= step) { acc = 0; S.push({ x, y, r: hash(S.length), light: isLight(y), near: -1 }); }
      }
    }
    S.push({ x: end.x, y: end.y, r: hash(S.length), light: false, near: -1 });

    /* keep the nodes clear: the line stops just short of each one */
    CP.forEach((p, ci) => {
      for (let i = Math.max(0, p.i - 6); i < Math.min(S.length, p.i + 7); i++) {
        if (i !== p.i && Math.hypot(S[i].x - p.x, S[i].y - p.y) < fs * 1.25) S[i].near = ci;
      }
    });
    fadeN = Math.max(1, Math.round(Math.min(360, (end.y - stops[stops.length - 1].y) * 0.45) / step));
    if (RM) cur = target = S.length - 1;
    else if (headY >= 0) {
      let i = 0;
      while (i + 1 < S.length && S[i + 1].y <= headY) i++;
      cur = target = i;
    }
    const head = Math.floor(cur);
    CP.forEach(p => {
      p.lit = head >= p.i;
      if (!RM) p.tag.classList.toggle('is-hit', p.lit);
    });
  };

  /* ── Where the head is ──────────────────────
     It rides READ of the way down the screen, and over the last screen of
     scroll it slides down so the line reaches its end exactly at the bottom. */
  const headFor = () => {
    if (!S.length) return -1;
    const y = scrollY, max = Math.max(1, docEnd - H);
    const fEnd = (S[S.length - 1].y - max) / H + 0.01;
    const f = READ + (fEnd - READ) * ss(max - H, max, y);
    const hy = y + H * f;
    if (hy < S[0].y) return -1;
    let lo = 0, hi = S.length - 1;
    while (lo < hi) { const m = (lo + hi + 1) >> 1; if (S[m].y <= hy) lo = m; else hi = m - 1; }
    return lo;
  };

  const firstAtOrBelow = y => {
    let lo = 0, hi = S.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (S[m].y < y) lo = m + 1; else hi = m; }
    return lo;
  };

  /* ── Drawing ─────────────────────────────── */
  const draw = now => {
    const pad = Math.round(H * 0.35);
    const ch = H + pad * 2;
    let t0 = Math.round(scrollY - pad);
    t0 = clamp(t0, 0, Math.max(0, docEnd - ch));
    /* the canvas is as wide as the margin, or half the page while the
       opening sweep is in view */
    const want = Math.min(W, Math.ceil(((t0 < sweepY + fs ? W / 2 + fs * 2 : laneW)) / 32) * 32);
    if (want !== cw || ch !== chh || dpr !== cdpr) {
      cw = want; chh = ch; cdpr = dpr;
      canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
      canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
    }
    canvas.style.transform = 'translate3d(0,' + t0 + 'px,0)';
    ctx.setTransform(dpr, 0, 0, dpr, 0, -t0 * dpr);
    ctx.clearRect(0, t0, cw, ch);
    if (!S.length) return;

    const head = Math.floor(cur);
    /* checkpoints light as the head passes, wherever they are */
    for (const p of CP) {
      const lit = head >= p.i;
      if (lit !== p.lit) {
        p.lit = lit;
        p.at = lit && !RM ? now : 0;
        if (p.at) burstUntil = Math.max(burstUntil, now + 720);
        if (!RM) p.tag.classList.toggle('is-hit', lit);
      }
    }

    ctx.font = '500 ' + fs + 'px ' + FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const total = S.length;
    const boil = !RM && active > 0.02;
    for (let i = firstAtOrBelow(t0 - fs); i < total && i <= head; i++) {
      const s = S[i];
      if (s.y > t0 + ch + fs) break;
      if (s.near >= 0) continue;
      const d = head - i;
      const pal = s.light ? LIGHT : DARK;
      let c, col, a;
      if (d < HEAD.length + 3) {
        if (boil) c = BOIL[clamp(Math.round(d * 0.8 + (hash(i * 31 + tick) - 0.5) * 4 * active), 0, BOIL.length - 1)];
        else c = d < HEAD.length ? HEAD[d] : BODY[Math.floor(s.r * BODY.length)];
        col = d < 2 ? pal.head : pal.near;
        a = 1;
      } else {
        c = BODY[Math.floor(s.r * BODY.length)];
        if (boil && hash(i * 7 + tick) < 0.03 * active) c = BOIL[Math.floor(hash(i + tick * 3) * BOIL.length)];
        col = pal.body;
        a = (s.light ? 0.62 : 0.48) + 0.4 * Math.exp(-d / 90);
      }
      if (i > total - fadeN) {                  /* runs out into the sky */
        const k = (total - i) / fadeN;
        a *= k;
        if (k < 0.45) c = k < 0.2 ? '.' : ':';
      }
      ctx.globalAlpha = a;
      ctx.fillStyle = col;
      ctx.fillText(c, s.x, s.y);
    }

    /* the nodes: ( o ) waiting, (@) reached, a ring of the ramp when it
       lands. Everything stays in the margin: on a narrow one the brackets go
       and the ring flattens to a vertical spark. */
    const gap = fs * 0.9;
    const brackets = contentL - cpX0 > fs * 2.2;
    const rxL = cpX0 - fs * 0.3, rxR = Math.max(0, contentL - fs * 0.6 - cpX0);
    for (const p of CP) {
      if (p.y < t0 - 60 || p.y > t0 + ch + 60) continue;
      const pal = p.light ? LIGHT : DARK;
      if (p.lit) {
        ctx.font = '600 ' + Math.round(fs * 1.3) + 'px ' + FONT;
        ctx.globalAlpha = 1; ctx.fillStyle = pal.node;
        ctx.fillText('@', p.x, p.y);
        ctx.font = '500 ' + fs + 'px ' + FONT;
        if (brackets) {
          ctx.globalAlpha = 0.6;
          ctx.fillText('(', p.x - gap, p.y); ctx.fillText(')', p.x + gap, p.y);
        }
        if (p.at && now - p.at < 720) {
          const k = (now - p.at) / 720, rr = fs * (1 + 1.9 * k);
          ctx.globalAlpha = 0.9 * (1 - k) * (1 - k);
          ctx.fillStyle = pal.near;
          for (let j = 0; j < BURST.length; j++) {
            const an = (j / BURST.length) * Math.PI * 2 + 0.4, cx = Math.cos(an);
            const dx = cx * Math.min(rr * 1.25, cx < 0 ? rxL : rxR);
            ctx.fillText(BURST[j], p.x + dx, p.y + Math.sin(an) * rr);
          }
        }
      } else {
        ctx.globalAlpha = 0.5; ctx.fillStyle = pal.idle;
        ctx.fillText('o', p.x, p.y);
        if (brackets) {
          ctx.globalAlpha = 0.28;
          ctx.fillText('(', p.x - gap, p.y); ctx.fillText(')', p.x + gap, p.y);
        }
      }
    }
    ctx.globalAlpha = 1;
  };

  /* ── The loop: runs while the line moves, the head churns or a node
     lands, then rests ─────────────────────── */
  const frame = now => {
    raf = 0;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    target = headFor();
    const prev = cur;
    if (RM) cur = S.length - 1;
    else {
      cur += (target - cur) * (1 - Math.exp(-dt * 9));
      if (Math.abs(target - cur) < 0.05) cur = target;
    }
    active = Math.abs(cur - prev) > 0.01 ? 1 : active * Math.exp(-dt * 2.2);
    if (active < 0.02) active = 0;
    tick = Math.floor(now / 42);          /* the churn runs at ~24 fps */
    draw(now);
    if (!RM && (cur !== target || active > 0 || now < burstUntil)) raf = requestAnimationFrame(frame);
    else last = 0;
  };
  const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };

  let queued = false;
  const rebuild = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; build(); wake(); });
  };

  addEventListener('scroll', wake, { passive: true });
  addEventListener('resize', rebuild, { passive: true });
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(rebuild);
    const m = document.querySelector('main'), f = document.querySelector('.footer');
    if (m) ro.observe(m);
    if (f) ro.observe(f);
  }
  /* the cell metrics settle once the mono face is in */
  const go = () => { build(); wake(); };
  if (document.fonts && document.fonts.load) {
    document.fonts.load('500 14px "JetBrains Mono"', '@#8S0Xx+=').then(go, go);
  } else go();
})();
