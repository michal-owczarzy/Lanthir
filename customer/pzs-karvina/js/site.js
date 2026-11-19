/* Společný skript všech stránek: jazyk, menu, aktuality, kalendář, školka, pohyb */
(function () {
  var html = document.documentElement;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function lang() { return html.getAttribute('data-lang') || 'pl'; }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function refresh() { if (window.ScrollTrigger) ScrollTrigger.refresh(); }

  /* ===== JAZYK ===== */
  var first = true;
  function applyLang(L) {
    html.setAttribute('data-lang', L); html.lang = L;
    var t = html.getAttribute('data-title-' + L); if (t) document.title = t;
    $$('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.setLang === L)); });
    $$('[data-alt-' + L + ']').forEach(function (el) { el.alt = el.getAttribute('data-alt-' + L); });
    $$('[data-aria-' + L + ']').forEach(function (el) { el.setAttribute('aria-label', el.getAttribute('data-aria-' + L)); });
    try { localStorage.setItem('pzs-lang', L); } catch (e) {}
    if (!first && window.gsap) {
      $$('[data-r]').forEach(function (el) { if (el.getClientRects().length && el.getBoundingClientRect().top < innerHeight) gsap.set(el, { opacity: 1, y: 0 }); });
      refresh();
    }
    first = false;
  }
  $$('[data-set-lang]').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.dataset.setLang); }); });
  applyLang(lang());

  /* ===== MENU ===== */
  var mb = document.querySelector('.menu-btn');
  if (mb) {
    mb.addEventListener('click', function () { var o = html.classList.toggle('menu-open'); mb.setAttribute('aria-expanded', String(o)); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape' && html.classList.contains('menu-open')) { html.classList.remove('menu-open'); mb.setAttribute('aria-expanded', 'false'); mb.focus(); } });
    $$('.sheet a').forEach(function (a) { a.addEventListener('click', function () { html.classList.remove('menu-open'); mb.setAttribute('aria-expanded', 'false'); }); });
  }

  /* ===== AKTUALITY ===== */
  var feedEl = document.querySelector('[data-feed]');
  var news = feedEl ? $$('.news', feedEl) : [];
  function visible() { return news.filter(function (a) { return !a.hidden; }); }
  if (feedEl) {
    var fBtns = $$('[data-filtr] button');
    var moreBtn = document.querySelector('[data-starsze-btn]');
    var NA = +(feedEl.dataset.na || 8), kat = feedEl.dataset.kat || 'all', vse = false;
    var renderFeed = function () {
      var n = 0, total = 0;
      news.forEach(function (a) {
        var ok = kat === 'all' || a.dataset.kat === kat;
        if (ok) total++;
        var vis = ok && (vse || n < NA);
        if (vis) n++;
        a.hidden = !vis; a.classList.remove('news-top');
      });
      if (feedEl.dataset.top !== 'no') { var f = visible()[0]; if (f) f.classList.add('news-top'); }
      if (moreBtn) moreBtn.hidden = vse || total <= NA;
    };
    fBtns.forEach(function (b) { b.addEventListener('click', function () {
      kat = b.dataset.k; vse = false;
      fBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      renderFeed();
      if (window.gsap && !RM) gsap.fromTo(visible(), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .45, stagger: .04, ease: 'power2.out' });
      refresh();
    }); });
    if (moreBtn) moreBtn.addEventListener('click', function () {
      var before = visible().length; vse = true; renderFeed();
      var nove = visible().slice(before);
      if (nove[0]) { var s = nove[0].querySelector('summary, a'); if (s) s.focus({ preventScroll: true }); }
      if (window.gsap && !RM) gsap.fromTo(nove, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .45, stagger: .04, ease: 'power2.out' });
      refresh();
    });
    renderFeed();
    /* otevřít zprávu z odkazu (#n-id) */
    if (location.hash && /^#n-/.test(location.hash)) {
      var tgt = document.getElementById(location.hash.slice(1));
      if (tgt) { vse = true; kat = 'all'; renderFeed(); var d = tgt.querySelector('details'); if (d) d.open = true; }
    }
  }
  $$('.wiecej').forEach(function (d) { d.addEventListener('toggle', function () {
    if (d.open && window.gsap && !RM) gsap.fromTo(d.querySelector('.tresc'), { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: .35, ease: 'power2.out' });
    refresh();
  }); });

  /* ===== KALENDÁŘ: jen nadcházející akce ===== */
  var dnes = new Date(); dnes.setHours(0, 0, 0, 0);
  $$('[data-kal]').forEach(function (list) {
    var evs = $$('.ev', list);
    var up = evs.filter(function (e) { return new Date(e.dataset.d + 'T23:59:00') >= dnes; });
    evs.forEach(function (e) { if (up.indexOf(e) < 0) e.parentNode.removeChild(e); });
    var lim = +(list.dataset.lim || 0), all = false;
    var box = list.closest('[data-kal-box]') || list.parentNode;
    var btn = box.querySelector('[data-kal-btn]'), pusto = box.querySelector('[data-kal-pusto]');
    function render() {
      up.forEach(function (e, i) { e.hidden = lim && !all && i >= lim; });
      if (btn) { btn.hidden = !lim || up.length <= lim; var a = btn.querySelector('[data-kal-wiecej]'), b = btn.querySelector('[data-kal-mniej]'); if (a) a.hidden = all; if (b) b.hidden = !all; }
      if (pusto) pusto.hidden = up.length > 0;
    }
    if (btn) btn.addEventListener('click', function () { all = !all; render(); refresh(); });
    render();
  });
  $$('[data-mies]').forEach(function (m) { if (!m.querySelector('.ev')) m.parentNode.removeChild(m); });
  function icsText(e) {
    var L = lang(), d = e.dataset.d.replace(/-/g, ''), t1 = e.dataset.t1, t2 = e.dataset.t2;
    var title = e.querySelector('.ev-txt b [lang="' + L + '"]').textContent;
    var gd = e.querySelectorAll('.ev-gdzie > [lang="' + L + '"]'); var place = gd[gd.length - 1].textContent;
    function esc(v) { return v.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1'); }
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Polska Szkola Karwina//Kalendarz//PL', 'BEGIN:VEVENT',
      'UID:' + d + '-' + e.dataset.kat + '-' + title.length + '@pzskarvina.cz',
      'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z'];
    if (t1) {
      var end = t2 || (('0' + Math.min(23, +t1.slice(0, 2) + 1)).slice(-2) + t1.slice(2));
      lines.push('DTSTART;TZID=Europe/Prague:' + d + 'T' + t1.replace(':', '') + '00', 'DTEND;TZID=Europe/Prague:' + d + 'T' + end.replace(':', '') + '00');
    } else {
      var nx = new Date(e.dataset.d + 'T12:00:00'); nx.setDate(nx.getDate() + 1);
      lines.push('DTSTART;VALUE=DATE:' + d, 'DTEND;VALUE=DATE:' + nx.toISOString().slice(0, 10).replace(/-/g, ''));
    }
    lines.push('SUMMARY:' + esc(title), 'DESCRIPTION:' + esc(place), 'LOCATION:Karviná-Fryštát', 'END:VEVENT', 'END:VCALENDAR');
    return lines.join('\r\n');
  }
  window.__icsText = icsText;
  $$('.ics').forEach(function (b) { b.addEventListener('click', function () {
    var ev = b.closest('.ev');
    var url = URL.createObjectURL(new Blob([icsText(ev)], { type: 'text/calendar;charset=utf-8' }));
    var a = document.createElement('a'); a.href = url; a.download = 'pzs-karwina-' + ev.dataset.d + '.ics';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }); });

  /* ===== ŠKOLKA: výběr třídy mění barvu okna a text ===== */
  var msBtns = $$('[data-mslist] button');
  if (msBtns.length) {
    var msOkno = document.querySelector('[data-msokno]'), facts = $$('[data-msfakt] [data-f]');
    msBtns.forEach(function (b) { b.addEventListener('click', function () {
      var i = +b.dataset.i;
      msBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      msOkno.style.background = b.dataset.kol;
      facts.forEach(function (f) { f.hidden = +f.dataset.f !== i; });
      if (window.gsap && !RM) gsap.fromTo(facts[i], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .35, ease: 'power2.out' });
    }); });
  }

  var up2 = document.querySelector('[data-nahoru]');
  if (up2) up2.addEventListener('click', function (e) { e.preventDefault(); scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); });

  /* ===== POHYB ===== */
  if (!window.gsap || !window.ScrollTrigger || RM) return;
  gsap.registerPlugin(ScrollTrigger);

  /* první obrazovka: nadpis vyjede zpoza účaří, pak text a obrázek */
  var tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
  if (document.querySelector('.hero')) {
    tl.from('.hero h1 .ln > span', { yPercent: 105, duration: .9, stagger: .1 })
      .from('.hero .h-in', { y: 18, opacity: 0, duration: .7, stagger: .07 }, '-=.6')
      .fromTo('.hero-f', { opacity: 0, scale: .96 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' }, .1)
      .fromTo('.hero-f img', { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out' }, .1);
  } else {
    tl.from('.ph h1, .ph .lede', { y: 22, opacity: 0, duration: .75, stagger: .08 })
      .fromTo('.ph-f', { opacity: 0, scale: .96 }, { opacity: 1, scale: 1, duration: .9 }, .08);
  }
  if (html.classList.contains('intro-on') && window.afterIntro) afterIntro(function () { tl.play(); }); else tl.play();

  /* vstupy prvků sekcí: nadpis, text, obrázek s odstupem */
  gsap.set('[data-r]', { opacity: 0, y: 24 });
  ScrollTrigger.batch('[data-r]', { start: 'top 90%', once: true, onEnter: function (b) {
    gsap.to(b, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', stagger: .07, overwrite: true });
  } });

  /* fotka v úvodu se při rolování jemně posune */
  if (document.querySelector('.hero-f img')) gsap.to('.hero-f img', { yPercent: 5, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* patička: budova se poskládá z ploch */
  if (document.querySelector('.stopka-fasada')) gsap.from('.stopka-fasada .b', { yPercent: 60, opacity: 0, duration: .7, ease: 'power3.out', stagger: { each: .008, from: 'random' }, scrollTrigger: { trigger: '.stopka', start: 'top 85%', once: true } });

  addEventListener('load', refresh);
})();
