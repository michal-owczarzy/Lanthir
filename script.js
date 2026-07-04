/* ═══════════════════════════════════════════
   LANTHIR — script.js (Constellation)
   i18n (CS/EN/PL) · Particle constellation · Form
═══════════════════════════════════════════ */

const T = {
  cs: {
    'nav.services': 'Služby',
    'nav.pricing':  'Ceník',
    'nav.process':  'Postup',
    'nav.about':    'O nás',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Nezávazná poptávka',

    'hero.badge':    'Weby · Monitoring · Správa webu',
    'hero.h1':       'Technologický partner<br><span class="grad-text">pro růst a provoz firmy.</span>',
    'hero.sub':      'Navrhujeme webové stránky na míru a staráme se o jejich provoz. Landing page, firemní web nebo webová aplikace — s SSL, hostingem, SEO optimalizací a monitoringem dostupnosti.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.building': 'Váš web se připravuje...',

    'svc.tag':     'Co tvoříme',
    'svc.heading': 'Webové stránky pro <span class="grad-text">každou potřebu</span>',
    'svc.sub':     'Tvorba webových stránek pro živnostníky i firmy — od jednoduché landing page po plnohodnotnou webovou aplikaci. Každý web dodáváme včetně domény, hostingu a SSL certifikátu.',
    'svc.more':    'Zobrazit ceník <span>→</span>',
    'svc.1.title': 'Prezentační web',
    'svc.1.desc':  'Profesionální webové stránky, které představují vaši firmu nebo produkt. Moderní design, rychlé načítání, perfektní na mobilu.',
    'svc.2.title': 'E-shop',
    'svc.2.desc':  'Plně funkční online obchod s košíkem, platební bránou a správou objednávek. Prodávejte 24/7 bez omezení.',
    'svc.3.title': 'Rezervační systém',
    'svc.3.desc':  'Online rezervace pro restaurace, hotely, salony, lékaře a další. Zákazníci si zarezervují sami — vy šetříte čas.',
    'svc.4.title': 'Landing page',
    'svc.4.desc':  'Efektivní stránka zaměřená na jeden cíl — kampaň, produkt nebo získání kontaktů. Maximální konverze.',
    'svc.5.title': 'Webová aplikace',
    'svc.5.desc':  'Komplexní webová aplikace s přihlášením, databází a vlastní logikou. Portály, dashboardy, interní nástroje.',
    'svc.6.title': 'Redesign webu',
    'svc.6.desc':  'Zastaralý web vám škodí. Obnovíme jeho design, výkon a SEO — bez ztráty obsahu a pozic ve vyhledávačích.',

    'price.tag':      'Ceník',
    'price.heading':  'Řešení <span class="grad-text">pro každého</span>',
    'price.sub':      'Transparentní ceny tvorby webových stránek bez skrytých poplatků. Vyberte jednorázové vytvoření webu — nebo pravidelnou správu, monitoring a SEO optimalizaci.',
    'price.dev.label':'A — Jednorázová tvorba webu',
    'price.sub.label':'B — Měsíční správa, monitoring a marketing',
    'price.from':     'od',
    'price.currency': 'Kč',
    'price.per.month':'/ měsíc',
    'price.popular':  'Nejpopulárnější',
    'price.cta':      'Mám zájem',
    'price.cta.main': 'Začít projekt',
    'price.note':     '* Ceny jsou bez DPH. Rádi připravíme přesnou nabídku na míru.',
    'price.1.tier':   'START',
    'price.1.name':   'Landing Page',
    'price.1.desc':   'Pro živnostníky, řemeslníky a nové projekty.',
    'price.1.price':  '7 990',
    'price.1.f1': 'Jednostránkový web (One-pager)',
    'price.1.f2': 'Sekce: O nás, Služby, Ceník, Kontakt',
    'price.1.f3': 'Moderní responzivní design',
    'price.1.f4': 'Kontaktní formulář',
    'price.1.f5': 'Základní SEO (nadpisy, meta tagy)',
    'price.1.f6': 'Doména, hosting & SSL v ceně',
    'price.1.f7': 'Dodání do 14 dní',
    'price.2.tier':   'BUSINESS',
    'price.2.name':   'Firemní prezentace',
    'price.2.desc':   'Pro malé a střední firmy, konzultanty a agentury.',
    'price.2.price':  '19 990',
    'price.2.f1': 'Vícestránkový web (5–10 podstránek)',
    'price.2.f2': 'Blogová sekce a stránky pro služby',
    'price.2.f3': 'Google Analytics / Tag Manager',
    'price.2.f4': 'Napojení na Google Search Console',
    'price.2.f5': 'Základní copywriting pro vyhledávače',
    'price.2.f6': 'Doména, hosting, SSL & nasazení v ceně',
    'price.2.f7': '6 měsíců bezplatné podpory',
    'price.3.tier':   'PRO',
    'price.3.name':   'Custom & Lead Generation',
    'price.3.desc':   'Pro firmy, pro které je web hlavním prodejním kanálem.',
    'price.3.price':  'Na vyžádání',
    'price.3.f1': 'Komplexní struktura a případové studie',
    'price.3.f2': 'Napojení na CRM nebo Slack (automatické leady)',
    'price.3.f3': 'Integrace API třetích stran',
    'price.3.f4': 'Pokročilé animace',
    'price.3.f5': 'Hloubková analýza klíčových slov',
    'price.3.f6': 'Konverzní copywriting',
    'price.3.f7': 'Měření cílů a událostí v analytice',

    'sub.1.tier':  'ZÁKLAD',
    'sub.1.name':  'Klidné spaní',
    'sub.1.desc':  'Jistota, že váš web funguje a nic nevyprší.',
    'sub.1.price': '399',
    'sub.1.f1': 'Uptime monitoring každých 5 minut',
    'sub.1.f2': 'Okamžitá notifikace při výpadku',
    'sub.1.f3': 'Hlídání SSL certifikátu a expirace domény',
    'sub.1.f4': 'Průběžná technická údržba webu',
    'sub.1.f5': '15–30 min drobných úprav měsíčně',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Výkon pod kontrolou',
    'sub.2.desc':  'Vše ze ZÁKLADU + výkonnostní reporty a úpravy.',
    'sub.2.price': '899',
    'sub.2.f1': 'Vše ze ZÁKLADU',
    'sub.2.f2': 'Pravidelné měření rychlosti a výkonu webu',
    'sub.2.f3': 'Automatizovaný měsíční report do e-mailu',
    'sub.2.f4': 'Analýza návštěvnosti a klíčových stránek',
    'sub.2.f5': '1 hodina kódování / úprav měsíčně',
    'sub.3.tier':  'KOMPLEX',
    'sub.3.name':  'Růst a Observabilita',
    'sub.3.desc':  'Vše z PLUSU + aktivní SEO a prioritní SLA.',
    'sub.3.price': '2 499',
    'sub.3.f1': 'Vše z PLUSU',
    'sub.3.f2': 'Syntetické testování formulářů a klíčových cest',
    'sub.3.f3': 'Průběžná SEO optimalizace a návrhy obsahu',
    'sub.3.f4': 'Garantované zahájení řešení do 2 hodin',
    'sub.3.f5': 'Prioritní SLA',

    'proc.tag':     'Jak pracujeme',
    'proc.heading': 'Čtyři kroky k <span class="grad-text">vašemu webu</span>',
    'proc.sub':     'Transparentní proces od první schůzky po spuštění. Vždy víte, ve které fázi se projekt nachází.',
    'proc.1.title': 'Konzultace',
    'proc.1.desc':  'Poznáme vás, vaše cíle a potřeby. Bezplatná konzultace bez závazků — osobně nebo online.',
    'proc.2.title': 'Návrh',
    'proc.2.desc':  'Vytvoříme vizuální podobu vašeho webu — layout a design odsouhlasíme před tím, než začneme kódovat.',
    'proc.3.title': 'Vývoj',
    'proc.3.desc':  'Kódujeme, testujeme a ladíme. Průběžně vás informujeme o postupu a zapracováváme zpětnou vazbu.',
    'proc.4.title': 'Spuštění',
    'proc.4.desc':  'Nasadíme web i s doménou a hostingem — zákazník nemusí řešit nic technického. Podpora zahrnuta v ceně.',

    'why.tag':     'Proč Lanthir',
    'why.heading': 'Web, který <span class="grad-text">pracuje pro vás</span>',
    'why.1.title': 'Rychlé dodání',
    'why.1.desc':  'Průměrná doba dodání webu je 14 dní. U jednoduchých projektů i méně.',
    'why.2.title': 'Vše na klíč',
    'why.2.desc':  'Doména, hosting, SSL, nasazení — postaráme se o všechno. Vy se staráte o svůj byznys.',
    'why.3.title': 'Vlastní design',
    'why.3.desc':  'Žádné šablony. Každý web navrhujeme od základu podle vašich potřeb a identity.',
    'why.4.title': 'Podpora po spuštění',
    'why.4.desc':  'Nezmizíme po předání. Jsme tu pro úpravy, aktualizace a rozvoj webu.',
    'wstat.2': 'Dní průměrné dodání',
    'wstat.4': 'Roky zkušeností',

    'about.tag':     'O nás',
    'about.heading': 'Kdo stojí <span class="grad-text">za Lanthirem</span>',
    'about.1.role':  'Zakladatel &amp; CTO',
    'about.1.bio':   'Zakladatel Lanthiru se specializací na monitoring a DevOps. Navrhuje a vyvíjí technická řešení, která fungují spolehlivě a přinášejí klientům reálné výsledky.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Zodpovídá za rozvoj obchodních vztahů a pomáhá klientům najít ideální řešení pro jejich projekt. Váš první kontakt, když zvažujete spolupráci s Lanthirem.',

    'cta.h2': 'Máte projekt? <span class="grad-text">Pojďme na to.</span>',
    'cta.p':  'Bezplatná konzultace bez závazků. Řekněte nám o svém projektu a my se ozveme do 24 hodin.',
    'cta.btn':'Nezávazná poptávka',

    'contact.tag':       'Kontakt',
    'contact.heading':   'Začněme <span class="grad-text">spolupracovat</span>',
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
    'form.bundle.lbl':   'Balíček',
    'form.bundle.opt0':  'Vyberte balíček...',
    'form.bundle.grp1':  '── Tvorba webu ──',
    'form.bundle.opt1':  'START — Landing Page',
    'form.bundle.opt2':  'BUSINESS — Firemní prezentace',
    'form.bundle.opt3':  'PRO — Custom & Lead Generation',
    'form.bundle.grp2':  '── Správa & monitoring ──',
    'form.bundle.opt4':  'ZÁKLAD — 399 Kč/měsíc',
    'form.bundle.opt5':  'PLUS — 899 Kč/měsíc',
    'form.bundle.opt6':  'KOMPLEX — od 2 499 Kč/měsíc',
    'form.msg.lbl':      'Zpráva',
    'form.msg.ph':       'Popište váš projekt...',
    'form.send':         'Odeslat poptávku',
    'form.success':      'Odesláno! Ozveme se vám do 24 hodin.',

    'footer.tagline': 'Technologický partner pro růst a provoz firmy.',
    'footer.status':  'všechny systémy online',
    'footer.col1.h':  'Služby',
    'footer.col2.h':  'Společnost',
    'footer.copy':    '© 2026 Lanthir. Všechna práva vyhrazena.',
  },

  en: {
    'nav.services': 'Services',
    'nav.pricing':  'Pricing',
    'nav.process':  'Process',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'nav.cta':      'Get a Quote',

    'hero.badge':    'Websites · Monitoring · Web Management',
    'hero.h1':       'Technology partner<br><span class="grad-text">for growth and operations.</span>',
    'hero.sub':      'We design custom websites and keep them running. Landing page, corporate website or web application — with SSL, hosting, SEO optimisation and uptime monitoring included.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip2':    'Days avg. delivery',
    'hero.building': 'Your website is being prepared...',

    'svc.tag':     'What We Build',
    'svc.heading': 'Websites for <span class="grad-text">every need</span>',
    'svc.sub':     'Custom web development for freelancers and businesses — from a simple landing page to a full web application. Every website includes domain, hosting and SSL certificate.',
    'svc.more':    'View pricing <span>→</span>',
    'svc.1.title': 'Business Website',
    'svc.1.desc':  'Professional websites that present your company or product. Modern design, fast loading, perfect on mobile.',
    'svc.2.title': 'E-commerce',
    'svc.2.desc':  'Fully functional online store with cart, payment gateway and order management. Sell 24/7 without limits.',
    'svc.3.title': 'Booking System',
    'svc.3.desc':  'Online booking for restaurants, hotels, salons, doctors and more. Customers book themselves — you save time.',
    'svc.4.title': 'Landing Page',
    'svc.4.desc':  'Effective page focused on one goal — a campaign, product or lead generation. Maximum conversion.',
    'svc.5.title': 'Web Application',
    'svc.5.desc':  'Complex web app with login, database and custom logic. Portals, dashboards, internal tools.',
    'svc.6.title': 'Website Redesign',
    'svc.6.desc':  'An outdated website hurts you. We\'ll refresh its design, performance and SEO — without losing content or rankings.',

    'price.tag':      'Pricing',
    'price.heading':  'Solutions <span class="grad-text">for everyone</span>',
    'price.sub':      'Transparent pricing, no hidden fees. Choose one-time development or ongoing management.',
    'price.dev.label':'A — One-time Website Development',
    'price.sub.label':'B — Monthly Management, Monitoring & Marketing',
    'price.from':     'from',
    'price.currency': 'CZK',
    'price.per.month':'/ month',
    'price.popular':  'Most Popular',
    'price.cta':      'I\'m Interested',
    'price.cta.main': 'Start Project',
    'price.note':     '* All prices are excluding VAT. We\'ll happily prepare a precise quote.',
    'price.1.tier':   'START',
    'price.1.name':   'Landing Page',
    'price.1.desc':   'For freelancers, tradespeople and new projects.',
    'price.1.price':  '7,990',
    'price.1.f1': 'Single-page website (One-pager)',
    'price.1.f2': 'Sections: About, Services, Pricing, Contact',
    'price.1.f3': 'Modern responsive design',
    'price.1.f4': 'Contact form',
    'price.1.f5': 'Basic SEO (headings, meta tags)',
    'price.1.f6': 'Domain, hosting & SSL included',
    'price.1.f7': 'Delivery in 14 days',
    'price.2.tier':   'BUSINESS',
    'price.2.name':   'Corporate Presentation',
    'price.2.desc':   'For SMEs, consultants and agencies.',
    'price.2.price':  '19,990',
    'price.2.f1': 'Multi-page website (5–10 subpages)',
    'price.2.f2': 'Blog section and individual service pages',
    'price.2.f3': 'Google Analytics / Tag Manager',
    'price.2.f4': 'Google Search Console integration',
    'price.2.f5': 'Basic SEO copywriting',
    'price.2.f6': 'Domain, hosting, SSL & deployment included',
    'price.2.f7': '6 months free support',
    'price.3.tier':   'PRO',
    'price.3.name':   'Custom & Lead Generation',
    'price.3.desc':   'For companies where the website is the main sales channel.',
    'price.3.price':  'On Request',
    'price.3.f1': 'Complex structure and case studies',
    'price.3.f2': 'CRM or Slack integration (automatic leads)',
    'price.3.f3': 'Third-party API integrations',
    'price.3.f4': 'Advanced animations',
    'price.3.f5': 'In-depth keyword analysis',
    'price.3.f6': 'Conversion copywriting',
    'price.3.f7': 'Goal & event tracking setup in analytics',

    'sub.1.tier':  'BASIC',
    'sub.1.name':  'Peace of Mind',
    'sub.1.desc':  'Assurance that your website works and nothing expires.',
    'sub.1.price': '399',
    'sub.1.f1': 'Uptime monitoring every 5 minutes',
    'sub.1.f2': 'Instant alert on downtime',
    'sub.1.f3': 'SSL certificate & domain expiry watch',
    'sub.1.f4': 'Ongoing technical website maintenance',
    'sub.1.f5': '15–30 min of minor changes per month',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Performance in Control',
    'sub.2.desc':  'Everything in BASIC + performance reports and edits.',
    'sub.2.price': '899',
    'sub.2.f1': 'Everything in BASIC',
    'sub.2.f2': 'Regular website speed & performance checks',
    'sub.2.f3': 'Automated monthly report by email',
    'sub.2.f4': 'Traffic & top pages analysis',
    'sub.2.f5': '1 hour of coding / edits per month',
    'sub.3.tier':  'COMPLEX',
    'sub.3.name':  'Growth & Observability',
    'sub.3.desc':  'Everything in PLUS + active SEO and priority SLA.',
    'sub.3.price': '2,499',
    'sub.3.f1': 'Everything in PLUS',
    'sub.3.f2': 'Synthetic form & key-path testing',
    'sub.3.f3': 'Ongoing SEO optimisation & content proposals',
    'sub.3.f4': 'Guaranteed response start within 2 hours',
    'sub.3.f5': 'Priority SLA',

    'proc.tag':     'How We Work',
    'proc.heading': 'Four steps to <span class="grad-text">your website</span>',
    'proc.sub':     'Transparent process from first meeting to launch. You always know which phase the project is in.',
    'proc.1.title': 'Consultation',
    'proc.1.desc':  'We get to know you, your goals and needs. Free consultation with no commitment — in person or online.',
    'proc.2.title': 'Design',
    'proc.2.desc':  'We create the visual look of your website — layout and design approved before we start coding.',
    'proc.3.title': 'Development',
    'proc.3.desc':  'We code, test and refine. We keep you updated on progress and incorporate your feedback.',
    'proc.4.title': 'Launch',
    'proc.4.desc':  'We deploy with domain and hosting included — no technical setup for you. Support included in the price.',

    'why.tag':     'Why Lanthir',
    'why.heading': 'A website that <span class="grad-text">works for you</span>',
    'why.1.title': 'Fast Delivery',
    'why.1.desc':  'Average delivery time is 14 days. Less for simple projects.',
    'why.2.title': 'All Inclusive',
    'why.2.desc':  'Domain, hosting, SSL, deployment — we handle everything. You focus on your business.',
    'why.3.title': 'Custom Design',
    'why.3.desc':  'No templates. We design every website from scratch based on your needs and identity.',
    'why.4.title': 'Post-launch Support',
    'why.4.desc':  'We don\'t disappear after handover. We\'re here for edits, updates and website growth.',
    'wstat.2': 'Days avg. delivery',
    'wstat.4': 'Years of experience',

    'about.tag':     'About Us',
    'about.heading': 'Who is behind <span class="grad-text">Lanthir</span>',
    'about.1.role':  'Founder &amp; CTO',
    'about.1.bio':   'Founder of Lanthir, specialized in monitoring and DevOps. Designs and develops technical solutions that run reliably and deliver real results for clients.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Responsible for business development and helping clients find the ideal solution for their project. Your first point of contact when considering working with Lanthir.',

    'cta.h2': 'Have a project? <span class="grad-text">Let\'s go.</span>',
    'cta.p':  'Free consultation with no commitment. Tell us about your project and we\'ll get back to you within 24 hours.',
    'cta.btn':'Get a Free Quote',

    'contact.tag':       'Contact',
    'contact.heading':   'Let\'s start <span class="grad-text">working together</span>',
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
    'form.bundle.lbl':   'Package',
    'form.bundle.opt0':  'Select a package...',
    'form.bundle.grp1':  '── Website Development ──',
    'form.bundle.opt1':  'START — Landing Page',
    'form.bundle.opt2':  'BUSINESS — Corporate Website',
    'form.bundle.opt3':  'PRO — Custom & Lead Generation',
    'form.bundle.grp2':  '── Management & Monitoring ──',
    'form.bundle.opt4':  'BASIC — 399 CZK/month',
    'form.bundle.opt5':  'PLUS — 899 CZK/month',
    'form.bundle.opt6':  'COMPLEX — from 2,499 CZK/month',
    'form.msg.lbl':      'Message',
    'form.msg.ph':       'Describe your project...',
    'form.send':         'Send Enquiry',
    'form.success':      'Sent! We\'ll get back to you within 24 hours.',

    'footer.tagline': 'Technology partner for growth and operations.',
    'footer.status':  'all systems operational',
    'footer.col1.h':  'Services',
    'footer.col2.h':  'Company',
    'footer.copy':    '© 2026 Lanthir. All rights reserved.',
  },

  pl: {
    'nav.services': 'Usługi',
    'nav.pricing':  'Cennik',
    'nav.process':  'Proces',
    'nav.about':    'O nas',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Bezpłatna wycena',

    'hero.badge':    'Strony · Monitoring · Zarządzanie',
    'hero.h1':       'Partner technologiczny<br><span class="grad-text">dla wzrostu i operacji firmy.</span>',
    'hero.sub':      'Projektujemy strony internetowe na zamówienie i dbamy o ich działanie. Landing page, strona firmowa lub aplikacja webowa — z SSL, hostingiem, optymalizacją SEO i monitoringiem dostępności.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.building': 'Twoja strona jest przygotowywana...',

    'svc.tag':     'Co tworzymy',
    'svc.heading': 'Strony internetowe dla <span class="grad-text">każdej potrzeby</span>',
    'svc.sub':     'Tworzenie stron internetowych dla freelancerów i firm — od prostej strony wizytówki po rozbudowaną aplikację webową. Każda strona zawiera domenę, hosting i certyfikat SSL.',
    'svc.more':    'Zobacz cennik <span>→</span>',
    'svc.1.title': 'Strona firmowa',
    'svc.1.desc':  'Profesjonalne strony prezentujące Twoją firmę lub produkt. Nowoczesny design, szybkie ładowanie, idealne na mobile.',
    'svc.2.title': 'Sklep internetowy',
    'svc.2.desc':  'W pełni funkcjonalny sklep z koszykiem, bramką płatności i zarządzaniem zamówieniami. Sprzedawaj 24/7.',
    'svc.3.title': 'System rezerwacji',
    'svc.3.desc':  'Rezerwacje online dla restauracji, hoteli, salonów, lekarzy i innych. Klienci rezerwują sami — Ty oszczędzasz czas.',
    'svc.4.title': 'Landing page',
    'svc.4.desc':  'Efektywna strona skupiona na jednym celu — kampania, produkt lub pozyskanie kontaktów. Maksymalna konwersja.',
    'svc.5.title': 'Aplikacja webowa',
    'svc.5.desc':  'Złożona aplikacja z logowaniem, bazą danych i własną logiką. Portale, dashboardy, narzędzia wewnętrzne.',
    'svc.6.title': 'Redesign strony',
    'svc.6.desc':  'Przestarzała strona Ci szkodzi. Odświeżymy jej design, wydajność i SEO — bez utraty treści i pozycji.',

    'price.tag':      'Cennik',
    'price.heading':  'Rozwiązania <span class="grad-text">dla każdego</span>',
    'price.sub':      'Przejrzyste ceny bez ukrytych opłat. Wybierz jednorazowe tworzenie lub stały abonament zarządzania.',
    'price.dev.label':'A — Jednorazowe tworzenie strony',
    'price.sub.label':'B — Miesięczne zarządzanie, monitoring i marketing',
    'price.from':     'od',
    'price.currency': 'CZK',
    'price.per.month':'/ miesiąc',
    'price.popular':  'Najpopularniejszy',
    'price.cta':      'Jestem zainteresowany',
    'price.cta.main': 'Rozpocznij projekt',
    'price.note':     '* Wszystkie ceny są bez VAT. Chętnie przygotujemy dokładną wycenę na miarę.',
    'price.1.tier':   'START',
    'price.1.name':   'Landing Page',
    'price.1.desc':   'Dla freelancerów, rzemieślników i nowych projektów.',
    'price.1.price':  '7 990',
    'price.1.f1': 'Jednostronicowa strona (One-pager)',
    'price.1.f2': 'Sekcje: O nas, Usługi, Cennik, Kontakt',
    'price.1.f3': 'Nowoczesny responsywny design',
    'price.1.f4': 'Formularz kontaktowy',
    'price.1.f5': 'Podstawowe SEO (nagłówki, meta tagi)',
    'price.1.f6': 'Domena, hosting & SSL w cenie',
    'price.1.f7': 'Realizacja w 14 dni',
    'price.2.tier':   'BUSINESS',
    'price.2.name':   'Prezentacja firmowa',
    'price.2.desc':   'Dla małych i średnich firm, konsultantów i agencji.',
    'price.2.price':  '19 990',
    'price.2.f1': 'Wielostronicowa strona (5–10 podstron)',
    'price.2.f2': 'Sekcja bloga i strony dla poszczególnych usług',
    'price.2.f3': 'Google Analytics / Tag Manager',
    'price.2.f4': 'Integracja z Google Search Console',
    'price.2.f5': 'Podstawowy copywriting pod SEO',
    'price.2.f6': 'Domena, hosting, SSL & wdrożenie w cenie',
    'price.2.f7': '6 miesięcy bezpłatnego wsparcia',
    'price.3.tier':   'PRO',
    'price.3.name':   'Custom & Lead Generation',
    'price.3.desc':   'Dla firm, w których strona jest głównym kanałem sprzedaży.',
    'price.3.price':  'Na zapytanie',
    'price.3.f1': 'Złożona struktura i studia przypadków',
    'price.3.f2': 'Integracja z CRM lub Slack (automatyczne leady)',
    'price.3.f3': 'Integracje API firm trzecich',
    'price.3.f4': 'Zaawansowane animacje',
    'price.3.f5': 'Dogłębna analiza słów kluczowych',
    'price.3.f6': 'Copywriting konwersyjny',
    'price.3.f7': 'Śledzenie celów i zdarzeń w analityce',

    'sub.1.tier':  'PODSTAWA',
    'sub.1.name':  'Spokojny sen',
    'sub.1.desc':  'Pewność, że Twoja strona działa i nic nie wygasa.',
    'sub.1.price': '399',
    'sub.1.f1': 'Monitoring dostępności co 5 minut',
    'sub.1.f2': 'Natychmiastowe powiadomienie o awarii',
    'sub.1.f3': 'Pilnowanie certyfikatu SSL i wygasania domeny',
    'sub.1.f4': 'Bieżąca techniczna obsługa strony',
    'sub.1.f5': '15–30 min drobnych zmian miesięcznie',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Wydajność pod kontrolą',
    'sub.2.desc':  'Wszystko z PODSTAWY + raporty wydajności i poprawki.',
    'sub.2.price': '899',
    'sub.2.f1': 'Wszystko z PODSTAWY',
    'sub.2.f2': 'Regularne pomiary szybkości i wydajności strony',
    'sub.2.f3': 'Automatyczny miesięczny raport na e-mail',
    'sub.2.f4': 'Analiza ruchu i kluczowych stron',
    'sub.2.f5': '1 godzina kodowania / zmian miesięcznie',
    'sub.3.tier':  'KOMPLEKS',
    'sub.3.name':  'Wzrost i Obserwowalność',
    'sub.3.desc':  'Wszystko z PLUS + aktywne SEO i priorytetowe SLA.',
    'sub.3.price': '2 499',
    'sub.3.f1': 'Wszystko z PLUS',
    'sub.3.f2': 'Syntetyczne testowanie formularzy i kluczowych ścieżek',
    'sub.3.f3': 'Bieżąca optymalizacja SEO i propozycje treści',
    'sub.3.f4': 'Gwarantowane podjęcie działań w ciągu 2 godzin',
    'sub.3.f5': 'Priorytetowe SLA',

    'proc.tag':     'Jak pracujemy',
    'proc.heading': 'Cztery kroki do <span class="grad-text">Twojej strony</span>',
    'proc.sub':     'Transparentny proces od pierwszego spotkania do uruchomienia. Zawsze wiesz, w której fazie jest projekt.',
    'proc.1.title': 'Konsultacja',
    'proc.1.desc':  'Poznajemy Cię, Twoje cele i potrzeby. Bezpłatna konsultacja bez zobowiązań — osobiście lub online.',
    'proc.2.title': 'Projekt',
    'proc.2.desc':  'Tworzymy wizualną postać Twojej strony — layout i design zatwierdzamy przed rozpoczęciem kodowania.',
    'proc.3.title': 'Rozwój',
    'proc.3.desc':  'Kodujemy, testujemy i dopracowujemy. Na bieżąco informujemy o postępach i wdrażamy feedback.',
    'proc.4.title': 'Uruchomienie',
    'proc.4.desc':  'Wdrażamy z domeną i hostingiem w cenie — klient nie musi nic konfigurować. Wsparcie wliczone w cenę.',

    'why.tag':     'Dlaczego Lanthir',
    'why.heading': 'Strona, która <span class="grad-text">pracuje dla Ciebie</span>',
    'why.1.title': 'Szybka realizacja',
    'why.1.desc':  'Średni czas realizacji to 14 dni. Przy prostych projektach nawet krócej.',
    'why.2.title': 'Wszystko w cenie',
    'why.2.desc':  'Domena, hosting, SSL, wdrożenie — zajmujemy się wszystkim. Ty skupiasz się na swoim biznesie.',
    'why.3.title': 'Własny design',
    'why.3.desc':  'Żadnych szablonów. Każdą stronę projektujemy od podstaw według Twoich potrzeb.',
    'why.4.title': 'Wsparcie po uruchomieniu',
    'why.4.desc':  'Nie znikamy po przekazaniu. Jesteśmy tu dla poprawek, aktualizacji i rozwoju strony.',
    'wstat.2': 'Dni średnia realizacja',
    'wstat.4': 'Lata doświadczenia',

    'about.tag':     'O nas',
    'about.heading': 'Kto stoi <span class="grad-text">za Lanthirem</span>',
    'about.1.role':  'Założyciel &amp; CTO',
    'about.1.bio':   'Założyciel Lanthira specjalizujący się w monitoringu i DevOps. Projektuje i wdraża rozwiązania techniczne, które działają niezawodnie i przynoszą klientom realne wyniki.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Odpowiada za rozwój relacji biznesowych i pomaga klientom znaleźć idealne rozwiązanie dla ich projektu. Twój pierwszy kontakt, gdy rozważasz współpracę z Lanthirem.',

    'cta.h2': 'Masz projekt? <span class="grad-text">Działajmy.</span>',
    'cta.p':  'Bezpłatna konsultacja bez zobowiązań. Opowiedz nam o projekcie, a odezwiemy się w ciągu 24 godzin.',
    'cta.btn':'Bezpłatna wycena',

    'contact.tag':       'Kontakt',
    'contact.heading':   'Zacznijmy <span class="grad-text">współpracę</span>',
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
    'form.bundle.lbl':   'Pakiet',
    'form.bundle.opt0':  'Wybierz pakiet...',
    'form.bundle.grp1':  '── Tworzenie strony ──',
    'form.bundle.opt1':  'START — Landing Page',
    'form.bundle.opt2':  'BUSINESS — Prezentacja firmowa',
    'form.bundle.opt3':  'PRO — Custom & Lead Generation',
    'form.bundle.grp2':  '── Zarządzanie & monitoring ──',
    'form.bundle.opt4':  'PODSTAWA — 399 CZK/miesiąc',
    'form.bundle.opt5':  'PLUS — 899 CZK/miesiąc',
    'form.bundle.opt6':  'KOMPLEKS — od 2 499 CZK/miesiąc',
    'form.msg.lbl':      'Wiadomość',
    'form.msg.ph':       'Opisz swój projekt...',
    'form.send':         'Wyślij zapytanie',
    'form.success':      'Wysłano! Odezwiemy się w ciągu 24 godzin.',

    'footer.tagline': 'Partner technologiczny dla wzrostu i operacji firmy.',
    'footer.status':  'wszystkie systemy działają',
    'footer.col1.h':  'Usługi',
    'footer.col2.h':  'Firma',
    'footer.copy':    '© 2026 Lanthir. Wszelkie prawa zastrzeżone.',
  }
};

