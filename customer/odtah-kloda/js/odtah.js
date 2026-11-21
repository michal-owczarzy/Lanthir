/* ODTAH: poloha z telefonu (Geolocation API) → vzdálenost od servisu a odkaz na mapu.
   Poloha se nikam neodesílá sama, jen v SMS, kterou řidič odešle. Bez polohy i bez
   napsaného místa formulář zatřese. */
(function () {
  var form = document.getElementById('poloha');
  if (!form) return;
  var gps = document.getElementById('gps'), gT = document.getElementById('gps-t'), gD = document.getElementById('gps-d'), gB = document.getElementById('gps-b');
  var co = document.getElementById('co'), misto = document.getElementById('misto');
  var bod = null;

  function km(a, b) {
    var R = 6371, r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lon - a.lon) * r;
    var x = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function mapa(p) { return 'https://mapy.com/cs/zakladni?x=' + p.lon.toFixed(5) + '&y=' + p.lat.toFixed(5) + '&z=17&source=coor&id=' + p.lon.toFixed(5) + '%2C' + p.lat.toFixed(5); }

  gB.addEventListener('click', function () {
    if (!navigator.geolocation) { gT.textContent = 'Tento prohlížeč polohu neumí, napište místo níže'; return; }
    gps.className = 'gps hleda'; gT.textContent = 'Zjišťuji polohu…';
    navigator.geolocation.getCurrentPosition(function (pos) {
      bod = { lat: pos.coords.latitude, lon: pos.coords.longitude, acc: pos.coords.accuracy };
      var vz = km(bod, KL.SERVIS);
      gps.className = 'gps ok';
      gT.textContent = 'Poloha zjištěna, přesnost asi ' + Math.round(bod.acc) + ' m';
      gD.innerHTML = 'Jste zhruba ' + (vz < 10 ? vz.toFixed(1).replace('.', ',') : Math.round(vz)) + ' km od servisu vzdušnou čarou. <a class="odkaz" href="' + mapa(bod) + '" target="_blank" rel="noopener">Zkontrolovat na mapě</a>';
      if (KL.hasG && !KL.RM) gsap.from(gD, { opacity: 0, y: 8, duration: .35 });
      KL.toast('Poloha je připravená, pošlete SMS');
    }, function (err) {
      gps.className = 'gps';
      gT.textContent = err.code === 1 ? 'Přístup k poloze je zakázaný, napište místo níže' : 'Polohu se nepodařilo zjistit, napište místo níže';
      misto.focus();
    }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  });

  co.addEventListener('click', function (e) {
    var b = e.target.closest('.cip'); if (!b) return;
    var uz = b.getAttribute('aria-pressed') === 'true';
    co.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    if (!uz) b.setAttribute('aria-pressed', 'true');
  });

  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!bod && !misto.value.trim()) { zatrest(gps); KL.toast('Zjistěte polohu, nebo napište, kde stojíte'); return; }
    var c = co.querySelector('[aria-pressed="true"]'), auto = document.getElementById('auto').value.trim(), tel = document.getElementById('tel').value.trim();
    var r = ['Potřebuji odtah.'];
    if (bod) r.push('Poloha: ' + mapa(bod));
    if (misto.value.trim()) r.push('Místo: ' + misto.value.trim());
    if (c) r.push('Co se stalo: ' + c.textContent);
    if (auto) r.push('Auto: ' + auto);
    if (tel) r.push('Tel.: ' + tel);
    location.href = 'sms:' + KL.TEL + '?&body=' + encodeURIComponent(r.join('\n'));
    KL.toast('Otevírám SMS, pak prosím zavolejte');
  });
})();
