/**
 * Pet Find Me - Internationalization (i18n) - Portuguese Brazil Version
 * Supports: he, en, es, de, pt, fr, ru
 * Default: pt (Brazilian Portuguese)
 */

const TRANSLATIONS = {
  he: {
    // Meta
    lang: "he", dir: "rtl", locale: "he_IL",
    currency: "ILS", currencySymbol: "\u20AA", country: "IL",
    siteName: "\u05E4\u05D8 \u05E4\u05D9\u05D9\u05E0\u05D3 \u05DE\u05D9",
    metaTitle: "\uD83D\uDC3E \u05E4\u05D8 \u05E4\u05D9\u05D9\u05E0\u05D3 \u05DE\u05D9 | \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3 \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1",
    metaDesc: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D7\u05DB\u05DD \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3 \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1.",
    heroTitle: '\u05DE\u05E6\u05D0\u05D5 \u05D4\u05DB\u05DC <strong>\u05DC\u05D7\u05D9\u05D9\u05EA \u05D4\u05DE\u05D7\u05DE\u05D3</strong> \u05E9\u05DC\u05DB\u05DD',
    heroSubtitle: '\u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E9\u05DC\u05E0\u05D5 \u05E1\u05D5\u05E8\u05E7\u05EA \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05D0\u05EA \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DE\u05D9\u05DD',
    searchPlaceholder: "\u05DB\u05EA\u05D1\u05D5 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u2014 \u05D4-AI \u05D9\u05DE\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D4\u05DB\u05DC \uD83D\uDC36\uD83D\uDC31",
    searchButton: "\u05DC\u05D7\u05E6\u05D5 \u05DC\u05D7\u05D9\u05E4\u05D5\u05E9",
    aiBadge: "\uD83E\uDD16 \u05DE\u05D5\u05E0\u05E2 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u2014 \u05DE\u05D5\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1",
    banner: '<strong>\u05D7\u05D9\u05E4\u05D5\u05E9 AI \u05D7\u05DB\u05DD:</strong> \u05DB\u05EA\u05D1\u05D5 \u05DE\u05D4 \u05E9\u05D1\u05D0 \u05DC\u05DB\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05DE\u05E6\u05D0 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DB\u05D9 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1',
    popularTitle: "\uD83D\uDD25 \u05D7\u05D9\u05E4\u05D5\u05E9\u05D9\u05DD \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9\u05D9\u05DD",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "\u05E6\u05E2\u05E6\u05D5\u05E2 \u05DC\u05DB\u05DC\u05D1", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "\u05DE\u05D6\u05D5\u05DF \u05DC\u05D7\u05EA\u05D5\u05DC\u05D9\u05DD", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "\u05E8\u05E6\u05D5\u05E2\u05D4 \u05DC\u05DB\u05DC\u05D1", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "\u05E2\u05E5 \u05D7\u05EA\u05D5\u05DC\u05D9\u05DD", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA",
    categories: [
      { emoji: "\uD83D\uDC36", name: "\u05DB\u05DC\u05D1\u05D9\u05DD", desc: "\u05DE\u05D6\u05D5\u05DF, \u05E6\u05E2\u05E6\u05D5\u05E2\u05D9\u05DD, \u05E8\u05E6\u05D5\u05E2\u05D5\u05EA, \u05DE\u05D9\u05D8\u05D5\u05EA", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "\u05D7\u05EA\u05D5\u05DC\u05D9\u05DD", desc: "\u05DE\u05D6\u05D5\u05DF, \u05D7\u05D5\u05DC, \u05DE\u05D2\u05E8\u05D3\u05D5\u05EA, \u05E6\u05E2\u05E6\u05D5\u05E2\u05D9\u05DD", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "\u05E6\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD", desc: "\u05DB\u05DC\u05D5\u05D1\u05D9\u05DD, \u05DE\u05D6\u05D5\u05DF, \u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "\u05D3\u05D2\u05D9\u05DD", desc: "\u05D0\u05E7\u05D5\u05D5\u05E8\u05D9\u05D5\u05DE\u05D9\u05DD, \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05DE\u05D6\u05D5\u05DF", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "\u05DE\u05DB\u05E8\u05E1\u05DE\u05D9\u05DD", desc: "\u05DB\u05DC\u05D5\u05D1\u05D9\u05DD, \u05D2\u05DC\u05D2\u05DC\u05D9\u05DD, \u05DE\u05D6\u05D5\u05DF", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "\u05E9\u05E4\u05E0\u05D9\u05DD", desc: "\u05DB\u05DC\u05D5\u05D1\u05D9\u05DD, \u05DE\u05D6\u05D5\u05DF, \u05E6\u05E2\u05E6\u05D5\u05E2\u05D9\u05DD", q: "rabbit supplies" },
    ],
    resultsTitle: "\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",
    clearBtn: "\u2715 \u05E0\u05E7\u05D4",
    productsLabel: "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",
    loadMore: "\uD83D\uDC3E \u05D8\u05E2\u05DF \u05E2\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",
    loading: "\u23F3 \u05D8\u05D5\u05E2\u05DF...",
    noResults: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA. \u05E0\u05E1\u05D5 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8!",
    noMoreProducts: "\u05D0\u05D9\u05DF \u05E2\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \uD83D\uDC3E",
    aiScanning: "\u05D4-AI \u05E1\u05D5\u05E8\u05E7 \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1\u05D9\u05DD... \uD83D\uDC3E",
    orders: "\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA",
    buyNow: "\uD83D\uDED2 \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4",
    freeShipping: "\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D7\u05D9\u05E0\u05DD",
    shipping: "\u05DE\u05E9\u05DC\u05D5\u05D7",
    featuresTitle: "\uD83E\uDD16 \u05D0\u05D9\u05DA \u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05D5\u05D1\u05D3\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD?",
    features: [
      { emoji: "\uD83E\uDDE0", title: "AI \u05E9\u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05E9\u05DC\u05DB\u05DD", desc: "\u05DB\u05EA\u05D1\u05D5 \u05D1\u05E9\u05E4\u05D4 \u05E9\u05DC\u05DB\u05DD \u2014 \u05D4-AI \u05DE\u05EA\u05E8\u05D2\u05DD, \u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05DE\u05D5\u05E6\u05D0 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E9\u05D7\u05D9\u05E4\u05E9\u05EA\u05DD" },
      { emoji: "\uD83D\uDC8E", title: "\u05E1\u05D9\u05E0\u05D5\u05DF \u05D7\u05DB\u05DD", desc: "\u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E1\u05D5\u05E8\u05E7\u05EA \u05D0\u05DC\u05E4\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05DE\u05E6\u05D9\u05D2\u05D4 \u05E8\u05E7 \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DE\u05D9\u05DD \u05E2\u05DD \u05D3\u05D9\u05E8\u05D5\u05D2\u05D9\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD" },
      { emoji: "\uD83D\uDE80", title: "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E9\u05DC\u05D0 \u05EA\u05DE\u05E6\u05D0\u05D5", desc: "\u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1 \u05E2\u05DD \u05DE\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DC\u05D9\u05DB\u05DD \u2014 \u05D7\u05E1\u05DB\u05D5 \u05E2\u05D3 80% \u05DE\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD" },
    ],
    chatName: "\u05E4\u05D0\u05D5",
    chatWelcome: "\uD83D\uDC3E \u05D4\u05D9\u05D9! \u05D0\u05E0\u05D9 \u05E4\u05D0\u05D5, \u05D4\u05D9\u05D5\u05E2\u05E6\u05EA \u05E9\u05DC\u05DB\u05DD \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3!\n\u05E1\u05E4\u05E8\u05D5 \u05DC\u05D9 \u05DE\u05D4 \u05D9\u05E9 \u05DC\u05DB\u05DD \u05D1\u05D1\u05D9\u05EA \u2014 \u05DB\u05DC\u05D1? \u05D7\u05EA\u05D5\u05DC? \u05DE\u05E9\u05D4\u05D5 \u05D0\u05D7\u05E8?\n\u05D5\u05D0\u05E0\u05D9 \u05D0\u05DE\u05E6\u05D0 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05DC\u05D9\u05DD \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1\u05D9\u05DD \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1 \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "\u05DE\u05D4 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05E7\u05E0\u05D5\u05EA \u05DC\u05DB\u05DC\u05D1?" },
      { emoji: "\uD83D\uDC31", text: "\u05E6\u05E2\u05E6\u05D5\u05E2\u05D9\u05DD \u05DC\u05D7\u05EA\u05D5\u05DC" },
      { emoji: "\uD83C\uDF81", text: "\u05DE\u05EA\u05E0\u05D4 \u05DC\u05D1\u05E2\u05DC \u05DB\u05DC\u05D1" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "\u05DE\u05D9\u05D8\u05D4 \u05DC\u05DB\u05DC\u05D1 \u05E7\u05D8\u05DF" },
    ],
    chatPlaceholder: "\u05E9\u05D0\u05DC\u05D5 \u05D0\u05EA \u05E4\u05D0\u05D5...",
    footerText: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 AI \u05D7\u05DB\u05DD \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3 \u05DE\u05D0\u05DC\u05D9 \u05D0\u05E7\u05E1\u05E4\u05E8\u05E1",
    footerPrivacy: "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA",
    footerTerms: "\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9",
    footerCopy: "\u00A9 2026 Pet Find Me. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA.",
    langLabel: "\u05E9\u05E4\u05D4",
    installBtn: "\u05D4\u05EA\u05E7\u05E0\u05D4",
    installHow: "\u05D0\u05D9\u05DA \u05DE\u05EA\u05E7\u05D9\u05E0\u05D9\u05DD?",
    installTitle: "\u05D4\u05EA\u05E7\u05D9\u05E0\u05D5 \u05D0\u05EA \u05E4\u05D8 \u05E4\u05D9\u05D9\u05E0\u05D3 \u05DE\u05D9!",
    installSubtitle: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05E0\u05D9\u05D9\u05D3 \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC \u05E9\u05D0\u05DC\u05D5 \u05D0\u05EA \u05E4\u05D0\u05D5!",
  },

  en: {
    lang: "en", dir: "ltr", locale: "en_US",
    currency: "USD", currencySymbol: "$", country: "US",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | Best Pet Products from AliExpress",
    metaDesc: "Smart AI search engine for pet products on AliExpress. Food, toys, accessories for dogs, cats & more \u2014 at the best prices with free shipping.",
    heroTitle: 'Find Everything for <strong>Your Pet</strong>',
    heroSubtitle: 'Our AI scans thousands of products and finds you the best deals for dogs, cats and all pets',
    searchPlaceholder: "Search for pet products... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "Search",
    aiBadge: "\uD83E\uDD16 Powered by AI \u2014 finds you the best deals",
    banner: '<strong>Smart AI Search:</strong> Type what you need and our AI will find the most relevant products from AliExpress',
    popularTitle: "\uD83D\uDD25 Popular Searches",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "Dog Toy", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "Cat Food", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "Dog Leash", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "Cat Tree", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F Categories",
    categories: [
      { emoji: "\uD83D\uDC36", name: "Dogs", desc: "Food, toys, leashes, beds", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "Cats", desc: "Food, litter, scratchers, toys", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "Birds", desc: "Cages, food, accessories", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "Fish", desc: "Aquariums, filters, food", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "Small Pets", desc: "Cages, wheels, food", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "Rabbits", desc: "Cages, food, toys", q: "rabbit supplies" },
    ],
    resultsTitle: "Search Results",
    clearBtn: "\u2715 Clear",
    productsLabel: "products",
    loadMore: "\uD83D\uDC3E Load More Products",
    loading: "\u23F3 Loading...",
    noResults: "No results found. Try a different search!",
    noMoreProducts: "No more products \uD83D\uDC3E",
    aiScanning: "AI is scanning thousands of products to find you the best deals... \uD83D\uDC3E",
    orders: "orders",
    buyNow: "\uD83D\uDED2 Buy Now",
    freeShipping: "Free Shipping",
    shipping: "Shipping",
    featuresTitle: "\uD83E\uDD16 How Our AI Works for You",
    features: [
      { emoji: "\uD83E\uDDE0", title: "AI That Understands You", desc: "Type naturally \u2014 our AI translates, understands context, and finds exactly what you need" },
      { emoji: "\uD83D\uDC8E", title: "Smart Filtering", desc: "AI scans thousands of products and shows only the best deals with high ratings" },
      { emoji: "\uD83D\uDE80", title: "Unbeatable Prices", desc: "Direct from AliExpress \u2014 save up to 80% compared to retail stores" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E Hi! I'm Paw, your pet product advisor!\nTell me about your pet \u2014 dog? cat? something else?\nI'll find you the best deals on AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "What should I buy for my dog?" },
      { emoji: "\uD83D\uDC31", text: "Toys for my cat" },
      { emoji: "\uD83C\uDF81", text: "Gift for a pet owner" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "Bed for a small dog" },
    ],
    chatPlaceholder: "Ask Paw...",
    footerText: "Smart AI search engine for pet products from AliExpress",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerCopy: "\u00A9 2026 Pet Find Me. All rights reserved.",
    langLabel: "Language",
    installBtn: "Install",
    installHow: "How to install?",
    installTitle: "Install Pet Find Me!",
    installSubtitle: "Search products faster directly from your phone \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC Ask Paw!",
  },

  es: {
    lang: "es", dir: "ltr", locale: "es_ES",
    currency: "EUR", currencySymbol: "\u20AC", country: "ES",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | Productos para Mascotas de AliExpress",
    metaDesc: "Buscador inteligente con IA para productos de mascotas en AliExpress. Comida, juguetes, accesorios para perros, gatos y m\u00E1s \u2014 a los mejores precios.",
    heroTitle: 'Encuentra Todo para <strong>Tu Mascota</strong>',
    heroSubtitle: 'Nuestra IA escanea miles de productos y te encuentra las mejores ofertas para perros, gatos y todas las mascotas',
    searchPlaceholder: "Busca productos para mascotas... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "Buscar",
    aiBadge: "\uD83E\uDD16 Impulsado por IA \u2014 encuentra las mejores ofertas",
    banner: '<strong>B\u00FAsqueda IA:</strong> Escribe lo que necesitas y nuestra IA encontrar\u00E1 los productos m\u00E1s relevantes de AliExpress',
    popularTitle: "\uD83D\uDD25 B\u00FAsquedas Populares",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "Juguete perro", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "Comida gato", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "Correa perro", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "\u00C1rbol gato", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F Categor\u00EDas",
    categories: [
      { emoji: "\uD83D\uDC36", name: "Perros", desc: "Comida, juguetes, correas, camas", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "Gatos", desc: "Comida, arena, rascadores, juguetes", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "Aves", desc: "Jaulas, comida, accesorios", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "Peces", desc: "Acuarios, filtros, comida", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "Roedores", desc: "Jaulas, ruedas, comida", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "Conejos", desc: "Jaulas, comida, juguetes", q: "rabbit supplies" },
    ],
    resultsTitle: "Resultados de B\u00FAsqueda",
    clearBtn: "\u2715 Limpiar",
    productsLabel: "productos",
    loadMore: "\uD83D\uDC3E Cargar M\u00E1s Productos",
    loading: "\u23F3 Cargando...",
    noResults: "No se encontraron resultados. \u00A1Prueba otra b\u00FAsqueda!",
    noMoreProducts: "No hay m\u00E1s productos \uD83D\uDC3E",
    aiScanning: "La IA est\u00E1 escaneando miles de productos para encontrar las mejores ofertas... \uD83D\uDC3E",
    orders: "pedidos",
    buyNow: "\uD83D\uDED2 Comprar",
    freeShipping: "Env\u00EDo Gratis",
    shipping: "Env\u00EDo",
    featuresTitle: "\uD83E\uDD16 \u00BFC\u00F3mo Funciona Nuestra IA?",
    features: [
      { emoji: "\uD83E\uDDE0", title: "IA Que Te Entiende", desc: "Escribe en espa\u00F1ol \u2014 la IA traduce, entiende y encuentra exactamente lo que buscas" },
      { emoji: "\uD83D\uDC8E", title: "Filtrado Inteligente", desc: "La IA analiza miles de productos y muestra solo las mejores ofertas con calificaciones altas" },
      { emoji: "\uD83D\uDE80", title: "Precios Imbatibles", desc: "Directo de AliExpress \u2014 ahorra hasta un 80% comparado con tiendas locales" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E \u00A1Hola! Soy Paw, tu asesora de productos para mascotas.\n\u00BFQu\u00E9 mascota tienes? \u00BFPerro? \u00BFGato? \u00BFAlgo m\u00E1s?\nTe encontrar\u00E9 las mejores ofertas en AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "\u00BFQu\u00E9 comprar para mi perro?" },
      { emoji: "\uD83D\uDC31", text: "Juguetes para gato" },
      { emoji: "\uD83C\uDF81", text: "Regalo para due\u00F1o de mascota" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "Cama para perro peque\u00F1o" },
    ],
    chatPlaceholder: "Pregunta a Paw...",
    footerText: "Buscador inteligente con IA de productos para mascotas en AliExpress",
    footerPrivacy: "Pol\u00EDtica de Privacidad",
    footerTerms: "T\u00E9rminos de Uso",
    footerCopy: "\u00A9 2026 Pet Find Me. Todos los derechos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "\u00BFC\u00F3mo instalar?",
    installTitle: "\u00A1Instala Pet Find Me!",
    installSubtitle: "Busca productos m\u00E1s r\u00E1pido desde tu m\u00F3vil \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC \u00A1Pregunta a Paw!",
  },

  de: {
    lang: "de", dir: "ltr", locale: "de_DE",
    currency: "EUR", currencySymbol: "\u20AC", country: "DE",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | Haustierprodukte von AliExpress",
    metaDesc: "Intelligente KI-Suchmaschine f\u00FCr Haustierprodukte auf AliExpress. Futter, Spielzeug, Zubeh\u00F6r f\u00FCr Hunde, Katzen & mehr \u2014 zu den besten Preisen.",
    heroTitle: 'Finden Sie Alles f\u00FCr <strong>Ihr Haustier</strong>',
    heroSubtitle: 'Unsere KI durchsucht tausende Produkte und findet die besten Angebote f\u00FCr Hunde, Katzen und alle Haustiere',
    searchPlaceholder: "Haustierprodukte suchen... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "Suchen",
    aiBadge: "\uD83E\uDD16 KI-gest\u00FCtzt \u2014 findet die besten Angebote",
    banner: '<strong>Intelligente KI-Suche:</strong> Geben Sie ein, was Sie brauchen, und unsere KI findet die relevantesten Produkte auf AliExpress',
    popularTitle: "\uD83D\uDD25 Beliebte Suchen",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "Hundespielzeug", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "Katzenfutter", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "Hundeleine", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "Katzenbaum", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F Kategorien",
    categories: [
      { emoji: "\uD83D\uDC36", name: "Hunde", desc: "Futter, Spielzeug, Leinen, Betten", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "Katzen", desc: "Futter, Streu, Kratzb\u00E4ume, Spielzeug", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "V\u00F6gel", desc: "K\u00E4fige, Futter, Zubeh\u00F6r", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "Fische", desc: "Aquarien, Filter, Futter", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "Nager", desc: "K\u00E4fige, Laufr\u00E4der, Futter", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "Kaninchen", desc: "K\u00E4fige, Futter, Spielzeug", q: "rabbit supplies" },
    ],
    resultsTitle: "Suchergebnisse",
    clearBtn: "\u2715 L\u00F6schen",
    productsLabel: "Produkte",
    loadMore: "\uD83D\uDC3E Mehr Produkte Laden",
    loading: "\u23F3 Laden...",
    noResults: "Keine Ergebnisse gefunden. Versuchen Sie eine andere Suche!",
    noMoreProducts: "Keine weiteren Produkte \uD83D\uDC3E",
    aiScanning: "Die KI durchsucht tausende Produkte nach den besten Angeboten... \uD83D\uDC3E",
    orders: "Bestellungen",
    buyNow: "\uD83D\uDED2 Kaufen",
    freeShipping: "Kostenloser Versand",
    shipping: "Versand",
    featuresTitle: "\uD83E\uDD16 Wie Unsere KI F\u00FCr Sie Arbeitet",
    features: [
      { emoji: "\uD83E\uDDE0", title: "KI Versteht Sie", desc: "Schreiben Sie auf Deutsch \u2014 die KI \u00FCbersetzt, versteht und findet genau das Richtige" },
      { emoji: "\uD83D\uDC8E", title: "Intelligente Filterung", desc: "Die KI analysiert tausende Produkte und zeigt nur die besten Angebote mit Top-Bewertungen" },
      { emoji: "\uD83D\uDE80", title: "Unschlagbare Preise", desc: "Direkt von AliExpress \u2014 sparen Sie bis zu 80% gegen\u00FCber lokalen Gesch\u00E4ften" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E Hallo! Ich bin Paw, Ihr Haustier-Berater!\nWelches Haustier haben Sie? Hund? Katze? Etwas anderes?\nIch finde die besten Angebote auf AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "Was f\u00FCr meinen Hund kaufen?" },
      { emoji: "\uD83D\uDC31", text: "Spielzeug f\u00FCr Katze" },
      { emoji: "\uD83C\uDF81", text: "Geschenk f\u00FCr Tierbesitzer" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "Bett f\u00FCr kleinen Hund" },
    ],
    chatPlaceholder: "Frag Paw...",
    footerText: "Intelligente KI-Suchmaschine f\u00FCr Haustierprodukte auf AliExpress",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
    footerCopy: "\u00A9 2026 Pet Find Me. Alle Rechte vorbehalten.",
    langLabel: "Sprache",
    installBtn: "Installieren",
    installHow: "Wie installieren?",
    installTitle: "Installieren Sie Pet Find Me!",
    installSubtitle: "Suchen Sie Produkte schneller direkt vom Handy \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC Frag Paw!",
  },

  pt: {
    lang: "pt", dir: "ltr", locale: "pt_BR",
    currency: "BRL", currencySymbol: "R$", country: "BR",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | Produtos para Pets do AliExpress",
    metaDesc: "Buscador inteligente com IA para produtos de pets no AliExpress. Ra\u00E7\u00E3o, brinquedos, acess\u00F3rios para c\u00E3es, gatos e mais \u2014 nos melhores pre\u00E7os com frete gr\u00E1tis para o Brasil.",
    heroTitle: 'Encontre Tudo para o <strong>Seu Pet</strong>',
    heroSubtitle: 'Nossa IA analisa milhares de produtos e encontra as melhores ofertas para cachorros, gatos e todos os pets',
    searchPlaceholder: "Busque produtos para pets... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "Buscar",
    aiBadge: "\uD83E\uDD16 Movido por IA \u2014 encontra as melhores ofertas",
    banner: '<strong>Busca IA:</strong> Digite o que precisa e nossa IA encontrar\u00E1 os produtos mais relevantes no AliExpress',
    popularTitle: "\uD83D\uDD25 Buscas Populares",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "Brinquedo cachorro", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "Ra\u00E7\u00E3o gato", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "Coleira cachorro", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "Arranhador gato", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F Categorias",
    categories: [
      { emoji: "\uD83D\uDC36", name: "C\u00E3es", desc: "Ra\u00E7\u00E3o, brinquedos, coleiras, camas", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "Gatos", desc: "Ra\u00E7\u00E3o, areia, arranhadores, brinquedos", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "Aves", desc: "Gaiolas, ra\u00E7\u00E3o, acess\u00F3rios", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "Peixes", desc: "Aqu\u00E1rios, filtros, ra\u00E7\u00E3o", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "Roedores", desc: "Gaiolas, rodas, ra\u00E7\u00E3o", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "Coelhos", desc: "Gaiolas, ra\u00E7\u00E3o, brinquedos", q: "rabbit supplies" },
    ],
    resultsTitle: "Resultados da Busca",
    clearBtn: "\u2715 Limpar",
    productsLabel: "produtos",
    loadMore: "\uD83D\uDC3E Carregar Mais Produtos",
    loading: "\u23F3 Carregando...",
    noResults: "Nenhum resultado encontrado. Tente outra busca!",
    noMoreProducts: "N\u00E3o h\u00E1 mais produtos \uD83D\uDC3E",
    aiScanning: "A IA est\u00E1 escaneando milhares de produtos para encontrar as melhores ofertas... \uD83D\uDC3E",
    orders: "pedidos",
    buyNow: "\uD83D\uDED2 Comprar",
    freeShipping: "Frete Gr\u00E1tis",
    shipping: "Frete",
    featuresTitle: "\uD83E\uDD16 Como Nossa IA Trabalha Para Voc\u00EA",
    features: [
      { emoji: "\uD83E\uDDE0", title: "IA Que Entende Voc\u00EA", desc: "Escreva em portugu\u00EAs \u2014 a IA traduz, entende e encontra exatamente o que voc\u00EA procura" },
      { emoji: "\uD83D\uDC8E", title: "Filtragem Inteligente", desc: "A IA analisa milhares de produtos e mostra apenas as melhores ofertas com avalia\u00E7\u00F5es altas" },
      { emoji: "\uD83D\uDE80", title: "Pre\u00E7os Imbat\u00EDveis", desc: "Direto do AliExpress \u2014 economize at\u00E9 80% comparado com lojas locais" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E Oi! Eu sou o Paw, seu consultor de produtos para pets!\nQue pet voc\u00EA tem? Cachorro? Gato? Outro?\nVou encontrar as melhores ofertas no AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "O que comprar pro meu cachorro?" },
      { emoji: "\uD83D\uDC31", text: "Brinquedos para gato" },
      { emoji: "\uD83C\uDF81", text: "Presente para dono de pet" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "Cama para cachorro pequeno" },
    ],
    chatPlaceholder: "Pergunte ao Paw...",
    footerText: "Buscador inteligente com IA de produtos para pets no AliExpress",
    footerPrivacy: "Pol\u00EDtica de Privacidade",
    footerTerms: "Termos de Uso",
    footerCopy: "\u00A9 2026 Pet Find Me. Todos os direitos reservados.",
    langLabel: "Idioma",
    installBtn: "Instalar",
    installHow: "Como instalar?",
    installTitle: "Instale o Pet Find Me!",
    installSubtitle: "Busque produtos mais r\u00E1pido direto do celular \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC Pergunte ao Paw!",
  },

  fr: {
    lang: "fr", dir: "ltr", locale: "fr_FR",
    currency: "EUR", currencySymbol: "\u20AC", country: "FR",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | Produits pour Animaux sur AliExpress",
    metaDesc: "Moteur de recherche IA pour produits animaliers sur AliExpress. Nourriture, jouets, accessoires pour chiens, chats et plus \u2014 aux meilleurs prix.",
    heroTitle: 'Trouvez Tout pour <strong>Votre Animal</strong>',
    heroSubtitle: 'Notre IA analyse des milliers de produits et trouve les meilleures offres pour chiens, chats et tous les animaux',
    searchPlaceholder: "Cherchez des produits pour animaux... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "Rechercher",
    aiBadge: "\uD83E\uDD16 Propuls\u00E9 par l'IA \u2014 trouve les meilleures offres",
    banner: "<strong>Recherche IA:</strong> Tapez ce dont vous avez besoin et notre IA trouvera les produits les plus pertinents sur AliExpress",
    popularTitle: "\uD83D\uDD25 Recherches Populaires",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "Jouet chien", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "Nourriture chat", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "Laisse chien", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "Arbre \u00E0 chat", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F Cat\u00E9gories",
    categories: [
      { emoji: "\uD83D\uDC36", name: "Chiens", desc: "Nourriture, jouets, laisses, lits", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "Chats", desc: "Nourriture, liti\u00E8re, griffoirs, jouets", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "Oiseaux", desc: "Cages, nourriture, accessoires", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "Poissons", desc: "Aquariums, filtres, nourriture", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "Rongeurs", desc: "Cages, roues, nourriture", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "Lapins", desc: "Cages, nourriture, jouets", q: "rabbit supplies" },
    ],
    resultsTitle: "R\u00E9sultats de Recherche",
    clearBtn: "\u2715 Effacer",
    productsLabel: "produits",
    loadMore: "\uD83D\uDC3E Charger Plus de Produits",
    loading: "\u23F3 Chargement...",
    noResults: "Aucun r\u00E9sultat trouv\u00E9. Essayez une autre recherche !",
    noMoreProducts: "Plus de produits \uD83D\uDC3E",
    aiScanning: "L'IA analyse des milliers de produits pour trouver les meilleures offres... \uD83D\uDC3E",
    orders: "commandes",
    buyNow: "\uD83D\uDED2 Acheter",
    freeShipping: "Livraison Gratuite",
    shipping: "Livraison",
    featuresTitle: "\uD83E\uDD16 Comment Notre IA Travaille Pour Vous",
    features: [
      { emoji: "\uD83E\uDDE0", title: "IA Qui Vous Comprend", desc: "\u00C9crivez en fran\u00E7ais \u2014 l'IA traduit, comprend et trouve exactement ce que vous cherchez" },
      { emoji: "\uD83D\uDC8E", title: "Filtrage Intelligent", desc: "L'IA analyse des milliers de produits et affiche uniquement les meilleures offres" },
      { emoji: "\uD83D\uDE80", title: "Prix Imbattables", desc: "Direct d'AliExpress \u2014 \u00E9conomisez jusqu'\u00E0 80% par rapport aux magasins locaux" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E Salut ! Je suis Paw, votre conseiller produits pour animaux !\nQuel animal avez-vous ? Chien ? Chat ? Autre ?\nJe vous trouverai les meilleures offres sur AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "Quoi acheter pour mon chien ?" },
      { emoji: "\uD83D\uDC31", text: "Jouets pour chat" },
      { emoji: "\uD83C\uDF81", text: "Cadeau pour propri\u00E9taire" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "Lit pour petit chien" },
    ],
    chatPlaceholder: "Demandez \u00E0 Paw...",
    footerText: "Moteur de recherche IA intelligent pour produits animaliers sur AliExpress",
    footerPrivacy: "Politique de Confidentialit\u00E9",
    footerTerms: "Conditions d'Utilisation",
    footerCopy: "\u00A9 2026 Pet Find Me. Tous droits r\u00E9serv\u00E9s.",
    langLabel: "Langue",
    installBtn: "Installer",
    installHow: "Comment installer ?",
    installTitle: "Installez Pet Find Me !",
    installSubtitle: "Cherchez des produits plus vite depuis votre mobile \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC Demandez \u00E0 Paw !",
  },

  ru: {
    lang: "ru", dir: "ltr", locale: "ru_RU",
    currency: "RUB", currencySymbol: "\u20BD", country: "RU",
    siteName: "Pet Find Me",
    metaTitle: "\uD83D\uDC3E Pet Find Me | \u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0441 AliExpress",
    metaDesc: "\u0423\u043C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0441 \u0418\u0418 \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u043D\u0430 AliExpress.",
    heroTitle: '\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0412\u0441\u0451 \u0434\u043B\u044F <strong>\u0412\u0430\u0448\u0435\u0433\u043E \u041F\u0438\u0442\u043E\u043C\u0446\u0430</strong>',
    heroSubtitle: '\u041D\u0430\u0448 \u0418\u0418 \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F',
    searchPlaceholder: "\u0418\u0449\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432... \uD83D\uDC36\uD83D\uDC31",
    searchButton: "\u0418\u0441\u043A\u0430\u0442\u044C",
    aiBadge: "\uD83E\uDD16 \u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0418\u0418 \u2014 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    banner: '<strong>\u0423\u043C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0418\u0418:</strong> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E, \u0438 \u043D\u0430\u0448 \u0418\u0418 \u043D\u0430\u0439\u0434\u0451\u0442 \u0441\u0430\u043C\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u043D\u0430 AliExpress',
    popularTitle: "\uD83D\uDD25 \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0417\u0430\u043F\u0440\u043E\u0441\u044B",
    chips: [
      { emoji: "\uD83E\uDDB4", text: "\u0418\u0433\u0440\u0443\u0448\u043A\u0430 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A\u0438", q: "Dog toy" },
      { emoji: "\uD83D\uDC31", text: "\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u043A\u043E\u0448\u043A\u0438", q: "Cat food" },
      { emoji: "\uD83D\uDC15", text: "\u041F\u043E\u0432\u043E\u0434\u043E\u043A \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A\u0438", q: "Dog leash" },
      { emoji: "\uD83C\uDF33", text: "\u041A\u043E\u0433\u0442\u0435\u0442\u043E\u0447\u043A\u0430", q: "Cat tree" },
    ],
    categoriesTitle: "\uD83C\uDFF7\uFE0F \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
    categories: [
      { emoji: "\uD83D\uDC36", name: "\u0421\u043E\u0431\u0430\u043A\u0438", desc: "\u041A\u043E\u0440\u043C, \u0438\u0433\u0440\u0443\u0448\u043A\u0438, \u043F\u043E\u0432\u043E\u0434\u043A\u0438, \u043B\u0435\u0436\u0430\u043D\u043A\u0438", q: "dog supplies" },
      { emoji: "\uD83D\uDC31", name: "\u041A\u043E\u0448\u043A\u0438", desc: "\u041A\u043E\u0440\u043C, \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C, \u043A\u043E\u0433\u0442\u0435\u0442\u043E\u0447\u043A\u0438, \u0438\u0433\u0440\u0443\u0448\u043A\u0438", q: "cat supplies" },
      { emoji: "\uD83D\uDC26", name: "\u041F\u0442\u0438\u0446\u044B", desc: "\u041A\u043B\u0435\u0442\u043A\u0438, \u043A\u043E\u0440\u043C, \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B", q: "bird supplies" },
      { emoji: "\uD83D\uDC20", name: "\u0420\u044B\u0431\u043A\u0438", desc: "\u0410\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u044B, \u0444\u0438\u043B\u044C\u0442\u0440\u044B, \u043A\u043E\u0440\u043C", q: "aquarium fish supplies" },
      { emoji: "\uD83D\uDC39", name: "\u0413\u0440\u044B\u0437\u0443\u043D\u044B", desc: "\u041A\u043B\u0435\u0442\u043A\u0438, \u043A\u043E\u043B\u0451\u0441\u0430, \u043A\u043E\u0440\u043C", q: "hamster supplies" },
      { emoji: "\uD83D\uDC30", name: "\u041A\u0440\u043E\u043B\u0438\u043A\u0438", desc: "\u041A\u043B\u0435\u0442\u043A\u0438, \u043A\u043E\u0440\u043C, \u0438\u0433\u0440\u0443\u0448\u043A\u0438", q: "rabbit supplies" },
    ],
    resultsTitle: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u041F\u043E\u0438\u0441\u043A\u0430",
    clearBtn: "\u2715 \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    productsLabel: "\u0442\u043E\u0432\u0430\u0440\u043E\u0432",
    loadMore: "\uD83D\uDC3E \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0415\u0449\u0451",
    loading: "\u23F3 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    noResults: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441!",
    noMoreProducts: "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \uD83D\uDC3E",
    aiScanning: "\u0418\u0418 \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043F\u043E\u0438\u0441\u043A\u0430\u0445 \u043B\u0443\u0447\u0448\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439... \uD83D\uDC3E",
    orders: "\u0437\u0430\u043A\u0430\u0437\u043E\u0432",
    buyNow: "\uD83D\uDED2 \u041A\u0443\u043F\u0438\u0442\u044C",
    freeShipping: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
    shipping: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
    featuresTitle: "\uD83E\uDD16 \u041A\u0430\u043A \u041D\u0430\u0448 \u0418\u0418 \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0414\u043B\u044F \u0412\u0430\u0441",
    features: [
      { emoji: "\uD83E\uDDE0", title: "\u0418\u0418 \u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0412\u0430\u0441", desc: "\u041F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u2014 \u0418\u0418 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u0442, \u043F\u043E\u0439\u043C\u0451\u0442 \u0438 \u043D\u0430\u0439\u0434\u0451\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u043E, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E" },
      { emoji: "\uD83D\uDC8E", title: "\u0423\u043C\u043D\u0430\u044F \u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F", desc: "\u0418\u0418 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430\u043C\u0438" },
      { emoji: "\uD83D\uDE80", title: "\u041D\u0435\u043F\u0440\u0435\u0432\u0437\u043E\u0439\u0434\u0451\u043D\u043D\u044B\u0435 \u0426\u0435\u043D\u044B", desc: "\u041D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 AliExpress \u2014 \u044D\u043A\u043E\u043D\u043E\u043C\u044C\u0442\u0435 \u0434\u043E 80% \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043C\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u043C\u0438" },
    ],
    chatName: "Paw",
    chatWelcome: "\uD83D\uDC3E \u041F\u0440\u0438\u0432\u0435\u0442! \u042F Paw, \u0432\u0430\u0448 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u043F\u043E \u0442\u043E\u0432\u0430\u0440\u0430\u043C \u0434\u043B\u044F \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432!\n\u041A\u0430\u043A\u043E\u0439 \u0443 \u0432\u0430\u0441 \u043F\u0438\u0442\u043E\u043C\u0435\u0446? \u0421\u043E\u0431\u0430\u043A\u0430? \u041A\u043E\u0448\u043A\u0430? \u0427\u0442\u043E-\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0435?\n\u042F \u043D\u0430\u0439\u0434\u0443 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 AliExpress \uD83D\uDED2",
    chatSuggestions: [
      { emoji: "\uD83D\uDC36", text: "\u0427\u0442\u043E \u043A\u0443\u043F\u0438\u0442\u044C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A\u0438?" },
      { emoji: "\uD83D\uDC31", text: "\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0434\u043B\u044F \u043A\u043E\u0448\u043A\u0438" },
      { emoji: "\uD83C\uDF81", text: "\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0443 \u043F\u0438\u0442\u043E\u043C\u0446\u0430" },
      { emoji: "\uD83D\uDECF\uFE0F", text: "\u041B\u0435\u0436\u0430\u043D\u043A\u0430 \u0434\u043B\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u0441\u043E\u0431\u0430\u043A\u0438" },
    ],
    chatPlaceholder: "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 Paw...",
    footerText: "\u0423\u043C\u043D\u044B\u0439 \u0418\u0418-\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u043D\u0430 AliExpress",
    footerPrivacy: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    footerTerms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    footerCopy: "\u00A9 2026 Pet Find Me. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.",
    langLabel: "\u042F\u0437\u044B\u043A",
    installBtn: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
    installHow: "\u041A\u0430\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C?",
    installTitle: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 Pet Find Me!",
    installSubtitle: "\u0418\u0449\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u0440\u044F\u043C\u043E \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \uD83D\uDCF2",
    chatFabLabel: "\uD83D\uDCAC \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 Paw!",
  },
};

