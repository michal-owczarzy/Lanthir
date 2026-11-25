window.HODINY = {1: [16, 19], 2: [16, 19], 3: [16, 19], 4: [16, 19], 5: [16, 19]};
/* Borýsek: hloubka dezénu vs. zákonné minimum (zimní 4 mm, letní 1,6 mm) */
var F = { tel: '+420606396200', mail: 'oldrichborysek.ml@seznam.cz', predmet: 'Objednávka přezutí', uvod: 'chci objednat: ', prazdne: 'Vyberte, co potřebujete',
  extra: function () { var a = document.getElementById('o-auto'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', a && a.value.trim() ? 'Auto: ' + a.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, q = new URLSearchParams(location.search), pn = document.getElementById('p-navrh');
  if (pn && q.get('dezen')) { pn.textContent = 'Dezén ' + q.get('dezen'); pn.hidden = false; }
  var r = document.getElementById('dz-mm'); if (!r) return;
  var druh = 'zimni', MIN = { zimni: 4, letni: 1.6 }, g = document.getElementById('dz-bloky'), o = { mm: 5 };
  function y(mm) { return 130 - mm * 12; }
  function kresli(mm) { var out = ''; for (var i = 0; i < 6; i++) out += '<rect class="b-blok" x="' + (28 + i * 43) + '" y="' + y(mm) + '" width="33" height="' + (130 - y(mm) + 2) + '" rx="3"/>'; g.innerHTML = out; }
  function hodnot(anim) {
    var mm = +r.value, min = MIN[druh], st = document.getElementById('dz-stav'), t = document.getElementById('dz-t');
    document.getElementById('dz-v').textContent = String(mm).replace('.', ',');
    var ln = document.getElementById('dz-min'); ln.setAttribute('y1', y(min)); ln.setAttribute('y2', y(min));
    var zle = mm < min, tesne = !zle && mm < min + 1;
    st.textContent = zle ? 'Pod zákonným minimem' : tesne ? 'Na hraně' : 'V pořádku'; st.className = 'dz-stav ' + (zle ? 'zle' : tesne ? 'tesne' : '');
    t.textContent = (druh === 'zimni' ? 'Zimní pneumatiky musí mít aspoň 4 mm dezénu. ' : 'Letní pneumatiky musí mít aspoň 1,6 mm dezénu. ') + (zle ? 'S těmi už nesmíte jezdit, je čas na nové.' : tesne ? 'Na tuhle sezónu možná ještě stačí, na další už sotva.' : 'Můžete jezdit, jen je nezapomeňte včas přezout.');
    document.getElementById('dz-obj').href = 'objednat/?co=prezuti&dezen=' + encodeURIComponent((druh === 'zimni' ? 'zimní ' : 'letní ') + String(mm).replace('.', ',') + ' mm');
    if (anim && W.hasG && !W.RM) gsap.to(o, { mm: mm, duration: .3, ease: 'power2.out', onUpdate: function () { kresli(o.mm); } }); else { o.mm = mm; kresli(mm); }
  }
  document.getElementById('dz-druh').addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; this.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); druh = b.dataset.d; hodnot(true); });
  r.addEventListener('input', function () { hodnot(true); }); hodnot(false);
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
