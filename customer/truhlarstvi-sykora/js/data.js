/* Realizace z profilu Truhlářství Sýkora na ČESKÉSTAVBY.cz (23 fotek, stav 19. 11. 2026).
   [soubor, šířka, výška, popis] — popis jen podle toho, co je na fotce vidět. */
window.SY = window.SY || {};
SY.KAT = [
  { id: 'kuchyne', n: 'Kuchyňské linky', popis: 'Rohové i rovné linky, horní skříňky, vestavěné spotřebiče.', f: [
    ['kuchyne-rohova', 1024, 768, 'Rohová kuchyňská linka s prosklenými dvířky'],
    ['kuchyne-linka', 1024, 768, 'Spodní skříňky linky se sporákem'],
    ['kuchyne-spotrebice', 1024, 768, 'Vysoká skříň pro vestavnou troubu a mikrovlnku']] },
  { id: 'schody', n: 'Schody a zábradlí', popis: 'Dřevěná schodiště včetně točitých, zábradlí na míru.', f: [
    ['schody-zabradli', 1024, 768, 'Schodiště se zábradlím, pohled z patra'],
    ['schody-shora', 1024, 768, 'Točité dřevěné schodiště shora'],
    ['schody-tocite', 1022, 768, 'Zábradlí točitého schodiště']] },
  { id: 'skrine', n: 'Vestavěné skříně', popis: 'S posuvnými dveřmi, do podkroví pod šikminu, do předsíně.', f: [
    ['skrin-podkrovi', 1024, 768, 'Vestavěná skříň pod šikminou v podkroví'],
    ['skrin-posuvna', 600, 800, 'Skříň s posuvnými dveřmi a pruhem skla'],
    ['skrin-tresen', 1024, 768, 'Vestavěná skříň v tmavém dekoru'],
    ['skrin-predsin', 576, 768, 'Skříň s posuvnými dveřmi v předsíni'],
    ['skrin-vesak', 576, 768, 'Předsíňová stěna s věšákem a policí']] },
  { id: 'dvere', n: 'Dveře a zárubně', popis: 'Vnitřní i vchodové dveře z masivu, zárubně.', f: [
    ['dvere-vchodove', 1024, 768, 'Vchodové dveře z masivu s prosklením'],
    ['dvere-borovice', 1024, 768, 'Kazetové dveře z borovice'],
    ['dvere-pokoj', 1024, 768, 'Pokojové dveře z masivu se zárubní'],
    ['dvere-tmave', 640, 480, 'Tmavé kazetové dveře']] },
  { id: 'stoly', n: 'Stoly a židle', popis: 'Jídelní, psací a pracovní stoly, židle, konferenční stolky.', f: [
    ['jidelni-stul', 1024, 768, 'Jídelní stůl a vyřezávané židle z masivu'],
    ['stul-pracovna', 1024, 768, 'Rohový psací stůl se zásuvkami'],
    ['stul-zasuvky', 1024, 768, 'Kontejner se zásuvkami u psacího stolu']] },
  { id: 'pokoje', n: 'Ložnice a obývací pokoje', popis: 'Postele, obývací stěny, regály do dětského pokoje.', f: [
    ['postel-masiv', 1024, 768, 'Manželská postel z masivu'],
    ['obyvaci-stena', 1024, 768, 'Obývací stěna s místem pro televizi'],
    ['detsky-regal', 1024, 768, 'Regál s dvířky do dětského pokoje']] },
  { id: 'kancelar', n: 'Kancelářský nábytek', popis: 'Regály, skříně a police do kanceláře i skladu.', f: [
    ['kancelar-sklad', 400, 300, 'Regály do skladu'],
    ['kancelar-regal', 320, 240, 'Kancelářská skříň s otevřeným regálem']] }
];
SY.vse = function () {
  var a = [];
  SY.KAT.forEach(function (k) { k.f.forEach(function (f) { a.push({ kat: k.id, kn: k.n, s: f[0], w: f[1], h: f[2], alt: f[3] }); }); });
  return a;
};
SY.TEL = '+420737777739'; SY.TEL_TXT = '737 777 739'; SY.MAIL = 'truhlarstvi-sykora@seznam.cz';
