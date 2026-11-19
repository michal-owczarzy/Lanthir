/* Společné: toast, stav otevření, otevírací doba, najíždění obsahu.
   Úvod: pneumatika se přikutálí a při rolování se točí, pás zimního období s dneškem,
   měřidlo dezénu podle zákonných minim (léto 1,6 mm, zima 4 mm). */
window.KR = window.KR || {};
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  KR.RM = RM; KR.hasG = hasG;
  KR.TEL = '+420774900479'; KR.MAIL = 'apskrokodyl@gmail.com';
  /* [od, do] v hodinách; neděle zavřeno */
  KR.HOD = { 1: [9, 17], 2: [9, 17], 3: [9, 17], 4: [9, 17], 5: [9, 16], 6: [9, 12], 0: null };
  KR.DNY = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  var t = document.getElementById('toast'), tt;
  KR.toast = function (text) {
    if (!t) return;
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600);
  };
  KR.cz = function (n) { return n.toFixed(1).replace('.', ','); };

  /* ---- stav: otevřeno teď, nebo kdy otevřeme ---- */
  var stav = document.getElementById('stav'), stavT = document.getElementById('stav-t');
  function prepocitat() {
    var d = new Date(), den = d.getDay(), h = d.getHours() + d.getMinutes() / 60, o = KR.HOD[den];
    if (o && h >= o[0] && h < o[1]) {
      stav.classList.add('otevreno');
      stavT.textContent = 'Teď máme otevřeno, dnes do ' + o[1] + ':00';
      return;
    }
    stav.classList.remove('otevreno');
    if (o && h < o[0]) { stavT.textContent = 'Zavřeno, otevíráme dnes v ' + o[0] + ':00'; return; }
    for (var i = 1; i <= 7; i++) {
      var dd = (den + i) % 7;
      if (KR.HOD[dd]) {
        stavT.textContent = 'Zavřeno, otevíráme ' + (i === 1 ? 'zítra' : 'v ' + KR.DNY[dd].replace('středa', 'středu').replace('neděle', 'neděli').replace('sobota', 'sobotu')) + ' v ' + KR.HOD[dd][0] + ':00';
        return;
      }
    }
  }
  if (stav) { prepocitat(); setInterval(prepocitat, 60000); }

  /* ---- dnešní řádek otevírací doby ---- */
  var dnes = new Date().getDay();
  document.querySelectorAll('#hodiny [data-d="' + dnes + '"]').forEach(function (el) { el.classList.add('dnes-r'); });

  /* ---- pás roku: značka dneška a věta podle měsíce ---- */
  var znacka = document.getElementById('dnes'), rokT = document.getElementById('rok-t');
  if (znacka) {
    var d = new Date(), y = d.getFullYear();
    var zac = new Date(y, 0, 1), dni = (new Date(y + 1, 0, 1) - zac) / 864e5, poradi = (d - zac) / 864e5;
    znacka.style.left = 'calc(' + (poradi / dni * 100).toFixed(2) + '% - 1.5px)';
    znacka.dataset.t = 'dnes ' + d.getDate() + '. ' + (d.getMonth() + 1) + '.';
    var m = d.getMonth();
    rokT.textContent = (m >= 10 || m <= 2) ? 'Teď platí zimní období. Máte už přezuto?' :
      m === 9 ? 'Zimní období začíná 1. listopadu, objednejte přezutí včas.' :
      m === 3 ? 'Zimní období skončilo, můžete přezout na letní.' : 'Zimní období začíná 1. listopadu.';
  }

  /* ---- měřidlo dezénu ---- */
  var svg = document.getElementById('dezen-svg'), hl = document.getElementById('hl'), out = document.getElementById('hl-out');
  var vL = document.getElementById('v-leto'), vZ = document.getElementById('v-zima');
  var BASE = 196, MAX = 9, PX = 15;  /* 1 mm = 15 px */
  var bloky = [], hloubT;
  function sestavit() {
    /* na úzkém displeji jen tři bloky, ať popisky zůstanou čitelné */
    var n = innerWidth < 680 ? 3 : 5, konec = 28 + n * 88 - 16, W = konec + 70, h = '';
    svg.setAttribute('viewBox', '0 40 ' + W + ' 210');
    h += '<rect class="zaklad" x="20" y="' + BASE + '" width="' + (konec - 12) + '" height="40" rx="3"/>';
    for (var i = 0; i < n; i++) h += '<rect class="blok" data-b x="' + (28 + i * 88) + '" y="' + (BASE - 75) + '" width="72" height="75" rx="3"/>';
    function cara(mm, cls, txt) {
      var yy = BASE - mm * PX;
      return '<line class="' + cls + '" x1="14" x2="' + (konec + 10) + '" y1="' + yy + '" y2="' + yy + '"/><text class="cara-t" x="' + (konec + 16) + '" y="' + (yy + 4) + '">' + txt + '</text>';
    }
    h += cara(4, 'cara-4', 'zima 4');
    h += cara(1.6, 'cara-16', 'léto 1,6');
    h += '<line x1="108" x2="108" y1="' + BASE + '" y2="' + (BASE - 75) + '" stroke="#f4c20d" stroke-width="2" id="hl-l"/>';
    h += '<text class="hloub" id="hl-t" x="108" y="' + (BASE - 84) + '" text-anchor="middle">5,0 mm</text>';
    svg.innerHTML = h;
    bloky = [].slice.call(svg.querySelectorAll('[data-b]'));
    hloubT = document.getElementById('hl-t');
  }
  function nastav(v) {
    var hpx = Math.max(0, v * PX), top = BASE - hpx;
    bloky.forEach(function (b) { b.setAttribute('y', top); b.setAttribute('height', hpx); });
    var l = document.getElementById('hl-l'); l.setAttribute('y2', top);
    hloubT.setAttribute('y', top - 9); hloubT.textContent = KR.cz(v) + ' mm';
    out.textContent = KR.cz(v) + ' mm';
    hl.style.setProperty('--p', (v / MAX * 100) + '%');
    var leto = v >= 1.6, zima = v >= 4;
    vL.className = leto ? 'ok' : 'ne'; vZ.className = zima ? 'ok' : 'ne';
    vL.querySelector('p').textContent = !leto ? 'Pod zákonným minimem 1,6 mm. S těmito pneumatikami už nejezděte.' :
      v < 3 ? 'Ještě vyhovuje (min. 1,6 mm), ale na mokru se brzdná dráha prodlužuje. Zvažte výměnu.' : 'Vyhovuje, zákon žádá aspoň 1,6 mm.';
    vZ.querySelector('p').textContent = zima ? 'Vyhovuje, zimní pneumatiky musí mít aspoň 4 mm.' : 'Na zimu už nevyhovuje. Zimní pneumatiky musí mít aspoň 4 mm.';
  }
  if (svg && hl) {
    sestavit(); nastav(+hl.value);
    hl.addEventListener('input', function () { nastav(+hl.value); });
  }

  if (!hasG) { document.documentElement.classList.remove('js'); return; }
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', function () { gsap.set('[data-r],[data-h]', { clearProps: 'all' }); });
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    gsap.set('[data-r]', { opacity: 0, y: 28 });
    ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
      gsap.to(b, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .08, overwrite: true });
    } });

    var pneu = document.getElementById('pneu');
    if (!pneu) afterIntro(function () { gsap.to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .08, ease: 'expo.out' }); });
    if (pneu) {
      /* pneumatika se přikutálí zprava: posun odpovídá otočení (obvod kola) */
      gsap.set(pneu, { opacity: 0, x: 220, rotation: 70 });
      var mes = gsap.utils.toArray('#mesice span');
      gsap.set(mes, { scaleY: 0 });
      gsap.set('#dnes', { opacity: 0, y: -12 });
      afterIntro(function () {
        gsap.timeline()
          .to('[data-h]', { opacity: 1, y: 0, duration: .9, stagger: .08, ease: 'expo.out' })
          .to(pneu, { opacity: 1, x: 0, rotation: 0, duration: 1.4, ease: 'power3.out' }, .1)
          .to(mes, { scaleY: 1, duration: .45, stagger: .035, ease: 'power2.out' }, .5)
          .to('#dnes', { opacity: 1, y: 0, duration: .4, ease: 'back.out(2)' }, '-=.1');
      });
      /* při rolování se kolo dál otáčí, jako by jelo */
      gsap.to('#pneu-svg', { rotation: 200, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .5 } });
    }

    /* dezén se „sjede“: jezdec při prvním zobrazení klesne z nové pneu na 5 mm */
    if (hl) {
      var stavH = { v: 8.5 };
      nastav(stavH.v); hl.value = stavH.v;
      ScrollTrigger.create({ trigger: '.meridlo', start: 'top 70%', once: true, onEnter: function () {
        gsap.to(stavH, { v: 5, duration: 1.6, ease: 'power2.inOut', onUpdate: function () { var v = Math.round(stavH.v * 10) / 10; hl.value = v; nastav(v); } });
      } });
      hl.addEventListener('pointerdown', function () { gsap.killTweensOf(stavH); });
    }

    var pasImg = document.getElementById('pas-img');
    if (pasImg) gsap.fromTo(pasImg, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: pasImg.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  var rt;
  function refresh() { clearTimeout(rt); rt = setTimeout(function () { ScrollTrigger.refresh(); }, 160); }
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
