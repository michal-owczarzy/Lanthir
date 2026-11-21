/* Odstíny laku pro zkoušku (ukázkové) a tvary nehtů. */
window.MC = window.MC || {};
MC.TEL = '+420732319472'; MC.MAIL = 'godrigon@gmail.com';
MC.BARVY = [
  { id: 'nude', n: 'Nude', c: '#d9a896' }, { id: 'mlecna', n: 'Mléčná růžová', c: '#f2d3cf' }, { id: 'koral', n: 'Korál', c: '#ec6c55' },
  { id: 'tresen', n: 'Třešeň', c: '#9c1d2c' }, { id: 'lilek', n: 'Lilek', c: '#4a2742' }, { id: 'kobalt', n: 'Kobalt', c: '#2846b8' },
  { id: 'salvej', n: 'Šalvěj', c: '#93aa90' }, { id: 'cerna', n: 'Černá', c: '#1d1d22' }, { id: 'perlet', n: 'Perleť', c: '#efe9e2' }
];
MC.TVARY = { kulate: 'kulaté', mandle: 'mandle', hranate: 'hranaté' };
MC.najdi = function (id) { return MC.BARVY.filter(function (b) { return b.id === id; })[0]; };
/* tvar nehtu: dole oblouk u kůžičky, nahoře podle zvoleného tvaru */
MC.nehet = function (x, y, w, t) {
  var h = Math.round(w * 1.3), m = x + w / 2, b = y + h, kuz = 'M' + x + ' ' + b + 'Q' + m + ' ' + (b - 9) + ' ' + (x + w) + ' ' + b;
  if (t === 'mandle') return kuz + 'V' + (y + h * .45) + 'Q' + (x + w) + ' ' + y + ' ' + m + ' ' + (y - 7) + 'Q' + x + ' ' + y + ' ' + x + ' ' + (y + h * .45) + 'Z';
  if (t === 'hranate') return kuz + 'V' + (y + 4) + 'Q' + (x + w) + ' ' + y + ' ' + (x + w - 4) + ' ' + y + 'H' + (x + 4) + 'Q' + x + ' ' + y + ' ' + x + ' ' + (y + 4) + 'Z';
  var r = w / 2;
  return kuz + 'V' + (y + r) + 'A' + r + ' ' + r + ' 0 0 0 ' + x + ' ' + (y + r) + 'Z';
};
