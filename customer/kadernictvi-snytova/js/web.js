/* Společné: toast, otevírací doba, najíždění obsahu. */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  var W = window.W = window.W || {};
  W.RM = RM; W.hasG = hasG;
  var t = document.getElementById('toast'), tt;
  W.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2800);
  };
  /* otevírací doba: H = {1:[8,15], ...} (0 = neděle); vrátí stav a větu */
  W.stav = function (H, d) {
    d = d || new Date();
    var dny = ['v neděli', 'v pondělí', 'v úterý', 've středu', 've čtvrtek', 'v pátek', 'v sobotu'];
    var den = d.getDay(), h = d.getHours() + d.getMinutes() / 60, x = H[den];
    function f(n) { var m = Math.round((n % 1) * 60); return Math.floor(n) + ':' + (m < 10 ? '0' : '') + m; }
    if (x && h >= x[0] && h < x[1]) return { otevreno: true, text: 'Teď otevřeno, do ' + f(x[1]) };
    if (x && h < x[0]) return { otevreno: false, text: 'Teď zavřeno, otevíráme dnes v ' + f(x[0]) };
    for (var i = 1; i <= 7; i++) {
      var dd = (den + i) % 7;
      if (H[dd]) return { otevreno: false, text: 'Teď zavřeno, otevíráme ' + (i === 1 ? 'zítra' : dny[dd]) + ' v ' + f(H[dd][0]) };
    }
    return { otevreno: false, text: 'Teď zavřeno' };
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
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
