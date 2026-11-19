/* Společné: toast, najíždění obsahu. Úvod: rozvaděč s jističi rozsvěcuje místnosti
   v řezu domu; po přistání loga se hlavní vypínač a okruhy samy postupně zapnou. */
window.JN = window.JN || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  JN.RM = RM; JN.hasG = hasG; JN.TEL = '+420604726216'; JN.MAIL = 'janac.vit@outlook.cz';
  var t = document.getElementById('toast'), tt;
  JN.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };

  /* ---- rozvaděč ---- */
  var lista = document.getElementById('lista');
  var stav = {};
  function prekreslit() {
    var hl = stav.hlavni;
    document.querySelectorAll('.dum [data-o]').forEach(function (el) { el.classList.toggle('on', !!(hl && stav[el.dataset.o])); });
  }
  function prepnout(o, zap) {
    stav[o] = zap;
    var b = lista.querySelector('[data-o="' + o + '"]');
    if (b) b.setAttribute('aria-checked', String(zap));
    prekreslit();
  }
  if (lista) {
    lista.addEventListener('click', function (e) {
      var b = e.target.closest('.jistic'); if (!b) return;
      if (JN.auto) JN.auto.kill();
      prepnout(b.dataset.o, b.getAttribute('aria-checked') !== 'true');
    });
  }

  if (!hasG) {
    if (lista) [].forEach.call(lista.querySelectorAll('.jistic'), function (b) { prepnout(b.dataset.o, true); });
    document.documentElement.classList.remove('js');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () {
    gsap.set('[data-r],[data-h]', { clearProps: 'all' });
    if (lista) [].forEach.call(lista.querySelectorAll('.jistic'), function (b) { prepnout(b.dataset.o, true); });
  });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    afterIntro(function () {
      gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .09, ease: 'expo.out' });
      if (!lista) return;
      /* setmění → hlavní vypínač → okruhy jeden po druhém */
      var poradi = ['hlavni', 'kuchyne', 'obyvak', 'loznice', 'koupelna', 'detsky', 'venku'];
      JN.auto = gsap.timeline({ delay: .9 });
      poradi.forEach(function (o, i) { JN.auto.call(function () { prepnout(o, true); }, null, i === 0 ? 0 : .5 + i * .22); });
    });
    /* fotky služeb se při rolování lehce posouvají */
    gsap.utils.toArray('.obvod figure img').forEach(function (img) {
      gsap.fromTo(img, { yPercent: -4, scale: 1.08 }, { yPercent: 4, scale: 1.08, ease: 'none', scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
