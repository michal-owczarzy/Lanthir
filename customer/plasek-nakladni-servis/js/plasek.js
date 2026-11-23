/* Plášek: čtečka rozměru pneumatiky (šířka/profil R ráfek) s nákresem, otevřeno teď, objednávka. */
var F = { tel: '+420739054177', mail: 'matesplasek@seznam.cz', predmet: 'Objednávka do servisu', uvod: 'potřebuji: ', prazdne: 'Vyberte, co potřebujete',
  extra: function () { var v = document.getElementById('vuz'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', v && v.value.trim() ? 'Vůz: ' + v.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {};
  var s = W.stav ? W.stav({1: [7, 15], 2: [7, 15], 3: [7, 15], 4: [7, 15], 5: [7, 15]}) : null;
  if (s) document.querySelectorAll('.stav').forEach(function (el) { el.classList.toggle('otevreno', s.otevreno); el.querySelector('.stav-text').textContent = s.text; });
  var inp = document.getElementById('rozmer');
  if (inp) {
    var o = { gum: 230, disk: 122 }, sr = document.getElementById('p-sroub');
    for (var i = 0; i < 10; i++) { var a = i / 10 * Math.PI * 2, c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('cx', 260 + Math.cos(a) * 62); c.setAttribute('cy', 260 + Math.sin(a) * 62); c.setAttribute('r', 7); sr.appendChild(c); }
    function fmt(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
    function cti() {
      var m = inp.value.replace(',', '.').match(/(\d{3})\s*\/\s*(\d{2})\s*[Rr]?\s*(\d{2}(?:\.\d)?)/);
      if (!m) { inp.classList.add('spatne'); return; }
      inp.classList.remove('spatne');
      var w = +m[1], pr = +m[2], rf = +m[3], bok = w * pr / 100, rmm = rf * 25.4, D = rmm + 2 * bok;
      document.getElementById('c-sirka').textContent = w + ' mm';
      document.getElementById('c-bok').textContent = fmt(bok) + ' mm';
      document.getElementById('c-rafek').textContent = String(rf).replace('.', ',') + '″';
      document.getElementById('c-prumer').textContent = fmt(D) + ' mm';
      var R = 230, rd = R * rmm / D;
      if (W.hasG && !W.RM) gsap.to(o, { disk: rd, duration: .6, ease: 'power3.out', onUpdate: function () { document.getElementById('p-disk').setAttribute('r', o.disk); } });
      else document.getElementById('p-disk').setAttribute('r', rd);
      document.getElementById('k-bok').setAttribute('d', 'M500 30V' + (30 + (R - rd)));
      document.getElementById('t-prumer').textContent = fmt(D) + ' mm';
      document.getElementById('t-bok').textContent = fmt(bok) + ' mm';
      document.getElementById('t-bok').setAttribute('y', 30 + (R - rd) / 2 + 6);
      document.getElementById('pn-poslat').href = 'objednat/?co=pneu&r=' + encodeURIComponent(w + '/' + pr + ' R' + String(rf));
    }
    inp.addEventListener('input', cti);
    document.getElementById('presety').addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; inp.value = b.dataset.r; cti(); if (W.hasG && !W.RM) gsap.fromTo('#pneu-svg', { rotate: -40 }, { rotate: 0, duration: .9, ease: 'power3.out', transformOrigin: '50% 50%' }); });
    cti();
  }
  var n = document.getElementById('p-navrh');
  if (n) { var r = new URLSearchParams(location.search).get('r'); if (r && /^[\d\/ R.]+$/.test(r)) { n.textContent = 'Rozměr pneumatik: ' + r; n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { scale: 1.15 }, { scale: 1, duration: 1.8, ease: 'power3.out' }); });
  gsap.to('.hero-foto img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  if (inp) gsap.fromTo('#pneu-svg', { rotate: -180 }, { rotate: 0, ease: 'none', transformOrigin: '50% 50%', scrollTrigger: { trigger: '.pneu', start: 'top bottom', end: 'center center', scrub: .6 } });
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
