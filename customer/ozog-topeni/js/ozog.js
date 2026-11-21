/* Marek Ožog: termostat (venkovní teplota → co dělá technika v domě), poptávka. */
(function () {
  var W = window.W || {};
  var t = document.getElementById('teplota');
  if (t) {
    var dum = document.getElementById('dum'), cis = document.getElementById('t-cislo'), rez = document.getElementById('t-rezim'), txt = document.getElementById('t-text');
    var vent = document.getElementById('vent'), spin = null, sec = document.querySelector('.termostat');
    if (W.hasG && !W.RM) spin = gsap.to(vent, { rotation: 360, svgOrigin: '599 338', duration: 1, ease: 'none', repeat: -1 });
    function nastav() {
      var T = +t.value, mod = T < 15 ? 'topi' : (T > 24 ? 'chladi' : 'klid');
      cis.textContent = (T < 0 ? '−' + Math.abs(T) : T) + ' °C';
      dum.setAttribute('data-rezim', mod); sec.setAttribute('data-rezim', mod);
      if (mod === 'topi') { rez.textContent = 'Topí se'; txt.textContent = 'Tepelné čerpadlo bere teplo z venkovního vzduchu, topí do podlahy a ohřívá vodu v zásobníku.' + (T < -7 ? ' I v mrazu, jen ventilátor běží naplno.' : ''); }
      else if (mod === 'klid') { rez.textContent = 'Přechodné období'; txt.textContent = 'Netopí se ani nechladí. Čerpadlo jen občas ohřeje vodu v zásobníku.'; }
      else { rez.textContent = 'Chladí se'; txt.textContent = 'Klimatizace chladí obytné místnosti. Venkovní jednotka odvádí teplo ven a voda se ohřívá dál.'; }
      var rych = mod === 'topi' ? .4 + (15 - T) / 30 * 2.2 : (mod === 'chladi' ? .5 + (T - 24) / 11 * 2 : .15);
      if (spin) spin.timeScale(rych);
    }
    t.addEventListener('input', nastav); nastav();
  }

  /* poptávka */
  var pf = document.getElementById('pform');
  if (pf) {
    var q = new URLSearchParams(location.search).get('s'), co = document.getElementById('co');
    function prep(id, vice, cb) { var b0 = document.getElementById(id); b0.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; if (vice) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); else b0.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); if (cb) cb(); }); }
    function servis() { document.getElementById('znacka-box').hidden = co.querySelector('[data-s="servis"]').getAttribute('aria-pressed') !== 'true'; }
    prep('co', true, servis); prep('znacka', false); prep('kde', false);
    var pre = q && co.querySelector('[data-s="' + q + '"]'); if (pre) pre.setAttribute('aria-pressed', 'true');
    servis();
    function vyb(id) { return [].filter.call(document.querySelectorAll('#' + id + ' .cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel');
      if (!vyb('co').length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast('Vyberte, o co jde'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'poptávám: ' + vyb('co').join(', ') + ' (' + (vyb('kde')[0] || '').toLowerCase() + ').'];
      if (!document.getElementById('znacka-box').hidden && vyb('znacka').length) r.push('Značka: ' + vyb('znacka')[0] + '.');
      var ob = document.getElementById('obec').value.trim(), po = document.getElementById('popis').value.trim();
      if (ob) r.push('Obec: ' + ob + '.');
      if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420605823568?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s poptávkou'); }
      else { location.href = 'mailto:marekozog@seznam.cz?subject=' + encodeURIComponent('Poptávka z webu') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s poptávkou'); }
    });
  }

  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.hero-foto img, .s-foto img', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power3.inOut', delay: .1 });
    if (pf) gsap.from('.p-form fieldset, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
  var cary = document.querySelectorAll('#dum .strecha, #dum .zdi');
  if (cary.length) ScrollTrigger.create({ trigger: '#dum', start: 'top 80%', once: true, onEnter: function () {
    cary.forEach(function (p) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.fromTo(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }); });
    gsap.from('#dum .venku, #dum .klima, #dum .bojler, #dum .solar', { opacity: 0, y: 12, duration: .5, stagger: .12, delay: .7 });
  } });
  gsap.utils.toArray('.karta img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();
