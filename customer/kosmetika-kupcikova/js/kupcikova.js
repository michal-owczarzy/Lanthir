/* Kosmetika Lenka: skladač ošetření (obličej se rozsvítí podle míst), objednávka. */
var F = { tel: '+420774965007', mail: 'lenkahorutova@seznam.cz', predmet: 'Objednávka z webu', uvod: 'chtěla bych se objednat: ', prazdne: 'Vyberte ošetření',
  extra: function () { var k = document.getElementById('kdy'); return [k && k.value.trim() ? 'Hodí se mi: ' + k.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, f = document.getElementById('osform');
  var NZ = {"zakladni": "Základní ošetření pleti", "kompletni": "Kompletní ošetření pleti"}, ND = {"masaz": "Masáž obličeje, krku a dekoltu", "ocni": "Mikromasáž očního okolí", "trvala": "Trvalá na řasy", "barveni": "Barvení řas a obočí", "depilace": "Depilace"};
  if (f) {
    function nastav() {
      var z = f.querySelector('input[name="zaklad"]:checked').value, d = [].map.call(f.querySelectorAll('.dopl input:checked'), function (i) { return i; });
      var zony = { plet: 1 };
      d.forEach(function (i) { zony[i.dataset.z] = 1; });
      ['plet', 'oci', 'oboci', 'krk'].forEach(function (k) { document.querySelector('.z-' + k).classList.toggle('on', !!zony[k]); });
      document.getElementById('os-souhrn').textContent = NZ[z] + (z === 'zakladni' ? ' (cca 60 min)' : ' (cca 90 min)') + (d.length ? ' + ' + d.map(function (i) { return ND[i.value].toLowerCase(); }).join(', ') : '');
      document.getElementById('os-obj').href = 'objednat/?co=' + [z].concat(d.map(function (i) { return i.value; })).filter(function (v) { return v !== 'ocni'; }).join(',');
    }
    f.addEventListener('change', nastav); nastav();
  }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power3.inOut', delay: .1 }); });
  var l = document.querySelector('.tvar .linka');
  if (l) { var L = Math.ceil(l.getTotalLength()) + 1; gsap.fromTo(l, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.osetreni', start: 'top 80%', end: 'center 55%', scrub: .6 } }); }
  gsap.utils.toArray('.es img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
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
