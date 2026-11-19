/* POPTÁVKA: „Co“ jde vybrat víc, „Kde“ a „Kdy“ jen jedno. Bez telefonu nebo bez
   vybrané práce formulář zatřese a řekne, co chybí. Odchází SMS nebo e-mailem. */
(function () {
  var form = document.getElementById('poptavka');
  if (!form) return;
  var co = document.getElementById('co'), kde = document.getElementById('kde'), kdy = document.getElementById('kdy');
  var popis = document.getElementById('popis'), obec = document.getElementById('obec'), tel = document.getElementById('tel');

  function vic(skup) {
    skup.addEventListener('click', function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    });
  }
  function jedno(skup) {
    skup.addEventListener('click', function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      var uz = b.getAttribute('aria-pressed') === 'true';
      skup.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      if (!uz) b.setAttribute('aria-pressed', 'true');
    });
  }
  vic(co); jedno(kde); jedno(kdy);
  function vybrane(skup) { return [].filter.call(skup.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }

  /* předvýběr z odkazu (?co=rekonstrukce) */
  var pred = new URLSearchParams(location.search).get('co');
  if (pred) { var b = co.querySelector('[data-v="' + pred + '"]'); if (b) b.setAttribute('aria-pressed', 'true'); }

  /* volby přiletí po řádcích, fotky v hlavičce se po jedné odkryjí */
  if (JN.hasG && !JN.RM) afterIntro(function () {
    gsap.from('.p-form .cip', { opacity: 0, y: 12, duration: .45, stagger: .025, ease: 'power2.out', delay: .3, clearProps: 'transform,opacity' });
    gsap.from('.p-fotky img', { clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .12, ease: 'power3.inOut', delay: .2 });
  });
  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms', c = vybrane(co);
    if (!c.length) { zatrest(co); JN.toast('Vyberte, co potřebujete'); co.querySelector('.cip').focus(); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); JN.toast('Doplňte telefon, ať se vám můžu ozvat'); tel.focus(); return; }
    var r = ['Dobrý den,', 'posílám poptávku z webu.', '', 'Práce: ' + c.join(', ')];
    var k = vybrane(kde), d = vybrane(kdy);
    if (k.length) r.push('Kde: ' + k[0]);
    if (obec.value.trim()) r.push('Obec: ' + obec.value.trim());
    if (d.length) r.push('Kdy: ' + d[0]);
    if (popis.value.trim()) r.push('Popis: ' + popis.value.trim());
    r.push('', 'Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') {
      location.href = 'sms:' + JN.TEL + '?&body=' + encodeURIComponent(text);
      JN.toast('Otevírám SMS s poptávkou');
    } else {
      location.href = 'mailto:' + JN.MAIL + '?subject=' + encodeURIComponent('Poptávka: ' + c.join(', ')) + '&body=' + encodeURIComponent(text);
      JN.toast('Otevírám e-mail s poptávkou');
    }
  });
})();
