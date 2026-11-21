/* Nabídka (z popisu na Firmy.cz) a otevírací doba. Lístek se drží v localStorage. */
window.ZP = {
  TEL: '+420603584766', MAIL: 'zahradnictviporuba@seznam.cz',
  HOD: { 2: [8, 15], 3: [8, 15], 4: [8, 15], 5: [8, 15], 6: [8, 11] },
  POL: [{ id: 'zeli', n: 'Krouhané zelí', k: 1 },{ id: 'cibule', n: 'Cibule', k: 1 },{ id: 'mrkev', n: 'Mrkev', k: 1 },{ id: 'petrzel', n: 'Petržel', k: 1 },{ id: 'celer', n: 'Celer', k: 1 },{ id: 'repa', n: 'Červená řepa', k: 1 },{ id: 'krmna-repa', n: 'Krmná řepa', k: 5 }],
  nacti: function () { try { return JSON.parse(localStorage.getItem('zp-listek')) || {}; } catch (e) { return {}; } },
  uloz: function (l) { try { localStorage.setItem('zp-listek', JSON.stringify(l)); } catch (e) {} },
  kg: function (n) { return (Math.round(n * 10) / 10).toString().replace('.', ','); }
};
