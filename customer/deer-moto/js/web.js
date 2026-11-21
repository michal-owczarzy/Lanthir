/* Společné: toast, najíždění obsahu. Úvod: pod červeným polem se při rolování kutálí kolo
   (posun odpovídá otočení, takže kolo opravdu „jede“, ne klouže). */
window.DR = window.DR || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  DR.RM = RM; DR.hasG = hasG; DR.TEL = '+420608811387'; DR.MAIL = 'davo777@seznam.cz';
  var t = document.getElementById('toast'), tt;
  DR.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    afterIntro(function () { gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' }); });
    var kolo = document.getElementById('kolo');
    if (kolo) {
      /* obvod kola 48 px × π ≈ 151 px; otočení = ujetá dráha / obvod × 360° */
      var draha = function () { return document.getElementById('rafek').offsetWidth + 48; };
      gsap.fromTo(kolo, { x: -48, rotation: 0 }, { x: function () { return draha() - 48; }, rotation: function () { return draha() / (Math.PI * 48) * 360; }, ease: 'none', transformOrigin: '50% 50%',
        scrollTrigger: { trigger: '#rafek', start: 'top bottom', end: 'top 15%', scrub: .4, invalidateOnRefresh: true } });
    }
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
