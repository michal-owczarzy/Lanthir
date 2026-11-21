/* Ukázkový sortiment náramků (názvy podle minerálů, ceny ukázkové) a otevírací doba salonu. */
window.RZ = window.RZ || {};
RZ.TEL = '+420731238859'; RZ.MAIL = 'ruzovkabeautyrituals@gmail.com';
RZ.HOD = { 1: [8, 21], 2: [8, 19], 3: [8, 16], 4: [8, 15], 5: [8, 15], 6: null, 0: null };
RZ.NARAMKY = [
  { id: 'ruzenin', n: 'Růženín', c: ['#f1c9c8', '#e3a9ab'], p: '#f6e1e0', cena: 390, t: 'Jemně růžový kámen s matným leskem.' },
  { id: 'ametyst', n: 'Ametyst', c: ['#9b7cc2', '#bda1de'], p: '#ece4f4', cena: 420, t: 'Fialový, s průsvitnými zrnky.' },
  { id: 'mesicni', n: 'Měsíční kámen', c: ['#e9e7e0', '#cfd7e4'], p: '#eef0f4', cena: 450, t: 'Mléčně bílý s modravým odleskem.' },
  { id: 'lava', n: 'Lávový kámen', c: ['#3e3d3c', '#5a5856'], p: '#e3e2df', cena: 290, t: 'Černý, pórovitý a lehký.' },
  { id: 'tygri', n: 'Tygří oko', c: ['#a7712b', '#d29a48'], p: '#f3e6d4', cena: 360, t: 'Zlatohnědý s lesklými pruhy.' },
  { id: 'kristal', n: 'Křišťál', c: ['#f2f7f8', '#d6e5e9'], p: '#e6eef0', cena: 390, t: 'Čirý a průzračný.' },
  { id: 'aventurin', n: 'Aventurín', c: ['#6fa57f', '#93c4a2'], p: '#e2efe6', cena: 340, t: 'Zelený s jemným třpytem.' },
  { id: 'sodalit', n: 'Sodalit', c: ['#34508a', '#5a74ad'], p: '#e3e8f2', cena: 360, t: 'Tmavě modrý s bílými žilkami.' }
];
/* kreslený náramek: korálky po kruhu, každý s odleskem */
RZ.svg = function (n) {
  var h = '<svg viewBox="0 0 100 100" aria-hidden="true">', N = 18;
  for (var i = 0; i < N; i++) {
    var a = i / N * Math.PI * 2, x = 50 + 36 * Math.cos(a), y = 50 + 36 * Math.sin(a), c = n.c[i % 2];
    h += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6.4" fill="' + c + '" stroke="rgba(0,0,0,.12)" stroke-width=".6"/>' +
      '<circle cx="' + (x - 2).toFixed(1) + '" cy="' + (y - 2.2).toFixed(1) + '" r="1.6" fill="#fff" opacity=".7"/>';
  }
  return h + '</svg>';
};
RZ.kc = function (n) { return n.toLocaleString('cs-CZ') + ' Kč'; };
