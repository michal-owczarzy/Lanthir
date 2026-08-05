/* ═══════════════════════════════════════════
   LANTHIR — script.js (cinematic)
   i18n (CS/EN/PL) · scroll-scrubbed narrator canvas
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
    'hero.h1': 'Technologický partner<br><em>pro růst a provoz firmy.</em>',
    'hero.sub': 'Navrhujeme webové stránky na míru a staráme se o jejich provoz. Webová aplikace, e-shop nebo rezervační systém — s SSL, hostingem, SEO optimalizací a monitoringem dostupnosti.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.building': 'Váš web se připravuje...',

    'svc.tag': 'Co děláme',
    'svc.heading': 'Naše<br><em>produkty.</em>',
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
    'price.heading': 'Ceny za <em>naše služby.</em>',
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
    'proc.heading': 'Náš postup<br><em>se zákazníkem.</em>',
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
    'about.heading': 'Kdo stojí<br><em>za Lanthirem</em>',
    'about.1.role':  'Zakladatel &amp; CTO',
    'about.1.bio':   'Zakladatel Lanthiru se specializací na monitoring a DevOps. Navrhuje a vyvíjí technická řešení, která fungují spolehlivě a přinášejí klientům reálné výsledky.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Zodpovídá za rozvoj obchodních vztahů a pomáhá klientům najít ideální řešení pro jejich projekt. Váš první kontakt, když zvažujete spolupráci s Lanthirem.',

    'cta.h2': 'Máte projekt? <span class="grad-text">Pojďme na to.</span>',
    'cta.p':  'Bezplatná konzultace bez závazků. Řekněte nám o svém projektu a my se ozveme do 24 hodin.',
    'cta.btn':'Nezávazná poptávka',

    'contact.tag':       'Kontakt',
    'contact.heading': 'Kontaktujte <em>nás.</em>',
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
    'form.err.name':  'Vyplňte prosím jméno.',
    'form.err.email': 'Zadejte platný e-mail.',
    'form.err.msg':   'Napište prosím pár vět o projektu.',
    'footer.copy':    '© 2026 Lanthir. Všechna práva vyhrazena.',

    'nav.work': 'Reference',
    'fact.1.unit':  'dní',
    'fact.1.label': 'průměrné dodání webu',
    'fact.2.label': 'web na míru už od',
    'fact.3.unit':  'min',
    'fact.3.label': 'interval monitoringu dostupnosti',
    'fact.4.unit':  'h',
    'fact.4.label': 'odpovídáme na poptávku do',

    'work.tag': 'Reference',
    'work.heading': 'Naše <em>reference.</em>',
    'work.sub': 'Weby, které jsme vytvořili pro naše zákazníky. Klikněte a projděte si je jako skutečný web.',
    'work.open': 'Otevřít živý web',
    'work.all':     'Zobrazit všechny ukázky',
    'work.1.ind':   'Restaurace',
    'work.1.note':  'Denní menu · rezervace',
    'work.2.ind':   'Autoservis',
    'work.2.note':  'Služby · objednání',
    'work.3.ind':   'Masáže &amp; wellness',
    'work.3.note':  'Ceník · rezervace',
    'work.4.ind':   'Kadeřnictví',
    'work.4.note':  'Odvážný design',
    'work.5.ind':   'Kosmetika',
    'work.5.note':  'Elegantní &amp; prémiové',
    'work.6.ind':   'Nehty &amp; řasy',
    'work.6.note':  'Moderní studio',
  },

  en: {
    'nav.services': 'Services',
    'nav.pricing':  'Pricing',
    'nav.process':  'Process',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'nav.cta':      'Get a Quote',

    'hero.badge':    'Websites · Monitoring · Web Management',
    'hero.h1': 'Technology partner<br><em>for growth and operations.</em>',
    'hero.sub': 'We design custom websites and keep them running. A web application, e-shop or booking system — with SSL, hosting, SEO optimisation and uptime monitoring included.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip2':    'Days avg. delivery',
    'hero.building': 'Your website is being prepared...',

    'svc.tag': 'What we do',
    'svc.heading': 'Our<br><em>products.</em>',
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
    'price.heading': 'Prices for <em>our services.</em>',
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
    'proc.heading': 'How we work<br><em>with you.</em>',
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
    'about.heading': 'Who is behind<br><em>Lanthir</em>',
    'about.1.role':  'Founder &amp; CTO',
    'about.1.bio':   'Founder of Lanthir, specialized in monitoring and DevOps. Designs and develops technical solutions that run reliably and deliver real results for clients.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Responsible for business development and helping clients find the ideal solution for their project. Your first point of contact when considering working with Lanthir.',

    'cta.h2': 'Have a project? <span class="grad-text">Let\'s go.</span>',
    'cta.p':  'Free consultation with no commitment. Tell us about your project and we\'ll get back to you within 24 hours.',
    'cta.btn':'Get a Free Quote',

    'contact.tag':       'Contact',
    'contact.heading': 'Contact <em>us.</em>',
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
    'form.err.name':  'Please enter your name.',
    'form.err.email': 'Enter a valid email address.',
    'form.err.msg':   'Tell us a little about the project.',
    'footer.copy':    '© 2026 Lanthir. All rights reserved.',

    'nav.work': 'Work',
    'fact.1.unit':  'days',
    'fact.1.label': 'average website delivery',
    'fact.2.label': 'custom website from',
    'fact.3.unit':  'min',
    'fact.3.label': 'uptime monitoring interval',
    'fact.4.unit':  'h',
    'fact.4.label': 'we reply to enquiries within',

    'work.tag': 'Selected work',
    'work.heading': 'Our <em>references.</em>',
    'work.sub': 'Websites we have built for our clients. Click through and browse them as real sites.',
    'work.open': 'Open the live site',
    'work.all':     'View all work',
    'work.1.ind':   'Restaurant',
    'work.1.note':  'Daily menu · reservations',
    'work.2.ind':   'Car Service',
    'work.2.note':  'Services · booking',
    'work.3.ind':   'Massage &amp; wellness',
    'work.3.note':  'Pricing · reservations',
    'work.4.ind':   'Hair Salon',
    'work.4.note':  'Bold design',
    'work.5.ind':   'Cosmetics',
    'work.5.note':  'Elegant &amp; premium',
    'work.6.ind':   'Nails &amp; lashes',
    'work.6.note':  'Modern studio',
  },

  pl: {
    'nav.services': 'Usługi',
    'nav.pricing':  'Cennik',
    'nav.process':  'Proces',
    'nav.about':    'O nas',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Bezpłatna wycena',

    'hero.badge':    'Strony · Monitoring · Zarządzanie',
    'hero.h1': 'Partner technologiczny<br><em>dla wzrostu i operacji firmy.</em>',
    'hero.sub': 'Projektujemy strony internetowe na zamówienie i dbamy o ich działanie. Aplikacja webowa, sklep lub system rezerwacji — z SSL, hostingiem, optymalizacją SEO i monitoringiem dostępności.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.building': 'Twoja strona jest przygotowywana...',

    'svc.tag': 'Co robimy',
    'svc.heading': 'Nasze<br><em>produkty.</em>',
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
    'price.heading': 'Ceny za <em>nasze usługi.</em>',
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
    'proc.heading': 'Nasz proces<br><em>z klientem.</em>',
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
    'about.heading': 'Kto stoi<br><em>za Lanthirem</em>',
    'about.1.role':  'Założyciel &amp; CTO',
    'about.1.bio':   'Założyciel Lanthira specjalizujący się w monitoringu i DevOps. Projektuje i wdraża rozwiązania techniczne, które działają niezawodnie i przynoszą klientom realne wyniki.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Odpowiada za rozwój relacji biznesowych i pomaga klientom znaleźć idealne rozwiązanie dla ich projektu. Twój pierwszy kontakt, gdy rozważasz współpracę z Lanthirem.',

    'cta.h2': 'Masz projekt? <span class="grad-text">Działajmy.</span>',
    'cta.p':  'Bezpłatna konsultacja bez zobowiązań. Opowiedz nam o projekcie, a odezwiemy się w ciągu 24 godzin.',
    'cta.btn':'Bezpłatna wycena',

    'contact.tag':       'Kontakt',
    'contact.heading': 'Skontaktuj się <em>z nami.</em>',
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
    'form.err.name':  'Podaj proszę imię.',
    'form.err.email': 'Podaj poprawny adres e-mail.',
    'form.err.msg':   'Napisz kilka słów o projekcie.',
    'footer.copy':    '© 2026 Lanthir. Wszelkie prawa zastrzeżone.',

    'nav.work': 'Realizacje',
    'fact.1.unit':  'dni',
    'fact.1.label': 'średni czas realizacji strony',
    'fact.2.label': 'strona na zamówienie już od',
    'fact.3.unit':  'min',
    'fact.3.label': 'interwał monitoringu dostępności',
    'fact.4.unit':  'h',
    'fact.4.label': 'odpowiadamy na zapytania w',

    'work.tag': 'Realizacje',
    'work.heading': 'Nasze <em>realizacje.</em>',
    'work.sub': 'Strony, które stworzyliśmy dla naszych klientów. Kliknij i przejrzyj je jak prawdziwe strony.',
    'work.open': 'Otwórz żywą stronę',
    'work.all':     'Zobacz wszystkie realizacje',
    'work.1.ind':   'Restauracja',
    'work.1.note':  'Menu dnia · rezerwacje',
    'work.2.ind':   'Serwis samochodowy',
    'work.2.note':  'Usługi · umawianie',
    'work.3.ind':   'Masaże &amp; wellness',
    'work.3.note':  'Cennik · rezerwacje',
    'work.4.ind':   'Fryzjer',
    'work.4.note':  'Odważny design',
    'work.5.ind':   'Kosmetyka',
    'work.5.note':  'Elegancki &amp; premium',
    'work.6.ind':   'Paznokcie &amp; rzęsy',
    'work.6.note':  'Nowoczesne studio',
  }
};

/* ── Capability gates ─────────────────────── */
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Motion budget scaled to the hardware: 0 lite · 1 standard · 2 full */
const TIER = (() => {
  const c = navigator.connection || {};
  if (c.saveData || /2g|slow-2g/.test(c.effectiveType || '')) return 0;
  const mem = navigator.deviceMemory || 0, cpu = navigator.hardwareConcurrency || 0;
  if ((mem && mem <= 2) || (cpu && cpu <= 2)) return 0;
  const coarse = matchMedia('(pointer: coarse)').matches;
  if ((mem && mem <= 4) || (cpu && cpu <= 4) || (coarse && innerWidth < 820)) return 1;
  return 2;
})();

