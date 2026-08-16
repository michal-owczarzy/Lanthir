/* ═══════════════════════════════════════════
   LANTHIR — script.js (Lightfall)
   i18n (CS/EN/PL) · WebGL streaks · border glow · option wheel
═══════════════════════════════════════════ */

const T = {
  cs: {
    'nav.services': 'Služby',
    'nav.pricing':  'Ceník',
    'nav.process':  'Postup',
    'nav.about':    'O nás',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Nezávazná poptávka',

    'hero.l1': 'My jsme <em>Lanthir.</em>',
    'hero.l2': 'Váš technologický partner pro růst a provoz firmy.',
    'hero.sub': 'Navrhujeme webové stránky na míru a staráme se o jejich provoz. Webová aplikace, e-shop nebo rezervační systém — s SSL, hostingem, SEO optimalizací a monitoringem dostupnosti.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.building': 'Váš web se připravuje...',

    'svc.tag': 'Co děláme',
    'svc.heading': 'Naše<br><em>produkty.</em>',
    'svc.hint': 'Táhněte nebo rolujte',
    'svc.hint.touch': 'Klepněte pro výběr',
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
    'svc.6.desc':  '',

    'price.tag':      'Ceník',
    'price.heading': 'Ceny za <em>naše služby.</em>',
    'price.sub':      'Transparentní ceny tvorby webových stránek bez skrytých poplatků. Vyberte jednorázové vytvoření webu — nebo pravidelnou správu, monitoring a SEO optimalizaci.',
    'price.dev.label':'A — Jednorázová tvorba webu',
    'price.incl.lead':  'V ceně u všech balíčků',
    'price.incl.items': 'doména &middot; hosting &middot; SSL certifikát &middot; nasazení webu',
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
    'price.1.f6': 'Doména, hosting, SSL & nasazení v ceně',
    'price.1.f7': 'Dodání do 14 dní',
    'price.2.tier':   'BUSINESS',
    'price.2.flag':   'Nejčastější volba',
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
    'footer.ico':     'IČO',
    'sticky.cta':     'Nezávazná poptávka',
    'footer.col1.h':  'Služby',
    'footer.col2.h':  'Společnost',
    'form.err.name':  'Vyplňte prosím jméno.',
    'form.err.email': 'Zadejte platný e-mail.',
    'form.err.msg':   'Napište prosím pár vět o projektu.',
    'form.gdpr':      'Souhlasím se zpracováním osobních údajů za účelem vyřízení této poptávky. Údaje nepředáváme třetím stranám a na požádání je smažeme.',
    'form.err.gdpr':  'Bez souhlasu bohužel nemůžeme poptávku zpracovat.',
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

    'hero.l1': 'We are <em>Lanthir.</em>',
    'hero.l2': 'Your technology partner for growth and operations.',
    'hero.sub': 'We design custom websites and keep them running. A web application, e-shop or booking system — with SSL, hosting, SEO optimisation and uptime monitoring included.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip2':    'Days avg. delivery',
    'hero.building': 'Your website is being prepared...',

    'svc.tag': 'What we do',
    'svc.heading': 'Our<br><em>products.</em>',
    'svc.hint': 'Drag or scroll',
    'svc.hint.touch': 'Tap to choose',
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
    'svc.6.desc':  '',

    'price.tag':      'Pricing',
    'price.heading': 'Prices for <em>our services.</em>',
    'price.sub':      'Transparent pricing, no hidden fees. Choose one-time development or ongoing management.',
    'price.dev.label':'A — One-time Website Development',
    'price.incl.lead':  'Included in every package',
    'price.incl.items': 'domain &middot; hosting &middot; SSL certificate &middot; deployment',
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
    'price.1.f6': 'Domain, hosting, SSL & deployment included',
    'price.1.f7': 'Delivery in 14 days',
    'price.2.tier':   'BUSINESS',
    'price.2.flag':   'Most chosen',
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
    'footer.ico':     'Company ID (IČO)',
    'sticky.cta':     'Get a free quote',
    'footer.col1.h':  'Services',
    'footer.col2.h':  'Company',
    'form.err.name':  'Please enter your name.',
    'form.err.email': 'Enter a valid email address.',
    'form.err.msg':   'Tell us a little about the project.',
    'form.gdpr':      'I agree to my personal data being processed in order to handle this enquiry. We do not pass it to third parties and will delete it on request.',
    'form.err.gdpr':  'We cannot process the enquiry without your consent.',
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

    'hero.l1': 'Jesteśmy <em>Lanthir.</em>',
    'hero.l2': 'Twój partner technologiczny dla wzrostu i utrzymania firmy.',
    'hero.sub': 'Projektujemy strony internetowe na zamówienie i dbamy o ich działanie. Aplikacja webowa, sklep lub system rezerwacji — z SSL, hostingiem, optymalizacją SEO i monitoringiem dostępności.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.building': 'Twoja strona jest przygotowywana...',

    'svc.tag': 'Co robimy',
    'svc.heading': 'Nasze<br><em>produkty.</em>',
    'svc.hint': 'Przeciągnij lub przewiń',
    'svc.hint.touch': 'Dotknij, aby wybrać',
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
    'svc.6.desc':  '',

    'price.tag':      'Cennik',
    'price.heading': 'Ceny za <em>nasze usługi.</em>',
    'price.sub':      'Przejrzyste ceny bez ukrytych opłat. Wybierz jednorazowe tworzenie lub stały abonament zarządzania.',
    'price.dev.label':'A — Jednorazowe tworzenie strony',
    'price.incl.lead':  'W cenie każdego pakietu',
    'price.incl.items': 'domena &middot; hosting &middot; certyfikat SSL &middot; wdrożenie',
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
    'price.1.f6': 'Domena, hosting, SSL i wdrożenie w cenie',
    'price.1.f7': 'Realizacja w 14 dni',
    'price.2.tier':   'BUSINESS',
    'price.2.flag':   'Najczęstszy wybór',
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
    'footer.ico':     'IČO',   /* Czech registration number — not the Polish REGON */
    'sticky.cta':     'Bezpłatna wycena',
    'footer.col1.h':  'Usługi',
    'footer.col2.h':  'Firma',
    'form.err.name':  'Podaj proszę imię.',
    'form.err.email': 'Podaj poprawny adres e-mail.',
    'form.err.msg':   'Napisz kilka słów o projekcie.',
    'form.gdpr':      'Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi tego zapytania. Nie przekazujemy ich stronom trzecim i usuniemy je na żądanie.',
    'form.err.gdpr':  'Bez zgody nie możemy obsłużyć zapytania.',
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
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ── Hero hand-off ─────────────────────────
   The headline waits for the backdrop, so the two read as a sequence rather
   than a pile-up: the streaks establish themselves, then the type folds down
   over them. Capped at 1.2s, because the text must never be held hostage to a
   shader that fails to compile, a lite-tier device, or a driver that never
   draws a frame. */
let heroReady = false;
/* The opening runs in one order, timed from the moment the backdrop puts its
   first frame up: streaks, then the headline folding down over them, then the
   supporting copy and buttons rising underneath. The copy starts while the
   headline is still folding its last characters — waiting for a full stop
   would leave the primary button off screen for well over two seconds. */
/* ── Opening sequence ──────────────────────
   The "cinematic" pacing, picked over two faster and one slower variant.

     hold  = backdrop alone on screen before the headline moves
     sweep = how long the fold takes to cross the headline
     char  = how long a single character takes to swing down

   Second and later views in the same session get the short version — nobody
   should sit through a title sequence twice to reach a price list. */
const INTRO_FULL  = { hold: 1000, l1: 850, l2: 1250, char: 700, gap: 200 };
const INTRO_QUICK = { hold: 120,  l1: 360, l2: 520,  char: 460, gap: 90 };

const INTRO = (() => {
  let seen = false;
  try { seen = sessionStorage.getItem('lanthir-intro') === '1'; } catch (e) {}
  try { sessionStorage.setItem('lanthir-intro', '1'); } catch (e) {}
  return seen ? INTRO_QUICK : INTRO_FULL;
})();

/* The copy carries a 180ms internal stagger and a ~650ms transition. Starting
   it that much before the headline's last character lands makes the two arrive
   together instead of the lede beating the headline to a stop. */
const COPY_TAIL = 830;
/* line two starts once line one has finished sweeping, not once its last
   character has finished moving — a slight overlap, so the two read as one
   thought arriving in two beats rather than two separate events */
const L2_START = INTRO.hold + INTRO.l1 + INTRO.gap;
const HERO_SETTLED = L2_START + INTRO.l2 + INTRO.char;
const HERO_STEP = {
  l1: INTRO.hold,
  l2: L2_START,
  copy: Math.max(INTRO.hold + 120, HERO_SETTLED - COPY_TAIL),
  /* Touch gets the bar straight away. Holding it back on a phone meant the
     burger sat there looking like a control for three and a half seconds
     before it became one. */
  nav:  FINE ? Math.max(INTRO.hold + 260, HERO_SETTLED - COPY_TAIL + 260) : 0
};
const heroWaiting = [];
const onHeroReady = cb => (heroReady ? cb() : heroWaiting.push(cb));
const markHeroReady = () => {
  if (heroReady) return;
  heroReady = true;
  document.documentElement.dataset.hero = 'ready';
  heroWaiting.splice(0).forEach(cb => cb());
};
setTimeout(markHeroReady, 1200);

/* ── Skip on intent ────────────────────────
   Any sign the visitor wants to get on with it ends the intro immediately.
   A held-back page is only charming until someone is trying to use it. */
let introDone = false;
const endIntro = () => {
  if (introDone) return;
  introDone = true;
  document.body.classList.add('intro-skip');   /* collapses the remaining delays */
  markHeroReady();
  document.body.classList.add('ready', 'nav-in');
  document.querySelectorAll('.fold').forEach(el => el.classList.add('in'));
};
['pointerdown', 'wheel', 'touchstart', 'keydown', 'scroll'].forEach(t =>
  addEventListener(t, endIntro, { once: true, passive: true }));

/* Motion budget scaled to the hardware: 0 lite · 1 standard · 2 full */
const TIER = (() => {
  const c = navigator.connection || {};
  if (c.saveData || /2g|slow-2g/.test(c.effectiveType || '')) return 0;
  const mem = navigator.deviceMemory || 0, cpu = navigator.hardwareConcurrency || 0;
  if ((mem && mem <= 2) || (cpu && cpu <= 2)) return 0;
  if ((mem && mem <= 4) || (cpu && cpu <= 4) || (!FINE && innerWidth < 820)) return 1;
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
  if (window.__wheelSync) window.__wheelSync();
  /* innerHTML above just destroyed every split heading — rebuild them */
  if (window.__foldSync) window.__foldSync();
}
document.querySelectorAll('.ls-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ── Nav ──────────────────────────────────── */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 24), { passive: true });

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const setMenu = open => {
  navLinks.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('no-scroll', open);
};
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
/* Escape, and a tap on the empty part of the panel, both close it — a
   full-screen overlay whose only exit is one small X is a trap on a phone. */
addEventListener('keydown', e => { if (e.key === 'Escape' && navLinks.classList.contains('open')) setMenu(false); });
navLinks.addEventListener('click', e => { if (e.target === navLinks) setMenu(false); });

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

/* ── Reveal on scroll ─────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (RM) { els.forEach(e => e.classList.add('in')); return; }
  /* siblings entering together cascade rather than popping as a block */
  document.querySelectorAll('.ref-grid, .price-grid, .people, .steps, .contact-info').forEach(g => {
    Array.from(g.children).filter(c => c.classList.contains('reveal'))
      .forEach((c, i) => c.style.setProperty('--d', (i * 0.045).toFixed(3) + 's'));
  });
  /* Fire *before* the element reaches the fold, not after. A negative bottom
     margin (the old -6%) means content has to be well inside the viewport
     before it starts moving, so the animation always trails the scroll and
     reads as lag. Extending the root 14% past the bottom edge starts the
     transition while the element is still below the fold, so by the time it is
     actually on screen it has already arrived. */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0, rootMargin: '0px 0px 14% 0px' });
  els.forEach(e => io.observe(e));
  /* `ready` drives the hero's lede, buttons and scroll cue. It used to fire on
     the first animation frame, which put them on screen before the backdrop
     and the headline had done anything at all. */
  onHeroReady(() => setTimeout(() => document.body.classList.add('ready'), HERO_STEP.copy));
  /* the top bar is chrome — it arrives after the hero has spoken, not before */
  onHeroReady(() => setTimeout(() => document.body.classList.add('nav-in'), HERO_STEP.nav));
})();
if (RM) document.body.classList.add('ready');
if (RM) document.body.classList.add('nav-in');

