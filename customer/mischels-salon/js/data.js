/* Ceník z webu mischelsalon.cz (stav 19. 11. 2026). [název, cena, poznámka] */
window.MS = window.MS || {};
MS.CENIK = [
  { id: 'permanent', n: 'Permanentní make-up', uvod: 'Microblading tvoří jednotlivé chloupky, pudrová technika vytváří efekt nalíčeného obočí. Tetování rtů zvýrazní jejich tvar a sjednotí barevný tón.', foto: 'oboci-portret', p: [
    ['Tetování obočí – Powder brows', '4 200', 'pudrová technika'], ['Tetování obočí – PhiBrows microblading', '4 600', 'vláskování a stínování'], ['Aquarelle lips', '4 800', 'kontura a stínování rtů'], ['Kontura rtů', '1 500'], ['Korekce', '1 200', 'do 6–8 týdnů od první aplikace'], ['Oživení', '2 700', 'do 18 měsíců']] },
  { id: 'oboci-rasy', n: 'Obočí a řasy', uvod: 'Laminace řas je šetrné natočení řas s barvením, výživou a hydratačním sérem. Laminace obočí vyrovná chloupky, upraví tvar, obarví a vyživí.', foto: 'rasy', p: [
    ['Laminace obočí (brow lamination)', '1 050'], ['Laminace řas (lash lamination)', '1 050'], ['Barvení řas', '300'], ['Barvení obočí', '200'], ['Úprava obočí pinzetou', '150'], ['Úprava obočí tekutým voskem', '200'], ['Barvení obočí a úprava pinzetou', '300'], ['Barvení obočí a úprava tekutým voskem', '350'], ['Brow henna', '750', 'barvení hennou s rekonstrukcí tvaru']] },
  { id: 'pece', n: 'Kosmetická péče', uvod: 'Relaxační masáž a alginátové masky, které se nanáší i na oči a rty.', foto: 'cisteni', p: [
    ['Alginátová maska', '200', 'Hyaluronic, Women’s Bliss, Oriental…'], ['Relaxační masáž dekoltu', '300'], ['Relaxační masáž obličeje', '300'], ['Masáž dekoltu a obličeje', '400']] },
  { id: 'cukrova-pasta', n: 'Depilace cukrovou pastou', uvod: 'Cukrová pasta je přírodní a šetrná k pokožce. Při pravidelné aplikaci budete 2–3 týdny bez chloupků. Je vhodná i pro muže.', foto: 'pasta', p: [
    ['Dámská brazilská depilace', '800'], ['Brazilka pro stálé klientky', '650'], ['Třísla', '300'], ['Klín, horní část', '400'], ['Předloktí', '350'], ['Celé ruce', '500'], ['Podpaží', '300'], ['Hrudník', '400'], ['Břicho', '400'], ['Lýtka', '450'], ['Stehna', '500'], ['Záda', '800'], ['Bedra', '300'], ['Hýždě', '400']] },
  { id: 'vosk', n: 'Depilace voskem', foto: 'pasta', p: [['Horní ret', '140'], ['Brada', '140'], ['Celý obličej', '450'], ['Celé nohy', '800']] },
  { id: 'cisteni', n: 'Čištění pleti s Ella Baché', uvod: 'Ultrazvuková špachtle v kombinaci s ruční technikou a francouzská kosmetika Ella Baché. Vhodné pro všechny typy pleti.', foto: 'cisteni', p: [
    ['Čištění podle typu pleti', '750', 'povrchové čištění, tonizace, exfoliační peeling, hloubkové čištění, ultrazvuková špachtle, maska, krém'],
    ['K čištění: alginátová maska', '100'], ['K čištění: barvení řas', '80'], ['K čištění: barvení obočí', '80'], ['K čištění: úprava obočí pinzetou', '60'], ['K čištění: úprava obočí tekutým voskem', '80'], ['K čištění: masáž obličeje', '100'], ['K čištění: masáž dekoltu', '100'], ['K čištění: depilace horního rtu', '70'], ['K čištění: depilace brady', '70']] },
  { id: 'liceni', n: 'Líčení a make-up', foto: 'liceni', p: [
    ['Večerní, slavnostní, plesové líčení', '800'], ['Business make-up', '500'], ['Denní make-up', '400'], ['Zkouška svatebního líčení', '700'], ['Svatební líčení', '1 000'], ['Líčení svatebčanek', '700'], ['Kurz líčení pro začátečníky', '800'], ['Kurz líčení pro pokročilé', '900'], ['Proměna líčení', '800'], ['Extravagantní líčení', '850 / h', 'make-up a úprava obočí']] },
  { id: 'malovani', n: 'Malování dětí na obličej', uvod: 'Děti se můžou stát svou oblíbenou pohádkovou postavou nebo zvířátkem. Na narozeninové oslavy i firemní akce.', foto: 'malovani', p: [['Malování na obličej', 'dle domluvy', 'podle počtu dětí']] }
];
MS.najdi = function (id) { return MS.CENIK.filter(function (k) { return k.id === id; })[0]; };
