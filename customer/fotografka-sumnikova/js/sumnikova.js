/* Šumníková: hledáček s ostřením, kontaktní arch s kroužkováním, domluva focení. */
(function () {
  var W = window.W || {};
  var tl = document.querySelector('.tabs');
  function vyber(btn) {
    var lupa = document.getElementById('lupa'), img = lupa.querySelector('img'), f = btn.dataset.f;
    document.querySelectorAll('.ram').forEach(function (r) { r.classList.toggle('vybrany', r === btn); r.setAttribute('aria-pressed', String(r === btn)); });
    img.src = '../'.slice(0, 0) + 'img/' + f + '-800.jpg'; img.srcset = 'img/' + f + '-800.jpg 800w, img/' + f + '-1600.jpg 1600w'; img.alt = btn.dataset.alt;
    document.getElementById('lupa-t').textContent = btn.dataset.alt;
    var k = btn.querySelector('.krouzek path');
    if (W.hasG && !W.RM) {
      var L = Math.ceil(k.getTotalLength()) + 1;
      gsap.fromTo(k, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: .55, ease: 'power2.out' });
      gsap.fromTo(img, { opacity: .3, scale: 1.04 }, { opacity: 1, scale: 1, duration: .5, ease: 'power2.out' });
    }
  }
  if (tl) {
    tl.addEventListener('click', function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      tl.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t === b)); });
      document.querySelectorAll('.pas').forEach(function (p) { p.hidden = p.dataset.k !== b.dataset.k; });
      var prvni = document.querySelector('.pas[data-k="' + b.dataset.k + '"] .ram');
      if (prvni) vyber(prvni);
      if (W.hasG && !W.RM) gsap.from('.pas[data-k="' + b.dataset.k + '"] li', { y: 20, opacity: 0, duration: .45, stagger: .05, ease: 'power2.out' });
    });
    document.querySelector('.list').addEventListener('click', function (e) { var r = e.target.closest('.ram'); if (r) vyber(r); });
    var p0 = document.querySelector('.ram'); if (p0) { p0.classList.add('vybrany'); p0.setAttribute('aria-pressed', 'true'); }
  }

  /* domluva focení */
  var f = document.getElementById('fform');
  if (f) {
    ['co', 'kde'].forEach(function (id) {
      var box = document.getElementById(id);
      box.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; if (id === 'co') b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); else box.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); });
    });
    function vyb(id) { return [].filter.call(document.querySelectorAll('#' + id + ' .cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel'), co = document.getElementById('co');
      if (!vyb('co').length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast('Vyberte, co budeme fotit'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžu ozvat'); tel.focus(); return; }
      var r = ['Dobrý den,', 'mám zájem o focení: ' + vyb('co').join(', ').toLowerCase() + ' (' + (vyb('kde')[0] || '').toLowerCase() + ').'];
      var kdy = document.getElementById('kdy').value.trim(), po = document.getElementById('popis').value.trim();
      if (kdy) r.push('Kdy: ' + kdy + '.');
      if (po) r.push('', po);
      r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'mail';
      if (k === 'sms') { location.href = 'sms:+420775318615?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS'); }
      else { location.href = 'mailto:miriam.sumnikova@seznam.cz?subject=' + encodeURIComponent('Focení') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail'); }
    });
  }

  if (!W.hasG || W.RM) return;
  /* hledáček: obraz je rozostřený, AF bod najede a zaostří */
  var h = document.querySelector('.hledacek img');
  if (h) {
    gsap.set(h, { filter: 'blur(10px)', scale: 1.04 });
    gsap.set('.af', { scale: 1.8, opacity: 0 });
    afterIntro(function () {
      gsap.timeline({ delay: .2 })
        .to('.roh', { opacity: 1, duration: .3, stagger: .05 })
        .to('.af', { scale: 1, opacity: 1, duration: .35, ease: 'power3.out' }, .1)
        .to('.af', { borderColor: '#2fb35a', duration: .1, repeat: 3, yoyo: true }, .5)
        .to(h, { filter: 'blur(0px)', scale: 1, duration: .5, ease: 'power2.out', clearProps: 'filter' }, .55)
        .to('.af', { opacity: 0, duration: .4 }, 1.2);
    });
  }
  if (f) afterIntro(function () { gsap.from('.f-form fieldset, .f-form .pole, .f-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' }); gsap.from('.f-nabidka li', { x: -20, opacity: 0, duration: .5, stagger: .08, delay: .4, clearProps: 'all' }); });
  var p0 = document.querySelector('.ram.vybrany .krouzek path');
  if (p0) { var L0 = Math.ceil(p0.getTotalLength()) + 1; gsap.set(p0, { strokeDasharray: L0 + ' ' + L0, strokeDashoffset: L0 }); ScrollTrigger.create({ trigger: '.list', start: 'top 75%', once: true, onEnter: function () { gsap.to(p0, { strokeDashoffset: 0, duration: .7, delay: .3 }); } }); }
  gsap.fromTo('.om-foto img', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.o-mne', start: 'top bottom', end: 'center center', scrub: true } });
})();
