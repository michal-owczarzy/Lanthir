/* Pavelek: poruchovník (co dělat hned + SMS), trubky kreslené scrollem, poptávka. */
(function () {
  var W = window.W || {}, P = [["Teče voda z potrubí", "Zavřete hlavní uzávěr vody, bývá u vodoměru. Když voda teče k zásuvkám nebo ke spotřebičům, vypněte i jistič."], ["Cítím plyn", "Neškrtejte, nezapínejte ani nevypínejte světla, otevřete okna, zavřete hlavní uzávěr plynu a odejděte ven. Volejte plynárenskou pohotovost 1239."], ["Netopí kotel", "Podívejte se na displej kotle, jestli nehlásí chybu, a na tlak v topení na manometru. Chybu i manometr si vyfoťte a pošlete mi je."], ["Nejde voda ze studny", "Zkontrolujte jistič vodárny a tlak na jejím manometru. Když čerpadlo běží a voda nejde, vodárnu vypněte, ať neběží naprázdno."], ["Protéká WC nebo kape baterie", "Zavřete rohový ventil pod nádržkou nebo pod umyvadlem. Voda pak přestane téct a oprava počká na domluvený termín."], ["Ucpaný odpad", "Nelijte do odpadu další vodu. Zkuste zvon, a když nepomůže, ozvěte se. Silnou chemii raději nepoužívejte, plastovým trubkám škodí."]];
  var sez = document.querySelector('.por-seznam');
  if (sez) {
    function vyber(i, anim) {
      sez.querySelectorAll('.por').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.p === i)); });
      document.getElementById('por-n').textContent = P[i][0];
      document.getElementById('por-t').textContent = P[i][1];
      document.getElementById('por-sms').href = 'sms:+420734318592?&body=' + encodeURIComponent('Dobrý den, ' + P[i][0].toLowerCase() + '. Adresa: ');
      document.querySelector('.poruchy').classList.toggle('pozor', i === 1);
      if (anim && W.hasG && !W.RM) { gsap.fromTo('.por-rada h3, .por-rada #por-t', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .4, stagger: .05, ease: 'power2.out' }); gsap.fromTo('.kapka', { scale: .8, y: -10 }, { scale: 1, y: 0, duration: .6, ease: 'back.out(2.5)', transformOrigin: '50% 100%' }); }
    }
    sez.addEventListener('click', function (e) { var b = e.target.closest('.por'); if (b) vyber(+b.dataset.p, true); });
    vyber(0, false);
  }
  var pf = document.getElementById('pform');
  if (pf) {
    var co = document.getElementById('co'), q = new URLSearchParams(location.search).get('s');
    co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (b) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); });
    var pre = q && co.querySelector('[data-s="' + q + '"]'); if (pre) pre.setAttribute('aria-pressed', 'true');
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel'), v = [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; });
      if (!v.length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast('Vyberte, o co jde'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'poptávám: ' + v.join(', ') + '.'], ob = document.getElementById('obec').value.trim(), po = document.getElementById('popis').value.trim();
      if (ob) r.push('Obec: ' + ob + '.'); if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var t = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420734318592?&body=' + encodeURIComponent(t); W.toast('Otevírám SMS'); }
      else { location.href = 'mailto:Pavelek78@seznam.cz?subject=' + encodeURIComponent('Poptávka z webu') + '&body=' + encodeURIComponent(t); W.toast('Otevírám e-mail'); }
    });
  }
  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.hero-foto img, .s-foto img', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut', delay: .1 });
    if (pf) gsap.from('.p-form fieldset, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
  /* trubky podél služeb: voda a topení se kreslí podle scrollu */
  document.querySelectorAll('.trubka path').forEach(function (p) {
    gsap.fromTo(p, { strokeDasharray: '1000 1000', strokeDashoffset: 1000 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.sluzby', start: 'top 70%', end: 'bottom 70%', scrub: .6 } });
  });
  gsap.utils.toArray('.sl-karta img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();
