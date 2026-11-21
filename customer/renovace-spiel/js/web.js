/* Společné: toast, najíždění obsahu. Úvod: posuvník před/po na dveřích (po přistání loga
   jednou sám přejede). Louhování: při rolování se z prkna sloupávají vrstvy nátěrů až na dřevo. */
window.SPL = window.SPL || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  SPL.RM = RM; SPL.hasG = hasG; SPL.TEL = '+420721547065'; SPL.MAIL = 'splpetr@seznam.cz';
  var t = document.getElementById('toast'), tt;
  SPL.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };

  /* ---- před / po ---- */
  var por = document.getElementById('porovnani'), posun = document.getElementById('posun');
  function nastav(v) { por.style.setProperty('--z', (100 - v) + '%'); }
  if (por) { posun.addEventListener('input', function () { if (SPL.demo) SPL.demo.kill(); nastav(+posun.value); }); nastav(50); }

  /* ---- louhování: popisky vrstev ---- */
  var vrstvy = document.querySelectorAll('#prkno .v');
  var popisky = document.querySelectorAll('#vrstvy-t li');
  function aktivni(i) { popisky.forEach(function (li, k) { li.classList.toggle('on', k === i); }); }

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () {
    gsap.set('[data-r],[data-h]', { clearProps: 'all' });
    if (popisky.length) aktivni(0);
  });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    afterIntro(function () {
      gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' });
      if (por) {
        var s = { v: 92 }; nastav(92);
        SPL.demo = gsap.to(s, { v: 50, duration: 1.6, delay: .7, ease: 'power3.inOut', onUpdate: function () { posun.value = s.v; nastav(s.v); } });
      }
    });

    if (vrstvy && vrstvy.length) {
      /* poslední nátěr je nahoře (v4), pod ním starší… až na dřevo */
      var poradi = [].slice.call(vrstvy).reverse();
      var pin = matchMedia('(min-width: 1061px)').matches;
      var tl = gsap.timeline({ scrollTrigger: { trigger: '#louhovani', start: pin ? 'top top' : 'top 70%', end: pin ? '+=170%' : 'bottom 40%', scrub: .6, pin: pin,
        onUpdate: function (st) { aktivni(Math.min(4, Math.floor(st.progress * 4.999))); } } });
      poradi.forEach(function (v, i) {
        tl.fromTo(v, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1, ease: 'power1.inOut' }, i);
      });
      aktivni(0);
    }
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
