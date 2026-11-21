/* Společné: toast, najíždění obsahu. Úvod: brzdový kotouč se točí a při rolování
   z úvodu ho třmen „ubrzdí“ až do zastavení. Brzdná dráha: reakce 1 s + v² / (2·μ·g). */
window.BC = window.BC || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  BC.RM = RM; BC.hasG = hasG; BC.TEL = '+420777620373'; BC.MAIL = 'bolsoncar@seznam.cz';
  var t = document.getElementById('toast'), tt;
  BC.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  var G = hasG && !RM;

  /* ---- brzdná dráha ---- */
  var svg = document.getElementById('silnice'), rych = document.getElementById('rych'), povrch = document.getElementById('povrch');
  var MAX = 250, X0 = 20, SIR = 600, K = SIR / MAX;
  var el = {}, mu = .8, pos = { r: 0, b: 0 };
  function sestavit() {
    var h = '<rect class="asfalt" x="0" y="30" width="640" height="58" rx="4"/><line class="cara" x1="0" y1="59" x2="640" y2="59"/>';
    h += '<rect class="reakce" id="d-r" x="' + X0 + '" y="50" width="0" height="18" rx="2"/><rect class="brzdeni" id="d-b" x="' + X0 + '" y="50" width="0" height="18" rx="2"/>';
    for (var m = 0; m <= MAX; m += 50) {
      var x = X0 + m * K;
      h += '<line class="rys" x1="' + x + '" y1="92" x2="' + x + '" y2="100"/><text class="rys-t" x="' + x + '" y="116" text-anchor="middle">' + (m ? m + ' m' : '0') + '</text>';
    }
    h += '<g id="d-auto"><rect class="auto" x="-34" y="44" width="34" height="30" rx="7"/><rect x="-24" y="48" width="10" height="22" rx="2" fill="#2b2e32" opacity=".55"/></g>';
    h += '<text class="rys-t" id="d-pres" x="626" y="24" text-anchor="end" style="fill:var(--cervena);font-weight:700"></text>';
    svg.innerHTML = h;
    el.r = document.getElementById('d-r'); el.b = document.getElementById('d-b'); el.auto = document.getElementById('d-auto'); el.pres = document.getElementById('d-pres');
  }
  function vykreslit() {
    var r = Math.min(pos.r, MAX), b = Math.min(pos.b, Math.max(0, MAX - r));
    el.r.setAttribute('width', r * K);
    el.b.setAttribute('x', X0 + r * K); el.b.setAttribute('width', b * K);
    el.auto.setAttribute('transform', 'translate(' + (X0 + (r + b) * K) + ' 0)');
  }
  function spocitat(anim) {
    var v = +rych.value, ms = v / 3.6;
    var r = ms * 1, b = ms * ms / (2 * mu * 9.81), c = r + b;
    document.getElementById('rych-o').innerHTML = v + '<small>km/h</small>';
    rych.style.setProperty('--p', ((v - 30) / 100 * 100) + '%');
    document.getElementById('v-r').textContent = Math.round(r) + ' m';
    document.getElementById('v-b').textContent = Math.round(b) + ' m';
    document.getElementById('v-c').textContent = Math.round(c) + ' m';
    el.pres.textContent = c > MAX ? 'více než ' + MAX + ' m' : '';
    if (G && anim) gsap.to(pos, { r: r, b: b, duration: .7, ease: 'power3.out', overwrite: true, onUpdate: vykreslit });
    else { pos.r = r; pos.b = b; vykreslit(); }
  }
  if (svg && rych) {
    sestavit();
    rych.addEventListener('input', function () { spocitat(true); });
    povrch.addEventListener('click', function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      povrch.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      mu = +b.dataset.mu; spocitat(true);
    });
    spocitat(false);
  }

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    afterIntro(function () { gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' }); });

    /* kotouč se točí; čím dál z úvodu, tím víc ho třmen brzdí */
    var rotor = document.getElementById('rotor');
    if (rotor) {
      var spin = gsap.to(rotor, { rotation: 360, svgOrigin: '300 300', duration: 1.6, ease: 'none', repeat: -1 });
      var trmen = document.getElementById('trmen');
      ScrollTrigger.create({ trigger: '.hero', start: 'top top', end: '75% top', onUpdate: function (s) {
        spin.timeScale(Math.max(0, 1 - s.progress * 1.15));
        gsap.to(trmen, { x: -6 * s.progress, duration: .3, overwrite: true });
      } });
    }

    /* brzdná dráha se poprvé „projede“, když panel dojede do zorného pole */
    if (svg) {
      pos.r = 0; pos.b = 0; vykreslit();
      ScrollTrigger.create({ trigger: '.panel-d', start: 'top 70%', once: true, onEnter: function () { spocitat(true); } });
    }
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
