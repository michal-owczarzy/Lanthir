/* Kadeřnictví Šnytová: vějíř vzorníku odstínů, objednávka přes SMS/e-mail. */
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg';
  var OD = [["platina", "Platinová blond", "#e6d9bf"], ["med", "Medová blond", "#d2a463"], ["karamel", "Karamelová", "#a56d3a"], ["med2", "Měděná", "#b0502a"], ["kastan", "Kaštanová", "#6a3a22"], ["cokolada", "Čokoládová", "#43281b"], ["cerna", "Černá", "#1c1716"], ["burgundy", "Burgundy", "#6b1f2d"]];
  function najdi(id) { return OD.filter(function (o) { return o[0] === id; })[0]; }

  /* vějíř: prameny na čepu, vybraný se vysune */
  var v = document.getElementById('vejir');
  if (v) {
    var vyb = 'karamel', n = OD.length, CX = 200, CY = 300;
    var cep = document.createElementNS(NS, 'circle');
    OD.forEach(function (o, i) {
      var a = -62 + i * (124 / (n - 1));
      var g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'pramen'); g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', o[1]); g.dataset.id = o[0];
      g.setAttribute('transform', 'rotate(' + a + ' ' + CX + ' ' + CY + ')');
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', 'M' + (CX - 7) + ' ' + (CY - 30) + 'C' + (CX - 20) + ' ' + (CY - 120) + ' ' + (CX - 26) + ' ' + (CY - 210) + ' ' + (CX - 4) + ' ' + (CY - 282) + 'Q' + CX + ' ' + (CY - 292) + ' ' + (CX + 4) + ' ' + (CY - 282) + 'C' + (CX + 26) + ' ' + (CY - 210) + ' ' + (CX + 20) + ' ' + (CY - 120) + ' ' + (CX + 7) + ' ' + (CY - 30) + 'Z');
      p.setAttribute('fill', o[2]);
      var s = document.createElementNS(NS, 'path');
      s.setAttribute('d', 'M' + (CX - 2) + ' ' + (CY - 40) + 'C' + (CX - 8) + ' ' + (CY - 130) + ' ' + (CX - 10) + ' ' + (CY - 200) + ' ' + CX + ' ' + (CY - 270));
      s.setAttribute('class', 'lesk');
      var cl = document.createElementNS(NS, 'rect');
      cl.setAttribute('x', CX - 9); cl.setAttribute('y', CY - 34); cl.setAttribute('width', 18); cl.setAttribute('height', 16); cl.setAttribute('rx', 3); cl.setAttribute('class', 'svorka');
      g.appendChild(p); g.appendChild(s); g.appendChild(cl); v.appendChild(g);
    });
    cep.setAttribute('cx', CX); cep.setAttribute('cy', CY); cep.setAttribute('r', 13); cep.setAttribute('class', 'cep'); v.appendChild(cep);
    function zvol(id, anim) {
      vyb = id; var o = najdi(id);
      v.querySelectorAll('.pramen').forEach(function (g) {
        var on = g.dataset.id === id; g.classList.toggle('vybrany', on); g.setAttribute('aria-pressed', String(on));
        var pth = g.firstChild;
        if (W.hasG && !W.RM && anim) gsap.to(pth, { y: on ? -18 : 0, duration: .45, ease: on ? 'back.out(2.2)' : 'power2.out' });
        else pth.setAttribute('transform', on ? 'translate(0 -18)' : '');
      });
      document.getElementById('vz-nazev').textContent = o[1];
      document.getElementById('vz-tecka').style.background = o[2];
      document.getElementById('vz-odkaz').href = 'objednat/?odstin=' + id;
    }
    v.addEventListener('click', function (e) { var g = e.target.closest('.pramen'); if (g) zvol(g.dataset.id, true); });
    v.addEventListener('keydown', function (e) { var g = e.target.closest('.pramen'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); zvol(g.dataset.id, true); } });
    zvol(vyb, false);
    if (W.hasG && !W.RM) {
      var pr = v.querySelectorAll('.pramen');
      pr.forEach(function (g) { g.dataset.a = g.getAttribute('transform'); });
      gsap.set(pr, { rotation: 0, svgOrigin: CX + ' ' + CY });
      ScrollTrigger.create({ trigger: v, start: 'top 80%', once: true, onEnter: function () {
        pr.forEach(function (g, i) { gsap.fromTo(g, { rotation: 0 }, { rotation: -62 + i * (124 / (n - 1)), svgOrigin: CX + ' ' + CY, duration: 1.1, ease: 'expo.out', delay: i * .03 }); });
      } });
    }
  }

  /* objednávka */
  var f = document.getElementById('oform');
  if (f) {
    var q = new URLSearchParams(location.search), od = najdi(q.get('odstin'));
    function prepinac(id, vice) {
      var box = document.getElementById(id);
      box.addEventListener('click', function (e) {
        var b = e.target.closest('.cip'); if (!b) return;
        if (vice) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
        else box.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); });
      });
    }
    var dny = document.getElementById('dny'), d = new Date(), out = [], nz = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
    for (var i = 0; out.length < 8 && i < 16; i++) {
      var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
      if (x.getDay() === 0 || x.getDay() === 6 || (i === 0 && d.getHours() >= 17)) continue;
      out.push('<button type="button" class="cip" aria-pressed="false">' + (i === 0 ? 'dnes' : i === 1 ? 'zítra' : nz[x.getDay()]) + ' ' + x.getDate() + '. ' + (x.getMonth() + 1) + '.</button>');
    }
    dny.innerHTML = out.join('');
    prepinac('co', true); prepinac('dny', false); prepinac('cas', false);
    if (od) {
      document.getElementById('o-odstin').hidden = false;
      document.getElementById('o-odstin-n').textContent = od[1];
      document.getElementById('o-tecka').style.background = od[2];
      var bar = [].filter.call(document.querySelectorAll('#co .cip'), function (b) { return b.textContent === 'Barvení'; })[0];
      if (bar) bar.setAttribute('aria-pressed', 'true');
    }
    function vybrane(id) { return [].filter.call(document.querySelectorAll('#' + id + ' .cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; }); }
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var tel = document.getElementById('tel');
      if (!vybrane('co').length) { var c = document.getElementById('co'); c.classList.remove('chyba'); void c.offsetWidth; c.classList.add('chyba'); W.toast('Vyberte, co chcete udělat'); return; }
      if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať Vám můžu potvrdit termín'); tel.focus(); return; }
      var r = ['Dobrý den,', 'chtěla/chtěl bych se objednat: ' + vybrane('co').join(', ') + '.'];
      if (od) r.push('Odstín: ' + od[1] + '.');
      var dd = vybrane('dny'), cc = vybrane('cas');
      if (dd.length || cc.length) r.push('Hodí se mi: ' + [dd[0], cc[0]].filter(Boolean).join(', ') + '.');
      var j = document.getElementById('jmeno').value.trim();
      r.push('', j, 'Tel.: ' + tel.value.trim());
      var text = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
      if (k === 'sms') { location.href = 'sms:+420739225001?&body=' + encodeURIComponent(text); W.toast('Otevírám SMS s objednávkou'); }
      else { location.href = 'mailto:andreasnytova@seznam.cz?subject=' + encodeURIComponent('Objednávka z webu') + '&body=' + encodeURIComponent(text); W.toast('Otevírám e-mail s objednávkou'); }
    });
  }

  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    gsap.fromTo('.oblouk img', { clipPath: 'inset(100% 0 0 0 round 50% 50% 0 0)' }, { clipPath: 'inset(0% 0 0 0 round 50% 50% 0 0)', duration: 1.3, ease: 'power3.inOut', delay: .1 });
    gsap.fromTo('.oblouk img', { scale: 1.15 }, { scale: 1, duration: 1.8, ease: 'power3.out', delay: .1 });
    if (f) gsap.from('.o-form fieldset, .o-form .pole, .o-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .06, ease: 'power2.out', delay: .3, clearProps: 'all' });
  });
  gsap.fromTo('.sa-velka img', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.salon', start: 'top bottom', end: 'center center', scrub: true } });
})();
