/* Společné: toast, dnešní řádek otevírací doby, najíždění obsahu.
   Panely fasády se při rolování „usazují“ jako při montáži: přijedou zdola a dosednou. */
window.KZ = window.KZ || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  KZ.RM = RM; KZ.hasG = hasG; KZ.TEL = '+420603448379';
  var t = document.getElementById('toast'), tt;
  KZ.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  var d = new Date().getDay(), klic = d >= 1 && d <= 5 ? 1 : 6;
  document.querySelectorAll('#hodiny [data-d="' + klic + '"]').forEach(function (el) { el.classList.add('dnes-r'); });

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 40 });
    ScrollTrigger.batch('[data-r]', { start: 'top 92%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .75, ease: 'power4.out', stagger: .07, overwrite: true });
    } });
    afterIntro(function () {
      gsap.to('[data-h]', { opacity: 1, y: 0, duration: .8, stagger: .08, ease: 'power4.out' });
    });
    /* razítka v ukázce dopadnou, když je panel vidět */
    gsap.utils.toArray('.ukazka .razitko').forEach(function (r, i) {
      gsap.from(r, { scale: 1.8, opacity: 0, rotation: -18, duration: .4, delay: .25 + i * .18, ease: 'back.out(2.5)', scrollTrigger: { trigger: '.ukazka', start: 'top 75%', once: true } });
    });
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
