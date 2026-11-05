/* Situační výkres s klikacími parcelami. Oba koncepty ho používají,
   každý ve vlastní kompozici. */
(function () {
  var P = window.PROJECT;

  function mount(box, opts) {
    opts = opts || {};
    var markers = {};
    P.houses.forEach(function (h) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'plot plot--' + h.status;
      b.style.left = h.x + '%';
      b.style.top = h.y + '%';
      b.textContent = h.no;
      b.setAttribute('aria-label', 'Dům ' + h.no + ', ' + P.statusLabel[h.status] + ', pozemek ' + h.plot + ' m²');
      b.addEventListener('click', function () { select(h.no, 'plan'); });
      b.addEventListener('mouseenter', function () { if (opts.hoverSelects) select(h.no, 'plan'); });
      box.appendChild(b);
      markers[h.no] = b;
    });

    var current = null;
    function select(no, from) {
      if (current === no) return;
      if (current && markers[current]) markers[current].classList.remove('is-active');
      current = no;
      if (markers[no]) markers[no].classList.add('is-active');
      if (opts.onSelect) opts.onSelect(P.houses.find(function (h) { return h.no === no; }), from);
    }
    return { select: select };
  }

  window.Plan = { mount: mount };
})();
