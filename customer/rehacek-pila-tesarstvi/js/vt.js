/* PŘECHODY STRÁNEK — View Transitions mezi dokumenty (CSS @view-transition).
   Celá stránka se prolne a posune, hlavička zůstává na místě (view-transition-name).
   Navíc sdílený prvek: kliknutá karta služby dá svému nadpisu jméno „sdileny“ a
   na nové stránce ho dostane odpovídající nadpis služby, takže nadpis „přeteče“
   z karty na své místo. Načítá se v <head>, aby stihl událost pagereveal.     */
(function () {
  var KLIC = 'mr-vt';
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-vt]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    var el = a.querySelector('[data-vt-el]') || a;
    el.style.viewTransitionName = 'sdileny';
    try { sessionStorage.setItem(KLIC, a.dataset.vt); } catch (x) {}
  });
  addEventListener('pagereveal', function (e) {
    var k = null;
    try { k = sessionStorage.getItem(KLIC); sessionStorage.removeItem(KLIC); } catch (x) {}
    if (!e.viewTransition || !k) return;
    var cil = document.querySelector('[data-vt-cil="' + k + '"]');
    if (!cil) return;
    cil.style.viewTransitionName = 'sdileny';
    e.viewTransition.finished.finally(function () { cil.style.viewTransitionName = ''; });
  });
  /* návrat tlačítkem Zpět (bfcache): jména z minula smazat, ať se nepletou */
  addEventListener('pageshow', function () {
    document.querySelectorAll('[data-vt-el],[data-vt]').forEach(function (el) { el.style.viewTransitionName = ''; });
  });
})();
