/* Manderla: plot na metry (délka, styl, brána) nakreslený v měřítku, poptávka. */
var F = { tel: '+420732244957', mail: 'l.manderla@gmail.com', predmet: 'Poptávka z webu', uvod: 'poptávám: ', prazdne: 'Vyberte, o co jde',
  extra: function () { var o = document.getElementById('obec'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', o && o.value.trim() ? 'Obec: ' + o.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, NS = 'http://www.w3.org/2000/svg', SN = {"kovany": "Ručně kovaný", "bezudrzbovy": "Bezúdržbový", "klasicky": "Klasický"};
  var svg = document.getElementById('plot-svg');
  if (svg) {
    var st = { d: 24, s: 'kovany', b: true }, POLE = 2.5;
    function el(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); p.appendChild(e); return e; }
    function vypln(g, x, w, styl) {
      var y0 = 70, h = 140;
      if (styl === 'bezudrzbovy') { for (var y = y0; y < y0 + h; y += 18) el('rect', { x: x + 2, y: y, width: w - 4, height: 12, class: 'lamela' }, g); return; }
      el('path', { d: 'M' + x + ' ' + (y0 + 12) + 'H' + (x + w) + 'M' + x + ' ' + (y0 + h - 10) + 'H' + (x + w), class: 'pricka' }, g);
      for (var b = x + 12; b < x + w - 4; b += 14) {
        el('path', { d: 'M' + b + ' ' + y0 + 'V' + (y0 + h), class: 'prut' }, g);
        if (styl === 'kovany') el('path', { d: 'M' + (b - 4) + ' ' + y0 + 'L' + b + ' ' + (y0 - 12) + 'L' + (b + 4) + ' ' + y0 + 'z', class: 'hrot' }, g);
      }
      if (styl === 'kovany') for (var k = x + 19; k < x + w - 10; k += 28) el('path', { d: 'M' + k + ' ' + (y0 + h - 10) + 'c0-14 14-14 14 0', class: 'oblouk' }, g);
    }
    function kresli() {
      svg.innerHTML = '';
      var brana = st.b ? 4 + 1.2 : 0, plotm = Math.max(st.d - brana, POLE), n = Math.ceil(plotm / POLE), sloupky = n + 1 + (st.b ? 2 : 0);
      var celkem = n + (st.b ? 2 : 0), sir = 1160 / (n + (st.b ? 2.6 : 0)), x = 20;
      el('path', { d: 'M0 230H1200', class: 'zem' }, svg);
      var g = el('g', { class: 'pole-g' }, svg);
      for (var i = 0; i < n; i++) { var gp = el('g', { class: 'pole' }, g); vypln(gp, x, sir, st.s); el('rect', { x: x - 5, y: 60, width: 10, height: 170, class: 'sloup' }, gp); x += sir; }
      el('rect', { x: x - 5, y: 60, width: 10, height: 170, class: 'sloup' }, g);
      if (st.b) {
        var gb = el('g', { class: 'pole brana' }, g); vypln(gb, x + 6, sir * 2 - 12, st.s); x += sir * 2; el('rect', { x: x - 6, y: 50, width: 12, height: 180, class: 'sloup' }, gb);
        var gk = el('g', { class: 'pole' }, g); vypln(gk, x + 6, sir * .6 - 12, st.s); x += sir * .6; el('rect', { x: x - 6, y: 50, width: 12, height: 180, class: 'sloup' }, gk);
      }
      document.getElementById('d-v').textContent = st.d + ' m';
      document.getElementById('souhrn').textContent = SN[st.s] + ' plot, ' + st.d + ' m: ' + n + ' polí po 2,5 m, ' + sloupky + ' sloupků' + (st.b ? ', brána 4 m a branka 1,2 m' : '');
      document.getElementById('plot-poslat').href = 'poptavka/?co=plot' + (st.b ? ',brana' : '') + '&d=' + st.d + '&s=' + st.s + '&b=' + (st.b ? 1 : 0);
      if (W.hasG && !W.RM) gsap.from(svg.querySelectorAll('.pole'), { y: 30, opacity: 0, duration: .35, stagger: .015, ease: 'power2.out' });
    }
    document.getElementById('delka').addEventListener('input', function (e) { st.d = +e.target.value; kresli(); });
    document.getElementById('brana').addEventListener('change', function (e) { st.b = e.target.checked; kresli(); });
    var sb = document.getElementById('styl');
    sb.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; sb.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st.s = b.dataset.s; kresli(); });
    kresli();
  }
  var n = document.getElementById('p-navrh');
  if (n) { var q = new URLSearchParams(location.search), d = parseInt(q.get('d'), 10); if (d && SN[q.get('s')]) { n.textContent = 'Plot z webu: ' + SN[q.get('s')].toLowerCase() + ', ' + d + ' m' + (q.get('b') === '1' ? ', s bránou a brankou' : ''); n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power3.inOut', delay: .1 }); });
  gsap.fromTo('.vyhen img', { yPercent: -10 }, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.vyhen', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.utils.toArray('.co img').forEach(function (im) { gsap.fromTo(im, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } }); });
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
