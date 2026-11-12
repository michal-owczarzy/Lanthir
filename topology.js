/* ══════════════════════════════════════════════
   TOPOLOGY FIELD — Originkit's TopologyField, ported to plain JS (WebGL 1)
   Used on /observabilita/. A sphere of devices (Fibonacci spiral) joined to
   their neighbours, turning slowly; every node keeps its own pulse, and the
   graph brightens where the pointer passes, the near face only.

   The shaders and the maths are the source's. The preset the user picked is
   kept (link 159 · pulse 300 · lineWidth 80 · tilt 45 · offsetX 0 ·
   distance 270, density 120 · dotSize 100 · speed 50 · hover 100); only the
   colours changed, to the Lanthir cyan for the links and its pale tint for
   the nodes, on the page's own ground.

   Hosting changes: it sizes to its box instead of a 1200×800 minimum, stops
   while off screen or in a background tab, draws one still frame under
   reduced motion, and survives a lost GL context.
══════════════════════════════════════════════ */
(function () {
  const host = document.getElementById('topology');
  if (!host) return;
  const canvas = host.querySelector('canvas');
  if (!canvas) return;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MAX_DPR = 2;
  const FOCAL = 1.7320508;   /* 1 / tan(60deg / 2), the source's camera */
  const MAX_EDGES = 12000;
  const F = FOCAL.toFixed(6);

  /* the preset, as the source normalises it */
  const V = {
    edge: [31 / 255, 205 / 255, 237 / 255],    /* #1fcded */
    node: [168 / 255, 244 / 255, 255 / 255],   /* #a8f4ff */
    density: 120,
    dotSize: 1,
    speed: 1,
    hover: 1,
    link: 1.59,
    lineWidth: 0.8,
    pulse: 3,
    offsetX: 0,
    tilt: 45 * Math.PI / 180,
    distance: 2.7
  };

  const COMMON = `
vec3 spin(vec3 p, float yaw, float tilt, float roll){
  float c = cos(yaw), s = sin(yaw);
  p = vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
  c = cos(tilt); s = sin(tilt);
  p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
  c = cos(roll); s = sin(roll);
  return vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z);
}
`;

  const LINE_VERT = `
precision highp float;
attribute vec3  a_p0;
attribute vec3  a_p1;
attribute vec2  a_corner;
attribute float a_alpha;
uniform vec2  uRes;
uniform float uYaw, uTilt, uRoll, uDist, uWidth, uOffsetX, uFogNear, uFogFar, uHover, uReach;
uniform vec2  uPtr;
varying float v_alpha;
varying float v_fog;
varying float v_probe;
${COMMON}
void main(){
  float ar = uRes.x / max(uRes.y, 1.0);
  vec3 r0 = spin(a_p0, uYaw, uTilt, uRoll);
  vec3 r1 = spin(a_p1, uYaw, uTilt, uRoll);
  float w0 = max(uDist - r0.z, 0.05);
  float w1 = max(uDist - r1.z, 0.05);
  vec4 c0 = vec4((${F} / ar) * (r0.x + uOffsetX * ar * w0 / uDist), ${F} * r0.y, 0.0, w0);
  vec4 c1 = vec4((${F} / ar) * (r1.x + uOffsetX * ar * w1 / uDist), ${F} * r1.y, 0.0, w1);
  vec2 n0 = c0.xy / c0.w;
  vec2 n1 = c1.xy / c1.w;
  vec2 dir = normalize((n1 - n0) * vec2(ar, 1.0) + vec2(1e-6));
  vec2 perp = vec2(-dir.y, dir.x) / vec2(ar, 1.0);
  vec4 sel = mix(c0, c1, a_corner.x);
  sel.xy += perp * a_corner.y * uWidth * sel.w;
  v_alpha = a_alpha;
  v_fog = 1.0 - smoothstep(uFogNear, uFogFar, mix(w0, w1, a_corner.x));
  vec2 nd = (sel.xy / sel.w - uPtr) * vec2(ar, 1.0);
  v_probe = (1.0 - smoothstep(0.0, uReach, length(nd))) * uHover;
  gl_Position = sel;
}
`;

  const LINE_FRAG = `
precision mediump float;
uniform vec3 uColor;
varying float v_alpha;
varying float v_fog;
varying float v_probe;
void main(){
  float a = v_alpha * v_fog * 0.65 * (1.0 + v_probe * 1.6);
  if (a <= 0.002) discard;
  gl_FragColor = vec4(uColor * a, a);
}
`;

  const NODE_VERT = `
precision highp float;
attribute vec3 a_p;
attribute vec3 a_pulse;
uniform vec2  uRes;
uniform float uYaw, uTilt, uRoll, uDist, uTime, uSize, uPulse, uOffsetX, uFogNear, uFogFar, uHover, uReach;
uniform vec2  uPtr;
varying float v_alpha;
varying float v_fog;
varying float v_probe;
${COMMON}
void main(){
  float ar = uRes.x / max(uRes.y, 1.0);
  vec3 r = spin(a_p, uYaw, uTilt, uRoll);
  float w = max(uDist - r.z, 0.05);
  float pulse = (sin(uTime * a_pulse.y + a_pulse.z) + 1.0) * 0.5;
  float radius = (a_pulse.x + pulse * 1.8 * uPulse) * uSize;
  vec4 clip = vec4((${F} / ar) * (r.x + uOffsetX * ar * w / uDist), ${F} * r.y, 0.0, w);
  vec2 nd = (clip.xy / clip.w - uPtr) * vec2(ar, 1.0);
  v_probe = (1.0 - smoothstep(0.0, uReach, length(nd))) * uHover;
  gl_PointSize = max(1.0, radius * (1.0 + v_probe * 0.9) * ${F} * uRes.y / w);
  v_alpha = 0.4 + pulse * 0.6;
  v_fog = 1.0 - smoothstep(uFogNear, uFogFar, w);
  gl_Position = clip;
}
`;

  const NODE_FRAG = `
precision mediump float;
uniform vec3 uColor;
varying float v_alpha;
varying float v_fog;
varying float v_probe;
void main(){
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float disc = 1.0 - smoothstep(0.7, 1.0, d);
  float a = clamp(v_alpha * (1.0 + v_probe), 0.0, 1.0) * v_fog * disc * 0.9;
  if (a <= 0.002) discard;
  gl_FragColor = vec4(uColor * a, a);
}
`;

  const clampN = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
  const rng = seed => {
    let a = seed >>> 0;
    return () => {
      a += 0x6d2b79f5;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  const CORNERS = [[0, -1], [1, -1], [1, 1], [0, -1], [1, 1], [0, 1]];

  const ptr = { tx: -10, ty: -10, x: -10, y: -10 };
  let gl = null, S = null;            /* S: everything that lives in the context */
  let raf = 0, last = 0, clock = 0, onScreen = false, lost = false;

  const init = () => {
    gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, premultipliedAlpha: true });
    if (!gl) { host.classList.add('is-off'); return false; }

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { gl.deleteShader(sh); return null; }
      return sh;
    };
    const link = (vsSrc, fsSrc) => {
      const vs = compile(gl.VERTEX_SHADER, vsSrc), fs = compile(gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      return gl.getProgramParameter(prog, gl.LINK_STATUS) ? prog : null;
    };
    const lineProg = link(LINE_VERT, LINE_FRAG);
    const nodeProg = link(NODE_VERT, NODE_FRAG);
    if (!lineProg || !nodeProg) { host.classList.add('is-off'); return false; }

    const uni = (prog, names) => {
      const o = {};
      names.forEach(n => { o[n] = gl.getUniformLocation(prog, n); });
      return o;
    };
    const shared = ['uRes', 'uYaw', 'uTilt', 'uRoll', 'uDist', 'uOffsetX', 'uFogNear', 'uFogFar', 'uHover', 'uReach', 'uPtr', 'uColor'];
    S = {
      lineProg, nodeProg,
      lu: uni(lineProg, shared.concat(['uWidth'])),
      nu: uni(nodeProg, shared.concat(['uTime', 'uSize', 'uPulse'])),
      la: {
        p0: gl.getAttribLocation(lineProg, 'a_p0'),
        p1: gl.getAttribLocation(lineProg, 'a_p1'),
        corner: gl.getAttribLocation(lineProg, 'a_corner'),
        alpha: gl.getAttribLocation(lineProg, 'a_alpha')
      },
      na: { p: gl.getAttribLocation(nodeProg, 'a_p'), pulse: gl.getAttribLocation(nodeProg, 'a_pulse') },
      bP0: gl.createBuffer(), bP1: gl.createBuffer(), bCorner: gl.createBuffer(), bAlpha: gl.createBuffer(),
      bNodeP: gl.createBuffer(), bNodePulse: gl.createBuffer(),
      edges: 0, nodes: 0
    };
    build(V.density, V.link);
    host.classList.remove('is-off');
    return true;
  };

  /* Fibonacci spiral, then an O(n^2) neighbour sweep: once, not per frame.
     The nodes never move relative to each other; the whole sphere turns. */
  const build = (n, linkScale) => {
    const R = rng(20260825);
    const px = new Float32Array(n * 3);
    const pulse = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const phi = Math.acos(-1 + (2 * i) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      px[i * 3] = Math.cos(theta) * Math.sin(phi);
      px[i * 3 + 1] = Math.sin(theta) * Math.sin(phi);
      px[i * 3 + 2] = Math.cos(phi);
      pulse[i * 3] = R() * 1.5 + 1.0;
      pulse[i * 3 + 1] = (R() * 0.02 + 0.015) * 60;
      pulse[i * 3 + 2] = R() * Math.PI * 2;
    }
    S.nodes = n;
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bNodeP);
    gl.bufferData(gl.ARRAY_BUFFER, px, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bNodePulse);
    gl.bufferData(gl.ARRAY_BUFFER, pulse, gl.STATIC_DRAW);

    const thr = 0.45 * Math.sqrt(120 / n) * linkScale;
    const ea = [], eb = [], ed = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = px[i * 3] - px[j * 3];
        const dy = px[i * 3 + 1] - px[j * 3 + 1];
        const dz = px[i * 3 + 2] - px[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d >= thr) continue;
        ea.push(i); eb.push(j); ed.push(d);
      }
    }
    let order = null;
    if (ea.length > MAX_EDGES) {
      order = Array.from({ length: ea.length }, (_, k) => k);
      order.sort((a, b) => ed[a] - ed[b]);
      order.length = MAX_EDGES;
    }
    const edges = order ? order.length : ea.length;
    const at = e => (order ? order[e] : e);
    const p0 = new Float32Array(edges * 18);
    const p1 = new Float32Array(edges * 18);
    const corner = new Float32Array(edges * 12);
    const alpha = new Float32Array(edges * 6);
    for (let e = 0; e < edges; e++) {
      const se = at(e), i = ea[se], j = eb[se];
      const a = (1 - ed[se] / thr) * 0.8;
      for (let c = 0; c < 6; c++) {
        const k = e * 6 + c;
        p0[k * 3] = px[i * 3]; p0[k * 3 + 1] = px[i * 3 + 1]; p0[k * 3 + 2] = px[i * 3 + 2];
        p1[k * 3] = px[j * 3]; p1[k * 3 + 1] = px[j * 3 + 1]; p1[k * 3 + 2] = px[j * 3 + 2];
        corner[k * 2] = CORNERS[c][0]; corner[k * 2 + 1] = CORNERS[c][1];
        alpha[k] = a;
      }
    }
    S.edges = edges;
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bP0);
    gl.bufferData(gl.ARRAY_BUFFER, p0, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bP1);
    gl.bufferData(gl.ARRAY_BUFFER, p1, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bCorner);
    gl.bufferData(gl.ARRAY_BUFFER, corner, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, S.bAlpha);
    gl.bufferData(gl.ARRAY_BUFFER, alpha, gl.STATIC_DRAW);
  };

  const attrib = (loc, buf, size) => {
    if (loc < 0) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
  };
  const common = (u, bw, bh, fogNear, fogFar, color) => {
    gl.uniform2f(u.uRes, bw, bh);
    gl.uniform1f(u.uYaw, clock * 0.108);
    gl.uniform1f(u.uTilt, V.tilt);
    gl.uniform1f(u.uRoll, clock * 0.036);
    gl.uniform1f(u.uDist, V.distance);
    gl.uniform1f(u.uOffsetX, V.offsetX);
    gl.uniform1f(u.uFogNear, fogNear);
    gl.uniform1f(u.uFogFar, fogFar);
    /* 0.65 in NDC-times-aspect: the sphere is hollow, so a tighter probe
       would sit in the empty middle and light nothing */
    gl.uniform1f(u.uHover, V.hover);
    gl.uniform1f(u.uReach, 0.65);
    gl.uniform2f(u.uPtr, ptr.x * 2, ptr.y * 2);
    gl.uniform3f(u.uColor, color[0], color[1], color[2]);
  };

  const render = now => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    if (!RM) clock = (clock + dt * V.speed) % 6283;
    const pk = 1 - Math.exp(-dt * 9.0);
    ptr.x += (ptr.tx - ptr.x) * pk;
    ptr.y += (ptr.ty - ptr.y) * pk;

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const bw = Math.max(1, Math.round((canvas.clientWidth || 1) * dpr));
    const bh = Math.max(1, Math.round((canvas.clientHeight || 1) * dpr));
    if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
    gl.viewport(0, 0, bw, bh);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    /* the source's fog, 300..950 with the sphere radius 380 at camera 650 */
    const fogNear = V.distance - 0.92, fogFar = V.distance + 0.79;

    if (S.edges > 0) {
      gl.useProgram(S.lineProg);
      attrib(S.la.p0, S.bP0, 3);
      attrib(S.la.p1, S.bP1, 3);
      attrib(S.la.corner, S.bCorner, 2);
      attrib(S.la.alpha, S.bAlpha, 1);
      common(S.lu, bw, bh, fogNear, fogFar, V.edge);
      gl.uniform1f(S.lu.uWidth, 0.0016 * V.lineWidth);
      gl.drawArrays(gl.TRIANGLES, 0, S.edges * 6);
      [S.la.p0, S.la.p1, S.la.corner, S.la.alpha].forEach(l => { if (l >= 0) gl.disableVertexAttribArray(l); });
    }
    if (S.nodes > 0) {
      gl.useProgram(S.nodeProg);
      attrib(S.na.p, S.bNodeP, 3);
      attrib(S.na.pulse, S.bNodePulse, 3);
      common(S.nu, bw, bh, fogNear, fogFar, V.node);
      gl.uniform1f(S.nu.uTime, clock);
      gl.uniform1f(S.nu.uSize, (1 / 380) * V.dotSize);
      gl.uniform1f(S.nu.uPulse, V.pulse);
      gl.drawArrays(gl.POINTS, 0, S.nodes);
      [S.na.p, S.na.pulse].forEach(l => { if (l >= 0) gl.disableVertexAttribArray(l); });
    }
  };

  /* under reduced motion only the pointer moves anything, and only while it
     is settling */
  const frame = now => {
    raf = 0;
    if (!onScreen || lost || !S || document.hidden) { last = 0; return; }
    render(now);
    const settling = Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > 0.001;
    if (!RM || settling) raf = requestAnimationFrame(frame);
    else last = 0;
  };
  const wake = () => { if (!raf && onScreen && !lost && S) raf = requestAnimationFrame(frame); };

  /* the rect ratio, so it holds under any zoom */
  const track = e => {
    const r = canvas.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return;
    ptr.tx = clampN((e.clientX - r.left) / r.width, 0, 1) - 0.5;
    ptr.ty = 0.5 - clampN((e.clientY - r.top) / r.height, 0, 1);
    wake();
  };
  const leave = () => { ptr.tx = -10; ptr.ty = -10; wake(); };
  canvas.addEventListener('pointermove', track, { passive: true });
  canvas.addEventListener('pointerenter', track, { passive: true });
  canvas.addEventListener('pointerleave', leave, { passive: true });
  /* a finger lifts without a leave on some browsers */
  canvas.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') leave(); }, { passive: true });
  canvas.addEventListener('pointercancel', leave, { passive: true });

  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault();
    lost = true;
    S = null;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  });
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false;
    if (init()) { last = 0; wake(); }
  });

  if (!init()) return;
  new IntersectionObserver(es => {
    onScreen = es.some(e => e.isIntersecting);
    if (onScreen) { last = 0; wake(); }
  }, { rootMargin: '60px' }).observe(host);
  new ResizeObserver(() => { if (RM) { last = 0; if (S && !lost) render(performance.now()); } else wake(); }).observe(host);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = 0; wake(); } });
})();
