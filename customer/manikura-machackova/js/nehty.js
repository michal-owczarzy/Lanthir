/* ZKOUŠKA LAKU: kreslená ruka, nehty se přelakují tahem štětce od kůžičky ke špičce,
   prst po prstu. Volba barvy a tvaru se předá do objednávky (?barva=&tvar=). */
(function () {
  var ruka = document.getElementById('ruka');
  if (!ruka) return;
  var G = MC.hasG && !MC.RM, barva = 'kobalt', tvar = 'mandle';
  var PRSTY = [[80, 74, 38, 186], [124, 48, 40, 212], [170, 64, 37, 196], [212, 110, 31, 148]];
  var palec = [24, 176, 40, 118];
  function sestavit() {
    var h = '<svg viewBox="0 0 280 380">';
    h += '<g transform="rotate(-32 44 236)"><rect class="kuze" x="' + palec[0] + '" y="' + palec[1] + '" width="' + palec[2] + '" height="' + palec[3] + '" rx="20"/>' + nehty([palec]) + '</g>';
    h += '<rect class="kuze" x="74" y="206" width="172" height="174" rx="58"/>';
    PRSTY.forEach(function (p) { h += '<rect class="kuze" x="' + p[0] + '" y="' + p[1] + '" width="' + p[2] + '" height="' + p[3] + '" rx="' + p[2] / 2 + '"/>'; });
    PRSTY.forEach(function (p) { h += '<path class="stin" d="M' + (p[0] + 9) + ' ' + (p[1] + p[3] * .55) + 'h' + (p[2] - 18) + '" stroke="#dfb9a2" stroke-width="2" stroke-linecap="round"/>'; });
    h += nehty(PRSTY);
    ruka.innerHTML = h + '</svg>';
  }
  function nehty(seznam) {
    return seznam.map(function (p) {
      var d = MC.nehet(p[0] + 6, p[1] + 8, p[2] - 12, tvar);
      return '<path class="zaklad" d="' + d + '"/><path class="lak" d="' + d + '" fill="' + MC.najdi(barva).c + '"/>' +
        '<path d="M' + (p[0] + 11) + ' ' + (p[1] + 18) + 'q2 -4 5 -5" stroke="#fff" stroke-opacity=".55" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
    }).join('');
  }
  function nalakovat(anim) {
    var laky = ruka.querySelectorAll('.lak'), c = MC.najdi(barva).c;
    laky.forEach(function (l) { l.setAttribute('fill', c); });
    if (G && anim) gsap.fromTo(laky, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .45, stagger: .09, ease: 'power2.out' });
  }
  function popis() {
    document.getElementById('vybrano').innerHTML = MC.najdi(barva).n + ' <span>· ' + MC.TVARY[tvar] + '</span>';
    document.getElementById('cta').href = 'objednat/?barva=' + barva + '&tvar=' + tvar;
  }
  var barvy = document.getElementById('barvy');
  barvy.innerHTML = MC.BARVY.map(function (b) { return '<button type="button" class="barva" style="background:' + b.c + '" data-id="' + b.id + '" aria-pressed="' + (b.id === barva) + '" aria-label="' + b.n + '"></button>'; }).join('');
  barvy.addEventListener('click', function (e) {
    var b = e.target.closest('.barva'); if (!b || b.dataset.id === barva) return;
    barvy.querySelectorAll('.barva').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    barva = b.dataset.id; nalakovat(true); popis();
  });
  document.getElementById('tvary').addEventListener('click', function (e) {
    var b = e.target.closest('.tvar'); if (!b || b.dataset.t === tvar) return;
    this.querySelectorAll('.tvar').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    tvar = b.dataset.t; sestavit(); nalakovat(false); popis();
    if (G) gsap.from(ruka.querySelectorAll('.zaklad,.lak'), { scale: .8, transformOrigin: '50% 100%', duration: .35, ease: 'back.out(2)' });
  });
  sestavit(); popis();
  if (G) { gsap.set(ruka.querySelectorAll('.lak'), { clipPath: 'inset(100% 0% 0% 0%)' }); afterIntro(function () { setTimeout(function () { nalakovat(true); }, 650); }); }
})();
