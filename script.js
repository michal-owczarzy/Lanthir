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
    'nav.faq': 'FAQ',
    'faq.tag': 'Časté dotazy',
    'faq.heading': 'Na co se ptáte <br><em>nejčastěji</em>',
    'faq.1.q': 'Můžu si web ponechat v samosprávě?',
    'faq.1.a': 'Ano. K samosprávě je ovšem potřeba mít účet na GitHubu a také znalost Gitu a editace kódu. Celou námi naprogramovanou stránku vám rádi předáme.',
    'faq.2.q': 'Co když takové znalosti neovládám?',
    'faq.2.a': 'Pokud takové schopnosti nemáte, máme pro naše zákazníky vytvořenou interní aplikaci, ve které si zákazník může upravovat obrázky a texty bez jakékoliv interakce se zdrojovým kódem. Tato aplikace je hrazena formou předplatného.',
    'faq.3.q': 'Jak dlouho trvá webovou stránku nasadit?',
    'faq.3.a': 'Běžný web dodáme do 14 dní od schválení návrhu. Nejvíc záleží na tom, jak rychle se domluvíme na textech a fotkách. Samotné technické nasazení hotového webu zvládneme za dva dny.',
    'faq.4.q': 'Co když mi webová stránka přestane fungovat? Pomůžete mi?',
    'faq.4.a': 'Přesně pro tento případ nabízíme podporu ve formě předplatného. Stránky ovšem nepadají ze dne na den, ale vždy tomu předchází déle trvající problém. Proto nabízíme i monitoring webových stránek. Náš monitoring dokáže výpadek predikovat tak, že jsme schopni mu zamezit. Pokud jej predikovat nedokážeme, umíme velmi efektivně zkrátit dobu prostoje, protože víme, kde chyba nastala.',
    'faq.5.q': 'Jsou vaše ceny pevně dané?',
    'faq.5.a': 'Ano, pro rozsah vypsaný u každého balíčku. Ceny v ceníku jsou výchozí. Pokud potřebujete víc, třeba další podstránky, napojení na jiné systémy nebo texty, připravíme vám předem nabídku s konečnou cenou, takže víte, kolik zaplatíte, ještě než začneme.',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Nezávazná poptávka',

    'hero.l1': 'My jsme <em>Lanthir</em>',
    'hero.l2': 'Tvorba webových stránek na míru a jejich správa',
    'hero.sub': 'Navrhujeme webové stránky na míru a staráme se o jejich provoz. Webová aplikace, e-shop nebo rezervační systém — s SSL, hostingem, SEO optimalizací a monitoringem dostupnosti.',
    'hero.btn1':     'Zobrazit ceník',
    'hero.btn2':     'Nezávazná konzultace',
    'hero.chip2':    'Dní průměrná dodávka',
    'hero.building': 'Váš web se připravuje...',

    'svc.tag': 'Co děláme',
    'svc.heading': 'Naše <br><em>produkty</em>',
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
    'svc.6.desc':  'Současný web převedeme do moderní a rychlé podoby. Zachováme obsah i adresy stránek, aby web nepřišel o pozice ve vyhledávání.',

    'price.tag':      'Ceník',
    'price.heading': 'Ceny za <em>naše služby</em>',
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
    'price.note':     '* Nejsme plátci DPH — uvedené ceny jsou konečné. Rádi připravíme přesnou nabídku na míru.',
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
    'proc.heading': 'Náš postup <br><em>se zákazníkem</em>',
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
    'about.heading': 'Kdo stojí <br><em>za Lanthirem</em>',
    'about.1.role':  'Zakladatel &amp; CTO',
    'about.1.bio':   'Zakladatel Lanthiru se specializací na monitoring a DevOps. Navrhuje a vyvíjí technická řešení, která fungují spolehlivě a přinášejí klientům reálné výsledky.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Zodpovídá za rozvoj obchodních vztahů a pomáhá klientům najít ideální řešení pro jejich projekt. Váš první kontakt, když zvažujete spolupráci s Lanthirem.',

    'cta.h2': 'Máte projekt? <span class="grad-text">Pojďme na to.</span>',
    'cta.p':  'Bezplatná konzultace bez závazků. Řekněte nám o svém projektu a my se ozveme do 24 hodin.',
    'cta.btn':'Nezávazná poptávka',

    'contact.tag':       'Kontakt',
    'contact.heading': 'Kontaktujte <em>nás</em>',
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
    'footer.privacy': 'Zásady ochrany osobních údajů',
    'footer.consumer': 'Informace pro spotřebitele',
    'footer.cookies': 'Nastavení cookies',
    'footer.social':  'Sledujte nás',
    'work.1.alt':     'Ukázka webu pro restauraci: úvodní stránka Restaurace MAX',
    'work.2.alt':     'Ukázka webu pro autoservis: úvodní stránka Autoservis Motyka',
    'work.3.alt':     'Ukázka webu pro masáže a wellness: úvodní stránka Masáže Bylinka',
    'work.5.alt':     'Ukázka webu pro kosmetické studio: úvodní stránka Studio Victory',
    'work.7.alt':     'Úvodní stránka webu pro Instalatér Vobořil',
    'about.1.alt':    'Ing. Michal Owczarzy, zakladatel a CTO Lanthiru',
    'about.2.alt':    'Mariusz Chmiel, Head of Sales v Lanthiru',
    'sticky.cta':     'Nezávazná poptávka',
    'footer.col1.h':  'Služby',
    'footer.webdev':  'Tvorba webu',
    'price.more':     'Jak tvorba webu probíhá a co je v ceně →',
    'price.more2':    'Kompletní ceník a srovnání tarifů →',
    'footer.care':    'Správa webu',
    'footer.monitoring': 'Monitoring webu',
    'footer.col2.h':  'Společnost',
    'form.err.name':  'Vyplňte prosím jméno.',
    'form.err.email': 'Zadejte platný e-mail.',
    'form.err.msg':   'Napište prosím pár vět o projektu.',
    'form.gdpr':      'Souhlasím se zpracováním osobních údajů za účelem vyřízení této poptávky. Údaje nepředáváme třetím stranám a na požádání je smažeme.',
    'form.err.gdpr':  'Bez souhlasu bohužel nemůžeme poptávku zpracovat.',
    'footer.copy':    '© 2026 Lanthir. Všechna práva vyhrazena.',

    'nav.work': 'Reference',
    'nav.obs': "Observabilita",
    'form.bundle.grp3': "── Další služby ──",
    'form.bundle.opt7': "Observabilita na míru",
    'more.tag': "Další služby",
    'more.h': "Observabilita",
    'more.sub': "Hlavně tvoříme weby. Vedle nich nabízíme samostatné služby, které si můžete objednat i bez webu.",
    'obs.name': "Máte přehled, co se děje ve vaší síti?",
    'obs.sub': "Observabilita jako služba: data ze všech serverů, zařízení a aplikací svedeme na jedno místo, postavíme nad nimi přehledné dashboardy a hlídáme je za vás. Nekupujete další software, který byste museli sami nastavovat a sledovat.",
    'obs.p1h': "Data ze všech zařízení na jednom místě",
    'obs.p1': "Servery, síť, počítače a notebooky, cloud, aplikace, kamery, výrobní i IoT zařízení. Napojíme všechno, co u vás běží, bez ohledu na výrobce.",
    'obs.p2h': "Přehled pro techniky i vedení",
    'obs.p2': "Technik vidí detail každé služby, vedení stav celé firmy na jeden pohled. Žádné hledání v pěti různých nástrojích.",
    'obs.p3h': "Hlídáme to za vás",
    'obs.p3': "Když se něco blíží hranici, víme o tom dřív než vaši zákazníci a ozveme se. Reakční dobu si dáme do smlouvy.",
    'obs.cta': "Domluvit konzultaci",
    'obs.note': "Cenu připravíme podle rozsahu po konzultaci, která je zdarma.",
    "obs.more": "Víc o observabilitě",
    "op.h1": "Observabilita<br>jako služba",
    "op.lead": "Víte o problému dřív než vaši zákazníci. Data ze všech serverů, sítě a zařízení svedeme na jedno místo, postavíme nad nimi přehledné dashboardy a hlídáme je za vás.",
    "op.cta": "Domluvit konzultaci zdarma",
    "op.cta2": "Kolik stojí výpadek",
    "op.val.h": "Co vám to přinese",
    "op.val.sub": "Monitoring není cíl. Cílem je, aby firma jela, lidé mohli pracovat a zákazníci nenarazili na zavřené dveře.",
    "op.val.1h": "Méně výpadků",
    "op.val.1": "Většina výpadků se ohlásí předem: plnící se disk, přehřátý server, linka na hraně kapacity. Uvidíme to včas a vyřešíme, než se práce zastaví.",
    "op.val.2h": "Rychlejší řešení",
    "op.val.2": "Když se něco stane, nehledáme hodiny, kde je chyba. Víme, které zařízení zlobí, od kdy a co se změnilo.",
    "op.val.3h": "Bez vlastního specialisty",
    "op.val.3": "Nemusíte nabírat ani zaškolovat člověka, který bude monitoring nastavovat a sledovat. Platíte za výsledek, ne za další úvazek.",
    "op.val.4h": "Rozhodnutí podle dat",
    "op.val.4": "Vedení vidí, jak jsou systémy vytížené a kam to směřuje. Nový server nebo rychlejší linku koupíte, až je opravdu potřeba, ne pro jistotu.",
    "op.calc.h": "Kolik vás stojí<br>hodina výpadku?",
    "op.calc.sub": "Spočítejte si to sami. Nastavte, kolik lidí nemůže pracovat a o kolik tržeb přicházíte. Nic se nikam neodesílá.",
    "op.calc.people": "Kolik lidí nemůže pracovat",
    "op.calc.rate": "Kolik firmu stojí hodina jednoho člověka",
    "op.calc.sales": "Tržby za hodinu, které při výpadku nepřijdou",
    "op.calc.res": "Jedna hodina výpadku vás stojí zhruba",
    "op.calc.day": "Celý pracovní den výpadku:",
    "op.calc.note": "Observabilita je o tom, aby tahle čísla zůstala jen na papíře: problém zachytíme dřív, než práci zastaví.",
    "op.src.h": "Všechna zařízení<br>na jednom místě",
    "op.src.sub": "Nezáleží na výrobci ani na tom, jestli zařízení stojí ve skříni ve sklepě, nebo běží v cloudu. Napojíme ho tak, jak to umí.",
    "op.src.1h": "Servery",
    "op.src.1": "Zátěž, paměť, disky, běžící služby a zálohy. Windows i Linux, fyzické i virtuální.",
    "op.src.2h": "Síť",
    "op.src.2": "Routery, switche, Wi-Fi a firewally. Vytížení linek, výpadky a neobvyklý provoz.",
    "op.src.3h": "Cloud a kontejnery",
    "op.src.3": "Služby v Azure, AWS nebo Google Cloud, Kubernetes a Docker. Výkon, dostupnost i chyby.",
    "op.src.4h": "Aplikace a weby",
    "op.src.4": "Dostupnost, rychlost odezvy a chyby, ze kterých poznáme, co zákazníkům nefunguje.",
    "op.src.5h": "Kancelářská technika",
    "op.src.5": "Tiskárny, kamery, záložní zdroje a další zařízení, která nikdo nehlídá, dokud nepřestanou fungovat.",
    "op.src.6h": "Výroba a IoT",
    "op.src.6": "Stroje, čidla a řídicí systémy. Teploty, tlaky, stavy linek a odstávky.",
    "op.src.7h": "Počítače a notebooky",
    "op.src.7": "Uživatelské stanice vašich lidí: místo na disku, aktualizace, výkon i stav baterie. Problém uvidíme dřív, než ho někdo nahlásí.",
    "op.src.8h": "Jak je napojíme",
    "op.src.how": "Přes agenty, SNMP, API, OpenTelemetry a logy. Stávající zařízení měnit nemusíte.",
    "op.svc.h": "Neprodáváme software.<br>Dodáváme službu.",
    "op.svc.sub": "Monitorovací nástroj si může koupit každý. Jenže ho pak někdo musí nastavit, udržovat a hlavně sledovat. To děláme my.",
    "op.svc.a.h": "Když si koupíte nástroj",
    "op.svc.a.1": "Instalaci a nastavení řešíte sami.",
    "op.svc.a.2": "Upozornění chodí do schránky, kterou nikdo nečte.",
    "op.svc.a.3": "Když se něco rozbije v noci, ráno se to dozvíte od zákazníků.",
    "op.svc.a.4": "Licence, aktualizace a údržba jsou práce navíc.",
    "op.svc.b.h": "Když máte nás",
    "op.svc.b.1": "Všechno napojíme a nastavíme za vás.",
    "op.svc.b.2": "Upozornění vyhodnocujeme my a ozveme se, když je potřeba jednat.",
    "op.svc.b.3": "Reakční dobu si dáme do smlouvy.",
    "op.svc.b.4": "Jednou za měsíc dostanete přehled, co se dělo a co doporučujeme.",
    "op.how.h": "Jak to probíhá",
    "op.how.1h": "Konzultace zdarma",
    "op.how.1": "Projdeme, co u vás běží a co vás trápí. Řekneme, co má smysl hlídat a co ne.",
    "op.how.2h": "Napojení",
    "op.how.2": "Napojíme zařízení a služby, které jsme spolu vybrali, a ověříme, že data chodí správně.",
    "op.how.3h": "Dashboardy a upozornění",
    "op.how.3": "Postavíme přehledy pro techniky i pro vedení a nastavíme, kdy a komu se má ozvat upozornění.",
    "op.how.4h": "Hlídání",
    "op.how.4": "Od té chvíle to hlídáme my. Když se něco blíží hranici, ozveme se dřív, než to poznají vaši zákazníci.",
    "op.faq.h": "Časté otázky",
    "op.q1": "Musíme kvůli tomu měnit, co už máme?",
    "op.a1": "Ne. Napojíme se na to, co u vás už běží. Pokud nějaký monitoring máte, navážeme na něj a doplníme ho.",
    "op.q2": "Co když máme zařízení od různých výrobců?",
    "op.a2": "To je běžné. Většina zařízení umí posílat data standardní cestou (SNMP, API, logy) a tam, kde to nejde, nasadíme agenta.",
    "op.q3": "Kolik to stojí?",
    "op.a3": "Záleží na tom, kolik zařízení a služeb hlídáme a jak rychlou reakci potřebujete. Cenu připravíme po konzultaci, která je zdarma.",
    "op.q4": "Kdo uvidí naše data?",
    "op.a4": "Vy a my. Přístupy k dashboardům nastavíme podle toho, kdo ve firmě co potřebuje vidět.",
    "op.end.h": "Chcete vidět,<br>co se u vás děje?",
    "op.end.sub": "Konzultace je zdarma a nezávazná. Ozvěte se a domluvíme se, co má smysl hlídat.",
    'obs.db.h': "Takhle může vypadat váš dashboard",
    'obs.db.sub': "Data v ukázce jsou smyšlená. Váš dashboard navrhneme podle toho, co u vás skutečně běží. Najeďte nebo klepněte na kterýkoliv uzel v mapě.",
    'obs.db.env': "Produkce · 13 služeb",
    'obs.db.live': "Živě",
    'obs.db.sample': "Ukázková data",
    'obs.db.map': "Mapa služeb",
    'obs.db.k1': "Dostupnost · 30 dní",
    'obs.db.k2': "Latence p95",
    'obs.db.k3': "Chybovost",
    'obs.db.k4': "Provoz",
    'obs.db.chart': "Provoz v reálném čase · Gb/s",
    'obs.db.logs': "Živé logy",
    'obs.db.heat': "Latence podle služeb · posledních 48 minut",
    'obs.db.slo': "Spolehlivost (SLO 99,9 %)",
    'obs.db.budget': "Zbývá 71 % rozpočtu chyb na tento měsíc",
    'obs.db.alert': "Disk /data se zaplní zhruba za 6 dní. Navrhujeme rozšířit svazek do pátku.",
    'fact.1.unit':  'dní',
    'fact.1.label': 'průměrné dodání webu',
    'fact.2.label': 'web na míru už od',
    'fact.3.unit':  'min',
    'fact.3.label': 'interval monitoringu dostupnosti',
    'fact.4.unit':  'h',
    'fact.4.label': 'odpovídáme na poptávku do',

    'work.tag': 'Reference',
    'work.heading': 'Realizace <em>a návrhy</em>',
    'work.sub': 'Štítek „Ostrý provoz“ mají weby, které už běží u klientů. „Návrh“ jsou ukázky, které jsme připravili pro místní firmy. Klikněte a projděte si je jako skutečný web.',
    'work.open': 'Otevřít živý web',
    'work.all':     'Zobrazit všechny ukázky',
    'work.1.ind':   'Restaurace',
    'work.7.ind':   'Instalatérství &amp; koupelny',
    'work.live':    'Ostrý provoz',
    'work.concept': 'Návrh',
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
    'nav.faq': 'FAQ',
    'faq.tag': 'Frequently asked',
    'faq.heading': 'What people ask <br><em>most often</em>',
    'faq.1.q': 'Can I maintain the website myself?',
    'faq.1.a': 'Yes. Self-maintenance does require a GitHub account and a working knowledge of Git and editing code. We are happy to hand over the entire site we built for you.',
    'faq.2.q': 'What if I do not have those skills?',
    'faq.2.a': 'If you do not, we have built an in-house application for our clients where you can edit images and text without touching the source code at all. That application is billed as a subscription.',
    'faq.3.q': 'How long does it take to launch a website?',
    'faq.3.a': 'A typical website is delivered within 14 days of approving the design. The biggest factor is how quickly we settle the texts and photos. The technical launch of a finished site takes us two days.',
    'faq.4.q': 'What if my website stops working? Will you help?',
    'faq.4.a': 'That is exactly what our subscription support is for. Websites rarely fail overnight, there is almost always a longer-running problem first. That is why we also offer website monitoring. Our monitoring can predict an outage in time for us to prevent it. Where we cannot predict it, we can cut the downtime sharply, because we already know where the fault is.',
    'faq.5.q': 'Are your prices fixed?',
    'faq.5.a': 'Yes, for the scope listed in each package. The prices in the price list are starting prices. If you need more, such as extra subpages, integrations with other systems or copywriting, we prepare a quote with the final price up front, so you know what you will pay before we start.',
    'nav.contact':  'Contact',
    'nav.cta':      'Get a Quote',

    'hero.l1': 'We are <em>Lanthir</em>',
    'hero.l2': 'Custom website design and ongoing care',
    'hero.sub': 'We design custom websites and keep them running. A web application, e-shop or booking system — with SSL, hosting, SEO optimisation and uptime monitoring included.',
    'hero.btn1':     'View Pricing',
    'hero.btn2':     'Free Consultation',
    'hero.chip2':    'Days avg. delivery',
    'hero.building': 'Your website is being prepared...',

    'svc.tag': 'What we do',
    'svc.heading': 'Our <br><em>products</em>',
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
    'svc.6.desc':  'We rebuild your current website into a fast, modern one and keep its content and page addresses, so it does not lose its search rankings.',

    'price.tag':      'Pricing',
    'price.heading': 'Prices for <em>our services</em>',
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
    'price.note':     '* We are not VAT registered, so the prices shown are final. We\'ll happily prepare a precise quote.',
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
    'proc.heading': 'How we work <br><em>with you</em>',
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
    'about.heading': 'Who is behind <br><em>Lanthir</em>',
    'about.1.role':  'Founder &amp; CTO',
    'about.1.bio':   'Founder of Lanthir, specialized in monitoring and DevOps. Designs and develops technical solutions that run reliably and deliver real results for clients.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Responsible for business development and helping clients find the ideal solution for their project. Your first point of contact when considering working with Lanthir.',

    'cta.h2': 'Have a project? <span class="grad-text">Let\'s go.</span>',
    'cta.p':  'Free consultation with no commitment. Tell us about your project and we\'ll get back to you within 24 hours.',
    'cta.btn':'Get a Free Quote',

    'contact.tag':       'Contact',
    'contact.heading': 'Contact <em>us</em>',
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
    'footer.privacy': 'Privacy policy',
    'footer.consumer': 'Consumer information',
    'footer.cookies': 'Cookie settings',
    'footer.social':  'Follow us',
    'work.1.alt':     'Sample restaurant website: Restaurace MAX home page',
    'work.2.alt':     'Sample car service website: Autoservis Motyka home page',
    'work.3.alt':     'Sample massage and wellness website: Masáže Bylinka home page',
    'work.5.alt':     'Sample beauty studio website: Studio Victory home page',
    'work.7.alt':     'Home page of the website we built for Instalatér Vobořil',
    'about.1.alt':    'Ing. Michal Owczarzy, founder and CTO of Lanthir',
    'about.2.alt':    'Mariusz Chmiel, Head of Sales at Lanthir',
    'sticky.cta':     'Get a free quote',
    'footer.col1.h':  'Services',
    'footer.webdev':  'Website development',
    'price.more':     'How a website build works and what is included →',
    'price.more2':    'Full price list and plan comparison →',
    'footer.care':    'Website care',
    'footer.monitoring': 'Website monitoring',
    'footer.col2.h':  'Company',
    'form.err.name':  'Please enter your name.',
    'form.err.email': 'Enter a valid email address.',
    'form.err.msg':   'Tell us a little about the project.',
    'form.gdpr':      'I agree to my personal data being processed in order to handle this enquiry. We do not pass it to third parties and will delete it on request.',
    'form.err.gdpr':  'We cannot process the enquiry without your consent.',
    'footer.copy':    '© 2026 Lanthir. All rights reserved.',

    'nav.work': 'Work',
    'nav.obs': "Observability",
    'form.bundle.grp3': "── Other services ──",
    'form.bundle.opt7': "Custom observability",
    'more.tag': "Other services",
    'more.h': "Observability",
    'more.sub': "Websites are our main work. Alongside them we offer separate services you can order without a website.",
    'obs.name': "Do you know what is happening on your network?",
    'obs.sub': "Observability as a service: we bring the data from all your servers, devices and applications into one place, build clear dashboards on top of it and keep watch for you. You are not buying another piece of software to set up and look after yourself.",
    'obs.p1h': "Every device in one place",
    'obs.p1': "Servers, network, computers and laptops, cloud, applications, cameras, production and IoT devices. We connect whatever you run, whoever made it.",
    'obs.p2h': "A view for engineers and for management",
    'obs.p2': "Engineers see the detail of every service, management sees the whole company at a glance. No more digging through five different tools.",
    'obs.p3h': "We keep watch for you",
    'obs.p3': "When something nears its limit, we know before your customers do and we get in touch. Response times go into the contract.",
    'obs.cta': "Book a consultation",
    'obs.note': "We price it by scope after a free consultation.",
    "obs.more": "More about observability",
    "op.h1": "Observability<br>as a service",
    "op.lead": "Know about a problem before your customers do. We bring the data from all your servers, network and devices into one place, build clear dashboards on top of it and keep watch for you.",
    "op.cta": "Book a free consultation",
    "op.cta2": "What downtime costs",
    "op.val.h": "What you get",
    "op.val.sub": "Monitoring is not the goal. The goal is a business that keeps running, people who can work and customers who never find the door shut.",
    "op.val.1h": "Fewer outages",
    "op.val.1": "Most outages announce themselves: a filling disk, an overheating server, a line at the edge of its capacity. We see it in time and fix it before work stops.",
    "op.val.2h": "Faster fixes",
    "op.val.2": "When something happens, nobody spends hours looking for the fault. We know which device is acting up, since when and what changed.",
    "op.val.3h": "No specialist to hire",
    "op.val.3": "You don't have to hire or train someone to set up and watch the monitoring. You pay for the result, not for another job position.",
    "op.val.4h": "Decisions based on data",
    "op.val.4": "Management sees how loaded the systems are and where it is heading. You buy a new server or a faster line when it is really needed, not just in case.",
    "op.calc.h": "What does an hour<br>of downtime cost you?",
    "op.calc.sub": "Work it out yourself. Set how many people cannot work and how much revenue you lose. Nothing is sent anywhere.",
    "op.calc.people": "People who cannot work",
    "op.calc.rate": "What an hour of one person costs the company",
    "op.calc.sales": "Revenue per hour that does not come in",
    "op.calc.res": "One hour of downtime costs you roughly",
    "op.calc.day": "A full working day of downtime:",
    "op.calc.note": "Observability is about keeping these numbers on paper: we catch the problem before it stops work.",
    "op.src.h": "Every device<br>in one place",
    "op.src.sub": "It doesn't matter who made it or whether it sits in a cupboard in the basement or runs in the cloud. We connect it the way it can be connected.",
    "op.src.1h": "Servers",
    "op.src.1": "Load, memory, disks, running services and backups. Windows and Linux, physical and virtual.",
    "op.src.2h": "Network",
    "op.src.2": "Routers, switches, Wi-Fi and firewalls. Line usage, outages and unusual traffic.",
    "op.src.3h": "Cloud and containers",
    "op.src.3": "Services in Azure, AWS or Google Cloud, Kubernetes and Docker. Performance, availability and errors.",
    "op.src.4h": "Applications and websites",
    "op.src.4": "Availability, response times and the errors that tell us what is not working for your customers.",
    "op.src.5h": "Office equipment",
    "op.src.5": "Printers, cameras, UPS units and other devices nobody watches until they stop working.",
    "op.src.6h": "Production and IoT",
    "op.src.6": "Machines, sensors and control systems. Temperatures, pressures, line states and downtime.",
    "op.src.7h": "Computers and laptops",
    "op.src.7": "Your people's workstations: disk space, updates, performance and battery health. We see a problem before anyone reports it.",
    "op.src.8h": "How we connect them",
    "op.src.how": "Through agents, SNMP, APIs, OpenTelemetry and logs. You don't have to replace what you already have.",
    "op.svc.h": "We don't sell software.<br>We deliver a service.",
    "op.svc.sub": "Anyone can buy a monitoring tool. But then someone has to set it up, maintain it and above all watch it. That is what we do.",
    "op.svc.a.h": "When you buy a tool",
    "op.svc.a.1": "You install and configure it yourself.",
    "op.svc.a.2": "Alerts go to an inbox nobody reads.",
    "op.svc.a.3": "If something breaks at night, you hear about it from customers in the morning.",
    "op.svc.a.4": "Licences, updates and maintenance are extra work.",
    "op.svc.b.h": "When you have us",
    "op.svc.b.1": "We connect and set up everything for you.",
    "op.svc.b.2": "We assess the alerts and get in touch when action is needed.",
    "op.svc.b.3": "Response times go into the contract.",
    "op.svc.b.4": "Once a month you get an overview of what happened and what we recommend.",
    "op.how.h": "How it works",
    "op.how.1h": "Free consultation",
    "op.how.1": "We go through what you run and what bothers you. We tell you what is worth watching and what is not.",
    "op.how.2h": "Connection",
    "op.how.2": "We connect the devices and services we chose together and check that the data arrives correctly.",
    "op.how.3h": "Dashboards and alerts",
    "op.how.3": "We build views for engineers and for management and set when and to whom an alert should go.",
    "op.how.4h": "Watching",
    "op.how.4": "From then on, we keep watch. When something nears its limit, we get in touch before your customers notice.",
    "op.faq.h": "Frequently asked questions",
    "op.q1": "Do we have to change what we already have?",
    "op.a1": "No. We connect to what you already run. If you have some monitoring, we build on it and fill the gaps.",
    "op.q2": "What if our devices come from different vendors?",
    "op.a2": "That is normal. Most devices can send data in a standard way (SNMP, APIs, logs), and where they can't, we deploy an agent.",
    "op.q3": "How much does it cost?",
    "op.a3": "It depends on how many devices and services we watch and how fast a response you need. We prepare a price after a free consultation.",
    "op.q4": "Who will see our data?",
    "op.a4": "You and us. We set up dashboard access according to who in your company needs to see what.",
    "op.end.h": "Want to see what is<br>going on in your network?",
    "op.end.sub": "The consultation is free and without obligation. Get in touch and we will agree on what is worth watching.",
    'obs.db.h': "This is what your dashboard could look like",
    'obs.db.sub': "The data in this sample is made up. We design your dashboard around what you actually run. Hover over or tap any node on the map.",
    'obs.db.env': "Production · 13 services",
    'obs.db.live': "Live",
    'obs.db.sample': "Sample data",
    'obs.db.map': "Service map",
    'obs.db.k1': "Uptime · 30 days",
    'obs.db.k2': "Latency p95",
    'obs.db.k3': "Error rate",
    'obs.db.k4': "Traffic",
    'obs.db.chart': "Live traffic · Gb/s",
    'obs.db.logs': "Live logs",
    'obs.db.heat': "Latency by service · last 48 minutes",
    'obs.db.slo': "Reliability (SLO 99.9 %)",
    'obs.db.budget': "71 % of this month’s error budget left",
    'obs.db.alert': "Disk /data will be full in about 6 days. We suggest growing the volume by Friday.",
    'fact.1.unit':  'days',
    'fact.1.label': 'average website delivery',
    'fact.2.label': 'custom website from',
    'fact.3.unit':  'min',
    'fact.3.label': 'uptime monitoring interval',
    'fact.4.unit':  'h',
    'fact.4.label': 'we reply to enquiries within',

    'work.tag': 'Selected work',
    'work.heading': 'Work <em>and concepts</em>',
    'work.sub': '“Live client” sites are already running for our clients. “Concept” tiles are samples we designed for local businesses. Click through and browse them as real sites.',
    'work.open': 'Open the live site',
    'work.all':     'View all work',
    'work.1.ind':   'Restaurant',
    'work.7.ind':   'Plumbing &amp; bathrooms',
    'work.live':    'Live client',
    'work.concept': 'Concept',
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
    'nav.faq': 'FAQ',
    'faq.tag': 'Częste pytania',
    'faq.heading': 'O co pytacie <br><em>najczęściej</em>',
    'faq.1.q': 'Czy mogę utrzymywać stronę samodzielnie?',
    'faq.1.a': 'Tak. Do samodzielnego utrzymania potrzebne jest jednak konto na GitHubie oraz znajomość Gita i edycji kodu. Całą stworzoną przez nas stronę chętnie przekażemy.',
    'faq.2.q': 'A jeśli nie mam takich umiejętności?',
    'faq.2.a': 'Jeśli ich nie masz, przygotowaliśmy dla naszych klientów wewnętrzną aplikację, w której można edytować zdjęcia i teksty bez żadnego kontaktu z kodem źródłowym. Aplikacja rozliczana jest w formie abonamentu.',
    'faq.3.q': 'Jak długo trwa wdrożenie strony?',
    'faq.3.a': 'Typową stronę dostarczamy w ciągu 14 dni od zatwierdzenia projektu. Najwięcej zależy od tego, jak szybko uzgodnimy teksty i zdjęcia. Samo techniczne wdrożenie gotowej strony zajmuje nam dwa dni.',
    'faq.4.q': 'Co jeśli moja strona przestanie działać? Pomożecie?',
    'faq.4.a': 'Dokładnie na ten przypadek oferujemy wsparcie w formie abonamentu. Strony nie padają jednak z dnia na dzień, ale zawsze poprzedza to dłużej trwający problem. Dlatego oferujemy również monitoring stron. Nasz monitoring potrafi przewidzieć awarię na tyle wcześnie, że jesteśmy w stanie jej zapobiec. Jeśli nie uda się jej przewidzieć, potrafimy bardzo skutecznie skrócić czas przestoju, bo wiemy, gdzie wystąpił błąd.',
    'faq.5.q': 'Czy wasze ceny są sztywne?',
    'faq.5.a': 'Tak, dla zakresu opisanego w każdym pakiecie. Ceny w cenniku są cenami początkowymi. Jeśli potrzebujesz więcej, na przykład dodatkowych podstron, integracji z innymi systemami lub tekstów, z góry przygotujemy ofertę z ceną końcową, więc wiesz, ile zapłacisz, zanim zaczniemy.',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Bezpłatna wycena',

    'hero.l1': 'Jesteśmy <em>Lanthir</em>',
    'hero.l2': 'Strony internetowe na zamówienie i ich obsługa',
    'hero.sub': 'Projektujemy strony internetowe na zamówienie i dbamy o ich działanie. Aplikacja webowa, sklep lub system rezerwacji — z SSL, hostingiem, optymalizacją SEO i monitoringiem dostępności.',
    'hero.btn1':     'Zobacz cennik',
    'hero.btn2':     'Bezpłatna konsultacja',
    'hero.chip2':    'Dni średnia realizacja',
    'hero.building': 'Twoja strona jest przygotowywana...',

    'svc.tag': 'Co robimy',
    'svc.heading': 'Nasze <br><em>produkty</em>',
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
    'svc.6.desc':  'Przebudujemy obecną stronę na nowoczesną i szybką. Zachowamy treści i adresy podstron, żeby strona nie straciła pozycji w wyszukiwarce.',

    'price.tag':      'Cennik',
    'price.heading': 'Ceny za <em>nasze usługi</em>',
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
    'price.note':     '* Nie jesteśmy płatnikami VAT — podane ceny są cenami końcowymi. Chętnie przygotujemy dokładną wycenę na miarę.',
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
    'proc.heading': 'Nasz proces <br><em>z klientem</em>',
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
    'about.heading': 'Kto stoi <br><em>za Lanthirem</em>',
    'about.1.role':  'Założyciel &amp; CTO',
    'about.1.bio':   'Założyciel Lanthira specjalizujący się w monitoringu i DevOps. Projektuje i wdraża rozwiązania techniczne, które działają niezawodnie i przynoszą klientom realne wyniki.',
    'about.2.role':  'Head of Sales',
    'about.2.bio':   'Odpowiada za rozwój relacji biznesowych i pomaga klientom znaleźć idealne rozwiązanie dla ich projektu. Twój pierwszy kontakt, gdy rozważasz współpracę z Lanthirem.',

    'cta.h2': 'Masz projekt? <span class="grad-text">Działajmy.</span>',
    'cta.p':  'Bezpłatna konsultacja bez zobowiązań. Opowiedz nam o projekcie, a odezwiemy się w ciągu 24 godzin.',
    'cta.btn':'Bezpłatna wycena',

    'contact.tag':       'Kontakt',
    'contact.heading': 'Skontaktuj się <em>z nami</em>',
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
    'footer.privacy': 'Zasady ochrony danych osobowych',
    'footer.consumer': 'Informacje dla konsumentów',
    'footer.cookies': 'Ustawienia cookies',
    'footer.social':  'Obserwuj nas',
    'work.1.alt':     'Przykładowa strona dla restauracji: strona główna Restaurace MAX',
    'work.2.alt':     'Przykładowa strona dla serwisu samochodowego: strona główna Autoservis Motyka',
    'work.3.alt':     'Przykładowa strona dla masaży i wellness: strona główna Masáže Bylinka',
    'work.5.alt':     'Przykładowa strona dla studia kosmetycznego: strona główna Studio Victory',
    'work.7.alt':     'Strona główna witryny, którą zbudowaliśmy dla Instalatér Vobořil',
    'about.1.alt':    'Ing. Michal Owczarzy, założyciel i CTO Lanthiru',
    'about.2.alt':    'Mariusz Chmiel, Head of Sales w Lanthirze',
    'sticky.cta':     'Bezpłatna wycena',
    'footer.col1.h':  'Usługi',
    'footer.webdev':  'Tworzenie stron',
    'price.more':     'Jak przebiega tworzenie strony i co jest w cenie →',
    'price.more2':    'Pełny cennik i porównanie pakietów →',
    'footer.care':    'Opieka nad stroną',
    'footer.monitoring': 'Monitoring strony',
    'footer.col2.h':  'Firma',
    'form.err.name':  'Podaj proszę imię.',
    'form.err.email': 'Podaj poprawny adres e-mail.',
    'form.err.msg':   'Napisz kilka słów o projekcie.',
    'form.gdpr':      'Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi tego zapytania. Nie przekazujemy ich stronom trzecim i usuniemy je na żądanie.',
    'form.err.gdpr':  'Bez zgody nie możemy obsłużyć zapytania.',
    'footer.copy':    '© 2026 Lanthir. Wszelkie prawa zastrzeżone.',

    'nav.work': 'Realizacje',
    'nav.obs': "Obserwowalność",
    'form.bundle.grp3': "── Inne usługi ──",
    'form.bundle.opt7': "Obserwowalność na miarę",
    'more.tag': "Inne usługi",
    'more.h': "Obserwowalność",
    'more.sub': "Przede wszystkim tworzymy strony www. Obok nich oferujemy osobne usługi, które możesz zamówić także bez strony.",
    'obs.name': "Wiesz, co dzieje się w Twojej sieci?",
    'obs.sub': "Obserwowalność jako usługa: dane ze wszystkich serwerów, urządzeń i aplikacji zbierzemy w jednym miejscu, zbudujemy na nich czytelne pulpity i pilnujemy ich za Ciebie. Nie kupujesz kolejnego oprogramowania, które musisz sam konfigurować i doglądać.",
    'obs.p1h': "Dane ze wszystkich urządzeń w jednym miejscu",
    'obs.p1': "Serwery, sieć, komputery i laptopy, chmura, aplikacje, kamery, urządzenia produkcyjne i IoT. Podłączymy wszystko, co u Ciebie działa, niezależnie od producenta.",
    'obs.p2h': "Widok dla techników i dla zarządu",
    'obs.p2': "Technik widzi szczegóły każdej usługi, zarząd stan całej firmy na jeden rzut oka. Bez szukania w pięciu różnych narzędziach.",
    'obs.p3h': "Pilnujemy tego za Ciebie",
    'obs.p3': "Gdy coś zbliża się do progu, wiemy o tym przed Twoimi klientami i odzywamy się. Czas reakcji zapisujemy w umowie.",
    'obs.cta': "Umów konsultację",
    'obs.note': "Cenę przygotujemy według zakresu po bezpłatnej konsultacji.",
    "obs.more": "Więcej o obserwowalności",
    "op.h1": "Obserwowalność<br>jako usługa",
    "op.lead": "Wiesz o problemie wcześniej niż Twoi klienci. Dane ze wszystkich serwerów, sieci i urządzeń zbierzemy w jednym miejscu, zbudujemy na nich czytelne pulpity i pilnujemy ich za Ciebie.",
    "op.cta": "Umów bezpłatną konsultację",
    "op.cta2": "Ile kosztuje awaria",
    "op.val.h": "Co Ci to da",
    "op.val.sub": "Monitoring nie jest celem. Celem jest firma, która działa, ludzie, którzy mogą pracować, i klienci, którzy nie trafiają na zamknięte drzwi.",
    "op.val.1h": "Mniej awarii",
    "op.val.1": "Większość awarii zapowiada się wcześniej: zapełniający się dysk, przegrzany serwer, łącze na granicy przepustowości. Zobaczymy to na czas i naprawimy, zanim praca stanie.",
    "op.val.2h": "Szybsze rozwiązywanie",
    "op.val.2": "Gdy coś się dzieje, nikt nie szuka godzinami, gdzie jest błąd. Wiemy, które urządzenie sprawia problem, od kiedy i co się zmieniło.",
    "op.val.3h": "Bez własnego specjalisty",
    "op.val.3": "Nie musisz zatrudniać ani szkolić osoby, która będzie konfigurować i obserwować monitoring. Płacisz za wynik, a nie za kolejny etat.",
    "op.val.4h": "Decyzje oparte na danych",
    "op.val.4": "Zarząd widzi, jak obciążone są systemy i dokąd to zmierza. Nowy serwer czy szybsze łącze kupujesz wtedy, gdy są naprawdę potrzebne, a nie na wszelki wypadek.",
    "op.calc.h": "Ile kosztuje Cię<br>godzina awarii?",
    "op.calc.sub": "Policz to sam. Ustaw, ile osób nie może pracować i ile przychodu tracisz. Nic nie jest nigdzie wysyłane.",
    "op.calc.people": "Ile osób nie może pracować",
    "op.calc.rate": "Ile firmę kosztuje godzina jednej osoby",
    "op.calc.sales": "Przychód na godzinę, który nie wpłynie",
    "op.calc.res": "Jedna godzina awarii kosztuje Cię około",
    "op.calc.day": "Cały dzień pracy bez systemów:",
    "op.calc.note": "Obserwowalność polega na tym, żeby te liczby zostały tylko na papierze: wychwycimy problem, zanim zatrzyma pracę.",
    "op.src.h": "Wszystkie urządzenia<br>w jednym miejscu",
    "op.src.sub": "Nie ma znaczenia producent ani to, czy urządzenie stoi w szafie w piwnicy, czy działa w chmurze. Podłączymy je tak, jak się da.",
    "op.src.1h": "Serwery",
    "op.src.1": "Obciążenie, pamięć, dyski, działające usługi i kopie zapasowe. Windows i Linux, fizyczne i wirtualne.",
    "op.src.2h": "Sieć",
    "op.src.2": "Routery, switche, Wi-Fi i firewalle. Obciążenie łączy, przerwy i nietypowy ruch.",
    "op.src.3h": "Chmura i kontenery",
    "op.src.3": "Usługi w Azure, AWS lub Google Cloud, Kubernetes i Docker. Wydajność, dostępność i błędy.",
    "op.src.4h": "Aplikacje i strony",
    "op.src.4": "Dostępność, czas odpowiedzi i błędy, po których poznamy, co nie działa Twoim klientom.",
    "op.src.5h": "Sprzęt biurowy",
    "op.src.5": "Drukarki, kamery, zasilacze awaryjne i inne urządzenia, których nikt nie pilnuje, dopóki nie przestaną działać.",
    "op.src.6h": "Produkcja i IoT",
    "op.src.6": "Maszyny, czujniki i systemy sterowania. Temperatury, ciśnienia, stany linii i przestoje.",
    "op.src.7h": "Komputery i laptopy",
    "op.src.7": "Stacje robocze Twoich pracowników: miejsce na dysku, aktualizacje, wydajność i stan baterii. Widzimy problem, zanim ktoś go zgłosi.",
    "op.src.8h": "Jak je podłączamy",
    "op.src.how": "Przez agentów, SNMP, API, OpenTelemetry i logi. Nie musisz wymieniać tego, co już masz.",
    "op.svc.h": "Nie sprzedajemy oprogramowania.<br>Dostarczamy usługę.",
    "op.svc.sub": "Narzędzie do monitoringu może kupić każdy. Ale potem ktoś musi je skonfigurować, utrzymywać i przede wszystkim obserwować. To robimy my.",
    "op.svc.a.h": "Gdy kupisz narzędzie",
    "op.svc.a.1": "Instalację i konfigurację robisz sam.",
    "op.svc.a.2": "Alerty trafiają do skrzynki, której nikt nie czyta.",
    "op.svc.a.3": "Gdy coś zepsuje się w nocy, rano dowiesz się o tym od klientów.",
    "op.svc.a.4": "Licencje, aktualizacje i utrzymanie to dodatkowa praca.",
    "op.svc.b.h": "Gdy masz nas",
    "op.svc.b.1": "Wszystko podłączymy i skonfigurujemy za Ciebie.",
    "op.svc.b.2": "Alerty oceniamy my i odzywamy się, gdy trzeba działać.",
    "op.svc.b.3": "Czas reakcji zapisujemy w umowie.",
    "op.svc.b.4": "Raz w miesiącu dostajesz podsumowanie, co się działo i co zalecamy.",
    "op.how.h": "Jak to wygląda",
    "op.how.1h": "Bezpłatna konsultacja",
    "op.how.1": "Przejdziemy przez to, co u Ciebie działa i co Ci przeszkadza. Powiemy, co warto pilnować, a co nie.",
    "op.how.2h": "Podłączenie",
    "op.how.2": "Podłączymy urządzenia i usługi, które razem wybraliśmy, i sprawdzimy, czy dane spływają poprawnie.",
    "op.how.3h": "Pulpity i alerty",
    "op.how.3": "Zbudujemy widoki dla techników i dla zarządu oraz ustawimy, kiedy i do kogo ma trafić alert.",
    "op.how.4h": "Pilnowanie",
    "op.how.4": "Od tej chwili pilnujemy tego my. Gdy coś zbliża się do progu, odezwiemy się, zanim zauważą to Twoi klienci.",
    "op.faq.h": "Najczęstsze pytania",
    "op.q1": "Czy musimy zmieniać to, co już mamy?",
    "op.a1": "Nie. Podłączymy się do tego, co u Ciebie już działa. Jeśli masz jakiś monitoring, nawiążemy do niego i go uzupełnimy.",
    "op.q2": "Co jeśli mamy urządzenia różnych producentów?",
    "op.a2": "To normalne. Większość urządzeń potrafi wysyłać dane standardową drogą (SNMP, API, logi), a tam, gdzie się nie da, wdrożymy agenta.",
    "op.q3": "Ile to kosztuje?",
    "op.a3": "To zależy od tego, ile urządzeń i usług pilnujemy i jak szybkiej reakcji potrzebujesz. Cenę przygotujemy po bezpłatnej konsultacji.",
    "op.q4": "Kto zobaczy nasze dane?",
    "op.a4": "Ty i my. Dostępy do pulpitów ustawimy według tego, kto w firmie co musi widzieć.",
    "op.end.h": "Chcesz zobaczyć,<br>co się u Ciebie dzieje?",
    "op.end.sub": "Konsultacja jest bezpłatna i niezobowiązująca. Odezwij się, a ustalimy, co warto pilnować.",
    'obs.db.h': "Tak może wyglądać Twój pulpit",
    'obs.db.sub': "Dane w przykładzie są zmyślone. Twój pulpit zaprojektujemy według tego, co u Ciebie faktycznie działa. Najedź albo stuknij w dowolny węzeł na mapie.",
    'obs.db.env': "Produkcja · 13 usług",
    'obs.db.live': "Na żywo",
    'obs.db.sample': "Dane przykładowe",
    'obs.db.map': "Mapa usług",
    'obs.db.k1': "Dostępność · 30 dni",
    'obs.db.k2': "Opóźnienie p95",
    'obs.db.k3': "Odsetek błędów",
    'obs.db.k4': "Ruch",
    'obs.db.chart': "Ruch na żywo · Gb/s",
    'obs.db.logs': "Logi na żywo",
    'obs.db.heat': "Opóźnienie wg usług · ostatnie 48 minut",
    'obs.db.slo': "Niezawodność (SLO 99,9 %)",
    'obs.db.budget': "Zostało 71 % budżetu błędów na ten miesiąc",
    'obs.db.alert': "Dysk /data zapełni się za około 6 dni. Proponujemy powiększyć wolumen do piątku.",
    'fact.1.unit':  'dni',
    'fact.1.label': 'średni czas realizacji strony',
    'fact.2.label': 'strona na zamówienie już od',
    'fact.3.unit':  'min',
    'fact.3.label': 'interwał monitoringu dostępności',
    'fact.4.unit':  'h',
    'fact.4.label': 'odpowiadamy na zapytania w',

    'work.tag': 'Realizacje',
    'work.heading': 'Realizacje <em>i projekty</em>',
    'work.sub': '„Klient na żywo” to strony, które już działają u klientów. „Projekt” to próbki, które przygotowaliśmy dla lokalnych firm. Kliknij i przejrzyj je jak prawdziwe strony.',
    'work.open': 'Otwórz żywą stronę',
    'work.all':     'Zobacz wszystkie realizacje',
    'work.1.ind':   'Restauracja',
    'work.7.ind':   'Hydraulika &amp; łazienki',
    'work.live':    'Klient na żywo',
    'work.concept': 'Projekt',
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
/* The cinematic pacing, at the per-character rate that was signed off:
   1100ms of backdrop alone, then ~45ms between characters and 850ms for each
   one to swing down. The sweeps differ per line because a 16-character
   greeting and a 43-character sentence cannot share one budget without one of
   them crawling.

   There is deliberately no shortened repeat-visit variant. It existed to spare
   returning visitors the full sequence, but it meant a reload played a much
   faster animation than a first visit, which reads as the timing being wrong
   rather than as a considerate shortcut. Skip-on-intent already covers anyone
   who does not want to wait. */
