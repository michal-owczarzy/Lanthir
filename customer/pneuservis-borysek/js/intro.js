/* ÚVODNÍ ANIMACE LOGA (stejný princip jako na lanthir.cz)
   Stránka se otevře na ploše v barvě hlavičky, na ní jen logo. Tahy značky se
   nakreslí (stroke-dashoffset přes pathLength="1"), výplně naskočí, písmena názvu
   vyjedou zpoza účaří. Pak logo odletí přesně na místo loga v hlavičce, plocha se
   rozplyne a teprve potom začne vstupní animace úvodu.

   Rozhoduje <head> (třída intro-on): jen první stránka v relaci, nikdy s omezeným
   pohybem a nikdy při příchodu na kotvu (#kontakt). ?intro=1 ji vynutí (předvádění),
   ?nointro ji vypne. Jakýkoli vstup (klik, klávesa, kolečko) ji zrychlí na přistání.

   Značení:
   .intro[data-scale]       pevné zvětšení (jinak se dopočítá podle šířky okna)
   [data-intro-land]        cíl přistání; bez vlastního .intro-lock se naklonuje
   .intro-lock              vlastní sestava (když má úvod víc než cíl, třeba prstenec)
   .intro-fly               prvek, který přistává (výchozí = celé .intro-lock)
   .intro-only              části sestavy, které se při odletu rozplynou
   .d  tah, který se kreslí (potřebuje pathLength="1")     .f  výplň, která naskočí
   .w  slovo, jehož písmena vyjedou
   window.INTRO_EXTRA(tl, root, lock)  vlastní kroky webu, vloží se před vyjetí slova
   ?t=N zastaví časovou osu v čase N (kontrola jednotlivých snímků)               */
(function () {
  var html = document.documentElement;
  var root = document.getElementById('intro');
  var revealed = false, finished = false;

  function reveal() {
    if (revealed) return;
    revealed = true;
    dispatchEvent(new Event('intro:reveal'));
  }
  function finish() {
    if (finished) return;
    finished = true;
    reveal();
    html.classList.remove('intro-on', 'intro-landed');
    html.style.overflow = '';
    if (root && root.parentNode) root.parentNode.removeChild(root);
    dispatchEvent(new Event('intro:done'));
  }
  /* stránka si tím odloží vstupní animaci úvodu, dokud logo nepřistane */
  window.afterIntro = function (fn) {
    if (revealed || !html.classList.contains('intro-on')) fn();
    else addEventListener('intro:reveal', fn, { once: true });
  };

  var target = document.querySelector('[data-intro-land]');
  /* bez GSAP nebo na kartě otevřené na pozadí (rAF tam stojí) úvod rovnou vynech */
  if (!root || !target || !html.classList.contains('intro-on') || !window.gsap || document.hidden) { finish(); return; }
  html.style.overflow = 'hidden';
  setTimeout(finish, 7000);   /* pojistka: stránka se nikdy nezasekne pod úvodem */

  function build() {
    var lock = root.querySelector('.intro-lock');
    if (!lock) {
      /* klon cíle: stejné značení i CSS, takže přistane typ na typ */
      lock = document.createElement('div');
      lock.className = target.className + ' intro-lock';
      lock.innerHTML = target.innerHTML;
      lock.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
      root.appendChild(lock);
    }
    var fly = lock.querySelector('.intro-fly') || lock;

    /* zvětšení: sestava je přesný násobek cíle, let je tedy jedno rovnoměrné měřítko */
    var fs = parseFloat(getComputedStyle(target).fontSize);
    var tw = target.getBoundingClientRect().width || 150;
    var S = parseFloat(root.dataset.scale) || Math.max(1.4, Math.min(3.4, (innerWidth * 0.7) / tw));
    fly.style.fontSize = (fs * S).toFixed(2) + 'px';

    /* písmena slova, každé ve vlastní masce */
    lock.querySelectorAll('.w').forEach(function (w) {
      var txt = w.textContent;
      w.textContent = '';
      Array.prototype.forEach.call(txt, function (ch) {
        var m = document.createElement('span'), s = document.createElement('span');
        m.className = 'intro-m';
        s.textContent = ch === ' ' ? ' ' : ch;
        m.appendChild(s);
        w.appendChild(m);
      });
    });

    var ground = root.querySelector('.intro-ground');
    var draws = lock.querySelectorAll('.d'), fills = lock.querySelectorAll('.f'), letters = lock.querySelectorAll('.intro-m > span');
    /* skutečná délka tahu (GSAP zaokrouhluje px, s pathLength="1" by tah jen přeskočil) */
    Array.prototype.forEach.call(draws, function (el) {
      var L = Math.ceil(el.getTotalLength()) + 1;
      el.removeAttribute('pathLength');
      gsap.set(el, { strokeDasharray: L + ' ' + L, strokeDashoffset: L });
    });
    gsap.set(fills, { opacity: 0, scale: .6, transformOrigin: '50% 50%' });
    gsap.set(letters, { yPercent: 150 });
    root.classList.add('ready');

    /* geometrie letu se měří až v okamžiku odletu */
    var geo = null;
    function g() {
      if (!geo) {
        var a = fly.getBoundingClientRect(), b = target.getBoundingClientRect();
        geo = { x: b.left - a.left, y: b.top - a.top, k: b.width / a.width };
      }
      return geo;
    }

    var tl = gsap.timeline({ delay: .2, defaults: { ease: 'power3.out' } });
    if (draws.length) tl.to(draws, { strokeDashoffset: 0, duration: .9, ease: 'power2.inOut', stagger: .14 });
    if (fills.length) tl.to(fills, { opacity: 1, scale: 1, duration: .45, ease: 'back.out(2)', stagger: .06 }, draws.length ? '-=.3' : 0);
    if (typeof window.INTRO_EXTRA === 'function') window.INTRO_EXTRA(tl, root, lock);
    tl.to(letters, { yPercent: 0, duration: .62, stagger: .035 }, draws.length ? '-=.55' : 0)
      .addLabel('fly', '+=.35')
      .to(fly, { x: function () { return g().x; }, y: function () { return g().y; }, scale: function () { return g().k; }, transformOrigin: '0 0', duration: .95, ease: 'power3.inOut' }, 'fly')
      .to(lock.querySelectorAll('.intro-only'), { opacity: 0, scale: 1.2, transformOrigin: '50% 50%', duration: .6, ease: 'power2.in' }, 'fly')
      .to(ground, { opacity: 0, duration: .8, ease: 'power2.inOut' }, 'fly+=.3')
      .add(reveal, 'fly+=.35')
      .add(function () { html.classList.add('intro-landed'); }, 'fly+=.9')
      .to(fly, { opacity: 0, duration: .22, ease: 'none' }, 'fly+=.98')
      .add(finish);

    /* přeskočit na přání: kdo klikne nebo píše, nechce čekat */
    var ev = ['pointerdown', 'keydown', 'wheel', 'touchstart'];
    var skip = function () {
      ev.forEach(function (e) { removeEventListener(e, skip); });
      if (tl.time() < tl.labels.fly) tl.seek('fly');
      tl.timeScale(1.8);
    };
    ev.forEach(function (e) { addEventListener(e, skip, { passive: true }); });

    var t = new URLSearchParams(location.search).get('t');
    if (t !== null) { tl.pause(); tl.seek(parseFloat(t), false); }
    window.__introTl = tl;
  }

  /* písmo musí být načtené, jinak by se slovo při vyjetí přeskládalo */
  var started = false;
  var go = function () { if (!started) { started = true; build(); } };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
  setTimeout(go, 1200);
})();
