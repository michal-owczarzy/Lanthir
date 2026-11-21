/* Blaško: záložky druhů nábytku, izometrický nákres místnosti podle rozměrů, poptávka. */
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var JM = {"kuchyne": "Kuchyň", "detsky": "Dětský pokoj", "obyvak": "Obývací stěna", "loznice": "Ložnice", "vestavena": "Vestavěná skříň", "koupelna": "Koupelna a kancelář"};

  /* záložky */
  var tl = document.querySelector('.tabs');
  if (tl) tl.addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    tl.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t === b)); });
    document.querySelectorAll('.panel').forEach(function (p) {
      var on = p.id === b.getAttribute('aria-controls'); p.hidden = !on;
      if (on && W.hasG && !W.RM) { gsap.fromTo(p.querySelector('img'), { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: .7, ease: 'power3.inOut' }); gsap.from(p.querySelectorAll('.panel-txt > *'), { y: 14, opacity: 0, duration: .45, stagger: .06, ease: 'power2.out' }); }
    });
  });
  document.querySelectorAll('[data-mistnost]').forEach(function (a) { a.addEventListener('click', function () { var s = document.getElementById('m'); if (s) { s.value = a.dataset.mistnost; s.dispatchEvent(new Event('change')); } }); });

  /* izometrie */
  var svg = document.getElementById('iso');
  if (svg) {
    var C30 = Math.cos(Math.PI / 6), S30 = .5, st = { m: 'kuchyne', w: 360, d: 300, h: 260 }, prvni = true;
    function P(x, y, z, s) { return [(x - y) * C30 * s, (x + y) * S30 * s - z * s]; }
    function poly(pts, cls, s, g) { var e = document.createElementNS(NS, 'polygon'); e.setAttribute('points', pts.map(function (p) { var q = P(p[0], p[1], p[2], s); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ')); e.setAttribute('class', cls); g.appendChild(e); return e; }
    function box(b, s, g) {
      var x = b[0], y = b[1], z = b[2], dx = b[3], dy = b[4], dz = b[5];
      poly([[x, y + dy, z], [x + dx, y + dy, z], [x + dx, y + dy, z + dz], [x, y + dy, z + dz]], 'n-cel', s, g);
      poly([[x + dx, y, z], [x + dx, y + dy, z], [x + dx, y + dy, z + dz], [x + dx, y, z + dz]], 'n-bok', s, g);
      poly([[x, y, z + dz], [x + dx, y, z + dz], [x + dx, y + dy, z + dz], [x, y + dy, z + dz]], 'n-vrch', s, g);
    }
    function nabytek(m, Wd, D, H) {
      var c = Math.min;
      if (m === 'kuchyne') return [[0, 0, 0, 60, 60, 210], [60, 0, 0, Wd - 60, 60, 90], [60, 0, 145, Wd - 60, 35, 72]];
      if (m === 'detsky') return [[0, 70, 0, 90, c(200, D - 80), 45], [Wd - 150, 0, 0, 140, 60, 75], [110, 0, 0, 100, 60, 200], [Wd - 150, 0, 120, 140, 28, 30]];
      if (m === 'obyvak') return [[40, 0, 0, 50, 42, 200], [90, 0, 0, Wd - 180, 45, 52], [Wd - 90, 0, 0, 50, 42, 200], [90, 0, 150, Wd - 180, 30, 26]];
      if (m === 'loznice') return [[0, 30, 0, 62, c(240, D - 60), 220], [Wd / 2 - 90 + 30, 0, 0, 180, 8, 100], [Wd / 2 - 90 + 30, 0, 0, 180, c(210, D - 20), 45], [Wd / 2 - 150, 0, 0, 50, 42, 50], [Wd / 2 + 130, 0, 0, 50, 42, 50]];
      if (m === 'vestavena') return [[0, 0, 0, Wd, 62, H]];
      return [[30, 0, 0, 160, 70, 75], [220, 0, 0, 80, 45, 75], [Wd - 90, 0, 0, 80, 35, 200], [Wd - 200, 0, 115, 90, 15, 70]];
    }
    function kresli() {
      svg.innerHTML = '';
      var Wd = st.w, D = st.d, H = st.h, s = 1;
      var g = document.createElementNS(NS, 'g'); svg.appendChild(g);
      poly([[0, 0, 0], [Wd, 0, 0], [Wd, D, 0], [0, D, 0]], 'm-podlaha', s, g);
      poly([[0, 0, 0], [Wd, 0, 0], [Wd, 0, H], [0, 0, H]], 'm-stena', s, g);
      poly([[0, 0, 0], [0, D, 0], [0, D, H], [0, 0, H]], 'm-stena b', s, g);
      var bx = nabytek(st.m, Wd, D, H).filter(function (b) { return b[3] > 0 && b[4] > 0; }).sort(function (a, b) { return (a[0] + a[1] + a[2] * .01) - (b[0] + b[1] + b[2] * .01); });
      var gb = document.createElementNS(NS, 'g'); gb.setAttribute('class', 'kusy'); g.appendChild(gb);
      bx.forEach(function (b) { var k = document.createElementNS(NS, 'g'); k.setAttribute('class', 'kus'); gb.appendChild(k); box(b, s, k); });
      /* kóty po předních hranách podlahy */
      function kota(a, b, txt, off) {
        var p = P(a[0], a[1], 0, s), q = P(b[0], b[1], 0, s), dx = off[0], dy = off[1];
        var l = document.createElementNS(NS, 'line'); l.setAttribute('x1', p[0] + dx); l.setAttribute('y1', p[1] + dy); l.setAttribute('x2', q[0] + dx); l.setAttribute('y2', q[1] + dy); l.setAttribute('class', 'kota'); g.appendChild(l);
        var t = document.createElementNS(NS, 'text'); t.setAttribute('x', (p[0] + q[0]) / 2 + dx * 2.2); t.setAttribute('y', (p[1] + q[1]) / 2 + dy * 2.2 + 5); t.setAttribute('text-anchor', 'middle'); t.setAttribute('class', 'kota-t'); t.textContent = txt; g.appendChild(t);
      }
      kota([0, D], [Wd, D], Wd + ' cm', [-14, 22]);
      kota([Wd, 0], [Wd, D], D + ' cm', [16, 22]);
      var hp = P(0, D, 0, s), hq = P(0, D, H, s);
      var lh = document.createElementNS(NS, 'line'); lh.setAttribute('x1', hp[0] - 22); lh.setAttribute('y1', hp[1]); lh.setAttribute('x2', hq[0] - 22); lh.setAttribute('y2', hq[1]); lh.setAttribute('class', 'kota'); g.appendChild(lh);
      var th = document.createElementNS(NS, 'text'); th.setAttribute('x', hp[0] - 30); th.setAttribute('y', (hp[1] + hq[1]) / 2); th.setAttribute('text-anchor', 'end'); th.setAttribute('class', 'kota-t'); th.textContent = H + ' cm'; g.appendChild(th);
      var bb = g.getBBox(), pad = 24;
      svg.setAttribute('viewBox', (bb.x - pad) + ' ' + (bb.y - pad) + ' ' + (bb.width + pad * 2) + ' ' + (bb.height + pad * 2));
      document.getElementById('z-souhrn').textContent = JM[st.m] + ' · ' + Wd + ' × ' + D + ' cm · strop ' + H + ' cm';
      ['w', 'd', 'h'].forEach(function (k) { document.getElementById(k + '-v').textContent = st[k] + ' cm'; });
      document.getElementById('z-poslat').href = 'poptavka/?' + new URLSearchParams(st).toString();
      if (W.hasG && !W.RM && !prvni) gsap.from(svg.querySelectorAll('.kus'), { y: -14, opacity: 0, duration: .4, stagger: .05, ease: 'power2.out' });
      prvni = false;
    }
    document.getElementById('m').addEventListener('change', function (e) { st.m = e.target.value; kresli(); });
    ['w', 'd', 'h'].forEach(function (k) { document.getElementById(k).addEventListener('input', function (e) { st[k] = +e.target.value; kresli(); }); });
    kresli();
    if (W.hasG && !W.RM) {
      ScrollTrigger.create({ trigger: svg, start: 'top 75%', once: true, onEnter: function () {
        var cary = svg.querySelectorAll('.m-podlaha, .m-stena');
        cary.forEach(function (p) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.fromTo(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }); });
        gsap.from(svg.querySelectorAll('.kus'), { y: -40, opacity: 0, duration: .6, stagger: .12, ease: 'back.out(1.6)', delay: .6 });
      } });
    }
  }

  /* poptávka */
  var pf = document.getElementById('pform');
  if (pf) {
    var q = new URLSearchParams(location.search), roz = '';
    if (JM[q.get('m')]) {
      document.getElementById('pm').value = q.get('m');
      var w = parseInt(q.get('w'), 10), d = parseInt(q.get('d'), 10), h = parseInt(q.get('h'), 10);
      if (w && d && h) { roz = w + ' × ' + d + ' cm, strop ' + h + ' cm'; document.getElementById('p-rozmery-t').textContent = JM[q.get('m')] + ': ' + roz; document.getElementById('p-rozmery').hidden = false; }
    }
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel');
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var pm = document.getElementById('pm'), r = ['Dobrý den,', 'poptávám: ' + pm.options[pm.selectedIndex].text + '.'];
      if (roz) r.push('Rozměry místnosti: ' + roz + '.');
      if (document.getElementById('projekt').checked) r.push('Chci i projekt.');
      var ob = document.getElementById('obec').value.trim(), po = document.getElementById('popis').value.trim();
      if (ob) r.push('Obec: ' + ob + '.');
      if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420736689115?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s poptávkou'); }
      else { location.href = 'mailto:roman.blasko@centrum.cz?subject=' + encodeURIComponent('Poptávka nábytku z webu') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s poptávkou'); }
    });
  }

  if (!W.hasG || W.RM) return;
  var hv = document.querySelectorAll('.hv-iso path');
  hv.forEach(function (p) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.set(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }); });
  afterIntro(function () {
    gsap.fromTo('.hv-foto img', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power3.inOut', delay: .1 });
    gsap.to(hv, { strokeDashoffset: 0, duration: 1, stagger: .12, ease: 'power2.inOut', delay: .7 });
    if (pf) gsap.from('.p-form .pole, .p-form .zaskrt, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
})();