/* ══════════════════════════════════════════════
   LIGHTFALL — the React Bits component, ported to raw WebGL
   Same fragment shader; no `ogl`, since this project has no bundler.
   Props match the reference usage exactly.
══════════════════════════════════════════════ */
function bootLightfall() {
  const cv = document.getElementById('lightfall');
  if (!cv) return;

  const staticWash = () => {
    cv.style.background =
      'radial-gradient(70% 60% at 50% 0%, #3348ff 0%, #241a9e 42%, #0a0f2e 100%)';
  };
  /* ?lightfall=off renders the static wash instead — useful for comparing the
     two on real hardware without a redeploy. */
  const forced = new URLSearchParams(location.search).get('lightfall');
  if (forced === 'off' || TIER === 0 || RM) { staticWash(); markHeroReady(); return; }

  const gl = cv.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
  if (!gl) { staticWash(); markHeroReady(); return; }

  const VERT = [
    'attribute vec2 position;',
    'void main() { gl_Position = vec4(position, 0.0, 1.0); }'
  ].join('\n');

  const FRAG = [
    'precision highp float;',
    'uniform vec3  iResolution;',
    'uniform vec2  iMouse;',
    'uniform float iTime;',
    'uniform vec3  uColor0; uniform vec3 uColor1; uniform vec3 uColor2;',
    'uniform int   uColorCount;',
    'uniform vec3  uBgColor;',
    'uniform vec3  uMouseColor;',
    'uniform float uSpeed;',
    'uniform int   uStreakCount;',
    'uniform float uStreakWidth;',
    'uniform float uStreakLength;',
    'uniform float uGlow;',
    'uniform float uDensity;',
    'uniform float uTwinkle;',
    'uniform float uZoom;',
    'uniform float uBgGlow;',
    'uniform float uOpacity;',
    'uniform float uMouseEnabled;',
    'uniform float uMouseStrength;',
    'uniform float uMouseRadius;',
    '',
    'vec3 palette(float h) {',
    '  int count = uColorCount; if (count < 1) count = 1;',
    '  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));',
    '  if (idx <= 0) return uColor0;',
    '  if (idx == 1) return uColor1;',
    '  return uColor2;',
    '}',
    'vec3 tanhv(vec3 x) { vec3 e = exp(-2.0 * x); return (1.0 - e) / (1.0 + e); }',
    '',
    'vec2 sceneC(vec2 frag, vec2 r) {',
    '  vec2 P = (frag + frag - r) / r.x;',
    '  float z = 0.0; float d = 1e3; vec4 O = vec4(0.0);',
    '  for (int k = 0; k < 39; k++) {',
    '    if (d <= 1e-4) break;',
    '    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;',
    '    d = 1.0 - sqrt(length(O * O));',
    '    z += d;',
    '  }',
    '  return vec2(O.x, atan(O.z, O.y));',
    '}',
    '',
    'void mainImage(out vec4 o, vec2 C) {',
    '  vec2 r = iResolution.xy;',
    '  vec2 uv0 = (C + C - r) / r.x;',
    '  float T = 0.1 * iTime * uSpeed + 9.0;',
    '  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));',
    '  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);',
    '',
    '  vec2 c0 = sceneC(C, r);',
    '  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);',
    '  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);',
    '  vec2 dCx = cdx - c0; vec2 dCy = cdy - c0;',
    '  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);',
    '  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);',
    '  vec2 fw = abs(dCx) + abs(dCy);',
    '  C = c0;',
    '',
    '  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);',
    '  vec4 O = vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);',
    '',
    '  float mGlow = 0.0;',
    '  if (uMouseEnabled > 0.5) {',
    '    vec2 mN = (iMouse + iMouse - r) / r.x;',
    '    float md = length(uv0 - mN);',
    '    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;',
    '    O.rgb += uMouseColor * mGlow * 0.25;',
    '  }',
    '',
    '  float zr = 5e-4 * uStreakWidth;',
    '  vec2 rr = vec2(max(length(fw), 1e-5));',
    '  float tail = 19.0 / max(uStreakLength, 0.05);',
    '',
    '  for (int m = 0; m < 16; m++) {',
    '    if (m >= uStreakCount) break;',
    '    float jf = float(m) + 1.0;',
    '    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));',
    '    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);',
    '    Pp -= floor(Pp / Y + 0.5) * Y;',
    '    float h = fract(8663.0 * ic);',
    '    vec3 col = palette(h);',
    '    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);',
    '    weight *= (1.0 + mGlow * 2.0);',
    '    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;',
    '    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);',
    '    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;',
    '    C.x += Y.x / 8.0;',
    '  }',
    '',
    '  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));',
    '  o = vec4(colr, uOpacity);',
    '}',
    'void main() { vec4 c; mainImage(c, gl_FragCoord.xy); gl_FragColor = c; }'
  ].join('\n');

  const sh = (t, src) => {
    const o = gl.createShader(t);
    gl.shaderSource(o, src); gl.compileShader(o);
    if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(o)); return null; }
    return o;
  };
  const vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) { staticWash(); markHeroReady(); return; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.warn(gl.getProgramInfoLog(prog)); staticWash(); markHeroReady(); return; }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'position');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = n => gl.getUniformLocation(prog, n);
  const hex = h => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];

  /* props exactly as given in the reference usage */
  const COLORS = ['#A6C8FF', '#5227FF', '#FF9FFC'];
  const rgb = COLORS.map(hex);
  const avg = rgb.reduce((a, c) => [a[0] + c[0] / 3, a[1] + c[1] / 3, a[2] + c[2] / 3], [0, 0, 0]);
  gl.uniform3fv(U('uColor0'), rgb[0]);
  gl.uniform3fv(U('uColor1'), rgb[1]);
  gl.uniform3fv(U('uColor2'), rgb[2]);
  gl.uniform1i(U('uColorCount'), 3);
  gl.uniform3fv(U('uBgColor'), hex('#0A29FF'));
  gl.uniform3fv(U('uMouseColor'), avg);
  gl.uniform1f(U('uSpeed'), 1.0);
  gl.uniform1i(U('uStreakCount'), TIER === 2 ? 8 : 4);
  gl.uniform1f(U('uStreakWidth'), 1.0);
  gl.uniform1f(U('uStreakLength'), 1.0);
  gl.uniform1f(U('uGlow'), 1.0);
  gl.uniform1f(U('uDensity'), 1.0);
  gl.uniform1f(U('uTwinkle'), 1.0);
  gl.uniform1f(U('uZoom'), 2.0);
  gl.uniform1f(U('uBgGlow'), 1.0);
  gl.uniform1f(U('uOpacity'), 1.0);
  gl.uniform1f(U('uMouseEnabled'), FINE ? 1 : 0);
  gl.uniform1f(U('uMouseStrength'), 1.0);
  gl.uniform1f(U('uMouseRadius'), 0.6);

  const uRes = U('iResolution'), uTime = U('iTime'), uMouse = U('iMouse');

  /* A full-bleed 39-step raymarch is fragment-bound, so the backing store is
     what decides whether this holds 60fps. Phones get 1× — a tall phone at
     DPR 3 would otherwise be shading four times the pixels of a laptop. */
  const DPR = Math.min(devicePixelRatio || 1, FINE ? (TIER === 2 ? 1.75 : 1.25) : 1);
  let W = 0, H = 0;
  const fit = () => {
    W = cv.clientWidth; H = cv.clientHeight;
    if (!W || !H) return;
    cv.width = Math.round(W * DPR);
    cv.height = Math.round(H * DPR);
    gl.viewport(0, 0, cv.width, cv.height);
    gl.uniform3f(uRes, cv.width, cv.height, 1);
  };
  fit();
  requestAnimationFrame(fit);          /* the canvas sits inside the hero — wait for layout */
  addEventListener('load', fit);
  let rq = false;
  addEventListener('resize', () => { if (rq) return; rq = true; setTimeout(() => { rq = false; fit(); }, 150); });

  const mt = [0, 0], mc = [0, 0];
  if (FINE) addEventListener('pointermove', e => {
    const r = cv.getBoundingClientRect();
    mt[0] = (e.clientX - r.left) * DPR;
    mt[1] = (r.height - (e.clientY - r.top)) * DPR;
  }, { passive: true });

  let vis = true;
  new IntersectionObserver(e => { vis = e[e.length - 1].isIntersecting; })
    .observe(document.querySelector('.hero') || cv);

  let last = 0, drawn = false;
  (function frame(now) {
    requestAnimationFrame(frame);
    if (!W) { fit(); return; }
    if (document.hidden || !vis) return;   /* stop drawing once past the hero */
    const dt = last ? Math.min((now - last) / 1000, .05) : 0;
    last = now;
    const k = 1 - Math.exp(-dt / 0.15);    /* mouseDampening 0.15 */
    mc[0] += (mt[0] - mc[0]) * k;
    mc[1] += (mt[1] - mc[1]) * k;
    gl.uniform2f(uMouse, mc[0], mc[1]);
    gl.uniform1f(uTime, now * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    /* the streaks are on screen — the headline may now fold down over them */
    if (!drawn) { drawn = true; markHeroReady(); }
  })(0);
}

