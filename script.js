/* ═══════════════════════════════════════════
   LANTHIR — script.js
   i18n · Canvas Network · Scroll Animations · Counters
═══════════════════════════════════════════ */

// ── Translations ─────────────────────────
const T = {
  cs: {
    // Nav
    'nav.services':  'Služby',
    'nav.about':     'O nás',
    'nav.why':       'Proč my',
    'nav.results':   'Výsledky',
    'nav.contact':   'Kontakt',
    'nav.cta':       'Začít',

    // Hero
    'hero.badge':  'Certifikovaný partner Zabbix',
    'hero.h1':     'Monitorujte <span class="grad-text">Vše.</span><br>Nezameškejte <span class="grad-text">Nic.</span>',
    'hero.sub':    'Monitoring na podnikové úrovni poháněný Zabbixem. Přehled v reálném čase o celé infrastruktuře — servery, sítě, cloud i aplikace.',
    'hero.btn1':   'Začít monitorovat',
    'hero.btn2':   'Prozkoumat služby',
    'hero.chip1':  'Monitorovaných hostů',
    'hero.chip2':  'Záruční dostupnost',
    'hero.chip3':  'Expertní podpora',

    // Widget
    'widget.title':  'Přehled systému',
    'widget.cpu':    'Využití CPU',
    'widget.mem':    'Paměť',
    'widget.net':    'Síť I/O',
    'widget.disk':   'Disk I/O',
    'widget.alert1': 'web-server-01 — Vše v pořádku',
    'widget.alert2': 'db-cluster-02 — Vysoké využití paměti',
    'widget.alert3': 'firewall-01 — Provozuschopný',

    // Services
    'svc.tag':     'Co děláme',
    'svc.heading': 'Komplexní <span class="grad-text">monitorovací služby</span>',
    'svc.sub':     'Od prvotního nasazení až po průběžnou optimalizaci — pokrýváme každý aspekt vašich monitorovacích potřeb.',
    'svc.more':    'Zjistit více <span>→</span>',
    'svc.1.title': 'Implementace Zabbix',
    'svc.1.desc':  'Kompletní nasazení Zabbixu na míru vaší infrastruktuře — od návrhu architektury po produkční spuštění.',
    'svc.2.title': 'Monitoring infrastruktury',
    'svc.2.desc':  'Komplexní přehled napříč servery, sítěmi, cloudovými prostředími a aplikacemi v reálném čase.',
    'svc.3.title': 'Správa upozornění',
    'svc.3.desc':  'Inteligentní alerting s eskalačními politikami, rozvrhem pohotovosti a integrací do vašich nástrojů.',
    'svc.4.title': 'Vlastní dashboardy',
    'svc.4.desc':  'Dashboardy Zabbix na míru, které zobrazují metriky nejdůležitější právě pro váš tým.',
    'svc.5.title': 'Analýza výkonu',
    'svc.5.desc':  'Hloubková analytika a kapacitní plánování, aby vaše systémy zvládaly rostoucí požadavky.',
    'svc.6.title': 'Spravovaný monitoring',
    'svc.6.desc':  'Plně spravovaná služba 24/7 — hlídáme vaši infrastrukturu, vy se soustředíte na byznys.',

    // About
    'about.tag':     'O nás',
    'about.heading': 'Poznejte <span class="grad-text">tým za Lanthirem</span>',
    'about.role':    'Zakladatel & Zabbix Specialista',
    'about.bio':     'Zakladatel společnosti Lanthir a přední odborník na monitorovací řešení postavená na platformě Zabbix. S více než 8 lety zkušeností v oblasti IT infrastruktury pomohl stovkám firem získat přehled nad jejich systémy a zajistit jejich spolehlivý provoz. Specializuje se na rozsáhlé Zabbix implementace, návrh monitorovacích architektur a integraci s podnikovými ITSM nástroji.',
    'about.hl1':     'Let v oboru',
    'about.hl2':     'Projektů dokončeno',
    'about.hl3':     'Monitorovaných hostů',

    // Expertise
    'exp.tag':     'Naše odbornost',
    'exp.heading': 'Technologie &amp; <span class="grad-text">certifikace</span>',
    'exp.sub':     'Hluboká specializace v oblasti enterprise monitoringu — od síťové vrstvy až po cloudové prostředí.',
    'badge.expert':   'Expert',
    'badge.advanced': 'Pokročilý',
    'exp.1.title': 'Zabbix Platform',
    'exp.1.desc':  'Hluboká znalost Zabbixu — od instalace a šablon po HA clustering a výkonnostní ladění.',
    'exp.2.title': 'Síťový monitoring',
    'exp.2.desc':  'SNMP, NetFlow, IPAM — monitoring zařízení Cisco, HP, Juniper a dalších síťových prvků.',
    'exp.3.title': 'Servery &amp; Virtualizace',
    'exp.3.desc':  'Linux, Windows Server, VMware, Hyper-V — fyzická i virtuální prostředí bez výjimky.',
    'exp.4.title': 'Cloud monitoring',
    'exp.4.desc':  'Microsoft Azure, AWS, Google Cloud — hybridní i plně cloudová prostředí pod kontrolou.',
    'exp.5.title': 'Databáze &amp; Aplikace',
    'exp.5.desc':  'MySQL, MSSQL, Oracle, PostgreSQL, MongoDB — monitoring výkonu databází i aplikací.',
    'exp.6.title': 'Vlastní vývoj',
    'exp.6.desc':  'Vlastní šablony Zabbix, skripty, API integrace a automatizace pro jedinečné potřeby.',
    'exp.7.title': 'ITSM integrace',
    'exp.7.desc':  'ServiceNow, Jira, PagerDuty, Slack, Teams — monitoring propojený s vaším toolstackem.',
    'exp.8.title': 'Bezpečnostní monitoring',
    'exp.8.desc':  'Detekce anomálií, log monitoring, upozornění na bezpečnostní incidenty a compliance reporting.',

    // Why Us
    'why.tag':     'Proč Lanthir',
    'why.heading': 'Navrženo pro <span class="grad-text">kritická prostředí</span>',
    'why.1.title': 'Rychlé nasazení',
    'why.1.desc':  'Od nuly k plnému monitorovacímu pokrytí za dny, ne týdny.',
    'why.2.title': 'Hluboká odbornost Zabbix',
    'why.2.desc':  'Certifikovaní inženýři s letitými zkušenostmi napříč komplexními prostředími.',
    'why.3.title': 'Dedikovaná podpora',
    'why.3.desc':  'Jmenovaný inženýr, který zná vaše prostředí — dostupný, kdy ho potřebujete.',
    'why.4.title': 'Škálovatelná architektura',
    'why.4.desc':  'Řešení navržená tak, aby rostla s vámi — od 50 hostů po 50 000 a více.',

    // Stats
    'stats.tag':     'Výsledky',
    'stats.heading': 'Čísla, která <span class="grad-text">mluví za vše</span>',
    'stats.1': 'Spokojených klientů',
    'stats.2': 'Monitorovaných hostů',
    'stats.3': 'Dostupnost zajištěna',
    'stats.4': 'Let zkušeností',

    // CTA
    'cta.h2': 'Chcete vidět vše <span class="grad-text">v reálném čase?</span>',
    'cta.p':  'Vytvořme monitorovací řešení přesně na míru vaší infrastruktuře.',
    'cta.btn':'Pomluvit s expertem',

    // Contact
    'contact.tag':       'Kontaktujte nás',
    'contact.heading':   'Začněme <span class="grad-text">monitorovat</span>',
    'contact.email.lbl': 'E-mail',
    'contact.phone.lbl': 'Telefon',
    'contact.loc.lbl':   'Místo',
    'contact.loc.val':   'Česká republika',
    'form.name.lbl':     'Jméno',
    'form.name.ph':      'Vaše jméno',
    'form.email.lbl':    'E-mail',
    'form.email.ph':     'váš@email.com',
    'form.company.lbl':  'Firma',
    'form.company.ph':   'Vaše firma',
    'form.msg.lbl':      'Zpráva',
    'form.msg.ph':       'Popište vaše potřeby v oblasti monitoringu...',
    'form.send':         'Odeslat zprávu',
    'form.success':      'Zpráva odeslána! Ozveme se co nejdříve.',

    // Footer
    'footer.tagline': 'Podniková monitorovací řešení poháněná Zabbixem.',
    'footer.col1.h':  'Služby',
    'footer.col2.h':  'Společnost',
    'footer.copy':    '© 2026 Lanthir Monitoring Solutions. Všechna práva vyhrazena.',
  },

  en: {
    'nav.services':  'Services',
    'nav.about':     'About',
    'nav.why':       'Why Us',
    'nav.results':   'Results',
    'nav.contact':   'Contact',
    'nav.cta':       'Get Started',

    'hero.badge':  'Zabbix Certified Partner',
    'hero.h1':     'Monitor <span class="grad-text">Everything.</span><br>Miss <span class="grad-text">Nothing.</span>',
    'hero.sub':    'Enterprise-grade monitoring powered by Zabbix. Real-time visibility into your entire infrastructure — servers, networks, cloud and applications.',
    'hero.btn1':   'Start Monitoring',
    'hero.btn2':   'Explore Services',
    'hero.chip1':  'Monitored Hosts',
    'hero.chip2':  'Uptime SLA',
    'hero.chip3':  'Expert Support',

    'widget.title':  'System Overview',
    'widget.cpu':    'CPU Usage',
    'widget.mem':    'Memory',
    'widget.net':    'Network I/O',
    'widget.disk':   'Disk I/O',
    'widget.alert1': 'web-server-01 — All systems normal',
    'widget.alert2': 'db-cluster-02 — High memory usage',
    'widget.alert3': 'firewall-01 — Operational',

    'svc.tag':     'What We Do',
    'svc.heading': 'Comprehensive <span class="grad-text">Monitoring Services</span>',
    'svc.sub':     'From initial deployment to ongoing optimization, we cover every aspect of your monitoring needs.',
    'svc.more':    'Learn more <span>→</span>',
    'svc.1.title': 'Zabbix Implementation',
    'svc.1.desc':  'Full-scale Zabbix deployment tailored to your infrastructure. From architecture design to production rollout.',
    'svc.2.title': 'Infrastructure Monitoring',
    'svc.2.desc':  'End-to-end visibility across servers, networks, cloud environments, and applications in real time.',
    'svc.3.title': 'Alert Management',
    'svc.3.desc':  'Intelligent alerting with escalation policies, on-call scheduling, and integration with your existing toolstack.',
    'svc.4.title': 'Custom Dashboards',
    'svc.4.desc':  'Tailor-made Zabbix dashboards that surface the metrics that matter most to your team.',
    'svc.5.title': 'Performance Analysis',
    'svc.5.desc':  'Deep-dive analytics and capacity planning to keep your systems healthy and ahead of demand.',
    'svc.6.title': 'Managed Monitoring',
    'svc.6.desc':  'Fully managed 24/7 monitoring — we watch your infrastructure so you can focus on your business.',

    'about.tag':     'About Us',
    'about.heading': 'Meet the <span class="grad-text">team behind Lanthir</span>',
    'about.role':    'Founder & Zabbix Specialist',
    'about.bio':     'Founder of Lanthir and a leading expert in monitoring solutions built on the Zabbix platform. With over 8 years of experience in IT infrastructure, he has helped hundreds of companies gain visibility into their systems and ensure their reliable operation. He specializes in large-scale Zabbix implementations, monitoring architecture design, and integration with enterprise ITSM tools.',
    'about.hl1':     'Years in the field',
    'about.hl2':     'Projects completed',
    'about.hl3':     'Monitored hosts',

    'exp.tag':     'Our Expertise',
    'exp.heading': 'Technology &amp; <span class="grad-text">Certifications</span>',
    'exp.sub':     'Deep specialization in enterprise monitoring — from the network layer all the way to cloud environments.',
    'badge.expert':   'Expert',
    'badge.advanced': 'Advanced',
    'exp.1.title': 'Zabbix Platform',
    'exp.1.desc':  'Deep Zabbix knowledge — from installation and templates to HA clustering and performance tuning.',
    'exp.2.title': 'Network Monitoring',
    'exp.2.desc':  'SNMP, NetFlow, IPAM — monitoring of Cisco, HP, Juniper and other network devices.',
    'exp.3.title': 'Servers &amp; Virtualization',
    'exp.3.desc':  'Linux, Windows Server, VMware, Hyper-V — physical and virtual environments covered.',
    'exp.4.title': 'Cloud Monitoring',
    'exp.4.desc':  'Microsoft Azure, AWS, Google Cloud — hybrid and fully cloud environments under control.',
    'exp.5.title': 'Databases &amp; Applications',
    'exp.5.desc':  'MySQL, MSSQL, Oracle, PostgreSQL, MongoDB — database and application performance monitoring.',
    'exp.6.title': 'Custom Development',
    'exp.6.desc':  'Custom Zabbix templates, scripts, API integrations and automation for unique requirements.',
    'exp.7.title': 'ITSM Integration',
    'exp.7.desc':  'ServiceNow, Jira, PagerDuty, Slack, Teams — monitoring connected to your toolstack.',
    'exp.8.title': 'Security Monitoring',
    'exp.8.desc':  'Anomaly detection, log monitoring, security incident alerts and compliance reporting.',

    'why.tag':     'Why Lanthir',
    'why.heading': 'Built for <span class="grad-text">mission-critical</span> environments',
    'why.1.title': 'Rapid Deployment',
    'why.1.desc':  'Go from zero to full monitoring coverage in days, not weeks.',
    'why.2.title': 'Deep Zabbix Expertise',
    'why.2.desc':  'Certified engineers with years of hands-on Zabbix experience across complex environments.',
    'why.3.title': 'Dedicated Support',
    'why.3.desc':  'A named engineer who knows your environment — available when you need them.',
    'why.4.title': 'Scalable Architecture',
    'why.4.desc':  'Solutions designed to grow with you — from 50 hosts to 50,000 and beyond.',

    'stats.tag':     'Results',
    'stats.heading': 'Numbers that <span class="grad-text">speak for themselves</span>',
    'stats.1': 'Happy Clients',
    'stats.2': 'Monitored Hosts',
    'stats.3': 'Uptime Delivered',
    'stats.4': 'Years Experience',

    'cta.h2': 'Ready to see everything <span class="grad-text">in real time?</span>',
    'cta.p':  'Let\'s build a monitoring solution tailored to your infrastructure.',
    'cta.btn':'Talk to an Expert',

    'contact.tag':       'Get In Touch',
    'contact.heading':   'Let\'s start <span class="grad-text">monitoring</span>',
    'contact.email.lbl': 'Email',
    'contact.phone.lbl': 'Phone',
    'contact.loc.lbl':   'Location',
    'contact.loc.val':   'Czech Republic',
    'form.name.lbl':     'Name',
    'form.name.ph':      'Your name',
    'form.email.lbl':    'Email',
    'form.email.ph':     'your@email.com',
    'form.company.lbl':  'Company',
    'form.company.ph':   'Your company',
    'form.msg.lbl':      'Message',
    'form.msg.ph':       'Tell us about your monitoring needs...',
    'form.send':         'Send Message',
    'form.success':      'Message sent! We\'ll get back to you shortly.',

    'footer.tagline': 'Enterprise monitoring solutions powered by Zabbix.',
    'footer.col1.h':  'Services',
    'footer.col2.h':  'Company',
    'footer.copy':    '© 2026 Lanthir Monitoring Solutions. All rights reserved.',
  },

  pl: {
    'nav.services':  'Usługi',
    'nav.about':     'O nas',
    'nav.why':       'Dlaczego My',
    'nav.results':   'Wyniki',
    'nav.contact':   'Kontakt',
    'nav.cta':       'Zaczynamy',

    'hero.badge':  'Certyfikowany Partner Zabbix',
    'hero.h1':     'Monitoruj <span class="grad-text">Wszystko.</span><br>Nie przegap <span class="grad-text">Niczego.</span>',
    'hero.sub':    'Monitoring klasy enterprise oparty na Zabbixie. Wgląd w czasie rzeczywistym w całą infrastrukturę — serwery, sieci, chmurę i aplikacje.',
    'hero.btn1':   'Zacznij monitorować',
    'hero.btn2':   'Poznaj usługi',
    'hero.chip1':  'Monitorowanych hostów',
    'hero.chip2':  'Gwarantowana dostępność',
    'hero.chip3':  'Wsparcie ekspertów',

    'widget.title':  'Przegląd systemu',
    'widget.cpu':    'Użycie CPU',
    'widget.mem':    'Pamięć',
    'widget.net':    'Sieć I/O',
    'widget.disk':   'Dysk I/O',
    'widget.alert1': 'web-server-01 — Wszystko w porządku',
    'widget.alert2': 'db-cluster-02 — Wysokie użycie pamięci',
    'widget.alert3': 'firewall-01 — Działa prawidłowo',

    'svc.tag':     'Co robimy',
    'svc.heading': 'Kompleksowe <span class="grad-text">usługi monitoringu</span>',
    'svc.sub':     'Od pierwszego wdrożenia po ciągłą optymalizację — obsługujemy każdy aspekt Twoich potrzeb monitoringowych.',
    'svc.more':    'Dowiedz się więcej <span>→</span>',
    'svc.1.title': 'Wdrożenie Zabbix',
    'svc.1.desc':  'Pełne wdrożenie Zabbix dostosowane do Twojej infrastruktury — od projektu architektury po uruchomienie produkcyjne.',
    'svc.2.title': 'Monitoring infrastruktury',
    'svc.2.desc':  'Pełna widoczność serwerów, sieci, środowisk chmurowych i aplikacji w czasie rzeczywistym.',
    'svc.3.title': 'Zarządzanie alertami',
    'svc.3.desc':  'Inteligentne alerty z politykami eskalacji, harmonogramem dyżurów i integracją z istniejącymi narzędziami.',
    'svc.4.title': 'Własne dashboardy',
    'svc.4.desc':  'Dashboardy Zabbix na miarę, które pokazują metryki najważniejsze dla Twojego zespołu.',
    'svc.5.title': 'Analiza wydajności',
    'svc.5.desc':  'Dogłębna analityka i planowanie pojemności, by systemy nadążały za rosnącymi wymaganiami.',
    'svc.6.title': 'Zarządzany monitoring',
    'svc.6.desc':  'W pełni zarządzana usługa 24/7 — pilnujemy infrastruktury, Ty skupiasz się na biznesie.',

    'about.tag':     'O nas',
    'about.heading': 'Poznaj <span class="grad-text">zespół Lanthira</span>',
    'about.role':    'Założyciel & Specjalista Zabbix',
    'about.bio':     'Założyciel Lanthira i czołowy ekspert w zakresie rozwiązań monitorujących opartych na platformie Zabbix. Posiadając ponad 8 lat doświadczenia w infrastrukturze IT, pomógł setkom firm zyskać wgląd w ich systemy i zapewnić ich niezawodne działanie. Specjalizuje się w dużych wdrożeniach Zabbix, projektowaniu architektury monitoringu i integracji z korporacyjnymi narzędziami ITSM.',
    'about.hl1':     'Lat w branży',
    'about.hl2':     'Ukończonych projektów',
    'about.hl3':     'Monitorowanych hostów',

    'exp.tag':     'Nasza wiedza',
    'exp.heading': 'Technologie &amp; <span class="grad-text">Certyfikaty</span>',
    'exp.sub':     'Głoka specjalizacja w monitoringu enterprise — od warstwy sieciowej aż po środowiska chmurowe.',
    'badge.expert':   'Ekspert',
    'badge.advanced': 'Zaawansowany',
    'exp.1.title': 'Platforma Zabbix',
    'exp.1.desc':  'Głęboka znajomość Zabbix — od instalacji i szablonów po klastrowanie HA i strojenie wydajności.',
    'exp.2.title': 'Monitoring sieci',
    'exp.2.desc':  'SNMP, NetFlow, IPAM — monitoring urządzeń Cisco, HP, Juniper i innych elementów sieciowych.',
    'exp.3.title': 'Serwery &amp; Wirtualizacja',
    'exp.3.desc':  'Linux, Windows Server, VMware, Hyper-V — środowiska fizyczne i wirtualne bez wyjątku.',
    'exp.4.title': 'Monitoring chmury',
    'exp.4.desc':  'Microsoft Azure, AWS, Google Cloud — środowiska hybrydowe i w pełni chmurowe pod kontrolą.',
    'exp.5.title': 'Bazy danych &amp; Aplikacje',
    'exp.5.desc':  'MySQL, MSSQL, Oracle, PostgreSQL, MongoDB — monitoring wydajności baz danych i aplikacji.',
    'exp.6.title': 'Własny rozwój',
    'exp.6.desc':  'Własne szablony Zabbix, skrypty, integracje API i automatyzacja dla unikalnych potrzeb.',
    'exp.7.title': 'Integracja ITSM',
    'exp.7.desc':  'ServiceNow, Jira, PagerDuty, Slack, Teams — monitoring połączony z Twoim toolstackiem.',
    'exp.8.title': 'Monitoring bezpieczeństwa',
    'exp.8.desc':  'Wykrywanie anomalii, monitoring logów, alerty bezpieczeństwa i raportowanie zgodności.',

    'why.tag':     'Dlaczego Lanthir',
    'why.heading': 'Zbudowane dla <span class="grad-text">środowisk krytycznych</span>',
    'why.1.title': 'Szybkie wdrożenie',
    'why.1.desc':  'Od zera do pełnego pokrycia monitoringowego w dni, nie tygodnie.',
    'why.2.title': 'Głęboka wiedza Zabbix',
    'why.2.desc':  'Certyfikowani inżynierowie z wieloletnim doświadczeniem w złożonych środowiskach.',
    'why.3.title': 'Dedykowane wsparcie',
    'why.3.desc':  'Dedykowany inżynier, który zna Twoje środowisko — dostępny, gdy go potrzebujesz.',
    'why.4.title': 'Skalowalna architektura',
    'why.4.desc':  'Rozwiązania zaprojektowane do wzrostu razem z Tobą — od 50 hostów do 50 000 i więcej.',

    'stats.tag':     'Wyniki',
    'stats.heading': 'Liczby, które <span class="grad-text">mówią same za siebie</span>',
    'stats.1': 'Zadowolonych klientów',
    'stats.2': 'Monitorowanych hostów',
    'stats.3': 'Zapewniona dostępność',
    'stats.4': 'Lat doświadczenia',

    'cta.h2': 'Chcesz widzieć wszystko <span class="grad-text">w czasie rzeczywistym?</span>',
    'cta.p':  'Zbudujmy rozwiązanie monitorujące dostosowane do Twojej infrastruktury.',
    'cta.btn':'Porozmawiaj z ekspertem',

    'contact.tag':       'Skontaktuj się',
    'contact.heading':   'Zacznijmy <span class="grad-text">monitorować</span>',
    'contact.email.lbl': 'E-mail',
    'contact.phone.lbl': 'Telefon',
    'contact.loc.lbl':   'Lokalizacja',
    'contact.loc.val':   'Czechy',
    'form.name.lbl':     'Imię',
    'form.name.ph':      'Twoje imię',
    'form.email.lbl':    'E-mail',
    'form.email.ph':     'twoj@email.com',
    'form.company.lbl':  'Firma',
    'form.company.ph':   'Twoja firma',
    'form.msg.lbl':      'Wiadomość',
    'form.msg.ph':       'Opisz swoje potrzeby w zakresie monitoringu...',
    'form.send':         'Wyślij wiadomość',
    'form.success':      'Wiadomość wysłana! Odezwiemy się wkrótce.',

    'footer.tagline': 'Korporacyjne rozwiązania monitorujące oparte na Zabbixie.',
    'footer.col1.h':  'Usługi',
    'footer.col2.h':  'Firma',
    'footer.copy':    '© 2026 Lanthir Monitoring Solutions. Wszelkie prawa zastrzeżone.',
  }
};

