/* KALKULACE: co, kolik kusů (krokování − / +), stav, poznámka, fotky (náhled; k e-mailu je
   přiloží zákazník sám), obec a telefon. Bez telefonu nebo bez vybrané věci formulář zatřese. */
(function () {
  var form = document.getElementById('kalk');
  if (!form) return;
  var co = document.getElementById('co'), stav = document.getElementById('stav'), ks = document.getElementById('ks');
  var G = SPL.hasG && !SPL.RM, pocet = 1;
  co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (b) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); });
  stav.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    var uz = b.getAttribute('aria-pressed') === 'true';
    stav.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    if (!uz) b.setAttribute('aria-pressed', 'true');
  });
  function zmen(o) {
    var n = Math.max(1, Math.min(99, pocet + o)); if (n === pocet) return;
    pocet = n; ks.textContent = n;
    if (G) gsap.fromTo(ks, { y: o > 0 ? 10 : -10, opacity: 0 }, { y: 0, opacity: 1, duration: .25, ease: 'power2.out' });
  }
  document.getElementById('plus').addEventListener('click', function () { zmen(1); });
  document.getElementById('minus').addEventListener('click', function () { zmen(-1); });

  var foto = document.getElementById('foto'), nahledy = document.getElementById('nahledy');
  foto.addEventListener('change', function () {
    nahledy.innerHTML = '';
    [].slice.call(foto.files || [], 0, 5).forEach(function (f) {
      var r = new FileReader();
      r.onload = function () { var i = new Image(); i.src = r.result; i.alt = f.name; nahledy.appendChild(i); if (G) gsap.from(i, { scale: .6, opacity: 0, duration: .3, ease: 'back.out(2)' }); };
      r.readAsDataURL(f);
    });
  });

  if (G) afterIntro(function () {
    gsap.from('.k-form .cip, .pocet', { opacity: 0, y: 14, duration: .45, stagger: .025, ease: 'power2.out', delay: .3, clearProps: 'transform,opacity' });
    gsap.from('.bok img', { clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .12, ease: 'power3.inOut', delay: .2 });
  });
  function vybrane(s) { return [].filter.call(s.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'mail', c = vybrane(co), tel = document.getElementById('tel');
    if (!c.length) { zatrest(co); SPL.toast('Vyberte, co chcete renovovat'); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); SPL.toast('Doplňte telefon, ať můžeme domluvit zaměření'); tel.focus(); return; }
    var r = ['Dobrý den,', 'prosím o kalkulaci renovace.', '', 'Co: ' + c.join(', '), 'Počet kusů: ' + pocet];
    var s = vybrane(stav); if (s.length) r.push('Stav: ' + s[0]);
    var p = document.getElementById('pozn').value.trim(); if (p) r.push('Poznámka: ' + p);
    var o = document.getElementById('obec').value.trim(); if (o) r.push('Místo: ' + o);
    if (foto.files && foto.files.length) r.push('', 'Fotky přikládám.');
    r.push('', 'Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') { location.href = 'sms:' + SPL.TEL + '?&body=' + encodeURIComponent(text); SPL.toast('Otevírám SMS s poptávkou'); }
    else { location.href = 'mailto:' + SPL.MAIL + '?subject=' + encodeURIComponent('Kalkulace renovace: ' + c.join(', ')) + '&body=' + encodeURIComponent(text); SPL.toast(foto.files && foto.files.length ? 'Otevírám e-mail, přiložte prosím fotky' : 'Otevírám e-mail s poptávkou'); }
  });
})();
