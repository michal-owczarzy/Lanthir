/* ═══════════════════════════════════════════════════════════
   LANTHIR /dev/ — motion layer
   Loads AFTER script.js and never fights it. script.js keeps
   ownership of: the constellation canvas, i18n, the act scrubs,
   .reveal, the nav and the contact form. This file only adds
   choreography on top, and degrades to nothing if GSAP is absent.

   Two constraints shape everything here:
     1. applyLang() rewrites innerHTML on every [data-i18n] node,
        so headline masks CANNOT live in the HTML — they are built
        here and rebuilt after every language switch.
     2. Ambient video is decorative. It is fetched only when the
        visitor can clearly afford it, and never inside an iframe.
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var GS = !!(window.gsap && window.ScrollTrigger) && !RM;

  /* ── 1. Ambient nebula ──────────────────────────────────
     4.3 MB, so it must earn its download. */
  function ambientAllowed() {
    if (RM) return false;
    if (window.self !== window.top) return false;              // embedded preview
    if (!window.matchMedia('(min-width: 900px)').matches) return false;
    var c = navigator.connection;
    if (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ''))) return false;
    if (typeof TIER !== 'undefined' && TIER === 0) return false; // script.js's own budget
    return true;
  }
  (function mountAmbient() {
    var wrap = document.getElementById('ambient');
    var v = document.getElementById('ambientVideo');
    if (!wrap || !v || !ambientAllowed()) return;
    var s = document.createElement('source');
    s.src = v.dataset.src; s.type = 'video/mp4';
    v.appendChild(s); v.load();
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
    /* reveal on either event — if autoplay is deferred, 'playing' may never
       fire and the layer would stay invisible */
    var show = function () { wrap.classList.add('on'); };
    v.addEventListener('playing', show, { once: true });
    v.addEventListener('loadeddata', show, { once: true });
  })();

  /* ── 2. Headline line-masks ─────────────────────────────
     Wrap each <br>-separated line so it can rise out of a mask.
     Rebuilt after every language change because applyLang()
     replaces innerHTML wholesale. */
  function splitLines(el) {
    if (!el || el.dataset.split === 'done') return;
    var html = el.innerHTML;
    if (html.indexOf('<span class="ln"') > -1) return;
    var parts = html.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map(function (p) {
      return '<span class="ln"><span>' + p + '</span></span>';
    }).join('');
    el.dataset.split = 'done';
  }
  function buildSplits() {
    document.querySelectorAll('.act--hero .display, .flow-head .display').forEach(function (el) {
      el.dataset.split = '';
      splitLines(el);
      if (GS) gsap.set(el.querySelectorAll('.ln > span'), { yPercent: 106, y: 0 });
    });
  }
  buildSplits();

  /* re-split after a language switch, then replay whatever is on screen */
  document.querySelectorAll('.ls-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        buildSplits();
        if (!GS) { showAllLines(); return; }
        document.querySelectorAll('.display').forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            gsap.to(el.querySelectorAll('.ln > span'), { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.08 });
          }
        });
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }, 0);
    });
  });

  function showAllLines() {
    document.querySelectorAll('.ln > span').forEach(function (s) { s.style.transform = 'none'; });
  }

  /* ── 3. Safety net for script.js's .reveal ──────────────
     Those start at opacity 0 and are revealed by an
     IntersectionObserver. If it never fires the content is
     stranded invisible, so force it after 3s regardless. */
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); });
  }, 3000);

  /* ── 4. No GSAP (CDN blocked) or reduced motion ─────────
     Everything must still be readable. */
  if (!GS) { showAllLines(); return; }

  gsap.registerPlugin(ScrollTrigger);

  /* ── 4. Opening sequence ────────────────────────────────
     script.js reveals .act-copy via .copy-on; the masks run with it. */
  var heroLines = document.querySelectorAll('.act--hero .display .ln > span');
  var intro = gsap.timeline({ delay: 0.15 })
    .to(heroLines, { yPercent: 0, duration: 1.5, ease: 'expo.out', stagger: 0.12 });

  /* The headline starts hidden inside its mask. If the timeline never
     runs while the tab is on screen, snap it visible rather than ship
     a page with no H1. */
  function introGuard() {
    if (document.hidden) return;
    if (intro.progress() === 0) intro.progress(1);
  }
  setTimeout(introGuard, 4000);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) setTimeout(introGuard, 4000);
  });

  /* ── 5. Section headlines rise as they arrive ───────────*/
  gsap.utils.toArray('.flow-head .display').forEach(function (el) {
    gsap.to(el.querySelectorAll('.ln > span'), {
      yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* ── 6. Ambient + wordmark parallax ─────────────────────
     Decorative layers only — never body copy. */
  gsap.to('#ambient', {
    yPercent: 8, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true }
  });
  var wm = document.querySelector('.footer-wordmark');
  if (wm) {
    gsap.fromTo(wm, { xPercent: -6 }, {
      xPercent: 6, ease: 'none',
      scrollTrigger: { trigger: '.footer-wordmark-wrap', start: 'top bottom', end: 'bottom top', scrub: .8 }
    });
  }

  /* ── 7. Price columns — staggered arrival ───────────────*/
  gsap.utils.toArray('.price-cols').forEach(function (grid) {
    gsap.from(grid.children, {
      opacity: 0, y: 26, duration: .8, ease: 'expo.out', stagger: .07,
      scrollTrigger: { trigger: grid, start: 'top 85%', once: true }
    });
  });

  /* ── 8. Magnetic primary button ─────────────────────────
     One focal element only, pull clamped so it never leaves its hit box. */
  if (window.matchMedia('(hover: hover) and (min-width: 900px)').matches) {
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
      var xTo = gsap.quickTo(btn, 'x', { duration: .45, ease: 'elastic.out(1,0.5)' });
      var yTo = gsap.quickTo(btn, 'y', { duration: .45, ease: 'elastic.out(1,0.5)' });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .28);
        yTo((e.clientY - r.top - r.height / 2) * .38);
      });
      btn.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ── 9. Reference tiles lift on approach ────────────────*/
  gsap.utils.toArray('.ref-item').forEach(function (el, i) {
    gsap.from(el, {
      opacity: 0, y: 34, duration: .9, ease: 'expo.out', delay: i * .06,
      scrollTrigger: { trigger: '.ref-row', start: 'top 86%', once: true }
    });
  });

  /* pinning and masks depend on measured type — remeasure once
     webfonts and images have settled */
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
