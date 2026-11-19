/* Společné: toast, najíždění obsahu. Úvod: pruhy barvy za slovy se natáhnou jako tah
   válečkem, okrový pruh přes celou šířku se natírá při rolování, vějíř odstínů se rozevře. */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  DH.RM = RM; DH.hasG = hasG;
  var t = document.getElementById('toast'), tt;
  DH.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };

  /* vějíř: úhly rozevření (bez GSAP rovnou rozevřený) */
  var vejir = [].slice.call(document.querySelectorAll('#vejir a'));
  function uhel(i) { var n = vejir.length; return -34 + i * (68 / (n - 1)); }
  if (!hasG) {
    vejir.forEach(function (a, i) { a.style.transform = 'rotate(' + uhel(i) + 'deg)'; });
    document.documentElement.classList.remove('js');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () {
    gsap.set('[data-r],[data-h]', { clearProps: 'all' });
    vejir.forEach(function (a, i) { gsap.set(a, { rotation: uhel(i) }); });
  });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });

    /* pruhy za slovy: tah válečkem zleva */
    var pruhy = gsap.utils.toArray('.pruh');
    gsap.set(pruhy, { '--w': 0 });
    afterIntro(function () {
      var tl = gsap.timeline();
      tl.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' });
      var h = document.getElementById('pruh-h');
      if (h) tl.to(h, { '--w': 1, duration: .8, ease: 'power2.inOut' }, .5);
    });
    pruhy.forEach(function (p) {
      if (p.id === 'pruh-h') return;
      gsap.to(p, { '--w': 1, duration: .8, ease: 'power2.inOut', scrollTrigger: { trigger: p, start: 'top 80%', once: true } });
    });

    /* okrový pruh přes celou šířku se natírá s rolováním */
    var natr = document.getElementById('natr');
    if (natr) {
      gsap.fromTo(natr, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '#rok', start: 'top 85%', end: 'top 20%', scrub: .6 } });
      gsap.from('#rok h2, #rok p, #rok figure', { opacity: 0, y: 30, duration: .9, stagger: .1, ease: 'expo.out', scrollTrigger: { trigger: '#rok', start: 'top 55%', once: true } });
    }

    /* vějíř se rozevře z jednoho proužku; najetí proužek povytáhne */
    if (vejir.length) {
      gsap.set(vejir, { rotation: 0 });
      ScrollTrigger.create({ trigger: '#vejir', start: 'top 75%', once: true, onEnter: function () {
        vejir.forEach(function (a, i) { gsap.to(a, { rotation: uhel(i), duration: 1.1, delay: i * .04, ease: 'power3.out' }); });
      } });
      vejir.forEach(function (a) {
        a.addEventListener('pointerenter', function () { gsap.to(a, { y: -18, duration: .3, ease: 'power2.out' }); });
        a.addEventListener('pointerleave', function () { gsap.to(a, { y: 0, duration: .4, ease: 'power2.out' }); });
      });
    }
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
