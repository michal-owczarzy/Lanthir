/* ═══════════════════════════════════════════
   LANTHIR — script.js (Aurora Glass)
   i18n (CS/EN/PL) · Kinetic engine · Form
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

/* ── Motion / input capability gates ─────── */
const RM   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ── Shared rAF loop ──────────────────────
   Every scroll/pointer-driven effect registers one
   cheap function here; reads early-exit off-screen. */
const K = { fns: [] };
function kAdd(fn) { K.fns.push(fn); }
(function kLoop() {
  for (let i = 0; i < K.fns.length; i++) K.fns[i]();
  requestAnimationFrame(kLoop);
})();

/* ── i18n Engine ──────────────────────────── */
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
  refreshKinetic();
}

document.querySelectorAll('.ls-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ── Film grain (runtime noise tile) ──────── */
(function () {
  const el = document.getElementById('grain');
  if (!el) return;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(128, 128);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = (Math.random() * 255) | 0;
    img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  el.style.backgroundImage = 'url(' + c.toDataURL() + ')';
})();

/* ── Nav scroll state ─────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

/* ── Mobile burger + full-screen sheet ────── */
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

/* ── Hero H1: per-word mask reveal ────────── */
function splitHeading() {
  const h = document.getElementById('heroHeading');
  if (!h || RM) return;
  let idx = 0;
  const frag = document.createDocumentFragment();
  const wrap = (content, isNode) => {
    const w  = document.createElement('span'); w.className = 'w';
    const wi = document.createElement('span'); wi.className = 'wi';
    wi.style.setProperty('--i', idx++);
    if (isNode) wi.appendChild(content); else wi.textContent = content;
    w.appendChild(wi);
    return w;
  };
  Array.from(h.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/\s+/).filter(Boolean).forEach(word => {
        frag.appendChild(wrap(word, false));
        frag.appendChild(document.createTextNode(' '));
      });
    } else if (node.nodeName === 'BR') {
      frag.appendChild(document.createElement('br'));
    } else {
      // element (e.g. .grad-text) stays atomic so background-clip survives
      frag.appendChild(wrap(node, true));
      frag.appendChild(document.createTextNode(' '));
    }
  });
  h.innerHTML = '';
  h.appendChild(frag);
}

/* ── Hero logo: stroke draw-in (once) ─────── */
(function () {
  const container = document.getElementById('heroLogoContainer');
  if (!container) return;
  fetch('logo.svg')
    .then(r => r.text())
    .then(svgText => {
      const tmp = document.createElement('div');
      tmp.innerHTML = svgText.trim();
      const svg = tmp.querySelector('svg');
      if (!svg) return;
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      if (!RM) {
        Array.from(svg.querySelectorAll('polyline')).forEach((pl, i) => {
          const nums = (pl.getAttribute('points') || '').match(/[-\d.eE]+/g);
          if (!nums || nums.length < 4) return;
          let len = 0;
          for (let k = 2; k + 1 < nums.length; k += 2) {
            const dx = +nums[k] - +nums[k - 2];
            const dy = +nums[k + 1] - +nums[k - 1];
            len += Math.sqrt(dx * dx + dy * dy);
          }
          len = Math.max(len, 1);
          pl.style.strokeDasharray  = len;
          pl.style.strokeDashoffset = len;
          pl.style.animation = 'logoDraw 1.5s cubic-bezier(.4,0,.2,1) ' + (i * 9) + 'ms forwards';
        });
      }
      container.appendChild(svg);
    })
    .catch(() => {
      container.innerHTML = '<img src="logo.svg" alt="Lanthir" style="width:100%;height:100%">';
    });
})();

/* ── Hero: sheet recede (desktop only) ────── */
(function () {
  const inner = document.getElementById('heroInner');
  if (!inner || RM) return;
  const mq = window.matchMedia('(min-width: 900px)');
  let last = -1;
  kAdd(() => {
    if (!mq.matches) {
      if (last !== 0) { inner.style.setProperty('--recede', '0'); last = 0; }
      return;
    }
    const v = Math.min(Math.max(window.scrollY / (window.innerHeight * .9), 0), 1);
    if (Math.abs(v - last) > .002) {
      inner.style.setProperty('--recede', v.toFixed(3));
      last = v;
    }
  });
})();

