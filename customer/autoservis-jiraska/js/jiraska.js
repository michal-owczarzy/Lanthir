/* Jiráska: palubní deska s kontrolkami, otevřeno teď, objednávka. */
var F = { tel: '+420776188836', mail: 'libor.jiraska@tiscali.cz', predmet: 'Objednávka do servisu', uvod: 'chci objednat auto: ', prazdne: 'Vyberte, co potřebujete',
  extra: function () { var a = document.getElementById('auto'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', a && a.value.trim() ? 'Auto: ' + a.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, K = [["Kontrolka motoru", "zluta", "Opatrně ano", "Řídicí jednotka našla závadu motoru nebo emisí. Jeďte opatrně a přijeďte na diagnostiku. Když kontrolka bliká, raději zastavte.", "motor"], ["Tlak oleje", "cervena", "Ne, zastavte", "Motor má nízký tlak oleje. Bezpečně zastavte a vypněte motor, jízda by ho mohla zničit. Zavolejte nám.", "olej"], ["Teplota motoru", "cervena", "Ne, zastavte", "Motor se přehřívá. Zastavte, vypněte motor a nechte ho vychladnout. Víčko chladiče za horka neotvírejte.", "teplota"], ["Dobíjení", "cervena", "Jen do servisu", "Alternátor nedobíjí baterii. Vypněte, co nepotřebujete, a dojeďte co nejdřív k nám, než se baterie vybije.", "baterie"], ["ABS", "zluta", "Ano, opatrně", "Porucha ABS. Brzdy fungují, ale při prudkém brzdění se mohou kola zablokovat. Přijeďte na kontrolu.", "abs"], ["Tlak v pneumatikách", "zluta", "Ano, pomalu", "V některé pneumatice klesl tlak. Zkontrolujte tlak na nejbližší pumpě, a když znovu klesá, přijeďte do pneuservisu.", "pneu"]];
  var s = W.stav ? W.stav({1: [8, 16], 2: [8, 16], 3: [8, 16], 4: [8, 16], 5: [8, 15]}) : null;
  if (s) document.querySelectorAll('.stav').forEach(function (el) { el.classList.toggle('otevreno', s.otevreno); el.querySelector('.stav-text').textContent = s.text; });
  var m = document.querySelector('.kont-mriz');
  if (m) {
    m.addEventListener('click', function (e) {
      var b = e.target.closest('.kontrolka'); if (!b) return; var k = K[+b.dataset.k];
      m.querySelectorAll('.kontrolka').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
      document.getElementById('k-nazev').textContent = k[0]; document.getElementById('k-text').textContent = k[3];
      var j = document.getElementById('k-jet'); j.textContent = k[2]; j.className = 'k-jet ' + k[1];
      document.getElementById('k-obj').href = 'objednat/?co=diagnostika&k=' + k[4];
      if (W.hasG && !W.RM) { gsap.fromTo(b.querySelector('svg'), { scale: 1.25 }, { scale: 1, duration: .4, ease: 'back.out(3)' }); gsap.fromTo('.kont-info h3, #k-text', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .35, stagger: .05 }); }
    });
  }
  var n = document.getElementById('p-navrh');
  if (n) { var kk = new URLSearchParams(location.search).get('k'); K.forEach(function (x) { if (x[4] === kk) { n.textContent = 'Svítí: ' + x[0].toLowerCase(); n.hidden = false; } }); }
  if (!W.hasG || W.RM) return;
  /* kontrolky se rozsvítí jako při otočení klíčkem */
  if (m) ScrollTrigger.create({ trigger: m, start: 'top 80%', once: true, onEnter: function () { gsap.fromTo('.kontrolka svg', { opacity: .15 }, { opacity: 1, duration: .08, stagger: .07, repeat: 1, yoyo: true, onComplete: function () { gsap.set('.kontrolka svg', { opacity: 1 }); } }); } });
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power3.inOut', delay: .1 }); });
  gsap.utils.toArray('.sl-mriz img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
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