/* ── Capability gates ─────────────────────── */
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── i18n engine ──────────────────────────── */
let currentLang = localStorage.getItem('lanthir-lang') || 'cs';

function applyLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  localStorage.setItem('lanthir-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[lang][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = T[lang][el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll('.ls-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

document.querySelectorAll('.ls-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ── Boot backstop — nav must never stay hidden ── */
setTimeout(() => document.body.classList.add('booted'), 3200);

/* ── Nav scroll state ─────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

/* ── Mobile burger ────────────────────────── */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.classList.toggle('no-scroll', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
}));

/* ── Active nav link ──────────────────────── */
(function () {
  const links = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
  const byId  = {};
  links.forEach(a => { byId[a.getAttribute('href').slice(1)] = a; });
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      const link = byId[en.target.id];
      if (!link) return;
      if (en.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a === link));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(byId).forEach(id => {
    const sec = document.getElementById(id);
    if (sec) io.observe(sec);
  });
})();

/* ── Scroll reveal ────────────────────────── */
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (RM) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
})();

/* ── Brand palette sampling ───────────────────
   The logo gradient (#3a2ee0 → #1e7be5 → #1fcded → #36f0d6)
   colors every particle. */
const PAL = [
  [0.00, [58,  46, 224]],
  [0.28, [30, 123, 229]],
  [0.62, [31, 205, 237]],
  [1.00, [54, 240, 214]]
];
function paletteAt(t) {
  t = Math.min(Math.max(t, 0), 1);
  for (let i = 1; i < PAL.length; i++) {
    if (t <= PAL[i][0]) {
      const [t0, c0] = PAL[i - 1];
      const [t1, c1] = PAL[i];
      const k = (t - t0) / (t1 - t0);
      return c0.map((v, j) => Math.round(v + (c1[j] - v) * k));
    }
  }
  return PAL[PAL.length - 1][1];
}
const rgba = (c, a) => 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')';

