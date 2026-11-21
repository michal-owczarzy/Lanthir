/* Zámečnictví PF: návrh brány (typ, šířka, výplň, pohon) s otevřením ovladačem, poptávka. */
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var TYP = { posuvna: 'Posuvná samonosná brána', kridlova: 'Křídlová brána', branka: 'Branka' };
  var VY = { pruty: 'svislé pruty', kovana: 'kovaná výplň', tahokov: 'tahokov', plech: 'plech' };
  function el(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }

  var svg = document.getElementById('brana-svg');
  if (svg) {
    var st = { typ: 'posuvna', w: 400, v: 'pruty', pohon: true }, otevreno = false, krid = [];
    var H = 150, G = 200;
    function vypln(g, x, y, w, h, v) {
      el('rect', { x: x, y: y, width: w, height: h, class: 'ram' }, g);
      if (v === 'plech') { el('rect', { x: x + 4, y: y + 4, width: w - 8, height: h - 8, class: 'plech' }, g); for (var a = y + 30; a < y + h - 10; a += 30) el('line', { x1: x + 4, y1: a, x2: x + w - 4, y2: a, class: 'lem' }, g); return; }
      if (v === 'tahokov') { el('rect', { x: x + 4, y: y + 4, width: w - 8, height: h - 8, class: 'tahokov' }, g); return; }
      var krok = v === 'kovana' ? 14 : 12;
      for (var b = x + krok; b < x + w - 4; b += krok) {
        el('line', { x1: b, y1: y, x2: b, y2: y + h, class: 'prut' }, g);
        if (v === 'kovana') el('path', { d: 'M' + (b - 4) + ' ' + y + 'L' + b + ' ' + (y - 12) + 'L' + (b + 4) + ' ' + y + 'z', class: 'hrot' }, g);
      }
      if (v === 'kovana') { var cy = y + h * .55; for (var k = x + krok * 1.5; k < x + w - krok; k += krok * 2) el('circle', { cx: k, cy: cy, r: krok * .45, class: 'kruh' }, g); el('line', { x1: x, y1: cy - krok * .5, x2: x + w, y2: cy - krok * .5, class: 'prut' }, g); el('line', { x1: x, y1: cy + krok * .5, x2: x + w, y2: cy + krok * .5, class: 'prut' }, g); }
    }
    function kresli() {
      svg.innerHTML = ''; otevreno = false; nastavOvl();
      var w = st.typ === 'branka' ? 110 : st.w, sl = 16, y0 = G - H - 6;
      var x0 = st.typ === 'posuvna' ? w * .55 + 40 : 40, vbw = x0 + w + sl + 40;
      svg.setAttribute('viewBox', '0 ' + (y0 - 40) + ' ' + vbw + ' ' + (H + 90));
      el('line', { x1: 0, y1: G, x2: vbw, y2: G, class: 'zem' }, svg);
      var defs = el('defs', {}, svg), clip = el('clipPath', { id: 'okno' }, defs);
      var pat = el('pattern', { id: 'tk', width: 14, height: 8, patternUnits: 'userSpaceOnUse' }, defs); el('path', { d: 'M0 4 7 0 14 4 7 8z', fill: 'none', stroke: '#17191c', 'stroke-width': 1.6 }, pat);
      el('rect', { x: x0 - 4000, y: y0 - 60, width: 4000 + w + sl + 4, height: H + 120 }, clip);
      var gate = el('g', { id: 'kridla', 'clip-path': st.typ === 'posuvna' ? 'url(#okno)' : '' }, svg);
      krid = [];
      if (st.typ === 'posuvna') {
        var g1 = el('g', { class: 'kridlo' }, gate);
        vypln(g1, x0, y0, w, H, st.v);
        /* protiváha samonosné brány: nosník s trojúhelníkovým výztužením */
        var t = w * .4;
        el('path', { d: 'M' + x0 + ' ' + (y0 + H) + 'H' + (x0 - t) + 'L' + x0 + ' ' + (y0 + H * .35), class: 'protivaha' }, g1);
        el('path', { d: 'M' + (x0 - t * .5) + ' ' + (y0 + H) + 'L' + (x0 - t * .5) + ' ' + (y0 + H * .68), class: 'protivaha' }, g1);
        el('rect', { x: x0 - t, y: y0 + H, width: w + t, height: 6, class: 'nosnik' }, g1);
        krid.push({ g: g1, typ: 'posun', d: -w });
        /* sloupky: plot vlevo zakryje odjetou bránu */
        el('rect', { x: 0, y: y0 + 20, width: x0 - 12, height: H - 20, class: 'zed' }, svg);
        el('rect', { x: x0 - 12, y: y0 - 10, width: sl, height: H + 16, class: 'sloup' }, svg);
        el('rect', { x: x0 + w, y: y0 - 10, width: sl, height: H + 16, class: 'sloup' }, svg);
        el('rect', { x: x0 - 30, y: G - 16, width: 22, height: 14, rx: 2, class: 'motor' + (st.pohon ? '' : ' skryt') }, svg);
      } else {
        var parts = st.typ === 'kridlova' ? [[x0 + sl, w / 2 - 2, 'l'], [x0 + sl + w / 2 + 2, w / 2 - 2, 'r']] : [[x0 + sl, w, 'l']];
        parts.forEach(function (p) { var g = el('g', { class: 'kridlo' }, gate); vypln(g, p[0], y0, p[1], H, st.v); krid.push({ g: g, typ: 'otoc', o: (p[2] === 'l' ? p[0] : p[0] + p[1]) + ' ' + (y0 + H / 2), s: p[2] }); });
        el('rect', { x: x0, y: y0 - 10, width: sl, height: H + 16, class: 'sloup' }, svg);
        el('rect', { x: x0 + sl + w, y: y0 - 10, width: sl, height: H + 16, class: 'sloup' }, svg);
        if (st.pohon) el('rect', { x: x0 + sl + 6, y: y0 + H * .55, width: 40, height: 9, rx: 3, class: 'motor' }, gate);
      }
      var kt = el('g', { class: 'kota' }, svg);
      var kx = st.typ === 'posuvna' ? x0 + 4 : x0 + sl;
      el('path', { d: 'M' + kx + ' ' + (G + 14) + 'H' + (kx + w) + 'M' + kx + ' ' + (G + 8) + 'v12M' + (kx + w) + ' ' + (G + 8) + 'v12' }, kt);
      var tx = el('text', { x: kx + w / 2, y: G + 34, 'text-anchor': 'middle' }, kt); tx.textContent = w + ' cm';
      var s = TYP[st.typ] + ', ' + w + ' cm, ' + VY[st.v] + (st.pohon ? ', elektrický pohon' : '');
      document.getElementById('souhrn').textContent = s;
      document.getElementById('w-v').textContent = w + ' cm';
      document.getElementById('k-poslat').href = 'poptavka/?' + new URLSearchParams({ t: st.typ, w: w, v: st.v, p: st.pohon ? 1 : 0 }).toString();
    }
    function nastavOvl() {
      var o = document.getElementById('ovladac');
      o.classList.toggle('dalkovy', st.pohon); o.setAttribute('aria-pressed', String(otevreno));
      o.querySelector('.o-txt').textContent = (otevreno ? 'Zavřít' : 'Otevřít') + (st.pohon ? ' ovladačem' : ' bránu');
    }
    function pohyb() {
      otevreno = !otevreno; nastavOvl();
      krid.forEach(function (k) {
        var dur = st.pohon ? 2.2 : 1.2;
        if (W.hasG && !W.RM) {
          if (k.typ === 'posun') gsap.to(k.g, { x: otevreno ? k.d : 0, duration: dur, ease: 'power1.inOut' });
          else gsap.to(k.g, { scaleX: otevreno ? .18 : 1, skewY: otevreno ? (k.s === 'l' ? -8 : 8) : 0, svgOrigin: k.o, duration: dur * .8, ease: 'power2.inOut' });
        } else k.g.setAttribute('transform', otevreno ? (k.typ === 'posun' ? 'translate(' + k.d + ' 0)' : '') : '');
      });
      if (st.pohon && W.hasG && !W.RM) gsap.fromTo('.o-led', { opacity: 1 }, { opacity: .25, duration: .25, repeat: 7, yoyo: true });
    }
    document.getElementById('ovladac').addEventListener('click', pohyb);
    function vyber(id, key) { var box = document.getElementById(id); box.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; box.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st[key] = b.dataset.v; document.querySelector('.posuv').hidden = st.typ === 'branka'; kresli(); }); }
    vyber('typ', 'typ'); vyber('vypln', 'v');
    document.getElementById('w').addEventListener('input', function (e) { st.w = +e.target.value; kresli(); });
    document.getElementById('pohon').addEventListener('change', function (e) { st.pohon = e.target.checked; kresli(); });
    kresli();
    if (W.hasG && !W.RM) ScrollTrigger.create({ trigger: svg, start: 'top 75%', once: true, onEnter: function () { gsap.from('#brana-svg .sloup', { scaleY: 0, transformOrigin: '50% 100%', duration: .6, stagger: .1, ease: 'power3.out' }); gsap.from('#kridla', { opacity: 0, y: -20, duration: .7, delay: .3, ease: 'power3.out' }); } });
  }

  /* poptávka */
  var pf = document.getElementById('pform');
  if (pf) {
    var q = new URLSearchParams(location.search), navrh = '';
    if (TYP[q.get('t')] && VY[q.get('v')]) {
      navrh = TYP[q.get('t')] + ', ' + (parseInt(q.get('w'), 10) || '') + ' cm, ' + VY[q.get('v')] + (q.get('p') === '1' ? ', elektrický pohon s dálkovým ovládáním' : '');
      document.getElementById('p-navrh-t').textContent = navrh; document.getElementById('p-navrh').hidden = false;
      var b = [].filter.call(document.querySelectorAll('#co .cip'), function (x) { return x.textContent === (q.get('t') === 'branka' ? 'Branka' : 'Brána'); })[0];
      if (b) b.setAttribute('aria-pressed', 'true');
    }
    var co = document.getElementById('co');
    co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (b) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); });
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel'), vyb = [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; });
      if (!vyb.length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast('Vyberte, co potřebujete'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžeme ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'poptávám: ' + vyb.join(', ') + '.'];
      if (navrh) r.push('Návrh z webu: ' + navrh + '.');
      var ob = document.getElementById('obec').value.trim(), po = document.getElementById('popis').value.trim();
      if (ob) r.push('Obec: ' + ob + '.');
      if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420777867079?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s poptávkou'); }
      else { location.href = 'mailto:f.pleticha@seznam.cz?subject=' + encodeURIComponent('Poptávka z webu') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s poptávkou'); }
    });
  }

  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.1, ease: 'power3.inOut', delay: .1 });
    if (pf) gsap.from('.p-form fieldset, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
  gsap.utils.toArray('.v-mriz img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();
