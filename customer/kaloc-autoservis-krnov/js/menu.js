/* Menu služeb a mobilní menu (popover): pod hlavičku, zavřít po kliknutí na odkaz. */
(function () {
  ['menu-sluzby', 'menu-mobil'].forEach(function (id) {
    var p = document.getElementById(id); if (!p || !p.showPopover) return;
    p.addEventListener('beforetoggle', function (e) { if (e.newState === 'open') p.style.top = (document.querySelector('.hlavicka').getBoundingClientRect().bottom + 8) + 'px'; });
    p.addEventListener('click', function (e) { if (e.target.closest('a')) p.hidePopover(); });
  });
})();
