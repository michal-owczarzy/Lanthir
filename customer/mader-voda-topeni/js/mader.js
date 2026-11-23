/* Mader: půdorys domu (místnosti → rozvody), poptávka. */
var F = { tel: '+420733301009', mail: 'dominik-2004@seznam.cz', predmet: 'Poptávka z webu', uvod: 'poptávám: ', prazdne: 'Vyberte, o co jde',
  extra: function () { var o = document.getElementById('obec'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', o && o.value.trim() ? 'Obec: ' + o.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, ROZ = {"voda": "rozvody vody a odpadů", "topeni": "topení a radiátory", "plyn": "plyn a kotel"}, NM = {"koupelna": "Koupelna", "kuchyn": "Kuchyň", "wc": "WC", "obyvak": "Obývák", "kotelna": "Kotelna"};
  var pud = document.getElementById('pud');
  if (pud) {
    var vyb = {};
    function kresli() {
      var r = {}, ids = Object.keys(vyb);
      ids.forEach(function (k) { pud.querySelector('[data-m="' + k + '"]').dataset.r.split(',').forEach(function (x) { r[x] = 1; }); });
      ['voda', 'topeni', 'plyn'].forEach(function (x) { pud.querySelector('.r-' + x).classList.toggle('on', !!r[x]); });
      pud.querySelectorAll('.mist').forEach(function (g) { var on = !!vyb[g.dataset.m]; g.classList.toggle('on', on); g.setAttribute('aria-pressed', String(on)); });
      var s = document.getElementById('pud-seznam');
      s.innerHTML = ids.length ? ids.map(function (k) { return '<li><b>' + NM[k] + '</b>' + pud.querySelector('[data-m="' + k + '"]').dataset.r.split(',').map(function (x) { return ROZ[x]; }).join(', ') + '</li>'; }).join('') : '<li class="prazdno">Zatím nic. Vyberte místnost v půdorysu.</li>';
      document.getElementById('pud-poslat').href = 'poptavka/?' + (ids.length ? 'm=' + ids.join(',') + '&co=' + Object.keys(r).join(',') : '');
    }
    function prepni(g) { var k = g.dataset.m; if (vyb[k]) delete vyb[k]; else vyb[k] = 1; kresli(); if (W.hasG && !W.RM) gsap.fromTo(g.querySelector('rect'), { scale: .97, transformOrigin: '50% 50%' }, { scale: 1, duration: .4, ease: 'back.out(3)' }); }
    pud.addEventListener('click', function (e) { var g = e.target.closest('.mist'); if (g) prepni(g); });
    pud.addEventListener('keydown', function (e) { var g = e.target.closest('.mist'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); prepni(g); } });
    kresli();
  }
  var n = document.getElementById('p-navrh');
  if (n) { var m = (new URLSearchParams(location.search).get('m') || '').split(',').filter(function (k) { return NM[k]; }); if (m.length) { n.textContent = 'Místnosti: ' + m.map(function (k) { return NM[k]; }).join(', '); n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power3.inOut', delay: .1 }); gsap.from('.barvy-trubek i', { scaleX: 0, transformOrigin: '0 50%', duration: .8, stagger: .12, ease: 'power3.out', delay: .6 }); });
  document.querySelectorAll('.rozvody path').forEach(function (p) { var L = Math.ceil(p.getTotalLength()) + 1; gsap.fromTo(p, { strokeDasharray: L + ' ' + L, strokeDashoffset: L }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.pud', start: 'top 80%', end: 'center 50%', scrub: .5 } }); });
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
