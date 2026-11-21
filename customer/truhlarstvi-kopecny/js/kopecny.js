/* Truhlářství Kopečný: návrh kuchyně (pohled + půdorys), přenos návrhu do poptávky. */
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var DV = {"bila": ["Bílá mat", "#f2f1ec"], "kasmir": ["Kašmír", "#d3cbbf"], "salvej": ["Šalvěj", "#9fae98"], "antracit": ["Antracit", "#3b3f45"], "dub": ["Dub přírodní", "#c79d6c"], "orech": ["Ořech", "#6f4d33"]};
  var DE = {"dub": ["Dub", "#b88a58"], "beton": ["Beton", "#9b9b96"], "kamen": ["Černý kámen", "#2a2a2b"], "mramor": ["Bílý mramor", "#e9e6e0"]};
  var TV = { rovna: 'Rovná kuchyň', l: 'Kuchyň do L', u: 'Kuchyň do U' };
  function el(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
  function sklon(n, a, b, c) { return n === 1 ? a : (n > 1 && n < 5 ? b : c); }

  var form = document.getElementById('nform');
  if (form) {
    var st = { t: 'rovna', a: 300, b: 200, d: 'kasmir', p: 'dub' }, prvni = true;
    var pohled = document.getElementById('pohled'), pud = document.getElementById('pudorys');
    function moduly(L) { var n = Math.max(3, Math.round(L / 60)); return { n: n, w: L / n }; }
    function kresli() {
      var A = st.a, m = moduly(A), d = DV[st.d][1], p = DE[st.p][1], tmave = st.d === 'antracit' || st.d === 'orech';
      pohled.setAttribute('viewBox', '-14 0 ' + (A + 28) + ' 272');
      pohled.innerHTML = '';
      var g = el('g', {}, pohled);
      el('line', { x1: -14, y1: 240, x2: A + 14, y2: 240, class: 'podlaha' }, g);
      var sink = 1, var_ = m.n - 2;
      /* horní skříňky (nad varnou deskou digestoř) */
      for (var i = 0; i < m.n; i++) {
        var x = i * m.w;
        if (i === var_) { el('path', { d: 'M' + (x + m.w * .2) + ' 100h' + (m.w * .6) + 'l' + (m.w * .12) + ' 30h-' + (m.w * .84) + 'z', class: 'digestor' }, g); el('rect', { x: x + m.w * .42, y: 40, width: m.w * .16, height: 60, class: 'digestor' }, g); continue; }
        el('rect', { x: x + 1, y: 58, width: m.w - 2, height: 72, rx: 1, fill: d, class: 'dvirko horni' }, g);
        el('rect', { x: x + m.w / 2 - 6, y: 124, width: 12, height: 2, class: 'uchytka' + (tmave ? ' svetla' : '') }, g);
      }
      /* pracovní deska, spodní skříňky, sokl */
      el('rect', { x: -2, y: 150, width: A + 4, height: 4, fill: p, class: 'deska' }, g);
      for (var j = 0; j < m.n; j++) {
        var x2 = j * m.w;
        el('rect', { x: x2 + 1, y: 155, width: m.w - 2, height: 74, rx: 1, fill: d, class: 'dvirko dolni' }, g);
        if (j === var_) { el('rect', { x: x2 + 6, y: 172, width: m.w - 12, height: 40, rx: 2, class: 'trouba' }, g); el('rect', { x: x2 + 6, y: 162, width: m.w - 12, height: 5, rx: 1, class: 'trouba' }, g); }
        else el('rect', { x: x2 + m.w / 2 - 6, y: 159, width: 12, height: 2, class: 'uchytka' + (tmave ? ' svetla' : '') }, g);
        if (j === sink) el('path', { d: 'M' + (x2 + m.w / 2) + ' 150v-14h8v4', class: 'baterie' }, g);
      }
      el('rect', { x: 0, y: 230, width: A, height: 10, class: 'sokl' }, g);
      /* kóta */
      var k = el('g', { class: 'kota-svg' }, g);
      el('path', { d: 'M0 250v14M' + A + ' 250v14M0 257H' + A }, k);
      var t = el('text', { x: A / 2, y: 253, 'text-anchor': 'middle' }, k); t.textContent = A + ' cm';
      /* půdorys: 60 cm hloubka linky */
      pud.innerHTML = '';
      var B = st.t === 'rovna' ? 0 : st.b, s = 100 / Math.max(A, B + 60, 240), ox = 10, oy = 10;
      var pg = el('g', {}, pud);
      el('path', { d: 'M' + ox + ' ' + (oy + 100) + 'V' + oy + 'H' + (ox + 100) + (st.t === 'u' ? 'V' + (oy + 100) : ''), class: 'zed' }, pg);
      el('rect', { x: ox, y: oy, width: A * s, height: 60 * s, fill: d, class: 'linka' }, pg);
      if (st.t !== 'rovna') el('rect', { x: ox, y: oy + 60 * s, width: 60 * s, height: (B - 60) * s, fill: d, class: 'linka' }, pg);
      if (st.t === 'u') el('rect', { x: ox + (A - 60) * s, y: oy + 60 * s, width: 60 * s, height: (B - 60) * s, fill: d, class: 'linka' }, pg);
      /* souhrn */
      var dolni = m.n + (st.t === 'rovna' ? 0 : Math.round((B - 60) / 60) * (st.t === 'u' ? 2 : 1)), horni = m.n - 1;
      var txt = TV[st.t] + ', ' + A + (st.t === 'rovna' ? '' : ' + ' + B + (st.t === 'u' ? ' + ' + B : '')) + ' cm';
      document.getElementById('souhrn').textContent = txt;
      document.getElementById('skrinky').textContent = 'dole ' + dolni + ' ' + sklon(dolni, 'skříňka', 'skříňky', 'skříněk') + ' · nahoře ' + horni + ' · dvířka ' + DV[st.d][0].toLowerCase() + ' · deska ' + DE[st.p][0].toLowerCase();
      document.getElementById('a-v').textContent = A + ' cm';
      document.getElementById('b-v').textContent = B + ' cm';
      var q = new URLSearchParams({ t: st.t, a: A, b: B, d: st.d, p: st.p });
      document.getElementById('poslat').href = 'poptavka/?' + q.toString();
      if (W.hasG && !W.RM && !prvni) gsap.from(pohled.querySelectorAll('.dvirko'), { scaleY: .86, transformOrigin: '50% 100%', opacity: .4, duration: .35, stagger: .012, ease: 'power2.out' });
      prvni = false;
    }
    function vyber(box, attr, key) {
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        box.querySelectorAll('button').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
        st[key] = b.dataset[attr];
        if (key === 't') document.getElementById('b-box').hidden = st.t === 'rovna';
        kresli();
      });
    }
    vyber(document.getElementById('tvar'), 't', 't');
    vyber(document.getElementById('dvirka'), 'd', 'd');
    vyber(document.getElementById('deska'), 'p', 'p');
    ['a', 'b'].forEach(function (k) { document.getElementById(k).addEventListener('input', function (e) { st[k] = +e.target.value; kresli(); }); });
    kresli();
    if (W.hasG && !W.RM) {
      ScrollTrigger.create({ trigger: '.vykres', start: 'top 75%', once: true, onEnter: function () {
        gsap.from('#pohled .dvirko', { scaleY: 0, transformOrigin: '50% 100%', duration: .5, stagger: .04, ease: 'power3.out' });
        gsap.from('#pohled .deska, #pohled .sokl', { scaleX: 0, transformOrigin: '0 50%', duration: .7, ease: 'power3.inOut' });
      } });
    }
  }

  /* poptávka */
  var pf = document.getElementById('pform');
  if (pf) {
    var q = new URLSearchParams(location.search), navrh = '';
    if (q.get('t') && TV[q.get('t')] && DV[q.get('d')] && DE[q.get('p')]) {
      var a = parseInt(q.get('a'), 10) || 0, b = parseInt(q.get('b'), 10) || 0, t = q.get('t');
      navrh = TV[t] + ', ' + a + (t === 'rovna' ? '' : ' + ' + b + (t === 'u' ? ' + ' + b : '')) + ' cm, dvířka ' + DV[q.get('d')][0].toLowerCase() + ', pracovní deska ' + DE[q.get('p')][0].toLowerCase();
      document.getElementById('p-navrh-text').textContent = navrh;
      document.getElementById('p-navrh').hidden = false;
    }
    var co = document.getElementById('co');
    co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; co.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); });
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel');
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'poptávám: ' + co.querySelector('[aria-pressed="true"]').textContent + '.'];
      if (navrh) r.push('Návrh z webu: ' + navrh + '.');
      var ob = document.getElementById('obec').value.trim(), po = document.getElementById('popis').value.trim(), j = document.getElementById('jmeno').value.trim();
      if (ob) r.push('Místo montáže: ' + ob + '.');
      if (po) r.push('', po);
      r.push('', j, 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420604187793?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s poptávkou'); }
      else { location.href = 'mailto:kopecnymilan@seznam.cz?subject=' + encodeURIComponent('Poptávka z webu') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s poptávkou'); }
    });
  }

  if (!W.hasG || W.RM) return;
  if (pf) afterIntro(function () { gsap.from('.p-form .cip, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' }); gsap.fromTo('.p-foto img', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut', delay: .2 }); });
  afterIntro(function () {
    gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut', delay: .15 });
    gsap.from('.kota i', { scaleX: 0, duration: .9, ease: 'power3.out', delay: .9 });
    gsap.from('.kota', { opacity: 0, duration: .4, delay: .85 });
  });
  gsap.utils.toArray('.v-mriz figure img').forEach(function (im) {
    gsap.fromTo(im, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
})();