/* Compiling and linking a 39-step raymarch at highp is a single ~100ms block of
   main thread, and doing it inline pushed first contentful paint from 72ms to
   164ms — the whole page waited on the hero's shader. So paint the gradient
   wash straight away (the hero band is never empty), then upgrade to the real
   thing once the browser has drawn and is idle. */
(function () {
  const cv = document.getElementById('lightfall');
  if (cv) cv.style.background = 'radial-gradient(70% 60% at 50% 0%, #3348ff 0%, #241a9e 42%, #0a0f2e 100%)';
  /* Idle, not just post-load: firing straight after `load` simply moved the
     100ms compile on top of largest-contentful-paint instead of first paint.
     The timeout is short, though — the headline now waits on this shader, and
     a loose idle deadline let the boot drift far enough that the text fell
     back to its own timer instead of being cued by the backdrop. */
  const go = () => (window.requestIdleCallback || (f => setTimeout(f, 160)))(
    () => bootLightfall(), { timeout: 350 }
  );
  if (document.readyState === 'complete') go();
  else addEventListener('load', go, { once: true });
})();

/* ══════════════════════════════════════════════
   FOLD TEXT — the React Bits component, in CSS
   splitBy char · hinge top · trigger scroll · duration .65 · stagger .045
   ease power3.out · perspective 700 · creaseShading .55

   Two things make this awkward on a real page rather than a demo string, and
   both are handled here: the headings carry markup (<br>, <em>) that has to
   survive the split, and applyLang rewrites innerHTML wholesale on every
   language change, which wipes the split — so this re-runs from applyLang.
══════════════════════════════════════════════ */
(function () {
  const heads = Array.from(document.querySelectorAll('.hero-l1, .hero-l2, .h2, .logo-text, .nav-links a:not(.m-cta)'));
  if (!heads.length) return;

  /* Nav items are their own fold containers rather than one container round
     the whole bar: `build` replaces an element's children, and running it over
     the <ul> would rebuild the <a> elements and lose their href. Each item
     restarts --i at 0, so a --base offset per item is what turns six
     simultaneous flips into one sweep across the bar. */
  const navFolds = Array.from(document.querySelectorAll('.logo-text, .nav-links a:not(.m-cta)'));
  navFolds.forEach((el, k) => el.style.setProperty('--base', (k * 55) + 'ms'));

  const build = el => {
    let i = 0;
    const walk = (from, to, grad) => {
      from.childNodes.forEach(n => {
        if (n.nodeType === 3) {
          /* keep whole words together so the line still breaks normally */
          n.nodeValue.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { to.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'fold-w';
            /* for..of walks code points, so č/ě/ř stay single characters */
            for (const ch of part) {
              const c = document.createElement('span');
              c.className = grad ? 'fold-c grad' : 'fold-c';
              c.style.setProperty('--i', i++);
              c.textContent = ch;
              w.appendChild(c);
            }
            to.appendChild(w);
          });
        } else if (n.nodeType === 1) {
          if (n.tagName === 'BR') { to.appendChild(document.createElement('br')); return; }
          const clone = document.createElement(n.tagName.toLowerCase());
          /* copy every attribute — cloning only the class silently dropped
             href, aria-* and data-i18n from anything nested */
          for (const a of n.attributes) clone.setAttribute(a.name, a.value);
          walk(n, clone, grad || n.tagName === 'EM');
          to.appendChild(clone);
        }
      });
    };
    const frag = document.createDocumentFragment();
    walk(el, frag, false);
    el.textContent = '';
    el.appendChild(frag);
    /* The reference stagger of 45ms was picked for a 19-character English
       string. "Technologický partner pro růst a provoz firmy." is 40, and at
       45ms the last letter would not start moving for 1.8s — the headline
       would still be assembling itself long after the visitor had read it.
       Hold the whole sweep to ~0.9s and let short headings keep the full 45. */
    const heroLine = el.classList.contains('hero-l1') ? 'l1'
                   : el.classList.contains('hero-l2') ? 'l2' : null;
    const sweep = heroLine ? INTRO[heroLine] : 900;
    el.style.setProperty('--stag', Math.min(heroLine ? 120 : 45, sweep / Math.max(i, 1)).toFixed(1) + 'ms');
    if (heroLine) el.style.setProperty('--fold-dur', INTRO.char + 'ms');
    el.classList.add('fold');
  };

  /* Each character is its own box, so a background-clip gradient would restart
     on every letter. Give each one the slice of the ramp that belongs at its
     position instead. Measured with offsetLeft/offsetTop because those are
     layout values — getBoundingClientRect would report the folded, squashed
     box while the characters are still rotated out. */
  /* Offsets have to be accumulated up the offsetParent chain, not read once:
     `.fold-w` carries transform-style, which makes every word its own
     offsetParent, so a bare offsetLeft is measured from the start of the word
     and the ramp restarts on each one. */
  const absOffset = node => {
    let x = 0, y = 0;
    for (let n = node; n; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
    return [x, y];
  };

  /* Returns false when the heading has no layout yet. Writing a zero-width
     background-size would leave every gradient character painting nothing —
     the <em> would simply be invisible — so refuse and let the caller retry
     on the next frame. */
  const project = el => {
    const gs = el.querySelectorAll('.fold-c.grad');
    if (!gs.length) return true;
    const w = el.offsetWidth, h = el.offsetHeight;
    if (!w || !h) return false;
    const [hx, hy] = absOffset(el);
    gs.forEach(c => {
      const [cx, cy] = absOffset(c);
      c.style.backgroundSize = w + 'px ' + h + 'px';
      c.style.backgroundPosition = (hx - cx) + 'px ' + (hy - cy) + 'px';
    });
    return true;
  };

  let tries = 0;
  const projectAll = () => {
    const pending = heads.filter(el => !project(el));
    if (pending.length && ++tries < 60) requestAnimationFrame(projectAll);
  };

  const io = RM ? null : new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0, rootMargin: '0px 0px 12% 0px' });

  const heroL1 = document.querySelector('.hero-l1');
  const heroL2 = document.querySelector('.hero-l2');

  const run = () => {
    heads.forEach(el => {
      if (!el.querySelector('.fold-c')) build(el);
      if (RM) { el.classList.add('in'); return; }
      if (el.classList.contains('in')) return;
      /* The hero headline is on screen from the first frame, so an observer
         would fire instantly and race the backdrop. It waits for the shader's
         first frame instead; every other heading keeps the scroll trigger. */
      /* The hero lines are on screen from the first frame, so an observer would
         fire instantly and race the backdrop. They wait for the shader and then
         run in sequence; every other heading keeps the scroll trigger. */
      if (el === heroL1) onHeroReady(() => setTimeout(() => el.classList.add('in'), HERO_STEP.l1));
      else if (el === heroL2) onHeroReady(() => setTimeout(() => el.classList.add('in'), HERO_STEP.l2));
      else if (navFolds.indexOf(el) !== -1) onHeroReady(() => setTimeout(() => el.classList.add('in'), HERO_STEP.nav));
      else io.observe(el);
    });
    tries = 0;
    projectAll();
  };

  /* No initial run() here: applyLang() fires at the end of this file and
     rewrites every heading's innerHTML, which destroys the split. Building
     first meant creating all 140 character spans twice on every load. The
     __foldSync hook inside applyLang is the single build. */
  window.__foldSync = run;

  let rq = false;
  addEventListener('resize', () => {
    if (rq) return;
    rq = true;
    setTimeout(() => { rq = false; tries = 0; projectAll(); }, 150);
  });
  /* the display font is loaded async, and the swap changes every glyph advance,
     so the slices have to be recut once it lands */
  addEventListener('load', () => { tries = 0; projectAll(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { tries = 0; projectAll(); });
})();

