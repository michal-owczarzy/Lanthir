/* Zahradnictví Poruba: stav otevřeno/zavřeno, váha s nákupním lístkem, odeslání lístku. */
(function () {
  var Z = window.ZP, W = window.W || {}, L = Z.nacti();
  var jmena = {}; Z.POL.forEach(function (p) { jmena[p.id] = p; });

  /* otevřeno teď? */
  var s = W.stav ? W.stav(Z.HOD) : null;
  if (s) document.querySelectorAll('.stav').forEach(function (el) {
    el.classList.toggle('otevreno', s.otevreno);
    el.querySelector('.stav-text').textContent = s.text;
  });
  var dnes = new Date().getDay();
  var tr = document.querySelector('.tyden tr[data-d="' + dnes + '"]');
  if (tr) { tr.classList.add('dnes'); tr.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="dnes-lbl">dnes</span>'); }

  function celkem() { var t = 0; for (var k in L) t += L[k]; return t; }
  var pocet = document.getElementById('pocet');
  function hlavicka() {
    var n = Object.keys(L).length;
    if (!pocet) return;
    if (pocet.textContent !== String(n)) {
      pocet.textContent = n;
      pocet.classList.remove('hop'); void pocet.offsetWidth; pocet.classList.add('hop');
    }
    pocet.parentNode.classList.toggle('plny', n > 0);
  }

  /* ===== úvodní stránka: váha ===== */
  var kg = document.getElementById('kg'), seznam = document.getElementById('v-seznam'), shown = { v: 0 };
  function vaha() {
    var t = celkem();
    if (kg) {
      if (W.hasG && !W.RM) gsap.to(shown, { v: t, duration: .5, ease: 'power2.out', onUpdate: function () { kg.textContent = Z.kg(shown.v); } });
      else kg.textContent = Z.kg(t);
    }
    if (seznam) {
      var ids = Object.keys(L);
      seznam.innerHTML = ids.length ? ids.map(function (id) { return '<li><span>' + jmena[id].n + '</span><b class="num">' + Z.kg(L[id]) + ' kg</b></li>'; }).join('')
        : '<li class="prazdno">Zatím nic. Přidejte zeleninu tlačítkem +.</li>';
    }
    document.querySelectorAll('.polozka').forEach(function (li) {
      var v = L[li.dataset.id] || 0;
      li.querySelector('output').textContent = Z.kg(v) + ' kg';
      li.classList.toggle('vybrano', v > 0);
    });
    hlavicka();
  }
  document.querySelectorAll('.polozka').forEach(function (li) {
    var p = jmena[li.dataset.id];
    li.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var v = (L[p.id] || 0) + (b.classList.contains('plus') ? p.k : -p.k);
      if (v <= 0) delete L[p.id]; else L[p.id] = v;
      Z.uloz(L); vaha();
      if (b.classList.contains('plus') && W.hasG && !W.RM) {
        gsap.fromTo(li.querySelector('figure img'), { scale: 1.06 }, { scale: 1, duration: .5, ease: 'power3.out' });
        var lcd = document.querySelector('.lcd');
        if (lcd) gsap.fromTo(lcd, { y: 3 }, { y: 0, duration: .45, ease: 'back.out(3)' });
      }
    });
  });
  vaha();

  /* ===== stránka lístku ===== */
  var form = document.getElementById('lform');
  if (!form) return;
  var ls = document.getElementById('l-seznam'), pr = document.getElementById('l-prazdno'), add = document.getElementById('pridat'), sou = document.getElementById('soucet');
  document.getElementById('datum').textContent = new Date().toLocaleDateString('cs-CZ');
  function kresli() {
    var ids = Object.keys(L);
    ls.innerHTML = ids.map(function (id) {
      return '<li data-id="' + id + '"><img class="mini" src="../img/' + id + '-800.jpg" alt="" width="56" height="56" loading="lazy"><span class="n">' + jmena[id].n + '</span><span class="kroky"><button type="button" class="minus" aria-label="Ubrat ' + jmena[id].n + '">−</button><b class="num">' + Z.kg(L[id]) + ' kg</b><button type="button" class="plus" aria-label="Přidat ' + jmena[id].n + '">+</button></span></li>';
    }).join('');
    pr.hidden = ids.length > 0;
    add.innerHTML = Z.POL.filter(function (p) { return !L[p.id]; }).map(function (p) { return '<button type="button" class="cip" data-id="' + p.id + '">+ ' + p.n + '</button>'; }).join('');
    sou.textContent = Z.kg(celkem()) + ' kg';
    hlavicka();
  }
  ls.addEventListener('click', function (e) {
    var b = e.target.closest('button'), li = e.target.closest('li'); if (!b || !li) return;
    var p = jmena[li.dataset.id], v = (L[p.id] || 0) + (b.classList.contains('plus') ? p.k : -p.k);
    if (v <= 0) delete L[p.id]; else L[p.id] = v;
    Z.uloz(L); kresli();
  });
  add.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    L[b.dataset.id] = jmena[b.dataset.id].k; Z.uloz(L); kresli();
    var li = ls.querySelector('[data-id="' + b.dataset.id + '"]');
    if (li && W.hasG && !W.RM) gsap.from(li, { x: -16, opacity: 0, duration: .45, ease: 'power3.out' });
  });
  /* dny vyzvednutí: nejbližší otevřené dny */
  var dny = document.getElementById('dny'), d = new Date(), out = [], nazvy = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
  for (var i = 0; out.length < 6 && i < 14; i++) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    if (i === 0 && Z.HOD[x.getDay()] && d.getHours() >= Z.HOD[x.getDay()][1] - 1) continue;
    if (Z.HOD[x.getDay()]) out.push('<button type="button" class="cip" aria-pressed="false">' + nazvy[x.getDay()] + ' ' + x.getDate() + '. ' + (x.getMonth() + 1) + '.</button>');
  }
  dny.innerHTML = out.join('');
  dny.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    dny.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ids = Object.keys(L);
    if (!ids.length) { form.classList.remove('chyba'); void form.offsetWidth; form.classList.add('chyba'); W.toast('Lístek je prázdný, přidejte zeleninu'); return; }
    var den = dny.querySelector('[aria-pressed="true"]'), j = document.getElementById('jmeno').value.trim();
    var r = ['Dobrý den,', 'prosím o připravení:'];
    ids.forEach(function (id) { r.push('- ' + jmena[id].n + ': ' + Z.kg(L[id]) + ' kg'); });
    if (den) r.push('Přijdu ' + den.textContent + '.');
    if (j) r.push(j);
    var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
    if (k === 'sms') { location.href = 'sms:' + Z.TEL + '?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s lístkem'); }
    else { location.href = 'mailto:' + Z.MAIL + '?subject=' + encodeURIComponent('Nákupní lístek') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s lístkem'); }
  });
  kresli();
})();

/* pohyb: banner se „napne“, fotka stánku se odkryje */
(function () {
  var W = window.W || {};
  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    var f = document.querySelector('.hero-foto img');
    if (f) gsap.fromTo(f, { clipPath: 'inset(0 0 100% 0)', scale: 1.08 }, { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.2, ease: 'power3.inOut', delay: .15 });
    gsap.from('.banner .b2', { letterSpacing: '0.12em', duration: 1.3, ease: 'expo.out', delay: .1 });
  });
  if (document.getElementById('lform')) afterIntro(function () {
    gsap.from('.l-seznam li, #pridat .cip, #dny .cip', { y: 14, opacity: 0, duration: .5, stagger: .04, ease: 'power2.out', delay: .35, clearProps: 'all' });
    gsap.fromTo('.l-foto img', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power3.inOut', delay: .2 });
  });
  gsap.utils.toArray('.s-fotky img').forEach(function (im, i) {
    gsap.fromTo(im, { yPercent: 6 + i * 4 }, { yPercent: -4, ease: 'none', scrollTrigger: { trigger: '.sadba', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
})();
