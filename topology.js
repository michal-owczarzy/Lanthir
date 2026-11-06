/* ═══════════════════════════════════════════
   LANTHIR — topology.js
   Topology Field (Originkit), ported from the React component to raw WebGL:
   this site has no bundler and no React. The shaders and the geometry are the
   source's; what changed is the plumbing and the colour.

   Colour: edges and nodes run from the brand's iris at the back of the
   sphere to cyan / spark at the front, so the depth fog paints the brand
   ramp across the globe instead of fading one colour to black.

   Preset kept from the reference usage: link 159 · pulse 300 · lineWidth 80
   · tilt 45 · distance 270. The sphere's horizontal offset is the one thing
   that follows the layout: it sits right of the copy on a wide screen and
   behind it on a phone.
═══════════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('topology');
  if (!canvas) return;
  const hero = canvas.closest('.hero') || canvas.parentElement;
  const ready = () => window.__heroBackdrop && window.__heroBackdrop();

  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MAX_DPR = 2;
  const FOCAL = 1.7320508;
  const MAX_EDGES = 12000;

  /* preset → the component's normalised values */
  const V = {
    density: 120,
    dotSize: 1,
    speed: RM ? 0 : 1,          /* speed 50 / 50 */
    hover: 1,
    link: 1.59,
    lineWidth: 0.8,
    pulse: 3,
    tilt: 45 * Math.PI / 180,
    distance: 2.7,
    offsetX: 0.5
  };
  const EDGE_NEAR = [31 / 255, 205 / 255, 237 / 255];   /* --cyan  */
  const EDGE_FAR  = [58 / 255, 46 / 255, 224 / 255];    /* --iris  */
  const NODE_NEAR = [54 / 255, 240 / 255, 214 / 255];   /* --spark */
  const NODE_FAR  = [30 / 255, 123 / 255, 229 / 255];   /* --blue  */

  const F = FOCAL.toFixed(6);
  const COMMON = `
vec3 spin(vec3 p, float yaw, float tilt, float roll){
  float c = cos(yaw), s = sin(yaw);
  p = vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
  c = cos(tilt); s = sin(tilt);
  p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
  c = cos(roll); s = sin(roll);
  return vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z);
}`;

  const LINE_VERT = `
precision highp float;
attribute vec3 a_p0; attribute vec3 a_p1; attribute vec2 a_corner; attribute float a_alpha;
uniform vec2 uRes;
uniform float uYaw, uTilt, uRoll, uDist, uWidth, uOffsetX, uOffsetY, uFogNear, uFogFar, uHover, uReach;
uniform vec2 uPtr;
varying float v_alpha; varying float v_fog; varying float v_probe;
${COMMON}
void main(){
  float ar = uRes.x / max(uRes.y, 1.0);
  vec3 r0 = spin(a_p0, uYaw, uTilt, uRoll);
  vec3 r1 = spin(a_p1, uYaw, uTilt, uRoll);
  float w0 = max(uDist - r0.z, 0.05);
  float w1 = max(uDist - r1.z, 0.05);
  vec4 c0 = vec4((${F} / ar) * (r0.x + uOffsetX * ar * w0 / uDist), ${F} * (r0.y + uOffsetY * w0 / uDist), 0.0, w0);
  vec4 c1 = vec4((${F} / ar) * (r1.x + uOffsetX * ar * w1 / uDist), ${F} * (r1.y + uOffsetY * w1 / uDist), 0.0, w1);
  vec2 n0 = c0.xy / c0.w; vec2 n1 = c1.xy / c1.w;
  vec2 dir = normalize((n1 - n0) * vec2(ar, 1.0) + vec2(1e-6));
  vec2 perp = vec2(-dir.y, dir.x) / vec2(ar, 1.0);
  vec4 sel = mix(c0, c1, a_corner.x);
  sel.xy += perp * a_corner.y * uWidth * sel.w;
  v_alpha = a_alpha;
  v_fog = 1.0 - smoothstep(uFogNear, uFogFar, mix(w0, w1, a_corner.x));
  vec2 nd = (sel.xy / sel.w - uPtr) * vec2(ar, 1.0);
  v_probe = (1.0 - smoothstep(0.0, uReach, length(nd))) * uHover;
  gl_Position = sel;
}`;

  const LINE_FRAG = `
precision mediump float;
uniform vec3 uColor; uniform vec3 uColorFar;
varying float v_alpha; varying float v_fog; varying float v_probe;
void main(){
  float a = v_alpha * mix(0.28, 1.0, v_fog) * v_fog * 0.65 * (1.0 + v_probe * 1.6);
  if (a <= 0.002) discard;
  vec3 col = mix(uColorFar, uColor, clamp(v_fog * 1.25 + v_probe, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}`;

  const NODE_VERT = `
precision highp float;
attribute vec3 a_p; attribute vec3 a_pulse;
uniform vec2 uRes;
uniform float uYaw, uTilt, uRoll, uDist, uTime, uSize, uPulse, uOffsetX, uOffsetY, uFogNear, uFogFar, uHover, uReach;
uniform vec2 uPtr;
varying float v_alpha; varying float v_fog; varying float v_probe;
${COMMON}
void main(){
  float ar = uRes.x / max(uRes.y, 1.0);
  vec3 r = spin(a_p, uYaw, uTilt, uRoll);
  float w = max(uDist - r.z, 0.05);
  float pulse = (sin(uTime * a_pulse.y + a_pulse.z) + 1.0) * 0.5;
  float radius = (a_pulse.x + pulse * 1.8 * uPulse) * uSize;
  vec4 clip = vec4((${F} / ar) * (r.x + uOffsetX * ar * w / uDist), ${F} * (r.y + uOffsetY * w / uDist), 0.0, w);
  vec2 nd = (clip.xy / clip.w - uPtr) * vec2(ar, 1.0);
  v_probe = (1.0 - smoothstep(0.0, uReach, length(nd))) * uHover;
  gl_PointSize = max(1.0, radius * (1.0 + v_probe * 0.9) * ${F} * uRes.y / w);
  v_alpha = 0.4 + pulse * 0.6;
  v_fog = 1.0 - smoothstep(uFogNear, uFogFar, w);
  gl_Position = clip;
}`;

  const NODE_FRAG = `
precision mediump float;
uniform vec3 uColor; uniform vec3 uColorFar;
varying float v_alpha; varying float v_fog; varying float v_probe;
void main(){
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float disc = 1.0 - smoothstep(0.7, 1.0, d);
  float a = clamp(v_alpha * (1.0 + v_probe), 0.0, 1.0) * v_fog * disc * 0.9;
  if (a <= 0.002) discard;
  vec3 col = mix(uColorFar, uColor, clamp(v_fog * 1.2 + v_probe, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}`;

  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, premultipliedAlpha: true });
  if (!gl) { canvas.classList.add('is-off'); ready(); return; }

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(sh)); return null; }
    return sh;
  };
  const link = (vs, fs) => {
    const a = compile(gl.VERTEX_SHADER, vs), b = compile(gl.FRAGMENT_SHADER, fs);
    if (!a || !b) return null;
    const p = gl.createProgram();
    gl.attachShader(p, a); gl.attachShader(p, b); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { console.warn(gl.getProgramInfoLog(p)); return null; }
    return p;
  };

  let lineProg, nodeProg;
  const U = new Map();
  const u = (prog, name) => {
    const key = (prog === lineProg ? 'L:' : 'N:') + name;
    if (!U.has(key)) U.set(key, gl.getUniformLocation(prog, name));
    return U.get(key);
  };

  const bP0 = gl.createBuffer(), bP1 = gl.createBuffer(), bCorner = gl.createBuffer(),
        bAlpha = gl.createBuffer(), bNodeP = gl.createBuffer(), bNodePulse = gl.createBuffer();
  let edges = 0, nodeCount = 0;
  const CORNERS = [[0, -1], [1, -1], [1, 1], [0, -1], [1, 1], [0, 1]];

  /* deterministic, so every visit shows the same network */
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

  /* Fibonacci sphere and an O(n²) neighbour sweep — once, not per frame */
  const build = (n, linkScale) => {
    const R = rng(20260825);
    const px = new Float32Array(n * 3), pulse = new Float32Array(n * 3);
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
    nodeCount = n;
    gl.bindBuffer(gl.ARRAY_BUFFER, bNodeP); gl.bufferData(gl.ARRAY_BUFFER, px, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bNodePulse); gl.bufferData(gl.ARRAY_BUFFER, pulse, gl.STATIC_DRAW);

    const thr = 0.45 * Math.sqrt(120 / n) * linkScale;
    const ea = [], eb = [], ed = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = px[i * 3] - px[j * 3], dy = px[i * 3 + 1] - px[j * 3 + 1], dz = px[i * 3 + 2] - px[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d >= thr) continue;
        ea.push(i); eb.push(j); ed.push(d);
      }
    }
    let order = null;
    if (ea.length > MAX_EDGES) {
      order = Array.from({ length: ea.length }, (_, k) => k).sort((a, b) => ed[a] - ed[b]);
      order.length = MAX_EDGES;
    }
    edges = order ? order.length : ea.length;
    const at = e => (order ? order[e] : e);
    const p0 = new Float32Array(edges * 18), p1 = new Float32Array(edges * 18),
          corner = new Float32Array(edges * 12), alpha = new Float32Array(edges * 6);
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
    gl.bindBuffer(gl.ARRAY_BUFFER, bP0); gl.bufferData(gl.ARRAY_BUFFER, p0, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bP1); gl.bufferData(gl.ARRAY_BUFFER, p1, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bCorner); gl.bufferData(gl.ARRAY_BUFFER, corner, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bAlpha); gl.bufferData(gl.ARRAY_BUFFER, alpha, gl.STATIC_DRAW);
  };

  const attr = (prog, name, buf, size) => {
    const loc = gl.getAttribLocation(prog, name);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
    return loc;
  };

  /* pointer, in the canvas's own 0-1 box, eased in the loop */
  const ptr = { tx: -10, ty: -10, x: -10, y: -10 };
  const track = e => {
    const r = canvas.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return;
    ptr.tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) - 0.5;
    ptr.ty = 0.5 - Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    if (ptr.x < -5) { ptr.x = ptr.tx; ptr.y = ptr.ty; }
    wake();
  };
  const leave = () => { ptr.tx = -10; ptr.ty = -10; };
  /* the copy sits over the canvas, so listen on the hero, not the canvas */
  hero.addEventListener('pointermove', track, { passive: true });
  hero.addEventListener('pointerenter', track, { passive: true });
  hero.addEventListener('pointerleave', leave, { passive: true });

  const wide = matchMedia('(min-width: 881px)');
  let raf = 0, last = performance.now(), clock = 0, visible = true, drawn = false;

  const render = now => {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    clock = (clock + dt * V.speed) % 6283;
    const pk = 1 - Math.exp(-dt * 9.0);
    ptr.x += (ptr.tx - ptr.x) * pk;
    ptr.y += (ptr.ty - ptr.y) * pk;

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const bw = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const bh = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
    gl.viewport(0, 0, bw, bh);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    /* A narrow screen has no room beside the copy, so the globe moves into
       the top of the hero, above the headline, and the camera pulls back until
       it fits the width (its NDC radius across is FOCAL / (aspect · dist)) and
       the top half of the screen (FOCAL / dist tall). */
    const ar = bw / bh;
    const offsetX = wide.matches ? V.offsetX : 0;
    const offsetY = wide.matches ? 0 : 0.42;
    const dist = wide.matches ? V.distance : Math.max(V.distance, FOCAL / (ar * 0.94), FOCAL / 0.44);
    const fogNear = dist - 0.92, fogFar = dist + 0.79;
    const yaw = clock * 0.108, roll = clock * 0.036;

    const common = prog => {
      gl.uniform2f(u(prog, 'uRes'), bw, bh);
      gl.uniform1f(u(prog, 'uYaw'), yaw);
      gl.uniform1f(u(prog, 'uTilt'), V.tilt);
      gl.uniform1f(u(prog, 'uRoll'), roll);
      gl.uniform1f(u(prog, 'uDist'), dist);
      gl.uniform1f(u(prog, 'uOffsetX'), offsetX);
      gl.uniform1f(u(prog, 'uOffsetY'), offsetY * dist / FOCAL);
      gl.uniform1f(u(prog, 'uFogNear'), fogNear);
      gl.uniform1f(u(prog, 'uFogFar'), fogFar);
      gl.uniform1f(u(prog, 'uHover'), V.hover);
      gl.uniform1f(u(prog, 'uReach'), 0.65);
      gl.uniform2f(u(prog, 'uPtr'), ptr.x * 2, ptr.y * 2);
    };

    if (edges > 0) {
      gl.useProgram(lineProg);
      const a = [attr(lineProg, 'a_p0', bP0, 3), attr(lineProg, 'a_p1', bP1, 3),
                 attr(lineProg, 'a_corner', bCorner, 2), attr(lineProg, 'a_alpha', bAlpha, 1)];
      common(lineProg);
      gl.uniform1f(u(lineProg, 'uWidth'), 0.0016 * V.lineWidth);
      gl.uniform3fv(u(lineProg, 'uColor'), EDGE_NEAR);
      gl.uniform3fv(u(lineProg, 'uColorFar'), EDGE_FAR);
      gl.drawArrays(gl.TRIANGLES, 0, edges * 6);
      a.forEach(l => gl.disableVertexAttribArray(l));
    }
    if (nodeCount > 0) {
      gl.useProgram(nodeProg);
      const a = [attr(nodeProg, 'a_p', bNodeP, 3), attr(nodeProg, 'a_pulse', bNodePulse, 3)];
      common(nodeProg);
      gl.uniform1f(u(nodeProg, 'uTime'), clock);
      gl.uniform1f(u(nodeProg, 'uSize'), (1 / 380) * V.dotSize);
      gl.uniform1f(u(nodeProg, 'uPulse'), V.pulse);
      gl.uniform3fv(u(nodeProg, 'uColor'), NODE_NEAR);
      gl.uniform3fv(u(nodeProg, 'uColorFar'), NODE_FAR);
      gl.drawArrays(gl.POINTS, 0, nodeCount);
      a.forEach(l => gl.disableVertexAttribArray(l));
    }

    if (!drawn) { drawn = true; canvas.classList.add('is-on'); ready(); }
    /* With reduced motion the globe holds still and only redraws while the
       pointer probe is still easing toward the cursor. */
    const settling = Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > 0.001;
    if (visible && (V.speed > 0 || settling)) raf = requestAnimationFrame(render);
  };
  const wake = () => {
    if (!raf && visible && lineProg) { last = performance.now(); raf = requestAnimationFrame(render); }
  };

  /* off screen or in a background tab, the loop stops entirely */
  new IntersectionObserver(es => {
    visible = es[es.length - 1].isIntersecting && !document.hidden;
    wake();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; wake(); });
  addEventListener('resize', wake, { passive: true });

  /* Compile once the splash (if any) is out of the way and the browser is idle,
     so the first paint never waits on the shader. */
  const boot = () => {
    lineProg = link(LINE_VERT, LINE_FRAG);
    nodeProg = link(NODE_VERT, NODE_FRAG);
    if (!lineProg || !nodeProg) { canvas.classList.add('is-off'); ready(); return; }
    build(V.density, V.link);
    wake();
  };
  const idle = () => (window.requestIdleCallback || (f => setTimeout(f, 60)))(boot, { timeout: 300 });
  const go = () => (window.__whenSplashClear ? window.__whenSplashClear(idle) : idle());
  if (document.readyState === 'complete') go();
  else addEventListener('load', go, { once: true });
})();