/* ══════════════════════════════════════════════
   SPECULAR BUTTON — the React Bits component, in CSS
   radius 18 · thickness 1 · shineSize 10 · shineFade 40 · speed .35
   followMouse · proximity 250 · intensity 1 · autoAnimate false

   JS writes two custom properties per button and nothing else. The glint
   eases toward the cursor rather than snapping, which is what stops it
   reading as a hover state and starts it reading as light.
══════════════════════════════════════════════ */
(function () {
  const btns = Array.from(document.querySelectorAll('.btn'));
  if (!btns.length || !FINE || RM) return;

  const PROX = 250, SPEED = 0.35, INTENSITY = 1;
  const box = new Array(btns.length);
  const cur = btns.map(() => ({ a: 90, n: 0 }));
  const tgt = btns.map(() => ({ a: 90, n: 0 }));
  let stale = true, raf = null, last = 0, px = -1e5, py = -1e5;

  const measure = () => {
    stale = false;
    for (let i = 0; i < btns.length; i++) box[i] = btns[i].getBoundingClientRect();
  };

  /* shortest way round the circle, so a glint near 0deg does not spin the
     long way to 359deg */
  const easeAngle = (a, b, k) => a + ((((b - a) % 360) + 540) % 360 - 180) * k;

  const frame = now => {
    const dt = last ? Math.min((now - last) / 1000, .05) : 1 / 60;
    last = now;
    if (stale) measure();
    const k = 1 - Math.pow(1 - SPEED, dt * 60);

    let alive = false;
    for (let i = 0; i < btns.length; i++) {
      const r = box[i];
      if (!r || !r.width) continue;
      /* distance from the pointer to the button's box, 0 when inside it */
      const dx = Math.max(r.left - px, 0, px - r.right);
      const dy = Math.max(r.top - py, 0, py - r.bottom);
      const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / PROX) * INTENSITY;
      tgt[i].n = near;
      if (near > 0) {
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        let deg = Math.atan2(py - cy, px - cx) * (180 / Math.PI) + 90;
        if (deg < 0) deg += 360;
        tgt[i].a = deg;
      }

      const c = cur[i];
      c.n += (tgt[i].n - c.n) * k;
      c.a = (easeAngle(c.a, tgt[i].a, k) % 360 + 360) % 360;   /* keep it bounded */
      if (c.n < 0.002) c.n = 0;

      btns[i].style.setProperty('--near', c.n.toFixed(3));
      btns[i].style.setProperty('--sa', c.a.toFixed(1) + 'deg');
      if (c.n > 0 || tgt[i].n > 0) alive = true;
    }

    raf = alive ? requestAnimationFrame(frame) : (last = 0, null);
  };

  const wake = () => { if (raf == null) { last = 0; raf = requestAnimationFrame(frame); } };
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; wake(); }, { passive: true });
  addEventListener('scroll', () => { stale = true; wake(); }, { passive: true });
  addEventListener('resize', () => { stale = true; wake(); });
  addEventListener('pointerleave', () => { px = py = -1e5; wake(); });
})();

