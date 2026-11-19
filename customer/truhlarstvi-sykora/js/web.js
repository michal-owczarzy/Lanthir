/* Společné: toast, kreslení tahu, najíždění obsahu. Úvod: kóty kolem fotky,
   rejstřík s oknem, schodiště postupu, pás realizací, uložení kontaktu. */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  SY.RM = RM; SY.hasG = hasG;
  var t = document.getElementById('toast'), tt;
  SY.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  SY.cara = function (els) {
    return (window.gsap ? gsap.utils.toArray(els) : []).map(function (el) {
      var L = Math.ceil(el.getTotalLength()) + 1;
      el.removeAttribute('pathLength');
      gsap.set(el, { strokeDasharray: L + ' ' + L, strokeDashoffset: L });
      return el;
    });
  };
  var NS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, at) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); return e; }
  SY.svgEl = svgEl;

  /* ---- uložit kontakt (.vcf) ---- */
  var vcf = document.getElementById('vcf');
  if (vcf) vcf.addEventListener('click', function () {
    var v = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Sýkora;Aleš;;;', 'FN:Aleš Sýkora', 'ORG:Truhlářství Sýkora',
      'TEL;TYPE=CELL:' + SY.TEL, 'EMAIL:' + SY.MAIL, 'ADR;TYPE=WORK:;;Blanická 252/172;Ostrava-Stará Bělá;;724 00;Česko', 'END:VCARD'].join('\r\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([v], { type: 'text/vcard;charset=utf-8' }));
    a.download = 'truhlarstvi-sykora.vcf';
    document.body.appendChild(a); a.click(); a.remove();
    SY.toast('Kontakt stažen, otevřete ho v telefonu');
  });

  /* ---- rejstřík: najetí myší přepne fotku v okně ---- */
  var radky = [].slice.call(document.querySelectorAll('.radek'));
  var okno = document.querySelectorAll('#okno img'), okN = document.getElementById('okno-n'), okP = document.getElementById('okno-p');
  function aktivni(id) {
    radky.forEach(function (r) { r.classList.toggle('on', r.dataset.k === id); });
    [].forEach.call(okno, function (i) { i.classList.toggle('on', i.dataset.k === id); });
    var k = SY.KAT.filter(function (x) { return x.id === id; })[0];
    if (k && okN) { okN.textContent = k.n; okP.textContent = k.f[0][3]; }
  }
  if (radky.length) {
    radky.forEach(function (r) { r.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') aktivni(r.dataset.k); }); });
    aktivni(radky[0].dataset.k);
  }

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* ---- kóty kolem fotky v úvodu: měří se v pixelech, aby text nebyl zdeformovaný ---- */
  var kota = document.getElementById('kota');
  function kreslitKoty() {
    if (!kota) return [];
    var img = kota.parentNode.querySelector('img'), W = img.offsetWidth, H = img.offsetHeight, o = 26;
    kota.setAttribute('viewBox', '0 0 ' + (W + 60) + ' ' + (H + 60));
    kota.setAttribute('preserveAspectRatio', 'xMinYMin meet');
    kota.innerHTML = '';
    var y = o + H + 20, x = o + W + 20, sw = innerWidth < 680;
    var lines = [
      svgEl('path', { 'class': 'l', d: 'M' + o + ' ' + (o + H + 6) + 'V' + (y + 7) + 'M' + (o + W) + ' ' + (o + H + 6) + 'V' + (y + 7) }),
      svgEl('path', { 'class': 'l', d: 'M' + o + ' ' + y + 'H' + (o + W) }),
      svgEl('path', { 'class': 't', d: 'M' + (o - 5) + ' ' + (y + 5) + 'l10 -10M' + (o + W - 5) + ' ' + (y + 5) + 'l10 -10' }),
      svgEl('path', { 'class': 'l', d: 'M' + (o + W + 6) + ' ' + o + 'H' + (x + 7) + 'M' + (o + W + 6) + ' ' + (o + H) + 'H' + (x + 7) }),
      svgEl('path', { 'class': 'l', d: 'M' + x + ' ' + o + 'V' + (o + H) }),
      svgEl('path', { 'class': 't', d: 'M' + (x - 5) + ' ' + (o + 5) + 'l10 -10M' + (x - 5) + ' ' + (o + H + 5) + 'l10 -10' })
    ];
    lines.forEach(function (l) { kota.appendChild(l); });
    var tx1 = sw ? 'šířka na míru' : 'šířka na míru', g1 = svgEl('g', {}), g2 = svgEl('g', {});
    var w1 = sw ? 104 : 118;
    g1.appendChild(svgEl('rect', { 'class': 'stitek', x: o + W / 2 - w1 / 2, y: y - 11, width: w1, height: 22 }));
    var t1 = svgEl('text', { x: o + W / 2, y: y + 5, 'text-anchor': 'middle' }); t1.textContent = tx1; g1.appendChild(t1);
    g2.setAttribute('transform', 'rotate(-90 ' + x + ' ' + (o + H / 2) + ')');
    g2.appendChild(svgEl('rect', { 'class': 'stitek', x: x - w1 / 2, y: o + H / 2 - 11, width: w1, height: 22 }));
    var t2 = svgEl('text', { x: x, y: o + H / 2 + 5, 'text-anchor': 'middle' }); t2.textContent = 'výška na míru'; g2.appendChild(t2);
    kota.appendChild(g1); kota.appendChild(g2);
    return { lines: lines, labels: [g1, g2] };
  }

  /* ---- schodiště postupu: čára po nášlapech, změřená ze skutečných stupňů ---- */
  var schody = document.getElementById('schody'), zp = document.getElementById('zabradli-p'), zsvg = document.getElementById('zabradli');
  function trasaSchodu() {
    if (!schody) return;
    var st = [].slice.call(schody.querySelectorAll('.stupen'));
    var W = schody.offsetWidth, H = schody.offsetHeight;
    zsvg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    var b = st.map(function (s) { return { l: s.offsetLeft, t: s.offsetTop, r: s.offsetLeft + s.offsetWidth, b: s.offsetTop + s.offsetHeight }; });
    var radou = b.every(function (x, i) { return !i || x.l > b[i - 1].l; });
    var sloupec = b.every(function (x, i) { return !i || x.l === b[i - 1].l; });
    var d = '';
    if (radou) {
      var off = 12;
      d = 'M' + b[0].l + ' ' + (b[0].t - off);
      for (var i = 0; i < b.length; i++) {
        var konec = i < b.length - 1 ? (b[i].r + b[i + 1].l) / 2 : b[i].r;
        d += 'H' + konec;
        if (i < b.length - 1) d += 'V' + (b[i + 1].t - off);
      }
    } else if (sloupec) {
      var x = b[0].l - 14;
      d = 'M' + x + ' ' + b[0].t + 'V' + b[b.length - 1].b;
    }
    zp.setAttribute('d', d || 'M0 0');
    zsvg.style.display = d ? '' : 'none';
  }

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () {
    gsap.set('[data-r],[data-h]', { clearProps: 'all' });
    kreslitKoty(); trasaSchodu();
  });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });

    /* úvod: po přistání loga text vyjede a kóty se narýsují kolem fotky */
    if (document.querySelector('[data-h]')) {
      var k = kreslitKoty();
      if (k.lines) { SY.cara(k.lines); gsap.set(k.labels, { opacity: 0 }); }
      afterIntro(function () {
        var tl = gsap.timeline();
        tl.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' });
        if (k.lines) tl.to(k.lines, { strokeDashoffset: 0, duration: .55, stagger: .12, ease: 'power2.inOut' }, .45)
          .to(k.labels, { opacity: 1, duration: .3, stagger: .1 }, '-=.25');
      });
    }

    /* rejstřík: při rolování se okno přepne na řádek, který je zrovna uprostřed */
    var mq = gsap.matchMedia();
    mq.add('(min-width: 1061px)', function () {
      radky.forEach(function (r) {
        ScrollTrigger.create({ trigger: r, start: 'top 58%', end: 'bottom 58%', onToggle: function (s) { if (s.isActive) aktivni(r.dataset.k); } });
      });
    });

    /* schodiště: stupně vyrůstají a čára po nich stoupá spolu s rolováním */
    if (schody) {
      trasaSchodu();
      SY.cara(zp);
      var st = schody.querySelectorAll('.stupen');
      var ts = gsap.timeline({ scrollTrigger: { trigger: schody, start: 'top 82%', end: 'bottom 70%', scrub: .6, invalidateOnRefresh: true } });
      st.forEach(function (s, i) { ts.from(s, { yPercent: 18, opacity: 0, duration: 1, ease: 'power2.out' }, i * .7); });
      ts.to(zp, { strokeDashoffset: 0, duration: st.length * .7 + .3, ease: 'none' }, .2);
      ScrollTrigger.addEventListener('refreshInit', function () { trasaSchodu(); SY.cara(zp); });
    }

    /* pás realizací se při rolování posouvá doleva, ať je vidět celý */
    var pas = document.getElementById('pas');
    if (pas) {
      gsap.to(pas, { x: function () { return -Math.max(0, pas.scrollWidth - document.documentElement.clientWidth * .92); }, ease: 'none',
        scrollTrigger: { trigger: pas, start: 'top bottom', end: 'bottom top', scrub: .5, invalidateOnRefresh: true } });
    }
  });

  var rt, sirka = innerWidth;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  addEventListener('resize', function () {
    if (innerWidth === sirka) return; sirka = innerWidth;
    var k = kreslitKoty();
    if (k.labels) gsap.set(k.labels, { opacity: 1 });
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
