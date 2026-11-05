/* Úvodní animace loga. Stejná pro celou rodinu webů, mění se jen
   barva (--accent) a název z project.js. Klik nebo klávesa ji přeskočí. */
(function () {
  var P = window.PROJECT;
  var root = document.documentElement;
  var intro = document.getElementById('intro');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var skip = /[?&]nointro\b/.test(location.search);

  function reveal() {
    root.classList.remove('is-intro');
    root.classList.add('is-revealed');
    document.dispatchEvent(new Event('intro:done'));
  }

  if (!intro || reduce || skip) {
    if (intro) intro.hidden = true;
    reveal();
    return;
  }

  // název po písmenech
  var word = intro.querySelector('.intro__word');
  word.textContent = '';
  P.name.split('').forEach(function (ch, i) {
    var s = document.createElement('span');
    if (ch === ' ') s.className = 'sp';
    else s.textContent = ch;
    s.style.animationDelay = (1150 + i * 38) + 'ms';
    word.appendChild(s);
  });
  word.setAttribute('aria-label', P.name);

  root.classList.add('is-intro');
  var done = false;
  function out() {
    if (done) return;
    done = true;
    intro.classList.add('is-out');
    reveal();
    setTimeout(function () { intro.hidden = true; }, 950);
  }
  var hold = 1150 + P.name.length * 38 + 650;
  var timer = setTimeout(out, hold);
  intro.addEventListener('click', function () { clearTimeout(timer); out(); });
  addEventListener('keydown', function () { clearTimeout(timer); out(); }, { once: true });
})();
