/* OBJEDNÁVKA: dny se nabízejí jen podle otevírací doby (neděle nikdy, sobota jen
   dopoledne). Zakázkový list vpravo se vyplňuje s každou volbou a změněný řádek blikne. */
(function () {
  var form = document.getElementById('objednavka');
  if (!form) return;
  var co = document.getElementById('co'), dny = document.getElementById('dny'), cast = document.getElementById('cast');
  var auto = document.getElementById('auto'), pozn = document.getElementById('pozn'), jmeno = document.getElementById('jmeno'), tel = document.getElementById('tel');
  var listek = document.getElementById('listek');
  var MES = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'];
  var ZKR = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
  var vybranyDen = null;

  /* nejbližších 12 dní, kdy máme otevřeno (dnešek jen do hodiny před zavřením) */
  var d = new Date(), seznam = [];
  for (var i = 0; seznam.length < 12 && i < 30; i++) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i), o = KR.HOD[x.getDay()];
    if (!o) continue;
    if (i === 0 && d.getHours() >= o[1] - 1) continue;
    seznam.push(x);
  }
  dny.innerHTML = seznam.map(function (x, n) {
    return '<button type="button" class="den" aria-pressed="false" data-n="' + n + '" aria-label="' + KR.DNY[x.getDay()] + ' ' + x.getDate() + '. ' + (x.getMonth() + 1) + '.">' +
      '<small>' + ZKR[x.getDay()] + '</small><b class="num">' + x.getDate() + '.</b><i>' + (x.getDay() === 6 ? 'do 12:00' : MES[x.getMonth()]) + '</i></button>';
  }).join('');

  function radek(k, text) {
    var dd = listek.querySelector('[data-k="' + k + '"]');
    var prazdne = !text;
    var nove = text || dd.dataset.vychozi || dd.textContent;
    if (!dd.dataset.vychozi) dd.dataset.vychozi = dd.textContent;
    if (dd.textContent === nove && dd.classList.contains('prazdne') === prazdne) return;
    dd.textContent = nove;
    dd.classList.toggle('prazdne', prazdne);
    if (!KR.RM) { dd.parentNode.classList.remove('zmena'); void dd.offsetWidth; dd.parentNode.classList.add('zmena'); }
  }
  function vybraneSluzby() { return [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
  function denText() { if (!vybranyDen) return ''; return KR.DNY[vybranyDen.getDay()] + ' ' + vybranyDen.getDate() + '. ' + (vybranyDen.getMonth() + 1) + '.'; }
  function castText() { var b = cast.querySelector('[aria-pressed="true"]'); return b ? b.dataset.v : ''; }

  co.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    radek('co', vybraneSluzby().join(', '));
  });
  dny.addEventListener('click', function (e) {
    var b = e.target.closest('.den'); if (!b) return;
    dny.querySelectorAll('.den').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    vybranyDen = seznam[+b.dataset.n];
    /* v sobotu jen dopoledne */
    var odp = cast.querySelector('[data-v="odpoledne"]'), sobota = vybranyDen.getDay() === 6;
    odp.disabled = sobota; odp.style.opacity = sobota ? .4 : '';
    if (sobota && odp.getAttribute('aria-pressed') === 'true') { odp.setAttribute('aria-pressed', 'false'); radek('cast', ''); }
    radek('den', denText());
  });
  cast.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b || b.disabled) return;
    var uz = b.getAttribute('aria-pressed') === 'true';
    cast.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    if (!uz) b.setAttribute('aria-pressed', 'true');
    radek('cast', castText());
  });
  auto.addEventListener('input', function () { radek('auto', auto.value.trim()); });
  tel.addEventListener('input', function () { radek('tel', tel.value.trim()); });

  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms';
    var sl = vybraneSluzby();
    if (!sl.length) { zatrest(co); KR.toast('Vyberte, co potřebujete'); co.querySelector('.cip').focus(); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); KR.toast('Doplňte telefon, ať vám můžeme termín potvrdit'); tel.focus(); return; }
    var r = ['Dobrý den,', 'prosím o termín.', '', 'Služba: ' + sl.join(', ')];
    if (auto.value.trim()) r.push('Auto: ' + auto.value.trim());
    if (vybranyDen) r.push('Den: ' + denText() + (castText() ? ', ' + castText() : ''));
    if (pozn.value.trim()) r.push('Poznámka: ' + pozn.value.trim());
    r.push('');
    if (jmeno.value.trim()) r.push(jmeno.value.trim());
    r.push('Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') {
      location.href = 'sms:' + KR.TEL + '?&body=' + encodeURIComponent(text);
      KR.toast('Otevírám SMS s objednávkou');
    } else {
      location.href = 'mailto:' + KR.MAIL + '?subject=' + encodeURIComponent('Objednávka: ' + sl.join(', ')) + '&body=' + encodeURIComponent(text);
      KR.toast('Otevírám e-mail s objednávkou');
    }
  });
})();