/* ── Hero: scroll hint fades after first scroll ── */
(function () {
  const hint = document.getElementById('scrollHint');
  if (!hint) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      hint.classList.add('hidden');
      window.removeEventListener('scroll', onScroll);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── Hero: fragment pointer parallax ──────── */
(function () {
  if (!FINE || RM) return;
  const hero = document.getElementById('home');
  const els = Array.from(document.querySelectorAll('#heroVisual [data-depth]'));
  if (!hero || !els.length) return;
  let tx = 0, ty = 0, px = 0, py = 0;
  hero.addEventListener('pointermove', e => {
    tx = (e.clientX / window.innerWidth - .5) * 2;
    ty = (e.clientY / window.innerHeight - .5) * 2;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; }, { passive: true });
  kAdd(() => {
    px += (tx - px) * .06;
    py += (ty - py) * .06;
    if (Math.abs(px) + Math.abs(py) < .001 && tx === 0 && ty === 0) return;
    els.forEach(el => {
      const d = parseFloat(el.dataset.depth) * 400;
      el.style.translate = (-px * d).toFixed(1) + 'px ' + (-py * d).toFixed(1) + 'px';
    });
  });
})();

/* ── Scroll reveal (3D tilt-up, staggered) ── */
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (RM) { els.forEach(el => el.classList.add('revealed', 'settled')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const siblings = Array.from(e.target.parentElement.querySelectorAll('[data-reveal]'));
      const delay = Math.max(siblings.indexOf(e.target), 0) * 80;
      setTimeout(() => e.target.classList.add('revealed'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: .08 });
  els.forEach(el => {
    el.addEventListener('transitionend', function onEnd(ev) {
      if (ev.propertyName === 'transform' && el.classList.contains('revealed')) {
        el.classList.add('settled');
        el.removeEventListener('transitionend', onEnd);
      }
    });
    io.observe(el);
  });
})();

/* ── Service icons: hover stroke re-draw ──── */
document.querySelectorAll('.svc-icon svg *').forEach(el => {
  el.setAttribute('pathLength', '1');
  el.setAttribute('class', 'draw');
});

/* ── Board FX: tilt + glare + proximity border glow ── */
function boardFX(board, cardSel, opts) {
  if (!board || !FINE || RM) return;
  const cards = Array.from(board.querySelectorAll(cardSel));
  if (!cards.length) return;
  let ev = null, pending = false;

  function apply() {
    pending = false;
    if (!ev) return;
    const rects = cards.map(c => c.getBoundingClientRect()); // batch reads
    cards.forEach((c, i) => {                                 // then writes
      const r = rects[i];
      const x = ev.clientX - r.left;
      const y = ev.clientY - r.top;
      c.style.setProperty('--gx', x.toFixed(0) + 'px');
      c.style.setProperty('--gy', y.toFixed(0) + 'px');
      if (opts.glare) {
        c.style.setProperty('--mx', x.toFixed(0) + 'px');
        c.style.setProperty('--my', y.toFixed(0) + 'px');
      }
      if (opts.tilt) {
        if (x >= 0 && y >= 0 && x <= r.width && y <= r.height) {
          c.style.setProperty('--ry', (((x / r.width) - .5) * 6).toFixed(2) + 'deg');
          c.style.setProperty('--rx', (((.5 - y / r.height)) * 6).toFixed(2) + 'deg');
        } else {
          c.style.setProperty('--rx', '0deg');
          c.style.setProperty('--ry', '0deg');
        }
      }
    });
  }
  board.addEventListener('pointermove', e => {
    ev = e;
    if (!pending) { pending = true; requestAnimationFrame(apply); }
  }, { passive: true });
  board.addEventListener('pointerleave', () => {
    cards.forEach(c => {
      c.style.setProperty('--rx', '0deg');
      c.style.setProperty('--ry', '0deg');
      c.style.setProperty('--gx', '-400px');
      c.style.setProperty('--gy', '-400px');
      c.style.setProperty('--mx', '-300px');
      c.style.setProperty('--my', '-300px');
    });
  }, { passive: true });
}
boardFX(document.getElementById('servicesGrid'), '.svc-card',    { tilt: true, glare: true });
boardFX(document.getElementById('pricingGridA'), '.price-card',  {});
boardFX(document.getElementById('pricingGridB'), '.price-card',  {});
boardFX(document.getElementById('aboutGrid'),    '.person-card', { tilt: true });

/* ── Featured pricing: conic border runs only in view ── */
(function () {
  const cards = document.querySelectorAll('.price-card.featured');
  if (!cards.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('in-view', e.isIntersecting));
  }, { threshold: .1 });
  cards.forEach(c => io.observe(c));
})();