/* After the logo splash (below) the backdrop has already been on screen while
   the black ground cleared, so the headline follows the flight closely and
   both lines sweep faster: the visitor has already watched one sequence, and
   the page has to finish arriving within about two seconds of the reveal.
   The splash is decided in <head> before first paint, so this is fixed here. */
const SPLASH = document.documentElement.classList.contains('splash-on') && !RM;
const INTRO = SPLASH
  ? { hold: 350, l1: 600, l2: 560, char: 720, gap: 60 }
  : { hold: 1100, l1: 1000, l2: 1850, char: 850, gap: 250 };

/* the copy carries a 180ms internal stagger and a ~650ms transition, so it
   starts this far before the headline's last character lands and the two
   arrive together */
const COPY_TAIL = 830;

/* line two starts once line one has finished sweeping, not once its last
   character has finished moving — a slight overlap, so the two read as one
   thought arriving in two beats rather than two separate events */
const L2_START = INTRO.hold + INTRO.l1 + INTRO.gap;
const HERO_SETTLED = L2_START + INTRO.l2 + INTRO.char;
const HERO_STEP = {
  l1: INTRO.hold,
  l2: L2_START,
  /* The headline and copy are static now (visible from the first frame), so
     nothing waits for the old fold sequence: the cue and the bar follow the
     backdrop's first frame. HERO_SETTLED and COPY_TAIL stay for reference. */
  copy: INTRO.hold + 120,
  /* Touch gets the bar straight away. Holding it back on a phone meant the
     burger sat there looking like a control for three and a half seconds
     before it became one. */
  nav:  SPLASH ? 520 : (FINE && document.getElementById('asciiBg')) ? INTRO.hold + 260 : 0
};
const heroWaiting = [];
const onHeroReady = cb => (heroReady ? cb() : heroWaiting.push(cb));
/* Two things have to be true before the headline moves: the backdrop has put
   up a frame (or given up), and the splash, if there is one, has started to
   clear. Either can arrive first. */
