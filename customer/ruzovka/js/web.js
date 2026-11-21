/* Společné: toast, stav otevření, dnešní řádek, najíždění obsahu.
   Rituál: při rolování kroků se v kapce postupně ukládají vrstvy jako na pleti. */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  RZ.RM = RM; RZ.hasG = hasG;
  var t = document.getElementById('toast'), tt;
  RZ.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  /* stav: otevřeno teď / kdy otevřeme */
  var stavT = document.getElementById('stav-t');
  if (stavT) {
    var d = new Date(), den = d.getDay(), h = d.getHours() + d.getMinutes() / 60, o = RZ.HOD[den];
    var DNY = ['v neděli', 'v pondělí', 'v úterý', 've středu', 've čtvrtek', 'v pátek', 'v sobotu'];
    if (o && h >= o[0] && h < o[1]) stavT.textContent = 'Teď otevřeno, dnes do ' + o[1] + ':00';
    else if (o && h < o[0]) stavT.textContent = 'Dnes otevíráme v ' + o[0] + ':00';
    else for (var i = 1; i <= 7; i++) { var dd = (den + i) % 7; if (RZ.HOD[dd]) { stavT.textContent = 'Otevíráme ' + (i === 1 ? 'zítra' : DNY[dd]) + ' v ' + RZ.HOD[dd][0] + ':00'; break; } }
  }
  document.querySelectorAll('#hodiny [data-d="' + new Date().getDay() + '"]').forEach(function (el) { el.classList.add('dnes-r'); });

  var kroky = [].slice.call(document.querySelectorAll('#kroky li')), vrstvy = [].slice.call(document.querySelectorAll('#kapka .vr'));
  function krok(i) {
    kroky.forEach(function (li, k) { li.classList.toggle('on', k === i); });
    if (!hasG || RM) return;
    vrstvy.forEach(function (v, k) { gsap.to(v, { scale: k <= i ? 1 : .2, opacity: k <= i ? 1 : 0, duration: .7, ease: k <= i ? 'back.out(1.6)' : 'power2.in', overwrite: true }); });
  }

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);
  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () {
    gsap.set('[data-r],[data-h]', { clearProps: 'all' });
    kroky.forEach(function (li) { li.classList.add('on'); });
  });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    afterIntro(function () { gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' }); });
    if (kroky.length) {
      gsap.set(vrstvy, { scale: .2, opacity: 0, transformOrigin: '50% 50%' });
      kroky.forEach(function (li, i) {
        ScrollTrigger.create({ trigger: li, start: 'top 60%', end: 'bottom 60%', onToggle: function (s) { if (s.isActive) krok(i); } });
      });
      ScrollTrigger.create({ trigger: '#kroky', start: 'top 60%', onLeaveBack: function () { krok(-1); } });
    }
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
