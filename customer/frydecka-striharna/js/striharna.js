/* Frýdecká Stříhárna: dnešní osa 8–18 s ručičkou „teď“, ceník s výpočtem, výloha. */
(function () {
  var W = window.W || {}, HOD = { 1: [8, 18], 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 18] };
  function dvoj(n) { return (n < 10 ? '0' : '') + n; }
  function stav() {
    var s = W.stav ? W.stav(HOD) : null, d = new Date();
    if (s) document.querySelectorAll('.stav').forEach(function (el) { el.classList.toggle('otevreno', s.otevreno); el.querySelector('.stav-text').textContent = s.text; });
    var ted = document.getElementById('ted');
    if (!ted) return;
    var h = d.getHours() + d.getMinutes() / 60, x = HOD[d.getDay()], pct = Math.max(0, Math.min(1, (h - 8) / 10));
    document.getElementById('ted-cas').textContent = d.getHours() + ':' + dvoj(d.getMinutes());
    ted.style.left = (pct * 100) + '%';
    document.getElementById('osa-hotovo').style.width = (pct * 100) + '%';
    var nad = document.getElementById('h-den'), txt = document.getElementById('den-text');
    if (x && h >= 8 && h < 18) {
      var zb = Math.round((18 - h) * 60);
      nad.textContent = 'Dnes stříháme ještě ' + (zb >= 60 ? Math.floor(zb / 60) + ' h ' : '') + (zb % 60) + ' min';
      txt.textContent = 'Teď je otevřeno. Přijďte do 18:00, objednávat se nemusíte.';
      ted.classList.add('otevreno');
    } else if (x && h < 8) {
      nad.textContent = 'Dnes otevíráme v 8:00';
      txt.textContent = 'Stříháme do 18:00, bez objednání.';
    } else {
      var vikend = !x;
      nad.textContent = vikend ? 'O víkendu máme zavřeno' : 'Dnes už máme zavřeno';
      txt.textContent = s ? s.text.replace('Teď zavřeno, otevíráme', 'Otevíráme') + '. Stříháme do 18:00, bez objednání.' : '';
      if (vikend) { ted.hidden = true; document.getElementById('osa-hotovo').style.width = '0'; }
    }
  }
  stav(); setInterval(stav, 30000);

  /* ceník */
  var f = document.getElementById('cenik');
  if (f) {
    var cena = document.getElementById('cena'), cas = document.getElementById('cas'), o = { c: 0, t: 0 };
    f.addEventListener('change', function () {
      var c = 0, t = 0;
      f.querySelectorAll('input:checked').forEach(function (i) { c += +i.dataset.c; t += +i.dataset.t; });
      if (W.hasG && !W.RM) gsap.to(o, { c: c, t: t, duration: .45, ease: 'power2.out', onUpdate: function () { cena.textContent = Math.round(o.c) + ' Kč'; cas.textContent = Math.round(o.t) + ' min'; } });
      else { cena.textContent = c + ' Kč'; cas.textContent = t + ' min'; }
    });
    f.addEventListener('submit', function (e) { e.preventDefault(); });
  }

  if (!W.hasG || W.RM) return;
  /* výloha: znak se „nalepí“ tah po tahu, odlesk přejede sklem */
  var tahy = document.querySelectorAll('.zn-d path');
  tahy.forEach(function (p) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.set(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }); });
  gsap.set('.zn-f', { opacity: 0, scale: .7, transformOrigin: '50% 50%' });
  gsap.set('.sklo .v1, .sklo .v2, .sklo .v3', { opacity: 0, y: 14 });
  afterIntro(function () {
    var tl = gsap.timeline({ delay: .25 });
    tl.to('.sklo .v1, .sklo .v2', { opacity: 1, y: 0, duration: .7, stagger: .12, ease: 'expo.out' })
      .to('.zn-f', { opacity: 1, scale: 1, duration: .5, ease: 'back.out(2)' }, '-=.3')
      .to(tahy, { strokeDashoffset: 0, duration: .8, stagger: .06, ease: 'power2.inOut' }, '-=.25')
      .to('.sklo .v3', { opacity: 1, y: 0, duration: .6, ease: 'expo.out' }, '-=.4')
      .fromTo('.odlesk', { xPercent: -120 }, { xPercent: 260, duration: 1.4, ease: 'power2.inOut' }, '-=.5');
  });
  var sk = document.querySelector('.sklo');
  if (sk) sk.addEventListener('pointerenter', function () { gsap.fromTo('.odlesk', { xPercent: -120 }, { xPercent: 260, duration: 1.1, ease: 'power2.inOut', overwrite: true }); });
  /* cedule se při příjezdu lehce zhoupne */
  gsap.utils.toArray('.k-txt .cedule').forEach(function (c) {
    gsap.from(c, { rotate: -6, transformOrigin: '0% 0%', duration: 1.4, ease: 'elastic.out(1,.4)', scrollTrigger: { trigger: c, start: 'top 85%' } });
  });
  gsap.fromTo('.osa-hotovo', { scaleX: 0 }, { scaleX: 1, transformOrigin: '0 50%', duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.osa', start: 'top 85%' } });
  gsap.utils.toArray('.mriz img').forEach(function (im) {
    gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
})();
