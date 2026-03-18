/**
 * HomeFind - Internationalization (i18n)
 * Home Decor & Organization Search Engine
 * Supports: he, en, es, de, pt, fr, ru
 */

const TRANSLATIONS = {
  he: {
    // Meta
    lang: "he", dir: "rtl", locale: "he_IL",
    currency: "ILS", currencySymbol: "₪", country: "IL",
    siteName: "הום פיינד",
    metaTitle: "🏠 הום פיינד | מוצרי עיצוב הבית וארגון מאלי אקספרס",
    metaDesc: "מנוע חיפוש חכם למוצרי עיצוב הבית, ארגון ודקורציה מאלי אקספרס. מדפים, מארגנים, תאורה, צמחים ועוד — במחירים הכי טובים עם משלוח לישראל.",
    // Hero
    heroTitle: 'מצאו הכל <strong>לעיצוב הבית</strong> שלכם',
    heroSubtitle: 'הבינה המלאכותית שלנו סורקת אלפי מוצרים ומוצאת לכם את הדילים הכי משתלמים לעיצוב, ארגון ודקורציה',
    searchPlaceholder: "כתבו בעברית — ה-AI ימצא לכם הכל 🏠✨",
    searchButton: "לחצו לחיפוש",
    aiBadge: "🤖 מונע בינה מלאכותית — מוצא לכם את המחיר הכי טוב",
    banner: '<strong>חיפוש AI חכם:</strong> כתבו מה שבא לכם בעברית והמערכת תמצא את המוצרים הכי רלוונטיים מאלי אקספרס',
    // Popular searches
    popularTitle: "🔥 חיפושים פופולריים",
    chips: [
      { emoji: "📦", text: "מארגן מגירות", q: "drawer organizer" },
      { emoji: "🪴", text: "צמח מלאכותי", q: "artificial plant decor" },
      { emoji: "💡", text: "מנורת שולחן", q: "table lamp LED" },
      { emoji: "🛋️", text: "כרית נוי", q: "decorative throw pillow" },
      { emoji: "🧹", text: "מארגן ארון", q: "closet organizer storage" },
      { emoji: "🍽️", text: "מארגן מטבח", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "מראה דקורטיבית", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "נרות ריחניים", q: "scented candles home" },
    ],
    // Categories
    categoriesTitle: "🏷️ קטגוריות",
    categories: [
      { emoji: "🛋️", name: "סלון", desc: "כריות, שטיחים, דקורציה, וילונות", q: "living room decor" },
      { emoji: "🛏️", name: "חדר שינה", desc: "מצעים, כריות, ארגון, תאורה", q: "bedroom organization decor" },
      { emoji: "🍳", name: "מטבח", desc: "ארגוניזרים, כלים, אחסון מזון", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "צמחים ודקורציה", desc: "צמחים מלאכותיים, אגרטלים, קישוטים", q: "home decor plants vase" },
      { emoji: "💡", name: "תאורה", desc: "מנורות, LED, נברשות, אורות אווירה", q: "home lighting LED lamp" },
      { emoji: "📦", name: "ארגון ואחסון", desc: "מדפים, קופסאות, מארגנים", q: "storage organization home" },
      { emoji: "🛁", name: "אמבטיה", desc: "ארגוניזרים, אקססוריז, מדפים", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "משרד ביתי", desc: "ארגון שולחן, מדפים, תאורה", q: "home office organization desk" },
    ],
    // Results
    resultsTitle: "תוצאות חיפוש",
    clearBtn: "✕ נקה",
    productsLabel: "מוצרים",
    loadMore: "🏠 טען עוד מוצרים",
    loading: "⏳ טוען...",
    noResults: "לא נמצאו תוצאות. נסו חיפוש אחר!",
    noMoreProducts: "אין עוד מוצרים 🏠",
    aiScanning: "ה-AI סורק אלפי מוצרים ומוצא לכם את הדילים הכי טובים... 🏠",
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
    chatName: "הומי",
    chatWelcome: "🏠 היי! אני הומי, היועצת שלכם לעיצוב הבית!\nספרו לי מה אתם מחפשים — ארגון מטבח? עיצוב סלון? תאורה?\nואני אמצא לכם את הדילים הכי טובים מאלי אקספרס 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "רעיונות לארגון מטבח" },
      { emoji: "🛋️", text: "עיצוב סלון במחיר טוב" },
      { emoji: "💡", text: "תאורת אווירה לחדר שינה" },
      { emoji: "🪴", text: "צמחים מלאכותיים שנראים אמיתיים" },
    ],
    chatPlaceholder: "שאלו את הומי...",
    // Footer
    footerText: "מנוע חיפוש AI חכם למוצרי עיצוב הבית מאלי אקספרס",
    footerPrivacy: "מדיניות פרטיות",
    footerTerms: "תנאי שימוש",
    footerCopy: "© 2026 HomeFind. כל הזכויות שמורות.",
    // Language switcher
    langLabel: "שפה",
    // Install
    installBtn: "התקנה",
    installHow: "איך מתקינים?",
    installTitle: "התקינו את הום פיינד!",
    installSubtitle: "חיפוש מוצרי עיצוב מהיר יותר ישירות מהנייד 📲",
    chatFabLabel: "💬 שאלו את הומי!",
  },

  en: {
    lang: "en", dir: "ltr", locale: "en_US",
    currency: "USD", currencySymbol: "$", country: "US",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Best Home Decor & Organization from AliExpress",
    metaDesc: "Smart AI search engine for home decor and organization products on AliExpress. Shelves, organizers, lighting, plants & more — at the best prices with free shipping.",
    heroTitle: 'Find Everything for <strong>Your Home</strong>',
    heroSubtitle: 'Our AI scans thousands of products and finds you the best deals for home decor, organization and styling',
    searchPlaceholder: "Search for home products... 🏠✨",
    searchButton: "Search",
    aiBadge: "🤖 Powered by AI — finds you the best deals",
    banner: '<strong>Smart AI Search:</strong> Type what you need and our AI will find the most relevant home products from AliExpress',
    popularTitle: "🔥 Popular Searches",
    chips: [
      { emoji: "📦", text: "Drawer Organizer", q: "drawer organizer" },
      { emoji: "🪴", text: "Artificial Plant", q: "artificial plant decor" },
      { emoji: "💡", text: "Table Lamp", q: "table lamp LED" },
      { emoji: "🛋️", text: "Throw Pillow", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Closet Organizer", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Kitchen Storage", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Wall Mirror", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Scented Candles", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Categories",
    categories: [
      { emoji: "🛋️", name: "Living Room", desc: "Pillows, rugs, curtains, decor", q: "living room decor" },
      { emoji: "🛏️", name: "Bedroom", desc: "Bedding, pillows, organization", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Kitchen", desc: "Organizers, utensils, storage", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Plants & Decor", desc: "Artificial plants, vases, ornaments", q: "home decor plants vase" },
      { emoji: "💡", name: "Lighting", desc: "Lamps, LED, chandeliers, ambient", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Storage", desc: "Shelves, boxes, organizers", q: "storage organization home" },
      { emoji: "🛁", name: "Bathroom", desc: "Organizers, accessories, shelves", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Home Office", desc: "Desk organizers, shelves, lighting", q: "home office organization desk" },
    ],
    resultsTitle: "Search Results",
    clearBtn: "✕ Clear",
    productsLabel: "products",
    loadMore: "🏠 Load More Products",
    loading: "⏳ Loading...",
    noResults: "No results found. Try a different search!",
    noMoreProducts: "No more products 🏠",
    aiScanning: "AI is scanning thousands of products to find you the best deals... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 Hi! I'm Homie, your home decor advisor!\nTell me what you're looking for — kitchen organization? living room styling? lighting?\nI'll find you the best deals on AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Kitchen organization ideas" },
      { emoji: "🛋️", text: "Budget living room decor" },
      { emoji: "💡", text: "Ambient bedroom lighting" },
      { emoji: "🪴", text: "Realistic artificial plants" },
    ],
    chatPlaceholder: "Ask Homie...",
    footerText: "Smart AI search engine for home decor products from AliExpress",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerCopy: "© 2026 HomeFind. All rights reserved.",
    langLabel: "Language",
    installBtn: "Install",
    installHow: "How to install?",
    installTitle: "Install HomeFind!",
    installSubtitle: "Search home products faster directly from your phone 📲",
    chatFabLabel: "💬 Ask Homie!",
  },

  es: {
    lang: "es", dir: "ltr", locale: "es_ES",
    currency: "EUR", currencySymbol: "€", country: "ES",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Decoración y Organización del Hogar en AliExpress",
    metaDesc: "Buscador inteligente con IA para productos de decoración y organización del hogar en AliExpress. Estantes, organizadores, iluminación y más — a los mejores precios.",
    heroTitle: 'Encuentra Todo para <strong>Tu Hogar</strong>',
    heroSubtitle: 'Nuestra IA escanea miles de productos y te encuentra las mejores ofertas en decoración, organización y estilo para el hogar',
    searchPlaceholder: "Busca productos para el hogar... 🏠✨",
    searchButton: "Buscar",
    aiBadge: "🤖 Impulsado por IA — encuentra las mejores ofertas",
    banner: '<strong>Búsqueda IA:</strong> Escribe lo que necesitas y nuestra IA encontrará los productos más relevantes de AliExpress',
    popularTitle: "🔥 Búsquedas Populares",
    chips: [
      { emoji: "📦", text: "Organizador cajones", q: "drawer organizer" },
      { emoji: "🪴", text: "Planta artificial", q: "artificial plant decor" },
      { emoji: "💡", text: "Lámpara mesa", q: "table lamp LED" },
      { emoji: "🛋️", text: "Cojín decorativo", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Organizador armario", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Almacenaje cocina", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Espejo decorativo", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Velas aromáticas", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Categorías",
    categories: [
      { emoji: "🛋️", name: "Salón", desc: "Cojines, alfombras, cortinas, decoración", q: "living room decor" },
      { emoji: "🛏️", name: "Dormitorio", desc: "Ropa de cama, almohadas, organización", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Cocina", desc: "Organizadores, utensilios, almacenaje", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Plantas y Decoración", desc: "Plantas artificiales, jarrones, adornos", q: "home decor plants vase" },
      { emoji: "💡", name: "Iluminación", desc: "Lámparas, LED, candelabros, ambiente", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Almacenaje", desc: "Estantes, cajas, organizadores", q: "storage organization home" },
      { emoji: "🛁", name: "Baño", desc: "Organizadores, accesorios, estantes", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Oficina en Casa", desc: "Organización de escritorio, estantes", q: "home office organization desk" },
    ],
    resultsTitle: "Resultados de Búsqueda",
    clearBtn: "✕ Limpiar",
    productsLabel: "productos",
    loadMore: "🏠 Cargar Más Productos",
    loading: "⏳ Cargando...",
    noResults: "No se encontraron resultados. ¡Prueba otra búsqueda!",
    noMoreProducts: "No hay más productos 🏠",
    aiScanning: "La IA está escaneando miles de productos para encontrar las mejores ofertas... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 ¡Hola! Soy Homie, tu asesora de decoración del hogar.\n¿Qué buscas? ¿Organización de cocina? ¿Decoración de salón? ¿Iluminación?\nTe encontraré las mejores ofertas en AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Ideas para organizar cocina" },
      { emoji: "🛋️", text: "Decoración salón económica" },
      { emoji: "💡", text: "Iluminación ambiente dormitorio" },
      { emoji: "🪴", text: "Plantas artificiales realistas" },
    ],
    chatPlaceholder: "Pregunta a Homie...",
    footerText: "Buscador inteligente con IA de productos de decoración del hogar en AliExpress",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Uso",
    footerCopy: "© 2026 HomeFind. Todos los derechos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "¿Cómo instalar?",
    installTitle: "¡Instala HomeFind!",
    installSubtitle: "Busca productos para el hogar más rápido desde tu móvil 📲",
    chatFabLabel: "💬 ¡Pregunta a Homie!",
  },

  de: {
    lang: "de", dir: "ltr", locale: "de_DE",
    currency: "EUR", currencySymbol: "€", country: "DE",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Wohndeko & Organisation von AliExpress",
    metaDesc: "Intelligente KI-Suchmaschine für Wohndeko und Organisation auf AliExpress. Regale, Organizer, Beleuchtung & mehr — zu den besten Preisen.",
    heroTitle: 'Finden Sie Alles für <strong>Ihr Zuhause</strong>',
    heroSubtitle: 'Unsere KI durchsucht tausende Produkte und findet die besten Angebote für Wohndeko, Organisation und Einrichtung',
    searchPlaceholder: "Wohnprodukte suchen... 🏠✨",
    searchButton: "Suchen",
    aiBadge: "🤖 KI-gestützt — findet die besten Angebote",
    banner: '<strong>Intelligente KI-Suche:</strong> Geben Sie ein, was Sie brauchen, und unsere KI findet die relevantesten Produkte auf AliExpress',
    popularTitle: "🔥 Beliebte Suchen",
    chips: [
      { emoji: "📦", text: "Schubladen-Organizer", q: "drawer organizer" },
      { emoji: "🪴", text: "Kunstpflanze", q: "artificial plant decor" },
      { emoji: "💡", text: "Tischlampe", q: "table lamp LED" },
      { emoji: "🛋️", text: "Dekokissen", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Schrank-Organizer", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Küchenregal", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Dekospiegel", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Duftkerzen", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Kategorien",
    categories: [
      { emoji: "🛋️", name: "Wohnzimmer", desc: "Kissen, Teppiche, Vorhänge, Deko", q: "living room decor" },
      { emoji: "🛏️", name: "Schlafzimmer", desc: "Bettwäsche, Kissen, Organisation", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Küche", desc: "Organizer, Utensilien, Aufbewahrung", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Pflanzen & Deko", desc: "Kunstpflanzen, Vasen, Ornamente", q: "home decor plants vase" },
      { emoji: "💡", name: "Beleuchtung", desc: "Lampen, LED, Kronleuchter", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Aufbewahrung", desc: "Regale, Boxen, Organizer", q: "storage organization home" },
      { emoji: "🛁", name: "Badezimmer", desc: "Organizer, Zubehör, Regale", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Homeoffice", desc: "Schreibtisch-Organisation, Regale", q: "home office organization desk" },
    ],
    resultsTitle: "Suchergebnisse",
    clearBtn: "✕ Löschen",
    productsLabel: "Produkte",
    loadMore: "🏠 Mehr Produkte Laden",
    loading: "⏳ Laden...",
    noResults: "Keine Ergebnisse gefunden. Versuchen Sie eine andere Suche!",
    noMoreProducts: "Keine weiteren Produkte 🏠",
    aiScanning: "Die KI durchsucht tausende Produkte nach den besten Angeboten... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 Hallo! Ich bin Homie, Ihr Wohndeko-Berater!\nWas suchen Sie? Küchenorganisation? Wohnzimmerdeko? Beleuchtung?\nIch finde die besten Angebote auf AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Ideen für Küchenorganisation" },
      { emoji: "🛋️", text: "Günstige Wohnzimmerdeko" },
      { emoji: "💡", text: "Stimmungsbeleuchtung Schlafzimmer" },
      { emoji: "🪴", text: "Realistische Kunstpflanzen" },
    ],
    chatPlaceholder: "Frag Homie...",
    footerText: "Intelligente KI-Suchmaschine für Wohndeko-Produkte auf AliExpress",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
    footerCopy: "© 2026 HomeFind. Alle Rechte vorbehalten.",
    langLabel: "Sprache",
    installBtn: "Installieren",
    installHow: "Wie installieren?",
    installTitle: "Installieren Sie HomeFind!",
    installSubtitle: "Suchen Sie Wohnprodukte schneller direkt vom Handy 📲",
    chatFabLabel: "💬 Frag Homie!",
  },

  pt: {
    lang: "pt", dir: "ltr", locale: "pt_BR",
    currency: "BRL", currencySymbol: "R$", country: "BR",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Decoração e Organização para Casa no AliExpress",
    metaDesc: "Buscador inteligente com IA para produtos de decoração e organização do lar no AliExpress. Prateleiras, organizadores, iluminação e mais — nos melhores preços.",
    heroTitle: 'Encontre Tudo para a <strong>Sua Casa</strong>',
    heroSubtitle: 'Nossa IA analisa milhares de produtos e encontra as melhores ofertas em decoração, organização e estilo para sua casa',
    searchPlaceholder: "Busque produtos para casa... 🏠✨",
    searchButton: "Buscar",
    aiBadge: "🤖 Movido por IA — encontra as melhores ofertas",
    banner: '<strong>Busca IA:</strong> Digite o que precisa e nossa IA encontrará os produtos mais relevantes no AliExpress',
    popularTitle: "🔥 Buscas Populares",
    chips: [
      { emoji: "📦", text: "Organizador gavetas", q: "drawer organizer" },
      { emoji: "🪴", text: "Planta artificial", q: "artificial plant decor" },
      { emoji: "💡", text: "Luminária mesa", q: "table lamp LED" },
      { emoji: "🛋️", text: "Almofada decorativa", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Organizador guarda-roupa", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Organizador cozinha", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Espelho decorativo", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Velas aromáticas", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Categorias",
    categories: [
      { emoji: "🛋️", name: "Sala", desc: "Almofadas, tapetes, cortinas, decoração", q: "living room decor" },
      { emoji: "🛏️", name: "Quarto", desc: "Roupa de cama, almofadas, organização", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Cozinha", desc: "Organizadores, utensílios, armazenamento", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Plantas e Decoração", desc: "Plantas artificiais, vasos, enfeites", q: "home decor plants vase" },
      { emoji: "💡", name: "Iluminação", desc: "Luminárias, LED, lustres, ambiente", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Organização", desc: "Prateleiras, caixas, organizadores", q: "storage organization home" },
      { emoji: "🛁", name: "Banheiro", desc: "Organizadores, acessórios, prateleiras", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Home Office", desc: "Organização de mesa, prateleiras", q: "home office organization desk" },
    ],
    resultsTitle: "Resultados da Busca",
    clearBtn: "✕ Limpar",
    productsLabel: "produtos",
    loadMore: "🏠 Carregar Mais Produtos",
    loading: "⏳ Carregando...",
    noResults: "Nenhum resultado encontrado. Tente outra busca!",
    noMoreProducts: "Não há mais produtos 🏠",
    aiScanning: "A IA está escaneando milhares de produtos para encontrar as melhores ofertas... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 Oi! Eu sou o Homie, seu consultor de decoração!\nO que você procura? Organização de cozinha? Decoração de sala? Iluminação?\nVou encontrar as melhores ofertas no AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Ideias para organizar cozinha" },
      { emoji: "🛋️", text: "Decoração de sala econômica" },
      { emoji: "💡", text: "Iluminação ambiente quarto" },
      { emoji: "🪴", text: "Plantas artificiais realistas" },
    ],
    chatPlaceholder: "Pergunte ao Homie...",
    footerText: "Buscador inteligente com IA de produtos de decoração no AliExpress",
    footerPrivacy: "Política de Privacidade",
    footerTerms: "Termos de Uso",
    footerCopy: "© 2026 HomeFind. Todos os direitos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "Como instalar?",
    installTitle: "Instale o HomeFind!",
    installSubtitle: "Busque produtos para casa mais rápido direto do celular 📲",
    chatFabLabel: "💬 Pergunte ao Homie!",
  },

  fr: {
    lang: "fr", dir: "ltr", locale: "fr_FR",
    currency: "EUR", currencySymbol: "€", country: "FR",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Décoration & Organisation Maison sur AliExpress",
    metaDesc: "Moteur de recherche IA pour produits de décoration et organisation maison sur AliExpress. Étagères, organisateurs, éclairage et plus — aux meilleurs prix.",
    heroTitle: 'Trouvez Tout pour <strong>Votre Maison</strong>',
    heroSubtitle: "Notre IA analyse des milliers de produits et trouve les meilleures offres en décoration, organisation et aménagement",
    searchPlaceholder: "Cherchez des produits maison... 🏠✨",
    searchButton: "Rechercher",
    aiBadge: "🤖 Propulsé par l'IA — trouve les meilleures offres",
    banner: "<strong>Recherche IA:</strong> Tapez ce dont vous avez besoin et notre IA trouvera les produits les plus pertinents sur AliExpress",
    popularTitle: "🔥 Recherches Populaires",
    chips: [
      { emoji: "📦", text: "Organisateur tiroir", q: "drawer organizer" },
      { emoji: "🪴", text: "Plante artificielle", q: "artificial plant decor" },
      { emoji: "💡", text: "Lampe de table", q: "table lamp LED" },
      { emoji: "🛋️", text: "Coussin décoratif", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Organisateur placard", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Rangement cuisine", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Miroir décoratif", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Bougies parfumées", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Catégories",
    categories: [
      { emoji: "🛋️", name: "Salon", desc: "Coussins, tapis, rideaux, décoration", q: "living room decor" },
      { emoji: "🛏️", name: "Chambre", desc: "Literie, oreillers, organisation", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Cuisine", desc: "Organisateurs, ustensiles, rangement", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Plantes & Déco", desc: "Plantes artificielles, vases, ornements", q: "home decor plants vase" },
      { emoji: "💡", name: "Éclairage", desc: "Lampes, LED, lustres, ambiance", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Rangement", desc: "Étagères, boîtes, organisateurs", q: "storage organization home" },
      { emoji: "🛁", name: "Salle de Bain", desc: "Organisateurs, accessoires, étagères", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Bureau à Domicile", desc: "Organisation bureau, étagères", q: "home office organization desk" },
    ],
    resultsTitle: "Résultats de Recherche",
    clearBtn: "✕ Effacer",
    productsLabel: "produits",
    loadMore: "🏠 Charger Plus de Produits",
    loading: "⏳ Chargement...",
    noResults: "Aucun résultat trouvé. Essayez une autre recherche !",
    noMoreProducts: "Plus de produits 🏠",
    aiScanning: "L'IA analyse des milliers de produits pour trouver les meilleures offres... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 Salut ! Je suis Homie, votre conseiller déco maison !\nQue cherchez-vous ? Organisation cuisine ? Déco salon ? Éclairage ?\nJe vous trouverai les meilleures offres sur AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Idées organisation cuisine" },
      { emoji: "🛋️", text: "Déco salon pas cher" },
      { emoji: "💡", text: "Éclairage ambiance chambre" },
      { emoji: "🪴", text: "Plantes artificielles réalistes" },
    ],
    chatPlaceholder: "Demandez à Homie...",
    footerText: "Moteur de recherche IA intelligent pour produits de décoration maison sur AliExpress",
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions d'Utilisation",
    footerCopy: "© 2026 HomeFind. Tous droits réservés.",
    langLabel: "Langue",
    installBtn: "Installer",
    installHow: "Comment installer ?",
    installTitle: "Installez HomeFind !",
    installSubtitle: "Cherchez des produits maison plus vite depuis votre mobile 📲",
    chatFabLabel: "💬 Demandez à Homie !",
  },

  ru: {
    lang: "ru", dir: "ltr", locale: "ru_RU",
    currency: "RUB", currencySymbol: "₽", country: "RU",
    siteName: "HomeFind",
    metaTitle: "🏠 HomeFind | Декор и Организация Дома с AliExpress",
    metaDesc: "Умный поисковик с ИИ для товаров декора и организации дома на AliExpress. Полки, органайзеры, освещение и другое — по лучшим ценам.",
    heroTitle: 'Найдите Всё для <strong>Вашего Дома</strong>',
    heroSubtitle: 'Наш ИИ сканирует тысячи товаров и находит лучшие предложения по декору, организации и обустройству дома',
    searchPlaceholder: "Ищите товары для дома... 🏠✨",
    searchButton: "Искать",
    aiBadge: "🤖 На основе ИИ — находит лучшие предложения",
    banner: '<strong>Умный поиск ИИ:</strong> Введите что нужно, и наш ИИ найдёт самые подходящие товары на AliExpress',
    popularTitle: "🔥 Популярные Запросы",
    chips: [
      { emoji: "📦", text: "Органайзер для ящиков", q: "drawer organizer" },
      { emoji: "🪴", text: "Искусственное растение", q: "artificial plant decor" },
      { emoji: "💡", text: "Настольная лампа", q: "table lamp LED" },
      { emoji: "🛋️", text: "Декоративная подушка", q: "decorative throw pillow" },
      { emoji: "🧹", text: "Органайзер для шкафа", q: "closet organizer storage" },
      { emoji: "🍽️", text: "Органайзер кухня", q: "kitchen storage rack organizer" },
      { emoji: "🪞", text: "Декоративное зеркало", q: "decorative wall mirror" },
      { emoji: "🕯️", text: "Ароматические свечи", q: "scented candles home" },
    ],
    categoriesTitle: "🏷️ Категории",
    categories: [
      { emoji: "🛋️", name: "Гостиная", desc: "Подушки, ковры, шторы, декор", q: "living room decor" },
      { emoji: "🛏️", name: "Спальня", desc: "Постельное бельё, подушки, организация", q: "bedroom organization decor" },
      { emoji: "🍳", name: "Кухня", desc: "Органайзеры, утварь, хранение", q: "kitchen organizer storage" },
      { emoji: "🪴", name: "Растения и Декор", desc: "Искусственные растения, вазы, украшения", q: "home decor plants vase" },
      { emoji: "💡", name: "Освещение", desc: "Лампы, LED, люстры, атмосфера", q: "home lighting LED lamp" },
      { emoji: "📦", name: "Хранение", desc: "Полки, коробки, органайзеры", q: "storage organization home" },
      { emoji: "🛁", name: "Ванная", desc: "Органайзеры, аксессуары, полки", q: "bathroom accessories organizer" },
      { emoji: "🖥️", name: "Домашний Офис", desc: "Организация стола, полки, свет", q: "home office organization desk" },
    ],
    resultsTitle: "Результаты Поиска",
    clearBtn: "✕ Очистить",
    productsLabel: "товаров",
    loadMore: "🏠 Загрузить Ещё",
    loading: "⏳ Загрузка...",
    noResults: "Ничего не найдено. Попробуйте другой запрос!",
    noMoreProducts: "Больше нет товаров 🏠",
    aiScanning: "ИИ сканирует тысячи товаров в поисках лучших предложений... 🏠",
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
    chatName: "Homie",
    chatWelcome: "🏠 Привет! Я Homie, ваш консультант по декору дома!\nЧто ищете? Организацию кухни? Декор гостиной? Освещение?\nЯ найду лучшие предложения на AliExpress 🛒",
    chatSuggestions: [
      { emoji: "📦", text: "Идеи для организации кухни" },
      { emoji: "🛋️", text: "Бюджетный декор гостиной" },
      { emoji: "💡", text: "Атмосферное освещение спальни" },
      { emoji: "🪴", text: "Реалистичные искусственные растения" },
    ],
    chatPlaceholder: "Спросите Homie...",
    footerText: "Умный ИИ-поисковик товаров для декора дома на AliExpress",
    footerPrivacy: "Политика Конфиденциальности",
    footerTerms: "Условия Использования",
    footerCopy: "© 2026 HomeFind. Все права защищены.",
    langLabel: "Язык",
    installBtn: "Установить",
    installHow: "Как установить?",
    installTitle: "Установите HomeFind!",
    installSubtitle: "Ищите товары для дома быстрее прямо с телефона 📲",
    chatFabLabel: "💬 Спросите Homie!",
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
  he: "\u{1F1EE}\u{1F1F1}", en: "\u{1F1FA}\u{1F1F8}", es: "\u{1F1EA}\u{1F1F8}", de: "\u{1F1E9}\u{1F1EA}", pt: "\u{1F1E7}\u{1F1F7}", fr: "\u{1F1EB}\u{1F1F7}", ru: "\u{1F1F7}\u{1F1FA}"
};

const LANG_NAMES = {
  he: "\u05E2\u05D1\u05E8\u05D9\u05EA", en: "English", es: "Espa\u00F1ol", de: "Deutsch", pt: "Portugu\u00EAs", fr: "Fran\u00E7ais", ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
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
  const saved = localStorage.getItem("homefind_lang");
  if (saved && TRANSLATIONS[saved]) return saved;

  // 3. Browser language
  const browserLang = (navigator.language || "").split("-")[0].toLowerCase();
  if (TRANSLATIONS[browserLang]) return browserLang;

  // 4. Default to English
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
  localStorage.setItem("homefind_lang", lang);

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
    const lmt = loadMoreBtn.querySelector(".load-more-text");
    if (lmt) lmt.textContent = t.loadMore;
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
    chatFabLabel.textContent = t.chatFabLabel || `\u{1F4AC} Ask ${t.chatName}!`;
  }

  // Hide Hebrew-only sections when not Hebrew
  const seoContent = document.getElementById("seoContent");
  if (seoContent) seoContent.style.display = lang === "he" ? "" : "none";
  const faqSection = document.getElementById("faqSection");
  if (faqSection) faqSection.style.display = lang === "he" ? "" : "none";

  // Install banner
  const installTitle = document.querySelector(".install-banner-title");
  if (installTitle) installTitle.textContent = t.installTitle || "Install HomeFind!";
  const installSubtitle = document.querySelector(".install-banner-subtitle");
  if (installSubtitle) installSubtitle.textContent = t.installSubtitle || "Search products faster directly from your phone \u{1F4F2}";
  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.textContent = t.installBtn || "Install";

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