/* ══════════════════════════════════════════════
   BORDER GLOW — cursor-reactive edges
   Writes --edge (0-100) and --angle; the look is entirely CSS.
══════════════════════════════════════════════ */
(function () {
  const cards = Array.from(document.querySelectorAll('.glow'));
  if (!cards.length || !FINE) return;

  /* Geometry is cached and refreshed on scroll/resize instead of measured per
     move: reading getBoundingClientRect for every card on every pointermove
     forced a layout flush hundreds of times a second. Writes are batched into
     one rAF so a burst of moves costs a single style pass. */
  const box = new Array(cards.length);
  let onScreen = [];
  let stale = true;

  const measure = () => {
    stale = false;
    onScreen.length = 0;
    for (let i = 0; i < cards.length; i++) {
      const r = cards[i].getBoundingClientRect();
      box[i] = r;
      /* a card well off screen can never be near the pointer */
      if (r.bottom > -120 && r.top < innerHeight + 120 && r.width) onScreen.push(i);
      else if (cards[i].style.getPropertyValue('--edge') !== '0') cards[i].style.setProperty('--edge', '0');
    }
  };

  let px = 0, py = 0, queued = false;

  const paint = () => {
    queued = false;
    if (stale) measure();
    for (const i of onScreen) {
      const card = cards[i], r = box[i];
      if (px < r.left - 90 || px > r.right + 90 || py < r.top - 90 || py > r.bottom + 90) {
        if (card.style.getPropertyValue('--edge') !== '0') card.style.setProperty('--edge', '0');
        continue;
      }
      const cx = r.width / 2, cy = r.height / 2;
      const dx = px - r.left - cx, dy = py - r.top - cy;
      const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
      const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
      const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
      let deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (deg < 0) deg += 360;
      card.style.setProperty('--edge', (edge * 100).toFixed(1));
      card.style.setProperty('--angle', deg.toFixed(1) + 'deg');
    }
  };

  addEventListener('pointermove', e => {
    px = e.clientX; py = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(paint); }
  }, { passive: true });

  const invalidate = () => { stale = true; if (!queued) { queued = true; requestAnimationFrame(paint); } };
  addEventListener('scroll', invalidate, { passive: true });
  addEventListener('resize', invalidate);
  addEventListener('pointerleave', () => cards.forEach(c => c.style.setProperty('--edge', '0')));
  measure();
})();

