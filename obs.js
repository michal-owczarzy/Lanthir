/* ═══════════════════════════════════════════
   LANTHIR — obs.js  (/observabilita/)
   1. The planner: type what you want watched, see the checks we would set up.
   2. The pinned stage: three statements, one fragment, three states.
   Runs after script.js, so RM, FINE and currentLang are in scope.
═══════════════════════════════════════════ */

/* ── 1. Planner ───────────────────────────────
   Classifies the text by keywords (Czech, English, Polish) and prints a real
   monitoring plan for that kind of thing. No network calls, nothing invented
   about the visitor's systems: it shows what we would watch, not values. */
(function () {
  const input = document.getElementById('askInput');
  const rows = document.getElementById('askRows');
  const kindEl = document.getElementById('askKind');
  if (!input || !rows || !kindEl) return;

  /* rows: [check, how, interval, alert-when] per language */
  const PLAN = {
    web: {
      re: /(\.[a-z]{2,}(\/|$))|web|e-?shop|obchod|stránk|strank|site|strona|sklep|https?:/i,
      name: { cs: 'Web a aplikace', en: 'Website & app', pl: 'Strona i aplikacja' },
      rows: {
        cs: [['Dostupnost HTTPS', 'ze 3 míst', '1 min', 'web neodpovídá 2× po sobě'],
             ['Doba odezvy', 'HTTP měření', '1 min', 'déle než 2 s po 5 min'],
             ['SSL certifikát', 'kontrola řetězce', 'denně', 'zbývá méně než 14 dní'],
             ['Doména', 'WHOIS', 'denně', 'zbývá méně než 30 dní'],
             ['Formulář a košík', 'syntetický test', '15 min', 'odeslání selže']],
        en: [['HTTPS availability', 'from 3 locations', '1 min', 'no response twice in a row'],
             ['Response time', 'HTTP timing', '1 min', 'over 2 s for 5 min'],
             ['SSL certificate', 'chain check', 'daily', 'less than 14 days left'],
             ['Domain', 'WHOIS', 'daily', 'less than 30 days left'],
             ['Form and cart', 'synthetic test', '15 min', 'submission fails']],
        pl: [['Dostępność HTTPS', 'z 3 lokalizacji', '1 min', 'brak odpowiedzi 2× z rzędu'],
             ['Czas odpowiedzi', 'pomiar HTTP', '1 min', 'ponad 2 s przez 5 min'],
             ['Certyfikat SSL', 'kontrola łańcucha', 'codziennie', 'zostało mniej niż 14 dni'],
             ['Domena', 'WHOIS', 'codziennie', 'zostało mniej niż 30 dni'],
             ['Formularz i koszyk', 'test syntetyczny', '15 min', 'wysyłka się nie powiedzie']]
      }
    },
    k8s: {
      re: /kube|k8s|docker|kontejner|container|kontener|cluster|klastr|klaster|\bpods?\b|helm/i,
      name: { cs: 'Kontejnery a cluster', en: 'Containers & cluster', pl: 'Kontenery i klaster' },
      rows: {
        cs: [['Stav nodů', 'Kubernetes API', '1 min', 'node přejde do NotReady'],
             ['Restarty podů', 'API a události', '1 min', 'víc než 3 restarty za 10 min'],
             ['CPU a paměť', 'vůči limitům', '1 min', 'nad 90 % limitu'],
             ['Nasazení', 'rollout', 'při změně', 'nová verze nenaběhne'],
             ['Certifikáty clusteru', 'kontrola platnosti', 'denně', 'zbývá méně než 30 dní']],
        en: [['Node health', 'Kubernetes API', '1 min', 'a node goes NotReady'],
             ['Pod restarts', 'API and events', '1 min', 'over 3 restarts in 10 min'],
             ['CPU and memory', 'against limits', '1 min', 'above 90 % of the limit'],
             ['Deployments', 'rollout', 'on change', 'a new version fails to start'],
             ['Cluster certificates', 'validity check', 'daily', 'less than 30 days left']],
        pl: [['Stan węzłów', 'Kubernetes API', '1 min', 'węzeł przechodzi w NotReady'],
             ['Restarty podów', 'API i zdarzenia', '1 min', 'ponad 3 restarty w 10 min'],
             ['CPU i pamięć', 'względem limitów', '1 min', 'powyżej 90 % limitu'],
             ['Wdrożenia', 'rollout', 'przy zmianie', 'nowa wersja nie startuje'],
             ['Certyfikaty klastra', 'kontrola ważności', 'codziennie', 'zostało mniej niż 30 dni']]
      }
    },
    cloud: {
      re: /aws|azure|gcp|google cloud|cloud|chmur|m365|microsoft 365|office 365|s3\b|lambda/i,
      name: { cs: 'Cloud', en: 'Cloud', pl: 'Chmura' },
      rows: {
        cs: [['Stav služeb', 'API poskytovatele', '1 min', 'služba hlásí výpadek'],
             ['Výkon a kapacita', 'cloudové metriky', '1 min', 'instance nad 85 % déle než 10 min'],
             ['Kvóty a limity', 'API poskytovatele', '15 min', 'zbývá méně než 15 % kvóty'],
             ['Náklady', 'billing API', 'denně', 'útrata nad plánem o 20 %'],
             ['Přístupy a změny', 'audit log', 'průběžně', 'nečekaná změna oprávnění']],
        en: [['Service health', 'provider API', '1 min', 'a service reports an outage'],
             ['Performance and capacity', 'cloud metrics', '1 min', 'an instance above 85 % for 10 min'],
             ['Quotas and limits', 'provider API', '15 min', 'less than 15 % of a quota left'],
             ['Costs', 'billing API', 'daily', 'spend 20 % above plan'],
             ['Access and changes', 'audit log', 'continuous', 'an unexpected permission change']],
        pl: [['Stan usług', 'API dostawcy', '1 min', 'usługa zgłasza awarię'],
             ['Wydajność i pojemność', 'metryki chmury', '1 min', 'instancja powyżej 85 % przez 10 min'],
             ['Limity i kwoty', 'API dostawcy', '15 min', 'zostało mniej niż 15 % limitu'],
             ['Koszty', 'billing API', 'codziennie', 'wydatki 20 % ponad plan'],
             ['Dostępy i zmiany', 'audit log', 'na bieżąco', 'nieoczekiwana zmiana uprawnień']]
      }
    },
    iot: {
      re: /výrob|vyrob|production line|linia produk|stroj|maszyn|machine|plc|scada|senzor|sensor|czujnik|\biot\b|mqtt|opc ua|teplot|chlad/i,
      name: { cs: 'Výroba a IoT', en: 'Production & IoT', pl: 'Produkcja i IoT' },
      rows: {
        cs: [['Stav strojů', 'OPC UA, Modbus', '10 s', 'stroj stojí nebo hlásí poruchu'],
             ['Data ze senzorů', 'MQTT', 'průběžně', 'hodnota mimo povolený rozsah'],
             ['Výkon linky', 'vlastní sběr', '1 min', 'výroba pod plánem o 10 %'],
             ['Spojení zařízení', 'heartbeat', '30 s', 'zařízení přestane posílat data'],
             ['Brána a síť', 'agent, SNMP', '1 min', 'brána nebo linka vypadne']],
        en: [['Machine state', 'OPC UA, Modbus', '10 s', 'a machine stops or reports a fault'],
             ['Sensor data', 'MQTT', 'continuous', 'a value leaves its allowed range'],
             ['Line output', 'custom collector', '1 min', 'output 10 % below plan'],
             ['Device connectivity', 'heartbeat', '30 s', 'a device stops sending data'],
             ['Gateway and network', 'agent, SNMP', '1 min', 'the gateway or link goes down']],
        pl: [['Stan maszyn', 'OPC UA, Modbus', '10 s', 'maszyna stoi lub zgłasza awarię'],
             ['Dane z czujników', 'MQTT', 'na bieżąco', 'wartość poza dozwolonym zakresem'],
             ['Wydajność linii', 'własny kolektor', '1 min', 'produkcja 10 % poniżej planu'],
             ['Łączność urządzeń', 'heartbeat', '30 s', 'urządzenie przestaje wysyłać dane'],
             ['Bramka i sieć', 'agent, SNMP', '1 min', 'bramka lub łącze pada']]
      }
    },
    net: {
      re: /router|switch|přepín|prepin|firewall|wi-?fi|wlan|\bap\b|access point|mikrotik|ubiquiti|cisco|síť|sit\b|sieć|siec|network|linka|link|vpn|modem|łącz|lacz/i,
      name: { cs: 'Síťový prvek', en: 'Network device', pl: 'Urządzenie sieciowe' },
      rows: {
        cs: [['Dostupnost', 'ICMP ping', '1 min', 'ztráta paketů nad 20 %'],
             ['Vytížení linek', 'SNMP, NetFlow', '1 min', 'nad 80 % déle než 5 min'],
             ['Stav a chyby portů', 'SNMP, syslog', '1 min', 'port spadne nebo rostou chyby'],
             ['CPU a teplota', 'SNMP, API výrobce', '5 min', 'CPU nad 85 % nebo přehřátí'],
             ['Konfigurace', 'záloha', 'denně', 'někdo změní nastavení']],
        en: [['Availability', 'ICMP ping', '1 min', 'packet loss above 20 %'],
             ['Link load', 'SNMP, NetFlow', '1 min', 'above 80 % for over 5 min'],
             ['Port state and errors', 'SNMP, syslog', '1 min', 'a port drops or errors climb'],
             ['CPU and temperature', 'SNMP, vendor API', '5 min', 'CPU above 85 % or overheating'],
             ['Configuration', 'backup', 'daily', 'someone changes the settings']],
        pl: [['Dostępność', 'ICMP ping', '1 min', 'utrata pakietów powyżej 20 %'],
             ['Obciążenie łączy', 'SNMP, NetFlow', '1 min', 'powyżej 80 % przez ponad 5 min'],
             ['Stan i błędy portów', 'SNMP, syslog', '1 min', 'port pada lub rosną błędy'],
             ['CPU i temperatura', 'SNMP, API producenta', '5 min', 'CPU powyżej 85 % lub przegrzanie'],
             ['Konfiguracja', 'kopia zapasowa', 'codziennie', 'ktoś zmieni ustawienia']]
      }
    },
    srv: {
      re: /server|serwer|nas\b|databáz|databaz|database|baza|sql|postgres|mysql|linux|windows|\bvm\b|virtu|wirtu|záloh|zaloh|backup|kopi|soubor|plik|file/i,
      name: { cs: 'Server', en: 'Server', pl: 'Serwer' },
      rows: {
        cs: [['Procesor', 'agent', '1 min', 'nad 90 % déle než 10 min'],
             ['Paměť', 'agent', '1 min', 'nad 90 % nebo swapuje'],
             ['Disky', 'agent', '5 min', 'podle trendu se zaplní do 7 dní'],
             ['Služby', 'agent', '1 min', 'služba neběží'],
             ['Zálohy', 'kontrola úlohy', 'denně', 'poslední záloha starší než 26 h']],
        en: [['CPU', 'agent', '1 min', 'above 90 % for over 10 min'],
             ['Memory', 'agent', '1 min', 'above 90 % or swapping'],
             ['Disks', 'agent', '5 min', 'trend says full within 7 days'],
             ['Services', 'agent', '1 min', 'a service is not running'],
             ['Backups', 'job check', 'daily', 'last backup older than 26 h']],
        pl: [['Procesor', 'agent', '1 min', 'powyżej 90 % przez ponad 10 min'],
             ['Pamięć', 'agent', '1 min', 'powyżej 90 % lub swapuje'],
             ['Dyski', 'agent', '5 min', 'wg trendu zapełni się w 7 dni'],
             ['Usługi', 'agent', '1 min', 'usługa nie działa'],
             ['Kopie zapasowe', 'kontrola zadania', 'codziennie', 'ostatnia kopia starsza niż 26 h']]
      }
    },
    any: {
      re: /.*/,
      name: { cs: 'Zařízení nebo služba', en: 'Device or service', pl: 'Urządzenie lub usługa' },
      rows: {
        cs: [['Dostupnost', 'ICMP ping', '1 min', 'přestane odpovídat'],
             ['Otevřené porty', 'TCP test', '1 min', 'služba přestane naslouchat'],
             ['Logy', 'sběr a filtry', 'průběžně', 'objeví se chyby']],
        en: [['Availability', 'ICMP ping', '1 min', 'it stops responding'],
             ['Open ports', 'TCP test', '1 min', 'the service stops listening'],
             ['Logs', 'collection and filters', 'continuous', 'errors appear']],
        pl: [['Dostępność', 'ICMP ping', '1 min', 'przestaje odpowiadać'],
             ['Otwarte porty', 'test TCP', '1 min', 'usługa przestaje nasłuchiwać'],
             ['Logi', 'zbieranie i filtry', 'na bieżąco', 'pojawiają się błędy']]
      }
    }
  };
  /* order matters: "web server" is a server question about a website, but
     "Wi-Fi" must not fall to "file" and a domain wins over everything */
  const ORDER = ['web', 'k8s', 'cloud', 'iot', 'net', 'srv', 'any'];
  const CHECKS = { cs: n => n + (n >= 5 ? ' kontrol' : ' kontroly'), en: n => n + ' checks', pl: n => n + (n >= 5 ? ' kontroli' : ' kontrole') };

  const lang = () => (typeof currentLang !== 'undefined' && PLAN.web.name[currentLang]) ? currentLang : 'cs';
  const esc = t => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  let lastKind = '';
  let touched = false;
  const render = () => {
    const v = input.value.trim();
    const kind = v ? ORDER.find(k => PLAN[k].re.test(v)) : 'any';
    const L = lang();
    const p = PLAN[kind];
    const list = p.rows[L];
    kindEl.innerHTML = '<b>' + esc(p.name[L]) + '</b> · ' + CHECKS[L](list.length);
    const key = kind + L;
    if (key === lastKind) return;
    lastKind = key;
    rows.innerHTML = list.map((r, i) =>
      '<div class="ask-tr" role="row" style="--i:' + i + '">' +
      r.map(c => '<span role="cell">' + esc(c) + '</span>').join('') + '</div>').join('');
    if (!RM) {
      rows.classList.remove('swap');
      void rows.offsetWidth;   /* restart the stagger */
      rows.classList.add('swap');
    }
  };
  input.addEventListener('input', render);

  document.querySelectorAll('.ask-chip').forEach(b => b.addEventListener('click', () => {
    input.value = b.textContent.trim();
    touched = true;
    render();
    input.focus();
    const n = input.value.length;
    input.setSelectionRange(n, n);
  }));

  /* the prefilled example follows the language switch, unless the visitor
     has already typed or picked their own */
  input.addEventListener('input', () => { touched = true; }, { once: true });
  const prev = window.__pageSync;
  window.__pageSync = l => {
    if (prev) prev(l);
    if (!touched && T[l] && T[l]['obs.ask.val']) input.value = T[l]['obs.ask.val'];
    lastKind = '';
    render();
  };
  window.__pageSync(lang());
})();

