/* Sazenice Mučka: roční kolo s dnešní ručičkou, co se prodává teď, připomínky do kalendáře (.ics). */
(function () {
  var W = window.W || {};
  var d = new Date(), Y = d.getFullYear();
  function den(y, m, dd) { return Math.round((new Date(y, m, dd) - new Date(y, 0, 1)) / 864e5); }
  var dnes = den(Y, d.getMonth(), d.getDate()), delka = Math.round((new Date(Y + 1, 0, 1) - new Date(Y, 0, 1)) / 864e5);
  var SEZ = { jaro: [den(Y, 3, 15), den(Y, 5, 15)], podzim: [den(Y, 8, 1), den(Y, 10, 30)] };
  function uhel(x) { return x / delka * 360; }
  function bod(a, r) { var t = (a - 90) * Math.PI / 180; return [160 + r * Math.cos(t), 160 + r * Math.sin(t)]; }
  function oblouk(a1, a2, r) { var p = bod(a1, r), q = bod(a2, r); return 'M' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + 'A' + r + ' ' + r + ' 0 ' + (a2 - a1 > 180 ? 1 : 0) + ' 1 ' + q[0].toFixed(1) + ' ' + q[1].toFixed(1); }
  function dni(n) { return n === 1 ? 'den' : (n > 1 && n < 5 ? 'dny' : 'dní'); }

  /* co je teď a co bude */
  var ted = null, dalsi = null, zbyva = 0;
  if (dnes >= SEZ.jaro[0] && dnes <= SEZ.jaro[1]) { ted = 'jaro'; zbyva = SEZ.jaro[1] - dnes; }
  else if (dnes >= SEZ.podzim[0] && dnes <= SEZ.podzim[1]) { ted = 'podzim'; zbyva = SEZ.podzim[1] - dnes; }
  var zj = dnes < SEZ.jaro[0] ? SEZ.jaro[0] - dnes : Math.round((new Date(Y + 1, 3, 15) - new Date(Y, d.getMonth(), d.getDate())) / 864e5);
  var zp = dnes < SEZ.podzim[0] ? SEZ.podzim[0] - dnes : null;
  if (ted === 'jaro') dalsi = ['macešky a chryzantémy', zp];
  else if (ted === 'podzim' || dnes > SEZ.podzim[1]) dalsi = ['sazenice a balkonové květiny', zj];
  else dalsi = zp !== null && zp < zj ? ['macešky a chryzantémy', zp] : ['sazenice a balkonové květiny', zj];
  var hl = document.getElementById('ted-hlavni');
  if (hl) {
    var CO = { jaro: 'Teď prodávám sazenice zeleniny a balkonové i záhonové květiny.', podzim: 'Teď prodávám macešky a chryzantémy.' };
    hl.textContent = ted ? CO[ted] + ' Sezóna potrvá ještě ' + zbyva + ' ' + dni(zbyva) + '.' : 'Teď je mimo sezónu.';
    document.getElementById('ted-dalsi').textContent = 'Další na řadě: ' + dalsi[0] + ', za ' + dalsi[1] + ' ' + dni(dalsi[1]) + '.';
    document.getElementById('k-co').textContent = ted === 'jaro' ? 'Sazenice' : (ted === 'podzim' ? 'Chryzantémy' : 'Mimo sezónu');
    document.getElementById('k-datum').textContent = d.getDate() + '. ' + (d.getMonth() + 1) + '.';
    if (ted) document.querySelector('.ted').classList.add('je-' + ted);
  }

  /* kolo */
  var kolo = document.getElementById('kolo');
  if (kolo) {
    var g = document.getElementById('k-mesice'), NS = 'http://www.w3.org/2000/svg', zk = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'];
    for (var m = 0; m < 12; m++) {
      var a = uhel(den(Y, m, 1)), p1 = bod(a, 118), p2 = bod(a, 138), t = bod(uhel(den(Y, m, 15)), 148);
      var l = document.createElementNS(NS, 'line'); l.setAttribute('x1', p1[0]); l.setAttribute('y1', p1[1]); l.setAttribute('x2', p2[0]); l.setAttribute('y2', p2[1]); l.setAttribute('class', 'k-tik'); g.appendChild(l);
      var tx = document.createElementNS(NS, 'text'); tx.setAttribute('x', t[0]); tx.setAttribute('y', t[1] + 4); tx.setAttribute('text-anchor', 'middle'); tx.setAttribute('class', 'k-mes' + (m === d.getMonth() ? ' tento' : '')); tx.textContent = zk[m]; g.appendChild(tx);
    }
    var oj = document.getElementById('o-jaro'), op = document.getElementById('o-podzim');
    oj.setAttribute('d', oblouk(uhel(SEZ.jaro[0]), uhel(SEZ.jaro[1]), 128));
    op.setAttribute('d', oblouk(uhel(SEZ.podzim[0]), uhel(SEZ.podzim[1]), 128));
    var cil = uhel(dnes), rucka = document.getElementById('k-ted');
    if (W.hasG && !W.RM) {
      [oj, op].forEach(function (o) { var L = Math.ceil(o.getTotalLength()) + 1; gsap.set(o, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }); });
      gsap.set(rucka, { rotation: 0, svgOrigin: '160 160' });
      ScrollTrigger.create({ trigger: kolo, start: 'top 80%', once: true, onEnter: function () {
        gsap.timeline()
          .to([oj, op], { strokeDashoffset: 0, duration: 1, stagger: .2, ease: 'power2.inOut' })
          .to(rucka, { rotation: cil, svgOrigin: '160 160', duration: 1.6, ease: 'power3.inOut' }, .2)
          .from('.kolo-stred b', { opacity: 0, y: 10, duration: .5 }, 1.3);
      } });
    } else rucka.setAttribute('transform', 'rotate(' + cil + ' 160 160)');
  }

  /* dnešní řádek v tabulce */
  var tr = document.querySelector('.tyden tr[data-d="' + d.getDay() + '"]');
  if (tr) tr.classList.add('dnes');

  /* kalendář prodeje: zvýraznit měsíc a nabídnout .ics */
  var mm = document.querySelector('.mes[data-m="' + d.getMonth() + '"]');
  if (mm) { mm.classList.add('tento'); mm.insertAdjacentHTML('beforeend', '<em>teď</em>'); }
  function ics(nazev, y, m, dd) {
    var dt = y + (m < 9 ? '0' : '') + (m + 1) + (dd < 10 ? '0' : '') + dd;
    var t = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Sazenice Mucka//CS', 'BEGIN:VEVENT', 'UID:' + dt + '-mucka@lanthir.cz', 'DTSTAMP:' + dt + 'T080000', 'DTSTART;VALUE=DATE:' + dt, 'SUMMARY:' + nazev, 'LOCATION:Opavská 42\\, Dolní Benešov-Zábřeh', 'DESCRIPTION:Vlastimil Mučka\\, tel. 603 725 091', 'BEGIN:VALARM', 'TRIGGER:-PT12H', 'ACTION:DISPLAY', 'DESCRIPTION:' + nazev, 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(t);
  }
  var ij = document.getElementById('ics-jaro'), ip = document.getElementById('ics-podzim');
  if (ij) {
    var yj = dnes < SEZ.jaro[0] ? Y : Y + 1, yp = dnes < SEZ.podzim[0] ? Y : Y + 1;
    ij.href = ics('Začíná prodej sazenic – Vlastimil Mučka', yj, 3, 15);
    ip.href = ics('Začíná prodej macešek a chryzantém – Vlastimil Mučka', yp, 8, 1);
    ij.textContent = 'Připomenout sazenice (15. 4. ' + yj + ')';
    ip.textContent = 'Připomenout podzim (1. 9. ' + yp + ')';
    [ij, ip].forEach(function (a) { a.addEventListener('click', function () { W.toast('Připomínka se uloží do kalendáře'); }); });
  }

  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.hero-foto img', { clipPath: 'circle(0% at 50% 60%)' }, { clipPath: 'circle(75% at 50% 50%)', duration: 1.4, ease: 'power3.inOut', delay: .15 });
    gsap.from('.mes', { opacity: 0, y: 16, duration: .5, stagger: .04, ease: 'power2.out', delay: .4, clearProps: 'all' });
  });
  gsap.utils.toArray('.sez-mriz img').forEach(function (im) {
    gsap.fromTo(im, { scale: 1.1 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } });
  });
})();