/* ══════════════════════════════════════════════
   OPTION WHEEL — products
   Options ride a circle whose radius keeps the arc between neighbours
   equal to one row, so `tilt` controls how tightly it curls. One rAF
   loop eases position toward target with frame-rate-independent
   smoothing, and it is interruptible at any moment.
══════════════════════════════════════════════ */
(function () {
  const wheel = document.getElementById('wheel');
  const detail = document.getElementById('wheelDetail');
  if (!wheel || !detail) return;

  const items = Array.from(wheel.querySelectorAll('.wheel-item'));
  const panes = Array.from(detail.querySelectorAll('p'));
  const scenes = Array.from(document.querySelectorAll('.pv-frame .pv'));
  const thumb = document.getElementById('wheelThumb');
  const rail = thumb ? thumb.parentElement : null;
  const idxOut = document.getElementById('wheelIdx');
  const slot = document.querySelector('.wheel-line');
  const n = items.length;
  if (!n) return;

  const CFG = { tilt: 7, curve: 1, blur: 2, fade: .3, minOpacity: .12, smoothing: 200 };
  /* Rows sit further apart under a thumb than under a cursor. At the cursor
     pitch the options are ~33px apart on a phone, which is not a tappable
     target no matter how much invisible padding is added — the neighbours just
     take the hit instead. Widening the pitch is the only real fix. */
  const PITCH = FINE ? 1.55 : 2.15;
  let rowH = 64, railTravel = 0;
  const measure = () => {
    const fs = parseFloat(getComputedStyle(items[0]).fontSize) || 34;
    rowH = Math.max(fs * PITCH, 1);
    /* the selection slot is exactly one row tall, so it frames the active word */
    if (slot) slot.style.setProperty('--slot', Math.round(rowH) + 'px');
    if (rail) {
      const railH = rail.clientHeight;
      const thumbH = Math.max(railH / n, 18);
      rail.style.setProperty('--thumb-h', thumbH.toFixed(1) + 'px');
      railTravel = Math.max(railH - thumbH, 0);
    }
  };
  measure();
  addEventListener('resize', measure);

  let pos = 0, target = 0, raf = null, last = 0, sel = -1;

  const select = i => {
    if (i === sel) return;
    sel = i;
    items.forEach((el, k) => {
      el.classList.toggle('sel', k === i);
      el.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
    panes.forEach((p, k) => p.classList.toggle('is-on', k === i));
    /* toggling the class is what restarts the scene's entry animation */
    scenes.forEach((s, k) => s.classList.toggle('is-on', k === i));
    if (idxOut) idxOut.textContent = String(i + 1).padStart(2, '0');
  };

  const layout = () => {
    const tiltRad = CFG.tilt * Math.PI / 180;
    const R = tiltRad > 0.0005 ? rowH / tiltRad : 0;
    for (let i = 0; i < n; i++) {
      const d = i - pos;
      const dist = Math.abs(d);
      let x = 0, y = d * rowH, rot = 0;
      if (R > 0) {
        const ang = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, d * tiltRad));
        y = R * Math.sin(ang);
        x = -R * (1 - Math.cos(ang)) * CFG.curve;
        rot = ang * 180 / Math.PI;
      }
      const el = items[i];
      el.style.transform = `translate(${x.toFixed(2)}px, calc(${y.toFixed(2)}px - 50%)) rotate(${rot.toFixed(3)}deg)`;
      el.style.opacity = String(Math.max(CFG.minOpacity, 1 - dist * CFG.fade));
      el.style.filter = CFG.blur > 0 && !RM ? `blur(${(dist * CFG.blur).toFixed(2)}px)` : 'none';
      el.style.setProperty('--p', Math.max(0, 1 - Math.min(dist, 1)).toFixed(3));
    }
    /* the rail thumb rides the same eased `pos`, so it inherits the spring free */
    if (thumb && n > 1) {
      thumb.style.transform = `translate3d(0, ${(pos / (n - 1) * railTravel).toFixed(2)}px, 0)`;
    }
  };

  const tick = now => {
    const dt = Math.min((now - last) / 1000, .05);
    last = now;
    const k = 1 - Math.exp(-dt / (CFG.smoothing / 1000));
    pos += (target - pos) * k;
    const settled = Math.abs(target - pos) < 0.001;
    if (settled) pos = target;
    layout();
    raf = settled ? null : requestAnimationFrame(tick);
  };
  const start = () => { if (raf != null) cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(tick); };

  const setTarget = (v, snap) => {
    let x = Math.min(Math.max(v, 0), n - 1);
    if (snap) x = Math.round(x);
    target = x;
    select(((Math.round(x) % n) + n) % n);
    if (RM) { pos = target; layout(); return; }
    start();
  };

  /* click to choose */
  items.forEach((el, i) => el.addEventListener('click', () => { if (!moved) setTarget(i, true); }));

  /* drag, with velocity carried into the release */
  let drag = null, moved = false, vel = 0, lastY = 0, lastT = 0;
  wheel.addEventListener('pointerdown', e => {
    /* Touch never drags the picker. `touch-action: pan-y` hands the gesture to
       the browser so the page can always be scrolled, but the pointermoves
       still arrive before the cancel — acting on them would spin the picker
       while someone was only trying to scroll past it. Taps still select. */
    if (e.pointerType === 'touch') return;
    drag = { y: e.clientY, start: target, id: e.pointerId };
    moved = false; vel = 0; lastY = e.clientY; lastT = performance.now();
    wheel.classList.add('dragging');
  });
  wheel.addEventListener('pointermove', e => {
    if (!drag) return;
    const dy = e.clientY - drag.y;
    if (!moved && Math.abs(dy) > 4) { moved = true; wheel.setPointerCapture(drag.id); }
    if (!moved) return;
    const now = performance.now(), dt = (now - lastT) / 1000;
    if (dt > 0) vel = (e.clientY - lastY) / dt;
    lastY = e.clientY; lastT = now;
    setTarget(drag.start - dy / rowH, false);
  });
  const release = () => {
    if (!drag) return;
    drag = null;
    wheel.classList.remove('dragging');
    if (!moved) return;
    /* project the flick and land on the option it was heading for */
    const projected = target - (vel / 1000) * (0.998 / (1 - 0.998)) / rowH;
    setTarget(projected, true);
  };
  wheel.addEventListener('pointerup', release);
  wheel.addEventListener('pointercancel', release);

  /* Wheel / trackpad. The picker consumes the scroll only while it still has
     somewhere to go; at either end it hands the gesture straight back to the
     page. Without that release, parking the cursor over the picker on the way
     down the page would trap the scroll — the one thing a component like this
     must never do. */
  let wt = null;
  wheel.addEventListener('wheel', e => {
    const delta = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaY;
    if ((delta < 0 && target <= 0.001) || (delta > 0 && target >= n - 1 - 0.001)) return;
    e.preventDefault();
    setTarget(target + Math.max(-1, Math.min(1, delta / rowH)), false);
    if (wt) clearTimeout(wt);
    wt = setTimeout(() => setTarget(target, true), 140);
  }, { passive: false });

  wheel.addEventListener('keydown', e => {
    let d = 0;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') d = -1;
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') d = 1;
    if (!d) return;
    e.preventDefault();
    setTarget(Math.round(target) + d, true);
  });

  window.__wheelSync = () => { measure(); layout(); };
  setTarget(0, true);
  layout();
  /* row height is derived from the rendered font, so re-measure after the swap */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); layout(); });
})();

