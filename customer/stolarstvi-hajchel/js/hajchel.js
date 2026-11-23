/* Hajchel: skříňka pod umyvadlo (dřevo, šířka) s kresbou dřeva, poptávka. */
var F = { tel: '+420739050101', mail: 'stolarstvi.hajchel@gmail.com', predmet: 'Poptávka z webu', uvod: 'poptávám: ', prazdne: 'Vyberte, co potřebujete',
  extra: function () { var o = document.getElementById('obec'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', o && o.value.trim() ? 'Obec: ' + o.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg', D = {"dub": ["Dub", "#b8925f", "#8a6a3f", "Tvrdý a odolný, s výraznou kresbou. Do koupelny se hodí, když je dobře ošetřený."], "buk": ["Buk", "#d7aa82", "#b58662", "Tvrdý, s jemnou kresbou a světle narůžovělým tónem."], "jasan": ["Jasan", "#dcc6a2", "#b79d74", "Světlý a pružný, s výraznou kresbou podobnou dubu."], "orech": ["Ořech", "#6e4a32", "#4a301f", "Tmavé a elegantní dřevo s bohatou kresbou."], "smrk": ["Smrk", "#e6cf9f", "#c7a970", "Měkký a světlý, hodí se na méně namáhaný nábytek."]};
  var g = document.getElementById('skr-g');
  if (g) {
    var st = { d: 'dub', s: 80 };
    function el(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); p.appendChild(e); return e; }
    function kresli() {
      g.innerHTML = '';
      var w = st.s * 3.7, x = 320 - w / 2, y = 130, h = 150, dr = D[st.d], dvirka = st.s >= 100 ? 2 : 1, zas = st.s >= 120 ? 3 : 2;
      el('rect', { x: x - 6, y: y - 16, width: w + 12, height: 16, rx: 2, fill: '#f3f1ec', class: 'deska' }, g);
      el('path', { d: 'M' + (320 - 50) + ' ' + (y - 16) + 'q50 -26 100 0', class: 'umyv' }, g);
      el('path', { d: 'M320 ' + (y - 40) + 'v-26h18', class: 'baterie' }, g);
      el('rect', { x: x, y: y, width: w, height: h, fill: dr[2] }, g);
      var nz = w / zas;
      for (var i = 0; i < zas; i++) {
        el('rect', { x: x + i * nz + 3, y: y + 3, width: nz - 6, height: h - 6, fill: dr[1], class: 'cel' }, g);
        el('rect', { x: x + i * nz + 3, y: y + 3, width: nz - 6, height: h - 6, filter: 'url(#kresba)', class: 'kresba' }, g);
        el('rect', { x: x + i * nz + nz / 2 - 18, y: y + 16, width: 36, height: 4, rx: 2, class: 'uchytka' }, g);
      }
      el('rect', { x: x + 8, y: y + h, width: 10, height: 20, class: 'nozka' }, g); el('rect', { x: x + w - 18, y: y + h, width: 10, height: 20, class: 'nozka' }, g);
      document.getElementById('s-v').textContent = st.s + ' cm';
      document.getElementById('dr-popis').textContent = dr[3];
      document.getElementById('sk-souhrn').textContent = 'Skříňka ' + st.s + ' cm, ' + dr[0].toLowerCase() + ', ' + zas + ' ' + (zas < 5 ? 'zásuvky' : 'zásuvek');
      document.getElementById('sk-poslat').href = 'poptavka/?co=koupelna&d=' + st.d + '&s=' + st.s;
    }
    var db = document.getElementById('dreva');
    db.addEventListener('click', function (e) { var b = e.target.closest('.drevo'); if (!b) return; db.querySelectorAll('.drevo').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st.d = b.dataset.d; kresli(); if (W.hasG && !W.RM) gsap.from('#skr-g .cel, #skr-g .kresba', { scaleY: 0, transformOrigin: '50% 0%', duration: .45, stagger: .05, ease: 'power3.out' }); });
    document.getElementById('sirka').addEventListener('input', function (e) { st.s = +e.target.value; kresli(); });
    kresli();
  }
  var n = document.getElementById('p-navrh');
  if (n) { var q = new URLSearchParams(location.search), s = parseInt(q.get('s'), 10); if (D[q.get('d')] && s) { n.textContent = 'Skříňka pod umyvadlo: ' + s + ' cm, ' + D[q.get('d')][0].toLowerCase(); n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power3.inOut', delay: .1 }); });
  gsap.utils.toArray('.co img, .dilna img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
})();

/* formulář poptávky: čipy, kontrola telefonu, SMS / e-mail */
(function () {
  var W = window.W || {}, f = document.getElementById('pform'); if (!f) return;
  var co = document.getElementById('co'), multi = f.dataset.multi === '1', q = new URLSearchParams(location.search);
  co.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; if (multi) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); else co.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); });
  (q.get('co') || '').split(',').forEach(function (v) { var b = v && co.querySelector('[data-v="' + v + '"]'); if (b) b.setAttribute('aria-pressed', 'true'); });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var tel = document.getElementById('tel'), v = [].filter.call(co.querySelectorAll('.cip'), function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.textContent; });
    if (!v.length) { co.classList.remove('chyba'); void co.offsetWidth; co.classList.add('chyba'); W.toast(F.prazdne); return; }
    if (tel.value.replace(/\D/g, '').length < 9) { tel.classList.remove('chyba'); void tel.offsetWidth; tel.classList.add('chyba'); W.toast('Doplňte telefon, ať se Vám můžeme ozvat'); tel.focus(); return; }
    var r = ['Dobrý den,', F.uvod + v.join(', ') + '.'];
    if (F.extra) F.extra().forEach(function (x) { if (x) r.push(x); });
    var po = document.getElementById('popis').value.trim(); if (po) r.push('', po);
    r.push('', document.getElementById('jmeno').value.trim(), 'Tel.: ' + tel.value.trim());
    var t = r.join('\n'), k = (e.submitter && e.submitter.dataset.kanal) || 'sms';
    if (k === 'sms') { location.href = 'sms:' + F.tel + '?&body=' + encodeURIComponent(t); W.toast('Otevírám SMS'); }
    else { location.href = 'mailto:' + F.mail + '?subject=' + encodeURIComponent(F.predmet) + '&body=' + encodeURIComponent(t); W.toast('Otevírám e-mail'); }
  });
  if (W.hasG && !W.RM) afterIntro(function () { gsap.from('.p-form fieldset, .p-form .pole, .p-form .odeslat', { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .3, clearProps: 'all' }); gsap.fromTo('.p-foto img', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut', delay: .2 }); });
})();
