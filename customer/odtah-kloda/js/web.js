/* Společné: toast, dnešní řádek otevírací doby, najíždění obsahu.
   Úvod: číslice telefonu se po přistání loga překlopí na místo jako na tabuli. */
window.KL = window.KL || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  KL.RM = RM; KL.hasG = hasG; KL.TEL = '+420608060378';
  KL.SERVIS = { lat: 49.7974630556, lon: 18.5860788889 };
  var t = document.getElementById('toast'), tt;
  KL.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2800);
  };

  /* dnešní řádek: pondělí až pátek sdílí jeden řádek */
  var d = new Date().getDay(), klic = d >= 1 && d <= 5 ? 1 : d;
  document.querySelectorAll('#hodiny [data-d="' + klic + '"]').forEach(function (el) { el.classList.add('dnes-r'); });

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    var cifry = gsap.utils.toArray('#cislo .c');
    gsap.set(cifry, { opacity: 0, yPercent: 60, rotationX: -90, transformOrigin: '50% 0%' });
    afterIntro(function () {
      gsap.timeline()
        .to(cifry, { opacity: 1, yPercent: 0, rotationX: 0, duration: .55, stagger: .05, ease: 'back.out(1.7)' })
        .to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' }, .1);
    });
    var vrata = document.querySelector('#vrata img');
    if (vrata) gsap.fromTo(vrata, { yPercent: -12 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: '#vrata', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