/* ══════════════════════════════════════════════
   PROCESS — scroll-linked timeline
   The rail spans first node centre → last node centre, so the fill completes
   the instant the last step reaches the middle of the screen instead of
   dragging on to the end of the page. Nodes light from the same fraction the
   fill has reached, which keeps the light and the head of the bar welded
   together. The fill is scroll-linked so it is 1:1 with no easing; everything
   that is *not* scroll-linked (the node pop, the ping, the heading shift) is a
   spring in CSS and stays interruptible.
══════════════════════════════════════════════ */
(function () {
  const wrap = document.querySelector('.steps-wrap');
  const line = document.getElementById('stepsLine');
  const steps = Array.from(document.querySelectorAll('.steps .step'));
  if (!wrap || !line || steps.length < 2) return;

  const fill = line.firstElementChild;
  const marks = steps.map(s => s.querySelector('.step-mark'));
  const last = steps.length - 1;

  let span = 1;
  const measure = () => {
    const w = wrap.getBoundingClientRect();
    const a = marks[0].getBoundingClientRect();
    const b = marks[last].getBoundingClientRect();
    span = Math.max((b.top + b.height / 2) - (a.top + a.height / 2), 1);
    line.style.top = (a.top + a.height / 2 - w.top).toFixed(1) + 'px';
    line.style.height = span.toFixed(1) + 'px';
  };

  if (RM) {
    measure();
    addEventListener('resize', measure);
    steps.forEach(s => s.classList.add('on'));
    return;
  }

  let queued = false, dirty = true;
  const paint = () => {
    queued = false;
    if (dirty) { measure(); dirty = false; }
    const a = marks[0].getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.5 - (a.top + a.height / 2)) / span, 0), 1);
    fill.style.setProperty('--p', p.toFixed(4));
    for (let i = 0; i <= last; i++) steps[i].classList.toggle('on', p > 0 && p >= i / last - 0.001);
  };
  const tick = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };

  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', () => { dirty = true; tick(); });
  tick();

  /* the font swap changes step heights, so the rail has to be re-measured */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { dirty = true; tick(); });
})();

