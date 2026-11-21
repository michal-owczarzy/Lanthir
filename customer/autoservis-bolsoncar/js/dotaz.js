/* DOTAZ místo staré knihy návštěv: auto, oblast opravy, popis a telefon.
   Bez telefonu formulář zatřese; dotaz odchází SMS nebo e-mailem. */
(function () {
  var form = document.getElementById('dotaz');
  if (!form) return;
  var co = document.getElementById('co'), tel = document.getElementById('tel');
  co.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
  });
  var rok = document.getElementById('rok');
  rok.addEventListener('input', function () { var c = rok.value.replace(/\D/g, '').slice(0, 4); if (c !== rok.value) rok.value = c; });
  function hodnota(id) { return document.getElementById(id).value.trim(); }
  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }

  if (BC.hasG && !BC.RM) afterIntro(function () {
    gsap.from('.d-fotky img', { clipPath: 'inset(0 100% 0 0)', duration: .8, stagger: .12, ease: 'power3.inOut', delay: .2 });
    gsap.from('.d-form .cip', { opacity: 0, y: 12, duration: .45, stagger: .025, ease: 'power2.out', delay: .35, clearProps: 'transform,opacity' });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms';
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); BC.toast('Doplňte telefon, ať vám můžeme odpovědět'); tel.focus(); return; }
    var oblast = [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; });
    var auto = [hodnota('auto'), hodnota('rok'), hodnota('motor')].filter(Boolean).join(', ');
    var r = ['Dobrý den,', 'mám dotaz na opravu.', ''];
    if (auto) r.push('Auto: ' + auto);
    if (oblast.length) r.push('Týká se: ' + oblast.join(', '));
    if (hodnota('popis')) r.push('Co se děje: ' + hodnota('popis'));
    r.push('', 'Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') {
      location.href = 'sms:' + BC.TEL + '?&body=' + encodeURIComponent(text);
      BC.toast('Otevírám SMS s dotazem');
    } else {
      location.href = 'mailto:' + BC.MAIL + '?subject=' + encodeURIComponent('Dotaz na opravu' + (auto ? ': ' + auto : '')) + '&body=' + encodeURIComponent(text);
      BC.toast('Otevírám e-mail s dotazem');
    }
  });
})();
