/* ═══════════════════════════════════════════════
   COOKIE CONSENT
   Analytics cookies are not strictly necessary, so under the ePrivacy
   directive (in CZ: § 89 zákona č. 127/2005 Sb.) and the GDPR they require
   prior, active, informed consent. Three things follow from that and are
   implemented here:

     · nothing analytics-related is requested before a choice is made
     · refusing is exactly as easy as accepting — same size, same weight,
       no pre-ticked box, no "legitimate interest" sleight of hand
     · the choice can be changed at any time, from a permanent footer link

   Standalone on purpose: no consent flag, no analytics, and this file is
   ~4 KB rather than sitting inside the 80 KB main bundle.
═══════════════════════════════════════════════ */
(function () {
  'use strict';

  var KEY = 'lanthir-consent';       // 'granted' | 'denied'
  var STAMP = 'lanthir-consent-at';  // when, so the choice can be re-asked
  var MAX_AGE_DAYS = 365;

  function read() {
    try {
      var v = localStorage.getItem(KEY);
      var at = parseInt(localStorage.getItem(STAMP) || '0', 10);
      if (!v) return null;
      /* a consent older than a year is no longer current — ask again */
      if (at && (Date.now() - at) > MAX_AGE_DAYS * 864e5) return null;
      return v;
    } catch (e) { return null; }
  }

  function write(v) {
    try {
      localStorage.setItem(KEY, v);
      localStorage.setItem(STAMP, String(Date.now()));
    } catch (e) {}
  }

  function apply(v) {
    if (v === 'granted' && typeof window.__loadAnalytics === 'function') {
      window.__loadAnalytics();
    }
  }

  /* ── the banner ───────────────────────────── */
  var T = {
    cs: {
      title: 'Cookies na tomto webu',
      body: 'Nezbytné cookies potřebujeme k tomu, aby web fungoval. Analytické cookies (Google Analytics) nám pomáhají zjistit, jak se web používá — ty načteme jen s vaším souhlasem. Souhlas můžete kdykoliv změnit v patičce.',
      accept: 'Přijmout vše',
      reject: 'Jen nezbytné',
      more: 'Zásady ochrany osobních údajů'
    },
    en: {
      title: 'Cookies on this site',
      body: 'Necessary cookies are what make the site work. Analytics cookies (Google Analytics) help us understand how the site is used — we load them only with your consent. You can change your choice at any time from the footer.',
      accept: 'Accept all',
      reject: 'Necessary only',
      more: 'Privacy policy'
    },
    pl: {
      title: 'Pliki cookies na tej stronie',
      body: 'Niezbędne pliki cookies sprawiają, że strona działa. Analityczne pliki cookies (Google Analytics) pomagają nam zrozumieć, jak strona jest używana — wczytujemy je wyłącznie za Twoją zgodą. Wybór możesz zmienić w każdej chwili w stopce.',
      accept: 'Akceptuj wszystkie',
      reject: 'Tylko niezbędne',
      more: 'Zasady ochrony danych osobowych'
    }
  };

  function lang() {
    var l = 'cs';
    try { l = localStorage.getItem('lanthir-lang') || 'cs'; } catch (e) {}
    return T[l] ? l : 'cs';
  }

  var el = null;

  function close() {
    if (!el) return;
    el.classList.remove('on');
    var node = el;
    setTimeout(function () { if (node && node.parentNode) node.parentNode.removeChild(node); }, 400);
    el = null;
  }

  function choose(v) {
    write(v);
    apply(v);
    close();
  }

  function show() {
    if (el) return;
    var t = T[lang()];
    el = document.createElement('div');
    el.className = 'cc';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', t.title);
    el.innerHTML =
      '<div class="cc-in">' +
        '<div class="cc-copy">' +
          '<strong>' + t.title + '</strong>' +
          '<p>' + t.body + ' <a href="/zasady-ochrany-osobnich-udaju/">' + t.more + '</a></p>' +
        '</div>' +
        '<div class="cc-act">' +
          '<button type="button" class="cc-btn cc-no">' + t.reject + '</button>' +
          '<button type="button" class="cc-btn cc-yes">' + t.accept + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);
    el.querySelector('.cc-yes').addEventListener('click', function () { choose('granted'); });
    el.querySelector('.cc-no').addEventListener('click', function () { choose('denied'); });
    requestAnimationFrame(function () { el.classList.add('on'); });
  }

  /* re-open from the footer link, so a choice is never final */
  window.__cookieSettings = function () {
    try { localStorage.removeItem(KEY); localStorage.removeItem(STAMP); } catch (e) {}
    window.__analyticsLoaded = false;
    show();
  };

  var current = read();
  if (current) apply(current);
  else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', show, { once: true });
  } else {
    show();
  }
})();