/* ── Comparison on a phone ───────────────────
   The table turns into one block per row there, so each answer has to carry
   its column's name; copy it from the header so it follows the language. */
(function () {
  const head = document.querySelector('.cmp-row--head');
  if (!head) return;
  const label = () => {
    const names = Array.from(head.children).map(c => c.textContent.trim());
    document.querySelectorAll('.cmp-row:not(.cmp-row--head)').forEach(r =>
      Array.from(r.children).forEach((c, i) => { if (i) c.dataset.l = names[i]; }));
  };
  label();
  const prev = window.__pageSync;
  window.__pageSync = l => { if (prev) prev(l); label(); };
})();

/* ── 2. Pinned stage ──────────────────────────
   The statement nearest the middle of the viewport drives the fragment's
   state. A class switch, no screenshots; each state is its own HTML. */
(function () {
  const stage = document.getElementById('howStage');
  const steps = Array.from(document.querySelectorAll('.how-step'));
  if (!stage || !steps.length) return;

  const set = n => {
    stage.dataset.state = n;
    steps.forEach(s => s.classList.toggle('is-on', s.dataset.state === String(n)));
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) set(e.target.dataset.state);
  }), { rootMargin: '-48% 0px -48% 0px' });
  steps.forEach(s => io.observe(s));

  /* a click or tap on a statement shows its state too */
  steps.forEach(s => s.addEventListener('click', () => set(s.dataset.state)));
})();
