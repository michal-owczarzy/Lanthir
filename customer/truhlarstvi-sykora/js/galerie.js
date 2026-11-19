/* GALERIE: filtr přeskládá dlaždice přes View Transition (každá dlaždice
   doklouže na nové místo), klik na fotku ji zvětší do dialogu stejným přechodem. */
(function () {
  var filtr = document.getElementById('filtr'), mrizka = document.getElementById('mrizka');
  var h1 = document.getElementById('g-h1'), p = document.getElementById('g-p');
  var dlazdice = [].slice.call(mrizka.querySelectorAll('button'));
  var vse = SY.vse();
  var VT = !!document.startViewTransition && !SY.RM;
  var UVOD = 'Kuchyně, schody, skříně a dveře, které už slouží v domech a bytech.';

  function prechod(zmena, pojmenovat, uklidit) {
    if (!VT) { zmena(); return; }
    pojmenovat && pojmenovat();
    var t = document.startViewTransition(function () { zmena(); });
    t.finished.finally(function () { uklidit && uklidit(); });
  }

  /* ---- filtr ---- */
  function jmenaDlazdic(ano) {
    dlazdice.forEach(function (d, i) {
      d.style.viewTransitionName = ano && !d.hidden ? 'g' + i : '';
      d.style.viewTransitionClass = ano ? 'dlazdice' : '';
    });
  }
  filtr.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b || b.getAttribute('aria-pressed') === 'true') return;
    if (SY.ukazVse) SY.ukazVse();
    var k = b.dataset.k, K = SY.KAT.filter(function (x) { return x.id === k; })[0];
    prechod(function () {
      filtr.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      dlazdice.forEach(function (d, i) {
        d.hidden = !!k && d.dataset.k !== k;
        if (VT) d.style.viewTransitionName = d.hidden ? '' : 'g' + i;
      });
      h1.textContent = K ? K.n : 'Realizace';
      p.textContent = K ? K.popis : UVOD;
      h1.dataset.vtCil = K ? K.id : 'vse';
    }, function () { jmenaDlazdic(true); }, function () { jmenaDlazdic(false); });
    try { history.replaceState(null, '', k ? '?kat=' + k : './'); } catch (x) {}
    var top = filtr.getBoundingClientRect().top;
    if (top < 60) scrollTo({ top: scrollY + mrizka.getBoundingClientRect().top - 160, behavior: SY.RM ? 'auto' : 'smooth' });
  });

  /* ---- světelný box ---- */
  var dlg = document.getElementById('svetlo'), img = document.getElementById('sv-img');
  var svN = document.getElementById('sv-n'), svC = document.getElementById('sv-c');
  var akt = -1;
  function viditelne() { return dlazdice.filter(function (d) { return !d.hidden; }); }
  function nastav(i) {
    var f = vse[i]; akt = i;
    img.src = '../img/' + f.s + '-1024.jpg'; img.alt = f.alt;
    img.width = Math.min(f.w, 1024); img.height = Math.round(Math.min(f.w, 1024) * f.h / f.w);
    svN.textContent = f.alt;
    var v = viditelne(), poz = v.indexOf(dlazdice[i]) + 1;
    svC.textContent = poz + ' / ' + v.length;
  }
  function otevrit(i) {
    var palec = dlazdice[i].querySelector('img');
    prechod(function () {
      palec.style.viewTransitionName = '';
      nastav(i);
      dlg.showModal();
    }, function () { palec.style.viewTransitionName = 'velka'; });
    if (!VT) nastav(i);
  }
  function zavrit() {
    var palec = dlazdice[akt] && dlazdice[akt].querySelector('img');
    var r = palec && palec.getBoundingClientRect();
    var videt = r && r.bottom > 0 && r.top < innerHeight;
    prechod(function () {
      dlg.close();
      if (videt) palec.style.viewTransitionName = 'velka';
    }, null, function () { if (palec) palec.style.viewTransitionName = ''; });
    if (palec) setTimeout(function () { dlazdice[akt] && dlazdice[akt].focus({ preventScroll: true }); }, 0);
  }
  function posun(o) {
    var v = viditelne(), j = v.indexOf(dlazdice[akt]);
    var n = v[(j + o + v.length) % v.length];
    var i = dlazdice.indexOf(n);
    if (window.gsap && !SY.RM) {
      gsap.to(img, { opacity: 0, x: -24 * o, duration: .14, ease: 'power1.in', onComplete: function () {
        nastav(i);
        gsap.fromTo(img, { opacity: 0, x: 24 * o }, { opacity: 1, x: 0, duration: .3, ease: 'power3.out' });
      } });
    } else nastav(i);
  }
  mrizka.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    otevrit(+b.dataset.i);
  });
  document.getElementById('sv-zav').addEventListener('click', zavrit);
  document.getElementById('sv-pred').addEventListener('click', function () { posun(-1); });
  document.getElementById('sv-dal').addEventListener('click', function () { posun(1); });
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); zavrit(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) zavrit(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') posun(1);
    if (e.key === 'ArrowLeft') posun(-1);
  });
  /* tažení prstem do stran listuje */
  var sx = null;
  img.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  img.addEventListener('pointerup', function (e) {
    if (sx === null) return;
    var d = e.clientX - sx; sx = null;
    if (Math.abs(d) > 50) posun(d < 0 ? 1 : -1);
  });

  /* nadpis a filtr vyjedou ve web.js, tady jen první řada dlaždic */
  if (!SY.hasG) return;
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', function () {
    /* dlaždice najíždějí po řadách; po prvním filtrování už jen kloužou přes View Transition */
    gsap.set(dlazdice, { opacity: 0, y: 34 });
    var spousteci = [];
    afterIntro(function () {
      spousteci = ScrollTrigger.batch(dlazdice, { start: 'top 94%', once: true, onEnter: function (b) {
        gsap.to(b, { opacity: 1, y: 0, duration: .8, stagger: .07, ease: 'expo.out', overwrite: true });
      } });
    });
    SY.ukazVse = function () {
      spousteci.forEach(function (t) { t.kill(); }); spousteci = [];
      gsap.set(dlazdice, { clearProps: 'opacity,transform' });
    };
  });
})();