// Country -> language mapping for auto-detection
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
  he: "\uD83C\uDDEE\uD83C\uDDF1", en: "\uD83C\uDDFA\uD83C\uDDF8", es: "\uD83C\uDDEA\uD83C\uDDF8", de: "\uD83C\uDDE9\uD83C\uDDEA", pt: "\uD83C\uDDE7\uD83C\uDDF7", fr: "\uD83C\uDDEB\uD83C\uDDF7", ru: "\uD83C\uDDF7\uD83C\uDDFA"
};

const LANG_NAMES = {
  he: "\u05E2\u05D1\u05E8\u05D9\u05EA", en: "English", es: "Espa\u00F1ol", de: "Deutsch", pt: "Portugu\u00EAs", fr: "Fran\u00E7ais", ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
};

/**
 * Detect language from URL params, localStorage, or browser
 * Default: pt (Portuguese) for Brazilian version
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

  // 4. Default to Portuguese (Brazilian version)
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
    chatFabLabel.textContent = t.chatFabLabel || `\uD83D\uDCAC Ask ${t.chatName}!`;
  }

  // Hide Hebrew-only sections when not Hebrew
  const seoContent = document.getElementById("seoContent");
  if (seoContent) seoContent.style.display = lang === "he" ? "" : (lang === "pt" ? "" : "none");
  const faqSection = document.getElementById("faqSection");
  if (faqSection) faqSection.style.display = lang === "he" ? "" : (lang === "pt" ? "" : "none");

  // Install banner
  const installTitle = document.querySelector(".install-banner-title");
  if (installTitle) installTitle.textContent = t.installTitle || "Install Pet Find Me!";
  const installSubtitle = document.querySelector(".install-banner-subtitle");
  if (installSubtitle) installSubtitle.textContent = t.installSubtitle || "Search products faster directly from your phone \uD83D\uDCF2";
  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.textContent = t.installBtn || "Install";

  // WhatsApp fab - hide for non-Hebrew
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