/* ── Price count-up (format-preserving) ───── */
const priceCounters = [];
(function () {
  document.querySelectorAll('.price-num:not(.price-custom)').forEach(el => {
    priceCounters.push({ el, running: false, cancelled: false });
  });
  if (RM || !priceCounters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const c = priceCounters.find(k => k.el === e.target);
      if (c) runCount(c);
    });
  }, { threshold: .6 });
  priceCounters.forEach(c => io.observe(c.el));
})();
function runCount(c) {
  const original = c.el.textContent.trim();
  const digits = original.replace(/\D/g, '');
  if (!digits) return;
  const target = parseInt(digits, 10);
  const sepMatch = original.match(/[\s,.  ](?=\d{3})/);
  const sep = sepMatch ? sepMatch[0] : '';
  const t0 = performance.now(), dur = 900;
  c.running = true;
  c.cancelled = false;
  (function tick(t) {
    if (c.cancelled) { c.running = false; return; }
    const p = Math.min((t - t0) / dur, 1);
    const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
    c.el.textContent = sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(v);
    if (p < 1) requestAnimationFrame(tick);
    else { c.el.textContent = original; c.running = false; }
  })(t0);
}

/* ── Process: scrubbed line + active step + odometer ── */
(function () {
  const stepsCol = document.getElementById('procSteps');
  const wrap = document.getElementById('processWrap');
  if (!stepsCol || !wrap) return;
  const steps = Array.from(stepsCol.querySelectorAll('.proc-step'));
  const nodes = steps.map(s => s.querySelector('.proc-node'));
  const pgCur = document.getElementById('pgCur');
  const pgNext = document.getElementById('pgNext');

  if (RM) {
    steps.forEach(s => s.classList.add('active'));
    return;
  }

  /* scroll-scrubbed progress */
  kAdd(() => {
    const r = stepsCol.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.bottom < -100 || r.top > vh + 100) return;
    const p = Math.min(Math.max((vh * .72 - r.top) / (r.height - vh * .3), 0), 1);
    stepsCol.style.setProperty('--p', p.toFixed(4));
    nodes.forEach((n, i) => {
      const np = Math.min(Math.max(p * steps.length - i, 0), 1);
      n.style.setProperty('--np', np.toFixed(3));
    });
  });

  /* active step + giant odometer numeral */
  let animating = false, pendingN = null;
  function rollTo(n) {
    const txt = '0' + n;
    if (animating) { pendingN = n; return; }
    if (pgCur.textContent === txt) return;
    if (!pgCur.animate) { pgCur.textContent = txt; return; }
    animating = true;
    pgNext.textContent = txt;
    const opts = { duration: 550, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' };
    const a1 = pgCur.animate(
      [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-55%)', opacity: 0 }], opts);
    const a2 = pgNext.animate(
      [{ transform: 'translateY(55%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], opts);
    a2.onfinish = () => {
      pgCur.textContent = txt;
      a1.cancel(); a2.cancel();
      animating = false;
      if (pendingN !== null) { const q = pendingN; pendingN = null; rollTo(q); }
    };
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const n = +e.target.dataset.step;
      steps.forEach(s => s.classList.toggle('active', +s.dataset.step === n));
      rollTo(n);
    });
  }, { rootMargin: '-42% 0px -42% 0px' });
  steps.forEach(s => io.observe(s));
})();

/* ── About: watermark parallax ────────────── */
(function () {
  const wm = document.getElementById('aboutWatermark');
  if (!wm || RM) return;
  kAdd(() => {
    const r = wm.parentElement.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const p = (vh - r.top) / (vh + r.height);
    wm.style.transform = 'translateY(' + ((p - .5) * -70).toFixed(1) + 'px)';
  });
})();

/* ── CTA banner: aurora ignition + magnetic button ── */
(function () {
  const banner = document.querySelector('.cta-banner');
  if (!banner) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => banner.classList.toggle('lit', e.isIntersecting));
  }, { threshold: .3 });
  io.observe(banner);

  const btn = document.getElementById('ctaMagnet');
  const card = document.getElementById('ctaCard');
  if (!btn || !card) return;

  /* click squash — tactile feedback on the highest-value click */
  btn.addEventListener('click', () => {
    if (RM || !btn.animate) return;
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(.94)' }, { transform: 'scale(1.03)' }, { transform: 'scale(1)' }],
      { duration: 320, easing: 'ease-out', composite: 'add' }
    );
  });

  if (!FINE || RM) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  card.addEventListener('pointermove', e => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    if (d < 140) {
      const pull = Math.min(10 / (d || 1), .16);
      tx = dx * Math.min(.16, pull * 2.2);
      ty = dy * Math.min(.16, pull * 2.2);
    } else { tx = 0; ty = 0; }
  }, { passive: true });
  card.addEventListener('pointerleave', () => { tx = 0; ty = 0; }, { passive: true });
  kAdd(() => {
    cx += (tx - cx) * .14;
    cy += (ty - cy) * .14;
    if (Math.abs(cx) < .05 && Math.abs(cy) < .05 && tx === 0 && ty === 0) return;
    btn.style.translate = cx.toFixed(1) + 'px ' + cy.toFixed(1) + 'px';
  });
})();

