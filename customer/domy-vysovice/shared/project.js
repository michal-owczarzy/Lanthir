/* Obsah projektu. Šablona čte jen tento soubor: nový developerský projekt
   = nový soubor s daty (v ostrém provozu content.json z administrace). */
(function () {
  var vysovice = {
    id: 'vysovice',
    name: 'Domy Výšovice',
    nameLines: ['Domy', 'Výšovice'],
    accent: '#d20067',
    place: 'Výšovice u Prostějova',
    lead: 'Osm nízkoenergetických bungalovů 4+kk se zelenou střechou, 10 km od Prostějova.',
    priceFrom: '5 490 000 Kč',
    stage: 'Čtvrtá etapa',
    houseType: 'PP05',
    contact: {
      person: 'Ing. David Foretek',
      company: 'CM Reality',
      phone: '+420 777 619 939',
      phoneHref: 'tel:+420777619939',
      email: 'foretek@cmreality.cz',
      address: ['Výšovice', '798 09, okres Prostějov']
    },
    // x, y = střed domu na situačním výkresu v procentech
    houses: [
      { no: '401', plot: 883, price: 5490000, status: 'sold', x: 52.0, y: 67.8 },
      { no: '402', plot: 939, price: 5490000, status: 'free', x: 62.0, y: 55.8 },
      { no: '403', plot: 916, price: 5490000, status: 'reserved', x: 46.5, y: 55.8 },
      { no: '404', plot: 943, price: 5490000, status: 'free', x: 57.5, y: 44.6 },
      { no: '405', plot: 900, price: 5490000, status: 'free', x: 41.2, y: 45.2 },
      { no: '406', plot: 906, price: 5490000, status: 'free', x: 52.0, y: 33.6 },
      { no: '407', plot: 910, price: 5490000, status: 'reserved', x: 36.0, y: 36.2 },
      { no: '408', plot: 870, price: 5490000, status: 'free', x: 47.4, y: 24.6 }
    ]
  };

  // Ukázka: stejná šablona, jiný projekt. Jen pro prezentaci rodiny webů.
  var ukazka = JSON.parse(JSON.stringify(vysovice));
  ukazka.id = 'ukazka';
  ukazka.name = 'Domy Za Humny';
  ukazka.nameLines = ['Domy', 'Za Humny'];
  ukazka.accent = '#1f7a5c';
  ukazka.place = 'Ukázkový projekt';
  ukazka.lead = 'Ukázka dalšího projektu ze stejné šablony: jiný název, barva a nabídka domů.';
  ukazka.priceFrom = '6 190 000 Kč';
  ukazka.stage = 'První etapa';
  ukazka.houses.forEach(function (h, i) {
    h.no = String(101 + i);
    h.price = 6190000 + (i % 3) * 150000;
    h.status = i < 2 ? 'reserved' : 'free';
  });

  var q = new URLSearchParams(location.search);
  var P = q.get('projekt') === 'ukazka' ? ukazka : vysovice;
  P.isDemo = P.id === 'ukazka';

  P.statusLabel = { free: 'Volný', reserved: 'Rezervace', sold: 'Prodáno' };
  P.formatPrice = function (n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Kč';
  };
  P.countFree = function () {
    return P.houses.filter(function (h) { return h.status === 'free'; }).length;
  };

  document.documentElement.style.setProperty('--accent', P.accent);
  window.PROJECT = P;
})();