let backdropUp = false;
let splashClear = !SPLASH;
const tryHero = () => {
  if (heroReady || !backdropUp || !splashClear) return;
  heroReady = true;
  document.documentElement.dataset.hero = 'ready';
  heroWaiting.splice(0).forEach(cb => cb());
};
let splashGo = null;   /* set by the splash: it starts once the backdrop is up */
const markHeroReady = () => {
  backdropUp = true;
  if (splashGo) splashGo();
  tryHero();
};
setTimeout(markHeroReady, 1200);

/* ══════════════════════════════════════════════
   LOGO SPLASH — the mark reads its own signal
   The page opens on a black ground with nothing but the mark. Its 28 rays are
   a radial readout: they are measured one by one, clockwise from the top,
   each springing out from the inner ring with its own overshoot; the wordmark
   rises beside them and one scan runs round the circle. Then the hand-off:
   the lockup travels into the nav bar and becomes the logo there, while the
   black ground dissolves into the hero and the streaks settle from a slight
   zoom, and the headline folds in behind it.

   Smoothness, in order of what used to break it:
   - The shader compiles while the screen is still black, before the first
     ray moves, so no compile can stall the animation. The streaks then hold
     their first frame under the ground and only run once they are revealed.
   - The wordmark waits for its own face, so no font swap shifts it mid-rise.
   - The flight, the ground and the backdrop zoom are compositor animations.
   - The clock advances by at most two frames per frame: a busy main thread
     pauses the reading instead of making it skip.
   - The lockup and the bar's own logo cross-fade on landing, so a sub-pixel
     difference between them never shows as a jump.
   Once per session, decided in <head> so the page never flashes before it.
   Any input ends it at once (see Skip on intent).
══════════════════════════════════════════════ */
const afterSplash = [];
const whenSplashClear = f => (splashClear ? f() : afterSplash.push(f));
const RAYS = [[60,38,60,13.35],[64.9,38.55,68.7,21.89],[69.55,40.18,77.28,24.12],[73.72,42.8,90.87,21.29],[77.2,46.28,94.4,32.57],[79.82,50.45,98.92,41.26],[81.45,55.1,97.99,51.33],[82,60,104.62,60],[81.45,64.9,111.66,71.79],[79.82,69.55,99.68,79.11],[77.2,73.72,93.02,86.33],[73.72,77.2,86.33,93.01],[69.55,79.82,81.07,103.76],[64.9,81.45,69.8,102.92],[60,82,60,104.41],[55.1,81.45,52.35,93.51],[50.45,79.82,39.79,101.97],[46.28,77.2,31.22,96.09],[42.8,73.72,20.36,91.61],[40.18,69.55,19.9,79.31],[38.55,64.9,26.55,67.63],[38,60,19.77,60],[38.55,55.1,9.43,48.46],[40.18,50.45,20.51,40.98],[42.8,46.28,30.95,36.83],[46.28,42.8,37.52,31.82],[50.45,40.18,39.75,17.96],[55.1,38.55,48.03,7.54]];
const finishSplash = (() => {
  const root = document.getElementById('splash');
  const html = document.documentElement;
  if (!SPLASH || !root) {
    html.classList.remove('splash-on');
    return () => {};
  }
  const lock = root.querySelector('.splash-lock');
  const g = root.querySelector('.splash-rays');
  const word = root.querySelector('.splash-word');
  const navLogo = document.querySelector('.nav-logo');
  const NS = 'http://www.w3.org/2000/svg';

  /* timeline, ms from the first ray */
  const T = { stag: 22, word: 560, scan: 1300, scanDur: 620, fly: 2150, flyDur: 980 };
  const N = RAYS.length;
  let seed = 7;   /* seeded: every visit draws the same reading */
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const lines = RAYS.map(() => {
    const l = document.createElementNS(NS, 'line');
    l.setAttribute('opacity', '0');
    g.appendChild(l);
    return { el: l, zeta: 0.34 + rnd() * 0.28, w: 12 + rnd() * 5 };
  });

  /* each letter rises from behind its own baseline */
  const txt = word.textContent;
  word.textContent = '';
  [...txt].forEach((ch, i) => {
    const sp = document.createElement('span');
    sp.textContent = ch;
    sp.style.setProperty('--i', i);
    word.appendChild(sp);
  });
  word.classList.add('is-split');   /* only now may the word be shown at all */

  /* the lockup is a true multiple of the nav lockup, so the flight is one
     uniform scale and the type lands on the type */
  lock.style.setProperty('--S', Math.max(1.6, Math.min(3.2, (innerWidth * 0.78) / 150)).toFixed(3));

  /* underdamped spring 0 → 1, overshoot set by zeta */
  const spring = (t, z, w) => {
    if (t <= 0) return 0;
    const wd = w * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
  };

  let raf = 0, last = 0, t = 0, started = false, flying = false, done = false;
  const draw = now => {
    t += last ? Math.min(34, now - last) : 0;
    last = now;
    const head = (t - T.scan) / T.scanDur * (N + 6) - 3;
    for (let i = 0; i < N; i++) {
      const r = RAYS[i], L = lines[i];
      const ti = (t - i * T.stag) / 1000;
      let k = spring(ti - 0.07, L.zeta, L.w);
      if (t > T.scan && t < T.scan + T.scanDur + 200) {
        const d = Math.abs(i - head);
        k *= 1 + 0.18 * Math.exp(-(d * d) / 3.2);
      }
      L.el.setAttribute('opacity', ti > 0 ? Math.min(1, ti / 0.08).toFixed(3) : '0');
      L.el.setAttribute('x1', r[0]); L.el.setAttribute('y1', r[1]);
      L.el.setAttribute('x2', (r[0] + (r[2] - r[0]) * k).toFixed(2));
      L.el.setAttribute('y2', (r[1] + (r[3] - r[1]) * k).toFixed(2));
    }
    if (t >= T.word) root.classList.add('word-in');
    if (t >= T.fly && !flying) fly();
    if (!done && !flying) raf = requestAnimationFrame(draw);
  };

  const release = () => {
    splashClear = true;
    html.classList.add('splash-clearing');
    afterSplash.splice(0).forEach(f => f());
    tryHero();
  };
  const land = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(raf);
    html.classList.add('splash-landed');            /* lockup and bar logo cross-fade */
    setTimeout(() => {
      html.classList.remove('splash-on', 'splash-clearing', 'splash-landed');
      root.remove();
      dispatchEvent(new Event('lanthir:splashdone'));
    }, 260);
  };

  /* hand-off: measure both marks, fly one onto the other, dissolve the ground */
  const fly = () => {
    flying = true;
    if (navLogo) navLogo.querySelectorAll('.fold').forEach(el => el.classList.add('in'));
    const to = navLogo && navLogo.querySelector('.logo-img').getBoundingClientRect();
    const from = root.querySelector('.splash-mark').getBoundingClientRect();
    const lr = lock.getBoundingClientRect();
    root.classList.add('clearing');
    release();
    setTimeout(() => document.body.classList.add('nav-in'), 320);
    if (!to || !to.width) { setTimeout(land, 600); return; }
    const sc = to.width / from.width;
    const dx = to.left - (lr.left + (from.left - lr.left) * sc);
    const dy = to.top - (lr.top + (from.top - lr.top) * sc);
    const a = lock.animate(
      [{ transform: 'none' }, { transform: `translate(${dx}px, ${dy}px) scale(${sc})` }],
      { duration: T.flyDur, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
    );
    a.onfinish = land;
    setTimeout(land, T.flyDur + 400);   /* if onfinish never comes */
  };

  /* Start only once the backdrop has compiled and drawn (or given up) and the
     wordmark's face is in, capped so a slow network never holds the black
     screen for long. Until then the screen is simply black. */
  let fontIn = false;
  const go = () => {
    if (started || !backdropUp || !fontIn) return;
    started = true;
    raf = requestAnimationFrame(draw);
  };
  splashGo = go;
  const fonts = document.fonts && document.fonts.load
    ? document.fonts.load('500 40px "JetBrains Mono"').catch(() => {})
    : Promise.resolve();
  fonts.then(() => { fontIn = true; go(); });
  setTimeout(() => { fontIn = true; backdropUp = true; go(); }, 900);

  /* skip: a short fade, the bar up, the hero released */
  return () => {
    if (done) return;
    if (navLogo) navLogo.querySelectorAll('.fold').forEach(el => el.classList.add('in'));
    document.body.classList.add('nav-in');
    root.classList.add('skip');
    release();
    done = true;
    cancelAnimationFrame(raf);
    setTimeout(() => {
      html.classList.remove('splash-on', 'splash-clearing', 'splash-landed');
      root.remove();
      dispatchEvent(new Event('lanthir:splashdone'));
    }, 220);
  };
})();