/* ── Footer: wordmark rise + back-to-top arc ── */
(function () {
  const wm = document.getElementById('footerWordmark');
  const tt = document.getElementById('toTop');
  kAdd(() => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (tt) {
      const sp = max > 0 ? window.scrollY / max : 0;
      tt.style.setProperty('--sp', (sp * 360).toFixed(1) + 'deg');
    }
    if (wm && !RM) {
      const r = wm.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top > vh + 60) return;
      const p = Math.min(Math.max((vh - r.top) / (r.height + vh * .2), 0), 1);
      wm.style.setProperty('--wm', p.toFixed(3));
    }
  });
  if (tt) tt.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }));
})();

/* ── Nav: active-section lamp + lang thumb ── */
const navLamp = document.getElementById('navLamp');
const lsThumb = document.getElementById('lsThumb');
let activeNavLink = null;

function setLamp(link) {
  if (!navLamp) return;
  if (!link || getComputedStyle(navLamp).display === 'none') { navLamp.classList.remove('on'); return; }
  const lr = link.getBoundingClientRect();
  const ur = navLinks.getBoundingClientRect();
  if (!lr.width) { navLamp.classList.remove('on'); return; }
  navLamp.style.width = lr.width + 'px';
  navLamp.style.transform = 'translateY(-50%) translateX(' + (lr.left - ur.left) + 'px)';
  navLamp.classList.add('on');
}
function setThumb() {
  if (!lsThumb) return;
  const act = document.querySelector('.ls-btn.active');
  if (!act) return;
  const tr = act.getBoundingClientRect();
  const pr = document.getElementById('langSwitch').getBoundingClientRect();
  lsThumb.style.width = tr.width + 'px';
  lsThumb.style.transform = 'translateX(' + (tr.left - pr.left) + 'px)';
}

(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      const a = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
      activeNavLink = a || null;
      if (a) a.classList.add('active');
      setLamp(activeNavLink);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => io.observe(s));
})();

/* ── Kinetic refresh: re-sync after language switch / resize ── */
function refreshKinetic() {
  splitHeading();
  priceCounters.forEach(c => { if (c.running) c.cancelled = true; });
  requestAnimationFrame(() => {
    setThumb();
    setLamp(activeNavLink);
  });
}

let resizeT;
window.addEventListener('resize', () => {
  clearTimeout(resizeT);
  resizeT = setTimeout(() => { setThumb(); setLamp(activeNavLink); }, 150);
});
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => { setThumb(); setLamp(activeNavLink); });
}

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
    } catch {}
    form.querySelectorAll('input,textarea,select').forEach(el => el.value = '');
    btn.classList.remove('sending');
    btn.style.display = 'none';
    suc.classList.add('show');
  });
})();

/* ── Init ─────────────────────────────────── */
applyLang(currentLang);
