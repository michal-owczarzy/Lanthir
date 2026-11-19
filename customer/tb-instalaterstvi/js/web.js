/* Společný skript obou stránek: živý stav (Po–Pá nonstop), toast, kopírování čísla,
   stoupačka se třemi trubkami a základní pohyb při scrollu (GSAP + ScrollTrigger). */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var TB = window.TB = { RM: RM, hasG: hasG };

  /* ===== Živý stav: Po–Pá nonstop, o víkendu po domluvě (pražský čas) ===== */
  function den() {
    var w = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Prague', weekday: 'short' }).format(new Date());
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(w);
  }
  function stav() {
    var d = den(), vikend = d === 0 || d === 6;
    $$('[data-stav]').forEach(function (el) {
      el.classList.toggle('ok', !vikend);
      el.querySelector('span').textContent = vikend ? 'Víkend: po telefonické domluvě' : 'Dnes nonstop';
    });
    $$('.hodiny [data-d]').forEach(function (el) { el.classList.toggle('dnes', (+el.dataset.d === 1 && !vikend) || (+el.dataset.d === 6 && vikend)); });
  }
  stav(); setInterval(stav, 60000);

  /* ===== Toast: přijede rychle, odjede ještě rychleji ===== */
  var toastEl = $('#toast'), tt;
  TB.toast = function (text) {
    if (!toastEl) return;
    toastEl.querySelector('span').textContent = text;
    toastEl.classList.remove('on'); void toastEl.offsetWidth; toastEl.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { toastEl.classList.remove('on'); }, 2600);
  };

  /* ===== Kopírovat číslo: ikona se změní na fajfku ===== */
  $$('[data-kopirovat]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.kopirovat, ok = function () {
        var s = b.querySelector('span'), puv = s.textContent;
        b.classList.add('hotovo'); s.textContent = 'Zkopírováno';
        TB.toast('Číslo ' + t + ' je ve schránce');
        setTimeout(function () { b.classList.remove('hotovo'); s.textContent = puv; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, ok); else ok();
    });
  });

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* kreslení tahu: skutečná délka cesty (GSAP zaokrouhluje px) */
  TB.cara = function (els) {
    return gsap.utils.toArray(els).map(function (el) {
      var L = Math.ceil(el.getTotalLength()) + 1;
      el.removeAttribute('pathLength');
      gsap.set(el, { strokeDasharray: L + ' ' + L, strokeDashoffset: L });
      return el;
    });
  };

  /* ===== Stoupačka: tři trubky podél obsahu, odbočka s ventilem ke každé sekci ===== */
  var main = $('main'), svg = $('#stoupacka'), NS = 'http://www.w3.org/2000/svg';
  var BARVA = { voda: '#1c4fa0', topeni: '#d9252b', plyn: '#f6c400' }, X = { voda: 8, topeni: 26, plyn: 44 };
  var stoupTw = [];
  function stoupacka() {
    if (!svg || getComputedStyle(svg).display === 'none') return;
    stoupTw.forEach(function (t) { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
    stoupTw = [];
    var H = main.scrollHeight, mr = main.getBoundingClientRect(), h = '';
    svg.setAttribute('viewBox', '0 0 56 ' + H);
    svg.style.height = H + 'px';
    ['voda', 'topeni', 'plyn'].forEach(function (k) {
      h += '<path class="stopa" d="M' + X[k] + ' 0V' + (H - 20) + '"/><path class="tok" data-k="' + k + '" stroke="' + BARVA[k] + '" d="M' + X[k] + ' 0V' + (H - 20) + '"/>';
    });
    $$('[data-ventil]').forEach(function (el, i) {
      var k = el.dataset.ventil, y = Math.round(el.getBoundingClientRect().top - mr.top + el.offsetHeight * 0.45);
      h += '<path class="stopa" d="M' + X[k] + ' ' + y + 'H74"/><path class="tok odb" data-i="' + i + '" stroke="' + BARVA[k] + '" d="M' + X[k] + ' ' + y + 'H74"/>' +
        '<g class="ventil" data-i="' + i + '"><circle cx="' + (X[k] + 20) + '" cy="' + y + '" r="9" fill="#fff" stroke="#1f2328" stroke-width="3"/>' +
        '<path d="M' + (X[k] + 13) + ' ' + y + 'h14M' + (X[k] + 20) + ' ' + (y - 7) + 'v14" stroke="#1f2328" stroke-width="2.5" stroke-linecap="round"/></g>';
    });
    svg.innerHTML = h;
    if (RM) return;
    $$('.tok:not(.odb)', svg).forEach(function (p, i) {
      TB.cara(p);
      stoupTw.push(gsap.to(p, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: main, start: 'top ' + (70 - i * 8) + '%', end: 'bottom bottom', scrub: .6 } }));
    });
    $$('[data-ventil]').forEach(function (el, i) {
      var odb = TB.cara($('.odb[data-i="' + i + '"]', svg))[0], v = $('.ventil[data-i="' + i + '"]', svg);
      var tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 72%', toggleActions: 'play none none reverse' } });
      tl.to(odb, { strokeDashoffset: 0, duration: .5, ease: 'power2.out' }).fromTo(v, { rotation: 0 }, { rotation: 180, duration: .7, ease: 'back.out(2)' }, 0);
      stoupTw.push(tl);
    });
  }

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    ScrollTrigger.batch('[data-r]', { start: 'top 88%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .8, ease: 'expo.out', stagger: .08, overwrite: true });
    } });
    /* fotky v kartách a sekcích: jemná paralaxa uvnitř rámu */
    $$('[data-parallax] img').forEach(function (im) {
      gsap.fromTo(im, { yPercent: -5, scale: 1.1 }, { yPercent: 5, scale: 1.1, ease: 'none', scrollTrigger: { trigger: im.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  });

  stoupacka();
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { stoupacka(); ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  addEventListener('resize', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
