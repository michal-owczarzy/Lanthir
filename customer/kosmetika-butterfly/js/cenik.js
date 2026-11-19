/* Ceník a balíčky studia (převzato ze stávajícího webu studia) + výběr do rezervace.
   Položka: [název, cena (text, může být rozpětí), poznámka]. Výběr je v localStorage. */
window.BF = window.BF || {};
BF.CENIK = [
  { id: 'oblicej', nazev: 'Obličej', skupiny: [
    { n: 'Čištění pleti a dekoltu', p: [['Povrchové čištění', '40'], ['Hloubkové čištění', '60–80'], ['Hřejivý peeling s brusinkou', '130'], ['Hřejivý peeling s ibiškem', '130'], ['Hřejivý peeling s fíkem', '150'], ['Hřejivý peeling s granátovým jablkem', '150'], ['Peeling enzymový', '80']] },
    { n: 'Kosmetické masáže obličeje, krku a dekoltu', p: [['Liftingová maska', '280'], ['Výživná masáž', '260'], ['Základní masáž', '250'], ['Lymfatická masáž', '260'], ['Relaxační masáž', '250'], ['Hydratační masáž', '260'], ['Masáž očního okolí', '190']] },
    { n: 'Masky krémové a gelové', p: [['Maska krémová klidnící', '180'], ['Maska krémová výživná', '180'], ['Maska krémová čisticí', '180'], ['Maska krémová liftingová', '190'], ['Maska gelová hluboko hydratační', '180'], ['Maska gelová klidnící, hydratační', '180'], ['Maska gelová prohřívající', '180']] },
    { n: 'Kosmetické masky alginátové', p: [['Prášková maska s granátovým jablkem', '280'], ['Prášková maska s ibiškem', '280'], ['Prášková maska bělicí s cukrem', '280'], ['Čisticí prášková maska s blátem a cukrem', '280'], ['Pudrová maska k péči o oční okolí', '250'], ['Prohřívající modelážní maska', '310']] },
    { n: 'Masky s čistým rostlinným kolagenem', p: [['Collagen maska PCH complex', '300'], ['Collagen caviar', '290'], ['Collagen vitamin', '290'], ['Collagen aloe vera', '290'], ['Collagen green tea', '290']] },
    { n: 'Výživy pleti', pozn: 'Výživy pleti jsou rozdělené podle typu pleti a přání klientky.', p: [['Séra', '80–110'], ['Ampule', '90'], ['Kapsle', '70–90']] }
  ] },
  { id: 'rasy', nazev: 'Řasy, obočí a depilace', skupiny: [
    { n: 'Úprava obočí a řas', p: [['Formování obočí', '60'], ['Barvení obočí', '70'], ['Barvení řas', '80'], ['Trvalá na řasy', '300']] },
    { n: 'Depilace studeným voskem', p: [['Horní ret', '60'], ['Brada', '60'], ['Celý obličej', '90']] },
    { n: 'Depilace teplým voskem', p: [['Dolní část nohou po kolena', '150'], ['Celé nohy', '190'], ['Ruce', '120'], ['Třísla', '90'], ['Záda', '290–320']] },
    { n: 'Depilace cukrovou pastou', p: [['Podpaží', '160'], ['Třísla', '180'], ['Brazilka', '290']] }
  ] },
  { id: 'nehty', nazev: 'Ruce a nehty', skupiny: [
    { n: 'Péče o ruce a nehty', p: [['Manikúra', '100'], ['P-SHINE, výživa na nehty', '160'], ['Masáž rukou', '180'], ['Mořská manikúra', '130'], ['Parafínový zábal a maska na ruce', '250']] },
    { n: 'CND Shellac', p: [['Gelový lak na přírodní nehty', '200–300']] },
    { n: 'Nehtová modeláž gel a acrygel', p: [['Nové nehty', '450–500'], ['Doplnění', '300'], ['Zdobení', '100–150']] }
  ] },
  { id: 'telo', nazev: 'Tělo', skupiny: [
    { n: 'Kryolipolýza', p: [['1 nasátí', '1 300', 'dárek: vlasový elixír OROFLUIDO'], ['2 nasátí', '1 950', 'dárek: vlasový elixír OROFLUIDO']] },
    { n: 'Fotodepilace', p: [['Obličej, 1 partie', '600'], ['Horní ret a špička brady', '990'], ['Podpaží', '750'], ['Třísla, malá partie', '1 200'], ['Třísla, velká partie či brazilka', '1 750'], ['Třísla, malá část a podpaží', '1 850'], ['Třísla, velká část či brazilka a podpaží', '2 390'], ['Nohy, polovina', '3 500'], ['Nohy celé', '5 000'], ['Balíček BASIC', '3 950', 'polovina nohou, třísla, podpaží'], ['Balíček PREMIUM', '5 950', 'celé nohy, třísla, podpaží']] },
    { n: 'Kavitace', p: [['Břicho, menší část', '1 950'], ['Břicho, větší část', '2 500'], ['Boky a špíčky', '1 950'], ['Zadeček', '1 950'], ['Vnitřní stehna', '1 950'], ['Vnější stehna', '1 950'], ['Záda', '1 950']] },
    { n: 'Mesopeeling', p: [['Obličej', '1 200'], ['Obličej, krk a dekolt', '1 440']] },
    { n: 'Fotoomlazení', p: [['Obličej', '1 200'], ['Obličej, krk a dekolt', '1 700']] },
    { n: 'MESOB.T.X', p: [['Obličej', '1 200'], ['Obličej, krk a dekolt', '1 700']] },
    { n: 'Tělové bandáže AROSHA', p: [['Bandáže Arosha', '890', 'dárek: tělový krém proti celulitidě']] },
    { n: 'Bělení zubů', p: [['Bělení zubů', '890']] }
  ] }
];
BF.BALICKY = [
  { id: 'b-zrala', n: 'Kosmetické ošetření pro zralou pleť (40+)', c: '600', zahrnuje: 'výživnou masáž obličeje, krku a dekoltu, lehké čištění, aplikaci alginátové masky a výživných látek, úpravu obočí a poradenskou službu.', cil: 'výživa, hydratace a projasnění pleti.' },
  { id: 'b-mlada', n: 'Kosmetické ošetření mladé pleti', c: '580', zahrnuje: 'masáž obličeje, krku a dekoltu podle typu pleti, hloubkové čištění pleti, aplikaci účinných a výživných látek, úpravu obočí a barvení řas, masku podle typu pleti a poradenskou službu.', cil: 'zaměřit se na daný typ pleti, poradit vhodnou péči a zlepšit vzhled a stav pleti.' },
  { id: 'b-sacher', n: 'Luxusní ošetření Dr. Roland Sacher', c: '900', zahrnuje: 'liftingovou masáž obličeje, krku a dekoltu se sérem, mikromasáž očního okolí, očištění pleti, collagen masku s PCH complexem, ampuli s PCH complexem a závěrečnou péči a výživu pleti. Součástí je malý dárek na doma.', cil: 'hloubková výživa, lifting a projasnění pleti.' },
  { id: 'b-bio', n: 'Kosmetické ošetření řadou BIO ORGANIES', c: '680', zahrnuje: 'lymfatickou masáž obličeje, krku a dekoltu, hloubkové čištění pleti, práškovou BIO masku, BIO sérum a aktivní látky, úpravu obočí, barvení řas a poradenskou službu.', cil: 'hloubková hydratace a zpevnění pleti.' }
];

