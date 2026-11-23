/* Profis studio: stěna v pokoji (technika + barva, váleček), návrh do poptávky. */
var F = { tel: '+420602713459', mail: 'profis.studio@seznam.cz', predmet: 'Poptávka z webu', uvod: 'poptávám: ', prazdne: 'Vyberte, o co jde',
  extra: function () { var m = document.getElementById('mistnosti'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', m && m.value.trim() ? 'Počet místností: ' + m.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var T = {"malba": "Malba", "oikos": "OIKOS stěrka", "tapeta": "Tapeta", "folie": "Folie beton"}, B = {"kasmir": ["Kašmír", "#c9bfb6"], "mauve": ["Starorůžová", "#b9a2a0"], "salvej": ["Šalvěj", "#a7b39b"], "petrolej": ["Petrolej", "#2f5d62"], "okr": ["Okr", "#d4a45a"], "lomena": ["Lomená bílá", "#ece8e1"]};
  var st = { t: 'oikos', b: 'mauve' };
  function vrstva(g) {
    g.innerHTML = '';
    var r = document.createElementNS(NS, 'rect'); r.setAttribute('x', 120); r.setAttribute('y', 40); r.setAttribute('width', 360); r.setAttribute('height', 260); r.setAttribute('fill', B[st.b][1]); g.appendChild(r);
    var o = null;
    if (st.t === 'oikos') { o = document.createElementNS(NS, 'rect'); o.setAttribute('filter', 'url(#f-stuk)'); }
    if (st.t === 'folie') { o = document.createElementNS(NS, 'rect'); o.setAttribute('filter', 'url(#f-beton)'); }
    if (st.t === 'tapeta') { o = document.createElementNS(NS, 'rect'); o.setAttribute('fill', 'url(#p-tapeta)'); }
    if (o) { o.setAttribute('x', 120); o.setAttribute('y', 40); o.setAttribute('width', 360); o.setAttribute('height', 260); if (st.t !== 'tapeta') o.setAttribute('style', 'mix-blend-mode:multiply'); g.appendChild(o); }
  }
  var pokoj = document.getElementById('pokoj');
  if (pokoj) {
    var stara = document.getElementById('zed-stara'), nova = document.getElementById('zed-nova'), valec = document.getElementById('valec');
    vrstva(stara);
    function zmen() {
      vrstva(nova);
      document.getElementById('zk-souhrn').textContent = T[st.t] + ', ' + B[st.b][0].toLowerCase();
      document.getElementById('zk-poslat').href = 'poptavka/?t=' + st.t + '&b=' + st.b + '&co=' + st.t;
      if (W.hasG && !W.RM) {
        gsap.killTweensOf([nova, valec]);
        gsap.fromTo(nova, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.inOut', onComplete: function () { vrstva(stara); nova.innerHTML = ''; } });
        gsap.fromTo(valec, { x: 120, y: 170, opacity: 1 }, { x: 480, duration: 1, ease: 'power2.inOut' });
        gsap.to(valec, { opacity: 0, duration: .25, delay: 1 });
      } else { vrstva(stara); nova.innerHTML = ''; }
    }
    function vyber(id, key) { var box = document.getElementById(id); box.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; box.querySelectorAll('button').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st[key] = b.dataset[key]; zmen(); }); }
    vyber('tech', 't'); vyber('barvy', 'b');
    if (W.hasG && !W.RM) ScrollTrigger.create({ trigger: pokoj, start: 'top 70%', once: true, onEnter: function () { zmen(); } });
  }
  var n = document.getElementById('p-navrh');
  if (n) { var q = new URLSearchParams(location.search); if (T[q.get('t')] && B[q.get('b')]) { n.textContent = 'Návrh z webu: ' + T[q.get('t')] + ', ' + B[q.get('b')][0].toLowerCase(); n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power3.inOut', delay: .1 }); });
  gsap.utils.toArray('.co-mriz img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();

/* formulář poptávky: čipy, kontrola telefonu, SMS / e-mail */
(function () {
  var W = window.W || {}, f = document.getElementById('pform'); if (!f) return;
  var co = document.getElementById('co'), multi = f.dataset.multi === '1', q = new URLSearchParams(location.search);
  co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; if (multi) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); else co.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); });
  (q.get('co') || '').split(',').forEach(function (v) { var b = v && co.querySelector('[data-v="' + v + '"]'); if (b) b.setAttribute('aria-pressed', 'true'); });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var tel = document.getElementById('tel'), v = [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; });
    if (!v.length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast(F.prazdne); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžeme ozvat'); tel.focus(); return; }
    var r = ['Dobrý den,', F.uvod + v.join(', ') + '.'];
    if (F.extra) F.extra().forEach(function (x) { if (x) r.push(x); });
    var po = document.getElementById('popis').value.trim(); if (po) r.push('', po);
    r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
    var t = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
    if (k === 'sms') { location.href = 'sms:' + F.tel + '?&body=' + encodeURIComponent(t); W.toast('Otevírám SMS'); }
    else { location.href = 'mailto:' + F.mail + '?subject=' + encodeURIComponent(F.predmet) + '&body=' + encodeURIComponent(t); W.toast('Otevírám e-mail'); }
  });
  if (W.hasG && !W.RM) afterIntro(function () { gsap.from('.p-form fieldset, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' }); gsap.fromTo('.p-foto img', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut', delay: .2 }); });
})();