/* ── Skip on intent ────────────────────────
   Any sign the visitor wants to get on with it ends the intro immediately.
   A held-back page is only charming until someone is trying to use it. */
let introDone = false;
const endIntro = () => {
  if (introDone) return;
  introDone = true;
  document.body.classList.add('intro-skip');   /* collapses the remaining delays */
  finishSplash();
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
  /* Alt text is content too — an English page should not describe its
     screenshots in Czech. Same contract as data-i18n-ph above. */
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const v = T[lang][el.dataset.i18nAlt];
    if (v !== undefined) el.alt = v;
  });
  document.querySelectorAll('.ls-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  if (window.__wheelSync) window.__wheelSync();
  /* innerHTML above just destroyed every split heading — rebuild them */
  if (window.__foldSync) window.__foldSync();
  if (window.__pageSync) window.__pageSync(lang);
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
   GRADIENT ASCII — the page's horizon (ascii.js)
   One fixed field behind the whole page, in the mark's colours. The page
   reads as a descent and a return:
     · at the top you look at the sky: the full field, the horizon low;
     · scrolling into the content the horizon rises and the page drops below
       it — behind the reading there is only dark ground, with the horizon's
       glow left at the top edge;
     · at the footer the horizon comes back down and the sky opens again
       behind the closing name.
   The light chapters (pricing, FAQ) pass over it like paper pages. The
   field holds its first frame under the logo splash and plays its own
   reveal as the black ground dissolves. With reduced motion it is a still
   hero background; on weak or GPU-less devices, a static wash.
══════════════════════════════════════════════ */
(function () {
  const host = document.getElementById('asciiBg');
  const hero = document.querySelector('.hero');
  if (!host || !hero) { markHeroReady(); return; }

  const fallback = () => {
    document.documentElement.classList.add('ascii-off');
    markHeroReady();
  };
  const boot = () => {
    const forced = new URLSearchParams(location.search).get('ascii');
    if (forced === 'off' || TIER === 0 || !window.LanthirAscii) { fallback(); return; }
    if (RM) host.classList.add('is-still');           /* a hero background, nothing scroll-linked */
    const field = window.LanthirAscii(host, {
      /* the user's settings, with the ramp moved from royal blue to the
         mark's teal-to-ice-to-cyan */
      colors: ['#0d4a57', '#eef1f2', '#a8f4ff', '#1fcded'],
      shape: 'horizon', characters: ' =+xX0S8#@', cellSize: 18, density: 0.8,
      glyphOpacity: 0.85, glow: 0.2, depthOfField: 0, flicker: 0.2, softness: 0.5,
      scale: 1, flow: 0.5, speed: 1, gradientOpacity: 0.9, grain: 0.08, variation: 0,
      mouseInteraction: FINE, scrambleRadius: 0.1, clickEffect: 'wave', intro: true,
      lightMode: false, reduce: RM, dpr: TIER === 2 ? 0 : 1.5,
      /* ?ascii=force runs it even on software GL, for testing without a GPU */
      allowSoftware: forced === 'force'
    });
    if (!field) { fallback(); return; }
    if (SPLASH) field.hold(true);
    field.onFirst(markHeroReady);
    whenSplashClear(() => { field.hold(false); field.startIntro(); });
    if (!RM) scene(field);
  };

  /* The descent and the return, smoothed so a flick of the wheel glides.
     While reading, the horizon is lifted clean off the top of the screen, so
     nothing moves behind the text. Out there, unseen, the field flips: the
     sky now lies below the horizon, and at the footer the horizon comes back
     up from the bottom edge with the sky behind the closing name, while the
     footer's links stay on dark ground. */
  const scene = field => {
    const footer = document.querySelector('.footer');
    const OFF = 0.95;                   /* horizon lift that clears the screen */
    const END = 0.38;                   /* flipped: sky across the bottom third */
    const ease = x => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
    let target = 0, cur = 0, raf = 0, last = 0, flipped = false, wantFlip = false;
    const measure = () => {
      const y = scrollY, vh = innerHeight;
      const down = ease(y / Math.max(1, hero.offsetHeight * 0.9));
      const max = document.documentElement.scrollHeight - vh;
      const endFrom = footer ? footer.offsetTop - vh * 0.6 : Infinity;
      const back = ease((y - endFrom) / Math.max(1, max - endFrom));
      wantFlip = y > hero.offsetHeight * 1.5 && y > (endFrom - vh);
      target = wantFlip ? OFF - (OFF - END) * back : OFF * down;
      field.setThrottle(cur > OFF - 0.02 && target > OFF - 0.02 ? 3 : 1);
    };
    const tick = now => {
      raf = 0;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      /* the flip only ever happens while the horizon is off screen */
      if (wantFlip !== flipped && cur > OFF - 0.03) { flipped = wantFlip; field.setFlip(flipped); }
      const goal = wantFlip !== flipped ? OFF : target;
      cur += (goal - cur) * (1 - Math.exp(-dt * 7));
      if (Math.abs(goal - cur) < 0.0005) cur = goal;
      field.setLift(cur);
      if (cur !== target || wantFlip !== flipped) raf = requestAnimationFrame(tick);
      else last = 0;
    };
    const kick = () => { measure(); if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick, { passive: true });
    kick();
  };

  /* With the splash the screen is black anyway: compile now, before the
     first ray moves. Otherwise wait until the page has painted and is idle,
     so the first paint never waits on the shaders. */
  if (SPLASH) boot();
  else {
    const go = () => (window.requestIdleCallback || (f => setTimeout(f, 160)))(boot, { timeout: 350 });
    if (document.readyState === 'complete') go();
    else addEventListener('load', go, { once: true });
  }
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
  /* The hero headline is not folded: it has to be legible from the first
     frame (it sits right above the LCP paragraph), so only the section
     headings, the logo text and the nav still fold in. */
  const heads = Array.from(document.querySelectorAll('.h2, .logo-text, .nav-links a:not(.m-cta)'));
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
  /* Split into a read and a write pass. Measuring a character straight after
     styling the previous one made the browser recompute style for every
     single character; now every heading is measured first and written after. */
  const measureHead = el => {
    const gs = el.querySelectorAll('.fold-c.grad');
    if (!gs.length) return { ok: true };
    const w = el.offsetWidth, h = el.offsetHeight;
    if (!w || !h) return { ok: false };
    const [hx, hy] = absOffset(el);
    return { ok: true, gs, w, h, hx, hy, offs: Array.from(gs, absOffset) };
  };
  const paintHead = m => {
    if (!m.gs) return;
    m.gs.forEach((c, i) => {
      c.style.backgroundSize = m.w + 'px ' + m.h + 'px';
      c.style.backgroundPosition = (m.hx - m.offs[i][0]) + 'px ' + (m.hy - m.offs[i][1]) + 'px';
    });
  };

  let tries = 0;
  const projectAll = () => {
    const ms = heads.map(measureHead);
    ms.forEach(paintHead);
    if (ms.some(m => !m.ok) && ++tries < 60) requestAnimationFrame(projectAll);
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
   SPECULAR BUTTON — React Bits SpecularButton, ported to plain JS
   radius pill · thickness 1.2 · shineSize 10 · shineFade 34 · glow 1
   intensity 1 · idleIntensity .35 · proximity 250 · followMouse

   The shader is the reference one. What changed is how it is hosted: the
   page has a dozen buttons and a browser allows only a handful of WebGL
   contexts (the ASCII field already holds one), so a single hidden context
   draws every button in turn and each button's own 2D canvas copies its
   frame out. Only buttons on screen and still moving are drawn.

   The label moves into its own span on start so applyLang() can rewrite
   the text without wiping the canvas next to it.
══════════════════════════════════════════════ */
(function () {
  const btns = Array.from(document.querySelectorAll('.btn'));
  if (!btns.length) return;

  btns.forEach(b => {
    const label = document.createElement('span');
    label.className = 'btn-label';
    while (b.firstChild) label.appendChild(b.firstChild);
    const key = b.getAttribute('data-i18n');
    if (key) { label.setAttribute('data-i18n', key); b.removeAttribute('data-i18n'); }
    b.appendChild(label);
  });

  const PAD = 24;
  const THICKNESS = 1.2, SHINE = 10, FADE = 34, GLOW = 1;
  const INTENSITY = 1, IDLE = 0.35, PROX = 250;
  const FOLLOW = !RM;

  const VERT = `#version 300 es
in vec2 aPosition;
void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;

  const FRAG = `#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform float uPx;
uniform float uSpot;
uniform vec2 uEntry;
uniform vec3 uLineColor;
uniform vec4 uBaseColor;
uniform float uIntensity;
uniform vec2 uWindow;
uniform float uThickness;
uniform float uGlow;
out vec4 outColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
float loopPosition(vec2 p, vec2 b, float r) {
  vec2 inner = b - r;
  float arc = 1.5707963 * r;
  float quarter = inner.x + inner.y + arc;
  vec2 a = abs(p);
  vec2 q = a - inner;
  float s = q.x > 0.0 && q.y > 0.0
    ? inner.y + atan(q.y, q.x) * r
    : (q.x > q.y ? min(a.y, inner.y) : inner.y + arc + inner.x - min(a.x, inner.x));
  if (p.x < 0.0) s = p.y >= 0.0 ? 2.0 * quarter - s : 2.0 * quarter + s;
  else if (p.y < 0.0) s = 4.0 * quarter - s;
  return s / max(4.0 * quarter, 0.0001);
}
float lobe(float position, float center) {
  float gap = abs(fract(position - center + 0.5) - 0.5);
  return 1.0 - smoothstep(uWindow.x, uWindow.x + uWindow.y, gap);
}
void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = roundedBox(p, uHalf, uRadius);
  float position = loopPosition(p, uHalf, uRadius);
  float key = lobe(position, uSpot);
  float back = lobe(position, uSpot + 0.5);
  float streak = key + back * 0.45;
  float width = max(uThickness * uPx * mix(1.0, max(key, back), 0.6), 0.35);
  float band = smoothstep(-width - 0.6, -width + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float hair = smoothstep(-uPx - 0.6, -uPx + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float inside = 1.0 - smoothstep(-0.6, 0.6, d);
  vec2 pool = (p - uEntry) / (uHalf.y * vec2(1.6, 1.1));
  float glow = streak * 0.2 * exp(-abs(d + width * 0.5) / (5.0 * uPx)) + inside * 0.08 * exp(-dot(pool, pool));
  float light = clamp((band * streak + glow * uGlow) * uIntensity, 0.0, 1.0);
  vec4 base = vec4(uBaseColor.rgb, 1.0) * uBaseColor.a * hair * 0.6;
  outColor = vec4(uLineColor, 1.0) * light + base * (1.0 - light);
}`;

  const glc = document.createElement('canvas');
  glc.width = glc.height = 1;
  const gl = glc.getContext('webgl2', {
    alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false
  });
  if (!gl) return;   /* the CSS hairline on .btn--ghost:not(.has-light) stands in */

  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s;
    gl.deleteShader(s);
    return null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT), fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.bindAttribLocation(prog, 0, 'aPosition');
  gl.linkProgram(prog);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

  const U = {};
  ['uCenter', 'uHalf', 'uRadius', 'uPx', 'uSpot', 'uEntry', 'uLineColor', 'uBaseColor',
   'uIntensity', 'uWindow', 'uThickness', 'uGlow'].forEach(n => { U[n] = gl.getUniformLocation(prog, n); });
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);

  /* any CSS colour, through a 1px 2D canvas, to 0-1 rgba */
  const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const colours = new Map();
  const toRgba = value => {
    value = (value || '').trim() || 'transparent';
    if (colours.has(value)) return colours.get(value);
    probe.clearRect(0, 0, 1, 1);
    probe.fillStyle = '#000';
    probe.fillStyle = value;
    probe.fillRect(0, 0, 1, 1);
    const d = probe.getImageData(0, 0, 1, 1).data;
    const a = d[3] / 255;
    /* getImageData un-premultiplies, so the channels are the colour itself */
    const rgba = [d[0] / 255, d[1] / 255, d[2] / 255, a];
    colours.set(value, rgba);
    return rgba;
  };

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const wrap = v => v - Math.floor(v);

  const loopPosition = (x, y, hx, hy, r) => {
    const ix = hx - r, iy = hy - r;
    const arc = (Math.PI / 2) * r;
    const quarter = ix + iy + arc;
    const ax = Math.abs(x), ay = Math.abs(y);
    const qx = ax - ix, qy = ay - iy;
    let s;
    if (qx > 0 && qy > 0) s = iy + Math.atan2(qy, qx) * r;
    else if (qx > qy) s = Math.min(ay, iy);
    else s = iy + arc + ix - Math.min(ax, ix);
    if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
    else if (y < 0) s = 4 * quarter - s;
    return wrap(s / Math.max(4 * quarter, 0.0001));
  };

  const rimPoint = (pos, hx, hy, r) => {
    const ix = hx - r, iy = hy - r;
    const arc = (Math.PI / 2) * r;
    const quarter = ix + iy + arc;
    let s = wrap(pos) * 4 * quarter;
    let sx = 1, sy = 1;
    if (s > 3 * quarter) { s = 4 * quarter - s; sy = -1; }
    else if (s > 2 * quarter) { s -= 2 * quarter; sx = -1; sy = -1; }
    else if (s > quarter) { s = 2 * quarter - s; sx = -1; }
    let x = ix - (s - iy - arc), y = hy;
    if (s <= iy) { x = hx; y = s; }
    else if (s <= iy + arc) {
      const ang = (s - iy) / Math.max(r, 0.0001);
      x = ix + Math.cos(ang) * r;
      y = iy + Math.sin(ang) * r;
    }
    return [x * sx, y * sy];
  };

  const items = btns.map(b => {
    const c = document.createElement('canvas');
    c.className = 'btn-light';
    c.setAttribute('aria-hidden', 'true');
    b.insertBefore(c, b.firstChild);
    b.classList.add('has-light');
    return {
      b, c, ctx: c.getContext('2d'),
      w: 0, h: 0, ratio: 1, radius: 0,
      line: [1, 1, 1, 1], base: [0, 0, 0, 0],
      spot: 0, level: IDLE, press: 0,
      ready: false, visible: false, dirty: true, rect: null
    };
  });

  const ptr = { x: 0, y: 0, known: false };
  let raf = 0, last = 0, stale = true;

  const radiusOf = it => Math.min(it.radius, it.w / 2, it.h / 2);
  /* the rest position is the top-left shoulder, where a light from above
     and to the left would catch the rim */
  const restSpot = it => {
    const r = radiusOf(it), inset = r * (1 - Math.SQRT1_2);
    return loopPosition(inset - it.w / 2, it.h / 2 - inset, it.w / 2, it.h / 2, r);
  };

  const measure = it => {
    const w = it.b.offsetWidth, h = it.b.offsetHeight;
    it.w = w; it.h = h;
    if (!w || !h) return;
    it.ratio = Math.min(window.devicePixelRatio || 1, 2);
    /* A full-width button on a phone sits closer to the screen edge than the
       light's 24px margin, and a canvas poking past the edge makes the page
       scroll sideways on iOS. The canvas is cut short on the right instead;
       the shader works from the left edge, so nothing else moves. */
    const room = document.documentElement.clientWidth - it.b.getBoundingClientRect().right;
    it.padR = Math.max(0, Math.min(PAD, Math.floor(room)));
    it.cssW = w + PAD + it.padR;
    it.c.style.width = it.cssW + 'px';
    const cw = Math.max(1, Math.round(it.cssW * it.ratio));
    const ch = Math.max(1, Math.round((h + PAD * 2) * it.ratio));
    if (it.c.width !== cw || it.c.height !== ch) { it.c.width = cw; it.c.height = ch; }
    const cs = getComputedStyle(it.b);
    it.radius = parseFloat(cs.borderTopLeftRadius) || 0;
    it.line = toRgba(cs.getPropertyValue('--sb-line'));
    it.base = toRgba(cs.getPropertyValue('--sb-base'));
    it.dirty = true;
  };

  /* where the light should sit for the current pointer, or null */
  const aim = it => {
    if (!FOLLOW || !ptr.known || !it.rect) return null;
    const rect = it.rect;
    const scale = rect.width / it.w || 1;
    const hx = it.w / 2, hy = it.h / 2;
    const x = (ptr.x - rect.left - rect.width / 2) / scale;
    const y = (rect.top + rect.height / 2 - ptr.y) / scale;
    const dist = Math.hypot(Math.max(Math.abs(x) - hx, 0), Math.max(Math.abs(y) - hy, 0));
    const t = clamp(1 - dist / PROX, 0, 1);
    const near = t * t * (3 - 2 * t);
    const nearest = loopPosition(x, y, hx, hy, radiusOf(it));
    if (dist > 0) return { spot: nearest, near };
    /* inside the button the light drifts back toward the shoulder the
       deeper the pointer goes, so it does not snap across the body */
    const depth = clamp(Math.min(hx - Math.abs(x), hy - Math.abs(y)) / (hy * 0.8), 0, 1);
    const sway = restSpot(it) - (x / hx) * 0.06 - (y / hy) * 0.02;
    const off = sway - nearest - Math.round(sway - nearest);
    return { spot: wrap(nearest + off * depth * depth * (3 - 2 * depth)), near };
  };

  const draw = it => {
    const { w, h, c } = it;
    if (!w || !h) return;
    if (glc.width < c.width || glc.height < c.height) {
      glc.width = Math.max(glc.width, c.width);
      glc.height = Math.max(glc.height, c.height);
    }
    const sx = c.width / it.cssW, sy = c.height / (h + PAD * 2);
    const r = radiusOf(it);
    const [rx, ry] = rimPoint(it.spot, w / 2, h / 2, r);
    const len = Math.hypot(rx, ry);
    const pull = 1 - Math.min(0.35 * (h / 2), len) / Math.max(len, 0.0001);
    gl.viewport(0, 0, c.width, c.height);
    gl.useProgram(prog);
    gl.uniform2f(U.uCenter, (PAD + w / 2) * sx, (PAD + h / 2) * sy);
    gl.uniform2f(U.uHalf, (w / 2) * sx, (h / 2) * sy);
    gl.uniform1f(U.uRadius, r * sx);
    gl.uniform1f(U.uPx, it.ratio);
    gl.uniform1f(U.uSpot, it.spot);
    gl.uniform2f(U.uEntry, rx * pull * sx, ry * pull * sy);
    gl.uniform3f(U.uLineColor, it.line[0], it.line[1], it.line[2]);
    gl.uniform4f(U.uBaseColor, it.base[0], it.base[1], it.base[2], it.base[3]);
    gl.uniform1f(U.uIntensity, INTENSITY * it.line[3] * (it.level + it.press * 0.8));
    gl.uniform2f(U.uWindow, SHINE / 360 + it.press * 0.06, FADE / 360 + 0.0001);
    gl.uniform1f(U.uThickness, THICKNESS);
    gl.uniform1f(U.uGlow, GLOW);
    gl.bindVertexArray(vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
    /* the viewport sits at GL's bottom-left, which is the bottom of the image */
    it.ctx.clearRect(0, 0, c.width, c.height);
    it.ctx.drawImage(glc, 0, glc.height - c.height, c.width, c.height, 0, 0, c.width, c.height);
  };

  const frame = now => {
    raf = 0;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    if (stale) {
      stale = false;
      for (const it of items) if (it.visible) it.rect = it.b.getBoundingClientRect();
    }
    let busy = false;
    for (const it of items) {
      if (!it.visible || !it.w) continue;
      if (!it.ready) { it.spot = restSpot(it); it.level = IDLE; it.ready = true; it.dirty = true; }
      const target = aim(it);
      const steering = !!target && target.near > 0;
      let diff = (steering ? target.spot : restSpot(it)) - it.spot;
      diff -= Math.round(diff);
      it.spot = wrap(it.spot + diff * (1 - Math.exp(-dt * 8)));
      const level = IDLE + (1 - IDLE) * (target ? target.near : 0);
      it.level += (level - it.level) * (1 - Math.exp(-dt * 7));
      it.press *= Math.exp(-dt * 5);
      const settling = Math.abs(diff) > 0.0002 || Math.abs(level - it.level) > 0.001 || it.press > 0.002;
      if (settling || it.dirty) { draw(it); it.dirty = false; }
      if (settling) busy = true;
    }
    if (busy) raf = requestAnimationFrame(frame);
    else last = 0;
  };
  const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };

  const byButton = new Map(items.map(it => [it.b, it]));
  const ro = new ResizeObserver(es => {
    es.forEach(e => { const it = byButton.get(e.target); if (it) measure(it); });
    stale = true;
    wake();
  });
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      const it = byButton.get(e.target);
      if (!it) return;
      it.visible = e.isIntersecting;
      if (it.visible) it.dirty = true;
    });
    stale = true;
    last = 0;
    wake();
  }, { rootMargin: '40px' });
  items.forEach(it => { ro.observe(it.b); io.observe(it.b); });

  addEventListener('pointermove', e => {
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.known = true;
    wake();
  }, { passive: true });
  const end = e => {
    if (e.pointerType === 'mouse') return;
    ptr.known = false;
    wake();
  };
  addEventListener('pointerup', end, { passive: true });
  addEventListener('pointercancel', end, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { ptr.known = false; wake(); });
  items.forEach(it => it.b.addEventListener('pointerdown', e => {
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.known = true;
    it.press = 1;
    stale = true;
    wake();
  }));
  addEventListener('scroll', () => { stale = true; if (ptr.known) wake(); }, { passive: true });
  addEventListener('resize', () => { stale = true; items.forEach(measure); wake(); });
  /* the display face changes the label widths once it has loaded */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { items.forEach(measure); stale = true; wake(); });
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
    /* both reads before any write, so the second read does not force layout */
    const fs = parseFloat(getComputedStyle(items[0]).fontSize) || 34;
    const railH = rail ? rail.clientHeight : 0;
    rowH = Math.max(fs * PITCH, 1);
    /* the selection slot is exactly one row tall, so it frames the active word */
    if (slot) slot.style.setProperty('--slot', Math.round(rowH) + 'px');
    if (rail) {
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
  /* [data-noframe] tiles are real client sites on their own domains. They send
     X-Frame-Options: DENY, so mounting an iframe would render a blocked blank
     box over a perfectly good poster. They stay poster-only and click through. */
  const frames = Array.from(document.querySelectorAll('.ref-frame[data-src]:not([data-noframe])'));
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
   Appears once the hero's own buttons have scrolled away, and stands down
   over the contact section — a floating button covering the form it points
   at is just an obstacle.

   It used to be driven by two IntersectionObservers with percentage root
   margins. On a phone the viewport height changes while scrolling (the
   browser's toolbar slides in and out), so those percentages moved under the
   thumb: around the contact section a small scroll back and forth flipped
   the button in and out a dozen times. Now both edges are measured in pixels
   from the real elements, with a 200px dead band — wider than any toolbar —
   between "hide" and "show again", so the state can only change once per
   real crossing. One passive scroll listener, at most one read per frame. */
(function () {
  const cta = document.getElementById('stickyCta');
  if (!cta) return;
  const row = document.querySelector('.hero-copy .row') || document.querySelector('[data-sticky-anchor]') || document.querySelector('.hero');
  const contact = document.getElementById('kontakt') || document.querySelector('.footer');
  if (!row) return;

  const BAND = 200;
  let pastHero = false, atTarget = false, on = null, queued = false;

  const sync = () => {
    queued = false;
    const vh = innerHeight;
    const rowBottom = row.getBoundingClientRect().bottom;
    const contactTop = contact ? contact.getBoundingClientRect().top : Infinity;
    /* past the hero once its buttons are fully above the screen; back only
       when they are well inside it again */
    if (!pastHero && rowBottom < 0) pastHero = true;
    else if (pastHero && rowBottom > BAND) pastHero = false;
    /* at the form once its section is 200px into the screen; free again only
       when that section has dropped below the screen's bottom edge */
    if (!atTarget && contactTop < vh - BAND) atTarget = true;
    else if (atTarget && contactTop > vh) atTarget = false;

    const next = pastHero && !atTarget;
    if (next === on) return;
    on = next;
    cta.classList.toggle('on', on);
    /* keep it out of the tab order and off screen readers while hidden */
    cta.setAttribute('aria-hidden', on ? 'false' : 'true');
    cta.tabIndex = on ? 0 : -1;
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(sync); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue, { passive: true });
  sync();
})();

/* ── Back to top ──────────────────────────── */
document.getElementById('toTop')?.addEventListener('click', () => scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }));

/* ── Contact form ─────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  const ok = document.getElementById('formSuccess');
  if (!form) return;

  /* a link from another page can name the service, /?sluzba=dohled#kontakt */
  const preKey = new URLSearchParams(location.search).get('sluzba');
  const preSel = document.getElementById('fbundle');
  if (preKey && preSel && window.CSS && CSS.escape &&
      preSel.querySelector('option[value="' + CSS.escape(preKey) + '"]')) preSel.value = preKey;

  /* a section's own call to action says what it is about, so the select
     does not have to ask again */
  document.querySelectorAll('[data-bundle]').forEach(a => a.addEventListener('click', () => {
    const sel = document.getElementById('fbundle');
    if (sel && sel.querySelector('option[value="' + a.dataset.bundle + '"]')) sel.value = a.dataset.bundle;
  }));

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
