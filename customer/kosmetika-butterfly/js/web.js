/* Společné pro úvod i ceník: počet vybraných ošetření v hlavičce, toast,
   motýl, který při scrollu proletí stránkou, a najíždění obsahu (GSAP). */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  BF.RM = RM; BF.hasG = hasG;
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* počet v hlavičce: číslo poskočí, když přibude */
  var minule = -1;
  BF.vyber.sleduj(function (l) {
    $$('[data-pocet]').forEach(function (el) {
      el.textContent = l.length ? l.length : '';
      if (minule >= 0 && l.length > minule && !RM) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    });
    minule = l.length;
  });

  /* toast: přijede shora, odjede rychle */
  var t = document.getElementById('toast'), tt;
  BF.toast = function (text) {
    if (!t) return;
    t.querySelector('span').textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2400);
  };

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  BF.cara = function (els) {
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
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });

    /* motýl: se scrollem letí přes stránku po vlnovce, natáčí se ve směru letu */
    var m = document.getElementById('letec');
    if (m) {
      var o = { p: 0 }, posl = { x: 0, y: 0 };
      var poloha = function () {
        var w = innerWidth, h = innerHeight, p = o.p;
        var x = -60 + (w + 120) * p, y = h * (.62 - .3 * p) + Math.sin(p * Math.PI * 5) * h * .08;
        var uhel = Math.atan2(y - posl.y, x - posl.x) * 57.3 + 90;
        gsap.set(m, { x: x, y: y, rotation: isFinite(uhel) ? uhel : 70, opacity: p > .02 && p < .98 ? 1 : 0 });
        posl = { x: x, y: y };
      };
      gsap.to(o, { p: 1, ease: 'none', onUpdate: poloha, scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.4 } });
    }
  });

  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
