/* ═══════════════════════════════════════════
   LANTHIR — dashboard.js  (/observabilita/)
   A sample observability dashboard that is actually running: the service map
   carries traffic, the numbers drift, the chart and the heatmap scroll, logs
   arrive. All data is generated here and labelled as sample data on screen.
   Hover or tap a node on the map to read it. Everything stops off screen;
   with reduced motion the board renders once and holds still.
═══════════════════════════════════════════ */
(function () {
  const root = document.getElementById('dash');
  if (!root) return;
  const RMo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';
  const C = { cyan: '#1fcded', spark: '#3edc97', blue: '#1aa9c7', ice: '#c9d3da', warn: '#f5b94a', err: '#ff7a85', dim: '#8a9199', ink: '#eef1f2' };
  const lang = () => (typeof currentLang !== 'undefined' ? currentLang : 'cs');
  const nf = (v, d) => v.toLocaleString(lang() === 'en' ? 'en-GB' : lang() === 'pl' ? 'pl-PL' : 'cs-CZ', { minimumFractionDigits: d, maximumFractionDigits: d });
  const rnd = (a, b) => a + Math.random() * (b - a);
  const walk = (v, step, lo, hi) => Math.min(hi, Math.max(lo, v + rnd(-step, step)));

  /* ── canvas helper: crisp at any DPR ── */
  const fit = cv => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = cv.clientWidth, h = cv.clientHeight;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return [g, w, h];
  };

  /* ══ 1. Service map ══ */
  const svg = document.getElementById('dashMap');
  const read = document.getElementById('dashRead');
  const NODES = [
    { id: 'internet', x: 46,  y: 165, kind: 'ext' },
    { id: 'fw-01',    x: 150, y: 165 },
    { id: 'vpn-pobocka', x: 150, y: 285 },
    { id: 'lb-01',    x: 258, y: 165 },
    { id: 'web-1',    x: 366, y: 75 },
    { id: 'web-2',    x: 366, y: 165 },
    { id: 'web-3',    x: 366, y: 255 },
    { id: 'api',      x: 478, y: 165 },
    { id: 'cache',    x: 590, y: 70 },
    { id: 'db-01',    x: 640, y: 165 },
    { id: 'queue',    x: 590, y: 260 },
    { id: 'srv-files', x: 478, y: 300, warn: true },
    { id: 'iot-gw',   x: 46,  y: 50 }
  ];
  const byId = Object.fromEntries(NODES.map(n => [n.id, n]));
  const EDGES = [
    ['internet', 'fw-01', 3], ['vpn-pobocka', 'fw-01', 1], ['iot-gw', 'fw-01', 1], ['fw-01', 'lb-01', 3],
    ['lb-01', 'web-1', 2], ['lb-01', 'web-2', 2], ['lb-01', 'web-3', 2],
    ['web-1', 'api', 1.5], ['web-2', 'api', 1.5], ['web-3', 'api', 1.5],
    ['api', 'cache', 2], ['api', 'db-01', 2], ['api', 'queue', 1.2], ['api', 'srv-files', 0.8], ['queue', 'db-01', 0.8]
  ];
  /* live per-node readings */
  NODES.forEach(n => { n.cpu = rnd(18, 55); n.p95 = rnd(40, 220); n.rps = rnd(80, 600); if (n.warn) n.disk = 84; });

  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const gEdges = el('g', { class: 'm-edges' }, svg);
  const gPk = el('g', { class: 'm-packets' }, svg);
  const gNodes = el('g', { class: 'm-nodes' }, svg);
  const edgeEls = EDGES.map(([a, b, w]) => {
    const A = byId[a], B = byId[b];
    const line = el('line', { x1: A.x, y1: A.y, x2: B.x, y2: B.y, class: 'm-edge' }, gEdges);
    return { a: A, b: B, w, line, len: Math.hypot(B.x - A.x, B.y - A.y) };
  });
  NODES.forEach(n => {
    const g = el('g', { class: 'm-node' + (n.warn ? ' is-warn' : '') + (n.kind === 'ext' ? ' is-ext' : ''), transform: `translate(${n.x} ${n.y})`, tabindex: '0', role: 'button', 'aria-label': n.id }, gNodes);
    el('circle', { r: 22, class: 'm-halo' }, g);
    el('circle', { r: 11, class: 'm-core' }, g);
    el('circle', { r: 4, class: 'm-dot' }, g);
    const t = el('text', { y: 36, class: 'm-label', 'text-anchor': 'middle' }, g);
    t.textContent = n.id;
    n.g = g;
    const show = () => { focus = n; paintRead(); highlight(); };
    g.addEventListener('pointerenter', show);
    g.addEventListener('focus', show);
    g.addEventListener('click', show);
  });
  let focus = byId['srv-files'];
  const highlight = () => {
    NODES.forEach(n => n.g.classList.toggle('is-focus', n === focus));
    edgeEls.forEach(e => e.line.classList.toggle('is-lit', e.a === focus || e.b === focus));
  };
  const L = {
    cs: { cpu: 'CPU', disk: 'disk /data', full: 'plno za ~6 dní', ok: 'v pořádku', warn: 'varování' },
    en: { cpu: 'CPU', disk: 'disk /data', full: 'full in ~6 days', ok: 'healthy', warn: 'warning' },
    pl: { cpu: 'CPU', disk: 'dysk /data', full: 'pełny za ~6 dni', ok: 'w porządku', warn: 'ostrzeżenie' }
  };
  const paintRead = () => {
    const n = focus, l = L[lang()] || L.cs;
    if (n.kind === 'ext') {
      read.innerHTML = `<b>${n.id}</b><span>${nf(kpi.thr, 2)} Gb/s · ${nf(n.rps * 4, 0)} req/s</span>`;
      return;
    }
    const state = n.warn ? `<em class="w">${l.warn}</em>` : `<em>${l.ok}</em>`;
    const extra = n.warn ? `<span class="w">${l.disk} ${nf(n.disk, 1)} % · ${l.full}</span>` : '';
    read.innerHTML = `<b>${n.id}</b>${state}<span>${l.cpu} ${nf(n.cpu, 0)} % · p95 ${nf(n.p95, 0)} ms · ${nf(n.rps, 0)} req/s</span>${extra}`;
  };
  highlight();

  /* packets: a pool of dots riding the edges, weighted by traffic */
  const packets = [];
  const spawn = () => {
    const tot = edgeEls.reduce((s, e) => s + e.w, 0);
    let r = Math.random() * tot, e = edgeEls[0];
    for (const x of edgeEls) { r -= x.w; if (r <= 0) { e = x; break; } }
    const dot = el('circle', { r: e.b.warn ? 3 : 2.4, class: 'm-pk' + (e.b.warn ? ' w' : '') }, gPk);
    packets.push({ e, t: 0, v: rnd(90, 160) / e.len, dot });
  };

  /* ══ 2. KPI tiles ══ */
  const kpi = { up: 99.982, p95: 182, err: 0.04, thr: 1.82 };
  const series = (n, v, step, lo, hi) => { const a = [v]; while (a.length < n) a.push(walk(a[a.length - 1], step, lo, hi)); return a; };
  const hist = { p95: series(40, 182, 6, 150, 230), thr: series(40, 1.8, 0.06, 1.3, 2.3), err: series(40, 0.04, 0.005, 0.01, 0.09), up: series(40, 99.982, 0.0005, 99.976, 99.988) };
  const kEls = {};
  root.querySelectorAll('[data-k]').forEach(e => { kEls[e.dataset.k] = { v: e, sp: e.parentElement.querySelector('canvas') }; });
  const fmtK = { up: v => nf(v, 3) + ' %', p95: v => nf(v, 0) + ' ms', err: v => nf(v, 2) + ' %', thr: v => nf(v, 2) + ' Gb/s' };
  const colK = { up: C.spark, p95: C.cyan, err: C.warn, thr: C.blue };
  const paintKpis = () => {
    for (const k in kEls) {
      kEls[k].v.textContent = fmtK[k](kpi[k]);
      const [g, w, h] = fit(kEls[k].sp);
      const d = hist[k], lo = Math.min(...d), hi = Math.max(...d), span = hi - lo || 1;
      g.clearRect(0, 0, w, h);
      g.beginPath();
      d.forEach((v, i) => { const x = i / (d.length - 1) * w, y = h - 3 - (v - lo) / span * (h - 6); i ? g.lineTo(x, y) : g.moveTo(x, y); });
      g.strokeStyle = colK[k]; g.lineWidth = 1.6; g.shadowColor = colK[k]; g.shadowBlur = 6; g.stroke();
      g.shadowBlur = 0;
      g.lineTo(w, h); g.lineTo(0, h); g.closePath();
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, colK[k] + '33'); gr.addColorStop(1, colK[k] + '00');
      g.fillStyle = gr; g.fill();
    }
  };

  /* ══ 3. Throughput chart ══ */
  const chart = document.getElementById('dashChart');
  const N = 90;
  const sIn = Array.from({ length: N }, (_, i) => 1.4 + 0.35 * Math.sin(i / 9) + rnd(-0.08, 0.08));
  const sOut = Array.from({ length: N }, (_, i) => 0.7 + 0.2 * Math.sin(i / 11 + 1) + rnd(-0.05, 0.05));
  let phase = 0;   /* 0..1 between samples, so the chart glides instead of stepping */
  const paintChart = () => {
    const [g, w, h] = fit(chart);
    g.clearRect(0, 0, w, h);
    const max = 2.4, padL = 34, padB = 16, ch = h - padB;
    g.font = '11px Inter, system-ui, sans-serif'; g.fillStyle = C.dim; g.textAlign = 'right';
    g.strokeStyle = 'rgba(138,145,153,.14)'; g.lineWidth = 1;
    [0, 0.8, 1.6, 2.4].forEach(v => {
      const y = ch - v / max * (ch - 6);
      g.beginPath(); g.moveTo(padL, y + .5); g.lineTo(w, y + .5); g.stroke();
      g.fillText(nf(v, 1), padL - 6, y + 4);
    });
    const step = (w - padL) / (N - 2);
    const draw = (s, col, fill) => {
      g.beginPath();
      s.forEach((v, i) => { const x = padL + (i - phase) * step, y = ch - v / max * (ch - 6); i ? g.lineTo(x, y) : g.moveTo(x, y); });
      g.strokeStyle = col; g.lineWidth = 2; g.shadowColor = col; g.shadowBlur = 10; g.stroke(); g.shadowBlur = 0;
      if (fill) {
        g.lineTo(w, ch); g.lineTo(padL, ch); g.closePath();
        const gr = g.createLinearGradient(0, 0, 0, ch); gr.addColorStop(0, col + '40'); gr.addColorStop(1, col + '00');
        g.fillStyle = gr; g.fill();
      }
    };
    g.save(); g.beginPath(); g.rect(padL, 0, w - padL, h); g.clip();
    draw(sOut, C.ice, false);
    draw(sIn, C.cyan, true);
    /* the head of the live series */
    const lx = padL + (N - 1 - phase) * step, ly = ch - sIn[N - 1] / max * (ch - 6);
    g.beginPath(); g.arc(Math.min(lx, w - 4), ly, 3.5, 0, 7); g.fillStyle = C.ink; g.shadowColor = C.cyan; g.shadowBlur = 12; g.fill();
    g.restore();
  };

  /* ══ 4. Latency heatmap ══ */
  const heat = document.getElementById('dashHeat');
  const SVC = ['web', 'api', 'db-01', 'cache', 'queue', 'srv-files'];
  const COLS = 48;
  const base = [120, 90, 20, 3, 15, 60];
  const cell = (r, c) => {
    let v = base[r] * rnd(0.7, 1.3);
    if (r === 5 && c > COLS - 14) v *= 1 + (c - (COLS - 14)) / 7;   /* srv-files slowing as its disk fills */
    return v;
  };
  const H = SVC.map((_, r) => Array.from({ length: COLS }, (_, c) => cell(r, c)));
  const colour = t => {   /* 0 → deep blue, .5 → cyan, 1 → amber */
    const a = [[13, 60, 72], [31, 205, 237], [245, 185, 74]];
    const k = Math.min(1, Math.max(0, t)) * 2, i = Math.min(1, Math.floor(k)), f = k - i;
    const p = a[i], q = a[i + 1];
    return `rgb(${p[0] + (q[0] - p[0]) * f | 0},${p[1] + (q[1] - p[1]) * f | 0},${p[2] + (q[2] - p[2]) * f | 0})`;
  };
  const paintHeat = () => {
    const [g, w, h] = fit(heat);
    g.clearRect(0, 0, w, h);
    const padL = 68, rows = SVC.length, gap = 2;
    const cw = (w - padL) / COLS, rh = (h - gap * (rows - 1)) / rows;
    g.font = '11px Inter, system-ui, sans-serif'; g.textAlign = 'right'; g.textBaseline = 'middle';
    SVC.forEach((s, r) => {
      const y = r * (rh + gap);
      g.fillStyle = r === 5 ? C.warn : C.dim;
      g.fillText(s, padL - 8, y + rh / 2);
      H[r].forEach((v, c) => {
        g.fillStyle = colour(v / (base[r] * 2.3));
        g.globalAlpha = 0.35 + 0.65 * (c / COLS);
        g.fillRect(padL + c * cw, y, Math.max(1, cw - 1.5), rh);
      });
      g.globalAlpha = 1;
    });
  };

  /* ══ 5. Logs ══ */
  const logs = document.getElementById('dashLogs');
  const POOL = [
    ['INFO', 'api', 'GET /v1/orders 200 · 84 ms'],
    ['INFO', 'web-2', 'GET / 200 · 41 ms'],
    ['INFO', 'lb-01', 'health check web-1..3 ok'],
    ['DEBUG', 'cache', 'hit ratio 0.97'],
    ['INFO', 'queue', 'consumed 128 msgs · lag 0'],
    ['WARN', 'srv-files', 'disk /data 84 % · trend +1.9 %/day'],
    ['INFO', 'db-01', 'checkpoint complete · 312 ms'],
    ['INFO', 'fw-01', 'vpn-pobocka tunnel up · rtt 9 ms'],
    ['INFO', 'iot-gw', 'mqtt 214 sensors reporting'],
    ['INFO', 'api', 'POST /v1/objednavka 201 · 112 ms'],
    ['DEBUG', 'web-3', 'gc pause 4 ms'],
    ['INFO', 'k8s', 'deployment web rolled out · 3/3 ready']
  ];
  const ts = () => new Date().toLocaleTimeString('cs-CZ', { hour12: false });
  let li = 0;
  const pushLog = (fresh) => {
    const [lv, src, msg] = POOL[li++ % POOL.length];
    const row = document.createElement('li');
    if (fresh) row.className = 'is-new';
    row.innerHTML = `<time>${ts()}</time><span class="lv lv-${lv.toLowerCase()}">${lv}</span><b>${src}</b><span class="msg">${msg}</span>`;
    logs.prepend(row);
    while (logs.children.length > 8) logs.lastElementChild.remove();
  };
  for (let i = 0; i < 8; i++) pushLog(false);

  /* ══ 6. Clock ══ */
  const clock = document.getElementById('dashClock');
  const tick = () => { clock.textContent = ts(); };

  /* ══ Loop ══ */
  let raf = 0, last = 0, acc = 0, accLog = 0, accSpawn = 0, visible = false;
  const sample = () => {
    sIn.shift(); sIn.push(walk(sIn[sIn.length - 1], 0.12, 1.0, 2.2));
    sOut.shift(); sOut.push(walk(sOut[sOut.length - 1], 0.07, 0.5, 1.1));
    kpi.thr = sIn[N - 1] + sOut[N - 1] * 0.5;
    kpi.p95 = walk(kpi.p95, 6, 150, 230);
    kpi.err = walk(kpi.err, 0.005, 0.01, 0.09);
    kpi.up = walk(kpi.up, 0.0006, 99.976, 99.988);
    for (const k in hist) { hist[k].shift(); hist[k].push(kpi[k]); }
    NODES.forEach(n => { n.cpu = walk(n.cpu, 4, 8, 78); n.p95 = walk(n.p95, 12, 30, 260); n.rps = walk(n.rps, 30, 40, 700); });
    byId['srv-files'].disk = Math.min(89, byId['srv-files'].disk + 0.02);
    H.forEach((row, r) => { row.shift(); row.push(cell(r, COLS - 1)); });
    paintKpis(); paintHeat(); paintRead(); tick();
  };
  const frame = now => {
    raf = 0;
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    acc += dt; accLog += dt; accSpawn += dt;
    phase = Math.min(1, acc / 1.0);
    if (acc >= 1.0) { acc = 0; phase = 0; sample(); }
    if (accLog >= 1.3) { accLog = 0; pushLog(true); }
    while (accSpawn > 0.07) { accSpawn -= 0.07; if (packets.length < 60) spawn(); }
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.t += p.v * dt;
      if (p.t >= 1) { p.dot.remove(); packets.splice(i, 1); continue; }
      p.dot.setAttribute('cx', (p.e.a.x + (p.e.b.x - p.e.a.x) * p.t).toFixed(1));
      p.dot.setAttribute('cy', (p.e.a.y + (p.e.b.y - p.e.a.y) * p.t).toFixed(1));
    }
    paintChart();
    if (visible) raf = requestAnimationFrame(frame);
  };
  const paintAll = () => { paintKpis(); paintChart(); paintHeat(); paintRead(); tick(); };
  paintAll();
  addEventListener('resize', () => { if (!raf) paintAll(); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(paintAll);

  /* language switch re-labels the readout and the number formats */
  const prev = window.__pageSync;
  window.__pageSync = l => { if (prev) prev(l); paintAll(); };

  if (RMo) {
    /* one static frame with a few packets already in flight */
    for (let i = 0; i < 24; i++) { spawn(); const p = packets[packets.length - 1]; p.t = Math.random(); p.dot.setAttribute('cx', p.e.a.x + (p.e.b.x - p.e.a.x) * p.t); p.dot.setAttribute('cy', p.e.a.y + (p.e.b.y - p.e.a.y) * p.t); }
    return;
  }
  new IntersectionObserver(es => {
    visible = es[es.length - 1].isIntersecting && !document.hidden;
    if (visible && !raf) { last = 0; raf = requestAnimationFrame(frame); }
  }, { rootMargin: '120px 0px' }).observe(root);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) visible = false;
    else if (root.getBoundingClientRect().top < innerHeight && root.getBoundingClientRect().bottom > 0) { visible = true; if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  });
})();
