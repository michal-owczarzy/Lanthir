/* ═══════════════════════════════════════════
   LANTHIR — script.js
   i18n (CS/EN/PL) · Canvas · Logo · Reveal · Form
═══════════════════════════════════════════ */

const T = {
  cs: {
    'nav.services': 'Služby',
    'nav.pricing':  'Ceník',
    'nav.process':  'Postup',
    'nav.about':    'O nás',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Nezávazná poptávka',

    'hero.badge':    'Monitoring & webové řešení na míru',
    'hero.h1':       'Technologický partner<br><span class="grad-text">pro růst a provoz firmy.</span>',
    'hero.sub':      'Profesionální webové stránky na míru — od jednoduché vizitky po komplexní rezervační systém. Rychle, spolehlivě a s péčí o každý detail.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.building': 'Váš web se připravuje...',

    'svc.tag':     'Co tvoříme',
    'svc.heading': 'Webové stránky pro <span class="grad-text">každou potřebu</span>',
    'svc.sub':     'Od vizitky po komplexní systém — navrhujeme a vyvíjíme weby, které fungují a přinášejí výsledky.',
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
    'price.sub':      'Transparentní ceny bez skrytých poplatků. Vyberte jednorázovou tvorbu nebo pravidelnou správu.',
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
    'sub.1.f4': 'Údržba nasazení (GitHub → Hosting)',
    'sub.1.f5': '15–30 min drobných úprav měsíčně',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Výkon pod kontrolou',
    'sub.2.desc':  'Vše ze ZÁKLADU + výkonnostní reporty a úpravy.',
    'sub.2.price': '899',
    'sub.2.f1': 'Vše ze ZÁKLADU',
    'sub.2.f2': 'Monitoring Core Web Vitals',
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
    'about.2.role':  'Sales Manager',
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

    'hero.badge':    'Monitoring & custom web solutions',
    'hero.h1':       'Technology partner<br><span class="grad-text">for growth and operations.</span>',
    'hero.sub':      'Professional custom websites — from a simple business card to a complex booking system. Fast, reliable, with attention to every detail.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip2':    'Days avg. delivery',
    'hero.building': 'Your website is being prepared...',

    'svc.tag':     'What We Build',
    'svc.heading': 'Websites for <span class="grad-text">every need</span>',
    'svc.sub':     'From a business card to a complex system — we design and develop websites that work and deliver results.',
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
    'sub.1.f4': 'Deployment maintenance (GitHub → Hosting)',
    'sub.1.f5': '15–30 min of minor changes per month',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Performance in Control',
    'sub.2.desc':  'Everything in BASIC + performance reports and edits.',
    'sub.2.price': '899',
    'sub.2.f1': 'Everything in BASIC',
    'sub.2.f2': 'Core Web Vitals monitoring',
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
    'about.2.role':  'Sales Manager',
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

    'hero.badge':    'Monitoring & rozwiązania webowe na miarę',
    'hero.h1':       'Partner technologiczny<br><span class="grad-text">dla wzrostu i operacji firmy.</span>',
    'hero.sub':      'Profesjonalne strony internetowe na zamówienie — od prostej wizytówki po złożony system rezerwacji. Szybko, niezawodnie i z dbałością o każdy detal.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.building': 'Twoja strona jest przygotowywana...',

    'svc.tag':     'Co tworzymy',
    'svc.heading': 'Strony internetowe dla <span class="grad-text">każdej potrzeby</span>',
    'svc.sub':     'Od wizytówki po złożony system — projektujemy i rozwijamy strony, które działają i przynoszą wyniki.',
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
    'sub.1.f4': 'Utrzymanie wdrożenia (GitHub → Hosting)',
    'sub.1.f5': '15–30 min drobnych zmian miesięcznie',
    'sub.2.tier':  'PLUS',
    'sub.2.name':  'Wydajność pod kontrolą',
    'sub.2.desc':  'Wszystko z PODSTAWY + raporty wydajności i poprawki.',
    'sub.2.price': '899',
    'sub.2.f1': 'Wszystko z PODSTAWY',
    'sub.2.f2': 'Monitoring Core Web Vitals',
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
    'proc.4.desc':  'Wdrażamy z domeną i hostingem w cenie — klient nie musi nic konfigurować. Wsparcie wliczone w cenę.',

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
    'about.2.role':  'Sales Manager',
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
    'footer.col1.h':  'Usługi',
    'footer.col2.h':  'Firma',
    'footer.copy':    '© 2026 Lanthir. Wszelkie prawa zastrzeżone.',
  }
};

// ── i18n Engine ──────────────────────────
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
applyLang(currentLang);

// ── Nav scroll ───────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

