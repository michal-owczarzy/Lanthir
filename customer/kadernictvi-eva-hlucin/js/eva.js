/* Kadeřnictví Eva: odpočet do velkého dne, objednávka. */
var F = { tel: '+420606278288', mail: 'eva.turke@seznam.cz', predmet: 'Objednávka z webu', uvod: 'chtěla bych se objednat: ', prazdne: 'Vyberte, co chcete udělat',
  extra: function () { var k = document.getElementById('kdy'), n = document.getElementById('p-navrh'); return [n && !n.hidden ? n.textContent + '.' : '', k && k.value.trim() ? 'Hodí se mi: ' + k.value.trim() + '.' : '']; } };
(function () {
  var W = window.W || {}, U = {"svatba": ["Svatba", "Na svatbu se vyplatí zkouška účesu. Domluvíme ji pár týdnů předem, ať je čas na úpravy."], "ples": ["Ples", "Plesový účes doladíme podle šatů. Termín si raději rezervujte s předstihem, plesová sezóna je rychle plná."], "maturita": ["Maturita", "Na maturitní ples i fotky. Přineste fotku šatů a nápad, účes vymyslíme spolu."], "oslava": ["Jiná oslava", "Narozeniny, křtiny, výročí. Účes i foukanou zvládneme ještě ten den ráno."]};
  var ud = document.getElementById('udalost');
  if (ud) {
    var st = { u: 'svatba' }, inp = document.getElementById('datum'), o = { v: 0 };
    var dnes = new Date(); dnes.setHours(0, 0, 0, 0);
    inp.min = dnes.toISOString().slice(0, 10);
    function dni(n) { return n === 1 ? 'den' : (n > 1 && n < 5 ? 'dny' : 'dní'); }
    function nastav() {
      document.getElementById('rada').textContent = U[st.u][1];
      var d = inp.value ? new Date(inp.value + 'T00:00') : null, n = d ? Math.round((d - dnes) / 864e5) : null, el = document.getElementById('dni');
      var odkaz = 'objednat/?co=' + st.u + (inp.value ? '&d=' + inp.value : '');
      document.getElementById('den-obj').href = odkaz;
      if (n === null || isNaN(n)) { el.textContent = '–'; document.getElementById('dni-t').textContent = 'vyberte datum'; return; }
      document.getElementById('dni-t').textContent = n < 0 ? 'to už bylo' : (n === 0 ? 'je to dnes' : dni(n) + ' do akce ' + U[st.u][0].toLowerCase());
      if (W.hasG && !W.RM) gsap.to(o, { v: Math.max(n, 0), duration: .8, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v); } }); else el.textContent = Math.max(n, 0);
    }
    ud.addEventListener('click', function (e) { var b = e.target.closest('.cip'); if (!b) return; ud.querySelectorAll('.cip').forEach(function (z) { z.setAttribute('aria-pressed', String(z === b)); }); st.u = b.dataset.u; nastav(); if (W.hasG && !W.RM) gsap.fromTo('#rada', { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }); });
    inp.addEventListener('change', nastav);
    nastav();
  }
  var n = document.getElementById('p-navrh');
  if (n) { var q = new URLSearchParams(location.search), d = q.get('d'); if (U[q.get('co')] && d) { var x = new Date(d + 'T00:00'); n.textContent = U[q.get('co')][0] + ' ' + x.getDate() + '. ' + (x.getMonth() + 1) + '. ' + x.getFullYear(); n.hidden = false; } }
  if (!W.hasG || W.RM) return;
  afterIntro(function () { gsap.fromTo('.hero-foto img', { clipPath: 'inset(0 0 100% 0 round 999px 999px 0 0)' }, { clipPath: 'inset(0 0 0% 0 round 999px 999px 0 0)', duration: 1.4, ease: 'power3.inOut', delay: .1 }); });
  var cis = document.querySelector('.cislo'), oc = { v: 0 };
  if (cis) ScrollTrigger.create({ trigger: '.praxe', start: 'top 75%', once: true, onEnter: function () { gsap.to(oc, { v: 20, duration: 1.4, ease: 'power2.out', onUpdate: function () { cis.textContent = Math.round(oc.v) + '+'; } }); } });
  gsap.utils.toArray('.galerie img').forEach(function (im, i) { gsap.fromTo(im, { yPercent: i % 2 ? 6 : -4 }, { yPercent: i % 2 ? -6 : 4, ease: 'none', scrollTrigger: { trigger: '.galerie', start: 'top bottom', end: 'bottom top', scrub: true } }); });
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
