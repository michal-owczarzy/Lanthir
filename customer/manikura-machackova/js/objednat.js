/* OBJEDNÁVKA: služba (jedna), vhodné dny (víc), část dne (jedna); barva a tvar z úvodní
   stránky přijdou v adrese. Bez telefonu formulář zatřese. */
(function () {
  var form = document.getElementById('objednavka');
  if (!form) return;
  var q = new URLSearchParams(location.search), b = MC.najdi(q.get('barva')), tvar = MC.TVARY[q.get('tvar')];
  if (b) { document.getElementById('moje-b').style.background = b.c; document.getElementById('moje-t').textContent = b.n + (tvar ? ', ' + tvar : ''); }
  function jedno(id) {
    var s = document.getElementById(id);
    s.addEventListener('click', function (e) {
      var x = e.target.closest('.cip'); if (!x) return;
      var uz = x.getAttribute('aria-pressed') === 'true';
      s.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', 'false'); });
      if (!uz || id === 'co') x.setAttribute('aria-pressed', 'true');
    });
  }
  jedno('co'); jedno('cast');
  document.getElementById('dny').addEventListener('click', function (e) { var x = e.target.closest('.cip'); if (x) x.setAttribute('aria-pressed', String(x.getAttribute('aria-pressed') !== 'true')); });
  function vybrane(id) { return [].filter.call(document.querySelectorAll('#' + id + ' .cip'), function (x) { return x.getAttribute('aria-pressed') === 'true'; }).map(function (x) { return x.textContent; }); }
  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms', tel = document.getElementById('tel');
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); MC.toast('Doplňte telefon, ať se vám můžu ozvat'); tel.focus(); return; }
    var r = ['Dobrý den,', 'chci se objednat na manikúru.', '', 'Služba: ' + vybrane('co').join(', ')];
    if (b) r.push('Barva: ' + b.n + (tvar ? ', tvar ' + tvar : ''));
    var d = vybrane('dny'), c = vybrane('cast');
    if (d.length) r.push('Hodí se mi: ' + d.join(', ') + (c.length ? ', ' + c[0].toLowerCase() : ''));
    var j = document.getElementById('jmeno').value.trim();
    r.push('');
    if (j) r.push(j);
    r.push('Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') { location.href = 'sms:' + MC.TEL + '?&body=' + encodeURIComponent(text); MC.toast('Otevírám SMS s objednávkou'); }
    else { location.href = 'mailto:' + MC.MAIL + '?subject=' + encodeURIComponent('Objednávka na manikúru') + '&body=' + encodeURIComponent(text); MC.toast('Otevírám e-mail s objednávkou'); }
  });
  if (MC.hasG && !MC.RM) afterIntro(function () {
    gsap.from('.o-form .cip', { opacity: 0, y: 12, duration: .45, stagger: .025, ease: 'power2.out', delay: .3, clearProps: 'transform,opacity' });
    gsap.from('.bok img', { clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .12, ease: 'power3.inOut', delay: .2 });
  });
})();
