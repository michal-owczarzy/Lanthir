window.HODINY = {1: [7.5, 18], 2: [7.5, 18], 3: [7.5, 18], 4: [7.5, 18], 5: [7.5, 17]};
/* Salamon: délka vlasů teď a po prodloužení na siluetě */
var F = { tel: '+420732265343', mail: 'kach.luk@seznam.cz', predmet: 'Objednávka', uvod: 'chtěla bych se objednat: ', prazdne: 'Vyberte, co chcete udělat',
  extra: function () { var k = document.getElementById('o-kdy'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', k && k.value.trim() ? 'Hodí se mi: ' + k.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, D = [["brada", "K bradě", 22], ["ramena", "Na ramena", 32], ["lopatky", "Pod lopatky", 45], ["pas", "Do pasu", 60]];
  var Y = { brada: 150, ramena: 190, lopatky: 250, pas: 320 };
  var pn = document.getElementById('p-navrh'), q = new URLSearchParams(location.search);
  if (pn && q.get('z') && q.get('na')) { pn.textContent = 'Prodloužení z délky „' + q.get('z') + '“ na „' + q.get('na') + '“'; pn.hidden = false; }
  var box = document.querySelector('.del-box'); if (!box) return;
  var ted = 0, cil = 2;
  function vlasy(y) { return 'M66 92c0-40 24-62 54-62s54 22 54 62c4 ' + (y - 92) * .6 + ' 8 ' + (y - 92) + ' 14 ' + (y - 80) + 'l-22 4c-6-' + (y - 150) * .3 + '-10-' + (y - 120) + '-12-' + (y - 110) + 'c-10 10-24 14-34 14s-24-4-34-14c-2 ' + (y - 110) + '-6 ' + (y - 120) + '-12 ' + (y - 110) * 1 + 'l-22-4c6-' + 0 + ' 10-' + (y - 92) + ' 14-' + 0 + 'z'; }
  function tvar(y) { return 'M66 96c-6 40-8 ' + (y - 110) + '-14 ' + (y - 96) + 'h40c-4-30-4-60 0-80 8 10 26 14 42 14s34-4 42-14c4 20 4 50 0 80h40c-6-' + 0 + '-8-' + (y - 150) + '-14-' + (y - 96) + 'c0-40-24-66-54-66s-54 26-54 66z'; }
  function kresli() {
    var a = D[ted], b = D[cil]; document.getElementById('d-cm').textContent = '+' + Math.max(0, b[2] - a[2]) + ' cm';
    document.getElementById('d-obj').href = 'objednat/?co=prodluzovani&z=' + encodeURIComponent(a[1].toLowerCase()) + '&na=' + encodeURIComponent(b[1].toLowerCase());
    document.getElementById('s-ted').setAttribute('d', tvar(Y[a[0]])); document.getElementById('s-cil').setAttribute('d', tvar(Y[b[0]]));
    if (W.hasG && !W.RM) gsap.fromTo('#s-cil', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .7, ease: 'power3.out' });
  }
  function vyber(id, cb) { document.getElementById(id).addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; this.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); cb(+b.dataset.i); kresli(); }); }
  vyber('d-ted', function (i) { ted = i; if (cil <= ted) { cil = ted + 1; document.querySelectorAll('#d-cil .cip').forEach(function (z) { z.setAttribute('aria-pressed', String(+z.dataset.i === cil)); }); } });
  vyber('d-cil', function (i) { cil = Math.max(i, ted + 1); });
  kresli();
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
