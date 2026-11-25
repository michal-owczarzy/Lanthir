window.HODINY = {1: [8, 16], 2: [8, 16], 3: [8, 16], 4: [8, 16], 5: [8, 16]};
/* Veronika: kolik hostů -> jak velký dort (náčrt v měřítku), objednávka */
var F = { tel: '+420739476329', mail: 'cukrarstviveronika@seznam.cz', predmet: 'Objednávka', uvod: 'chci objednat: ', prazdne: 'Vyberte, co objednáváte',
  extra: function () { var h = document.getElementById('o-hoste'), d = document.getElementById('o-datum');
    return [h && h.value ? 'Pro ' + h.value + ' lidí.' : '', d && d.value ? 'Na kdy: ' + d.value.split('-').reverse().join('. ') : '']; } };
(function () {
  var W = window.W || {}, q = new URLSearchParams(location.search), oh = document.getElementById('o-hoste');
  if (oh && q.get('hoste')) oh.value = q.get('hoste');
  var r = document.getElementById('k-hoste'); if (!r) return;
  /* orientační velikosti: [do hostů, patra (průměry v cm), text porcí] */
  var T = [[10, [20], '8 až 10'], [16, [24], '12 až 16'], [22, [28], '18 až 22'], [30, [30, 20], '26 až 30'], [45, [32, 24], '38 až 45'], [60, [34, 26, 18], '50 až 60'], [80, [36, 28, 20], '65 až 80']];
  var g = document.getElementById('k-patra'), NS = 'http://www.w3.org/2000/svg', posl = '';
  function kresli(n) {
    var t = T.filter(function (x) { return n <= x[0]; })[0] || T[T.length - 1];
    document.getElementById('k-n').textContent = n;
    document.getElementById('k-vysl').textContent = (t[1].length === 1 ? 'Jednopatrový dort' : (t[1].length === 2 ? 'Dvoupatrový dort' : 'Třípatrový dort')) + ', průměr ' + t[1].join(' + ') + ' cm';
    document.getElementById('k-pozn').textContent = 'Přibližně ' + t[2] + ' porcí.';
    document.getElementById('k-obj').href = 'objednat/?hoste=' + n + '&co=' + (t[1].length > 1 ? 'svatba' : 'dort');
    var key = t[1].join(); if (key === posl) return; posl = key;
    g.innerHTML = ''; var y = 270, s = 9;
    t[1].forEach(function (d, i) {
      var w = d * s, h = 64, x = 200 - w / 2; y -= h;
      var rct = document.createElementNS(NS, 'rect'); rct.setAttribute('x', x); rct.setAttribute('y', y); rct.setAttribute('width', w); rct.setAttribute('height', h); rct.setAttribute('rx', 8); rct.setAttribute('class', 'k-p k' + i);
      var ln = document.createElementNS(NS, 'path'); ln.setAttribute('d', 'M' + (x + 6) + ' ' + (y + 14) + ' q ' + (w / 8) + ' 12 ' + (w / 4) + ' 0 t ' + (w / 4) + ' 0 t ' + (w / 4) + ' 0 t ' + (w / 4 - 12) + ' 0'); ln.setAttribute('class', 'k-krem');
      g.appendChild(rct); g.appendChild(ln);
    });
    if (W.hasG && !W.RM) gsap.from(g.children, { y: -40, opacity: 0, duration: .5, ease: 'back.out(1.8)', stagger: .06 });
  }
  r.addEventListener('input', function () { kresli(+r.value); });
  kresli(+r.value);
})();

(function () { var W = window.W || {}, H = window.HODINY; if (!H || !W.stav) return; var s = W.stav(H);
  document.querySelectorAll('.stav').forEach(function (el) { el.classList.toggle('otevreno', s.otevreno); el.querySelector('.stav-text').textContent = s.text; }); })();
/* společné animace: odkrytí fotky v úvodu, parallax, nadpisy po slovech, pás služeb, čísla, kreslení čar */
(function () {
  var W = window.W || {};
  if (!W.hasG || W.RM) return;
  afterIntro(function () {
    var h = document.querySelector('.hero-foto img');
    if (h) gsap.fromTo(h, { clipPath: 'inset(0 0 100% 0)', scale: 1.08 }, { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.3, ease: 'power3.inOut', delay: .05 });
  });
  var hf = document.querySelector('.v-banner .hero-foto img');
  if (hf) gsap.to(hf, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.v-banner .hero-foto', start: 'top top+=80', end: 'bottom top', scrub: true } });
  gsap.utils.toArray('[data-par] img').forEach(function (im) {
    gsap.fromTo(im, { yPercent: -6, scale: 1.12 }, { yPercent: 6, scale: 1.12, ease: 'none', scrollTrigger: { trigger: im.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  gsap.utils.toArray('.sl-mriz img, .rada img').forEach(function (im) {
    gsap.fromTo(im, { scale: 1.14 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'center center', scrub: true } });
  });
  /* nadpisy sekcí: slova vyjedou zespodu */
  gsap.utils.toArray('.sek-hlava h2, .sekce > h2').forEach(function (h) {
    if (h.dataset.sp) return; h.dataset.sp = 1;
    var parts = h.innerHTML.split(/(\s+|&nbsp;)/);
    h.innerHTML = parts.map(function (p) { return /^(\s+|&nbsp;)$/.test(p) || !p ? p : '<span class="slm"><span>' + p + '</span></span>'; }).join('');
    gsap.from(h.querySelectorAll('.slm>span'), { yPercent: 110, duration: .9, ease: 'expo.out', stagger: .05, scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
  });
  /* vodorovný pás služeb: na širokém displeji se při scrollu posouvá do strany */
  var mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', function () {
    var p = document.querySelector('.pas');
    if (!p) return;
    var d = function () { return Math.max(0, p.scrollWidth - innerWidth); };
    gsap.to(p, { x: function () { return -d(); }, ease: 'none', scrollTrigger: { trigger: '.pas-okno', start: 'center center', end: function () { return '+=' + d(); }, pin: '.sl-pas', scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 } });
  });
  /* řada fotek jede proti scrollu */
  gsap.utils.toArray('.fp').forEach(function (fp) {
    gsap.fromTo(fp, { xPercent: 4 }, { xPercent: -14, ease: 'none', scrollTrigger: { trigger: fp, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  /* čísla napočítají */
  gsap.utils.toArray('[data-count]').forEach(function (el) {
    var cil = parseFloat(el.dataset.count), des = (el.dataset.count.split('.')[1] || '').length, o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: function () {
      gsap.to(o, { v: cil, duration: 1.4, ease: 'power2.out', onUpdate: function () { el.textContent = o.v.toFixed(des).replace('.', ','); } });
    } });
  });
  /* čáry v SVG se kreslí se scrollem: path[data-draw] s pathLength="1" */
  gsap.utils.toArray('[data-draw]').forEach(function (p) {
    gsap.fromTo(p, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: p.closest('svg'), start: 'top 85%', end: 'bottom 55%', scrub: true } });
  });
  gsap.utils.toArray('.sz li').forEach(function (li, i) {
    gsap.from(li, { x: -24, opacity: 0, duration: .6, ease: 'power3.out', scrollTrigger: { trigger: li, start: 'top 92%', once: true } });
  });
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
