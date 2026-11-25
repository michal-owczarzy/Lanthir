/* Kolářová: otevírací doba na časové ose dne (s polední pauzou) a značka „teď“ */
var F = { tel: '+420735876370', mail: 'nikolina220@seznam.cz', predmet: 'Dotaz', uvod: 'mám dotaz: ', prazdne: 'Vyberte, na co se ptáte' };
(function () {
  var W = window.W || {}, H = {1: [[8, 12], [12.5, 17]], 2: [[8, 12], [12.5, 17]], 3: [[8, 13]], 4: [[8, 13]], 5: [[8, 12], [12.5, 17]]}, OD = 7, DO = 18;
  function f(n) { var m = Math.round((n % 1) * 60); return Math.floor(n) + (m ? ':' + (m < 10 ? '0' : '') + m : ''); }
  var d = new Date(), den = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  function otevreno(dd, hh) { return (H[dd] || []).some(function (u) { return hh >= u[0] && hh < u[1]; }); }
  var st = document.getElementById('stav-text');
  if (st) { var o = otevreno(den, h); st.parentNode.classList.toggle('otevreno', o); st.textContent = o ? 'Teď otevřeno, přijďte' : 'Teď zavřeno'; }
  var osa = document.getElementById('osa'); if (!osa) return;
  var lab = osa.querySelector('.osa-hod'); for (var i = OD; i <= DO; i++) { var s = document.createElement('span'); s.textContent = i; s.style.left = ((i - OD) / (DO - OD) * 100) + '%'; lab.appendChild(s); }
  function kresli(dd) {
    osa.querySelectorAll('.blok').forEach(function (b) { b.remove(); });
    (H[dd] || []).forEach(function (u) { var b = document.createElement('div'); b.className = 'blok'; b.style.left = ((u[0] - OD) / (DO - OD) * 100) + '%'; b.style.width = ((u[1] - u[0]) / (DO - OD) * 100) + '%'; b.textContent = f(u[0]) + '–' + f(u[1]); osa.appendChild(b); });
    var t = document.getElementById('osa-ted'), dnes = dd === den && h >= OD && h <= DO; t.hidden = !dnes; if (dnes) t.style.left = ((h - OD) / (DO - OD) * 100) + '%';
    var u = H[dd]; document.getElementById('osa-txt').textContent = dd === den ? (otevreno(dd, h) ? 'Teď mám otevřeno. Přijďte, počkáte nanejvýš pár minut na pána před Vámi.' : 'Dnes ' + u.map(function (x) { return f(x[0]) + '–' + f(x[1]); }).join(' a ') + '.') : 'Otevřeno ' + u.map(function (x) { return f(x[0]) + '–' + f(x[1]); }).join(' a ') + '.';
    document.querySelectorAll('.den').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.d === dd)); });
    if (W.hasG && !W.RM) gsap.from(osa.querySelectorAll('.blok'), { scaleX: 0, transformOrigin: 'left', duration: .6, ease: 'expo.out', stagger: .1 });
  }
  document.querySelector('.osa-box .cipy').addEventListener('click', function (e) { var b = e.target.closest('.den'); if (b) kresli(+b.dataset.d); });
  kresli(H[den] ? den : 1);
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
