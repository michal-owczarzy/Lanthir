/* REZERVACE VOZÍKU: kalendář na 3 měsíce dopředu, první klik = od, druhý = do (rozsah se
   podbarví), cena 500 Kč/den bez DPH; od 3 dnů „dohodou“, jak to mají na svém webu. */
(function () {
  var mrizka = document.getElementById('k-dny');
  if (!mrizka) return;
  var MES = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];
  var dnes = new Date(); dnes.setHours(0, 0, 0, 0);
  var zobr = new Date(dnes.getFullYear(), dnes.getMonth(), 1), od = null, doo = null, G = DR.hasG && !DR.RM;
  var maxMes = new Date(dnes.getFullYear(), dnes.getMonth() + 2, 1);
  function f(d) { return d.getDate() + '. ' + (d.getMonth() + 1) + '. ' + d.getFullYear(); }
  function stejny(a, b) { return a && b && a.getTime() === b.getTime(); }
  function vykreslit() {
    document.getElementById('k-mesic').textContent = MES[zobr.getMonth()] + ' ' + zobr.getFullYear();
    document.getElementById('k-pred').disabled = zobr <= new Date(dnes.getFullYear(), dnes.getMonth(), 1);
    document.getElementById('k-dal').disabled = zobr >= maxMes;
    var prvni = (zobr.getDay() + 6) % 7, pocet = new Date(zobr.getFullYear(), zobr.getMonth() + 1, 0).getDate(), h = '';
    for (var i = 0; i < prvni; i++) h += '<span></span>';
    for (var d = 1; d <= pocet; d++) {
      var x = new Date(zobr.getFullYear(), zobr.getMonth(), d), cls = '';
      if (od && doo && x > od && x < doo) cls = 'v';
      if (stejny(x, od) || stejny(x, doo)) cls = 'kraj';
      h += '<button type="button" class="' + cls + '" data-t="' + x.getTime() + '"' + (x < dnes ? ' disabled' : '') + ' aria-label="' + f(x) + '">' + d + '</button>';
    }
    mrizka.innerHTML = h;
  }
  function souhrn() {
    document.getElementById('r-od').textContent = od ? f(od) : 'vyberte den';
    document.getElementById('r-do').textContent = doo ? f(doo) : (od ? f(od) : 'vyberte den');
    var n = od ? Math.round(((doo || od) - od) / 864e5) + 1 : 0;
    document.getElementById('r-dny').textContent = n;
    var c = document.getElementById('r-cena');
    c.innerHTML = (n === 0 ? '0 Kč' : n <= 2 ? (n * 500).toLocaleString('cs-CZ') + ' Kč' : 'dohodou') + '<small>' + (n > 2 ? 'na víc dní se domluvíme po telefonu' : '500 Kč na den bez DPH') + '</small>';
    if (G && n) gsap.fromTo(c, { scale: 1.08 }, { scale: 1, duration: .3, ease: 'back.out(3)' });
    return n;
  }
  mrizka.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || b.disabled) return;
    var x = new Date(+b.dataset.t);
    if (!od || (od && doo)) { od = x; doo = null; }
    else if (x < od) { doo = od; od = x; }
    else if (stejny(x, od)) { doo = null; }
    else doo = x;
    vykreslit(); souhrn();
  });
  function prepnout(o) {
    var novy = new Date(zobr.getFullYear(), zobr.getMonth() + o, 1);
    if (novy < new Date(dnes.getFullYear(), dnes.getMonth(), 1) || novy > maxMes) return;
    zobr = novy;
    if (G) gsap.fromTo(mrizka, { opacity: 0, x: 24 * o }, { opacity: 1, x: 0, duration: .3, ease: 'power2.out' });
    vykreslit();
  }
  document.getElementById('k-pred').addEventListener('click', function () { prepnout(-1); });
  document.getElementById('k-dal').addEventListener('click', function () { prepnout(1); });

  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  function poslat(kanal) {
    var tel = document.getElementById('tel');
    if (!od) { zatrest(document.querySelector('.kalendar')); DR.toast('Vyberte v kalendáři termín'); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { zatrest(tel); DR.toast('Doplňte telefon, ať můžeme termín potvrdit'); tel.focus(); return; }
    var n = souhrn(), j = document.getElementById('jmeno').value.trim();
    var r = ['Dobrý den,', 'chci si půjčit vozík na motorky.', '', 'Od: ' + f(od), 'Do: ' + f(doo || od) + ' (' + n + ' ' + (n === 1 ? 'den' : n < 5 ? 'dny' : 'dní') + ')', ''];
    if (j) r.push(j);
    r.push('Tel.: ' + tel.value.trim());
    var text = r.join('\n');
    if (kanal === 'sms') { location.href = 'sms:' + DR.TEL + '?&body=' + encodeURIComponent(text); DR.toast('Otevírám SMS s rezervací'); }
    else { location.href = 'mailto:' + DR.MAIL + '?subject=' + encodeURIComponent('Rezervace vozíku ' + f(od)) + '&body=' + encodeURIComponent(text); DR.toast('Otevírám e-mail s rezervací'); }
  }
  document.getElementById('poslat-sms').addEventListener('click', function () { poslat('sms'); });
  document.getElementById('poslat-mail').addEventListener('click', function () { poslat('mail'); });
  vykreslit(); souhrn();
  if (G) afterIntro(function () {
    gsap.from('#k-dny button', { opacity: 0, scale: .7, duration: .35, stagger: .012, ease: 'back.out(2)', delay: .3, clearProps: 'transform,opacity' });
    gsap.from('.v-fotky img', { clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .1, ease: 'power3.inOut', delay: .15 });
  });
})();