/* ── i18n ─────────────────────────────────── */
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

/* ── Nav ──────────────────────────────────── */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 24), { passive: true });

const burger = document.getElementById('burger');
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

(function () {
  const links = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
  const byId = {};
  links.forEach(a => byId[a.getAttribute('href').slice(1)] = a);
  const io = new IntersectionObserver(es => es.forEach(e => {
    const l = byId[e.target.id];
    if (l && e.isIntersecting) links.forEach(a => a.classList.toggle('active', a === l));
  }), { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(byId).forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

/* ── Reveal (flow sections only) ──────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (RM) { els.forEach(e => e.classList.add('in')); return; }
  document.querySelectorAll('.price-cols, .people, .contact-info').forEach(g => {
    Array.from(g.children).filter(c => c.classList.contains('reveal'))
      .forEach((c, i) => c.style.setProperty('--d', (i * 0.04).toFixed(2) + 's'));
  });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  els.forEach(e => io.observe(e));
})();

/* ── Palette ──────────────────────────────── */
const PAL = [[0,[58,46,224]],[0.28,[30,123,229]],[0.62,[31,205,237]],[1,[54,240,214]]];
function paletteAt(t) {
  t = Math.min(Math.max(t, 0), 1);
  for (let i = 1; i < PAL.length; i++) {
    if (t <= PAL[i][0]) {
      const [a, ca] = PAL[i - 1], [b, cb] = PAL[i], k = (t - a) / (b - a);
      return ca.map((v, j) => Math.round(v + (cb[j] - v) * k));
    }
  }
  return PAL[3][1];
}

/* ── Formation geometry ───────────────────────
   Every formation is expressed as polylines in unit
   space (-0.5..0.5) and resampled to the same particle
   count, so the field can morph between any two. */
function resample(segs, n) {
  const flat = [];
  let total = 0;
  segs.forEach(s => {
    for (let i = 1; i < s.length; i++) {
      const d = Math.hypot(s[i][0] - s[i-1][0], s[i][1] - s[i-1][1]);
      if (d > 0) { flat.push({ a: s[i-1], b: s[i], d }); total += d; }
    }
  });
  if (!total) return Array.from({ length: n }, () => [0, 0]);
  const out = [];
  const step = total / n;
  let seg = 0, acc = 0;
  for (let i = 0; i < n; i++) {
    let target = i * step;
    while (seg < flat.length - 1 && acc + flat[seg].d < target) { acc += flat[seg].d; seg++; }
    const f = flat[seg], t = Math.min(Math.max((target - acc) / f.d, 0), 1);
    out.push([f.a[0] + (f.b[0] - f.a[0]) * t, f.a[1] + (f.b[1] - f.a[1]) * t]);
  }
  return out;
}
const rect = (x, y, w, h) => [[[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]]];

/* a browser window being built — Act 2 */
function fWireframe(n) {
  const segs = [
    ...rect(-0.42,-0.30, 0.84, 0.60),
    [[-0.42,-0.20],[0.42,-0.20]],
    [[-0.36,-0.25],[-0.32,-0.25]], [[-0.28,-0.25],[-0.24,-0.25]], [[-0.20,-0.25],[-0.16,-0.25]],
    ...rect(-0.36,-0.13, 0.34, 0.16),
    [[-0.36,0.08],[0.02,0.08]], [[-0.36,0.14],[-0.06,0.14]], [[-0.36,0.20],[0.02,0.20]],
    ...rect(0.06,-0.13, 0.30, 0.10),
    ...rect(0.06,0.01, 0.30, 0.10),
    ...rect(0.06,0.15, 0.30, 0.10)
  ];
  return resample(segs, n);
}
/* four nodes on a line — Act 4. `step` marks how many are complete, so the
   constellation itself reads as a progress bar rather than four empty rings. */
function fPath(n, step) {
  const X = i => -0.40 + (0.80 / 3) * i;
  const segs = [[[-0.40, 0], [0.40, 0]]];
  if (step >= 0) {                       /* travelled portion drawn denser */
    const e = X(step);
    segs.push([[-0.40, 0], [e, 0]], [[-0.40, 0], [e, 0]]);
  }
  for (let i = 0; i < 4; i++) {
    const x = X(i);
    /* completed = dense disc, pending = small sparse ring (~6x contrast) */
    const radii = i <= step ? [0.060, 0.048, 0.036, 0.024, 0.012] : [0.028];
    radii.forEach(r => {
      const ring = [];
      for (let a = 0; a <= 24; a++) { const t = (a / 24) * Math.PI * 2; ring.push([x + Math.cos(t) * r, Math.sin(t) * r]); }
      segs.push(ring);
    });
  }
  return resample(segs, n);
}

/* scattered — Act 3, so the live sites are the hero, not the canvas */
function fScatter(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 * 7.3, r = 0.30 + (i % 97) / 97 * 0.34;
    out.push([Math.cos(a) * r * 1.7, Math.sin(a) * r]);
  }
  return out;
}

/* ── The narrator ─────────────────────────────
   One canvas for the whole page. Scroll decides which
   formation the particles resolve into. */
(async function () {
  const cv = document.getElementById('stage');
  const acts = Array.from(document.querySelectorAll('.act'));
  const heroAct = document.getElementById('home');
  if (!cv || !acts.length) { document.body.classList.add('booted'); return; }

  /* act tracks get their scroll length from data-len */
  const sizeActs = () => acts.forEach(a => { a.style.height = (parseFloat(a.dataset.len || 2) * 100) + 'vh'; });
  sizeActs();

  let svgText = null;
  try { svgText = await fetch('logo.svg').then(r => r.text()); } catch (e) {}
  if (!svgText) { document.body.classList.add('booted'); return; }

  const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  const raw = [];
  doc.querySelectorAll('polyline').forEach(pl => {
    const nums = (pl.getAttribute('points') || '').match(/[-\d.eE]+/g);
    if (!nums) return;
    const seg = [];
    for (let i = 0; i + 1 < nums.length; i += 2) seg.push([+nums[i] / 200 - 0.5, +nums[i+1] / 200 - 0.5]);
    if (seg.length > 1) raw.push(seg);
  });
  if (!raw.length) { document.body.classList.add('booted'); return; }

  const N = TIER === 0 ? 260 : TIER === 1 ? 520 : 900;
  const FORM = {
    iris:      resample(raw, N),
    wireframe: fWireframe(N),
    'path:0':  fPath(N, 0),
    'path:1':  fPath(N, 1),
    'path:2':  fPath(N, 2),
    'path:3':  fPath(N, 3),
    device:    fScatter(N)
  };

  const ctx = cv.getContext('2d');
  const DPR = Math.min(devicePixelRatio || 1, 2);
  let W = 0, H = 0;

  /* one particle per sample; colour comes from its position in the mark */
  const P = FORM.iris.map((p, i) => {
    const gt = ((p[0] + 0.5) + (1 - (p[1] + 0.5))) / 2;
    const a = Math.random() * Math.PI * 2, r = 0.7 + Math.random() * 0.6;
    return {
      x: Math.cos(a) * r, y: Math.sin(a) * r,   /* unit space, scattered at boot */
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.012,
      size: 1.5 + Math.random() * 2.2,
      ph: Math.random() * Math.PI * 2,
      amp: 0.6 + Math.random() * 1.9,
      delay: Math.random() * 0.35 + (Math.hypot(p[0], p[1]) * 0.7),
      col: paletteAt(gt)
    };
  });

  const fit = () => {
    W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };
  fit();
  let rq = false;
  addEventListener('resize', () => {
    if (rq) return; rq = true;
    setTimeout(() => { rq = false; fit(); sizeActs(); }, 150);
  });

  const tri = (x, y, rot, s, col, alpha) => {
    ctx.save();
    ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, -s); ctx.lineTo(s * .866, s * .5); ctx.lineTo(-s * .866, s * .5); ctx.closePath();
    ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + alpha.toFixed(3) + ')';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  };

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = v => Math.min(Math.max(v, 0), 1);

  /* which act owns the viewport, and how far through it are we */
  function readScroll() {
    let active = acts[0], prog = 0, found = false; inFlow = false;
    for (const a of acts) {
      const r = a.getBoundingClientRect();
      if (r.top <= 1 && r.bottom > H * 0.5) { active = a; prog = clamp01(-r.top / (r.height - H)); found = true; break; }
    }
    if (!found) {
      inFlow = true;
      /* between acts (flow sections) — hold the nearest one's end state */
      let best = null, bd = Infinity;
      for (const a of acts) {
        const r = a.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - H / 2);
        if (d < bd) { bd = d; best = a; }
      }
      active = best || acts[0];
      prog = active.getBoundingClientRect().top < 0 ? 1 : 0;
    }
    return { active, prog, inFlow };
  }

  /* where the formation sits on screen, and how loud it is */
  function place(act, prog) {
    const narrow = W < 1080;
    const kind = act.dataset.act;
    const m = Math.min(W, H);
    if (kind === 'iris') {
      /* opens full-screen and centred, then steps aside as you scroll so the
         headline is never underneath it */
      const e = clamp01((prog - .05) / .45);
      return { cx: narrow ? W * .5 : lerp(W * .5, W * .775, e),
               cy: H * (narrow ? .38 : .5),
               R: lerp(m * .74, m * .42, e) * (narrow ? .95 : 1),
               alpha: narrow ? lerp(1, .3, e) : 1, e };
    }
    if (kind === 'device') {
      return { cx: W * .5, cy: H * .5, R: m * 1.25, alpha: narrow ? .1 : .16, e: 1 };
    }
    return { cx: narrow ? W * .5 : W * .74, cy: H * (narrow ? .46 : .5),
             R: m * (narrow ? .78 : .62), alpha: narrow ? .3 : 1, e: 1 };
  }

  let inFlow = false;
  const t0 = performance.now();
  const boot = location.hash || scrollY > 60;
  setTimeout(() => document.body.classList.add('booted'), boot ? 0 : 1900);
  /* the headline must never depend on the animation loop running */
  setTimeout(() => heroAct.classList.add('copy-on'), boot ? 0 : 5200); /* safety net only */
  let lastKind = null, morphT = 0;
  const MORPH_S = 1.25;
  const easeIO = v => v < .5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;

  const wordmark = document.getElementById('wordmark');
  const cue = document.getElementById('scrollCue');

  if (RM) {
    /* static: draw the mark once, no loop */
    fit();
    const m = Math.min(W, H) * .6;
    FORM.iris.forEach((p, i) => tri(W * .5 + p[0] * m, H * .35 + p[1] * m, 0, P[i].size, P[i].col, .9));
    document.body.classList.add('booted');
    heroAct.classList.add('copy-on');
    return;
  }

  let vis = true;
  new IntersectionObserver(e => vis = e[e.length - 1].isIntersecting).observe(document.body);

  (function frame(now) {
    requestAnimationFrame(frame);
    if (!vis || document.hidden || !W) return;
    const t = (now - t0) / 1000;
    const { active, prog } = readScroll();
    /* Content sections get the brand mark back rather than keeping whatever
       the last act left on screen — otherwise the four-step path lingers all
       the way down through pricing, about and contact. */
    let kind = inFlow ? 'iris' : active.dataset.act;
    if (kind === 'path') kind += ':' + Math.min(3, Math.floor(prog * 4 * 0.999));
    const target = FORM[kind] || FORM.iris;
    const pose = place(active, prog);
    if (inFlow) pose.alpha *= 0.16;  /* content sections own the screen, not the canvas */

    /* hero: copy arrives once the mark has landed */
    if (active === heroAct) {
      if (prog > .10) heroAct.classList.add('copy-on');
      if (wordmark) wordmark.style.opacity = String(Math.max(0, 1 - prog * 6));
      if (cue) cue.style.opacity = String(Math.max(0, 1 - prog * 8));
    } else if (wordmark) { wordmark.style.opacity = '0'; if (cue) cue.style.opacity = '0'; }

    ctx.clearRect(0, 0, W, H);

    /* ambient wash behind the formation */
    const g = ctx.createRadialGradient(pose.cx, pose.cy, pose.R * .05, pose.cx, pose.cy, pose.R * 1.1);
    g.addColorStop(0, 'rgba(30,123,229,' + (0.11 * pose.alpha).toFixed(3) + ')');
    g.addColorStop(.55, 'rgba(58,46,224,' + (0.05 * pose.alpha).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(pose.cx - pose.R * 1.2, pose.cy - pose.R * 1.2, pose.R * 2.4, pose.R * 2.4);

    /* Every formation change snapshots where each particle currently is and
       eases from there over MORPH_S. Time-based, not per-frame — so the morph
       looks identical at 30fps and 120fps instead of running at frame speed. */
    if (kind !== lastKind) {
      for (let i = 0; i < P.length; i++) { P[i].fx = P[i].x; P[i].fy = P[i].y; }
      morphT = lastKind === null ? (boot ? t - MORPH_S * 2 : 0.35) : t;
      lastKind = kind;
    }
    const mp = easeIO(clamp01((t - morphT) / MORPH_S));
    for (let i = 0; i < P.length; i++) {
      const p = P[i], tg = target[i];
      const d = clamp01(mp * 1.34 - p.delay * 0.26);
      p.x = lerp(p.fx, tg[0], d);
      p.y = lerp(p.fy, tg[1], d);
      p.rot += p.spin;
      const dx = Math.cos(t * .6 + p.ph) * p.amp;
      const dy = Math.sin(t * .8 + p.ph * 1.3) * p.amp;
      tri(pose.cx + p.x * pose.R + dx, pose.cy + p.y * pose.R + dy, p.rot, p.size, p.col, 0.9 * pose.alpha);
    }
  })(t0);
})();

/* ── Act 2 — services scrub ───────────────── */
(function () {
  const act = document.getElementById('sluzby');
  const items = Array.from(document.querySelectorAll('.svc-item'));
  const rail = document.getElementById('svcRail');
  if (!act || !items.length) return;
  if (RM) { items.forEach(i => i.classList.add('is-on')); return; }
  let cur = -1;
  const tick = () => {
    const r = act.getBoundingClientRect();
    const p = Math.min(Math.max(-r.top / (r.height - innerHeight), 0), 1);
    const i = Math.min(items.length - 1, Math.floor(p * items.length * 0.999));
    if (i !== cur) { cur = i; items.forEach((el, k) => el.classList.toggle('is-on', k === i)); }
    if (rail) rail.style.width = (p * 100).toFixed(1) + '%';
  };
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  tick();
})();

/* ── Act 4 — process scrub ────────────────── */
(function () {
  const act = document.getElementById('postup');
  const items = Array.from(document.querySelectorAll('.proc-item'));
  const rail = document.getElementById('procRail');
  if (!act || !items.length) return;
  if (RM) { items.forEach(i => i.classList.add('is-on')); if (rail) rail.style.width = '100%'; return; }
  let cur = -1;
  const tick = () => {
    const r = act.getBoundingClientRect();
    const p = Math.min(Math.max(-r.top / (r.height - innerHeight), 0), 1);
    const i = Math.min(items.length - 1, Math.floor(p * items.length * 0.999));
    if (i !== cur) { cur = i; items.forEach((el, k) => el.classList.toggle('is-on', k === i)); }
    /* rail fills in whole steps so it matches the nodes in the constellation */
    if (rail) rail.style.width = ((i + 1) / items.length * 100).toFixed(1) + '%';
  };
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  tick();
})();

/* ── References — three live client sites ─────
   All visible at once: no carousel, so someone hunting for a
   price is not made to scroll through a gallery first. */
(function () {
  const frames = Array.from(document.querySelectorAll('.ref-frame[data-src]'));
  if (!frames.length) return;

  const scale = () => frames.forEach(f => {
    const w = f.clientWidth;
    if (w) f.style.setProperty('--s', (w / 1280).toFixed(4));
  });
  scale();
  let rq = false;
  addEventListener('resize', () => { if (rq) return; rq = true; setTimeout(() => { rq = false; scale(); }, 150); });

  if (TIER === 0) return;              /* lite tier keeps the placeholder */

  const mount = f => {
    if (f.dataset.on) return;
    f.dataset.on = '1';
    const fr = document.createElement('iframe');
    fr.src = f.dataset.src;
    fr.loading = 'lazy';
    fr.setAttribute('scrolling', 'no');
    fr.setAttribute('tabindex', '-1');
    fr.setAttribute('aria-hidden', 'true');
    fr.title = '';
    f.appendChild(fr);
  };
  /* plain scroll check — fires reliably in every renderer we test in */
  const near = () => {
    let pending = false;
    frames.forEach(f => {
      const r = f.getBoundingClientRect();
      if (r.top < innerHeight + 500 && r.bottom > -500) mount(f);
      if (!f.dataset.on) pending = true;
    });
    if (!pending) removeEventListener('scroll', near);
  };
  addEventListener('scroll', near, { passive: true });
  addEventListener('resize', near);
  near();
})();

/* ── Back to top ──────────────────────────── */
document.getElementById('toTop')?.addEventListener('click', () => scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }));

