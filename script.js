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

    'hero.badge':    'Profesionální tvorba webů',
    'hero.h1':       'Navrhujeme weby.<br><span class="grad-text">Budujeme úspěch.</span>',
    'hero.sub':      'Profesionální webové stránky na míru — od jednoduché vizitky po komplexní rezervační systém. Rychle, spolehlivě a s péčí o každý detail.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip1':    'Projektů',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.chip3':    'Spokojených zákazníků',
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
    'price.heading':  'Balíčky <span class="grad-text">pro každého</span>',
    'price.sub':      'Kompletní řešení na klíč — doména, hosting, SSL i nasazení jsou součástí každého balíčku. Objednáte, my zařídíme zbytek.',
    'price.from':     'od',
    'price.currency': 'Kč',
    'price.popular':  'Nejpopulárnější',
    'price.cta':      'Mám zájem',
    'price.cta.main': 'Začít projekt',
    'price.note':     '* Ceny jsou bez DPH. Každý balíček zahrnuje doménu, hosting, SSL i nasazení — zákazník nemusí řešit nic navíc. Rádi připravíme přesnou nabídku.',
    'price.1.tier':   'Starter',
    'price.1.name':   'Statická stránka',
    'price.1.desc':   'Ideální pro prezentaci firmy, živnostníka nebo produktu.',
    'price.1.price':  '7 990',
    'price.1.f1': 'Prezentační web (1 landing page)',
    'price.1.f2': 'Moderní responzivní design',
    'price.1.f3': 'Optimalizace pro mobilní zařízení',
    'price.1.f4': 'Základní SEO nastavení',
    'price.1.f5': 'Kontaktní formulář',
    'price.1.f6': 'Doména, hosting & SSL v ceně',
    'price.1.f7': '3 měsíce bezplatné podpory',
    'price.2.tier':   'Business',
    'price.2.name':   'Pokročilý web',
    'price.2.desc':   'Pro firmy potřebující více — rezervace, e-shop, správu obsahu.',
    'price.2.price':  '19 990',
    'price.2.f1': 'Neomezený počet stránek',
    'price.2.f2': 'Rezervační systém nebo e-shop',
    'price.2.f3': 'CMS — snadná správa obsahu',
    'price.2.f4': 'Pokročilé SEO + Google Analytics',
    'price.2.f5': 'Doména, hosting, SSL & nasazení v ceně',
    'price.2.f6': 'Vlastní funkcionalita na míru',
    'price.2.f7': '6 měsíců bezplatné podpory',
    'price.3.tier':   'Enterprise',
    'price.3.name':   'Na míru',
    'price.3.desc':   'Komplexní řešení bez omezení — libovolná složitost a rozsah.',
    'price.3.price':  'Na vyžádání',
    'price.3.f1': 'Libovolná složitost projektu',
    'price.3.f2': 'Webová aplikace / vlastní API',
    'price.3.f3': 'Vlastní CMS / admin panel',
    'price.3.f4': 'Integrace externích systémů',
    'price.3.f5': 'Prioritní podpora & SLA',
    'price.3.f6': 'Individuální cenotvorba',
    'price.3.f7': 'Dlouhodobá spolupráce',

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
    'wstat.1': 'Dokončených projektů',
    'wstat.2': 'Dní průměrné dodání',
    'wstat.3': 'Spokojených zákazníků',
    'wstat.4': 'Roky zkušeností',

    'about.tag':     'O nás',
    'about.heading': 'Kdo stojí <span class="grad-text">za Lanthirem</span>',
    'about.role':    'Zakladatel & Web Developer',
    'about.bio':     'Zakladatel společnosti Lanthir a vášnivý tvůrce webových stránek. Specializuji se na moderní, rychlé a funkční weby, které přinášejí zákazníkům skutečné výsledky. Každý projekt beru jako příležitost vytvořit něco výjimečného — od návrhu po spuštění.',
    'about.hl1':     'Projektů',
    'about.hl2':     'Roky praxe',
    'about.hl3':     'Spokojenost',

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
    'form.bundle.opt1':  'Starter — Statická stránka',
    'form.bundle.opt2':  'Business — Pokročilý web',
    'form.bundle.opt3':  'Enterprise — Na míru',
    'form.msg.lbl':      'Zpráva',
    'form.msg.ph':       'Popište váš projekt...',
    'form.send':         'Odeslat poptávku',
    'form.success':      'Odesláno! Ozveme se vám do 24 hodin.',

    'footer.tagline': 'Profesionální tvorba webových stránek na míru.',
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

    'hero.badge':    'Professional Web Development',
    'hero.h1':       'We design websites.<br><span class="grad-text">We build success.</span>',
    'hero.sub':      'Professional custom websites — from a simple business card to a complex booking system. Fast, reliable, with attention to every detail.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip1':    'Projects',
    'hero.chip2':    'Days avg. delivery',
    'hero.chip3':    'Happy clients',
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
    'price.heading':  'Packages <span class="grad-text">for everyone</span>',
    'price.sub':      'Complete turnkey solution — domain, hosting, SSL and deployment are included in every package. You order, we handle the rest.',
    'price.from':     'from',
    'price.currency': 'CZK',
    'price.popular':  'Most Popular',
    'price.cta':      'I\'m Interested',
    'price.cta.main': 'Start Project',
    'price.note':     '* All prices are excluding VAT. Every package includes domain, hosting, SSL & deployment — no technical hassle for you. We\'ll happily prepare a precise quote.',
    'price.1.tier':   'Starter',
    'price.1.name':   'Static Website',
    'price.1.desc':   'Ideal for presenting a company, freelancer or product.',
    'price.1.price':  '7,990',
    'price.1.f1': 'Business website (1 landing page)',
    'price.1.f2': 'Modern responsive design',
    'price.1.f3': 'Mobile optimization',
    'price.1.f4': 'Basic SEO setup',
    'price.1.f5': 'Contact form',
    'price.1.f6': 'Domain, hosting & SSL included',
    'price.1.f7': '3 months free support',
    'price.2.tier':   'Business',
    'price.2.name':   'Advanced Website',
    'price.2.desc':   'For businesses that need more — booking, e-shop, content management.',
    'price.2.price':  '19,990',
    'price.2.f1': 'Unlimited pages',
    'price.2.f2': 'Booking system or e-shop',
    'price.2.f3': 'CMS — easy content management',
    'price.2.f4': 'Advanced SEO + Google Analytics',
    'price.2.f5': 'Domain, hosting, SSL & deployment included',
    'price.2.f6': 'Custom functionality',
    'price.2.f7': '6 months free support',
    'price.3.tier':   'Enterprise',
    'price.3.name':   'Custom',
    'price.3.desc':   'Complex solutions without limits — any complexity and scope.',
    'price.3.price':  'On Request',
    'price.3.f1': 'Any project complexity',
    'price.3.f2': 'Web application / custom API',
    'price.3.f3': 'Custom CMS / admin panel',
    'price.3.f4': 'External systems integration',
    'price.3.f5': 'Priority support & SLA',
    'price.3.f6': 'Individual pricing',
    'price.3.f7': 'Long-term partnership',

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
    'wstat.1': 'Completed projects',
    'wstat.2': 'Days avg. delivery',
    'wstat.3': 'Satisfied clients',
    'wstat.4': 'Years of experience',

    'about.tag':     'About Us',
    'about.heading': 'Who is behind <span class="grad-text">Lanthir</span>',
    'about.role':    'Founder & Web Developer',
    'about.bio':     'Founder of Lanthir and passionate web developer. I specialize in modern, fast and functional websites that bring real results to clients. I approach every project as an opportunity to create something exceptional — from design to launch.',
    'about.hl1':     'Projects',
    'about.hl2':     'Years experience',
    'about.hl3':     'Satisfaction',

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
    'form.bundle.opt1':  'Starter — Static Website',
    'form.bundle.opt2':  'Business — Advanced Website',
    'form.bundle.opt3':  'Enterprise — Custom',
    'form.msg.lbl':      'Message',
    'form.msg.ph':       'Describe your project...',
    'form.send':         'Send Enquiry',
    'form.success':      'Sent! We\'ll get back to you within 24 hours.',

    'footer.tagline': 'Professional custom web development.',
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

    'hero.badge':    'Profesjonalne tworzenie stron',
    'hero.h1':       'Projektujemy strony.<br><span class="grad-text">Budujemy sukces.</span>',
    'hero.sub':      'Profesjonalne strony internetowe na zamówienie — od prostej wizytówki po złożony system rezerwacji. Szybko, niezawodnie i z dbałością o każdy detal.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip1':    'Projektów',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.chip3':    'Zadowolonych klientów',
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
    'price.heading':  'Pakiety <span class="grad-text">dla każdego</span>',
    'price.sub':      'Kompletne rozwiązanie pod klucz — domena, hosting, SSL i wdrożenie są wliczone w każdy pakiet. Zamawiasz, my zajmujemy się resztą.',
    'price.from':     'od',
    'price.currency': 'CZK',
    'price.popular':  'Najpopularniejszy',
    'price.cta':      'Jestem zainteresowany',
    'price.cta.main': 'Rozpocznij projekt',
    'price.note':     '* Wszystkie ceny są bez VAT. Każdy pakiet zawiera domenę, hosting, SSL i wdrożenie — klient nie musi nic konfigurować. Chętnie przygotujemy dokładną wycenę.',
    'price.1.tier':   'Starter',
    'price.1.name':   'Strona statyczna',
    'price.1.desc':   'Idealna do prezentacji firmy, freelancera lub produktu.',
    'price.1.price':  '7 990',
    'price.1.f1': 'Strona firmowa (1 landing page)',
    'price.1.f2': 'Nowoczesny responsywny design',
    'price.1.f3': 'Optymalizacja mobilna',
    'price.1.f4': 'Podstawowe ustawienia SEO',
    'price.1.f5': 'Formularz kontaktowy',
    'price.1.f6': 'Domena, hosting & SSL w cenie',
    'price.1.f7': '3 miesiące bezpłatnego wsparcia',
    'price.2.tier':   'Business',
    'price.2.name':   'Zaawansowana strona',
    'price.2.desc':   'Dla firm potrzebujących więcej — rezerwacje, sklep, zarządzanie treścią.',
    'price.2.price':  '19 990',
    'price.2.f1': 'Nieograniczona liczba stron',
    'price.2.f2': 'System rezerwacji lub sklep',
    'price.2.f3': 'CMS — łatwe zarządzanie treścią',
    'price.2.f4': 'Zaawansowane SEO + Google Analytics',
    'price.2.f5': 'Domena, hosting, SSL & wdrożenie w cenie',
    'price.2.f6': 'Własna funkcjonalność na miarę',
    'price.2.f7': '6 miesięcy bezpłatnego wsparcia',
    'price.3.tier':   'Enterprise',
    'price.3.name':   'Na zamówienie',
    'price.3.desc':   'Kompleksowe rozwiązania bez ograniczeń — dowolna złożoność i zakres.',
    'price.3.price':  'Na zapytanie',
    'price.3.f1': 'Dowolna złożoność projektu',
    'price.3.f2': 'Aplikacja webowa / własne API',
    'price.3.f3': 'Własny CMS / panel admina',
    'price.3.f4': 'Integracja systemów zewnętrznych',
    'price.3.f5': 'Priorytetowe wsparcie & SLA',
    'price.3.f6': 'Indywidualna wycena',
    'price.3.f7': 'Długoterminowa współpraca',

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
    'wstat.1': 'Ukończonych projektów',
    'wstat.2': 'Dni średnia realizacja',
    'wstat.3': 'Zadowolonych klientów',
    'wstat.4': 'Lata doświadczenia',

    'about.tag':     'O nas',
    'about.heading': 'Kto stoi <span class="grad-text">za Lanthirem</span>',
    'about.role':    'Założyciel & Web Developer',
    'about.bio':     'Założyciel Lanthira i pasjonat tworzenia stron internetowych. Specjalizuję się w nowoczesnych, szybkich i funkcjonalnych stronach, które przynoszą klientom prawdziwe wyniki. Każdy projekt traktuję jako okazję do stworzenia czegoś wyjątkowego — od projektu po uruchomienie.',
    'about.hl1':     'Projektów',
    'about.hl2':     'Lata praktyki',
    'about.hl3':     'Satysfakcja',

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
    'form.bundle.opt1':  'Starter — Strona statyczna',
    'form.bundle.opt2':  'Business — Zaawansowana strona',
    'form.bundle.opt3':  'Enterprise — Na zamówienie',
    'form.msg.lbl':      'Wiadomość',
    'form.msg.ph':       'Opisz swój projekt...',
    'form.send':         'Wyślij zapytanie',
    'form.success':      'Wysłano! Odezwiemy się w ciągu 24 godzin.',

    'footer.tagline': 'Profesjonalne tworzenie stron internetowych na zamówienie.',
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
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = '…';
    setTimeout(() => {
      form.querySelectorAll('input,textarea,select').forEach(el => el.value = '');
      btn.style.display = 'none';
      suc.classList.add('show');
    }, 1200);
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