/* draw one outlined triangle — the brand glyph */
function tri(ctx, x, y, rot, s, col) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.866, s * 0.5);
  ctx.lineTo(-s * 0.866, s * 0.5);
  ctx.closePath();
  ctx.strokeStyle = col;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

/* ── Hero constellation — full-screen opening ─
   Particles sampled from logo.svg scatter across the
   whole viewport, swirl-converge into a giant centered
   mark, then scroll progress scrubs the mark to the
   right column while the headline choreographs in. */
(async function () {
  const canvas   = document.getElementById('heroCanvas');
  const stage    = document.getElementById('heroStage');
  const hero     = document.getElementById('home');
  const layout   = document.getElementById('heroLayout');
  const wordmark = document.getElementById('heroWordmark');
  const hint     = document.getElementById('scrollHint');

  function bail() {
    /* constellation unavailable — show everything statically */
    if (stage) stage.classList.add('text-on');
    if (wordmark) wordmark.style.display = 'none';
    if (hint) hint.style.display = 'none';
    document.body.classList.add('booted');
  }
  if (!canvas || !stage || !hero || !layout) { bail(); return; }

  let svgText = null;
  try { svgText = await fetch('logo.svg').then(r => r.text()); } catch (e) {}
  if (!svgText) { bail(); return; }

  const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  const pts = [];
  doc.querySelectorAll('polyline').forEach(pl => {
    const nums = (pl.getAttribute('points') || '').match(/[-\d.eE]+/g);
    if (!nums) return;
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([+nums[i], +nums[i + 1]]);
  });
  if (!pts.length) { bail(); return; }

  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const SKIP = window.innerWidth < 700 ? 2 : 1;
  let W = 0, H = 0, particles = [];

  function build() {
    W = stage.clientWidth;
    H = stage.clientHeight;
    if (!W || !H) return;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    particles = [];
    for (let i = 0; i < pts.length; i += SKIP) {
      const lx = pts[i][0], ly = pts[i][1];
      /* gradient runs bottom-left → top-right in the logo */
      const gt = ((lx / 200) + (1 - ly / 200)) / 2;
      particles.push({
        ux: lx / 200 - 0.5,               /* unit offset from mark centre */
        uy: ly / 200 - 0.5,
        sx: Math.random() * W,            /* scattered across the full stage */
        sy: Math.random() * H,
        size: 1.6 + Math.random() * 2.4,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.014,
        phase: Math.random() * Math.PI * 2,
        amp: 1.1 + Math.random() * 3,
        delay: (Math.hypot(lx - 100, ly - 100) / 100) * 0.7 + Math.random() * 0.4,
        swirl: (Math.random() < 0.5 ? -1 : 1) * (1.1 + Math.random() * 1.3),
        col: paletteAt(gt)
      });
    }
  }
  build();

  const lerp    = (a, b, t) => a + (b - a) * t;
  const easeIO  = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  /* 0 = full-screen opening · 1 = settled beside the headline */
  function heroProgress() {
    const r = hero.getBoundingClientRect();
    const span = r.height - H;
    return span > 0 ? Math.min(Math.max(-r.top / span, 0), 1) : 1;
  }

  /* mark placement for a given scroll progress; A = opacity.
     On narrow screens there is no room beside the text, so the
     mark stays centered and fades to a ghost behind the copy. */
  function pose(p) {
    const e = easeIO(p);
    const m = Math.min(W, H);
    if (W < 880) {
      return {
        cx: W * 0.5,
        cy: lerp(H * 0.44, H * 0.38, e),
        R:  lerp(m * 0.44, m * 0.40, e),
        A:  lerp(1, 0.13, e)
      };
    }
    const rect = layout.getBoundingClientRect();
    return {
      cx: lerp(W * 0.5, rect.left + rect.width * 0.76, e),
      cy: H * 0.5,
      R:  lerp(m * 0.44, m * 0.30, e),
      A:  1
    };
  }

  function applyThresholds(p) {
    stage.classList.toggle('text-on', p > 0.32);
    if (wordmark) wordmark.style.opacity = Math.max(0, 1 - p * 5);
    if (hint) hint.style.opacity = Math.max(0, 1 - p * 7);
  }

  function drawGlow(cx, cy, R, A) {
    const g = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.7);
    g.addColorStop(0,  'rgba(30,123,229,' + (0.15 * A).toFixed(3) + ')');
    g.addColorStop(0.5,'rgba(58,46,224,' + (0.07 * A).toFixed(3) + ')');
    g.addColorStop(1,  'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(cx - R * 1.8, cy - R * 1.8, R * 3.6, R * 3.6);
  }

  if (RM) {
    const drawRM = () => {
      const p = heroProgress();
      const { cx, cy, R, A } = pose(p);
      ctx.clearRect(0, 0, W, H);
      drawGlow(cx, cy, R, A);
      for (const pt of particles)
        tri(ctx, cx + pt.ux * 2 * R, cy + pt.uy * 2 * R, pt.rot, pt.size, rgba(pt.col, 0.9 * A));
      applyThresholds(p);
    };
    drawRM();
    window.addEventListener('scroll', drawRM, { passive: true });
    window.addEventListener('resize', () => { build(); drawRM(); });
    document.body.classList.add('booted');
    return;
  }

  let mouse = null;
  stage.addEventListener('pointermove', e => {
    const b = canvas.getBoundingClientRect();
    mouse = { x: e.clientX - b.left, y: e.clientY - b.top };
  });
  stage.addEventListener('pointerleave', () => { mouse = null; });

  let visible = true;
  new IntersectionObserver(en => { visible = en[en.length - 1].isIntersecting; }).observe(stage);

  let resizeQueued = false;
  window.addEventListener('resize', () => {
    if (resizeQueued) return;
    resizeQueued = true;
    setTimeout(() => { resizeQueued = false; build(); }, 150);
  });

  /* deep links skip the opening sequence */
  const instant = !!location.hash || window.scrollY > 60;
  const t0 = performance.now();
  setTimeout(() => document.body.classList.add('booted'), instant ? 0 : 2300);

  (function frame(now) {
    requestAnimationFrame(frame);
    if (!visible || document.hidden || !W) return;
    const t = instant ? 99 : (now - t0) / 1000;
    const p = heroProgress();
    const { cx, cy, R, A } = pose(p);
    applyThresholds(p);

    ctx.clearRect(0, 0, W, H);
    drawGlow(cx, cy, R, A);
    const fade = Math.min(1, t * 2.2) * A;  /* scattered field fades in first */
    for (const pt of particles) {
      const prog = easeOut(Math.min(Math.max((t - 0.45 - pt.delay) / 1.45, 0), 1));
      /* swirl: each home offset rotates in as the particle converges */
      const th  = (1 - prog) * (1 - prog) * pt.swirl;
      const cos = Math.cos(th), sin = Math.sin(th);
      const ox  = pt.ux * 2 * R, oy = pt.uy * 2 * R;
      const hx  = cx + ox * cos - oy * sin;
      const hy  = cy + ox * sin + oy * cos;
      let x = lerp(pt.sx, hx, prog);
      let y = lerp(pt.sy, hy, prog);
      if (prog >= 1) {
        x += Math.cos(t * 0.7 + pt.phase) * pt.amp;
        y += Math.sin(t * 0.9 + pt.phase * 1.3) * pt.amp;
        if (mouse) {
          const dx = x - mouse.x, dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 90 && d > 0.01) {
            const f = (1 - d / 90) * 16;
            x += (dx / d) * f;
            y += (dy / d) * f;
          }
        }
      }
      pt.rot += pt.spin;
      tri(ctx, x, y, pt.rot, pt.size, rgba(pt.col, 0.9 * fade));
    }
  })(t0);
})();

