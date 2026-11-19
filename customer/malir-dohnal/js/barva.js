/* ZKOUŠKA BARVY: pokoj v perspektivě, stěny se přemalují tahem válečku zleva doprava.
   Plocha k vymalování: stěny 2 × (délka + šířka) × výška minus okna (1,5 m²) a dveře (1,6 m²),
   volitelně strop. Poptávka odchází SMS nebo e-mailem i s odstínem a rozměry. */
(function () {
  var svg = document.getElementById('pokoj');
  if (!svg) return;
  var G = !!(window.gsap && DH.hasG) && !DH.RM;
  var aktualni = null, beh = false;

  /* ---- pokoj ---- */
  var podlaha = '';
  [215, 260, 305, 350, 395, 440, 485, 530, 575].forEach(function (x) {
    var fx = 400 + (x - 400) * 1.952;
    podlaha += '<line x1="' + x + '" y1="382" x2="' + fx.toFixed(1) + '" y2="520"/>';
  });
  var vzory = DH.BARVY.filter(function (b) { return b.t; }).map(function (b) {
    return '<pattern id="tex-' + b.id + '" patternUnits="userSpaceOnUse" width="800" height="520"><image href="../img/' + b.t + '-800.jpg" width="800" height="600" preserveAspectRatio="xMidYMid slice"/></pattern>';
  }).join('');
  svg.innerHTML =
    '<defs>' + vzory +
      '<g id="steny"><rect x="180" y="92" width="440" height="290"/><polygon points="0,0 180,92 180,382 0,520"/><polygon points="800,0 620,92 620,382 800,520"/></g>' +
      '<clipPath id="tah"><rect id="tah-r" x="0" y="0" width="0" height="520"/></clipPath>' +
    '</defs>' +
    '<polygon points="0,0 800,0 620,92 180,92" fill="#fbfbf8"/>' +
    '<use href="#steny" id="vrstva-a" fill="#d29d4b"/>' +
    '<use href="#steny" id="vrstva-b" fill="#d29d4b" clip-path="url(#tah)"/>' +
    '<polygon points="0,0 180,92 180,382 0,520" fill="#000" opacity=".07"/>' +
    '<polygon points="800,0 620,92 620,382 800,520" fill="#000" opacity=".13"/>' +
    '<polygon points="0,520 180,382 620,382 800,520" fill="#c7a079"/>' +
    '<g stroke="#000" stroke-opacity=".09" stroke-width="2">' + podlaha + '</g>' +
    '<rect x="180" y="372" width="440" height="10" fill="#f6f5f1"/>' +
    '<polygon points="0,506 180,374 180,382 0,520" fill="#f2f1ec"/>' +
    '<polygon points="800,506 620,374 620,382 800,520" fill="#e3e2dc"/>' +
    /* okno */
    '<rect x="328" y="138" width="144" height="142" fill="#dce9f1" stroke="#f7f6f2" stroke-width="10"/>' +
    '<path d="M400 138v142M328 209h144" stroke="#f7f6f2" stroke-width="6"/>' +
    '<rect x="318" y="282" width="164" height="9" fill="#f7f6f2"/>' +
    /* dveře v levé stěně */
    '<polygon points="50,140 120,153 120,428 50,482" fill="#f7f6f2" stroke="#d9d7d0" stroke-width="2"/>' +
    '<circle cx="111" cy="296" r="4.5" fill="#8b8a85"/>' +
    /* pohovka pro měřítko */
    '<rect x="262" y="318" width="276" height="56" rx="10" fill="#6f7276"/>' +
    '<rect x="262" y="296" width="276" height="40" rx="12" fill="#7e8185"/>' +
    '<rect x="246" y="312" width="26" height="62" rx="9" fill="#6a6d71"/><rect x="528" y="312" width="26" height="62" rx="9" fill="#6a6d71"/>' +
    '<rect x="270" y="372" width="10" height="12" fill="#3a3c3f"/><rect x="520" y="372" width="10" height="12" fill="#3a3c3f"/>' +
    /* váleček */
    '<g id="valec" opacity="0"><path d="M14 52h10v40l-16 70" fill="none" stroke="#2e333a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><rect x="-6" y="-8" width="22" height="120" rx="8" fill="#f2f0ea" stroke="#2e333a" stroke-width="4"/><rect id="valec-b" x="-2" y="-4" width="14" height="112" rx="6" fill="#d29d4b"/></g>';

  var vrA = document.getElementById('vrstva-a'), vrB = document.getElementById('vrstva-b');
  var tahR = document.getElementById('tah-r'), valec = document.getElementById('valec'), valecB = document.getElementById('valec-b');
  var nazev = document.getElementById('odstin-n');
  function vypln(b) { return b.t ? 'url(#tex-' + b.id + ')' : b.c; }

  function natrit(id, animovat) {
    var b = DH.najdi(id); if (!b || beh) return;
    nazev.textContent = b.n;
    document.querySelectorAll('.vzorek').forEach(function (v) { v.setAttribute('aria-pressed', String(v.dataset.id === id)); });
    aktualni = b;
    if (!G || !animovat) { vrA.setAttribute('fill', vypln(b)); return; }
    beh = true;
    vrB.setAttribute('fill', vypln(b));
    valecB.setAttribute('fill', b.c || (b.id === 'sterka-okr' ? '#c99a52' : '#9a9a96'));
    var s = { x: 0 };
    gsap.set(valec, { opacity: 1, x: -20, y: 150 });
    gsap.timeline({ onComplete: function () {
      vrA.setAttribute('fill', vypln(b)); tahR.setAttribute('width', 0); beh = false;
    } })
      .to(s, { x: 820, duration: 1.15, ease: 'power1.inOut', onUpdate: function () {
        tahR.setAttribute('width', s.x);
        gsap.set(valec, { x: s.x - 6, y: 150 + Math.sin(s.x / 60) * 70 });
      } })
      .to(valec, { opacity: 0, duration: .2 }, '-=.15');
  }

  /* ---- vzorky ---- */
  var vzorky = document.getElementById('vzorky');
  vzorky.innerHTML = DH.BARVY.map(function (b) {
    var st = b.t ? 'background-image:url(../img/' + b.t + '-800.jpg)' : 'background:' + b.c;
    return '<button type="button" class="vzorek' + (b.t ? ' tex' : '') + '" data-id="' + b.id + '" aria-pressed="false" style="' + st + '"><span>' + b.n + '</span></button>';
  }).join('');
  vzorky.addEventListener('click', function (e) {
    var v = e.target.closest('.vzorek'); if (!v) return;
    natrit(v.dataset.id, true);
    try { history.replaceState(null, '', '?b=' + v.dataset.id); } catch (x) {}
  });

  /* ---- plocha ---- */
  var pole = { d: 'r-d', s: 'r-s', v: 'r-v', o: 'r-o', dv: 'r-dv' };
  function cislo(id) { var v = parseFloat(String(document.getElementById(id).value).replace(',', '.')); return isNaN(v) || v < 0 ? 0 : v; }
  function cz(n) { return (Math.round(n * 10) / 10).toFixed(1).replace('.', ',').replace(',0', ''); }
  var plochaEl = document.getElementById('plocha'), plochaP = document.getElementById('plocha-p'), strop = document.getElementById('strop');
  var posledni = 0, cisloAnim = { v: 0 };
  function spocitat() {
    var d = cislo(pole.d), s = cislo(pole.s), v = cislo(pole.v), o = Math.round(cislo(pole.o)), dv = Math.round(cislo(pole.dv));
    var steny = Math.max(0, 2 * (d + s) * v - o * 1.5 - dv * 1.6), st = strop.checked ? d * s : 0, cel = steny + st;
    plochaP.textContent = 'Stěny ' + cz(steny) + ' m²' + (strop.checked ? ' + strop ' + cz(st) + ' m²' : '') + '. Okno počítáme 1,5 m², dveře 1,6 m².';
    if (G) {
      gsap.to(cisloAnim, { v: cel, duration: .45, ease: 'power2.out', overwrite: true, onUpdate: function () { plochaEl.textContent = cz(cisloAnim.v) + ' m²'; } });
    } else plochaEl.textContent = cz(cel) + ' m²';
    posledni = { d: d, s: s, v: v, o: o, dv: dv, steny: steny, st: st, cel: cel };
  }
  Object.keys(pole).forEach(function (k) { document.getElementById(pole[k]).addEventListener('input', spocitat); });
  strop.addEventListener('change', spocitat);

  document.getElementById('formular').addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'sms', p = posledni;
    var text = ['Dobrý den,', 'mám zájem o vymalování.', '',
      'Odstín: ' + (aktualni ? aktualni.n : 'zatím nevím'),
      'Místnost: ' + cz(p.d) + ' × ' + cz(p.s) + ' m, výška ' + cz(p.v) + ' m, oken ' + p.o + ', dveří ' + p.dv,
      'Plocha: stěny ' + cz(p.steny) + ' m²' + (p.st ? ', strop ' + cz(p.st) + ' m²' : '') + ', celkem ' + cz(p.cel) + ' m²'].join('\n');
    if (kanal === 'sms') {
      location.href = 'sms:' + DH.TEL + '?&body=' + encodeURIComponent(text);
      DH.toast('Otevírám SMS s poptávkou');
    } else {
      location.href = 'mailto:' + DH.MAIL + '?subject=' + encodeURIComponent('Poptávka malování') + '&body=' + encodeURIComponent(text);
      DH.toast('Otevírám e-mail s poptávkou');
    }
  });

  var start = new URLSearchParams(location.search).get('b');
  start = DH.najdi(start) ? start : 'okr';
  spocitat();
  if (!G) { natrit(start, false); return; }
  /* po příchodu se pokoj z bílé přemaluje na vybraný odstín, vzorky přiletí */
  natrit('krida', false);
  gsap.set('.vzorek', { opacity: 0, y: 16 });
  afterIntro(function () {
    gsap.to('.vzorek', { opacity: 1, y: 0, duration: .5, stagger: .03, ease: 'power2.out', delay: .2, clearProps: 'transform' });
    setTimeout(function () { natrit(start, true); }, 550);
  });
})();
