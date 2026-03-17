/**
 * Pet Find Me - Internationalization (i18n)
 * Supports: he, en, es, de, pt, fr, ru
 */

const TRANSLATIONS = {
  he: {
    // Meta
    lang: "he", dir: "rtl", locale: "he_IL",
    currency: "ILS", currencySymbol: "₪", country: "IL",
    siteName: "פט פיינד מי",
    metaTitle: "🐾 פט פיינד מי | מוצרים לחיות מחמד מאלי אקספרס",
    metaDesc: "מנוע חיפוש חכם למוצרי חיות מחמד מאלי אקספרס. מזון, צעצועים, אביזרים לכלבים, חתולים ועוד — במחירים הכי טובים עם משלוח לישראל.",
    // Hero
    heroTitle: 'מצאו הכל <strong>לחיית המחמד</strong> שלכם',
    heroSubtitle: 'הבינה המלאכותית שלנו סורקת אלפי מוצרים ומוצאת לכם את הדילים הכי משתלמים לכלבים, חתולים וחיות מחמד',
    searchPlaceholder: "כתבו בעברית — ה-AI ימצא לכם הכל 🐶🐱",
    searchButton: "לחצו לחיפוש",
    aiBadge: "🤖 מונע בינה מלאכותית — מוצא לכם את המחיר הכי טוב",
    banner: '<strong>חיפוש AI חכם:</strong> כתבו מה שבא לכם בעברית והמערכת תמצא את המוצרים הכי רלוונטיים מאלי אקספרס',
    // Popular searches
    popularTitle: "🔥 חיפושים פופולריים",
    chips: [
      { emoji: "🦴", text: "צעצוע לכלב", q: "Dog toy" },
      { emoji: "🐱", text: "מזון לחתולים", q: "Cat food" },
      { emoji: "🐕", text: "רצועה לכלב", q: "Dog leash" },
      { emoji: "🌳", text: "עץ חתולים", q: "Cat tree" },
      { emoji: "🛏️", text: "מיטה לכלב", q: "Dog bed" },
      { emoji: "📍", text: "קולר GPS", q: "GPS collar" },
      { emoji: "💧", text: "מזרקת מים", q: "Water fountain" },
      { emoji: "🧹", text: "חול לחתולים", q: "Cat litter" },
    ],
    // Categories
    categoriesTitle: "🏷️ קטגוריות",
    categories: [
      { emoji: "🐶", name: "כלבים", desc: "מזון, צעצועים, רצועות, מיטות", q: "dog supplies" },
      { emoji: "🐱", name: "חתולים", desc: "מזון, חול, מגרדות, צעצועים", q: "cat supplies" },
      { emoji: "🐦", name: "ציפורים", desc: "כלובים, מזון, אביזרים", q: "bird supplies" },
      { emoji: "🐠", name: "דגים", desc: "אקווריומים, פילטרים, מזון", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "מכרסמים", desc: "כלובים, גלגלים, מזון", q: "hamster supplies" },
      { emoji: "🐰", name: "שפנים", desc: "כלובים, מזון, צעצועים", q: "rabbit supplies" },
    ],
    // Results
    resultsTitle: "תוצאות חיפוש",
    clearBtn: "✕ נקה",
    productsLabel: "מוצרים",
    loadMore: "🐾 טען עוד מוצרים",
    loading: "⏳ טוען...",
    noResults: "לא נמצאו תוצאות. נסו חיפוש אחר!",
    noMoreProducts: "אין עוד מוצרים 🐾",
    aiScanning: "ה-AI סורק אלפי מוצרים ומוצא לכם את הדילים הכי טובים... 🐾",
    orders: "הזמנות",
    buyNow: "🛒 לרכישה",
    freeShipping: "משלוח חינם",
    shipping: "משלוח",
    // Features
    featuresTitle: "🤖 איך הבינה המלאכותית עובדת בשבילכם?",
    features: [
      { emoji: "🧠", title: "AI שמבין את השפה שלכם", desc: "כתבו בשפה שלכם — ה-AI מתרגם, מבין את הכוונה ומוצא בדיוק מה שחיפשתם" },
      { emoji: "💎", title: "סינון חכם", desc: "הבינה המלאכותית סורקת אלפי מוצרים ומציגה רק את הדילים הכי משתלמים עם דירוגים גבוהים" },
      { emoji: "🚀", title: "מחירים שלא תמצאו", desc: "ישירות מאלי אקספרס עם משלוח אליכם — חסכו עד 80% מהמחירים" },
    ],
    // Chat
    chatName: "פאו",
    chatWelcome: "🐾 היי! אני פאו, היועצת שלכם למוצרי חיות מחמד!\nספרו לי מה יש לכם בבית — כלב? חתול? משהו אחר?\nואני אמצא לכם את הדילים הכי טובים מאלי אקספרס 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "מה כדאי לקנות לכלב?" },
      { emoji: "🐱", text: "צעצועים לחתול" },
      { emoji: "🎁", text: "מתנה לבעל כלב" },
      { emoji: "🛏️", text: "מיטה לכלב קטן" },
    ],
    chatPlaceholder: "שאלו את פאו...",
    // Footer
    footerText: "מנוע חיפוש AI חכם למוצרי חיות מחמד מאלי אקספרס",
    footerPrivacy: "מדיניות פרטיות",
    footerTerms: "תנאי שימוש",
    footerCopy: "© 2026 Pet Find Me. כל הזכויות שמורות.",
    // Language switcher
    langLabel: "שפה",
    // Install
    installBtn: "התקנה",
    installHow: "איך מתקינים?",
    installTitle: "התקינו את פט פיינד מי!",
    installSubtitle: "חיפוש מוצרים מהיר יותר ישירות מהנייד 📲",
    chatFabLabel: "💬 שאלו את פאו!",
  },

  en: {
    lang: "en", dir: "ltr", locale: "en_US",
    currency: "USD", currencySymbol: "$", country: "US",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Best Pet Products from AliExpress",
    metaDesc: "Smart AI search engine for pet products on AliExpress. Food, toys, accessories for dogs, cats & more — at the best prices with free shipping.",
    heroTitle: 'Find Everything for <strong>Your Pet</strong>',
    heroSubtitle: 'Our AI scans thousands of products and finds you the best deals for dogs, cats and all pets',
    searchPlaceholder: "Search for pet products... 🐶🐱",
    searchButton: "Search",
    aiBadge: "🤖 Powered by AI — finds you the best deals",
    banner: '<strong>Smart AI Search:</strong> Type what you need and our AI will find the most relevant products from AliExpress',
    popularTitle: "🔥 Popular Searches",
    chips: [
      { emoji: "🦴", text: "Dog Toy", q: "Dog toy" },
      { emoji: "🐱", text: "Cat Food", q: "Cat food" },
      { emoji: "🐕", text: "Dog Leash", q: "Dog leash" },
      { emoji: "🌳", text: "Cat Tree", q: "Cat tree" },
      { emoji: "🛏️", text: "Dog Bed", q: "Dog bed" },
      { emoji: "📍", text: "GPS Collar", q: "GPS collar" },
      { emoji: "💧", text: "Water Fountain", q: "Water fountain pet" },
      { emoji: "🧹", text: "Cat Litter", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Categories",
    categories: [
      { emoji: "🐶", name: "Dogs", desc: "Food, toys, leashes, beds", q: "dog supplies" },
      { emoji: "🐱", name: "Cats", desc: "Food, litter, scratchers, toys", q: "cat supplies" },
      { emoji: "🐦", name: "Birds", desc: "Cages, food, accessories", q: "bird supplies" },
      { emoji: "🐠", name: "Fish", desc: "Aquariums, filters, food", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Small Pets", desc: "Cages, wheels, food", q: "hamster supplies" },
      { emoji: "🐰", name: "Rabbits", desc: "Cages, food, toys", q: "rabbit supplies" },
    ],
    resultsTitle: "Search Results",
    clearBtn: "✕ Clear",
    productsLabel: "products",
    loadMore: "🐾 Load More Products",
    loading: "⏳ Loading...",
    noResults: "No results found. Try a different search!",
    noMoreProducts: "No more products 🐾",
    aiScanning: "AI is scanning thousands of products to find you the best deals... 🐾",
    orders: "orders",
    buyNow: "🛒 Buy Now",
    freeShipping: "Free Shipping",
    shipping: "Shipping",
    featuresTitle: "🤖 How Our AI Works for You",
    features: [
      { emoji: "🧠", title: "AI That Understands You", desc: "Type naturally — our AI translates, understands context, and finds exactly what you need" },
      { emoji: "💎", title: "Smart Filtering", desc: "AI scans thousands of products and shows only the best deals with high ratings" },
      { emoji: "🚀", title: "Unbeatable Prices", desc: "Direct from AliExpress — save up to 80% compared to retail stores" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 Hi! I'm Paw, your pet product advisor!\nTell me about your pet — dog? cat? something else?\nI'll find you the best deals on AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "What should I buy for my dog?" },
      { emoji: "🐱", text: "Toys for my cat" },
      { emoji: "🎁", text: "Gift for a pet owner" },
      { emoji: "🛏️", text: "Bed for a small dog" },
    ],
    chatPlaceholder: "Ask Paw...",
    footerText: "Smart AI search engine for pet products from AliExpress",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerCopy: "© 2026 Pet Find Me. All rights reserved.",
    langLabel: "Language",
    installBtn: "Install",
    installHow: "How to install?",
    installTitle: "Install Pet Find Me!",
    installSubtitle: "Search products faster directly from your phone 📲",
    chatFabLabel: "💬 Ask Paw!",
  },

  es: {
    lang: "es", dir: "ltr", locale: "es_ES",
    currency: "EUR", currencySymbol: "€", country: "ES",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Productos para Mascotas de AliExpress",
    metaDesc: "Buscador inteligente con IA para productos de mascotas en AliExpress. Comida, juguetes, accesorios para perros, gatos y más — a los mejores precios.",
    heroTitle: 'Encuentra Todo para <strong>Tu Mascota</strong>',
    heroSubtitle: 'Nuestra IA escanea miles de productos y te encuentra las mejores ofertas para perros, gatos y todas las mascotas',
    searchPlaceholder: "Busca productos para mascotas... 🐶🐱",
    searchButton: "Buscar",
    aiBadge: "🤖 Impulsado por IA — encuentra las mejores ofertas",
    banner: '<strong>Búsqueda IA:</strong> Escribe lo que necesitas y nuestra IA encontrará los productos más relevantes de AliExpress',
    popularTitle: "🔥 Búsquedas Populares",
    chips: [
      { emoji: "🦴", text: "Juguete perro", q: "Dog toy" },
      { emoji: "🐱", text: "Comida gato", q: "Cat food" },
      { emoji: "🐕", text: "Correa perro", q: "Dog leash" },
      { emoji: "🌳", text: "Árbol gato", q: "Cat tree" },
      { emoji: "🛏️", text: "Cama perro", q: "Dog bed" },
      { emoji: "📍", text: "Collar GPS", q: "GPS collar" },
      { emoji: "💧", text: "Fuente de agua", q: "Water fountain pet" },
      { emoji: "🧹", text: "Arena gato", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Categorías",
    categories: [
      { emoji: "🐶", name: "Perros", desc: "Comida, juguetes, correas, camas", q: "dog supplies" },
      { emoji: "🐱", name: "Gatos", desc: "Comida, arena, rascadores, juguetes", q: "cat supplies" },
      { emoji: "🐦", name: "Aves", desc: "Jaulas, comida, accesorios", q: "bird supplies" },
      { emoji: "🐠", name: "Peces", desc: "Acuarios, filtros, comida", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Roedores", desc: "Jaulas, ruedas, comida", q: "hamster supplies" },
      { emoji: "🐰", name: "Conejos", desc: "Jaulas, comida, juguetes", q: "rabbit supplies" },
    ],
    resultsTitle: "Resultados de Búsqueda",
    clearBtn: "✕ Limpiar",
    productsLabel: "productos",
    loadMore: "🐾 Cargar Más Productos",
    loading: "⏳ Cargando...",
    noResults: "No se encontraron resultados. ¡Prueba otra búsqueda!",
    noMoreProducts: "No hay más productos 🐾",
    aiScanning: "La IA está escaneando miles de productos para encontrar las mejores ofertas... 🐾",
    orders: "pedidos",
    buyNow: "🛒 Comprar",
    freeShipping: "Envío Gratis",
    shipping: "Envío",
    featuresTitle: "🤖 ¿Cómo Funciona Nuestra IA?",
    features: [
      { emoji: "🧠", title: "IA Que Te Entiende", desc: "Escribe en español — la IA traduce, entiende y encuentra exactamente lo que buscas" },
      { emoji: "💎", title: "Filtrado Inteligente", desc: "La IA analiza miles de productos y muestra solo las mejores ofertas con calificaciones altas" },
      { emoji: "🚀", title: "Precios Imbatibles", desc: "Directo de AliExpress — ahorra hasta un 80% comparado con tiendas locales" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 ¡Hola! Soy Paw, tu asesora de productos para mascotas.\n¿Qué mascota tienes? ¿Perro? ¿Gato? ¿Algo más?\nTe encontraré las mejores ofertas en AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "¿Qué comprar para mi perro?" },
      { emoji: "🐱", text: "Juguetes para gato" },
      { emoji: "🎁", text: "Regalo para dueño de mascota" },
      { emoji: "🛏️", text: "Cama para perro pequeño" },
    ],
    chatPlaceholder: "Pregunta a Paw...",
    footerText: "Buscador inteligente con IA de productos para mascotas en AliExpress",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Uso",
    footerCopy: "© 2026 Pet Find Me. Todos los derechos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "¿Cómo instalar?",
    installTitle: "¡Instala Pet Find Me!",
    installSubtitle: "Busca productos más rápido desde tu móvil 📲",
    chatFabLabel: "💬 ¡Pregunta a Paw!",
  },

  de: {
    lang: "de", dir: "ltr", locale: "de_DE",
    currency: "EUR", currencySymbol: "€", country: "DE",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Haustierprodukte von AliExpress",
    metaDesc: "Intelligente KI-Suchmaschine für Haustierprodukte auf AliExpress. Futter, Spielzeug, Zubehör für Hunde, Katzen & mehr — zu den besten Preisen.",
    heroTitle: 'Finden Sie Alles für <strong>Ihr Haustier</strong>',
    heroSubtitle: 'Unsere KI durchsucht tausende Produkte und findet die besten Angebote für Hunde, Katzen und alle Haustiere',
    searchPlaceholder: "Haustierprodukte suchen... 🐶🐱",
    searchButton: "Suchen",
    aiBadge: "🤖 KI-gestützt — findet die besten Angebote",
    banner: '<strong>Intelligente KI-Suche:</strong> Geben Sie ein, was Sie brauchen, und unsere KI findet die relevantesten Produkte auf AliExpress',
    popularTitle: "🔥 Beliebte Suchen",
    chips: [
      { emoji: "🦴", text: "Hundespielzeug", q: "Dog toy" },
      { emoji: "🐱", text: "Katzenfutter", q: "Cat food" },
      { emoji: "🐕", text: "Hundeleine", q: "Dog leash" },
      { emoji: "🌳", text: "Katzenbaum", q: "Cat tree" },
      { emoji: "🛏️", text: "Hundebett", q: "Dog bed" },
      { emoji: "📍", text: "GPS-Halsband", q: "GPS collar" },
      { emoji: "💧", text: "Trinkbrunnen", q: "Water fountain pet" },
      { emoji: "🧹", text: "Katzenstreu", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Kategorien",
    categories: [
      { emoji: "🐶", name: "Hunde", desc: "Futter, Spielzeug, Leinen, Betten", q: "dog supplies" },
      { emoji: "🐱", name: "Katzen", desc: "Futter, Streu, Kratzbäume, Spielzeug", q: "cat supplies" },
      { emoji: "🐦", name: "Vögel", desc: "Käfige, Futter, Zubehör", q: "bird supplies" },
      { emoji: "🐠", name: "Fische", desc: "Aquarien, Filter, Futter", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Nager", desc: "Käfige, Laufräder, Futter", q: "hamster supplies" },
      { emoji: "🐰", name: "Kaninchen", desc: "Käfige, Futter, Spielzeug", q: "rabbit supplies" },
    ],
    resultsTitle: "Suchergebnisse",
    clearBtn: "✕ Löschen",
    productsLabel: "Produkte",
    loadMore: "🐾 Mehr Produkte Laden",
    loading: "⏳ Laden...",
    noResults: "Keine Ergebnisse gefunden. Versuchen Sie eine andere Suche!",
    noMoreProducts: "Keine weiteren Produkte 🐾",
    aiScanning: "Die KI durchsucht tausende Produkte nach den besten Angeboten... 🐾",
    orders: "Bestellungen",
    buyNow: "🛒 Kaufen",
    freeShipping: "Kostenloser Versand",
    shipping: "Versand",
    featuresTitle: "🤖 Wie Unsere KI Für Sie Arbeitet",
    features: [
      { emoji: "🧠", title: "KI Versteht Sie", desc: "Schreiben Sie auf Deutsch — die KI übersetzt, versteht und findet genau das Richtige" },
      { emoji: "💎", title: "Intelligente Filterung", desc: "Die KI analysiert tausende Produkte und zeigt nur die besten Angebote mit Top-Bewertungen" },
      { emoji: "🚀", title: "Unschlagbare Preise", desc: "Direkt von AliExpress — sparen Sie bis zu 80% gegenüber lokalen Geschäften" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 Hallo! Ich bin Paw, Ihr Haustier-Berater!\nWelches Haustier haben Sie? Hund? Katze? Etwas anderes?\nIch finde die besten Angebote auf AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "Was für meinen Hund kaufen?" },
      { emoji: "🐱", text: "Spielzeug für Katze" },
      { emoji: "🎁", text: "Geschenk für Tierbesitzer" },
      { emoji: "🛏️", text: "Bett für kleinen Hund" },
    ],
    chatPlaceholder: "Frag Paw...",
    footerText: "Intelligente KI-Suchmaschine für Haustierprodukte auf AliExpress",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
    footerCopy: "© 2026 Pet Find Me. Alle Rechte vorbehalten.",
    langLabel: "Sprache",
    installBtn: "Installieren",
    installHow: "Wie installieren?",
    installTitle: "Installieren Sie Pet Find Me!",
    installSubtitle: "Suchen Sie Produkte schneller direkt vom Handy 📲",
    chatFabLabel: "💬 Frag Paw!",
  },

  pt: {
    lang: "pt", dir: "ltr", locale: "pt_BR",
    currency: "BRL", currencySymbol: "R$", country: "BR",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Produtos para Pets do AliExpress",
    metaDesc: "Buscador inteligente com IA para produtos de pets no AliExpress. Ração, brinquedos, acessórios para cães, gatos e mais — nos melhores preços.",
    heroTitle: 'Encontre Tudo para o <strong>Seu Pet</strong>',
    heroSubtitle: 'Nossa IA analisa milhares de produtos e encontra as melhores ofertas para cachorros, gatos e todos os pets',
    searchPlaceholder: "Busque produtos para pets... 🐶🐱",
    searchButton: "Buscar",
    aiBadge: "🤖 Movido por IA — encontra as melhores ofertas",
    banner: '<strong>Busca IA:</strong> Digite o que precisa e nossa IA encontrará os produtos mais relevantes no AliExpress',
    popularTitle: "🔥 Buscas Populares",
    chips: [
      { emoji: "🦴", text: "Brinquedo cachorro", q: "Dog toy" },
      { emoji: "🐱", text: "Ração gato", q: "Cat food" },
      { emoji: "🐕", text: "Coleira cachorro", q: "Dog leash" },
      { emoji: "🌳", text: "Arranhador gato", q: "Cat tree" },
      { emoji: "🛏️", text: "Cama cachorro", q: "Dog bed" },
      { emoji: "📍", text: "Coleira GPS", q: "GPS collar" },
      { emoji: "💧", text: "Fonte de água", q: "Water fountain pet" },
      { emoji: "🧹", text: "Areia para gato", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Categorias",
    categories: [
      { emoji: "🐶", name: "Cães", desc: "Ração, brinquedos, coleiras, camas", q: "dog supplies" },
      { emoji: "🐱", name: "Gatos", desc: "Ração, areia, arranhadores, brinquedos", q: "cat supplies" },
      { emoji: "🐦", name: "Aves", desc: "Gaiolas, ração, acessórios", q: "bird supplies" },
      { emoji: "🐠", name: "Peixes", desc: "Aquários, filtros, ração", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Roedores", desc: "Gaiolas, rodas, ração", q: "hamster supplies" },
      { emoji: "🐰", name: "Coelhos", desc: "Gaiolas, ração, brinquedos", q: "rabbit supplies" },
    ],
    resultsTitle: "Resultados da Busca",
    clearBtn: "✕ Limpar",
    productsLabel: "produtos",
    loadMore: "🐾 Carregar Mais Produtos",
    loading: "⏳ Carregando...",
    noResults: "Nenhum resultado encontrado. Tente outra busca!",
    noMoreProducts: "Não há mais produtos 🐾",
    aiScanning: "A IA está escaneando milhares de produtos para encontrar as melhores ofertas... 🐾",
    orders: "pedidos",
    buyNow: "🛒 Comprar",
    freeShipping: "Frete Grátis",
    shipping: "Frete",
    featuresTitle: "🤖 Como Nossa IA Trabalha Para Você",
    features: [
      { emoji: "🧠", title: "IA Que Entende Você", desc: "Escreva em português — a IA traduz, entende e encontra exatamente o que você procura" },
      { emoji: "💎", title: "Filtragem Inteligente", desc: "A IA analisa milhares de produtos e mostra apenas as melhores ofertas com avaliações altas" },
      { emoji: "🚀", title: "Preços Imbatíveis", desc: "Direto do AliExpress — economize até 80% comparado com lojas locais" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 Oi! Eu sou o Paw, seu consultor de produtos para pets!\nQue pet você tem? Cachorro? Gato? Outro?\nVou encontrar as melhores ofertas no AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "O que comprar pro meu cachorro?" },
      { emoji: "🐱", text: "Brinquedos para gato" },
      { emoji: "🎁", text: "Presente para dono de pet" },
      { emoji: "🛏️", text: "Cama para cachorro pequeno" },
    ],
    chatPlaceholder: "Pergunte ao Paw...",
    footerText: "Buscador inteligente com IA de produtos para pets no AliExpress",
    footerPrivacy: "Política de Privacidade",
    footerTerms: "Termos de Uso",
    footerCopy: "© 2026 Pet Find Me. Todos os direitos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "Como instalar?",
    installTitle: "Instale o Pet Find Me!",
    installSubtitle: "Busque produtos mais rápido direto do celular 📲",
    chatFabLabel: "💬 Pergunte ao Paw!",
  },

  fr: {
    lang: "fr", dir: "ltr", locale: "fr_FR",
    currency: "EUR", currencySymbol: "€", country: "FR",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Produits pour Animaux sur AliExpress",
    metaDesc: "Moteur de recherche IA pour produits animaliers sur AliExpress. Nourriture, jouets, accessoires pour chiens, chats et plus — aux meilleurs prix.",
    heroTitle: 'Trouvez Tout pour <strong>Votre Animal</strong>',
    heroSubtitle: 'Notre IA analyse des milliers de produits et trouve les meilleures offres pour chiens, chats et tous les animaux',
    searchPlaceholder: "Cherchez des produits pour animaux... 🐶🐱",
    searchButton: "Rechercher",
    aiBadge: "🤖 Propulsé par l'IA — trouve les meilleures offres",
    banner: "<strong>Recherche IA:</strong> Tapez ce dont vous avez besoin et notre IA trouvera les produits les plus pertinents sur AliExpress",
    popularTitle: "🔥 Recherches Populaires",
    chips: [
      { emoji: "🦴", text: "Jouet chien", q: "Dog toy" },
      { emoji: "🐱", text: "Nourriture chat", q: "Cat food" },
      { emoji: "🐕", text: "Laisse chien", q: "Dog leash" },
      { emoji: "🌳", text: "Arbre à chat", q: "Cat tree" },
      { emoji: "🛏️", text: "Lit chien", q: "Dog bed" },
      { emoji: "📍", text: "Collier GPS", q: "GPS collar" },
      { emoji: "💧", text: "Fontaine à eau", q: "Water fountain pet" },
      { emoji: "🧹", text: "Litière chat", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Catégories",
    categories: [
      { emoji: "🐶", name: "Chiens", desc: "Nourriture, jouets, laisses, lits", q: "dog supplies" },
      { emoji: "🐱", name: "Chats", desc: "Nourriture, litière, griffoirs, jouets", q: "cat supplies" },
      { emoji: "🐦", name: "Oiseaux", desc: "Cages, nourriture, accessoires", q: "bird supplies" },
      { emoji: "🐠", name: "Poissons", desc: "Aquariums, filtres, nourriture", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Rongeurs", desc: "Cages, roues, nourriture", q: "hamster supplies" },
      { emoji: "🐰", name: "Lapins", desc: "Cages, nourriture, jouets", q: "rabbit supplies" },
    ],
    resultsTitle: "Résultats de Recherche",
    clearBtn: "✕ Effacer",
    productsLabel: "produits",
    loadMore: "🐾 Charger Plus de Produits",
    loading: "⏳ Chargement...",
    noResults: "Aucun résultat trouvé. Essayez une autre recherche !",
    noMoreProducts: "Plus de produits 🐾",
    aiScanning: "L'IA analyse des milliers de produits pour trouver les meilleures offres... 🐾",
    orders: "commandes",
    buyNow: "🛒 Acheter",
    freeShipping: "Livraison Gratuite",
    shipping: "Livraison",
    featuresTitle: "🤖 Comment Notre IA Travaille Pour Vous",
    features: [
      { emoji: "🧠", title: "IA Qui Vous Comprend", desc: "Écrivez en français — l'IA traduit, comprend et trouve exactement ce que vous cherchez" },
      { emoji: "💎", title: "Filtrage Intelligent", desc: "L'IA analyse des milliers de produits et affiche uniquement les meilleures offres" },
      { emoji: "🚀", title: "Prix Imbattables", desc: "Direct d'AliExpress — économisez jusqu'à 80% par rapport aux magasins locaux" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 Salut ! Je suis Paw, votre conseiller produits pour animaux !\nQuel animal avez-vous ? Chien ? Chat ? Autre ?\nJe vous trouverai les meilleures offres sur AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "Quoi acheter pour mon chien ?" },
      { emoji: "🐱", text: "Jouets pour chat" },
      { emoji: "🎁", text: "Cadeau pour propriétaire" },
      { emoji: "🛏️", text: "Lit pour petit chien" },
    ],
    chatPlaceholder: "Demandez à Paw...",
    footerText: "Moteur de recherche IA intelligent pour produits animaliers sur AliExpress",
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions d'Utilisation",
    footerCopy: "© 2026 Pet Find Me. Tous droits réservés.",
    langLabel: "Langue",
    installBtn: "Installer",
    installHow: "Comment installer ?",
    installTitle: "Installez Pet Find Me !",
    installSubtitle: "Cherchez des produits plus vite depuis votre mobile 📲",
    chatFabLabel: "💬 Demandez à Paw !",
  },

  ru: {
    lang: "ru", dir: "ltr", locale: "ru_RU",
    currency: "RUB", currencySymbol: "₽", country: "RU",
    siteName: "Pet Find Me",
    metaTitle: "🐾 Pet Find Me | Товары для Животных с AliExpress",
    metaDesc: "Умный поисковик с ИИ для товаров для домашних животных на AliExpress. Корм, игрушки, аксессуары для собак, кошек и других — по лучшим ценам.",
    heroTitle: 'Найдите Всё для <strong>Вашего Питомца</strong>',
    heroSubtitle: 'Наш ИИ сканирует тысячи товаров и находит лучшие предложения для собак, кошек и всех питомцев',
    searchPlaceholder: "Ищите товары для питомцев... 🐶🐱",
    searchButton: "Искать",
    aiBadge: "🤖 На основе ИИ — находит лучшие предложения",
    banner: '<strong>Умный поиск ИИ:</strong> Введите что нужно, и наш ИИ найдёт самые подходящие товары на AliExpress',
    popularTitle: "🔥 Популярные Запросы",
    chips: [
      { emoji: "🦴", text: "Игрушка для собаки", q: "Dog toy" },
      { emoji: "🐱", text: "Корм для кошки", q: "Cat food" },
      { emoji: "🐕", text: "Поводок для собаки", q: "Dog leash" },
      { emoji: "🌳", text: "Когтеточка", q: "Cat tree" },
      { emoji: "🛏️", text: "Лежанка для собаки", q: "Dog bed" },
      { emoji: "📍", text: "GPS ошейник", q: "GPS collar" },
      { emoji: "💧", text: "Поилка-фонтан", q: "Water fountain pet" },
      { emoji: "🧹", text: "Наполнитель для кошки", q: "Cat litter" },
    ],
    categoriesTitle: "🏷️ Категории",
    categories: [
      { emoji: "🐶", name: "Собаки", desc: "Корм, игрушки, поводки, лежанки", q: "dog supplies" },
      { emoji: "🐱", name: "Кошки", desc: "Корм, наполнитель, когтеточки, игрушки", q: "cat supplies" },
      { emoji: "🐦", name: "Птицы", desc: "Клетки, корм, аксессуары", q: "bird supplies" },
      { emoji: "🐠", name: "Рыбки", desc: "Аквариумы, фильтры, корм", q: "aquarium fish supplies" },
      { emoji: "🐹", name: "Грызуны", desc: "Клетки, колёса, корм", q: "hamster supplies" },
      { emoji: "🐰", name: "Кролики", desc: "Клетки, корм, игрушки", q: "rabbit supplies" },
    ],
    resultsTitle: "Результаты Поиска",
    clearBtn: "✕ Очистить",
    productsLabel: "товаров",
    loadMore: "🐾 Загрузить Ещё",
    loading: "⏳ Загрузка...",
    noResults: "Ничего не найдено. Попробуйте другой запрос!",
    noMoreProducts: "Больше нет товаров 🐾",
    aiScanning: "ИИ сканирует тысячи товаров в поисках лучших предложений... 🐾",
    orders: "заказов",
    buyNow: "🛒 Купить",
    freeShipping: "Бесплатная Доставка",
    shipping: "Доставка",
    featuresTitle: "🤖 Как Наш ИИ Работает Для Вас",
    features: [
      { emoji: "🧠", title: "ИИ Понимает Вас", desc: "Пишите на русском — ИИ переведёт, поймёт и найдёт именно то, что вам нужно" },
      { emoji: "💎", title: "Умная Фильтрация", desc: "ИИ анализирует тысячи товаров и показывает только лучшие предложения с высокими рейтингами" },
      { emoji: "🚀", title: "Непревзойдённые Цены", desc: "Напрямую с AliExpress — экономьте до 80% по сравнению с местными магазинами" },
    ],
    chatName: "Paw",
    chatWelcome: "🐾 Привет! Я Paw, ваш консультант по товарам для питомцев!\nКакой у вас питомец? Собака? Кошка? Что-то другое?\nЯ найду лучшие предложения на AliExpress 🛒",
    chatSuggestions: [
      { emoji: "🐶", text: "Что купить для собаки?" },
      { emoji: "🐱", text: "Игрушки для кошки" },
      { emoji: "🎁", text: "Подарок владельцу питомца" },
      { emoji: "🛏️", text: "Лежанка для маленькой собаки" },
    ],
    chatPlaceholder: "Спросите Paw...",
    footerText: "Умный ИИ-поисковик товаров для домашних животных на AliExpress",
    footerPrivacy: "Политика Конфиденциальности",
    footerTerms: "Условия Использования",
    footerCopy: "© 2026 Pet Find Me. Все права защищены.",
    langLabel: "Язык",
    installBtn: "Установить",
    installHow: "Как установить?",
    installTitle: "Установите Pet Find Me!",
    installSubtitle: "Ищите товары быстрее прямо с телефона 📲",
    chatFabLabel: "💬 Спросите Paw!",
  },
};

// Country → language mapping for auto-detection
const COUNTRY_LANG_MAP = {
  IL: "he", US: "en", GB: "en", CA: "en", AU: "en", NZ: "en", IE: "en", ZA: "en",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  DE: "de", AT: "de", CH: "de",
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
  FR: "fr", BE: "fr", SN: "fr", CI: "fr", MA: "fr", TN: "fr",
  RU: "ru", UA: "ru", KZ: "ru", BY: "ru",
};

// Language flag emojis
const LANG_FLAGS = {
  he: "🇮🇱", en: "🇺🇸", es: "🇪🇸", de: "🇩🇪", pt: "🇧🇷", fr: "🇫🇷", ru: "🇷🇺"
};

const LANG_NAMES = {
  he: "עברית", en: "English", es: "Español", de: "Deutsch", pt: "Português", fr: "Français", ru: "Русский"
};

/**
 * Detect language from URL params, localStorage, or browser
 */
function detectLanguage() {
  // 1. URL parameter ?lang=xx
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && TRANSLATIONS[urlLang]) return urlLang;

  // 2. LocalStorage preference
  const saved = localStorage.getItem("petfindme_lang");
  if (saved && TRANSLATIONS[saved]) return saved;

  // 3. Browser language
  const browserLang = (navigator.language || "").split("-")[0].toLowerCase();
  if (TRANSLATIONS[browserLang]) return browserLang;

  // 4. Default to English (biggest market)
  return "en";
}

/**
 * Get translation object for current language
 */
function getTranslation(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS["en"];
}

/**
 * Apply translations to the page
 */
function applyLanguage(lang) {
  const t = getTranslation(lang);

  // Save preference
  localStorage.setItem("petfindme_lang", lang);

  // Update HTML attributes
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  // Update meta tags
  document.title = t.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  // Hero section
  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;

  const heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle || '';

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    const btnText = searchBtn.querySelector(".search-btn-text");
    if (btnText) btnText.textContent = t.searchButton;
  }

  // AI badge
  const aiBadge = document.getElementById("aiBadge");
  if (aiBadge) aiBadge.textContent = t.aiBadge;

  // Banner
  const banner = document.getElementById("bannerText");
  if (banner) banner.innerHTML = t.banner;

  // Popular searches
  const popularTitle = document.getElementById("popularTitle");
  if (popularTitle) popularTitle.textContent = t.popularTitle;

  const chipsContainer = document.getElementById("chipsContainer");
  if (chipsContainer && t.chips) {
    chipsContainer.innerHTML = t.chips.map(c =>
      `<button class="chip" onclick="searchFromChip('${c.q}')">${c.emoji} ${c.text}</button>`
    ).join("");
  }

  // Categories
  const catsTitle = document.getElementById("categoriesTitle");
  if (catsTitle) catsTitle.textContent = t.categoriesTitle;

  const catsGrid = document.getElementById("categoriesGrid");
  if (catsGrid && t.categories) {
    catsGrid.innerHTML = t.categories.map(c =>
      `<div class="category-card" onclick="searchFromChip('${c.q}')">
        <div class="category-icon">${c.emoji}</div>
        <div class="category-name">${c.name}</div>
        <div class="category-desc">${c.desc}</div>
      </div>`
    ).join("");
  }

  // Results area text
  const resultsTitle = document.getElementById("resultsTitle");
  if (resultsTitle) resultsTitle.textContent = t.resultsTitle;

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.querySelector(".load-more-text").textContent = t.loadMore;
  }

  // Features section
  const featuresTitle = document.getElementById("featuresTitle");
  if (featuresTitle) featuresTitle.textContent = t.featuresTitle;

  const featuresGrid = document.getElementById("featuresGrid");
  if (featuresGrid && t.features) {
    featuresGrid.innerHTML = t.features.map(f =>
      `<div class="feature-card">
        <div class="feature-icon">${f.emoji}</div>
        <div class="feature-title">${f.title}</div>
        <div class="feature-desc">${f.desc}</div>
      </div>`
    ).join("");
  }

  // Loading & no results
  const loadingText = document.getElementById("loadingText");
  if (loadingText) loadingText.textContent = t.aiScanning;

  const noResultsText = document.getElementById("noResultsText");
  if (noResultsText) noResultsText.textContent = t.noResults;

  // Load more button
  const loadMoreText = document.querySelector(".load-more-text");
  if (loadMoreText) loadMoreText.textContent = t.loadMore;

  // Footer
  const footerDesc = document.getElementById("footerDesc");
  if (footerDesc) footerDesc.textContent = t.footerText;
  const footerPrivacy = document.getElementById("footerPrivacy");
  if (footerPrivacy) footerPrivacy.textContent = t.footerPrivacy;
  const footerTerms = document.getElementById("footerTerms");
  if (footerTerms) footerTerms.textContent = t.footerTerms;
  const footerCopy = document.getElementById("footerCopy");
  if (footerCopy) footerCopy.textContent = t.footerCopy;

  // Chat fab label
  const chatFabLabel = document.querySelector(".chat-fab-label");
  if (chatFabLabel) {
    chatFabLabel.textContent = t.chatFabLabel || `💬 Ask ${t.chatName}!`;
  }

  // Hide Hebrew-only sections when not Hebrew
  const seoContent = document.getElementById("seoContent");
  if (seoContent) seoContent.style.display = lang === "he" ? "" : "none";
  const faqSection = document.getElementById("faqSection");
  if (faqSection) faqSection.style.display = lang === "he" ? "" : "none";

  // Install banner
  const installTitle = document.querySelector(".install-banner-title");
  if (installTitle) installTitle.textContent = t.installTitle || "Install Pet Find Me!";
  const installSubtitle = document.querySelector(".install-banner-subtitle");
  if (installSubtitle) installSubtitle.textContent = t.installSubtitle || "Search products faster directly from your phone 📲";
  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.textContent = t.installBtn || "Install";

  // WhatsApp fab
  const whatsappFab = document.getElementById("whatsappFab");
  if (whatsappFab) whatsappFab.style.display = lang === "he" ? "" : "none";

  // Language switcher highlight
  document.querySelectorAll(".lang-option").forEach(el => {
    el.classList.toggle("active", el.dataset.lang === lang);
  });

  // Store current language globally
  window.currentLang = lang;
  window.currentTranslation = t;
}

/**
 * Build language switcher HTML
 */
function buildLanguageSwitcher() {
  const langs = Object.keys(TRANSLATIONS);
  return `<div class="lang-switcher" id="langSwitcher">
    ${langs.map(l => `<button class="lang-option" data-lang="${l}" onclick="switchLanguage('${l}')" title="${LANG_NAMES[l]}">${LANG_FLAGS[l]}</button>`).join("")}
  </div>`;
}

/**
 * Switch language
 */
function switchLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  applyLanguage(lang);

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
}

// Export for use
if (typeof module !== "undefined") {
  module.exports = { TRANSLATIONS, detectLanguage, applyLanguage, switchLanguage, buildLanguageSwitcher };
}