/* ── Ambient particle field ───────────────────
   Sparse drifting triangles behind the whole page,
   with per-particle scroll parallax for depth. */
(function () {
  const canvas = document.getElementById('fieldCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0, ps = [];

  function build() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.min(70, Math.round((W * H) / 26000));
    ps = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      s: 1.4 + Math.random() * 2.8,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.006,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(0.05 + Math.random() * 0.2),
      depth: 0.25 + Math.random() * 0.75,
      col: rgba(paletteAt(Math.random()), 0.09 + Math.random() * 0.2)
    }));
  }
  build();

  const wrapY = y => ((y % (H + 24)) + (H + 24)) % (H + 24) - 12;

  function drawStatic() {
    ctx.clearRect(0, 0, W, H);
    for (const p of ps) tri(ctx, p.x, wrapY(p.y - window.scrollY * p.depth * 0.12), p.rot, p.s, p.col);
  }

  if (RM) {
    drawStatic();
    window.addEventListener('resize', () => { build(); drawStatic(); });
    return;
  }

  let resizeQueued = false;
  window.addEventListener('resize', () => {
    if (resizeQueued) return;
    resizeQueued = true;
    setTimeout(() => { resizeQueued = false; build(); }, 150);
  });

  (function frame() {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    ctx.clearRect(0, 0, W, H);
    const sy = window.scrollY;
    for (const p of ps) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.spin;
      if (p.x < -12) p.x = W + 12;
      if (p.x > W + 12) p.x = -12;
      /* parallax: deeper particles trail the scroll less */
      tri(ctx, p.x, wrapY(p.y - sy * p.depth * 0.12), p.rot, p.s, p.col);
    }
  })();
})();

/* ── Back to top ──────────────────────────── */
document.getElementById('toTop')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' })
);

/* ── Contact form ─────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  const suc  = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.classList.add('sending');
    const bundleSel  = document.getElementById('fbundle');
    const bundleText = bundleSel.options[bundleSel.selectedIndex]?.text || '';
    try {
      await fetch('https://formsubmit.co/ajax/michal.owczarzy@lanthir.cz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject:  'Nová poptávka z lanthir.cz — ' + bundleText,
          _cc:       'mariusz.chmiel@lanthir.cz',
          _captcha:  'false',
          _template: 'table',
          Jméno:     document.getElementById('fname').value,
          Email:     document.getElementById('femail').value,
          Firma:     document.getElementById('fcompany').value,
          Balíček:   bundleText,
          Zpráva:    document.getElementById('fmsg').value
        })
      });
    } catch (e) {}
    form.querySelectorAll('input,textarea,select').forEach(el => el.value = '');
    btn.classList.remove('sending');
    btn.style.display = 'none';
    suc.classList.add('show');
  });
})();

/* ── Init ─────────────────────────────────── */
applyLang(currentLang);