// ── i18n Engine ──────────────────────────
let currentLang = localStorage.getItem('lanthir-lang') || 'cs';

function applyLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  localStorage.setItem('lanthir-lang', lang);
  document.documentElement.lang = lang;

  // Update text content (innerHTML to support gradient spans)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = T[lang][el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = T[lang][el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  // Update active lang button
  document.querySelectorAll('.ls-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── Language Switcher Init ───────────────
document.querySelectorAll('.ls-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
applyLang(currentLang);

// ── Nav scroll effect ────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Mobile burger ────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Hero Canvas — Particle Network ───────
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [];
  const NODE_COUNT   = 70;
  const CONNECT_DIST = 160;
  const COLORS = ['#7c3aff','#2060ff','#00d4c8','#4090ff','#9b6aff'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeNode() {
    return {
      x:   Math.random() * W,
      y:   Math.random() * H,
      vx:  (Math.random() - .5) * .4,
      vy:  (Math.random() - .5) * .4,
      r:   Math.random() * 2 + 1,
      col: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(32,140,255,${(1 - d / CONNECT_DIST) * .22})`;
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.col;
      ctx.globalAlpha = .7;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  let mx = -9999, my = -9999;
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
  }, { passive: true });
  canvas.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  function loop() {
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      if (n.y > H + 20) n.y = -20;
      const dx = n.x - mx, dy = n.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        n.vx += (dx / d) * .06; n.vy += (dy / d) * .06;
        const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (spd > 1.5) { n.vx = (n.vx / spd) * 1.5; n.vy = (n.vy / spd) * 1.5; }
      }
    }
    draw();
    requestAnimationFrame(loop);
  }

  resize();
  nodes = Array.from({ length: NODE_COUNT }, makeNode);
  loop();

  new ResizeObserver(resize).observe(canvas.parentElement);
})();

// ── Scroll Reveal ────────────────────────
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const siblings = Array.from(e.target.parentElement.querySelectorAll('[data-reveal]'));
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('revealed'), idx * 80);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
})();

// ── Animated Stat Counters ───────────────
(function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = parseInt(e.target.dataset.target, 10);
      const start  = performance.now();
      const dur    = 1800;
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        e.target.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else e.target.textContent = target.toLocaleString();
      })(start);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-count[data-target]').forEach(c => io.observe(c));
})();

// ── Contact Form ─────────────────────────
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '…';
    setTimeout(() => {
      form.querySelectorAll('input, textarea').forEach(el => el.value = '');
      btn.style.display = 'none';
      success.classList.add('show');
    }, 1200);
  });
})();

// ── Active Nav Highlight ─────────────────
(function initActiveNav() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(l => l.style.color = '');
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.style.color = 'var(--text)';
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => io.observe(s));
})();
