/* REZERVACE: nejbližších 14 dní, kdy je salon otevřený; časy po hodině podle otevírací doby
   (poslední hodinu před zavřením už ne). Žádost odchází SMS nebo e-mailem. */
(function () {
  var form = document.getElementById('rez-form');
  if (!form) return;
  var co = document.getElementById('r-co'), dny = document.getElementById('r-dny'), cas = document.getElementById('r-cas');
  var ZKR = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'], G = RZ.hasG && !RZ.RM;
  var d = new Date(), seznam = [], vybDen = null, vybCas = null;
  for (var i = 0; seznam.length < 14 && i < 30; i++) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i), o = RZ.HOD[x.getDay()];
    if (!o || (i === 0 && d.getHours() >= o[1] - 2)) continue;
    seznam.push(x);
  }
  dny.innerHTML = seznam.map(function (x, n) { return '<button type="button" class="den" aria-pressed="false" data-n="' + n + '"><small>' + ZKR[x.getDay()] + '</small><b class="num">' + x.getDate() + '.</b><small>' + (x.getMonth() + 1) + '.</small></button>'; }).join('');
  co.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    co.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
  });
  dny.addEventListener('click', function (e) {
    var b = e.target.closest('.den'); if (!b) return;
    dny.querySelectorAll('.den').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
    vybDen = seznam[+b.dataset.n]; vybCas = null;
    var o = RZ.HOD[vybDen.getDay()], dnes = vybDen.toDateString() === d.toDateString(), h = '';
    for (var k = o[0]; k <= o[1] - 1; k++) {
      var pryc = dnes && k <= d.getHours();
      h += '<button type="button" class="cip num" aria-pressed="false" data-h="' + k + '"' + (pryc ? ' disabled' : '') + '>' + k + ':00</button>';
    }
    cas.innerHTML = h;
    if (G) gsap.from(cas.children, { opacity: 0, y: 8, duration: .3, stagger: .025, ease: 'power2.out' });
  });
  cas.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b || b.disabled) return;
    cas.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
    vybCas = +b.dataset.h;
  });
  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms', o = co.querySelector('[aria-pressed="true"]'), tel = document.getElementById('r-tel');
    if (!o) { zatrest(co); RZ.toast('Vyberte ošetření'); return; }
    if (!vybDen) { zatrest(dny); RZ.toast('Vyberte den'); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); RZ.toast('Doplňte telefon, ať můžeme termín potvrdit'); tel.focus(); return; }
    var j = document.getElementById('r-jmeno').value.trim();
    var r = ['Dobrý den,', 'prosím o termín.', '', 'Ošetření: ' + o.textContent, 'Termín: ' + vybDen.getDate() + '. ' + (vybDen.getMonth() + 1) + '.' + (vybCas !== null ? ' v ' + vybCas + ':00' : ''), ''];
    if (j) r.push(j);
    r.push('Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') { location.href = 'sms:' + RZ.TEL + '?&body=' + encodeURIComponent(text); RZ.toast('Otevírám SMS s rezervací'); }
    else { location.href = 'mailto:' + RZ.MAIL + '?subject=' + encodeURIComponent('Rezervace: ' + o.textContent) + '&body=' + encodeURIComponent(text); RZ.toast('Otevírám e-mail s rezervací'); }
  });
})();