// ── Mobile burger ────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => { burger.classList.toggle('open'); navLinks.classList.toggle('open'); });
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); navLinks.classList.remove('open'); }));

// ── Hero Canvas ──────────────────────────
(function() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];
  const N = 65, D = 155;
  const COLS = ['#3a2ee0','#1e7be5','#1fcded','#5050ff','#36f0d6'];
  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  function mk() { return { x: Math.random()*W, y: Math.random()*H, vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4, r: Math.random()*2+1, c: COLS[Math.floor(Math.random()*COLS.length)] }; }
  let mx=-9999, my=-9999;
  canvas.addEventListener('mousemove', e => { const r=canvas.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; }, {passive:true});
  canvas.addEventListener('mouseleave', () => { mx=-9999; my=-9999; });
  function loop() {
    ctx.clearRect(0,0,W,H);
    for (let i=0;i<nodes.length;i++) for (let j=i+1;j<nodes.length;j++) {
      const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<D) { ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.strokeStyle=`rgba(30,123,229,${(1-d/D)*.2})`; ctx.lineWidth=.8; ctx.stroke(); }
    }
    for (const n of nodes) {
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fillStyle=n.c; ctx.globalAlpha=.65; ctx.fill(); ctx.globalAlpha=1;
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<-20) n.x=W+20; if(n.x>W+20) n.x=-20; if(n.y<-20) n.y=H+20; if(n.y>H+20) n.y=-20;
      const dx=n.x-mx,dy=n.y-my,d=Math.sqrt(dx*dx+dy*dy);
      if(d<100) { n.vx+=(dx/d)*.06; n.vy+=(dy/d)*.06; const s=Math.sqrt(n.vx*n.vx+n.vy*n.vy); if(s>1.5){n.vx=n.vx/s*1.5;n.vy=n.vy/s*1.5;} }
    }
    requestAnimationFrame(loop);
  }
  resize(); nodes=Array.from({length:N},mk); loop();
  new ResizeObserver(resize).observe(canvas.parentElement);
})();

// ── Animated Logo ────────────────────────
(function() {
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
      svg.classList.add('hero-logo-svg');

      const polylines = Array.from(svg.querySelectorAll('polyline'));

      polylines.forEach((pl, i) => {
        const raw = pl.getAttribute('points') || '';
        const nums = raw.match(/[-\d.eE]+/g);
        if (!nums || nums.length < 4) return;

        let len = 0;
        for (let k = 2; k + 1 < nums.length; k += 2) {
          const dx = +nums[k]   - +nums[k-2];
          const dy = +nums[k+1] - +nums[k-1];
          len += Math.sqrt(dx*dx + dy*dy);
        }
        len = Math.max(len, 1);

        pl.style.strokeDasharray  = len;
        pl.style.strokeDashoffset = len;
        pl.style.animation = `logoDraw 1.4s cubic-bezier(.4,0,.2,1) ${i * 10}ms forwards`;
      });

      container.appendChild(svg);

      // After all lines are drawn, begin slow rotation
      const totalMs = polylines.length * 10 + 1500;
      setTimeout(() => {
        svg.classList.add('logo-ready');
      }, totalMs);
    })
    .catch(() => {
      // Fallback for environments without fetch (local file://)
      container.innerHTML = '<img src="logo.svg" alt="Lanthir" style="width:100%;height:100%">';
    });
})();

// ── Hero Logo Parallax ───────────────────
(function() {
  const wrap = document.getElementById('heroLogoWrap');
  if (!wrap) return;
  window.addEventListener('scroll', () => {
    wrap.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });
})();

// ── Stat Counters ─────────────────────────
(function() {
  const els = document.querySelectorAll('.ws-num, .chip-val, .ah-num');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const orig = el.textContent.trim();
      const match = orig.match(/^([\d.]+)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = match[2];
      const isInt  = Number.isInteger(target);
      const dur    = 1600;
      const t0     = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1);
        const v = 1 - Math.pow(1 - p, 3);
        el.textContent = (isInt ? Math.floor(v * target) : (v * target).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
})();

// ── Scroll Reveal ────────────────────────
(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const siblings = Array.from(e.target.parentElement.querySelectorAll('[data-reveal]'));
      const delay = siblings.indexOf(e.target) * 90;
      setTimeout(() => e.target.classList.add('revealed'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
})();

// ── Contact Form ─────────────────────────
(function() {
  const form = document.getElementById('contactForm');
  const suc  = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = '…';
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
    btn.style.display = 'none';
    suc.classList.add('show');
  });
})();

// ── Active Nav Link ──────────────────────
(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(l => l.style.color = '');
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.style.color = 'var(--text)';
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => io.observe(s));
})();