/* ── Contact form ─────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  const suc = document.getElementById('formSuccess');
  if (!form) return;
  /* validate on blur and on submit; the message sits with its field, and the
     first offending field takes focus rather than a summary at the top */
  const fields = [
    { el: document.getElementById('fname'),  ok: v => v.trim().length > 1 },
    { el: document.getElementById('femail'), ok: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
    { el: document.getElementById('fmsg'),   ok: v => v.trim().length > 4 }
  ];
  const mark = f => {
    const good = f.ok(f.el.value);
    f.el.closest('.form-group').classList.toggle('invalid', !good);
    f.el.setAttribute('aria-invalid', good ? 'false' : 'true');
    return good;
  };
  fields.forEach(f => {
    f.el.addEventListener('blur', () => { if (f.el.value) mark(f); });
    f.el.addEventListener('input', () => {
      if (f.el.closest('.form-group').classList.contains('invalid')) mark(f);
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const bad = fields.filter(f => !mark(f));
    if (bad.length) { bad[0].el.focus(); return; }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.classList.add('sending');
    const sel = document.getElementById('fbundle');
    const bundle = sel.options[sel.selectedIndex]?.text || '';
    try {
      await fetch('https://formsubmit.co/ajax/michal.owczarzy@lanthir.cz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Nová poptávka z lanthir.cz — ' + bundle,
          _cc: 'mariusz.chmiel@lanthir.cz',
          _captcha: 'false',
          _template: 'table',
          Jméno: document.getElementById('fname').value,
          Email: document.getElementById('femail').value,
          Firma: document.getElementById('fcompany').value,
          Balíček: bundle,
          Zpráva: document.getElementById('fmsg').value
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
