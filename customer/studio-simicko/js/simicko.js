/* Studio Šimičko: motiv na kůži (obtisk / hotové, velikost v cm), objednávka konzultace. */
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var MOT = {"lilie": ["Lilie", "M100 292C98 232 104 172 100 122 M100 232C80 217 66 202 62 182C82 188 94 202 100 217 M101 202C120 192 132 178 136 160C118 164 106 178 101 192 M100 120C88 100 70 92 52 96C66 108 82 116 100 120 M100 120C112 100 130 92 148 96C134 108 118 116 100 120 M100 118C92 92 92 66 100 44C108 66 108 92 100 118 M100 118C84 96 74 78 76 58C88 70 96 90 100 118 M100 118C116 96 126 78 124 58C112 70 104 90 100 118 M100 112L92 82M100 112L108 82M100 112L100 76"], "vetvicka": ["Olivová větvička", "M70 285C82 220 108 150 140 40 M80.5 255.6Q87.3 231.8 107.7 236.9Q106.0 253.9 80.5 255.6 M88.7 232.3Q82.2 209.6 62.7 214.5Q64.4 230.7 88.7 232.3 M96.5 209.1Q102.7 187.5 121.1 192.1Q119.6 207.5 96.5 209.1 M104.0 185.8Q98.1 165.3 80.6 169.7Q82.1 184.3 104.0 185.8 M111.0 162.5Q116.5 143.2 133.1 147.3Q131.7 161.1 111.0 162.5 M117.5 139.2Q112.3 121.0 96.7 124.9Q98.0 137.9 117.5 139.2 M123.6 115.9Q128.4 98.9 143.1 102.5Q141.9 114.7 123.6 115.9 M129.2 92.7Q124.6 76.7 111.0 80.1Q112.1 91.5 129.2 92.7 M134.5 69.4Q138.7 54.6 151.4 57.7Q150.4 68.3 134.5 69.4"], "mesic": ["Měsíc a hvězdy", "M118 58A72 72 0 1 0 152 196A56 56 0 1 1 118 58Z M58 72l4 10 10 4-10 4-4 10-4-10-10-4 10-4z M150 120l3 7 7 3-7 3-3 7-3-7-7-3 7-3z M70 230l3 7 7 3-7 3-3 7-3-7-7-3 7-3z M150 250a2 2 0 1 0 .1 0 M44 160a2 2 0 1 0 .1 0"]};
  var svg = document.getElementById('kuze');
  if (svg) {
    var st = { m: 'lilie', cm: 8, hotove: false }, p = document.getElementById('motiv-p'), g = document.getElementById('motiv-g'), CM = 16;
    /* pravítko po straně: 1 cm = 16 jednotek */
    var pr = document.getElementById('pravitko');
    for (var i = 0; i <= 25; i++) { var l = document.createElementNS(NS, 'line'); var y = 20 + i * CM; l.setAttribute('x1', 262); l.setAttribute('x2', i % 5 ? 272 : 282); l.setAttribute('y1', y); l.setAttribute('y2', y); pr.appendChild(l); if (i % 5 === 0) { var t = document.createElementNS(NS, 'text'); t.setAttribute('x', 286); t.setAttribute('y', y + 4); t.textContent = i; pr.appendChild(t); } }
    function kresli(anim) {
      p.setAttribute('d', MOT[st.m][1]);
      var s = st.cm * CM / 300, tx = 150 - 100 * s, ty = 220 - 150 * s;
      g.setAttribute('transform', 'translate(' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ') scale(' + s.toFixed(3) + ')');
      g.setAttribute('class', st.hotove ? 'hotove' : 'obtisk');
      p.style.strokeWidth = ((st.hotove ? 1.7 : 2.4) / s).toFixed(2);
      document.getElementById('cm-v').textContent = st.cm + ' cm';
      document.getElementById('m-poslat').href = 'objednat/?' + new URLSearchParams({ motiv: st.m, cm: st.cm }).toString();
      if (anim && W.hasG && !W.RM) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.fromTo(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }); }
    }
    var mv = document.getElementById('motivy');
    mv.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; mv.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st.m = b.dataset.m; kresli(true); });
    document.getElementById('cm').addEventListener('input', function (e) { st.cm = +e.target.value; kresli(false); });
    var po = document.getElementById('p-obtisk'), ph = document.getElementById('p-hotove');
    function hot(v) { st.hotove = v; po.setAttribute('aria-pressed', String(!v)); ph.setAttribute('aria-pressed', String(v)); kresli(false); }
    po.addEventListener('click', function () { hot(false); }); ph.addEventListener('click', function () { hot(true); });
    kresli(false);
    if (W.hasG && !W.RM) ScrollTrigger.create({ trigger: svg, start: 'top 75%', once: true, onEnter: function () { kresli(true); } });
  }

  /* objednávka */
  var f = document.getElementById('oform');
  if (f) {
    var q = new URLSearchParams(location.search), mot = MOT[q.get('motiv')], co = document.getElementById('co');
    function prep(id, vice) { var box = document.getElementById(id); box.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; if (vice) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); else box.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); }); }
    prep('co', true); prep('kam', false);
    if (mot) {
      var cm = parseInt(q.get('cm'), 10) || 8, om = document.getElementById('o-motiv');
      om.textContent = 'Vybraný motiv: ' + mot[0].toLowerCase() + ', asi ' + cm + ' cm'; om.hidden = false;
      co.querySelector('[data-c="tet"]').setAttribute('aria-pressed', 'true');
    }
    if (q.get('co') === 'pmu') co.querySelector('[data-c="pmu"]').setAttribute('aria-pressed', 'true');
    function vyb(id) { return [].filter.call(document.querySelectorAll('#' + id + ' .cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel');
      if (!vyb('co').length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast('Vyberte tetování nebo permanentní make-up'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'chtěla/chtěl bych konzultaci: ' + vyb('co').join(', ').toLowerCase() + '.'];
      if (vyb('kam').length) r.push('Místo: ' + vyb('kam')[0].toLowerCase() + '.');
      if (mot) r.push('Motiv z webu: ' + mot[0].toLowerCase() + ', asi ' + (parseInt(q.get('cm'), 10) || 8) + ' cm.');
      var po = document.getElementById('popis').value.trim();
      if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
      if (k === 'sms') { location.href = 'sms:+420733289895?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS'); }
      else { location.href = 'mailto:misasimickova@email.cz?subject=' + encodeURIComponent('Konzultace') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail'); }
    });
  }

  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.from('.mozaika figure', { clipPath: 'inset(100% 0 0 0)', duration: 1, stagger: .14, ease: 'power3.inOut', delay: .1, clearProps: 'clipPath' });
    if (f) gsap.from('.o-form fieldset, .o-form .pole, .o-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
  gsap.utils.toArray('.t-mriz img, .pmu img').forEach(function (im) { gsap.fromTo(im, { scale: 1.1 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();