/* nejnižší částka z textu ceny („60–80“ → 60, „1 300“ → 1300) */
BF.min = function (c) { return parseInt(String(c).split(/[–-]/)[0].replace(/\s/g, ''), 10) || 0; };
BF.fmt = function (n) { return new Intl.NumberFormat('cs-CZ').format(n); };

/* výběr do rezervace (sdílí úvod i ceník) */
(function () {
  var KEY = 'butterfly-rezervace', list = [];
  try { list = JSON.parse(localStorage.getItem(KEY) || '[]') || []; } catch (e) {}
  var posl = [];
  function uloz() { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} posl.forEach(function (f) { f(list); }); }
  BF.vyber = {
    vse: function () { return list.slice(); },
    ma: function (id) { return list.some(function (x) { return x.id === id; }); },
    pridej: function (it) { if (!BF.vyber.ma(it.id)) { list.push(it); uloz(); } },
    odeber: function (id) { list = list.filter(function (x) { return x.id !== id; }); uloz(); },
    prepni: function (it) { if (BF.vyber.ma(it.id)) { BF.vyber.odeber(it.id); return false; } BF.vyber.pridej(it); return true; },
    smaz: function () { list = []; uloz(); },
    soucet: function () { return list.reduce(function (a, x) { return a + BF.min(x.c); }, 0); },
    rozpeti: function () { return list.some(function (x) { return /[–-]/.test(x.c); }); },
    sleduj: function (f) { posl.push(f); f(list); }
  };
})();
