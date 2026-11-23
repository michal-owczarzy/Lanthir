/* Beauty Lounge: karta služeb (čas a cena), rezervace se dny a časy. */
(function () {
  var W = window.W || {}, CEN = window.BL.CENIK, M = {};
  CEN.forEach(function (x) { M[x[0]] = x; });
  /* karta služeb */
  var kf = document.getElementById('kform');
  if (kf) {
    var o = { m: 0, p: 0 }, kruh = document.getElementById('h-cas'), L = 2 * Math.PI * 50;
    kruh.style.strokeDasharray = L; kruh.style.strokeDashoffset = L;
    kf.addEventListener('change', function () {
      var ids = [].map.call(kf.querySelectorAll('input:checked'), function (i) { return i.value; }), m = 0, p = 0;
      ids.forEach(function (i) { m += M[i][4]; p += M[i][3]; });
      var r = document.getElementById('k-rez'), base = r.getAttribute('href').split('?')[0];
      r.href = base + (ids.length ? '?s=' + ids.join(',') : '');
      var cil = L - L * Math.min(m, 240) / 240;
      if (W.hasG && !W.RM) { gsap.to(o, { m: m, p: p, duration: .45, ease: 'power2.out', onUpdate: function () { document.getElementById('k-cas').textContent = Math.round(o.m) + ' min'; document.getElementById('k-cena').textContent = Math.round(o.p) + ' Kč'; } }); gsap.to(kruh, { strokeDashoffset: cil, duration: .6, ease: 'power2.out' }); }
      else { document.getElementById('k-cas').textContent = m + ' min'; document.getElementById('k-cena').textContent = p + ' Kč'; kruh.style.strokeDashoffset = cil; }
    });
  }
  /* rezervace */
  var rf = document.getElementById('rform');
  if (rf) {
    var q = (new URLSearchParams(location.search).get('s') || '').split(',').filter(function (x) { return M[x]; }), sel = document.getElementById('sluzba');
    if (q.length) sel.value = q[0];
    function souhrn() { var ids = q.length ? q : [sel.value], m = 0; ids.forEach(function (i) { m += M[i][4]; }); document.getElementById('r-vybrano').textContent = ids.map(function (i) { return M[i][2]; }).join(', ') + ' · zhruba ' + m + ' min'; return m; }
    sel.addEventListener('change', function () { q = []; souhrn(); casy(); });
    var dny = document.getElementById('dny'), d = new Date(), nz = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'], out = [];
    for (var i = 1; out.length < 10 && i < 20; i++) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i); if (x.getDay() === 0) continue; out.push('<button type="button" class="den" aria-pressed="' + (out.length ? 'false' : 'true') + '"><small>' + nz[x.getDay()] + '</small><b class="num">' + x.getDate() + '. ' + (x.getMonth() + 1) + '.</b></button>'); }
    dny.innerHTML = out.join('');
    function casy() { var m = souhrn(), c = document.getElementById('casy'), h = []; for (var t = 8 * 60; t + m <= 18 * 60; t += 30) h.push('<button type="button" class="cas num" aria-pressed="false">' + Math.floor(t / 60) + ':' + (t % 60 ? '30' : '00') + '</button>'); c.innerHTML = h.join(''); if (W.hasG && !W.RM) gsap.from('#casy .cas', { y: 8, opacity: 0, duration: .3, stagger: .015 }); }
    casy();
    function jeden(box, cls) { box.addEventListener('click', function (e) { var b = e.target.closest('.' + cls); if (!b) return; box.querySelectorAll('.' + cls).forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); }); }
    jeden(dny, 'den'); jeden(document.getElementById('casy'), 'cas');
    rf.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel'), den = dny.querySelector('[aria-pressed="true"]'), cas = document.querySelector('#casy [aria-pressed="true"]');
      if (!cas) { var c = document.getElementById('casy'); c.classList.remove('chyba'); void c.offsetWidth; c.classList.add('chyba'); W.toast('Vyberte čas'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať Vám můžeme termín potvrdit'); tel.focus(); return; }
      var r = ['Dobrý den,', 'chtěla bych termín: ' + document.getElementById('r-vybrano').textContent + '.', 'Kdy: ' + den.innerText.replace(/\s+/g, ' ') + ' v ' + cas.textContent + '.', '', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim()];
      var t = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
      if (k === 'sms') { location.href = 'sms:' + window.BL.TEL + '?&body=' + encodeURIComponent(t); W.toast('Otevírám SMS s rezervací'); }
      else { location.href = 'mailto:' + window.BL.MAIL + '?subject=' + encodeURIComponent('Rezervace z webu') + '&body=' + encodeURIComponent(t); W.toast('Otevírám e-mail s rezervací'); }
    });
  }
  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.hf1 img, .s-foto img', { clipPath: 'inset(0 0 100% 0 round 999px 999px 0 0)' }, { clipPath: 'inset(0 0 0% 0 round 999px 999px 0 0)', duration: 1.3, ease: 'power3.inOut', delay: .1 });
    gsap.from('.hf2', { y: 40, opacity: 0, duration: .9, ease: 'power3.out', delay: .7 });
    if (rf) gsap.from('.r-form .pole, .r-form fieldset, .r-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, delay: .3, clearProps: 'all' });
  });
  var pas = document.querySelector('.sl-pas');
  if (pas && matchMedia('(min-width: 900px)').matches) gsap.fromTo('.sl-polozka', { yPercent: function (i) { return i % 2 ? 14 : -6; } }, { yPercent: function (i) { return i % 2 ? -6 : 8; }, ease: 'none', scrollTrigger: { trigger: pas, start: 'top bottom', end: 'bottom top', scrub: true } });
})();
