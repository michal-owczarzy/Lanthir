/* MALÝ E-SHOP: katalog náramků (kreslené náhledy), velikost S/M/L, košík v localStorage,
   panel košíku zprava, objednávka e-mailem s výběrem vyzvednutí v salonu nebo pošty. */
(function () {
  var katalog = document.getElementById('katalog');
  if (!katalog) return;
  var KLIC = 'ruzovka-kosik', G = RZ.hasG && !RZ.RM, kosik = [];
  try { kosik = JSON.parse(localStorage.getItem(KLIC)) || []; } catch (e) {}
  function ulozit() { try { localStorage.setItem(KLIC, JSON.stringify(kosik)); } catch (e) {} }
  function najdi(id) { return RZ.NARAMKY.filter(function (n) { return n.id === id; })[0]; }

  katalog.innerHTML = RZ.NARAMKY.map(function (n) {
    return '<article class="produkt" data-r data-id="' + n.id + '"><div class="nahled" style="--p:' + n.p + '">' + RZ.svg(n) + '</div><div class="telo">' +
      '<h3>' + n.n + '</h3><p>' + n.t + '</p><p class="cena num">' + RZ.kc(n.cena) + '</p>' +
      '<div class="velikost" role="group" aria-label="Velikost"><button type="button" aria-pressed="false">S</button><button type="button" aria-pressed="true">M</button><button type="button" aria-pressed="false">L</button></div>' +
      '<button type="button" class="btn pridat">Do košíku</button></div></article>';
  }).join('');

  var panel = document.getElementById('kosik'), zavoj = document.getElementById('zavoj'), pocet = document.getElementById('kosik-n');
  function otevrit(ano) { panel.classList.toggle('on', ano); zavoj.classList.toggle('on', ano); panel.setAttribute('aria-hidden', String(!ano)); if (ano) document.getElementById('kosik-zav').focus(); }
  function prekreslit() {
    var n = kosik.reduce(function (s, p) { return s + p.ks; }, 0), suma = 0;
    pocet.textContent = n;
    var pol = document.getElementById('polozky');
    pol.innerHTML = kosik.length ? kosik.map(function (p, i) {
      var nr = najdi(p.id); suma += nr.cena * p.ks;
      return '<div class="polozka"><span class="m" style="background:' + nr.p + '">' + RZ.svg(nr) + '</span><span><b>' + nr.n + '</b><small>velikost ' + p.v + ' · ' + p.ks + ' ks</small></span><span><span class="num">' + RZ.kc(nr.cena * p.ks) + '</span><br><button type="button" data-i="' + i + '">Odebrat</button></span></div>';
    }).join('') : '<p class="prazdny">Košík je zatím prázdný.</p>';
    document.getElementById('soucet').textContent = RZ.kc(suma);
  }
  katalog.addEventListener('click', function (e) {
    var vb = e.target.closest('.velikost button');
    if (vb) { vb.parentNode.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === vb)); }); return; }
    var pr = e.target.closest('.pridat'); if (!pr) return;
    var karta = pr.closest('.produkt'), id = karta.dataset.id, v = karta.querySelector('.velikost [aria-pressed="true"]').textContent;
    var ex = kosik.filter(function (p) { return p.id === id && p.v === v; })[0];
    if (ex) ex.ks++; else kosik.push({ id: id, v: v, ks: 1 });
    ulozit(); prekreslit();
    RZ.toast(najdi(id).n + ' (' + v + ') je v košíku');
    if (G) {
      /* korálkový náhled „skočí“ do ikony košíku */
      var src = karta.querySelector('.nahled svg').getBoundingClientRect(), cil = document.getElementById('kosik-b').getBoundingClientRect();
      var kl = karta.querySelector('.nahled svg').cloneNode(true);
      kl.style.cssText = 'position:fixed;z-index:99;left:' + src.left + 'px;top:' + src.top + 'px;width:' + src.width + 'px;height:' + src.height + 'px;pointer-events:none';
      document.body.appendChild(kl);
      gsap.to(kl, { x: cil.left + cil.width / 2 - src.left - src.width / 2, y: cil.top + cil.height / 2 - src.top - src.height / 2, scale: .12, rotation: 200, duration: .7, ease: 'power3.in', onComplete: function () { kl.remove(); gsap.fromTo('#kosik-b', { scale: 1.25 }, { scale: 1, duration: .4, ease: 'back.out(3)' }); } });
    }
  });
  document.getElementById('polozky').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]'); if (!b) return;
    kosik.splice(+b.dataset.i, 1); ulozit(); prekreslit();
  });
  document.getElementById('kosik-b').addEventListener('click', function () { otevrit(true); });
  document.getElementById('kosik-zav').addEventListener('click', function () { otevrit(false); });
  zavoj.addEventListener('click', function () { otevrit(false); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape') otevrit(false); });
  var dor = document.getElementById('doruceni');
  dor.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (b) dor.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); });
  document.getElementById('objednat').addEventListener('click', function () {
    if (!kosik.length) { RZ.toast('Košík je prázdný'); return; }
    var r = ['Dobrý den,', 'objednávám náramky:', ''], suma = 0;
    kosik.forEach(function (p) { var n = najdi(p.id); suma += n.cena * p.ks; r.push('• ' + n.n + ', velikost ' + p.v + ', ' + p.ks + ' ks'); });
    r.push('', 'Celkem: ' + RZ.kc(suma), 'Doručení: ' + dor.querySelector('[aria-pressed="true"]').textContent);
    location.href = 'mailto:' + RZ.MAIL + '?subject=' + encodeURIComponent('Objednávka náramků') + '&body=' + encodeURIComponent(r.join('\n'));
    RZ.toast('Otevírám e-mail s objednávkou');
  });
  prekreslit();
  if (G) afterIntro(function () {
    gsap.from('.e-fotky img', { clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .1, ease: 'power3.inOut', delay: .15 });
    gsap.from('.produkt', { opacity: 0, y: 30, duration: .7, stagger: .06, ease: 'expo.out', delay: .3, clearProps: 'transform,opacity' });
    gsap.from('.produkt .nahled svg', { rotation: -90, scale: .7, duration: 1.1, stagger: .06, ease: 'power3.out', delay: .35, clearProps: 'transform' });
  });
})();
