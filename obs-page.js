/* ══════════════════════════════════════════════
   /observabilita/ — what an hour of downtime costs
   The visitor's own numbers: people who cannot work × what an hour of
   their time costs the firm + the sales that do not come in. Nothing is
   sent anywhere. The HTML already carries the result for the default
   values, so the section reads the same without script.
══════════════════════════════════════════════ */
(function () {
  const form = document.getElementById('calc');
  if (!form) return;
  const $ = id => document.getElementById(id);
  const people = $('cPeople'), rate = $('cRate'), sales = $('cSales');
  const HOURS_PER_DAY = 8;

  const LOCALE = { cs: 'cs-CZ', en: 'en-GB', pl: 'pl-PL' };
  const CUR = { cs: 'Kč', en: 'CZK', pl: 'CZK' };
  const lang = () => (LOCALE[document.documentElement.lang] ? document.documentElement.lang : 'cs');
  const money = v => {
    const l = lang();
    return new Intl.NumberFormat(LOCALE[l], { maximumFractionDigits: 0 }).format(v) + ' ' + CUR[l];
  };

  /* the filled part of each track follows its thumb */
  const fill = el => {
    const p = (el.value - el.min) / (el.max - el.min) * 100;
    el.style.setProperty('--fill', p.toFixed(1) + '%');
  };

  const update = () => {
    const n = +people.value, r = +rate.value, s = +sales.value;
    const hour = n * r + s;
    $('cPeopleOut').textContent = new Intl.NumberFormat(LOCALE[lang()]).format(n);
    $('cRateOut').textContent = money(r);
    $('cSalesOut').textContent = money(s);
    $('cHour').textContent = money(hour);
    $('cDay').textContent = money(hour * HOURS_PER_DAY);
    [people, rate, sales].forEach(fill);
  };

  form.addEventListener('input', update);
  /* applyLang() changes <html lang>; the numbers follow it */
  new MutationObserver(update).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  update();
})();