/* ── References — poster first, live site on demand ───
   Each tile ships a screenshot of the real site. The live iframe is only
   mounted when the visitor actually points at a tile, because three of the
   four customer sites autoplay a hero video: eagerly mounting all four pulled
   roughly 46 MB before the page had finished its first scroll. Clicking still
   opens the genuine site, so nothing about the promise changes — only when we
   pay for it. */
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

  if (TIER === 0 || !FINE) return;   /* touch and lite devices keep the poster */

  const mount = f => {
    if (f.dataset.on || !f.offsetParent) return;
    f.dataset.on = '1';
    scale();
    const fr = document.createElement('iframe');
    fr.addEventListener('load', () => f.classList.add('live'), { once: true });
    fr.src = f.dataset.src;
    fr.loading = 'lazy';
    fr.setAttribute('scrolling', 'no');
    fr.setAttribute('tabindex', '-1');
    fr.setAttribute('aria-hidden', 'true');
    fr.title = '';
    f.appendChild(fr);
  };

  frames.forEach(f => {
    const card = f.closest('.ref') || f;
    card.addEventListener('pointerenter', () => mount(f), { once: true });
    card.addEventListener('focus', () => mount(f), { once: true });
  });
})();

/* ── Sticky mobile CTA ─────────────────────
   Appears once the hero's own buttons are gone, and stands down over the
   contact section — a floating button covering the form it points at is just
   an obstacle. Driven by two observers rather than a scroll handler so it
   costs nothing while idle. */
(function () {
  const cta = document.getElementById('stickyCta');
  if (!cta) return;
  const hero = document.querySelector('.hero');
  const contact = document.getElementById('kontakt');
  const footer = document.querySelector('.footer');
  if (!hero) return;

  let pastHero = false, atTarget = false;
  const sync = () => {
    const on = pastHero && !atTarget;
    cta.classList.toggle('on', on);
    /* keep it out of the tab order and off screen readers while hidden */
    cta.setAttribute('aria-hidden', on ? 'false' : 'true');
    cta.tabIndex = on ? 0 : -1;
  };

  new IntersectionObserver(es => {
    pastHero = !es[es.length - 1].isIntersecting;
    sync();
  }, { rootMargin: '-40% 0px 0px 0px' }).observe(hero);

  /* An observer callback carries only the entries that *changed*, not every
     element being watched — so `es.some(...)` reported whichever of the two
     happened to be in that batch, and the button stayed up over the form it
     points at. Hold each target's state and combine them. */
  const inView = new Map();
  const target = new IntersectionObserver(es => {
    es.forEach(e => inView.set(e.target, e.isIntersecting));
    atTarget = [...inView.values()].some(Boolean);
    sync();
  }, { rootMargin: '0px 0px -10% 0px' });
  if (contact) target.observe(contact);
  if (footer) target.observe(footer);
})();

/* ── Back to top ──────────────────────────── */
document.getElementById('toTop')?.addEventListener('click', () => scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }));

/* ── Contact form ─────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  const ok = document.getElementById('formSuccess');
  if (!form) return;

  const consent = document.getElementById('fgdpr');
  const fields = [
    { el: document.getElementById('fname'),  ok: v => v.trim().length > 1 },
    { el: document.getElementById('femail'), ok: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
    { el: document.getElementById('fmsg'),   ok: v => v.trim().length > 4 },
    { el: consent, ok: () => consent.checked, box: true }
  ];
  const mark = f => {
    const good = f.ok(f.el.value);
    f.el.closest('.fg').classList.toggle('invalid', !good);
    f.el.setAttribute('aria-invalid', good ? 'false' : 'true');
    return good;
  };
  fields.forEach(f => {
    /* a checkbox always has a value, so the blur-if-filled rule would flag the
       consent box the moment focus passed over it — react to the toggle instead */
    if (f.box) { f.el.addEventListener('change', () => mark(f)); return; }
    f.el.addEventListener('blur', () => { if (f.el.value) mark(f); });
    f.el.addEventListener('input', () => { if (f.el.closest('.fg').classList.contains('invalid')) mark(f); });
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
          Zpráva: document.getElementById('fmsg').value,
          /* sent with the enquiry so the consent leaves a trace */
          Souhlas_GDPR: 'Ano — ' + new Date().toISOString()
        })
      });
    } catch (e) {}
    form.querySelectorAll('input,textarea,select').forEach(el => el.value = '');
    consent.checked = false;   /* clearing .value does not untick a checkbox */
    btn.classList.remove('sending');
    btn.style.display = 'none';
    ok.classList.add('show');
    /* Hand off to a real confirmation page: it gives the visitor a clear end
       to the task and gives the business a URL to count conversions on. The
       inline message stays as the fallback for the split second before the
       navigation lands, and for the case where it is blocked. */
    location.assign('/dekuji/');
  });
})();

/* ── Init ─────────────────────────────────── */
/* the picker's affordance differs by input device — swap the key, not the text,
   so it still follows the language switch */
if (!FINE) {
  const hint = document.querySelector('.wheel-hint');
  if (hint) hint.dataset.i18n = 'svc.hint.touch';
}
applyLang(currentLang);
