/* KONTROLNÍ SEZNAM PŘED STK: u každého bodu OK / Závada, souhrn se počítá živě,
   závady se skládají do SMS. Termín STK ukáže, kolik dní zbývá. Orientační, ne úřední protokol. */
(function () {
  var seznam = document.getElementById('seznam');
  if (!seznam) return;
  var BODY = [
    ['Světla', [['Potkávací a dálková světla', 'svítí obě strany, správně seřízená'], ['Brzdová světla a blinkry', ''], ['Osvětlení SPZ', '']]],
    ['Pneumatiky a kola', [['Hloubka dezénu', 'v létě aspoň 1,6 mm, v zimě aspoň 4 mm'], ['Boky pneumatik', 'bez boulí a řezů']]],
    ['Brzdy', [['Auto při brzdění netáhne do strany', ''], ['Ruční brzda udrží auto v kopci', '']]],
    ['Karoserie', [['Prahy a podlaha bez prorezivění', ''], ['Žádné ostré hrany a uvolněné díly', '']]],
    ['Motor a výfuk', [['Výfuk netěsní a nebouchá', ''], ['Kontrolka motoru nesvítí', '']]],
    ['Výhled', [['Čelní sklo bez prasklin v zorném poli', ''], ['Stěrače a ostřikovače fungují', '']]],
    ['Povinná výbava', [['Lékárnička v záruce', ''], ['Výstražný trojúhelník a reflexní vesta', '']]]
  ];
  var vse = [];
  seznam.innerHTML = BODY.map(function (g) {
    return '<div class="skupina"><h2>' + g[0] + '</h2>' + g[1].map(function (b) {
      var i = vse.push(b[0]) - 1;
      return '<div class="bod" data-i="' + i + '"><p>' + b[0] + (b[1] ? '<small>' + b[1] + '</small>' : '') + '</p>' +
        '<div class="volba" role="group" aria-label="' + b[0] + '"><button type="button" class="ok" aria-pressed="false">OK</button><button type="button" class="zav" aria-pressed="false">Závada</button></div></div>';
    }).join('') + '</div>';
  }).join('');

  var stav = {}, G = KZ.hasG && !KZ.RM;
  var cOk = document.getElementById('c-ok'), cZav = document.getElementById('c-zav'), cZb = document.getElementById('c-zb'), zavady = document.getElementById('zavady');
  function cislo(el, v) {
    if (el.textContent === String(v)) return;
    el.textContent = v;
    if (G) gsap.fromTo(el, { scale: 1.35 }, { scale: 1, duration: .35, ease: 'back.out(3)' });
  }
  function prepocet() {
    var ok = 0, zav = [];
    vse.forEach(function (n, i) { if (stav[i] === 'ok') ok++; if (stav[i] === 'zav') zav.push(n); });
    cislo(cOk, ok); cislo(cZav, zav.length); cislo(cZb, vse.length - ok - zav.length);
    zavady.innerHTML = zav.length ? zav.map(function (z) { return '<li>' + z + '</li>'; }).join('') : '<li class="prazdne">Zatím žádná závada.</li>';
    return zav;
  }
  seznam.addEventListener('click', function (e) {
    var b = e.target.closest('.volba button'); if (!b) return;
    var bod = b.closest('.bod'), i = +bod.dataset.i, typ = b.classList.contains('ok') ? 'ok' : 'zav';
    var uz = stav[i] === typ;
    bod.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    if (uz) delete stav[i]; else { stav[i] = typ; b.setAttribute('aria-pressed', 'true'); if (G) gsap.fromTo(b, { scale: .85, rotation: typ === 'zav' ? -4 : 0 }, { scale: 1, rotation: 0, duration: .35, ease: 'back.out(3)' }); }
    prepocet();
  });

  var termin = document.getElementById('termin'), zbyva = document.getElementById('zbyva');
  termin.addEventListener('input', function () {
    if (!termin.value) { zbyva.textContent = ''; return; }
    var dnes = new Date(); dnes.setHours(0, 0, 0, 0);
    var d = Math.round((new Date(termin.value + 'T00:00:00') - dnes) / 864e5);
    zbyva.textContent = d > 1 ? 'Do STK zbývá ' + d + ' dní.' : d === 1 ? 'STK je zítra.' : d === 0 ? 'STK je dnes.' : 'Termín STK už uplynul.';
  });

  document.getElementById('poslat').addEventListener('click', function () {
    var zav = prepocet();
    if (!zav.length && !termin.value) { var s = document.querySelector('.souhrn'); s.classList.remove('chyba'); void s.offsetWidth; s.classList.add('chyba'); KZ.toast('Označte aspoň jednu závadu, nebo vyplňte termín STK'); return; }
    var r = ['Dobrý den,', 'chci připravit auto na STK.'];
    var auto = document.getElementById('auto').value.trim();
    if (auto) r.push('Auto: ' + auto);
    if (termin.value) { var p = termin.value.split('-'); r.push('Termín STK: ' + (+p[2]) + '. ' + (+p[1]) + '. ' + p[0]); }
    if (zav.length) r.push('Závady: ' + zav.join(', '));
    location.href = 'sms:' + KZ.TEL + '?&body=' + encodeURIComponent(r.join('\n'));
    KZ.toast('Otevírám SMS se seznamem závad');
  });
  prepocet();
  if (G) afterIntro(function () { gsap.from('.bod', { opacity: 0, x: -16, duration: .45, stagger: .03, ease: 'power2.out', delay: .2, clearProps: 'transform,opacity' }); });
})();
