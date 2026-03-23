/**
 * HomeFind Brasil - Internationalization (i18n)
 * Home Decor & Organization Search Engine
 * Portuguese-Brazilian version — default: pt/BRL/BR
 * Supports: pt, he, en, es, de, fr, ru
 */

const TRANSLATIONS = {
  pt: {
    lang: "pt", dir: "ltr", locale: "pt_BR",
    currency: "BRL", currencySymbol: "R$", country: "BR",
    siteName: "Home Find Me",
    metaTitle: "\u{1F3E0} Home Find Me | Produtos para Casa do AliExpress",
    metaDesc: "Buscador inteligente com IA para produtos de decora\u00E7\u00E3o e organiza\u00E7\u00E3o do lar no AliExpress. Prateleiras, organizadores, ilumina\u00E7\u00E3o e mais \u2014 nos melhores pre\u00E7os com frete para o Brasil.",
    heroTitle: 'Encontre Tudo para a <strong>Sua Casa</strong>',
    heroSubtitle: 'Nossa IA analisa milhares de produtos e encontra as melhores ofertas em decora\u00E7\u00E3o, organiza\u00E7\u00E3o e estilo para sua casa',
    searchPlaceholder: "Busque produtos para casa... \u{1F3E0}\u2728",
    searchButton: "Buscar",
    aiBadge: "\u{1F916} Movido por IA \u2014 encontra as melhores ofertas",
    banner: '<strong>Busca IA Inteligente:</strong> Digite o que precisa e nossa IA encontrar\u00E1 os produtos mais relevantes no AliExpress',
    popularTitle: "\u{1F525} Buscas Populares",
    chips: [
      { emoji: "\u{1F4E6}", text: "Organizador de gavetas", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "Planta artificial", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "Lumin\u00E1ria de mesa", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Almofada decorativa", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "Organizador guarda-roupa", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "Organizador cozinha", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "Espelho decorativo", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "Velas arom\u00E1ticas", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F Categorias",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "Sala", desc: "Almofadas, tapetes, cortinas, decora\u00E7\u00E3o", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "Quarto", desc: "Roupa de cama, almofadas, organiza\u00E7\u00E3o", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "Cozinha", desc: "Organizadores, utens\u00EDlios, armazenamento", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "Plantas e Decora\u00E7\u00E3o", desc: "Plantas artificiais, vasos, enfeites", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "Ilumina\u00E7\u00E3o", desc: "Lumin\u00E1rias, LED, lustres, ambiente", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "Organiza\u00E7\u00E3o", desc: "Prateleiras, caixas, organizadores", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "Banheiro", desc: "Organizadores, acess\u00F3rios, prateleiras", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "Home Office", desc: "Organiza\u00E7\u00E3o de mesa, prateleiras", q: "home office organization desk" },
    ],
    resultsTitle: "Resultados da Busca",
    clearBtn: "\u2715 Limpar",
    productsLabel: "produtos",
    loadMore: "\u{1F3E0} Carregar Mais Produtos",
    loading: "\u23F3 Carregando...",
    noResults: "Nenhum resultado encontrado. Tente outra busca!",
    noMoreProducts: "N\u00E3o h\u00E1 mais produtos \u{1F3E0}",
    aiScanning: "A IA est\u00E1 escaneando milhares de produtos para encontrar as melhores ofertas... \u{1F3E0}",
    orders: "pedidos",
    buyNow: "\u{1F6D2} Comprar",
    freeShipping: "Frete Gr\u00E1tis",
    shipping: "Frete",
    featuresTitle: "\u{1F916} Como Nossa IA Trabalha Para Voc\u00EA",
    features: [
      { emoji: "\u{1F9E0}", title: "IA Que Entende Voc\u00EA", desc: "Escreva em portugu\u00EAs \u2014 a IA traduz, entende e encontra exatamente o que voc\u00EA procura" },
      { emoji: "\u{1F48E}", title: "Filtragem Inteligente", desc: "A IA analisa milhares de produtos e mostra apenas as melhores ofertas com avalia\u00E7\u00F5es altas" },
      { emoji: "\u{1F680}", title: "Pre\u00E7os Imbat\u00EDveis", desc: "Direto do AliExpress \u2014 economize at\u00E9 80% comparado com lojas locais" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} Oi! Eu sou o Homie, seu consultor de decora\u00E7\u00E3o!\nO que voc\u00EA procura? Organiza\u00E7\u00E3o de cozinha? Decora\u00E7\u00E3o de sala? Ilumina\u00E7\u00E3o?\nVou encontrar as melhores ofertas no AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "Ideias para organizar cozinha" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Decora\u00E7\u00E3o de sala econ\u00F4mica" },
      { emoji: "\u{1F4A1}", text: "Ilumina\u00E7\u00E3o ambiente quarto" },
      { emoji: "\u{1FAB4}", text: "Plantas artificiais realistas" },
    ],
    chatPlaceholder: "Pergunte ao Homie...",
    footerText: "Buscador inteligente com IA de produtos de decora\u00E7\u00E3o no AliExpress",
    footerPrivacy: "Pol\u00EDtica de Privacidade",
    footerTerms: "Termos de Uso",
    footerCopy: "\u00A9 2026 HomeFind. Todos os direitos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "Como instalar?",
    installTitle: "Instale o Home Find Me!",
    installSubtitle: "Busque produtos para casa mais r\u00E1pido direto do celular \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} Pergunte ao Homie!",
    // Compare modal
    originalProduct: "Produto original",
    cheaperAlt: "Alternativas mais baratas \u{1F4B0}",
    searchingCheaper: "Buscando alternativas mais baratas...",
    noCheaper: "\u{1F50D} N\u00E3o foram encontradas alternativas mais baratas",
    findCheaper: "\u{1F4B0} Encontrar mais barato",
    viewBuy: "Ver e comprar \u2192",
    summary: "\u{1F916} Resumo:",
    loadError: "\u274C Erro ao carregar",
  },

  he: {
    lang: "he", dir: "rtl", locale: "he_IL",
    currency: "ILS", currencySymbol: "\u20AA", country: "IL",
    siteName: "\u05D4\u05D5\u05DD \u05E4\u05D9\u05D9\u05E0\u05D3",
    metaTitle: "\u{1F3E0} \u05D4\u05D5\u05DD \u05E4\u05D9\u05D9\u05E0\u05D3 | \u05DE\u05D5\u05E6\u05E8\u05D9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05D1\u05D9\u05EA \u05D5\u05D0\u05E8\u05D2\u05D5\u05DF \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1",
    metaDesc: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D7\u05DB\u05DD \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05D1\u05D9\u05EA, \u05D0\u05E8\u05D2\u05D5\u05DF \u05D5\u05D3\u05E7\u05D5\u05E8\u05E6\u05D9\u05D4 \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1.",
    heroTitle: '\u05DE\u05E6\u05D0\u05D5 \u05D4\u05DB\u05DC <strong>\u05DC\u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05D1\u05D9\u05EA</strong> \u05E9\u05DC\u05DB\u05DD',
    heroSubtitle: '\u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E9\u05DC\u05E0\u05D5 \u05E1\u05D5\u05E8\u05E7\u05EA \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05D0\u05EA \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DE\u05D9\u05DD',
    searchPlaceholder: "\u05DB\u05EA\u05D1\u05D5 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u2014 \u05D4-AI \u05D9\u05DE\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D4\u05DB\u05DC \u{1F3E0}\u2728",
    searchButton: "\u05DC\u05D7\u05E6\u05D5 \u05DC\u05D7\u05D9\u05E4\u05D5\u05E9",
    aiBadge: "\u{1F916} \u05DE\u05D5\u05E0\u05E2 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u2014 \u05DE\u05D5\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1",
    banner: '<strong>\u05D7\u05D9\u05E4\u05D5\u05E9 AI \u05D7\u05DB\u05DD:</strong> \u05DB\u05EA\u05D1\u05D5 \u05DE\u05D4 \u05E9\u05D1\u05D0 \u05DC\u05DB\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05DE\u05E6\u05D0 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DB\u05D9 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1',
    popularTitle: "\u{1F525} \u05D7\u05D9\u05E4\u05D5\u05E9\u05D9\u05DD \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9\u05D9\u05DD",
    chips: [
      { emoji: "\u{1F4E6}", text: "\u05DE\u05D0\u05E8\u05D2\u05DF \u05DE\u05D2\u05D9\u05E8\u05D5\u05EA", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "\u05E6\u05DE\u05D7 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "\u05DE\u05E0\u05D5\u05E8\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "\u05DB\u05E8\u05D9\u05EA \u05E0\u05D5\u05D9", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "\u05DE\u05D0\u05E8\u05D2\u05DF \u05D0\u05E8\u05D5\u05DF", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "\u05DE\u05D0\u05E8\u05D2\u05DF \u05DE\u05D8\u05D1\u05D7", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "\u05DE\u05E8\u05D0\u05D4 \u05D3\u05E7\u05D5\u05E8\u05D8\u05D9\u05D1\u05D9\u05EA", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "\u05E0\u05E8\u05D5\u05EA \u05E8\u05D9\u05D7\u05E0\u05D9\u05D9\u05DD", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "\u05E1\u05DC\u05D5\u05DF", desc: "\u05DB\u05E8\u05D9\u05D5\u05EA, \u05E9\u05D8\u05D9\u05D7\u05D9\u05DD, \u05D3\u05E7\u05D5\u05E8\u05E6\u05D9\u05D4, \u05D5\u05D9\u05DC\u05D5\u05E0\u05D5\u05EA", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "\u05D7\u05D3\u05E8 \u05E9\u05D9\u05E0\u05D4", desc: "\u05DE\u05E6\u05E2\u05D9\u05DD, \u05DB\u05E8\u05D9\u05D5\u05EA, \u05D0\u05E8\u05D2\u05D5\u05DF, \u05EA\u05D0\u05D5\u05E8\u05D4", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "\u05DE\u05D8\u05D1\u05D7", desc: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D6\u05E8\u05D9\u05DD, \u05DB\u05DC\u05D9\u05DD, \u05D0\u05D7\u05E1\u05D5\u05DF \u05DE\u05D6\u05D5\u05DF", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "\u05E6\u05DE\u05D7\u05D9\u05DD \u05D5\u05D3\u05E7\u05D5\u05E8\u05E6\u05D9\u05D4", desc: "\u05E6\u05DE\u05D7\u05D9\u05DD \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD, \u05D0\u05D2\u05E8\u05D8\u05DC\u05D9\u05DD, \u05E7\u05D9\u05E9\u05D5\u05D8\u05D9\u05DD", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "\u05EA\u05D0\u05D5\u05E8\u05D4", desc: "\u05DE\u05E0\u05D5\u05E8\u05D5\u05EA, LED, \u05E0\u05D1\u05E8\u05E9\u05D5\u05EA, \u05D0\u05D5\u05E8\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "\u05D0\u05E8\u05D2\u05D5\u05DF \u05D5\u05D0\u05D7\u05E1\u05D5\u05DF", desc: "\u05DE\u05D3\u05E4\u05D9\u05DD, \u05E7\u05D5\u05E4\u05E1\u05D0\u05D5\u05EA, \u05DE\u05D0\u05E8\u05D2\u05E0\u05D9\u05DD", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "\u05D0\u05DE\u05D1\u05D8\u05D9\u05D4", desc: "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05D6\u05E8\u05D9\u05DD, \u05D0\u05E7\u05E1\u05E1\u05D5\u05E8\u05D9\u05D6, \u05DE\u05D3\u05E4\u05D9\u05DD", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "\u05DE\u05E9\u05E8\u05D3 \u05D1\u05D9\u05EA\u05D9", desc: "\u05D0\u05E8\u05D2\u05D5\u05DF \u05E9\u05D5\u05DC\u05D7\u05DF, \u05DE\u05D3\u05E4\u05D9\u05DD, \u05EA\u05D0\u05D5\u05E8\u05D4", q: "home office organization desk" },
    ],
    resultsTitle: "\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",
    clearBtn: "\u2715 \u05E0\u05E7\u05D4",
    productsLabel: "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",
    loadMore: "\u{1F3E0} \u05D8\u05E2\u05DF \u05E2\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",
    loading: "\u23F3 \u05D8\u05D5\u05E2\u05DF...",
    noResults: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA. \u05E0\u05E1\u05D5 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8!",
    noMoreProducts: "\u05D0\u05D9\u05DF \u05E2\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u{1F3E0}",
    aiScanning: "\u05D4-AI \u05E1\u05D5\u05E8\u05E7 \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1\u05D9\u05DD... \u{1F3E0}",
    orders: "\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA",
    buyNow: "\u{1F6D2} \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4",
    freeShipping: "\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D7\u05D9\u05E0\u05DD",
    shipping: "\u05DE\u05E9\u05DC\u05D5\u05D7",
    featuresTitle: "\u{1F916} \u05D0\u05D9\u05DA \u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05D5\u05D1\u05D3\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD?",
    features: [
      { emoji: "\u{1F9E0}", title: "AI \u05E9\u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05E9\u05DC\u05DB\u05DD", desc: "\u05DB\u05EA\u05D1\u05D5 \u05D1\u05E9\u05E4\u05D4 \u05E9\u05DC\u05DB\u05DD \u2014 \u05D4-AI \u05DE\u05EA\u05E8\u05D2\u05DD, \u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05DE\u05D5\u05E6\u05D0 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E9\u05D7\u05D9\u05E4\u05E9\u05EA\u05DD" },
      { emoji: "\u{1F48E}", title: "\u05E1\u05D9\u05E0\u05D5\u05DF \u05D7\u05DB\u05DD", desc: "\u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E1\u05D5\u05E8\u05E7\u05EA \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05E6\u05D9\u05D2\u05D4 \u05E8\u05E7 \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DE\u05D9\u05DD \u05E2\u05DD \u05D3\u05D9\u05E8\u05D5\u05D2\u05D9\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD" },
      { emoji: "\u{1F680}", title: "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E9\u05DC\u05D0 \u05EA\u05DE\u05E6\u05D0\u05D5", desc: "\u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1 \u05E2\u05DD \u05DE\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DC\u05D9\u05DB\u05DD \u2014 \u05D7\u05E1\u05DB\u05D5 \u05E2\u05D3 80% \u05DE\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD" },
    ],
    chatName: "\u05D4\u05D5\u05DE\u05D9",
    chatWelcome: "\u{1F3E0} \u05D4\u05D9\u05D9! \u05D0\u05E0\u05D9 \u05D4\u05D5\u05DE\u05D9, \u05D4\u05D9\u05D5\u05E2\u05E6\u05EA \u05E9\u05DC\u05DB\u05DD \u05DC\u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05D1\u05D9\u05EA!\n\u05E1\u05E4\u05E8\u05D5 \u05DC\u05D9 \u05DE\u05D4 \u05D0\u05EA\u05DD \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u2014 \u05D0\u05E8\u05D2\u05D5\u05DF \u05DE\u05D8\u05D1\u05D7? \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E1\u05DC\u05D5\u05DF? \u05EA\u05D0\u05D5\u05E8\u05D4?\n\u05D5\u05D0\u05E0\u05D9 \u05D0\u05DE\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1\u05D9\u05DD \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1 \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF \u05DE\u05D8\u05D1\u05D7" },
      { emoji: "\u{1F6CB}\uFE0F", text: "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E1\u05DC\u05D5\u05DF \u05D1\u05DE\u05D7\u05D9\u05E8 \u05D8\u05D5\u05D1" },
      { emoji: "\u{1F4A1}", text: "\u05EA\u05D0\u05D5\u05E8\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05DC\u05D7\u05D3\u05E8 \u05E9\u05D9\u05E0\u05D4" },
      { emoji: "\u{1FAB4}", text: "\u05E6\u05DE\u05D7\u05D9\u05DD \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05E9\u05E0\u05E8\u05D0\u05D9\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD" },
    ],
    chatPlaceholder: "\u05E9\u05D0\u05DC\u05D5 \u05D0\u05EA \u05D4\u05D5\u05DE\u05D9...",
    footerText: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 AI \u05D7\u05DB\u05DD \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05D1\u05D9\u05EA \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1",
    footerPrivacy: "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA",
    footerTerms: "\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9",
    footerCopy: "\u00A9 2026 HomeFind. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA.",
    langLabel: "\u05E9\u05E4\u05D4",
    installBtn: "\u05D4\u05EA\u05E7\u05E0\u05D4",
    installHow: "\u05D0\u05D9\u05DA \u05DE\u05EA\u05E7\u05D9\u05E0\u05D9\u05DD?",
    installTitle: "\u05D4\u05EA\u05E7\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05DD \u05E4\u05D9\u05D9\u05E0\u05D3!",
    installSubtitle: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8\u05D9 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05E0\u05D9\u05D9\u05D3 \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} \u05E9\u05D0\u05DC\u05D5 \u05D0\u05EA \u05D4\u05D5\u05DE\u05D9!",
  },

  en: {
    lang: "en", dir: "ltr", locale: "en_US",
    currency: "USD", currencySymbol: "$", country: "US",
    siteName: "HomeFind",
    metaTitle: "\u{1F3E0} HomeFind | Best Home Decor & Organization from AliExpress",
    metaDesc: "Smart AI search engine for home decor and organization products on AliExpress. Shelves, organizers, lighting, plants & more \u2014 at the best prices with free shipping.",
    heroTitle: 'Find Everything for <strong>Your Home</strong>',
    heroSubtitle: 'Our AI scans thousands of products and finds you the best deals for home decor, organization and styling',
    searchPlaceholder: "Search for home products... \u{1F3E0}\u2728",
    searchButton: "Search",
    aiBadge: "\u{1F916} Powered by AI \u2014 finds you the best deals",
    banner: '<strong>Smart AI Search:</strong> Type what you need and our AI will find the most relevant home products from AliExpress',
    popularTitle: "\u{1F525} Popular Searches",
    chips: [
      { emoji: "\u{1F4E6}", text: "Drawer Organizer", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "Artificial Plant", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "Table Lamp", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Throw Pillow", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "Closet Organizer", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "Kitchen Storage", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "Wall Mirror", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "Scented Candles", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F Categories",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "Living Room", desc: "Pillows, rugs, curtains, decor", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "Bedroom", desc: "Bedding, pillows, organization", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "Kitchen", desc: "Organizers, utensils, storage", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "Plants & Decor", desc: "Artificial plants, vases, ornaments", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "Lighting", desc: "Lamps, LED, chandeliers, ambient", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "Storage", desc: "Shelves, boxes, organizers", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "Bathroom", desc: "Organizers, accessories, shelves", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "Home Office", desc: "Desk organizers, shelves, lighting", q: "home office organization desk" },
    ],
    resultsTitle: "Search Results",
    clearBtn: "\u2715 Clear",
    productsLabel: "products",
    loadMore: "\u{1F3E0} Load More Products",
    loading: "\u23F3 Loading...",
    noResults: "No results found. Try a different search!",
    noMoreProducts: "No more products \u{1F3E0}",
    aiScanning: "AI is scanning thousands of products to find you the best deals... \u{1F3E0}",
    orders: "orders",
    buyNow: "\u{1F6D2} Buy Now",
    freeShipping: "Free Shipping",
    shipping: "Shipping",
    featuresTitle: "\u{1F916} How Our AI Works for You",
    features: [
      { emoji: "\u{1F9E0}", title: "AI That Understands You", desc: "Type naturally \u2014 our AI translates, understands context, and finds exactly what you need" },
      { emoji: "\u{1F48E}", title: "Smart Filtering", desc: "AI scans thousands of products and shows only the best deals with high ratings" },
      { emoji: "\u{1F680}", title: "Unbeatable Prices", desc: "Direct from AliExpress \u2014 save up to 80% compared to retail stores" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} Hi! I'm Homie, your home decor advisor!\nTell me what you're looking for \u2014 kitchen organization? living room styling? lighting?\nI'll find you the best deals on AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "Kitchen organization ideas" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Budget living room decor" },
      { emoji: "\u{1F4A1}", text: "Ambient bedroom lighting" },
      { emoji: "\u{1FAB4}", text: "Realistic artificial plants" },
    ],
    chatPlaceholder: "Ask Homie...",
    footerText: "Smart AI search engine for home decor products from AliExpress",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerCopy: "\u00A9 2026 HomeFind. All rights reserved.",
    langLabel: "Language",
    installBtn: "Install",
    installHow: "How to install?",
    installTitle: "Install HomeFind!",
    installSubtitle: "Search home products faster directly from your phone \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} Ask Homie!",
  },

  es: {
    lang: "es", dir: "ltr", locale: "es_ES",
    currency: "EUR", currencySymbol: "\u20AC", country: "ES",
    siteName: "HomeFind",
    metaTitle: "\u{1F3E0} HomeFind | Decoraci\u00F3n y Organizaci\u00F3n del Hogar en AliExpress",
    metaDesc: "Buscador inteligente con IA para productos de decoraci\u00F3n y organizaci\u00F3n del hogar en AliExpress.",
    heroTitle: 'Encuentra Todo para <strong>Tu Hogar</strong>',
    heroSubtitle: 'Nuestra IA escanea miles de productos y te encuentra las mejores ofertas en decoraci\u00F3n, organizaci\u00F3n y estilo para el hogar',
    searchPlaceholder: "Busca productos para el hogar... \u{1F3E0}\u2728",
    searchButton: "Buscar",
    aiBadge: "\u{1F916} Impulsado por IA \u2014 encuentra las mejores ofertas",
    banner: '<strong>B\u00FAsqueda IA:</strong> Escribe lo que necesitas y nuestra IA encontrar\u00E1 los productos m\u00E1s relevantes de AliExpress',
    popularTitle: "\u{1F525} B\u00FAsquedas Populares",
    chips: [
      { emoji: "\u{1F4E6}", text: "Organizador cajones", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "Planta artificial", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "L\u00E1mpara mesa", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Coj\u00EDn decorativo", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "Organizador armario", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "Almacenaje cocina", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "Espejo decorativo", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "Velas arom\u00E1ticas", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F Categor\u00EDas",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "Sal\u00F3n", desc: "Cojines, alfombras, cortinas, decoraci\u00F3n", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "Dormitorio", desc: "Ropa de cama, almohadas, organizaci\u00F3n", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "Cocina", desc: "Organizadores, utensilios, almacenaje", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "Plantas y Decoraci\u00F3n", desc: "Plantas artificiales, jarrones, adornos", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "Iluminaci\u00F3n", desc: "L\u00E1mparas, LED, candelabros, ambiente", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "Almacenaje", desc: "Estantes, cajas, organizadores", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "Ba\u00F1o", desc: "Organizadores, accesorios, estantes", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "Oficina en Casa", desc: "Organizaci\u00F3n de escritorio, estantes", q: "home office organization desk" },
    ],
    resultsTitle: "Resultados de B\u00FAsqueda",
    clearBtn: "\u2715 Limpiar",
    productsLabel: "productos",
    loadMore: "\u{1F3E0} Cargar M\u00E1s Productos",
    loading: "\u23F3 Cargando...",
    noResults: "No se encontraron resultados. \u00A1Prueba otra b\u00FAsqueda!",
    noMoreProducts: "No hay m\u00E1s productos \u{1F3E0}",
    aiScanning: "La IA est\u00E1 escaneando miles de productos para encontrar las mejores ofertas... \u{1F3E0}",
    orders: "pedidos",
    buyNow: "\u{1F6D2} Comprar",
    freeShipping: "Env\u00EDo Gratis",
    shipping: "Env\u00EDo",
    featuresTitle: "\u{1F916} \u00BFC\u00F3mo Funciona Nuestra IA?",
    features: [
      { emoji: "\u{1F9E0}", title: "IA Que Te Entiende", desc: "Escribe en espa\u00F1ol \u2014 la IA traduce, entiende y encuentra exactamente lo que buscas" },
      { emoji: "\u{1F48E}", title: "Filtrado Inteligente", desc: "La IA analiza miles de productos y muestra solo las mejores ofertas con calificaciones altas" },
      { emoji: "\u{1F680}", title: "Precios Imbatibles", desc: "Directo de AliExpress \u2014 ahorra hasta un 80% comparado con tiendas locales" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} \u00A1Hola! Soy Homie, tu asesora de decoraci\u00F3n del hogar.\n\u00BFQu\u00E9 buscas? \u00BFOrganizaci\u00F3n de cocina? \u00BFDecoraci\u00F3n de sal\u00F3n? \u00BFIluminaci\u00F3n?\nTe encontrar\u00E9 las mejores ofertas en AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "Ideas para organizar cocina" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Decoraci\u00F3n sal\u00F3n econ\u00F3mica" },
      { emoji: "\u{1F4A1}", text: "Iluminaci\u00F3n ambiente dormitorio" },
      { emoji: "\u{1FAB4}", text: "Plantas artificiales realistas" },
    ],
    chatPlaceholder: "Pregunta a Homie...",
    footerText: "Buscador inteligente con IA de productos de decoraci\u00F3n del hogar en AliExpress",
    footerPrivacy: "Pol\u00EDtica de Privacidad",
    footerTerms: "T\u00E9rminos de Uso",
    footerCopy: "\u00A9 2026 HomeFind. Todos los derechos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "\u00BFC\u00F3mo instalar?",
    installTitle: "\u00A1Instala HomeFind!",
    installSubtitle: "Busca productos para el hogar m\u00E1s r\u00E1pido desde tu m\u00F3vil \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} \u00A1Pregunta a Homie!",
  },

  de: {
    lang: "de", dir: "ltr", locale: "de_DE",
    currency: "EUR", currencySymbol: "\u20AC", country: "DE",
    siteName: "HomeFind",
    metaTitle: "\u{1F3E0} HomeFind | Wohndeko & Organisation von AliExpress",
    metaDesc: "Intelligente KI-Suchmaschine f\u00FCr Wohndeko und Organisation auf AliExpress.",
    heroTitle: 'Finden Sie Alles f\u00FCr <strong>Ihr Zuhause</strong>',
    heroSubtitle: 'Unsere KI durchsucht tausende Produkte und findet die besten Angebote f\u00FCr Wohndeko, Organisation und Einrichtung',
    searchPlaceholder: "Wohnprodukte suchen... \u{1F3E0}\u2728",
    searchButton: "Suchen",
    aiBadge: "\u{1F916} KI-gest\u00FCtzt \u2014 findet die besten Angebote",
    banner: '<strong>Intelligente KI-Suche:</strong> Geben Sie ein, was Sie brauchen, und unsere KI findet die relevantesten Produkte auf AliExpress',
    popularTitle: "\u{1F525} Beliebte Suchen",
    chips: [
      { emoji: "\u{1F4E6}", text: "Schubladen-Organizer", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "Kunstpflanze", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "Tischlampe", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Dekokissen", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "Schrank-Organizer", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "K\u00FCchenregal", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "Dekospiegel", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "Duftkerzen", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F Kategorien",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "Wohnzimmer", desc: "Kissen, Teppiche, Vorh\u00E4nge, Deko", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "Schlafzimmer", desc: "Bettw\u00E4sche, Kissen, Organisation", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "K\u00FCche", desc: "Organizer, Utensilien, Aufbewahrung", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "Pflanzen & Deko", desc: "Kunstpflanzen, Vasen, Ornamente", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "Beleuchtung", desc: "Lampen, LED, Kronleuchter", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "Aufbewahrung", desc: "Regale, Boxen, Organizer", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "Badezimmer", desc: "Organizer, Zubeh\u00F6r, Regale", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "Homeoffice", desc: "Schreibtisch-Organisation, Regale", q: "home office organization desk" },
    ],
    resultsTitle: "Suchergebnisse",
    clearBtn: "\u2715 L\u00F6schen",
    productsLabel: "Produkte",
    loadMore: "\u{1F3E0} Mehr Produkte Laden",
    loading: "\u23F3 Laden...",
    noResults: "Keine Ergebnisse gefunden. Versuchen Sie eine andere Suche!",
    noMoreProducts: "Keine weiteren Produkte \u{1F3E0}",
    aiScanning: "Die KI durchsucht tausende Produkte nach den besten Angeboten... \u{1F3E0}",
    orders: "Bestellungen",
    buyNow: "\u{1F6D2} Kaufen",
    freeShipping: "Kostenloser Versand",
    shipping: "Versand",
    featuresTitle: "\u{1F916} Wie Unsere KI F\u00FCr Sie Arbeitet",
    features: [
      { emoji: "\u{1F9E0}", title: "KI Versteht Sie", desc: "Schreiben Sie auf Deutsch \u2014 die KI \u00FCbersetzt, versteht und findet genau das Richtige" },
      { emoji: "\u{1F48E}", title: "Intelligente Filterung", desc: "Die KI analysiert tausende Produkte und zeigt nur die besten Angebote mit Top-Bewertungen" },
      { emoji: "\u{1F680}", title: "Unschlagbare Preise", desc: "Direkt von AliExpress \u2014 sparen Sie bis zu 80% gegen\u00FCber lokalen Gesch\u00E4ften" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} Hallo! Ich bin Homie, Ihr Wohndeko-Berater!\nWas suchen Sie? K\u00FCchenorganisation? Wohnzimmerdeko? Beleuchtung?\nIch finde die besten Angebote auf AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "Ideen f\u00FCr K\u00FCchenorganisation" },
      { emoji: "\u{1F6CB}\uFE0F", text: "G\u00FCnstige Wohnzimmerdeko" },
      { emoji: "\u{1F4A1}", text: "Stimmungsbeleuchtung Schlafzimmer" },
      { emoji: "\u{1FAB4}", text: "Realistische Kunstpflanzen" },
    ],
    chatPlaceholder: "Frag Homie...",
    footerText: "Intelligente KI-Suchmaschine f\u00FCr Wohndeko-Produkte auf AliExpress",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
    footerCopy: "\u00A9 2026 HomeFind. Alle Rechte vorbehalten.",
    langLabel: "Sprache",
    installBtn: "Installieren",
    installHow: "Wie installieren?",
    installTitle: "Installieren Sie HomeFind!",
    installSubtitle: "Suchen Sie Wohnprodukte schneller direkt vom Handy \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} Frag Homie!",
  },

  fr: {
    lang: "fr", dir: "ltr", locale: "fr_FR",
    currency: "EUR", currencySymbol: "\u20AC", country: "FR",
    siteName: "HomeFind",
    metaTitle: "\u{1F3E0} HomeFind | D\u00E9coration & Organisation Maison sur AliExpress",
    metaDesc: "Moteur de recherche IA pour produits de d\u00E9coration et organisation maison sur AliExpress.",
    heroTitle: 'Trouvez Tout pour <strong>Votre Maison</strong>',
    heroSubtitle: "Notre IA analyse des milliers de produits et trouve les meilleures offres en d\u00E9coration, organisation et am\u00E9nagement",
    searchPlaceholder: "Cherchez des produits maison... \u{1F3E0}\u2728",
    searchButton: "Rechercher",
    aiBadge: "\u{1F916} Propuls\u00E9 par l'IA \u2014 trouve les meilleures offres",
    banner: "<strong>Recherche IA:</strong> Tapez ce dont vous avez besoin et notre IA trouvera les produits les plus pertinents sur AliExpress",
    popularTitle: "\u{1F525} Recherches Populaires",
    chips: [
      { emoji: "\u{1F4E6}", text: "Organisateur tiroir", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "Plante artificielle", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "Lampe de table", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "Coussin d\u00E9coratif", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "Organisateur placard", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "Rangement cuisine", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "Miroir d\u00E9coratif", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "Bougies parfum\u00E9es", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F Cat\u00E9gories",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "Salon", desc: "Coussins, tapis, rideaux, d\u00E9coration", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "Chambre", desc: "Literie, oreillers, organisation", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "Cuisine", desc: "Organisateurs, ustensiles, rangement", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "Plantes & D\u00E9co", desc: "Plantes artificielles, vases, ornements", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "\u00C9clairage", desc: "Lampes, LED, lustres, ambiance", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "Rangement", desc: "\u00C9tag\u00E8res, bo\u00EEtes, organisateurs", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "Salle de Bain", desc: "Organisateurs, accessoires, \u00E9tag\u00E8res", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "Bureau \u00E0 Domicile", desc: "Organisation bureau, \u00E9tag\u00E8res", q: "home office organization desk" },
    ],
    resultsTitle: "R\u00E9sultats de Recherche",
    clearBtn: "\u2715 Effacer",
    productsLabel: "produits",
    loadMore: "\u{1F3E0} Charger Plus de Produits",
    loading: "\u23F3 Chargement...",
    noResults: "Aucun r\u00E9sultat trouv\u00E9. Essayez une autre recherche !",
    noMoreProducts: "Plus de produits \u{1F3E0}",
    aiScanning: "L'IA analyse des milliers de produits pour trouver les meilleures offres... \u{1F3E0}",
    orders: "commandes",
    buyNow: "\u{1F6D2} Acheter",
    freeShipping: "Livraison Gratuite",
    shipping: "Livraison",
    featuresTitle: "\u{1F916} Comment Notre IA Travaille Pour Vous",
    features: [
      { emoji: "\u{1F9E0}", title: "IA Qui Vous Comprend", desc: "\u00C9crivez en fran\u00E7ais \u2014 l'IA traduit, comprend et trouve exactement ce que vous cherchez" },
      { emoji: "\u{1F48E}", title: "Filtrage Intelligent", desc: "L'IA analyse des milliers de produits et affiche uniquement les meilleures offres" },
      { emoji: "\u{1F680}", title: "Prix Imbattables", desc: "Direct d'AliExpress \u2014 \u00E9conomisez jusqu'\u00E0 80% par rapport aux magasins locaux" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} Salut ! Je suis Homie, votre conseiller d\u00E9co maison !\nQue cherchez-vous ? Organisation cuisine ? D\u00E9co salon ? \u00C9clairage ?\nJe vous trouverai les meilleures offres sur AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "Id\u00E9es organisation cuisine" },
      { emoji: "\u{1F6CB}\uFE0F", text: "D\u00E9co salon pas cher" },
      { emoji: "\u{1F4A1}", text: "\u00C9clairage ambiance chambre" },
      { emoji: "\u{1FAB4}", text: "Plantes artificielles r\u00E9alistes" },
    ],
    chatPlaceholder: "Demandez \u00E0 Homie...",
    footerText: "Moteur de recherche IA intelligent pour produits de d\u00E9coration maison sur AliExpress",
    footerPrivacy: "Politique de Confidentialit\u00E9",
    footerTerms: "Conditions d'Utilisation",
    footerCopy: "\u00A9 2026 HomeFind. Tous droits r\u00E9serv\u00E9s.",
    langLabel: "Langue",
    installBtn: "Installer",
    installHow: "Comment installer ?",
    installTitle: "Installez HomeFind !",
    installSubtitle: "Cherchez des produits maison plus vite depuis votre mobile \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} Demandez \u00E0 Homie !",
  },

  ru: {
    lang: "ru", dir: "ltr", locale: "ru_RU",
    currency: "RUB", currencySymbol: "\u20BD", country: "RU",
    siteName: "HomeFind",
    metaTitle: "\u{1F3E0} HomeFind | \u0414\u0435\u043A\u043E\u0440 \u0438 \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0414\u043E\u043C\u0430 \u0441 AliExpress",
    metaDesc: "\u0423\u043C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0441 \u0418\u0418 \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u0435\u043A\u043E\u0440\u0430 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043E\u043C\u0430 \u043D\u0430 AliExpress.",
    heroTitle: '\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0412\u0441\u0451 \u0434\u043B\u044F <strong>\u0412\u0430\u0448\u0435\u0433\u043E \u0414\u043E\u043C\u0430</strong>',
    heroSubtitle: '\u041D\u0430\u0448 \u0418\u0418 \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0434\u0435\u043A\u043E\u0440\u0443, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043E\u0431\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0434\u043E\u043C\u0430',
    searchPlaceholder: "\u0418\u0449\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430... \u{1F3E0}\u2728",
    searchButton: "\u0418\u0441\u043A\u0430\u0442\u044C",
    aiBadge: "\u{1F916} \u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0418\u0418 \u2014 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    banner: '<strong>\u0423\u043C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0418\u0418:</strong> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E, \u0438 \u043D\u0430\u0448 \u0418\u0418 \u043D\u0430\u0439\u0434\u0451\u0442 \u0441\u0430\u043C\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u043D\u0430 AliExpress',
    popularTitle: "\u{1F525} \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0417\u0430\u043F\u0440\u043E\u0441\u044B",
    chips: [
      { emoji: "\u{1F4E6}", text: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440 \u0434\u043B\u044F \u044F\u0449\u0438\u043A\u043E\u0432", q: "drawer organizer" },
      { emoji: "\u{1FAB4}", text: "\u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435", q: "artificial plant decor" },
      { emoji: "\u{1F4A1}", text: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F \u043B\u0430\u043C\u043F\u0430", q: "table lamp LED" },
      { emoji: "\u{1F6CB}\uFE0F", text: "\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0443\u0448\u043A\u0430", q: "decorative throw pillow" },
      { emoji: "\u{1F9F9}", text: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440 \u0434\u043B\u044F \u0448\u043A\u0430\u0444\u0430", q: "closet organizer storage" },
      { emoji: "\u{1F37D}\uFE0F", text: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440 \u043A\u0443\u0445\u043D\u044F", q: "kitchen storage rack organizer" },
      { emoji: "\u{1FA9E}", text: "\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E", q: "decorative wall mirror" },
      { emoji: "\u{1F56F}\uFE0F", text: "\u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0432\u0435\u0447\u0438", q: "scented candles home" },
    ],
    categoriesTitle: "\u{1F3F7}\uFE0F \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
    categories: [
      { emoji: "\u{1F6CB}\uFE0F", name: "\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F", desc: "\u041F\u043E\u0434\u0443\u0448\u043A\u0438, \u043A\u043E\u0432\u0440\u044B, \u0448\u0442\u043E\u0440\u044B, \u0434\u0435\u043A\u043E\u0440", q: "living room decor" },
      { emoji: "\u{1F6CF}\uFE0F", name: "\u0421\u043F\u0430\u043B\u044C\u043D\u044F", desc: "\u041F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0431\u0435\u043B\u044C\u0451, \u043F\u043E\u0434\u0443\u0448\u043A\u0438, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F", q: "bedroom organization decor" },
      { emoji: "\u{1F373}", name: "\u041A\u0443\u0445\u043D\u044F", desc: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440\u044B, \u0443\u0442\u0432\u0430\u0440\u044C, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435", q: "kitchen organizer storage" },
      { emoji: "\u{1FAB4}", name: "\u0420\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u0438 \u0414\u0435\u043A\u043E\u0440", desc: "\u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F, \u0432\u0430\u0437\u044B, \u0443\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F", q: "home decor plants vase" },
      { emoji: "\u{1F4A1}", name: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435", desc: "\u041B\u0430\u043C\u043F\u044B, LED, \u043B\u044E\u0441\u0442\u0440\u044B, \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430", q: "home lighting LED lamp" },
      { emoji: "\u{1F4E6}", name: "\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435", desc: "\u041F\u043E\u043B\u043A\u0438, \u043A\u043E\u0440\u043E\u0431\u043A\u0438, \u043E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440\u044B", q: "storage organization home" },
      { emoji: "\u{1F6C1}", name: "\u0412\u0430\u043D\u043D\u0430\u044F", desc: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440\u044B, \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B, \u043F\u043E\u043B\u043A\u0438", q: "bathroom accessories organizer" },
      { emoji: "\u{1F5A5}\uFE0F", name: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u041E\u0444\u0438\u0441", desc: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u0442\u043E\u043B\u0430, \u043F\u043E\u043B\u043A\u0438, \u0441\u0432\u0435\u0442", q: "home office organization desk" },
    ],
    resultsTitle: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u041F\u043E\u0438\u0441\u043A\u0430",
    clearBtn: "\u2715 \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    productsLabel: "\u0442\u043E\u0432\u0430\u0440\u043E\u0432",
    loadMore: "\u{1F3E0} \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0415\u0449\u0451",
    loading: "\u23F3 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    noResults: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441!",
    noMoreProducts: "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u{1F3E0}",
    aiScanning: "\u0418\u0418 \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043F\u043E\u0438\u0441\u043A\u0430\u0445 \u043B\u0443\u0447\u0448\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439... \u{1F3E0}",
    orders: "\u0437\u0430\u043A\u0430\u0437\u043E\u0432",
    buyNow: "\u{1F6D2} \u041A\u0443\u043F\u0438\u0442\u044C",
    freeShipping: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
    shipping: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
    featuresTitle: "\u{1F916} \u041A\u0430\u043A \u041D\u0430\u0448 \u0418\u0418 \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0414\u043B\u044F \u0412\u0430\u0441",
    features: [
      { emoji: "\u{1F9E0}", title: "\u0418\u0418 \u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0412\u0430\u0441", desc: "\u041F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u2014 \u0418\u0418 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u0442, \u043F\u043E\u0439\u043C\u0451\u0442 \u0438 \u043D\u0430\u0439\u0434\u0451\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u043E, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E" },
      { emoji: "\u{1F48E}", title: "\u0423\u043C\u043D\u0430\u044F \u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F", desc: "\u0418\u0418 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430\u043C\u0438" },
      { emoji: "\u{1F680}", title: "\u041D\u0435\u043F\u0440\u0435\u0432\u0437\u043E\u0439\u0434\u0451\u043D\u043D\u044B\u0435 \u0426\u0435\u043D\u044B", desc: "\u041D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 AliExpress \u2014 \u044D\u043A\u043E\u043D\u043E\u043C\u044C\u0442\u0435 \u0434\u043E 80% \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043C\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u043C\u0438" },
    ],
    chatName: "Homie",
    chatWelcome: "\u{1F3E0} \u041F\u0440\u0438\u0432\u0435\u0442! \u042F Homie, \u0432\u0430\u0448 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u043F\u043E \u0434\u0435\u043A\u043E\u0440\u0443 \u0434\u043E\u043C\u0430!\n\u0427\u0442\u043E \u0438\u0449\u0435\u0442\u0435? \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043A\u0443\u0445\u043D\u0438? \u0414\u0435\u043A\u043E\u0440 \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439? \u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435?\n\u042F \u043D\u0430\u0439\u0434\u0443 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 AliExpress \u{1F6D2}",
    chatSuggestions: [
      { emoji: "\u{1F4E6}", text: "\u0418\u0434\u0435\u0438 \u0434\u043B\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043A\u0443\u0445\u043D\u0438" },
      { emoji: "\u{1F6CB}\uFE0F", text: "\u0411\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0434\u0435\u043A\u043E\u0440 \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439" },
      { emoji: "\u{1F4A1}", text: "\u0410\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u043E\u0435 \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0441\u043F\u0430\u043B\u044C\u043D\u0438" },
      { emoji: "\u{1FAB4}", text: "\u0420\u0435\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F" },
    ],
    chatPlaceholder: "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 Homie...",
    footerText: "\u0423\u043C\u043D\u044B\u0439 \u0418\u0418-\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0434\u0435\u043A\u043E\u0440\u0430 \u0434\u043E\u043C\u0430 \u043D\u0430 AliExpress",
    footerPrivacy: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    footerTerms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    footerCopy: "\u00A9 2026 HomeFind. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.",
    langLabel: "\u042F\u0437\u044B\u043A",
    installBtn: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
    installHow: "\u041A\u0430\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C?",
    installTitle: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 HomeFind!",
    installSubtitle: "\u0418\u0449\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u0440\u044F\u043C\u043E \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u{1F4F2}",
    chatFabLabel: "\u{1F4AC} \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 Homie!",
  },
};

// Country -> language mapping for auto-detection
const COUNTRY_LANG_MAP = {
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
  IL: "he", US: "en", GB: "en", CA: "en", AU: "en", NZ: "en", IE: "en", ZA: "en",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  DE: "de", AT: "de", CH: "de",
  FR: "fr", BE: "fr", SN: "fr", CI: "fr", MA: "fr", TN: "fr",
  RU: "ru", UA: "ru", KZ: "ru", BY: "ru",
};

// Language flag emojis
const LANG_FLAGS = {
  pt: "\u{1F1E7}\u{1F1F7}", he: "\u{1F1EE}\u{1F1F1}", en: "\u{1F1FA}\u{1F1F8}", es: "\u{1F1EA}\u{1F1F8}", de: "\u{1F1E9}\u{1F1EA}", fr: "\u{1F1EB}\u{1F1F7}", ru: "\u{1F1F7}\u{1F1FA}"
};

const LANG_NAMES = {
  pt: "Portugu\u00EAs", he: "\u05E2\u05D1\u05E8\u05D9\u05EA", en: "English", es: "Espa\u00F1ol", de: "Deutsch", fr: "Fran\u00E7ais", ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
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

  // 4. Default to Portuguese for this version
  return "pt";
}

/**
 * Get translation object for current language
 */
function getTranslation(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS["pt"];
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
  if (seoContent) seoContent.style.display = lang === "pt" ? "" : "none";
  const faqSection = document.getElementById("faqSection");
  if (faqSection) faqSection.style.display = lang === "pt" ? "" : "none";

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
