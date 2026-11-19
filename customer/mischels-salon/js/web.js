/* Společné pro obě stránky: toast, najíždění obsahu (GSAP), kreslení tahu. */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  MS.RM = RM; MS.hasG = hasG;
  var t = document.getElementById('toast'), tt;
  MS.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2400);
  };
  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  MS.cara = function (els) {
    return gsap.utils.toArray(els).map(function (el) {
      var L = Math.ceil(el.getTotalLength()) + 1;
      el.removeAttribute('pathLength');
      gsap.set(el, { strokeDasharray: L + ' ' + L, strokeDashoffset: L });
      return el;
    });
  };
  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    ScrollTrigger.batch('[data-r]', { start: 'top 88%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: .09, overwrite: true });
    } });
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
