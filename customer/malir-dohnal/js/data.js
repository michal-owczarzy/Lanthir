/* Odstíny pro zkoušku barvy. Dvě stěrky jsou fotky z jeho zakázek (Firmy.cz). */
window.DH = window.DH || {};
DH.BARVY = [
  { id: 'krida', n: 'Bílá křída', c: '#f4f2ec' },
  { id: 'lnena', n: 'Lněná', c: '#e6dcc6' },
  { id: 'piskovec', n: 'Pískovcová', c: '#d8c39c' },
  { id: 'okr', n: 'Okrová', c: '#d29d4b' },
  { id: 'cihla', n: 'Cihlová', c: '#b9654c' },
  { id: 'pudr', n: 'Pudrová', c: '#e6c8bf' },
  { id: 'salvej', n: 'Šalvějová', c: '#b6c1a4' },
  { id: 'oliva', n: 'Olivová', c: '#8d9066' },
  { id: 'mlha', n: 'Mlhavě modrá', c: '#c2cfd6' },
  { id: 'holub', n: 'Holubí šedá', c: '#b8bbbb' },
  { id: 'grafit', n: 'Grafitová', c: '#4b5156' },
  { id: 'pulnoc', n: 'Půlnoční modrá', c: '#2f3e56' },
  { id: 'sterka-okr', n: 'Okrová stěrka', t: 'okrova-sterka' },
  { id: 'sterka-seda', n: 'Šedá stěrka', t: 'seda-sterka' }
];
DH.najdi = function (id) { return DH.BARVY.filter(function (b) { return b.id === id; })[0]; };
DH.TEL = '+420603907858'; DH.MAIL = 'bdohnal@seznam.cz';
