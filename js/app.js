/**
 * Ali Find Me - Search App v3.0
 * Features: trending, filters, favorites, history, share, related searches,
 *           dark mode, autocomplete, recently viewed, PWA, price alerts
 */

const API_BASE = "https://ali-findme-api.ohadf1976.workers.dev";
const SITE_URL = "https://skazi1976.github.io/ali-find-me/";

let currentLang = localStorage.getItem("ali_lang") || "he";
let currentPage = 1;
let currentQuery = "";
let currentSort = "popular";
let currentMinPrice = null;
let currentMaxPrice = null;
let isLoading = false;
let cachedSuggestions = []; // store suggestions for autocomplete
let currentCurrency = "ILS";
let currentCountry = "IL";
let currentCurrencySymbol = "₪";

// ============================================================
//  i18n
// ============================================================

const i18n = {
  he: {
    heroTitle: "\u2728 \u05de\u05e6\u05d0\u05d9 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8 \u05d4\u05de\u05d5\u05e9\u05dc\u05dd",
    heroSubtitle: "\u05d7\u05e4\u05e9\u05d9 \u05de\u05d5\u05e6\u05e8\u05d9 \u05d0\u05d5\u05e4\u05e0\u05d4 \u05d5\u05dc\u05d9\u05d9\u05e4\u05e1\u05d8\u05d9\u05d9\u05dc \u05d1\u05de\u05d7\u05d9\u05e8\u05d9\u05dd \u05d4\u05db\u05d9 \u05d8\u05d5\u05d1\u05d9\u05dd \u05de\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1",
    welcome: "\u05d4\u05d9\u05d9! \u05d0\u05e0\u05d9 \u05db\u05d0\u05df \u05dc\u05e2\u05d6\u05d5\u05e8 \u05dc\u05da \u05dc\u05de\u05e6\u05d5\u05d0 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05de\u05d3\u05d4\u05d9\u05de\u05d9\u05dd \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1.\n\u05e1\u05e4\u05e8\u05d9 \u05dc\u05d9 \u05de\u05d4 \u05d0\u05ea \u05de\u05d7\u05e4\u05e9\u05ea \u05d5\u05d0\u05e0\u05d9 \u05d0\u05de\u05e6\u05d0 \u05dc\u05da \u05d0\u05ea \u05d4\u05d3\u05d9\u05dc\u05d9\u05dd \u05d4\u05db\u05d9 \u05d8\u05d5\u05d1\u05d9\u05dd! \ud83d\udecd\ufe0f",
    inputPlaceholder: "\u05de\u05d4 \u05d0\u05ea \u05de\u05d7\u05e4\u05e9\u05ea? (\u05dc\u05de\u05e9\u05dc: \u05e9\u05de\u05dc\u05ea \u05e2\u05e8\u05d1, \u05d8\u05d9\u05d9\u05e5 \u05e1\u05e4\u05d5\u05e8\u05d8...)",
    searching: "\u05de\u05d7\u05e4\u05e9\u05ea...",
    foundResults: "\u05de\u05e6\u05d0\u05ea\u05d9 {count} \u05de\u05d5\u05e6\u05e8\u05d9\u05dd! \u05d4\u05e0\u05d4 \u05d4\u05d3\u05d9\u05dc\u05d9\u05dd \u05d4\u05db\u05d9 \u05d8\u05d5\u05d1\u05d9\u05dd:",
    noResults: "\u05dc\u05d0 \u05de\u05e6\u05d0\u05ea\u05d9 \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea \u05dc\u05de\u05d9\u05dc\u05d4 \u05d4\u05d6\u05d5. \u05e0\u05e1\u05d9 \u05de\u05d9\u05dc\u05d4 \u05d0\u05d7\u05e8\u05ea \u05d0\u05d5 \u05d1\u05d7\u05e8\u05d9 \u05de\u05d4\u05d4\u05e6\u05e2\u05d5\u05ea:",
    viewProduct: "\u05dc\u05e6\u05e4\u05d9\u05d9\u05d4 \u05d5\u05e8\u05db\u05d9\u05e9\u05d4 \u2192",
    orders: "\u05d4\u05d6\u05de\u05e0\u05d5\u05ea",
    clearResults: "\u05e0\u05e7\u05d4 \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea",
    loadMore: "\u05d8\u05e2\u05df \u05e2\u05d5\u05d3 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd",
    categoriesTitle: "\ud83c\udff7\ufe0f \u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d5\u05ea \u05e4\u05d5\u05e4\u05d5\u05dc\u05e8\u05d9\u05d5\u05ea",
    trendingTitle: "\ud83d\udd25 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05d8\u05e8\u05e0\u05d3\u05d9\u05d9\u05dd \u05e2\u05db\u05e9\u05d9\u05d5",
    howTitle: "\ud83d\udca1 \u05d0\u05d9\u05da \u05d6\u05d4 \u05e2\u05d5\u05d1\u05d3?",
    step1Title: "\u05d7\u05e4\u05e9\u05d9 \u05de\u05d5\u05e6\u05e8",
    step1Desc: "\u05db\u05ea\u05d1\u05d9 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d0\u05d5 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea \u05de\u05d4 \u05d0\u05ea \u05de\u05d7\u05e4\u05e9\u05ea",
    step2Title: "\u05e7\u05d1\u05dc\u05d9 \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea",
    step2Desc: "\u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05de\u05d7\u05e4\u05e9\u05ea \u05d0\u05ea \u05d4\u05d3\u05d9\u05dc\u05d9\u05dd \u05d4\u05db\u05d9 \u05d8\u05d5\u05d1\u05d9\u05dd",
    step3Title: "\u05e7\u05e0\u05d9 \u05d1\u05d6\u05d5\u05dc",
    step3Desc: "\u05dc\u05d7\u05e6\u05d9 \u05e2\u05dc \u05d4\u05de\u05d5\u05e6\u05e8 \u05d5\u05ea\u05d5\u05e2\u05d1\u05e8\u05d9 \u05d9\u05e9\u05d9\u05e8\u05d5\u05ea \u05dc\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1",
    disclaimer: "\u05d4\u05d0\u05ea\u05e8 \u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd (affiliate). \u05d4\u05e8\u05db\u05d9\u05e9\u05d4 \u05e9\u05dc\u05da \u05dc\u05d0 \u05ea\u05d4\u05d9\u05d4 \u05d9\u05e7\u05e8\u05d4 \u05d9\u05d5\u05ea\u05e8, \u05d0\u05da \u05d0\u05e0\u05d5 \u05e2\u05e9\u05d5\u05d9\u05d9\u05dd \u05dc\u05e7\u05d1\u05dc \u05e2\u05de\u05dc\u05d4 \u05e7\u05d8\u05e0\u05d4.",
    recentSearches: "\u05d7\u05d9\u05e4\u05d5\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd:",
    alsoSearch: "\u05de\u05d7\u05e4\u05e9\u05d9\u05dd \u05d2\u05dd:",
    sortBy: "\u05de\u05d9\u05d5\u05df:",
    priceRange: "\u05de\u05d7\u05d9\u05e8:",
    priceFrom: "\u05de-",
    priceTo: "\u05e2\u05d3",
    apply: "\u05e1\u05e0\u05df",
    sortPopular: "\u05d4\u05db\u05d9 \u05e0\u05de\u05db\u05e8",
    sortCheap: "\u05d4\u05db\u05d9 \u05d6\u05d5\u05dc",
    sortExpensive: "\u05d4\u05db\u05d9 \u05d9\u05e7\u05e8",
    sortNew: "\u05d7\u05d3\u05e9",
    sortRating: "\u05d3\u05d9\u05e8\u05d5\u05d2",
    myFavorites: "\u05d4\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd \u05e9\u05dc\u05d9",
    noFavorites: "\u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05d4\u05d5\u05e1\u05e4\u05ea \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd",
    shareText: "\u05ea\u05e8\u05d0\u05d9 \u05de\u05d4 \u05de\u05e6\u05d0\u05ea\u05d9 \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f \u05e6\u05e4\u05d9\u05ea \u05dc\u05d0\u05d7\u05e8\u05d5\u05e0\u05d4",
    clearViewed: "\u05e0\u05e7\u05d4",
    myAlerts: "\u05d4\u05ea\u05e8\u05d0\u05d5\u05ea \u05de\u05d7\u05d9\u05e8",
    noAlerts: "\u05d0\u05d9\u05df \u05d4\u05ea\u05e8\u05d0\u05d5\u05ea \u05de\u05d7\u05d9\u05e8 \u05e4\u05e2\u05d9\u05dc\u05d5\u05ea",
    setAlert: "\u05d4\u05ea\u05e8\u05d0\u05d4 \u05db\u05e9\u05d9\u05e8\u05d3 \u05de\u05ea\u05d7\u05ea:",
    save: "\u05e9\u05de\u05d5\u05e8",
    cancel: "\u05d1\u05d9\u05d8\u05d5\u05dc",
    priceDropped: "\u05d9\u05e8\u05d3 \u05de\u05d7\u05d9\u05e8!",
    targetPrice: "\u05de\u05d7\u05d9\u05e8 \u05d9\u05e2\u05d3",
    dailyDealsTitle: "\u23f0 \u05d3\u05d9\u05dc\u05d9\u05dd \u05d9\u05d5\u05de\u05d9\u05d9\u05dd",
    dealsEndsIn: "\u05de\u05e1\u05ea\u05d9\u05d9\u05dd \u05d1\u05e2\u05d5\u05d3",
    spinTitle: "\ud83c\udfb0 \u05e1\u05d5\u05d1\u05d1 \u05d5\u05d6\u05db\u05d4!",
    spinBtn: "\u05e1\u05d5\u05d1\u05d1!",
    spinAlreadyUsed: "\u05db\u05d1\u05e8 \u05e1\u05d5\u05d1\u05d1\u05ea \u05d4\u05d9\u05d5\u05dd! \u05d7\u05d6\u05e8\u05d9 \u05de\u05d7\u05e8 \ud83d\ude0a",
    spinCongrats: "\u05de\u05d6\u05dc \u05d8\u05d5\u05d1! \ud83c\udf89",
    spinTryAgain: "\u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1 \u05de\u05d7\u05e8",
    spinGetPrize: "\u05dc\u05e7\u05d1\u05dc\u05ea \u05d4\u05e4\u05e8\u05e1",
    chatHelp: "\u05d0\u05e0\u05d9 \u05d9\u05db\u05d5\u05dc\u05d4 \u05dc\u05e2\u05d6\u05d5\u05e8 \u05dc\u05da \u05dc\u05de\u05e6\u05d5\u05d0 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1! \u05db\u05ea\u05d1\u05d9 \u05de\u05d4 \u05d0\u05ea \u05de\u05d7\u05e4\u05e9\u05ea, \u05ea\u05d1\u05e7\u05e9\u05d9 \u05d4\u05de\u05dc\u05e6\u05d5\u05ea, \u05d0\u05d5 \u05ea\u05e9\u05d0\u05dc\u05d9 \u05de\u05d4 \u05db\u05d3\u05d0\u05d9 \u05dc\u05e7\u05e0\u05d5\u05ea \ud83d\uded2",
    chatRecommending: "\u05d1\u05d5\u05d3\u05e7\u05ea \u05d4\u05de\u05dc\u05e6\u05d5\u05ea...",
    chatRefining: "\u05de\u05d7\u05e4\u05e9\u05ea {query}...",
    quickCheapest: "\ud83d\udd3d \u05d4\u05db\u05d9 \u05d6\u05d5\u05dc",
    quickRated: "\u2b50 \u05d4\u05db\u05d9 \u05de\u05d3\u05d5\u05e8\u05d2",
    quickNewest: "\ud83c\udd95 \u05d4\u05db\u05d9 \u05d7\u05d3\u05e9",
    quickSimilar: "\ud83d\udca1 \u05d4\u05de\u05dc\u05e6\u05d5\u05ea",
    installTitle: "\u05d4\u05ea\u05e7\u05d9\u05e0\u05d9 \u05d0\u05ea \u05d4\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4!",
    installDesc: "\u05d2\u05d9\u05e9\u05d4 \u05de\u05d4\u05d9\u05e8\u05d4 \u05dc\u05d3\u05d9\u05dc\u05d9\u05dd \u05d9\u05e9\u05d9\u05e8\u05d5\u05ea \u05de\u05d4\u05de\u05e1\u05da",
    installBtn: "\u05d4\u05ea\u05e7\u05df",
    pointsTitle: "\u05d4\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05e9\u05dc\u05d9", pointsBalance: "\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea",
    pointsEarn: "\u05e6\u05d1\u05e8\u05ea +{pts} \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea!",
    pointsRedeem: "\u05e4\u05d3\u05d9\u05d5\u05df \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea", pointsHistory: "\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4",
    pointsDaily: "\u05d1\u05d5\u05e0\u05d5\u05e1 \u05d9\u05d5\u05de\u05d9!", pointsSearch: "\u05d7\u05d9\u05e4\u05d5\u05e9",
    pointsClick: "\u05e6\u05e4\u05d9\u05d9\u05d4 \u05d1\u05de\u05d5\u05e6\u05e8", pointsShare: "\u05e9\u05d9\u05ea\u05d5\u05e3",
    pointsFav: "\u05de\u05d5\u05e2\u05d3\u05e3", pointsSpin: "\u05e1\u05d9\u05d1\u05d5\u05d1",
    pointsCoupon5: "\u05e7\u05d5\u05e4\u05d5\u05df 5%", pointsCoupon10: "\u05e7\u05d5\u05e4\u05d5\u05df 10%",
    pointsFreeShip: "\u05de\u05e9\u05dc\u05d5\u05d7 \u05d7\u05d9\u05e0\u05dd", pointsCoupon5off: "\u05e7\u05d5\u05e4\u05d5\u05df $5",
    pointsRedeemed: "\u05e0\u05e4\u05d3\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!", pointsNotEnough: "\u05d0\u05d9\u05df \u05de\u05e1\u05e4\u05d9\u05e7 \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea",
    pointsToday: "\u05d4\u05d9\u05d5\u05dd", pointsYesterday: "\u05d0\u05ea\u05de\u05d5\u05dc",
    imgSearching: "\u05de\u05d6\u05d4\u05d4 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8...",
    imgResult: "\u05d6\u05d9\u05d4\u05d9\u05ea\u05d9: {desc}", imgError: "\u05dc\u05d0 \u05d4\u05e6\u05dc\u05d7\u05ea\u05d9 \u05dc\u05d6\u05d4\u05d5\u05ea. \u05e0\u05e1\u05d4 \u05ea\u05de\u05d5\u05e0\u05d4 \u05d0\u05d7\u05e8\u05ea",
    imgTakePhoto: "\u05e6\u05dc\u05dd", imgUpload: "\u05d4\u05e2\u05dc\u05d4",
    findCheaper: "מצא זול יותר 💰",
    comparing: "מחפש חלופות זולות יותר...",
    cheaperAlts: "חלופות זולות יותר 💰",
    savingsLabel: "חיסכון",
    noAlternatives: "לא נמצאו חלופות זולות יותר למוצר זה",
    originalProduct: "המוצר המקורי",
    viewDeal: "לצפייה ורכישה →",
    aiSummary: "סיכום AI",
  },
  en: {
    heroTitle: "\u2728 Find Your Perfect Product",
    heroSubtitle: "Search fashion & lifestyle products at the best prices on AliExpress",
    welcome: "Hi! I'm here to help you find amazing products on AliExpress.\nTell me what you're looking for and I'll find the best deals! \ud83d\udecd\ufe0f",
    inputPlaceholder: "What are you looking for? (e.g., evening dress, sport leggings...)",
    searching: "Searching...",
    foundResults: "Found {count} products! Here are the best deals:",
    noResults: "No results found for this word. Try another word or pick from suggestions:",
    viewProduct: "View & Buy \u2192",
    orders: "orders",
    clearResults: "Clear results",
    loadMore: "Load more products",
    categoriesTitle: "\ud83c\udff7\ufe0f Popular Categories",
    trendingTitle: "\ud83d\udd25 Trending Now",
    howTitle: "\ud83d\udca1 How it works?",
    step1Title: "Search",
    step1Desc: "Type what you're looking for in Hebrew or English",
    step2Title: "Get results",
    step2Desc: "Our system finds the best deals for you",
    step3Title: "Buy cheap",
    step3Desc: "Click on a product and go directly to AliExpress",
    disclaimer: "This site uses affiliate links. Your purchase won't cost more, but we may receive a small commission.",
    recentSearches: "Recent searches:",
    alsoSearch: "People also search:",
    sortBy: "Sort:",
    priceRange: "Price:",
    priceFrom: "From",
    priceTo: "To",
    apply: "Filter",
    sortPopular: "Best selling",
    sortCheap: "Cheapest",
    sortExpensive: "Most expensive",
    sortNew: "Newest",
    sortRating: "Rating",
    myFavorites: "My Favorites",
    noFavorites: "No favorites yet",
    shareText: "Check out what I found on AliExpress!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f Recently Viewed",
    clearViewed: "Clear",
    myAlerts: "Price Alerts",
    noAlerts: "No active price alerts",
    setAlert: "Alert when price drops below:",
    save: "Save",
    cancel: "Cancel",
    priceDropped: "Price dropped!",
    targetPrice: "Target price",
    dailyDealsTitle: "\u23f0 Daily Deals",
    dealsEndsIn: "Ends in",
    spinTitle: "\ud83c\udfb0 Spin & Win!",
    spinBtn: "Spin!",
    spinAlreadyUsed: "Already spun today! Come back tomorrow \ud83d\ude0a",
    spinCongrats: "Congratulations! \ud83c\udf89",
    spinTryAgain: "Try again tomorrow",
    spinGetPrize: "Claim Prize",
    chatHelp: "I can help you find products on AliExpress! Type what you're looking for, ask for recommendations, or ask what to buy \ud83d\uded2",
    chatRecommending: "Checking recommendations...",
    chatRefining: "Searching {query}...",
    quickCheapest: "\ud83d\udd3d Cheapest",
    quickRated: "\u2b50 Top Rated",
    quickNewest: "\ud83c\udd95 Newest",
    quickSimilar: "\ud83d\udca1 Recommend",
    installTitle: "Install the app!", installDesc: "Quick access to deals from your home screen", installBtn: "Install",
    pointsTitle: "My Points", pointsBalance: "points",
    pointsEarn: "Earned +{pts} points!",
    pointsRedeem: "Redeem Points", pointsHistory: "History",
    pointsDaily: "Daily Bonus!", pointsSearch: "Search",
    pointsClick: "Product View", pointsShare: "Share",
    pointsFav: "Favorite", pointsSpin: "Spin",
    pointsCoupon5: "5% Coupon", pointsCoupon10: "10% Coupon",
    pointsFreeShip: "Free Shipping", pointsCoupon5off: "$5 Coupon",
    pointsRedeemed: "Redeemed!", pointsNotEnough: "Not enough points",
    pointsToday: "Today", pointsYesterday: "Yesterday",
    imgSearching: "Identifying product...", imgResult: "Found: {desc}", imgError: "Could not identify. Try another photo",
    imgTakePhoto: "Take Photo", imgUpload: "Upload",
    nlTitle: "Get hot deals in your inbox!",
    nlDesc: "Subscribe to our weekly newsletter and get the best deals delivered to your email",
    nlPlaceholder: "Enter your email",
    nlBtn: "Subscribe",
    nlPrivacy: "No spam. Unsubscribe anytime.",
    nlSuccess: "Subscribed! We will send you the best deals",
    nlPopupTitle: "Don't miss deals!",
    nlPopupDesc: "Join thousands of subscribers who get the hottest deals every week",
    nlSkip: "Not now",
    shareTitle: "שתפי את הדיל!", shareCopied: "הקישור הועתק!",
    shareNative: "שתף עוד...",
    findCheaper: "Find Cheaper 💰",
    comparing: "Finding cheaper alternatives...",
    cheaperAlts: "Cheaper Alternatives 💰",
    savingsLabel: "Savings",
    noAlternatives: "No cheaper alternatives found",
    originalProduct: "Original Product",
    viewDeal: "View & Buy →",
    aiSummary: "AI Summary",
  },
  ar: {
    heroTitle: "\u2728 \u0627\u0639\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c \u0627\u0644\u0645\u062b\u0627\u0644\u064a",
    heroSubtitle: "\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0648\u0636\u0629 \u0648\u0627\u0644\u0644\u0627\u064a\u0641\u0633\u062a\u0627\u064a\u0644 \u0628\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0639\u0644\u0649 \u0639\u0644\u064a \u0625\u0643\u0633\u0628\u0631\u0633",
    welcome: "\u0645\u0631\u062d\u0628\u0627! \u0623\u0646\u0627 \u0647\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0641\u064a \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u0631\u0627\u0626\u0639\u0629 \u0639\u0644\u0649 \u0639\u0644\u064a \u0625\u0643\u0633\u0628\u0631\u0633.\n\u0623\u062e\u0628\u0631\u0646\u064a \u0645\u0627\u0630\u0627 \u062a\u0628\u062d\u062b \u0639\u0646\u0647 \u0648\u0633\u0623\u062c\u062f \u0644\u0643 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0631\u0648\u0636! \ud83d\udecd\ufe0f",
    inputPlaceholder: "\u0639\u0646 \u0645\u0627\u0630\u0627 \u062a\u0628\u062d\u062b\u061f (\u0645\u062b\u0644\u0627: \u0641\u0633\u062a\u0627\u0646 \u0633\u0647\u0631\u0629\u060c \u062a\u0627\u064a\u062a\u0633 \u0631\u064a\u0627\u0636\u064a...)",
    searching: "\u062c\u0627\u0631\u064a \u0627\u0644\u0628\u062d\u062b...",
    foundResults: "\u0648\u062c\u062f\u062a {count} \u0645\u0646\u062a\u062c! \u0625\u0644\u064a\u0643 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0631\u0648\u0636:",
    noResults: "\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c. \u062c\u0631\u0628 \u0643\u0644\u0645\u0629 \u0623\u062e\u0631\u0649:",
    viewProduct: "\u0639\u0631\u0636 \u0648\u0634\u0631\u0627\u0621 \u2192",
    orders: "\u0637\u0644\u0628",
    clearResults: "\u0645\u0633\u062d \u0627\u0644\u0646\u062a\u0627\u0626\u062c",
    loadMore: "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f",
    categoriesTitle: "\ud83c\udff7\ufe0f \u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    trendingTitle: "\ud83d\udd25 \u0627\u0644\u0631\u0627\u0626\u062c \u0627\u0644\u0622\u0646",
    howTitle: "\ud83d\udca1 \u0643\u064a\u0641 \u064a\u0639\u0645\u0644\u061f",
    step1Title: "\u0627\u0628\u062d\u062b",
    step1Desc: "\u0627\u0643\u062a\u0628 \u0645\u0627 \u062a\u0628\u062d\u062b \u0639\u0646\u0647 \u0628\u0644\u063a\u062a\u0643",
    step2Title: "\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0646\u062a\u0627\u0626\u062c",
    step2Desc: "\u0646\u0638\u0627\u0645\u0646\u0627 \u064a\u062c\u062f \u0644\u0643 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0631\u0648\u0636",
    step3Title: "\u0627\u0634\u062a\u0631\u0650 \u0628\u0633\u0639\u0631 \u0645\u0646\u0627\u0633\u0628",
    step3Desc: "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c \u0648\u0627\u0646\u062a\u0642\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0639\u0644\u064a \u0625\u0643\u0633\u0628\u0631\u0633",
    disclaimer: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0633\u062a\u062e\u062f\u0645 \u0631\u0648\u0627\u0628\u0637 \u062a\u0633\u0648\u064a\u0642\u064a\u0629. \u0644\u0646 \u062a\u062f\u0641\u0639 \u0623\u0643\u062b\u0631\u060c \u0644\u0643\u0646\u0646\u0627 \u0642\u062f \u0646\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0645\u0648\u0644\u0629 \u0628\u0633\u064a\u0637\u0629.",
    recentSearches: "\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0623\u062e\u064a\u0631:",
    alsoSearch: "\u064a\u0628\u062d\u062b\u0648\u0646 \u0623\u064a\u0636\u0627\u064b:",
    sortBy: "\u062a\u0631\u062a\u064a\u0628:",
    priceRange: "\u0627\u0644\u0633\u0639\u0631:",
    priceFrom: "\u0645\u0646",
    priceTo: "\u0625\u0644\u0649",
    apply: "\u062a\u0637\u0628\u064a\u0642",
    sortPopular: "\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b",
    sortCheap: "\u0627\u0644\u0623\u0631\u062e\u0635",
    sortExpensive: "\u0627\u0644\u0623\u063a\u0644\u0649",
    sortNew: "\u0627\u0644\u0623\u062d\u062f\u062b",
    sortRating: "\u0627\u0644\u062a\u0642\u064a\u064a\u0645",
    myFavorites: "\u0627\u0644\u0645\u0641\u0636\u0644\u0629",
    noFavorites: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0641\u0636\u0644\u0627\u062a \u0628\u0639\u062f",
    shareText: "\u0634\u0627\u0647\u062f \u0645\u0627 \u0648\u062c\u062f\u062a\u0647 \u0639\u0644\u0649 \u0639\u0644\u064a \u0625\u0643\u0633\u0628\u0631\u0633!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f \u0634\u0648\u0647\u062f \u0645\u0624\u062e\u0631\u0627\u064b",
    clearViewed: "\u0645\u0633\u062d",
    myAlerts: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0633\u0639\u0631",
    noAlerts: "\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0646\u0628\u064a\u0647\u0627\u062a",
    setAlert: "\u062a\u0646\u0628\u064a\u0647 \u0639\u0646\u062f\u0645\u0627 \u064a\u0646\u062e\u0641\u0636 \u0627\u0644\u0633\u0639\u0631 \u0625\u0644\u0649:",
    save: "\u062d\u0641\u0638",
    cancel: "\u0625\u0644\u063a\u0627\u0621",
    priceDropped: "\u0627\u0646\u062e\u0641\u0636 \u0627\u0644\u0633\u0639\u0631!",
    targetPrice: "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641",
    dailyDealsTitle: "\u23f0 \u0639\u0631\u0648\u0636 \u0627\u0644\u064a\u0648\u0645",
    dealsEndsIn: "\u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    spinTitle: "\ud83c\udfb0 \u0623\u062f\u0631 \u0648\u0627\u0631\u0628\u062d!",
    spinBtn: "\u0623\u062f\u0631!",
    spinAlreadyUsed: "\u0644\u0642\u062f \u0623\u062f\u0631\u062a \u0627\u0644\u064a\u0648\u0645! \u0639\u062f \u063a\u062f\u0627\u064b \ud83d\ude0a",
    spinCongrats: "\u0645\u0628\u0631\u0648\u0643! \ud83c\udf89",
    spinTryAgain: "\u062d\u0627\u0648\u0644 \u063a\u062f\u0627\u064b",
    spinGetPrize: "\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062c\u0627\u0626\u0632\u0629",
    chatHelp: "\u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0641\u064a \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u0631\u0627\u0626\u0639\u0629! \u0627\u0643\u062a\u0628 \u0645\u0627 \u062a\u0628\u062d\u062b \u0639\u0646\u0647 \u0623\u0648 \u0627\u0637\u0644\u0628 \u062a\u0648\u0635\u064a\u0627\u062a \ud83d\uded2",
    chatRecommending: "\u0623\u0628\u062d\u062b \u0639\u0646 \u062a\u0648\u0635\u064a\u0627\u062a...",
    chatRefining: "\u0623\u0628\u062d\u062b {query}...",
    quickCheapest: "\ud83d\udd3d \u0627\u0644\u0623\u0631\u062e\u0635",
    quickRated: "\u2b50 \u0627\u0644\u0623\u0641\u0636\u0644",
    quickNewest: "\ud83c\udd95 \u0627\u0644\u0623\u062d\u062f\u062b",
    quickSimilar: "\ud83d\udca1 \u062a\u0648\u0635\u064a\u0627\u062a",
    installTitle: "\u062b\u0628\u0651\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642!", installDesc: "\u0648\u0635\u0648\u0644 \u0633\u0631\u064a\u0639 \u0644\u0644\u0639\u0631\u0648\u0636 \u0645\u0646 \u0634\u0627\u0634\u062a\u0643", installBtn: "\u062a\u062b\u0628\u064a\u062a",
    pointsTitle: "\u0646\u0642\u0627\u0637\u064a", pointsBalance: "\u0646\u0642\u0627\u0637",
    pointsEarn: "\u0631\u0628\u062d\u062a +{pts} \u0646\u0642\u0627\u0637!",
    pointsRedeem: "\u0627\u0633\u062a\u0628\u062f\u0627\u0644", pointsHistory: "\u0627\u0644\u0633\u062c\u0644",
    pointsDaily: "\u0645\u0643\u0627\u0641\u0623\u0629 \u064a\u0648\u0645\u064a\u0629!", pointsSearch: "\u0628\u062d\u062b",
    pointsClick: "\u0639\u0631\u0636 \u0645\u0646\u062a\u062c", pointsShare: "\u0645\u0634\u0627\u0631\u0643\u0629",
    pointsFav: "\u0645\u0641\u0636\u0644\u0629", pointsSpin: "\u062f\u0648\u0631\u0627\u0646",
    pointsCoupon5: "\u0642\u0633\u064a\u0645\u0629 5%", pointsCoupon10: "\u0642\u0633\u064a\u0645\u0629 10%",
    pointsFreeShip: "\u0634\u062d\u0646 \u0645\u062c\u0627\u0646\u064a", pointsCoupon5off: "\u0642\u0633\u064a\u0645\u0629 $5",
    pointsRedeemed: "\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0628\u062f\u0627\u0644!", pointsNotEnough: "\u0646\u0642\u0627\u0637 \u063a\u064a\u0631 \u0643\u0627\u0641\u064a\u0629",
    pointsToday: "\u0627\u0644\u064a\u0648\u0645", pointsYesterday: "\u0623\u0645\u0633",
    imgSearching: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0639\u0631\u0641...", imgResult: "\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631: {desc}", imgError: "\u0644\u0645 \u0623\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062a\u0639\u0631\u0641. \u062c\u0631\u0628 \u0635\u0648\u0631\u0629 \u0623\u062e\u0631\u0649",
    imgTakePhoto: "\u0627\u0644\u062a\u0642\u0637", imgUpload: "\u0631\u0641\u0639",
    nlTitle: "احصل على عروض حصرية في بريدك!",
    nlDesc: "اشترك في نشرتنا الأسبوعية واحصل على أفضل العروض",
    nlPlaceholder: "أدخل بريدك الإلكتروني",
    nlBtn: "اشتراك",
    nlPrivacy: "بدون رسائل مزعجة. إلغاء في أي وقت.",
    nlSuccess: "تم الاشتراك! سنرسل لك أفضل العروض",
    nlPopupTitle: "لا تفوت العروض!",
    nlPopupDesc: "انضم إلى آلاف المشتركين",
    nlSkip: "ليس الآن",
    shareTitle: "Share this deal!", shareCopied: "Link copied!",
    shareNative: "More...",
  },
  ru: {
    heroTitle: "\u2728 \u041d\u0430\u0439\u0434\u0438 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440",
    heroSubtitle: "\u041f\u043e\u0438\u0441\u043a \u043c\u043e\u0434\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u0446\u0435\u043d\u0430\u043c \u043d\u0430 AliExpress",
    welcome: "\u041f\u0440\u0438\u0432\u0435\u0442! \u042f \u043f\u043e\u043c\u043e\u0433\u0443 \u0442\u0435\u0431\u0435 \u043d\u0430\u0439\u0442\u0438 \u043b\u0443\u0447\u0448\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u043d\u0430 AliExpress.\n\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438 \u0447\u0442\u043e \u0438\u0449\u0435\u0448\u044c \u0438 \u044f \u043d\u0430\u0439\u0434\u0443 \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u043a\u0438\u0434\u043a\u0438! \ud83d\udecd\ufe0f",
    inputPlaceholder: "\u0427\u0442\u043e \u0438\u0449\u0435\u0448\u044c? (\u043d\u0430\u043f\u0440.: \u0432\u0435\u0447\u0435\u0440\u043d\u0435\u0435 \u043f\u043b\u0430\u0442\u044c\u0435, \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438...)",
    searching: "\u0418\u0449\u0443...",
    foundResults: "\u041d\u0430\u0448\u043b\u043e\u0441\u044c {count} \u0442\u043e\u0432\u0430\u0440\u043e\u0432! \u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f:",
    noResults: "\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0434\u0440\u0443\u0433\u043e\u0435 \u0441\u043b\u043e\u0432\u043e:",
    viewProduct: "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438 \u043a\u0443\u043f\u0438\u0442\u044c \u2192",
    orders: "\u0437\u0430\u043a\u0430\u0437\u043e\u0432",
    clearResults: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
    loadMore: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451",
    categoriesTitle: "\ud83c\udff7\ufe0f \u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
    trendingTitle: "\ud83d\udd25 \u0422\u0440\u0435\u043d\u0434\u044b \u0441\u0435\u0439\u0447\u0430\u0441",
    howTitle: "\ud83d\udca1 \u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",
    step1Title: "\u041f\u043e\u0438\u0441\u043a",
    step1Desc: "\u041d\u0430\u043f\u0438\u0448\u0438 \u0447\u0442\u043e \u0438\u0449\u0435\u0448\u044c \u043d\u0430 \u0441\u0432\u043e\u0451\u043c \u044f\u0437\u044b\u043a\u0435",
    step2Title: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",
    step2Desc: "\u041d\u0430\u0448\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0439\u0434\u0451\u0442 \u043b\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043d\u044b",
    step3Title: "\u041a\u0443\u043f\u0438 \u0432\u044b\u0433\u043e\u0434\u043d\u043e",
    step3Desc: "\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0442\u043e\u0432\u0430\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 AliExpress",
    disclaimer: "\u0421\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438. \u0412\u0430\u0448\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043e\u0438\u0442\u044c \u0434\u043e\u0440\u043e\u0436\u0435.",
    recentSearches: "\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u0438:",
    alsoSearch: "\u0422\u0430\u043a\u0436\u0435 \u0438\u0449\u0443\u0442:",
    sortBy: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430:", priceRange: "\u0426\u0435\u043d\u0430:", priceFrom: "\u041e\u0442", priceTo: "\u0414\u043e", apply: "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",
    sortPopular: "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435", sortCheap: "\u0414\u0435\u0448\u0435\u0432\u043b\u0435", sortExpensive: "\u0414\u043e\u0440\u043e\u0436\u0435", sortNew: "\u041d\u043e\u0432\u0438\u043d\u043a\u0438", sortRating: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433",
    myFavorites: "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435", noFavorites: "\u041d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445",
    shareText: "\u0421\u043c\u043e\u0442\u0440\u0438 \u0447\u0442\u043e \u044f \u043d\u0430\u0448\u0451\u043b \u043d\u0430 AliExpress!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f \u041d\u0435\u0434\u0430\u0432\u043d\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435", clearViewed: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
    myAlerts: "\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u0446\u0435\u043d\u0435", noAlerts: "\u041d\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",
    setAlert: "\u0423\u0432\u0435\u0434\u043e\u043c\u0438\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u0446\u0435\u043d\u0430 \u0443\u043f\u0430\u0434\u0451\u0442 \u0434\u043e:",
    save: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c", cancel: "\u041e\u0442\u043c\u0435\u043d\u0430", priceDropped: "\u0426\u0435\u043d\u0430 \u0441\u043d\u0438\u0437\u0438\u043b\u0430\u0441\u044c!", targetPrice: "\u0426\u0435\u043b\u0435\u0432\u0430\u044f \u0446\u0435\u043d\u0430",
    dailyDealsTitle: "\u23f0 \u0421\u0434\u0435\u043b\u043a\u0438 \u0434\u043d\u044f", dealsEndsIn: "\u0417\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437",
    spinTitle: "\ud83c\udfb0 \u041a\u0440\u0443\u0442\u0438 \u0438 \u0432\u044b\u0438\u0433\u0440\u044b\u0432\u0430\u0439!", spinBtn: "\u041a\u0440\u0443\u0442\u0438\u0442\u044c!", spinAlreadyUsed: "\u0412\u044b \u0443\u0436\u0435 \u043a\u0440\u0443\u0442\u0438\u043b\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f! \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0437\u0430\u0432\u0442\u0440\u0430 \ud83d\ude0a",
    spinCongrats: "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \ud83c\udf89", spinTryAgain: "\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0432\u0442\u0440\u0430", spinGetPrize: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0437",
    chatHelp: "\u042f \u043f\u043e\u043c\u043e\u0433\u0443 \u043d\u0430\u0439\u0442\u0438 \u0442\u043e\u0432\u0430\u0440\u044b \u043d\u0430 AliExpress! \u041d\u0430\u043f\u0438\u0448\u0438 \u0447\u0442\u043e \u0438\u0449\u0435\u0448\u044c \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0441\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \ud83d\uded2",
    chatRecommending: "\u0418\u0449\u0443 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438...", chatRefining: "\u0418\u0449\u0443 {query}...",
    quickCheapest: "\ud83d\udd3d \u0414\u0435\u0448\u0435\u0432\u043b\u0435", quickRated: "\u2b50 \u041b\u0443\u0447\u0448\u0435\u0435", quickNewest: "\ud83c\udd95 \u041d\u043e\u0432\u043e\u0435", quickSimilar: "\ud83d\udca1 \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",
    installTitle: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!", installDesc: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043a\u0438\u0434\u043a\u0430\u043c \u0441 \u044d\u043a\u0440\u0430\u043d\u0430", installBtn: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
    pointsTitle: "\u041c\u043e\u0438 \u0431\u0430\u043b\u043b\u044b", pointsBalance: "\u0431\u0430\u043b\u043b\u043e\u0432",
    pointsEarn: "\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e +{pts} \u0431\u0430\u043b\u043b\u043e\u0432!",
    pointsRedeem: "\u041e\u0431\u043c\u0435\u043d\u044f\u0442\u044c", pointsHistory: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f",
    pointsDaily: "\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0431\u043e\u043d\u0443\u0441!", pointsSearch: "\u041f\u043e\u0438\u0441\u043a",
    pointsClick: "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440", pointsShare: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",
    pointsFav: "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435", pointsSpin: "\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435",
    pointsCoupon5: "\u041a\u0443\u043f\u043e\u043d 5%", pointsCoupon10: "\u041a\u0443\u043f\u043e\u043d 10%",
    pointsFreeShip: "\u0411\u0435\u0441\u043f\u043b. \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430", pointsCoupon5off: "\u041a\u0443\u043f\u043e\u043d $5",
    pointsRedeemed: "\u041e\u0431\u043c\u0435\u043d\u044f\u043d\u043e!", pointsNotEnough: "\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u0430\u043b\u043b\u043e\u0432",
    pointsToday: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f", pointsYesterday: "\u0412\u0447\u0435\u0440\u0430",
    imgSearching: "\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u044e \u0442\u043e\u0432\u0430\u0440...", imgResult: "\u041d\u0430\u0448\u043b\u043e\u0441\u044c: {desc}", imgError: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c",
    imgTakePhoto: "\u0421\u0444\u043e\u0442\u043e", imgUpload: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",
    nlTitle: "Получайте горячие скидки на почту!",
    nlDesc: "Подпишитесь на еженедельную рассылку",
    nlPlaceholder: "Введите ваш email",
    nlBtn: "Подписаться",
    nlPrivacy: "Без спама. Отписка в любой момент.",
    nlSuccess: "Подписка оформлена!",
    nlPopupTitle: "Не пропустите скидки!",
    nlPopupDesc: "Присоединяйтесь к тысячам подписчиков",
    nlSkip: "Не сейчас",
    shareTitle: "شارك هذا العرض!", shareCopied: "تم نسخ الرابط!",
    shareNative: "المزيد...",
  },
  es: {
    heroTitle: "\u2728 Encuentra el producto perfecto",
    heroSubtitle: "Busca productos de moda y lifestyle a los mejores precios en AliExpress",
    welcome: "\u00a1Hola! Estoy aqu\u00ed para ayudarte a encontrar productos incre\u00edbles en AliExpress.\nDime qu\u00e9 buscas y encontrar\u00e9 las mejores ofertas! \ud83d\udecd\ufe0f",
    inputPlaceholder: "\u00bfQu\u00e9 buscas? (ej: vestido de noche, zapatillas deportivas...)",
    searching: "Buscando...",
    foundResults: "\u00a1Encontr\u00e9 {count} productos! Las mejores ofertas:",
    noResults: "No se encontraron resultados. Prueba otra palabra:",
    viewProduct: "Ver y comprar \u2192",
    orders: "pedidos",
    clearResults: "Limpiar",
    loadMore: "Cargar m\u00e1s",
    categoriesTitle: "\ud83c\udff7\ufe0f Categor\u00edas populares",
    trendingTitle: "\ud83d\udd25 Tendencias ahora",
    howTitle: "\ud83d\udca1 \u00bfC\u00f3mo funciona?",
    step1Title: "Busca", step1Desc: "Escribe lo que buscas en tu idioma",
    step2Title: "Resultados", step2Desc: "Nuestro sistema encuentra las mejores ofertas",
    step3Title: "Compra barato", step3Desc: "Haz clic en el producto e ir\u00e1s a AliExpress",
    disclaimer: "Este sitio usa enlaces de afiliados. Tu compra no costar\u00e1 m\u00e1s, pero podemos recibir una peque\u00f1a comisi\u00f3n.",
    recentSearches: "B\u00fasquedas recientes:", alsoSearch: "Tambi\u00e9n buscan:",
    sortBy: "Ordenar:", priceRange: "Precio:", priceFrom: "Desde", priceTo: "Hasta", apply: "Filtrar",
    sortPopular: "M\u00e1s vendidos", sortCheap: "M\u00e1s baratos", sortExpensive: "M\u00e1s caros", sortNew: "Nuevos", sortRating: "Valoraci\u00f3n",
    myFavorites: "Mis favoritos", noFavorites: "A\u00fan no hay favoritos",
    shareText: "\u00a1Mira lo que encontr\u00e9 en AliExpress!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f Vistos recientemente", clearViewed: "Limpiar",
    myAlerts: "Alertas de precio", noAlerts: "Sin alertas activas",
    setAlert: "Alertar cuando el precio baje a:", save: "Guardar", cancel: "Cancelar",
    priceDropped: "\u00a1Baj\u00f3 el precio!", targetPrice: "Precio objetivo",
    dailyDealsTitle: "\u23f0 Ofertas del d\u00eda", dealsEndsIn: "Termina en",
    spinTitle: "\ud83c\udfb0 \u00a1Gira y gana!", spinBtn: "\u00a1Girar!", spinAlreadyUsed: "\u00a1Ya giraste hoy! Vuelve ma\u00f1ana \ud83d\ude0a",
    spinCongrats: "\u00a1Felicidades! \ud83c\udf89", spinTryAgain: "Intenta ma\u00f1ana", spinGetPrize: "Reclamar premio",
    chatHelp: "\u00a1Puedo ayudarte a encontrar productos! Escribe lo que buscas o pide recomendaciones \ud83d\uded2",
    chatRecommending: "Buscando recomendaciones...", chatRefining: "Buscando {query}...",
    quickCheapest: "\ud83d\udd3d M\u00e1s barato", quickRated: "\u2b50 Mejor valorado", quickNewest: "\ud83c\udd95 M\u00e1s nuevo", quickSimilar: "\ud83d\udca1 Recomendar",
    installTitle: "\u00a1Instala la app!", installDesc: "Acceso r\u00e1pido a ofertas desde tu pantalla", installBtn: "Instalar",
    pointsTitle: "Mis Puntos", pointsBalance: "puntos",
    pointsEarn: "\u00a1+{pts} puntos ganados!",
    pointsRedeem: "Canjear", pointsHistory: "Historial",
    pointsDaily: "\u00a1Bono diario!", pointsSearch: "B\u00fasqueda",
    pointsClick: "Ver producto", pointsShare: "Compartir",
    pointsFav: "Favorito", pointsSpin: "Giro",
    pointsCoupon5: "Cup\u00f3n 5%", pointsCoupon10: "Cup\u00f3n 10%",
    pointsFreeShip: "Env\u00edo gratis", pointsCoupon5off: "Cup\u00f3n $5",
    pointsRedeemed: "\u00a1Canjeado!", pointsNotEnough: "Puntos insuficientes",
    pointsToday: "Hoy", pointsYesterday: "Ayer",
    imgSearching: "Identificando producto...", imgResult: "Encontrado: {desc}", imgError: "No se pudo identificar",
    imgTakePhoto: "Foto", imgUpload: "Subir",
    nlTitle: "¡Recibe ofertas exclusivas en tu email!",
    nlDesc: "Suscríbete a nuestro boletín semanal",
    nlPlaceholder: "Ingresa tu email",
    nlBtn: "Suscribirse",
    nlPrivacy: "Sin spam. Cancela cuando quieras.",
    nlSuccess: "¡Suscrito! Te enviaremos las mejores ofertas",
    nlPopupTitle: "¡No te pierdas ofertas!",
    nlPopupDesc: "Únete a miles de suscriptores",
    nlSkip: "Ahora no",
    shareTitle: "Поделитесь скидкой!", shareCopied: "Ссылка скопирована!",
    shareNative: "Ещё...",
  },
  pt: {
    heroTitle: "\u2728 Encontre o produto perfeito",
    heroSubtitle: "Pesquise produtos de moda e lifestyle com os melhores pre\u00e7os no AliExpress",
    welcome: "Oi! Estou aqui para te ajudar a encontrar produtos incr\u00edveis no AliExpress.\nMe diga o que voc\u00ea procura e vou encontrar as melhores ofertas! \ud83d\udecd\ufe0f",
    inputPlaceholder: "O que voc\u00ea procura? (ex: vestido de festa, t\u00eanis esportivo...)",
    searching: "Pesquisando...",
    foundResults: "Encontrei {count} produtos! Melhores ofertas:",
    noResults: "Nenhum resultado encontrado. Tente outra palavra:",
    viewProduct: "Ver e comprar \u2192",
    orders: "pedidos",
    clearResults: "Limpar",
    loadMore: "Carregar mais",
    categoriesTitle: "\ud83c\udff7\ufe0f Categorias populares",
    trendingTitle: "\ud83d\udd25 Em alta agora",
    howTitle: "\ud83d\udca1 Como funciona?",
    step1Title: "Pesquise", step1Desc: "Digite o que voc\u00ea procura no seu idioma",
    step2Title: "Resultados", step2Desc: "Nosso sistema encontra as melhores ofertas",
    step3Title: "Compre barato", step3Desc: "Clique no produto e v\u00e1 direto ao AliExpress",
    disclaimer: "Este site usa links de afiliados. Sua compra n\u00e3o custar\u00e1 mais, mas podemos receber uma pequena comiss\u00e3o.",
    recentSearches: "Pesquisas recentes:", alsoSearch: "Tamb\u00e9m pesquisam:",
    sortBy: "Ordenar:", priceRange: "Pre\u00e7o:", priceFrom: "De", priceTo: "At\u00e9", apply: "Filtrar",
    sortPopular: "Mais vendidos", sortCheap: "Mais baratos", sortExpensive: "Mais caros", sortNew: "Novos", sortRating: "Avalia\u00e7\u00e3o",
    myFavorites: "Meus favoritos", noFavorites: "Ainda sem favoritos",
    shareText: "Veja o que encontrei no AliExpress!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f Vistos recentemente", clearViewed: "Limpar",
    myAlerts: "Alertas de pre\u00e7o", noAlerts: "Sem alertas ativos",
    setAlert: "Alertar quando o pre\u00e7o cair para:", save: "Salvar", cancel: "Cancelar",
    priceDropped: "Pre\u00e7o caiu!", targetPrice: "Pre\u00e7o alvo",
    dailyDealsTitle: "\u23f0 Ofertas do dia", dealsEndsIn: "Termina em",
    spinTitle: "\ud83c\udfb0 Gire e ganhe!", spinBtn: "Girar!", spinAlreadyUsed: "Voc\u00ea j\u00e1 girou hoje! Volte amanh\u00e3 \ud83d\ude0a",
    spinCongrats: "Parab\u00e9ns! \ud83c\udf89", spinTryAgain: "Tente amanh\u00e3", spinGetPrize: "Resgatar pr\u00eamio",
    chatHelp: "Posso te ajudar a encontrar produtos! Escreva o que procura ou pe\u00e7a recomenda\u00e7\u00f5es \ud83d\uded2",
    chatRecommending: "Buscando recomenda\u00e7\u00f5es...", chatRefining: "Buscando {query}...",
    quickCheapest: "\ud83d\udd3d Mais barato", quickRated: "\u2b50 Melhor avaliado", quickNewest: "\ud83c\udd95 Mais novo", quickSimilar: "\ud83d\udca1 Recomendar",
    installTitle: "Instale o app!", installDesc: "Acesso r\u00e1pido a ofertas na sua tela", installBtn: "Instalar",
    pointsTitle: "Meus Pontos", pointsBalance: "pontos",
    pointsEarn: "+{pts} pontos ganhos!",
    pointsRedeem: "Resgatar", pointsHistory: "Hist\u00f3rico",
    pointsDaily: "B\u00f4nus di\u00e1rio!", pointsSearch: "Pesquisa",
    pointsClick: "Ver produto", pointsShare: "Compartilhar",
    pointsFav: "Favorito", pointsSpin: "Giro",
    pointsCoupon5: "Cupom 5%", pointsCoupon10: "Cupom 10%",
    pointsFreeShip: "Frete gr\u00e1tis", pointsCoupon5off: "Cupom $5",
    pointsRedeemed: "Resgatado!", pointsNotEnough: "Pontos insuficientes",
    pointsToday: "Hoje", pointsYesterday: "Ontem",
    imgSearching: "Identificando produto...", imgResult: "Encontrado: {desc}", imgError: "N\u00e3o foi poss\u00edvel identificar",
    imgTakePhoto: "Foto", imgUpload: "Enviar",
    nlTitle: "Receba ofertas quentes no seu email!",
    nlDesc: "Assine nossa newsletter semanal",
    nlPlaceholder: "Digite seu email",
    nlBtn: "Assinar",
    nlPrivacy: "Sem spam. Cancele quando quiser.",
    nlSuccess: "Inscrito! Enviaremos as melhores ofertas",
    nlPopupTitle: "Não perca ofertas!",
    nlPopupDesc: "Junte-se a milhares de assinantes",
    nlSkip: "Agora não",
    shareTitle: "¡Comparte esta oferta!", shareCopied: "¡Enlace copiado!",
    shareNative: "Más...",
  },
  tr: {
    heroTitle: "\u2728 M\u00fckemmel \u00fcr\u00fcn\u00fc bul",
    heroSubtitle: "AliExpress'te en iyi fiyatlarla moda ve ya\u015fam \u00fcr\u00fcnlerini ara",
    welcome: "Merhaba! AliExpress'te harika \u00fcr\u00fcnler bulmana yard\u0131mc\u0131 olaca\u011f\u0131m.\nNe arad\u0131\u011f\u0131n\u0131 s\u00f6yle, en iyi f\u0131rsatlar\u0131 bulal\u0131m! \ud83d\udecd\ufe0f",
    inputPlaceholder: "Ne ar\u0131yorsun? (\u00f6r: gece elbisesi, spor ayakkab\u0131...)",
    searching: "Aran\u0131yor...",
    foundResults: "{count} \u00fcr\u00fcn bulundu! En iyi f\u0131rsatlar:",
    noResults: "Sonu\u00e7 bulunamad\u0131. Ba\u015fka bir kelime dene:",
    viewProduct: "G\u00f6r\u00fcnt\u00fcle ve sat\u0131n al \u2192",
    orders: "sipari\u015f",
    clearResults: "Temizle",
    loadMore: "Daha fazla y\u00fckle",
    categoriesTitle: "\ud83c\udff7\ufe0f Pop\u00fcler kategoriler",
    trendingTitle: "\ud83d\udd25 \u015eimdi trend",
    howTitle: "\ud83d\udca1 Nas\u0131l \u00e7al\u0131\u015f\u0131r?",
    step1Title: "Ara", step1Desc: "Arad\u0131\u011f\u0131n\u0131 kendi dilinde yaz",
    step2Title: "Sonu\u00e7lar", step2Desc: "Sistemimiz en iyi fiyatlar\u0131 bulur",
    step3Title: "Ucuza al", step3Desc: "\u00dcr\u00fcne t\u0131kla ve AliExpress'e git",
    disclaimer: "Bu site ortakl\u0131k ba\u011flant\u0131lar\u0131 kullan\u0131r. Al\u0131\u015fveri\u015finiz daha pahal\u0131ya mal olmaz.",
    recentSearches: "Son aramalar:", alsoSearch: "Ba\u015fkalar\u0131 da ar\u0131yor:",
    sortBy: "S\u0131rala:", priceRange: "Fiyat:", priceFrom: "En az", priceTo: "En \u00e7ok", apply: "Filtrele",
    sortPopular: "En \u00e7ok satan", sortCheap: "En ucuz", sortExpensive: "En pahal\u0131", sortNew: "En yeni", sortRating: "Puan",
    myFavorites: "Favorilerim", noFavorites: "Hen\u00fcz favori yok",
    shareText: "AliExpress'te ne buldum bak!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f Son g\u00f6r\u00fcnt\u00fclenenler", clearViewed: "Temizle",
    myAlerts: "Fiyat uyar\u0131lar\u0131", noAlerts: "Aktif uyar\u0131 yok",
    setAlert: "Fiyat d\u00fc\u015ft\u00fc\u011f\u00fcnde uyar:", save: "Kaydet", cancel: "\u0130ptal",
    priceDropped: "Fiyat d\u00fc\u015ft\u00fc!", targetPrice: "Hedef fiyat",
    dailyDealsTitle: "\u23f0 G\u00fcn\u00fcn F\u0131rsatlar\u0131", dealsEndsIn: "Biter",
    spinTitle: "\ud83c\udfb0 \u00c7evir ve kazan!", spinBtn: "\u00c7evir!", spinAlreadyUsed: "Bug\u00fcn zaten \u00e7evirdiniz! Yar\u0131n gelin \ud83d\ude0a",
    spinCongrats: "Tebrikler! \ud83c\udf89", spinTryAgain: "Yar\u0131n tekrar dene", spinGetPrize: "\u00d6d\u00fcl\u00fc al",
    chatHelp: "\u00dcr\u00fcn bulmanda yard\u0131mc\u0131 olabilirim! Ne arad\u0131\u011f\u0131n\u0131 yaz veya \u00f6neri iste \ud83d\uded2",
    chatRecommending: "\u00d6neriler aran\u0131yor...", chatRefining: "{query} aran\u0131yor...",
    quickCheapest: "\ud83d\udd3d En ucuz", quickRated: "\u2b50 En iyi", quickNewest: "\ud83c\udd95 En yeni", quickSimilar: "\ud83d\udca1 \u00d6neriler",
    installTitle: "Uygulamay\u0131 y\u00fckle!", installDesc: "Ekran\u0131ndan f\u0131rsatlara h\u0131zl\u0131 eri\u015fim", installBtn: "Y\u00fckle",
    pointsTitle: "Puanlar\u0131m", pointsBalance: "puan",
    pointsEarn: "+{pts} puan kazan\u0131ld\u0131!",
    pointsRedeem: "Kullan", pointsHistory: "Ge\u00e7mi\u015f",
    pointsDaily: "G\u00fcnl\u00fck bonus!", pointsSearch: "Arama",
    pointsClick: "\u00dcr\u00fcn g\u00f6r\u00fcnt\u00fcleme", pointsShare: "Payla\u015f",
    pointsFav: "Favori", pointsSpin: "D\u00f6nd\u00fcr",
    pointsCoupon5: "Kupon %5", pointsCoupon10: "Kupon %10",
    pointsFreeShip: "\u00dccretsiz kargo", pointsCoupon5off: "Kupon $5",
    pointsRedeemed: "Kullan\u0131ld\u0131!", pointsNotEnough: "Yetersiz puan",
    pointsToday: "Bug\u00fcn", pointsYesterday: "D\u00fcn",
    imgSearching: "\u00dcr\u00fcn tan\u0131mlan\u0131yor...", imgResult: "Bulundu: {desc}", imgError: "Tan\u0131mlanamad\u0131",
    imgTakePhoto: "Foto", imgUpload: "Y\u00fckle",
    nlTitle: "Sıcak fırsatları e-postana al!",
    nlDesc: "Haftalık bültenimize abone ol",
    nlPlaceholder: "E-posta adresinizi girin",
    nlBtn: "Abone ol",
    nlPrivacy: "Spam yok. İptal edin.",
    nlSuccess: "Abone oldunuz!",
    nlPopupTitle: "Fırsatları kaçırma!",
    nlPopupDesc: "Binlerce aboneye katılın",
    nlSkip: "Şimdi değil",
    shareTitle: "Compartilhe esta oferta!", shareCopied: "Link copiado!",
    shareNative: "Mais...",
  },
  fr: {
    heroTitle: "\u2728 Trouvez le produit parfait",
    heroSubtitle: "Recherchez des produits mode et lifestyle aux meilleurs prix sur AliExpress",
    welcome: "Salut! Je suis l\u00e0 pour vous aider \u00e0 trouver des produits incroyables sur AliExpress.\nDites-moi ce que vous cherchez et je trouverai les meilleures offres! \ud83d\udecd\ufe0f",
    inputPlaceholder: "Que cherchez-vous? (ex: robe de soir\u00e9e, baskets sport...)",
    searching: "Recherche...",
    foundResults: "{count} produits trouv\u00e9s! Meilleures offres:",
    noResults: "Aucun r\u00e9sultat. Essayez un autre mot:",
    viewProduct: "Voir et acheter \u2192",
    orders: "commandes",
    clearResults: "Effacer",
    loadMore: "Charger plus",
    categoriesTitle: "\ud83c\udff7\ufe0f Cat\u00e9gories populaires",
    trendingTitle: "\ud83d\udd25 Tendances maintenant",
    howTitle: "\ud83d\udca1 Comment \u00e7a marche?",
    step1Title: "Cherchez", step1Desc: "\u00c9crivez ce que vous cherchez dans votre langue",
    step2Title: "R\u00e9sultats", step2Desc: "Notre syst\u00e8me trouve les meilleures offres",
    step3Title: "Achetez pas cher", step3Desc: "Cliquez sur le produit et allez sur AliExpress",
    disclaimer: "Ce site utilise des liens d'affiliation. Votre achat ne co\u00fbtera pas plus cher.",
    recentSearches: "Recherches r\u00e9centes:", alsoSearch: "Recherchent aussi:",
    sortBy: "Trier:", priceRange: "Prix:", priceFrom: "De", priceTo: "\u00c0", apply: "Filtrer",
    sortPopular: "Plus vendus", sortCheap: "Moins cher", sortExpensive: "Plus cher", sortNew: "Nouveaux", sortRating: "Note",
    myFavorites: "Mes favoris", noFavorites: "Pas encore de favoris",
    shareText: "Regarde ce que j'ai trouv\u00e9 sur AliExpress!",
    recentlyViewedTitle: "\ud83d\udc41\ufe0f Vus r\u00e9cemment", clearViewed: "Effacer",
    myAlerts: "Alertes prix", noAlerts: "Pas d'alertes actives",
    setAlert: "Alerter quand le prix descend \u00e0:", save: "Sauver", cancel: "Annuler",
    priceDropped: "Prix en baisse!", targetPrice: "Prix cible",
    dailyDealsTitle: "\u23f0 Offres du jour", dealsEndsIn: "Se termine dans",
    spinTitle: "\ud83c\udfb0 Tournez et gagnez!", spinBtn: "Tourner!", spinAlreadyUsed: "D\u00e9j\u00e0 tourn\u00e9 aujourd'hui! Revenez demain \ud83d\ude0a",
    spinCongrats: "F\u00e9licitations! \ud83c\udf89", spinTryAgain: "R\u00e9essayez demain", spinGetPrize: "R\u00e9clamer le prix",
    chatHelp: "Je peux vous aider \u00e0 trouver des produits! \u00c9crivez ce que vous cherchez ou demandez des recommandations \ud83d\uded2",
    chatRecommending: "Recherche de recommandations...", chatRefining: "Recherche {query}...",
    quickCheapest: "\ud83d\udd3d Moins cher", quickRated: "\u2b50 Mieux not\u00e9", quickNewest: "\ud83c\udd95 Plus r\u00e9cent", quickSimilar: "\ud83d\udca1 Recommander",
    installTitle: "Installez l'appli!", installDesc: "Acc\u00e8s rapide aux offres depuis votre \u00e9cran", installBtn: "Installer",
    pointsTitle: "Mes Points", pointsBalance: "points",
    pointsEarn: "+{pts} points gagn\u00e9s!",
    pointsRedeem: "\u00c9changer", pointsHistory: "Historique",
    pointsDaily: "Bonus quotidien!", pointsSearch: "Recherche",
    pointsClick: "Voir produit", pointsShare: "Partager",
    pointsFav: "Favori", pointsSpin: "Tourner",
    pointsCoupon5: "Coupon 5%", pointsCoupon10: "Coupon 10%",
    pointsFreeShip: "Livraison gratuite", pointsCoupon5off: "Coupon 5$",
    pointsRedeemed: "\u00c9chang\u00e9!", pointsNotEnough: "Points insuffisants",
    pointsToday: "Aujourd'hui", pointsYesterday: "Hier",
    imgSearching: "Identification du produit...", imgResult: "Trouv\u00e9: {desc}", imgError: "Impossible d'identifier",
    imgTakePhoto: "Photo", imgUpload: "T\u00e9l\u00e9charger",
    nlTitle: "Recevez les bons plans par email !",
    nlDesc: "Abonnez-vous a notre newsletter hebdomadaire",
    nlPlaceholder: "Entrez votre email",
    nlBtn: "S'abonner",
    nlPrivacy: "Pas de spam.",
    nlSuccess: "Abonne !",
    nlPopupTitle: "Ne ratez pas les offres !",
    nlPopupDesc: "Rejoignez des milliers d'abonnes",
    nlSkip: "Pas maintenant",
    shareTitle: "Partagez cette offre !", shareCopied: "Lien copié !",
    shareNative: "Plus...",
  }
};

// RTL languages
const RTL_LANGS = new Set(["he", "ar"]);

// Language metadata for selector
const LANG_META = {
  he: { flag: "\ud83c\uddee\ud83c\uddf1", name: "\u05e2\u05d1\u05e8\u05d9\u05ea" },
  en: { flag: "\ud83c\uddfa\ud83c\uddf8", name: "English" },
  ar: { flag: "\ud83c\uddf8\ud83c\udde6", name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
  ru: { flag: "\ud83c\uddf7\ud83c\uddfa", name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
  es: { flag: "\ud83c\uddea\ud83c\uddf8", name: "Espa\u00f1ol" },
  pt: { flag: "\ud83c\udde7\ud83c\uddf7", name: "Portugu\u00eas" },
  tr: { flag: "\ud83c\uddf9\ud83c\uddf7", name: "T\u00fcrk\u00e7e" },
  fr: { flag: "\ud83c\uddeb\ud83c\uddf7", name: "Fran\u00e7ais" },
};

// Language → Country/Currency mapping for auto-detection
const LANG_COUNTRY_CURRENCY = {
  he: { country: "IL", currency: "ILS", symbol: "₪" },
  en: { country: "US", currency: "USD", symbol: "$" },
  ar: { country: "SA", currency: "SAR", symbol: "ر.س" },
  ru: { country: "RU", currency: "RUB", symbol: "₽" },
  es: { country: "ES", currency: "EUR", symbol: "€" },
  pt: { country: "BR", currency: "BRL", symbol: "R$" },
  tr: { country: "TR", currency: "TRY", symbol: "₺" },
  fr: { country: "FR", currency: "EUR", symbol: "€" },
};

// ============================================================
//  i18n application
// ============================================================

function setLang(lang, skipNav) {
  if (!i18n[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("ali_lang", lang);

  // Navigate to locale path if user switched language (not during init)
  if (!skipNav) {
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/(en|ar|ru|es|pt|tr|fr)\//, "/");
    const isSubdir = /^\/(en|ar|ru|es|pt|tr|fr)\//.test(currentPath);
    const isHebrew = lang === "he";
    if (isHebrew && isSubdir) {
      // Go to root
      window.location.href = basePath + window.location.search;
      return;
    } else if (!isHebrew) {
      const targetPath = "/" + lang + "/";
      if (!currentPath.startsWith(targetPath)) {
        window.location.href = targetPath + window.location.search;
        return;
      }
    }
  }

  // Update currency/country based on language
  const geo = LANG_COUNTRY_CURRENCY[lang] || LANG_COUNTRY_CURRENCY.en;
  currentCurrency = geo.currency;
  currentCountry = geo.country;
  currentCurrencySymbol = geo.symbol;

  const isRTL = RTL_LANGS.has(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  // Update language selector
  const langSelector = document.getElementById("langSelector");
  if (langSelector) {
    langSelector.value = lang;
  }
  // Update flag display
  const langFlag = document.getElementById("langFlag");
  if (langFlag && LANG_META[lang]) {
    langFlag.textContent = LANG_META[lang].flag;
  }

  // Close language dropdown if open
  const langDropdown = document.getElementById("langDropdown");
  if (langDropdown) langDropdown.classList.remove("open");

  // Update site name
  const logoText = document.querySelector(".logo-text");
  if (logoText && SITE_NAMES[lang]) {
    logoText.textContent = SITE_NAMES[lang];
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  // Update price filter placeholders
  const priceMin = document.getElementById("priceMin");
  const priceMax = document.getElementById("priceMax");
  if (priceMin) priceMin.placeholder = i18n[lang].priceFrom || "From";
  if (priceMax) priceMax.placeholder = i18n[lang].priceTo || "To";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.options[0].text = i18n[lang].sortPopular;
    sortSelect.options[1].text = i18n[lang].sortCheap;
    sortSelect.options[2].text = i18n[lang].sortExpensive;
    sortSelect.options[3].text = i18n[lang].sortNew;
    sortSelect.options[4].text = i18n[lang].sortRating;
  }

  loadSuggestions();
  loadCategories();
  renderHistory();
  loadTrending();
  loadDailyDeals();
  loadRecentlyViewed();
}

function toggleLangDropdown() {
  const dd = document.getElementById("langDropdown");
  if (dd) dd.classList.toggle("open");
}

// Auto-detect language from browser
function detectLanguage() {
  const saved = localStorage.getItem("ali_lang");
  if (saved && i18n[saved]) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || "en").substring(0, 2).toLowerCase();
  return i18n[browserLang] ? browserLang : "en";
}

// ============================================================
//  Dark Mode
// ============================================================

function initTheme() {
  const saved = localStorage.getItem("ali_theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon();
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("ali_theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("ali_theme", "dark");
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById("themeToggle");
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  btn.textContent = isDark ? "\u2600\ufe0f" : "\ud83c\udf19";
  // Update meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark ? "#1a1a2e" : "#6C5CE7";
}

// ============================================================
//  Search History (localStorage)
// ============================================================

function getHistory() {
  try { return JSON.parse(localStorage.getItem("ali_history") || "[]"); }
  catch { return []; }
}

function addToHistory(query) {
  let history = getHistory();
  history = history.filter(h => h !== query);
  history.unshift(query);
  if (history.length > 10) history = history.slice(0, 10);
  localStorage.setItem("ali_history", JSON.stringify(history));
  renderHistory();
}

function clearHistory() {
  localStorage.removeItem("ali_history");
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  const container = document.getElementById("historyContainer");
  const chips = document.getElementById("historyChips");
  if (history.length === 0) { container.style.display = "none"; return; }
  container.style.display = "flex";
  chips.innerHTML = history.map(h =>
    `<button class="history-chip" onclick="chipClick('${h.replace(/'/g, "\\'")}')">${h}</button>`
  ).join("") + `<button class="history-clear-btn" onclick="clearHistory()">\u2715</button>`;
}

// ============================================================
//  Favorites (localStorage)
// ============================================================

function getFavorites() {
  try { return JSON.parse(localStorage.getItem("ali_favorites") || "[]"); }
  catch { return []; }
}

function toggleFavorite(product) {
  let favs = getFavorites();
  const idx = favs.findIndex(f => f.id === product.id);
  if (idx >= 0) { favs.splice(idx, 1); }
  else { favs.unshift(product); if (favs.length > 50) favs = favs.slice(0, 50); addPoints(1, "fav"); }
  localStorage.setItem("ali_favorites", JSON.stringify(favs));
  updateFavBadge();
  return idx < 0;
}

function isFavorite(productId) { return getFavorites().some(f => f.id === productId); }

function updateFavBadge() {
  const count = getFavorites().length;
  const badge = document.getElementById("favBadge");
  badge.style.display = count > 0 ? "inline" : "none";
  badge.textContent = count;
}

function showFavorites() {
  const modal = document.getElementById("favModal");
  const body = document.getElementById("favModalBody");
  const favs = getFavorites();
  if (favs.length === 0) {
    body.innerHTML = `<p class="empty-fav">${i18n[currentLang].noFavorites}</p>`;
  } else {
    body.innerHTML = `<div class="fav-grid">${favs.map(p => `
      <div class="fav-item">
        <a href="${p.affiliate_url}" target="_blank" rel="noopener">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </a>
        <div class="fav-info">
          <div class="fav-title">${p.title}</div>
          <div class="fav-price">${currentCurrencySymbol}${p.price}</div>
          <div class="fav-actions">
            <a href="${p.affiliate_url}" target="_blank" rel="noopener" class="fav-buy-btn">${i18n[currentLang].viewProduct}</a>
            <button class="fav-remove-btn" onclick="removeFavorite(${p.id})">🗑️</button>
          </div>
        </div>
      </div>
    `).join("")}</div>`;
  }
  modal.style.display = "flex";
}

function closeFavorites() { document.getElementById("favModal").style.display = "none"; }

function removeFavorite(productId) {
  let favs = getFavorites();
  favs = favs.filter(f => f.id !== productId);
  localStorage.setItem("ali_favorites", JSON.stringify(favs));
  updateFavBadge();
  showFavorites();
}

// ============================================================
//  Recently Viewed (localStorage)
// ============================================================

function getViewed() {
  try { return JSON.parse(localStorage.getItem("ali_viewed") || "[]"); }
  catch { return []; }
}

function trackView(product) {
  let viewed = getViewed();
  viewed = viewed.filter(v => v.id !== product.id);
  viewed.unshift({
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    affiliate_url: product.affiliate_url,
    timestamp: Date.now()
  });
  if (viewed.length > 20) viewed = viewed.slice(0, 20);
  localStorage.setItem("ali_viewed", JSON.stringify(viewed));
}

function clearViewed() {
  localStorage.removeItem("ali_viewed");
  document.getElementById("recentlyViewed").style.display = "none";
}

function loadRecentlyViewed() {
  const viewed = getViewed();
  const section = document.getElementById("recentlyViewed");
  const grid = document.getElementById("recentlyViewedGrid");
  if (viewed.length === 0) { section.style.display = "none"; return; }
  section.style.display = "block";
  grid.innerHTML = viewed.map(p => `
    <div class="rv-card">
      <a href="${p.affiliate_url}" target="_blank" rel="noopener">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="rv-card-info">
          <div class="rv-card-title">${p.title}</div>
          <div class="rv-card-price">${currentCurrencySymbol}${p.price}</div>
        </div>
      </a>
    </div>
  `).join("");
}

// ============================================================
//  Price Alerts (localStorage)
// ============================================================

function getAlerts() {
  try { return JSON.parse(localStorage.getItem("ali_alerts") || "[]"); }
  catch { return []; }
}

function addPriceAlert(product, targetPrice) {
  let alerts = getAlerts();
  alerts = alerts.filter(a => a.id !== product.id);
  alerts.unshift({
    id: product.id,
    title: product.title,
    image: product.image,
    currentPrice: parseFloat(product.price),
    targetPrice: parseFloat(targetPrice),
    affiliate_url: product.affiliate_url,
    createdAt: Date.now(),
    triggered: false
  });
  if (alerts.length > 30) alerts = alerts.slice(0, 30);
  localStorage.setItem("ali_alerts", JSON.stringify(alerts));
  updateAlertBadge();
}

function removeAlert(productId) {
  let alerts = getAlerts();
  alerts = alerts.filter(a => a.id !== productId);
  localStorage.setItem("ali_alerts", JSON.stringify(alerts));
  updateAlertBadge();
  showAlerts();
}

function updateAlertBadge() {
  const alerts = getAlerts();
  const triggered = alerts.filter(a => a.triggered).length;
  const badge = document.getElementById("alertBadge");
  badge.style.display = triggered > 0 ? "inline" : "none";
  badge.textContent = triggered;
}

function checkPriceAlerts(products) {
  let alerts = getAlerts();
  let changed = false;
  products.forEach(p => {
    const idx = alerts.findIndex(a => a.id === p.id);
    if (idx >= 0) {
      const price = parseFloat(p.price);
      if (price <= alerts[idx].targetPrice && !alerts[idx].triggered) {
        alerts[idx].triggered = true;
        alerts[idx].currentPrice = price;
        changed = true;
      }
    }
  });
  if (changed) {
    localStorage.setItem("ali_alerts", JSON.stringify(alerts));
    updateAlertBadge();
  }
}

function hasAlert(productId) { return getAlerts().some(a => a.id === productId); }

function showAlertDialog(product) {
  // Remove existing dialog
  const existing = document.getElementById("alertDialogOverlay");
  if (existing) existing.remove();
  const existingD = document.getElementById("alertDialog");
  if (existingD) existingD.remove();

  const suggestedPrice = (parseFloat(product.price) * 0.8).toFixed(0);

  const overlay = document.createElement("div");
  overlay.className = "alert-dialog-overlay";
  overlay.id = "alertDialogOverlay";
  overlay.onclick = () => closeAlertDialog();

  const dialog = document.createElement("div");
  dialog.className = "alert-dialog";
  dialog.id = "alertDialog";
  dialog.innerHTML = `
    <h3>🔔 ${i18n[currentLang].setAlert}</h3>
    <div style="font-size:0.85rem;color:var(--text-light);margin-bottom:8px">${product.title.substring(0, 50)}...</div>
    <div style="margin-bottom:4px;font-size:0.85rem;color:var(--text-muted)">${i18n[currentLang].priceRange}: ${currentCurrencySymbol}${product.price}</div>
    <div>${currentCurrencySymbol} <input type="number" class="alert-price-input" id="alertPriceInput" value="${suggestedPrice}" min="1"></div>
    <div class="alert-dialog-btns">
      <button class="alert-save-btn" onclick="saveAlertFromDialog()">${i18n[currentLang].save}</button>
      <button class="alert-cancel-btn" onclick="closeAlertDialog()">${i18n[currentLang].cancel}</button>
    </div>
  `;

  // Store product data temporarily
  dialog.dataset.product = JSON.stringify({
    id: product.id, title: product.title, price: product.price,
    image: product.image, affiliate_url: product.affiliate_url
  });

  document.body.appendChild(overlay);
  document.body.appendChild(dialog);
  document.getElementById("alertPriceInput").focus();
}

function saveAlertFromDialog() {
  const dialog = document.getElementById("alertDialog");
  const product = JSON.parse(dialog.dataset.product);
  const targetPrice = document.getElementById("alertPriceInput").value;
  if (targetPrice && parseFloat(targetPrice) > 0) {
    addPriceAlert(product, targetPrice);
    // Update the button on the card
    const btn = document.querySelector(`#product-${product.id} .alert-btn-card`);
    if (btn) { btn.classList.add("has-alert"); btn.textContent = "\ud83d\udd14"; }
  }
  closeAlertDialog();
}

function closeAlertDialog() {
  const overlay = document.getElementById("alertDialogOverlay");
  const dialog = document.getElementById("alertDialog");
  if (overlay) overlay.remove();
  if (dialog) dialog.remove();
}

function showAlerts() {
  const modal = document.getElementById("alertModal");
  const body = document.getElementById("alertModalBody");
  const alerts = getAlerts();
  if (alerts.length === 0) {
    body.innerHTML = `<p class="empty-fav">${i18n[currentLang].noAlerts}</p>`;
  } else {
    body.innerHTML = `<div class="fav-grid">${alerts.map(a => `
      <div class="fav-item ${a.triggered ? 'price-dropped' : ''}">
        <a href="${a.affiliate_url}" target="_blank" rel="noopener">
          <img src="${a.image}" alt="${a.title}" loading="lazy">
        </a>
        <div class="fav-info">
          <div class="fav-title">${a.title}</div>
          <div class="fav-price">
            ${currentCurrencySymbol}${a.currentPrice}
            ${a.triggered ? `<span class="price-drop-label">\u2193 ${i18n[currentLang].priceDropped}</span>` : ''}
          </div>
          <div style="font-size:0.78rem;color:var(--text-muted)">${i18n[currentLang].targetPrice}: ${currentCurrencySymbol}${a.targetPrice}</div>
          <div class="fav-actions">
            <a href="${a.affiliate_url}" target="_blank" rel="noopener" class="fav-buy-btn">${i18n[currentLang].viewProduct}</a>
            <button class="fav-remove-btn" onclick="removeAlert(${a.id})">🗑️</button>
          </div>
        </div>
      </div>
    `).join("")}</div>`;
  }
  modal.style.display = "flex";
}

function closeAlerts() { document.getElementById("alertModal").style.display = "none"; }

// ============================================================
//  Share (WhatsApp)
// ============================================================

function shareProduct(title, price, url) {
  const text = `${i18n[currentLang].shareText || "Check this deal!"}\n${title}\n${currentCurrencySymbol}${price}`;
  showShareModal(text, url, title);
}

function shareSearch(query) {
  const url = `${SITE_URL}?q=${encodeURIComponent(query)}`;
  const text = currentLang === "he"
    ? `\u05ea\u05e8\u05d0\u05d9 \u05de\u05d4 \u05de\u05e6\u05d0\u05ea\u05d9! \u05d7\u05e4\u05e9\u05d9 "${query}" \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1:`
    : `Check this out! Search "${query}" on AliExpress:`;
  showShareModal(text, url, query);
}

function showShareModal(text, url, title) {
  const fullText = text + "\n" + url;
  const modal = document.getElementById("shareModal");
  if (!modal) return;

  // Set up share links
  const encodedText = encodeURIComponent(fullText);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || "");

  document.getElementById("shareWhatsApp").onclick = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, "_blank");
    addPoints(5, "share"); closeShareModal();
    gtag?.("event", "share", { method: "whatsapp", content_type: "product" });
  };
  document.getElementById("shareTelegram").onclick = () => {
    window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(text)}`, "_blank");
    addPoints(5, "share"); closeShareModal();
    gtag?.("event", "share", { method: "telegram", content_type: "product" });
  };
  document.getElementById("shareFacebook").onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(text)}`, "_blank");
    addPoints(5, "share"); closeShareModal();
    gtag?.("event", "share", { method: "facebook", content_type: "product" });
  };
  document.getElementById("shareTwitter").onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodedUrl}`, "_blank");
    addPoints(5, "share"); closeShareModal();
    gtag?.("event", "share", { method: "twitter", content_type: "product" });
  };
  document.getElementById("shareCopy").onclick = () => {
    navigator.clipboard.writeText(fullText).then(() => {
      const btn = document.getElementById("shareCopy");
      const origText = btn.innerHTML;
      btn.innerHTML = "\u2705 " + (i18n[currentLang].shareCopied || "Copied!");
      setTimeout(() => btn.innerHTML = origText, 2000);
    });
    addPoints(5, "share");
    gtag?.("event", "share", { method: "copy", content_type: "product" });
  };

  // Native share API (mobile)
  const nativeBtn = document.getElementById("shareNative");
  if (navigator.share) {
    nativeBtn.style.display = "flex";
    nativeBtn.onclick = () => {
      navigator.share({ title: title, text: text, url: url }).catch(() => {});
      addPoints(5, "share"); closeShareModal();
      gtag?.("event", "share", { method: "native", content_type: "product" });
    };
  } else {
    nativeBtn.style.display = "none";
  }

  modal.style.display = "flex";
}

function closeShareModal() {
  const modal = document.getElementById("shareModal");
  if (modal) modal.style.display = "none";
}

// ============================================================
//  Autocomplete
// ============================================================

let acActiveIndex = -1;

function initAutocomplete() {
  const input = document.getElementById("chatInput");
  const dropdown = document.getElementById("autocompleteDropdown");
  let debounceTimer;

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const val = input.value.trim();
      if (val.length < 2) { hideAutocomplete(); return; }
      showAutocomplete(val);
    }, 250);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      hideAutocomplete();
      sendMessage();
      return;
    }
    if (!dropdown.classList.contains("show")) return;

    const items = dropdown.querySelectorAll(".autocomplete-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      acActiveIndex = Math.min(acActiveIndex + 1, items.length - 1);
      updateAcActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      acActiveIndex = Math.max(acActiveIndex - 1, -1);
      updateAcActive(items);
    } else if (e.key === "Escape") {
      hideAutocomplete();
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => hideAutocomplete(), 200);
  });

  input.addEventListener("focus", () => {
    const val = input.value.trim();
    if (val.length >= 2) showAutocomplete(val);
  });
}

function showAutocomplete(query) {
  const dropdown = document.getElementById("autocompleteDropdown");
  const q = query.toLowerCase();
  const results = [];

  // Search history matches
  getHistory().forEach(h => {
    if (h.toLowerCase().includes(q) && h !== query) {
      results.push({ text: h, type: "\ud83d\udd50", label: currentLang === "he" ? "\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd" : "Recent" });
    }
  });

  // Suggestions matches
  cachedSuggestions.forEach(s => {
    if (s.toLowerCase().includes(q) && s !== query && !results.some(r => r.text === s)) {
      results.push({ text: s, type: "\ud83d\udca1", label: currentLang === "he" ? "\u05d4\u05e6\u05e2\u05d4" : "Suggest" });
    }
  });

  if (results.length === 0) { hideAutocomplete(); return; }

  acActiveIndex = -1;
  dropdown.innerHTML = results.slice(0, 6).map((r, i) => `
    <div class="autocomplete-item" data-index="${i}" onmousedown="acSelect('${r.text.replace(/'/g, "\\'")}')">
      <span class="ac-icon">${r.type}</span>
      <span class="ac-text">${highlightMatch(r.text, query)}</span>
      <span class="ac-type">${r.label}</span>
    </div>
  `).join("");
  dropdown.classList.add("show");
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return text;
  return text.substring(0, idx) + `<b>${text.substring(idx, idx + query.length)}</b>` + text.substring(idx + query.length);
}

function hideAutocomplete() {
  document.getElementById("autocompleteDropdown").classList.remove("show");
  acActiveIndex = -1;
}

function acSelect(text) {
  document.getElementById("chatInput").value = text;
  hideAutocomplete();
  sendMessage();
}

function updateAcActive(items) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === acActiveIndex);
  });
  if (acActiveIndex >= 0 && items[acActiveIndex]) {
    document.getElementById("chatInput").value = items[acActiveIndex].querySelector(".ac-text").textContent;
  }
}

// ============================================================
//  API calls
// ============================================================

const SORT_API_MAP = {
  "popular": "LAST_VOLUME_DESC",
  "cheap": "SALE_PRICE_ASC",
  "expensive": "SALE_PRICE_DESC",
  "new": "LATEST_DESC",
  "rating": "EVALUATE_RATE_DESC",
};

// Hebrew→English translation dictionary for common search terms
const HE_EN_DICT = {
  "תחתונים": "underwear panties", "תחתוני": "underwear panties", "תחתון": "underwear panties",
  "הלבשה תחתונה": "lingerie underwear", "הלבשה תחתונה לנשים": "women lingerie underwear", "הלבשה תחתונה לגברים": "men underwear boxer briefs",
  "תחתוני נשים": "women panties underwear", "תחתוני גברים": "men boxer underwear briefs",
  "בוקסר": "boxer briefs", "בוקסרים": "boxer briefs", "תחתוני בוקסר": "boxer briefs men",
  "טנגה": "thong", "חוטיני": "women thong g-string tanga panties", "חוטיני נשים": "women thong g-string tanga panties", "חוטיני גברים": "men thong g-string underwear", "תחרה": "lace",
  "גברים": "men", "נשים": "women", "ילדים": "kids", "ילדות": "girls", "בנים": "boys",
  "שמלה": "dress", "שמלת": "dress", "שמלות": "dresses",
  "ערב": "evening", "קיץ": "summer", "חורף": "winter",
  "חולצה": "shirt", "חולצת": "shirt", "חולצות": "shirts",
  "מכנסיים": "pants", "מכנס": "pants", "ג'ינס": "jeans", "ג׳ינס": "jeans",
  "טייץ": "leggings", "טייצים": "leggings",
  "גרביים": "socks", "גרבי": "socks", "גרב": "socks",
  "חזייה": "bra", "חזיות": "bras", "חזיית": "bra",
  "בגד ים": "swimsuit", "ביקיני": "bikini",
  "אביזרי סקס": "body massager women mini powerful", "צעצועי סקס": "body massager women mini", "צעצועי מין": "body massager women mini", "סקס": "body massager women", "ויברטור": "body massager women mini powerful", "דילדו": "silicone massager women body", "טבעת רטט": "ring massager men couple", "אזיקים": "handcuffs restraint set couple", "לנז'רי": "sexy lingerie", "לנז'רי סקסי": "sexy lingerie women erotic", "קוספליי": "cosplay costume sexy", "תלבושת סקסית": "sexy costume lingerie erotic", "פלאג": "silicone plug trainer set", "פלאג לתחת": "silicone plug trainer set", "פלאג אנאלי": "silicone plug trainer beginner",
  "נעליים": "shoes", "נעלי": "shoes", "סניקרס": "sneakers", "סנדלים": "sandals",
  "מגפיים": "boots", "עקבים": "heels", "כפכפים": "slippers",
  "תיק": "bag", "תיקים": "bags", "תיק יד": "women handbag shoulder bag crossbody", "תיק יד לנשים": "women handbag shoulder bag leather", "תיק צד": "crossbody bag shoulder", "תיק כתף": "shoulder bag women", "תיק קלאץ'": "clutch bag evening", "תיק ערב": "evening bag clutch women", "תיק גב": "backpack", "תיק גב לנשים": "women backpack fashion", "תיק צד קטן": "small crossbody bag women",
  "ארנק": "wallet", "ארנקים": "wallets",
  "שעון": "watch", "שעונים": "watches", "שעון חכם": "smartwatch",
  "אוזניות": "earphones", "אוזניות אלחוטיות": "wireless earbuds",
  "טלפון": "phone", "כיסוי": "case", "כיסוי לטלפון": "phone case",
  "מחשב": "computer", "מחשב נייד": "laptop", "טאבלט": "tablet",
  "עגילים": "earrings", "שרשרת": "necklace", "צמיד": "bracelet", "טבעת": "ring",
  "תכשיטים": "jewelry", "תכשיט": "jewelry",
  "קרם": "cream", "קרם פנים": "face cream", "סרום": "serum", "מסכה": "mask",
  "איפור": "makeup", "שפתון": "lipstick", "מסקרה": "mascara",
  "פאה": "wig", "פאות": "wigs", "תוספות שיער": "hair extensions",
  "מברשת": "brush", "מברשת שיער": "hair brush",
  "מייבש שיער": "hair dryer", "מחליק שיער": "hair straightener",
  "ספורט": "sport", "ספורטיבי": "sports",
  "יוגה": "yoga", "כושר": "fitness", "ריצה": "running",
  "פריירית אוויר": "air fryer", "פרייר": "fryer",
  "שואב אבק": "vacuum cleaner", "שואב אבק רובוטי": "robot vacuum cleaner smart sweeping mopping automatic", "שואב אבק רובוט": "robot vacuum cleaner smart sweeping mopping automatic", "רובוט שואב": "robot vacuum cleaner smart sweeping mopping",
  "רובוט שוטף חלונות": "window cleaning robot automatic smart glass cleaner", "שוטף חלונות": "window cleaning robot glass cleaner automatic", "רובוט חלונות": "window cleaning robot automatic smart",
  "מנורה": "lamp", "תאורה": "lighting", "לד": "LED",
  "שטיח": "rug", "וילון": "curtain", "וילונות": "curtains",
  "מצעים": "bedding", "כרית": "pillow", "שמיכה": "blanket",
  "מטבח": "kitchen", "סכין": "knife", "סיר": "pot", "מחבת": "pan",
  "בקבוק": "bottle", "כוס": "cup", "צלחת": "plate",
  "צעצוע": "toy", "צעצועים": "toys", "לגו": "lego", "בובה": "doll",
  "תינוק": "baby", "עגלה": "stroller", "מוצץ": "pacifier",
  "כלב": "dog", "חתול": "cat", "חיות מחמד": "pets",
  "מדבקות": "stickers", "מדבקה": "sticker",
  "פנס": "flashlight", "סוללה": "battery",
  "אופניים": "bicycle", "קורקינט": "scooter",
  "מצלמה": "camera", "דרון": "drone",
  "פרחים": "flowers", "מלאכותי": "artificial",
  "חם": "warm", "קר": "cold", "גדול": "large", "קטן": "small",
  "זול": "cheap", "יפה": "beautiful", "חדש": "new",
  "ורוד": "pink", "שחור": "black", "לבן": "white", "אדום": "red", "כחול": "blue",
  "סקסי": "sexy", "אלגנטי": "elegant", "קז'ואל": "casual",
  "פיג'מה": "pajamas", "פיג׳מה": "pajamas",
  "חגורה": "belt", "כובע": "hat", "משקפיים": "glasses", "משקפי שמש": "sunglasses",
  "מעיל": "jacket", "מעילים": "jackets", "סווטשירט": "sweatshirt",
  "חליפה": "suit", "חליפת": "suit",
  "רובוטי": "robot", "חשמלי": "electric", "נטען": "rechargeable",
};

// Translate Hebrew query to English for better AliExpress results
function translateQuery(query) {
  if (currentLang !== "he") return query;

  // First try multi-word phrases
  let translated = query.toLowerCase();
  const multiWordKeys = Object.keys(HE_EN_DICT).filter(k => k.includes(" ")).sort((a, b) => b.length - a.length);
  for (const phrase of multiWordKeys) {
    if (translated.includes(phrase)) {
      translated = translated.replace(new RegExp(phrase, "g"), HE_EN_DICT[phrase]);
    }
  }

  // Then single words
  const words = translated.split(/\s+/);
  const result = words.map(w => HE_EN_DICT[w] || w).join(" ");

  // If any Hebrew chars remain, return original (let API handle it)
  // But if we translated everything, use the English version
  const hebrewRemaining = result.match(/[\u0590-\u05FF]/);
  return hebrewRemaining ? query : result;
}

// Search logging - save every query to Google Sheets + localStorage
function logSearch(originalQuery, translatedQuery, resultCount) {
  // Save to localStorage for admin dashboard
  try {
    const logs = JSON.parse(localStorage.getItem("search_logs") || "[]");
    logs.push({
      q: originalQuery,
      t: translatedQuery,
      lang: currentLang,
      results: resultCount,
      ts: new Date().toISOString()
    });
    // Keep last 500 searches locally
    if (logs.length > 500) logs.splice(0, logs.length - 500);
    localStorage.setItem("search_logs", JSON.stringify(logs));
  } catch(e) {}

  // Send to Google Sheets
  const sheetUrl = "https://script.google.com/macros/s/AKfycbyKsWkOorDYMOqGQiUDCxHUxGZMj1VLBJhxy3LbQRqOk8_tVVVlTJ0yZpU_9IzCXUMQ/exec";
  fetch(sheetUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "search",
      query: originalQuery,
      translated: translatedQuery,
      lang: currentLang,
      currency: currentCurrency,
      country: currentCountry,
      results: resultCount,
      date: new Date().toISOString()
    })
  }).catch(() => {});
}

async function doSearch(query, page = 1) {
  const translatedQ = translateQuery(query);
  const params = new URLSearchParams({
    q: translatedQ, lang: currentLang, currency: currentCurrency, country: currentCountry, page: String(page),
  });
  const resp = await fetch(`${API_BASE}/search?${params}`);
  const data = await resp.json();

  // Log the search
  if (page === 1) {
    logSearch(query, translatedQ, data?.products?.length || 0);
  }

  return data;
}

// Localized suggestions per language
const LANG_SUGGESTIONS = {
  he: ["שמלת ערב", "טייץ ספורט", "תיק יד", "אוזניות אלחוטיות", "שעון חכם", "קרם פנים", "נעלי סניקרס", "עגילים", "מכשיר למתיחת פנים", "פריירית אוויר", "שואב אבק רובוטי", "מחשב נייד"],
  en: ["Evening dress", "Sport leggings", "Handbag", "Wireless earbuds", "Smartwatch", "Face cream", "Sneakers", "Earrings", "Face massager", "Air fryer", "Robot vacuum", "Laptop"],
  ar: ["\u0641\u0633\u062a\u0627\u0646 \u0633\u0647\u0631\u0629", "\u062a\u0627\u064a\u062a\u0633 \u0631\u064a\u0627\u0636\u064a", "\u062d\u0642\u064a\u0628\u0629 \u064a\u062f", "\u0633\u0645\u0627\u0639\u0627\u062a \u0644\u0627\u0633\u0644\u0643\u064a\u0629", "\u0633\u0627\u0639\u0629 \u0630\u0643\u064a\u0629", "\u0643\u0631\u064a\u0645 \u0648\u062c\u0647", "\u0623\u062d\u0630\u064a\u0629 \u0631\u064a\u0627\u0636\u064a\u0629", "\u0623\u0642\u0631\u0627\u0637", "\u0645\u0642\u0644\u0627\u0629 \u0647\u0648\u0627\u0626\u064a\u0629", "\u0645\u0643\u0646\u0633\u0629 \u0631\u0648\u0628\u0648\u062a", "\u0644\u0627\u0628\u062a\u0648\u0628", "\u0639\u0637\u0631"],
  ru: ["\u0412\u0435\u0447\u0435\u0440\u043d\u0435\u0435 \u043f\u043b\u0430\u0442\u044c\u0435", "\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u043b\u0435\u0433\u0433\u0438\u043d\u0441\u044b", "\u0421\u0443\u043c\u043a\u0430", "\u0411\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438", "\u0421\u043c\u0430\u0440\u0442-\u0447\u0430\u0441\u044b", "\u041a\u0440\u0435\u043c \u0434\u043b\u044f \u043b\u0438\u0446\u0430", "\u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438", "\u0421\u0435\u0440\u044c\u0433\u0438", "\u0424\u0440\u0438\u0442\u044e\u0440\u043d\u0438\u0446\u0430", "\u0420\u043e\u0431\u043e\u0442-\u043f\u044b\u043b\u0435\u0441\u043e\u0441", "\u041d\u043e\u0443\u0442\u0431\u0443\u043a", "\u041f\u0430\u0440\u0444\u044e\u043c"],
  es: ["Vestido de noche", "Leggings deportivos", "Bolso de mano", "Auriculares inal\u00e1mbricos", "Reloj inteligente", "Crema facial", "Zapatillas", "Pendientes", "Freidora de aire", "Robot aspirador", "Port\u00e1til", "Perfume"],
  pt: ["Vestido de festa", "Legging esportiva", "Bolsa de m\u00e3o", "Fone bluetooth", "Rel\u00f3gio inteligente", "Creme facial", "T\u00eanis", "Brincos", "Fritadeira air fryer", "Rob\u00f4 aspirador", "Notebook", "Perfume"],
  tr: ["Gece elbisesi", "Spor tayt", "El \u00e7antas\u0131", "Kablosuz kulakl\u0131k", "Ak\u0131ll\u0131 saat", "Y\u00fcz kremi", "Spor ayakkab\u0131", "K\u00fcpe", "Airfryer", "Robot s\u00fcp\u00fcrge", "Laptop", "Parf\u00fcm"],
  fr: ["Robe de soir\u00e9e", "Legging sport", "Sac \u00e0 main", "\u00c9couteurs sans fil", "Montre connect\u00e9e", "Cr\u00e8me visage", "Baskets", "Boucles d'oreilles", "Friteuse sans huile", "Robot aspirateur", "Ordinateur portable", "Parfum"],
};

// Localized site name
const SITE_NAMES = {
  he: "\u05e2\u05dc\u05d9 \u05ea\u05de\u05e6\u05d0 \u05dc\u05d9",
  en: "Ali Find Me",
  ar: "\u0639\u0644\u064a \u0627\u0628\u062d\u062b \u0644\u064a",
  ru: "Ali \u041d\u0430\u0439\u0434\u0438 \u041c\u043d\u0435",
  es: "Ali Encu\u00e9ntrame",
  pt: "Ali Encontre-me",
  tr: "Ali Bul Bana",
  fr: "Ali Trouve-moi",
};

async function loadSuggestions() {
  // Use localized suggestions for current language
  if (LANG_SUGGESTIONS[currentLang]) {
    cachedSuggestions = LANG_SUGGESTIONS[currentLang];
    renderChips(cachedSuggestions);
    return;
  }
  try {
    const resp = await fetch(`${API_BASE}/suggestions`);
    const data = await resp.json();
    cachedSuggestions = data.suggestions || [];
    renderChips(cachedSuggestions);
  } catch { renderChips([]); }
}

async function loadCategories() {
  try {
    const resp = await fetch(`${API_BASE}/categories`);
    const data = await resp.json();
    renderCategories(data.categories || []);
  } catch { renderCategories([]); }
}

async function loadTrending() {
  try {
    const resp = await fetch(`${API_BASE}/trending`);
    const data = await resp.json();
    if (data.products && data.products.length > 0) {
      renderTrending(data.products);
      document.getElementById("trendingSection").style.display = "block";
    }
  } catch { document.getElementById("trendingSection").style.display = "none"; }
}

// ============================================================
//  Daily Deals
// ============================================================

const DEALS_CATEGORIES = [
  "fashion sale women dress",
  "electronics gadgets deals",
  "beauty skincare sale",
  "home kitchen gadgets",
  "jewelry accessories sale",
  "sports fitness accessories",
];

let countdownInterval = null;

async function loadDailyDeals() {
  try {
    const hour = new Date().getHours();
    const category = DEALS_CATEGORIES[Math.floor(hour / 4) % DEALS_CATEGORIES.length];
    const data = await doSearch(category, 1);
    if (data.products && data.products.length > 0) {
      const dealsProducts = data.products
        .filter(p => p.discount >= 15)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 6);
      if (dealsProducts.length >= 2) {
        renderDailyDeals(dealsProducts);
        document.getElementById("dailyDealsSection").style.display = "block";
        startCountdown();
      } else {
        document.getElementById("dailyDealsSection").style.display = "none";
      }
    }
  } catch {
    document.getElementById("dailyDealsSection").style.display = "none";
  }
}

function renderDailyDeals(products) {
  document.getElementById("dealsGrid").innerHTML = products.map(p => buildProductCard(p)).join("");
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  const update = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    const el = document.getElementById("countdownTimer");
    if (el) el.textContent = `${h}:${m}:${s}`;
  };
  update();
  countdownInterval = setInterval(update, 1000);
}

// ============================================================
//  Spin & Win
// ============================================================

const SPIN_PRIZES = [
  { labelKey: "coupon2",    icon: "🎁", color: "#6C5CE7", link: "https://s.click.aliexpress.com/e/_oBbNzoG" },
  { labelKey: "freeShip",   icon: "🚚", color: "#FD79A8", link: "https://s.click.aliexpress.com/e/_oBbNzoG" },
  { labelKey: "tryAgain",   icon: "😅", color: "#DFE6E9", link: null },
  { labelKey: "coupon3",    icon: "🎁", color: "#A29BFE", link: "https://s.click.aliexpress.com/e/_oBbNzoG" },
  { labelKey: "deal",       icon: "🔥", color: "#FDCB6E", link: null, action: "deals" },
  { labelKey: "tryAgain2",  icon: "😅", color: "#DFE6E9", link: null },
  { labelKey: "coupon5",    icon: "🎁", color: "#00B894", link: "https://s.click.aliexpress.com/e/_oBbNzoG" },
  { labelKey: "discount10", icon: "⭐", color: "#E17055", link: "https://s.click.aliexpress.com/e/_oBbNzoG" },
];

const SPIN_LABELS = {
  he: { coupon2: "קופון $2", freeShip: "משלוח חינם!", tryAgain: "נסי שוב מחר", coupon3: "קופון $3", deal: "דיל מיוחד!", tryAgain2: "נסי שוב מחר", coupon5: "קופון $5", discount10: "10% הנחה!" },
  en: { coupon2: "$2 Coupon", freeShip: "Free Shipping!", tryAgain: "Try Tomorrow", coupon3: "$3 Coupon", deal: "Special Deal!", tryAgain2: "Try Tomorrow", coupon5: "$5 Coupon", discount10: "10% Off!" },
  ar: { coupon2: "كوبون $2", freeShip: "شحن مجاني!", tryAgain: "حاول غداً", coupon3: "كوبون $3", deal: "عرض خاص!", tryAgain2: "حاول غداً", coupon5: "كوبون $5", discount10: "خصم 10%!" },
  ru: { coupon2: "Купон $2", freeShip: "Бесплатная доставка!", tryAgain: "Попробуй завтра", coupon3: "Купон $3", deal: "Спецпредложение!", tryAgain2: "Попробуй завтра", coupon5: "Купон $5", discount10: "Скидка 10%!" },
  es: { coupon2: "Cupón $2", freeShip: "¡Envío gratis!", tryAgain: "Intenta mañana", coupon3: "Cupón $3", deal: "¡Oferta especial!", tryAgain2: "Intenta mañana", coupon5: "Cupón $5", discount10: "¡10% Descuento!" },
  pt: { coupon2: "Cupom $2", freeShip: "Frete grátis!", tryAgain: "Tente amanhã", coupon3: "Cupom $3", deal: "Oferta especial!", tryAgain2: "Tente amanhã", coupon5: "Cupom $5", discount10: "10% Desconto!" },
  tr: { coupon2: "$2 Kupon", freeShip: "Ücretsiz kargo!", tryAgain: "Yarın dene", coupon3: "$3 Kupon", deal: "Özel fırsat!", tryAgain2: "Yarın dene", coupon5: "$5 Kupon", discount10: "%10 İndirim!" },
  fr: { coupon2: "Coupon $2", freeShip: "Livraison gratuite!", tryAgain: "Essaie demain", coupon3: "Coupon $3", deal: "Offre spéciale!", tryAgain2: "Essaie demain", coupon5: "Coupon $5", discount10: "10% de réduction!" },
};

let spinAngle = 0;

function getSpinLabel(key) {
  const labels = SPIN_LABELS[currentLang] || SPIN_LABELS.en;
  return labels[key] || key;
}

function canSpin() {
  const last = localStorage.getItem("ali_spin_date");
  const today = new Date().toISOString().split("T")[0];
  return last !== today;
}

function markSpinUsed() {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("ali_spin_date", today);
}

function drawWheel(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2, r = w / 2 - 2;
  const segments = SPIN_PRIZES.length;
  const arc = (2 * Math.PI) / segments;

  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < segments; i++) {
    const angle = i * arc;
    const prize = SPIN_PRIZES[i];

    // Draw sector
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, angle, angle + arc);
    ctx.closePath();
    ctx.fillStyle = prize.color;
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw text + icon
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = prize.color === "#DFE6E9" ? "#636E72" : "#fff";
    ctx.font = "bold 11px 'Assistant', sans-serif";
    const label = getSpinLabel(prize.labelKey);
    ctx.fillText(label, r - 14, 4);
    ctx.font = "16px sans-serif";
    ctx.fillText(prize.icon, r - 2 - ctx.measureText(label).width - 8, 5);
    ctx.restore();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#6C5CE7";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#6C5CE7";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎯", cx, cy);
}

function showSpinWheel() {
  const overlay = document.getElementById("spinModalOverlay");
  overlay.style.display = "flex";
  const result = document.getElementById("spinResult");
  result.style.display = "none";
  const btn = document.getElementById("spinBtn");
  btn.disabled = false;
  btn.textContent = (i18n[currentLang] || i18n.en).spinBtn;

  const canvas = document.getElementById("spinCanvas");
  // Reset rotation
  canvas.style.transition = "none";
  canvas.style.transform = "rotate(0deg)";
  spinAngle = 0;

  // Wait for reset, then draw
  requestAnimationFrame(() => {
    drawWheel(canvas);
  });
}

function closeSpinModal() {
  document.getElementById("spinModalOverlay").style.display = "none";
}

function spinWheel() {
  if (!canSpin()) {
    const result = document.getElementById("spinResult");
    result.style.display = "block";
    result.innerHTML = `
      <div class="spin-result-icon">⏰</div>
      <div class="spin-result-text">${(i18n[currentLang] || i18n.en).spinAlreadyUsed}</div>
    `;
    document.getElementById("spinBtn").disabled = true;
    return;
  }

  const btn = document.getElementById("spinBtn");
  btn.disabled = true;

  // Pick random prize index
  const prizeIndex = Math.floor(Math.random() * SPIN_PRIZES.length);
  const segments = SPIN_PRIZES.length;
  const arc = 360 / segments;

  // Calculate target angle: spin 5-8 full rotations + land on prize
  // Prize i starts at angle i*arc. Center of prize = i*arc + arc/2.
  // Canvas top = 270° (12 o'clock). Pointer is at top.
  // We need: finalAngle mod 360 = 360 - (prizeIndex * arc + arc/2) + 270
  // Simplify: we want the sector at 12 o'clock = 270°
  const targetSectorAngle = prizeIndex * arc + arc / 2;
  const offset = 270 - targetSectorAngle;
  const fullRotations = (5 + Math.floor(Math.random() * 4)) * 360;
  const finalAngle = fullRotations + offset + (Math.random() * (arc * 0.6) - arc * 0.3);

  const canvas = document.getElementById("spinCanvas");
  canvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";

  requestAnimationFrame(() => {
    canvas.style.transform = `rotate(${finalAngle}deg)`;
  });

  // After spin completes
  setTimeout(() => {
    markSpinUsed();
    showSpinResult(SPIN_PRIZES[prizeIndex]);
    addPoints(2, "spin");
  }, 4200);
}

function showSpinResult(prize) {
  const lang = i18n[currentLang] || i18n.en;
  const result = document.getElementById("spinResult");
  const label = getSpinLabel(prize.labelKey);
  const isTryAgain = prize.labelKey === "tryAgain" || prize.labelKey === "tryAgain2";

  let html = `<div class="spin-result-icon">${prize.icon}</div>`;

  if (isTryAgain) {
    html += `<div class="spin-result-text">${lang.spinTryAgain}</div>`;
    html += `<div class="spin-result-sub">😊</div>`;
  } else {
    html += `<div class="spin-result-text">${lang.spinCongrats}</div>`;
    html += `<div class="spin-result-sub">${label}</div>`;

    if (prize.action === "deals") {
      html += `<a href="#dailyDealsSection" class="spin-claim-btn" onclick="closeSpinModal(); document.getElementById('dailyDealsSection').scrollIntoView({behavior:'smooth'})">${lang.spinGetPrize}</a>`;
    } else if (prize.link) {
      html += `<a href="${prize.link}" target="_blank" rel="noopener" class="spin-claim-btn">${lang.spinGetPrize}</a>`;
    }
  }

  result.innerHTML = html;
  result.style.display = "block";
}

async function loadRelated(query) {
  try {
    const resp = await fetch(`${API_BASE}/related?q=${encodeURIComponent(query)}`);
    const data = await resp.json();
    if (data.related && data.related.length > 0) {
      renderRelatedSearches(data.related);
    } else { document.getElementById("relatedSearches").style.display = "none"; }
  } catch { document.getElementById("relatedSearches").style.display = "none"; }
}

// ============================================================
//  UI rendering
// ============================================================

function renderChips(suggestions) {
  document.getElementById("chipsContainer").innerHTML = suggestions.map(s =>
    `<button class="chip" onclick="chipClick('${s.replace(/'/g, "\\'")}')">${s}</button>`
  ).join("");
}

function renderCategories(categories) {
  const grid = document.getElementById("categoriesGrid");
  const lang = currentLang;
  grid.innerHTML = categories.map(cat => {
    const name = lang === "en" ? (cat.nameEn || cat.name) : cat.name;
    const keyword = cat.keywords?.[0] || cat.name;
    return `
      <div class="category-card" onclick="chipClick('${keyword.replace(/'/g, "\\'")}')">
        <div class="category-icon">${cat.icon || "\ud83c\udff7\ufe0f"}</div>
        <div class="category-name">${name}</div>
      </div>`;
  }).join("");
}

function renderTrending(products) {
  document.getElementById("trendingGrid").innerHTML = products.slice(0, 8).map(p => buildProductCard(p)).join("");
}

function renderRelatedSearches(related) {
  const container = document.getElementById("relatedSearches");
  document.getElementById("relatedChips").innerHTML = related.map(r =>
    `<button class="related-chip" onclick="chipClick('${r.replace(/'/g, "\\'")}')">${r}</button>`
  ).join("");
  container.style.display = "flex";
}

function addMessage(text, isUser = false) {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `message ${isUser ? "user-message" : "bot-message"}`;
  div.innerHTML = `
    <div class="message-avatar">${isUser ? "\ud83d\udc64" : "\ud83e\udd16"}</div>
    <div class="message-bubble">${text}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function showTyping() {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "message bot-message";
  div.id = "typingMsg";
  div.innerHTML = `<div class="message-avatar">\ud83e\udd16</div>
    <div class="message-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() { const el = document.getElementById("typingMsg"); if (el) el.remove(); }

function showSkeletons() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = Array(6).fill("").map(() => `
    <div class="skeleton-card"><div class="skeleton-img"></div><div class="skeleton-text"></div><div class="skeleton-text"></div></div>
  `).join("");
  document.getElementById("resultsSection").style.display = "block";
}

function buildProductCard(p) {
  const stars = "\u2605".repeat(Math.round(p.rating || 0)) + "\u2606".repeat(5 - Math.round(p.rating || 0));
  const discount = p.discount > 0 ? `<span class="product-discount">-${p.discount}%</span>` : "";
  const originalPrice = p.discount > 0 ? `<span class="product-original-price">${currentCurrencySymbol}${p.original_price}</span>` : "";
  const ordersLabel = i18n[currentLang].orders;
  const ctaLabel = i18n[currentLang].viewProduct;
  const isFav = isFavorite(p.id);
  const favClass = isFav ? "fav-btn active" : "fav-btn";
  const alertActive = hasAlert(p.id);

  const pJson = JSON.stringify({
    id: p.id, title: p.title, price: p.price, image: p.image,
    affiliate_url: p.affiliate_url, rating: p.rating, orders: p.orders
  }).replace(/'/g, "&#39;").replace(/"/g, "&quot;");

  return `
    <div class="product-card" id="product-${p.id}">
      <div class="product-img-wrap">
        <a href="${p.affiliate_url}" target="_blank" rel="noopener" onclick="onProductClick('${pJson}')">
          <img class="product-image" src="${p.image}" alt="${p.title}" loading="lazy" onerror="retryImg(this,'${(p.image_alt||'').replace(/'/g,"\\'")}')">
        </a>
        <button class="${favClass}" onclick="onFavClick(this, '${pJson}')" title="\u05d4\u05d5\u05e1\u05e3 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd">
          ${isFav ? "\u2764\ufe0f" : "\ud83e\udd0d"}
        </button>
        <button class="share-btn" onclick="shareProduct('${p.title.replace(/'/g,"\\'")}','${p.price}','${p.affiliate_url}')" title="\u05e9\u05ea\u05e3">
          \ud83d\udce4
        </button>
        <button class="alert-btn-card ${alertActive ? 'has-alert' : ''}" onclick="onAlertClick('${pJson}')" title="\u05d4\u05ea\u05e8\u05d0\u05ea \u05de\u05d7\u05d9\u05e8">
          ${alertActive ? "\ud83d\udd14" : "\ud83d\udd15"}
        </button>
      </div>
      <div class="product-info">
        <div class="product-title">${p.title}</div>
        <div class="product-price-row">
          <span class="product-price">${currentCurrencySymbol}${p.price}</span>
          ${originalPrice}
          ${discount}
        </div>
        <div class="product-meta">
          <span class="product-rating">${stars}</span>
          <span>${(p.orders || 0).toLocaleString()} ${ordersLabel}</span>
        </div>
        <button class="compare-btn" onclick="event.stopPropagation();onCompareClick('${pJson}')" title="${i18n[currentLang].findCheaper || 'Find Cheaper'}">
          💰 ${i18n[currentLang].findCheaper || 'Find Cheaper'}
        </button>
        <a href="${p.affiliate_url}" target="_blank" rel="noopener" class="product-cta" onclick="onProductClick('${pJson}')">${ctaLabel}</a>
      </div>
    </div>`;
}

function retryImg(img, altUrl) {
  if (img.dataset.retry === '2') {
    img.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22 fill=%22%23f0f0f0%22%3E%3Crect width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2216%22%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E';
    img.onerror = null;
  } else if (img.dataset.retry === '1') {
    img.dataset.retry = '2';
    img.src = API_BASE + '/img?url=' + encodeURIComponent(img.src);
  } else {
    img.dataset.retry = '1';
    if (altUrl) img.src = altUrl;
  }
}

function onFavClick(btn, productJson) {
  const p = JSON.parse(productJson.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
  const added = toggleFavorite(p);
  btn.innerHTML = added ? "\u2764\ufe0f" : "\ud83e\udd0d";
  btn.classList.toggle("active", added);
  btn.style.transform = "scale(1.3)";
  setTimeout(() => btn.style.transform = "", 200);
}

function onProductClick(productJson) {
  const p = JSON.parse(productJson.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
  trackView(p);
  addPoints(3, "click");
}

function onAlertClick(productJson) {
  const p = JSON.parse(productJson.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
  if (hasAlert(p.id)) {
    removeAlert(p.id);
    const btn = document.querySelector(`#product-${p.id} .alert-btn-card`);
    if (btn) { btn.classList.remove("has-alert"); btn.textContent = "\ud83d\udd15"; }
  } else {
    showAlertDialog(p);
  }
}

function renderProducts(products, append = false) {
  const grid = document.getElementById("productGrid");
  const html = products.map(p => buildProductCard(p)).join("");
  if (append) grid.innerHTML += html;
  else grid.innerHTML = html;

  // Check price alerts against displayed products
  checkPriceAlerts(products);
}

// ============================================================
//  User actions
// ============================================================

function chipClick(text) {
  document.getElementById("chatInput").value = text;
  sendMessage();
}

// ============================================================
//  Smart Chatbot — Intent Detection & Context
// ============================================================

let chatContext = { lastQuery: "", lastIntent: "", lastResultCount: 0 };

const GREETING_PATTERNS = {
  he: /^(היי|שלום|מה נשמע|בוקר טוב|ערב טוב|הי|אהלן|מה קורה)\s*[!?.]*$/i,
  en: /^(hi|hello|hey|good morning|good evening|what's up|howdy)\s*[!?.]*$/i,
  ar: /^(مرحبا|أهلا|سلام|صباح الخير)\s*[!?.]*$/i,
  ru: /^(привет|здравствуй|добрый день|доброе утро)\s*[!?.]*$/i,
  es: /^(hola|buenos d[ií]as|buenas tardes|hey)\s*[!?.]*$/i,
  pt: /^(oi|ol[aá]|bom dia|boa tarde|hey)\s*[!?.]*$/i,
  tr: /^(merhaba|selam|günaydın|hey)\s*[!?.]*$/i,
  fr: /^(salut|bonjour|bonsoir|coucou|hey)\s*[!?.]*$/i,
};

const HELP_PATTERNS = {
  he: /איך (זה )?עובד|מה אפשר|עזרה|מה את יודע/i,
  en: /how (does|do|to)|what can|help me|what is this/i,
  ar: /كيف يعمل|مساعدة|ماذا يمكن/i,
  ru: /как (это )?работает|помощь|что можно/i,
  es: /c[oó]mo funciona|ayuda|qu[eé] puedo/i,
  pt: /como funciona|ajuda|o que posso/i,
  tr: /nas[ıi]l [çc]al[ıi][şs][ıi]|yard[ıi]m|ne yapabilirim/i,
  fr: /comment [çc]a marche|aide|que puis-je/i,
};

const RECOMMEND_PATTERNS = {
  he: /מה כדאי|תמליצ|המלצ|מתנה ל|מה לקנות|יש רעיון|מה מומלץ|עוזר/i,
  en: /recommend|suggest|what should|gift for|idea for|help me choose|what to buy/i,
  ar: /توصي|اقترح|هدية|ماذا أشتري/i,
  ru: /рекомендуй|подскаж|что купить|подарок для|идея для/i,
  es: /recomiend|suger|regalo para|qu[eé] comprar|idea para/i,
  pt: /recomend|sugest|presente para|o que comprar|ideia para/i,
  tr: /öner|hediye|ne almalı|fikir/i,
  fr: /recommand|sugg[eé]r|cadeau pour|quoi acheter|id[eé]e pour/i,
};

const REFINE_PATTERNS = {
  he: /^(יותר זול|הכי זול|יותר יקר|הכי חדש|הכי מדורג|משלוח חינם|בצבע \S+|צבע \S+)$/i,
  en: /^(cheaper|cheapest|most expensive|newest|best rated|free shipping|in (red|blue|black|white|pink|green))$/i,
  ar: /^(أرخص|أغلى|أحدث|أفضل|شحن مجاني)$/i,
  ru: /^(дешевле|дороже|новее|лучшее|бесплатная доставка)$/i,
  es: /^(m[aá]s barato|m[aá]s caro|m[aá]s nuevo|mejor valorado|env[ií]o gratis)$/i,
  pt: /^(mais barato|mais caro|mais novo|melhor avaliado|frete gr[aá]tis)$/i,
  tr: /^(en ucuz|en pahal[ıi]|en yeni|en iyi|[üu]cretsiz kargo)$/i,
  fr: /^(moins cher|plus cher|plus r[eé]cent|mieux not[eé]|livraison gratuite)$/i,
};

const REFINE_MODIFIERS = {
  "יותר זול": { sort: "cheap" }, "הכי זול": { sort: "cheap" },
  "cheaper": { sort: "cheap" }, "cheapest": { sort: "cheap" },
  "יותר יקר": { sort: "expensive" }, "most expensive": { sort: "expensive" },
  "הכי חדש": { sort: "new" }, "newest": { sort: "new" },
  "הכי מדורג": { sort: "rating" }, "best rated": { sort: "rating" },
  "משלוח חינם": { append: "free shipping" }, "free shipping": { append: "free shipping" },
};

function detectIntent(text) {
  const t = text.trim();
  const lang = currentLang;

  // Greeting — check all languages (user might type in any language)
  for (const pat of Object.values(GREETING_PATTERNS)) {
    if (pat.test(t)) return "greeting";
  }

  // Help — check all languages
  for (const pat of Object.values(HELP_PATTERNS)) {
    if (pat.test(t)) return "help";
  }

  // Refine (only if there's a previous search)
  if (chatContext.lastQuery) {
    for (const pat of Object.values(REFINE_PATTERNS)) {
      if (pat.test(t)) return "refine";
    }
    // Also check color patterns
    if (/^בצבע /i.test(t) || /^in (red|blue|black|white|pink|green|yellow|purple)/i.test(t)) return "refine";
  }

  // Recommend — check all languages
  for (const pat of Object.values(RECOMMEND_PATTERNS)) {
    if (pat.test(t)) return "recommend";
  }

  return "search";
}

function getRefineQuery(text) {
  const t = text.trim().toLowerCase();
  const lastQ = chatContext.lastQuery;

  // Check modifier map
  for (const [key, mod] of Object.entries(REFINE_MODIFIERS)) {
    if (t === key.toLowerCase()) {
      if (mod.sort) {
        currentSort = mod.sort;
        document.getElementById("sortSelect").value = mod.sort;
        return lastQ;
      }
      if (mod.append) {
        return lastQ + " " + mod.append;
      }
    }
  }

  // Color patterns
  const colorMatch = t.match(/^(?:בצבע |צבע |in )(\S+)/i);
  if (colorMatch) {
    const colorMap = {
      "אדום": "red", "שחור": "black", "לבן": "white", "כחול": "blue",
      "ורוד": "pink", "ירוק": "green", "צהוב": "yellow", "סגול": "purple",
      "חום": "brown", "אפור": "grey", "כתום": "orange",
    };
    const color = colorMap[colorMatch[1]] || colorMatch[1];
    return lastQ + " " + color;
  }

  return lastQ + " " + t;
}

async function handleGreeting() {
  const lang = i18n[currentLang] || i18n.en;
  const greetings = [
    lang.welcome,
    lang.welcome,
  ];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  addMessage(greeting);
  // Show suggestion chips
  loadSuggestions();
  document.getElementById("chipsContainer").style.display = "flex";
}

async function handleHelp() {
  const lang = i18n[currentLang] || i18n.en;
  addMessage(lang.chatHelp);
  loadSuggestions();
  document.getElementById("chipsContainer").style.display = "flex";
}

async function handleRecommend(query) {
  const lang = i18n[currentLang] || i18n.en;
  addMessage(lang.chatRecommending);
  showTyping();

  try {
    const resp = await fetch(`${API_BASE}/chat?q=${encodeURIComponent(query)}&lang=${currentLang}`);
    const data = await resp.json();
    hideTyping();

    if (data.reply) {
      addMessage(data.reply);
    }

    if (data.queries && data.queries.length > 0) {
      // Show AI-suggested searches as chips
      document.getElementById("chipsContainer").style.display = "flex";
      renderChips(data.queries);
    }
  } catch {
    hideTyping();
    addMessage(lang.chatHelp);
    loadSuggestions();
    document.getElementById("chipsContainer").style.display = "flex";
  }
}

function renderQuickReplies() {
  const lang = i18n[currentLang] || i18n.en;
  const container = document.getElementById("quickReplies");
  if (!container) return;

  container.innerHTML = `
    <button class="quick-reply-btn" onclick="chipClick('${lang.quickCheapest.replace(/['"]/g,"")}')">${lang.quickCheapest}</button>
    <button class="quick-reply-btn" onclick="chipClick('${lang.quickRated.replace(/['"]/g,"")}')">${lang.quickRated}</button>
    <button class="quick-reply-btn" onclick="chipClick('${lang.quickNewest.replace(/['"]/g,"")}')">${lang.quickNewest}</button>
    <button class="quick-reply-btn" onclick="quickRecommend()">${lang.quickSimilar}</button>
  `;
  container.style.display = "flex";
}

function quickRecommend() {
  const lang = i18n[currentLang] || i18n.en;
  const query = currentLang === "he"
    ? `מה כדאי לקנות דומה ל-${chatContext.lastQuery}?`
    : `recommend something similar to ${chatContext.lastQuery}`;
  document.getElementById("chatInput").value = query;
  sendMessage();
}

function hideQuickReplies() {
  const container = document.getElementById("quickReplies");
  if (container) container.style.display = "none";
}

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const query = input.value.trim();
  if (!query || isLoading) return;

  input.value = "";
  // Clear old chat messages on each new search
  const chatEl = document.getElementById("chatMessages");
  if (chatEl) chatEl.innerHTML = "";
  addMessage(query, true);
  hideQuickReplies();

  // Detect intent
  const intent = detectIntent(query);

  // Handle non-search intents without loading state
  if (intent === "greeting") {
    document.getElementById("chipsContainer").style.display = "none";
    await handleGreeting();
    chatContext.lastIntent = "greeting";
    return;
  }

  if (intent === "help") {
    document.getElementById("chipsContainer").style.display = "none";
    await handleHelp();
    chatContext.lastIntent = "help";
    return;
  }

  if (intent === "recommend") {
    isLoading = true;
    document.getElementById("chipsContainer").style.display = "none";
    document.getElementById("historyContainer").style.display = "none";
    await handleRecommend(query);
    chatContext.lastIntent = "recommend";
    isLoading = false;
    return;
  }

  // For refine, modify the search query
  let searchQuery = query;
  if (intent === "refine" && chatContext.lastQuery) {
    searchQuery = getRefineQuery(query);
  }

  isLoading = true;
  currentQuery = searchQuery;
  currentPage = 1;
  if (intent !== "refine") {
    currentSort = "popular";
    document.getElementById("sortSelect").value = "popular";
  }

  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";

  addToHistory(query);
  document.getElementById("chipsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";
  document.getElementById("trendingSection").style.display = "none";
  document.getElementById("dailyDealsSection").style.display = "none";
  document.getElementById("recentlyViewed").style.display = "none";

  showTyping();
  showSkeletons();

  try {
    const data = await doSearch(searchQuery, 1);
    hideTyping();

    if (data.products && data.products.length > 0) {
      const msg = i18n[currentLang].foundResults.replace("{count}", data.total || data.products.length);
      addMessage(msg);
      renderProducts(data.products);
      document.getElementById("resultsTitle").innerHTML =
        `${currentQuery} (${data.total || data.products.length})
        <button class="share-search-btn" onclick="shareSearch('${currentQuery.replace(/'/g,"\\'")}')" title="\u05e9\u05ea\u05e3 \u05d7\u05d9\u05e4\u05d5\u05e9">\ud83d\udce4 \u05e9\u05ea\u05e3</button>`;
      document.getElementById("resultsSection").style.display = "block";
      document.getElementById("loadMore").style.display = (data.total || 0) > currentPage * 50 ? "block" : "none";
      // Auto-scroll to results
      setTimeout(() => {
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      loadRelated(query);

      // Update context and show quick replies
      chatContext.lastQuery = searchQuery;
      chatContext.lastIntent = intent;
      chatContext.lastResultCount = data.total || data.products.length;
      renderQuickReplies();
      addPoints(2, "search");
    } else {
      const msg = data.message || i18n[currentLang].noResults;
      addMessage(msg);
      document.getElementById("productGrid").innerHTML = `
        <div class="no-results" style="grid-column: 1/-1">
          <div class="no-results-icon">\ud83d\udd0d</div>
          <h3>${i18n[currentLang].noResults}</h3>
        </div>`;
      document.getElementById("relatedSearches").style.display = "none";
      if (data.suggestions && data.suggestions.length > 0) {
        document.getElementById("chipsContainer").style.display = "flex";
        renderChips(data.suggestions);
      }
    }
  } catch {
    hideTyping();
    addMessage("\u274c " + (currentLang === "he" ? "\u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05d7\u05d9\u05e4\u05d5\u05e9. \u05e0\u05e1\u05d9 \u05e9\u05d5\u05d1." : "Search error. Please try again."));
    document.getElementById("productGrid").innerHTML = "";
  }
  isLoading = false;
}

// ============================================================
//  Filters
// ============================================================

async function applySort() {
  if (!currentQuery) return;
  currentSort = document.getElementById("sortSelect").value;
  currentPage = 1;
  const sortWord = currentSort === "popular" ? "" : currentSort;
  const q = sortWord ? `${currentQuery} ${sortWord}` : currentQuery;

  showSkeletons();
  try {
    const data = await doSearch(q, 1);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products);
      document.getElementById("resultsTitle").innerHTML =
        `${currentQuery} (${data.total || data.products.length})
        <button class="share-search-btn" onclick="shareSearch('${currentQuery.replace(/'/g,"\\'")}')" title="\u05e9\u05ea\u05e3 \u05d7\u05d9\u05e4\u05d5\u05e9">\ud83d\udce4 \u05e9\u05ea\u05e3</button>`;
      document.getElementById("loadMore").style.display = (data.total || 0) > currentPage * 50 ? "block" : "none";
    }
  } catch {}
}

async function applyPriceFilter() {
  if (!currentQuery) return;
  const min = document.getElementById("priceMin").value;
  const max = document.getElementById("priceMax").value;
  currentPage = 1;
  let q = currentQuery;
  if (min && max) q += ` ${min}-${max}`;
  else if (max) q += ` \u05e2\u05d3 ${max}`;
  else if (min) q += ` ${min}-99999`;

  showSkeletons();
  try {
    const data = await doSearch(q, 1);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products);
      document.getElementById("loadMore").style.display = (data.total || 0) > currentPage * 50 ? "block" : "none";
    } else {
      document.getElementById("productGrid").innerHTML = `
        <div class="no-results" style="grid-column:1/-1">
          <div class="no-results-icon">\ud83d\udd0d</div>
          <h3>${i18n[currentLang].noResults}</h3>
        </div>`;
    }
  } catch {}
}

async function loadMore() {
  if (isLoading || !currentQuery) return;
  isLoading = true;
  currentPage++;
  try {
    const data = await doSearch(currentQuery, currentPage);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products, true);
      document.getElementById("loadMore").style.display = (data.total || 0) > currentPage * 50 ? "block" : "none";
    } else { document.getElementById("loadMore").style.display = "none"; }
  } catch { currentPage--; }
  isLoading = false;
}

function clearResults() {
  document.getElementById("resultsSection").style.display = "none";
  document.getElementById("productGrid").innerHTML = "";
  document.getElementById("chipsContainer").style.display = "flex";
  document.getElementById("relatedSearches").style.display = "none";
  document.getElementById("trendingSection").style.display = "block";
  currentQuery = "";
  currentPage = 1;
  loadSuggestions();
  renderHistory();
  loadTrending();
  loadRecentlyViewed();
}

// ============================================================
//  Init
// ============================================================

// Theme first (prevents flash)
initTheme();

// Autocomplete
initAutocomplete();

// URL param support
const urlParams = new URLSearchParams(window.location.search);
const urlQuery = urlParams.get("q");
if (urlQuery) {
  document.getElementById("chatInput").value = urlQuery;
  setTimeout(() => sendMessage(), 500);
}

// Init language from path > URL param > localStorage > browser detect
const pathLangMatch = window.location.pathname.match(/^\/(en|ar|ru|es|pt|tr|fr)\//);
const urlLangParam = new URLSearchParams(window.location.search).get("lang");
if (pathLangMatch && i18n[pathLangMatch[1]]) {
  currentLang = pathLangMatch[1];
} else if (urlLangParam && i18n[urlLangParam]) {
  currentLang = urlLangParam;
} else {
  currentLang = detectLanguage();
}
setLang(currentLang, true);
updateFavBadge();
updateAlertBadge();
renderHistory();
loadRecentlyViewed();

// Close language dropdown on outside click
document.addEventListener("click", (e) => {
  const wrap = document.getElementById("langDropdownWrap");
  if (wrap && !wrap.contains(e.target)) {
    const dd = document.getElementById("langDropdown");
    if (dd) dd.classList.remove("open");
  }
});

// ─── Image Search ──────────────────────────────────────────
function showImageOptions() {
  const dd = document.getElementById("imageOptions");
  if (dd) dd.style.display = dd.style.display === "flex" ? "none" : "flex";
}

function hideImageOptions() {
  const dd = document.getElementById("imageOptions");
  if (dd) dd.style.display = "none";
}

function handleImageFile(input) {
  hideImageOptions();
  const file = input.files?.[0];
  if (!file) return;
  resizeAndSearch(file);
  input.value = ""; // Reset for re-upload
}

function resizeAndSearch(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Resize to max 512px
      const maxSize = 512;
      let w = img.width, h = img.height;
      if (w > maxSize || h > maxSize) {
        if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; }
        else { w = Math.round(w * maxSize / h); h = maxSize; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      const base64 = canvas.toDataURL("image/jpeg", 0.8);
      searchByImage(base64);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

async function searchByImage(base64) {
  const lang = i18n[currentLang] || i18n.en;

  // Show searching state
  addMessage("📷", true);
  document.getElementById("chipsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";
  document.getElementById("trendingSection").style.display = "none";
  document.getElementById("dailyDealsSection").style.display = "none";
  showTyping();
  showSkeletons();

  try {
    const resp = await fetch(`${API_BASE}/image-search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: base64,
        lang: currentLang,
        currency: currentCurrency,
        country: currentCountry,
      }),
    });
    const data = await resp.json();
    hideTyping();

    if (data.error || !data.products || data.products.length === 0) {
      addMessage(lang.imgError);
      document.getElementById("productGrid").innerHTML = "";
      return;
    }

    // Show what was identified
    const desc = data.description || data.query_used || "";
    addMessage(lang.imgResult.replace("{desc}", desc));

    // Render products
    currentQuery = data.query_used || desc;
    renderProducts(data.products);
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("loadMore").style.display = "none";

    // Log image search
    logSearch("[IMAGE] " + desc, currentQuery, data.products?.length || 0);

    // Update context
    chatContext.lastQuery = currentQuery;
    chatContext.lastIntent = "search";
    chatContext.lastResultCount = data.total || data.products.length;
    renderQuickReplies();
    addPoints(2, "search");
  } catch {
    hideTyping();
    addMessage(lang.imgError);
    document.getElementById("productGrid").innerHTML = "";
  }
}

// Close image options on outside click
document.addEventListener("click", (e) => {
  const wrap = document.getElementById("imageSearchBtn");
  const dd = document.getElementById("imageOptions");
  if (wrap && dd && !wrap.contains(e.target) && !dd.contains(e.target)) {
    dd.style.display = "none";
  }
});

// ─── Points Program ────────────────────────────────────────
const POINTS_KEY = "ali_points";
const POINTS_LIMITS = { searches: 10, clicks: 20, shares: 5 };
const POINTS_TIERS = [
  { cost: 50, key: "pointsCoupon5", icon: "🏷️", discount: "5%" },
  { cost: 100, key: "pointsCoupon10", icon: "🎫", discount: "10%" },
  { cost: 200, key: "pointsFreeShip", icon: "🚚", discount: "free_ship" },
  { cost: 500, key: "pointsCoupon5off", icon: "💰", discount: "$5" },
];

function getPointsData() {
  try { return JSON.parse(localStorage.getItem(POINTS_KEY) || "null") || { total: 0, today: { date: "", searches: 0, clicks: 0, shares: 0 }, history: [] }; }
  catch { return { total: 0, today: { date: "", searches: 0, clicks: 0, shares: 0 }, history: [] }; }
}

function savePointsData(data) {
  // Keep history to last 50 entries
  if (data.history.length > 50) data.history = data.history.slice(-50);
  localStorage.setItem(POINTS_KEY, JSON.stringify(data));
  updatePointsBadge();
}

function getTodayStr() { return new Date().toISOString().slice(0, 10); }

function resetTodayIfNeeded(data) {
  if (data.today.date !== getTodayStr()) {
    data.today = { date: getTodayStr(), searches: 0, clicks: 0, shares: 0 };
  }
  return data;
}

function addPoints(amount, reason) {
  let data = getPointsData();
  data = resetTodayIfNeeded(data);
  // Check daily limits
  if (reason === "search" && data.today.searches >= POINTS_LIMITS.searches) return;
  if (reason === "click" && data.today.clicks >= POINTS_LIMITS.clicks) return;
  if (reason === "share" && data.today.shares >= POINTS_LIMITS.shares) return;
  // Update counters
  if (reason === "search") data.today.searches++;
  if (reason === "click") data.today.clicks++;
  if (reason === "share") data.today.shares++;
  data.total += amount;
  data.history.push({ pts: amount, reason, date: getTodayStr(), ts: Date.now() });
  savePointsData(data);
  showPointsToast(amount, reason);
  gtag?.("event", "points_earned", { amount, reason });
}

function checkDailyBonus() {
  let data = getPointsData();
  const today = getTodayStr();
  if (data.today.date === today && data.history.some(h => h.reason === "daily" && h.date === today)) return;
  data = resetTodayIfNeeded(data);
  data.total += 5;
  data.history.push({ pts: 5, reason: "daily", date: today, ts: Date.now() });
  savePointsData(data);
  setTimeout(() => showPointsToast(5, "daily"), 1500);
}

function updatePointsBadge() {
  const badge = document.getElementById("pointsBadge");
  if (badge) badge.textContent = getPointsData().total;
}

function showPointsToast(pts, reason) {
  const lang = i18n[currentLang] || i18n.en;
  const reasonMap = { daily: lang.pointsDaily, search: lang.pointsSearch, click: lang.pointsClick, share: lang.pointsShare, fav: lang.pointsFav, spin: lang.pointsSpin };
  const toast = document.getElementById("pointsToast");
  if (!toast) return;
  toast.innerHTML = `<span class="points-toast-icon">⭐</span> <span>+${pts} ${lang.pointsBalance}</span><br><small>${reasonMap[reason] || reason}</small>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function showPointsModal() {
  const data = getPointsData();
  const lang = i18n[currentLang] || i18n.en;
  const modal = document.getElementById("pointsModal");
  if (!modal) return;

  // Build redeem grid
  let tiersHtml = POINTS_TIERS.map(t => {
    const canRedeem = data.total >= t.cost;
    return `<button class="points-tier-card ${canRedeem ? '' : 'disabled'}" onclick="${canRedeem ? `redeemPoints(${t.cost})` : ''}">
      <span class="tier-icon">${t.icon}</span>
      <span class="tier-cost">${t.cost} ⭐</span>
      <span class="tier-label">${lang[t.key]}</span>
    </button>`;
  }).join("");

  // Build history
  let histHtml = data.history.slice().reverse().slice(0, 15).map(h => {
    const reasonMap = { daily: lang.pointsDaily, search: lang.pointsSearch, click: lang.pointsClick, share: lang.pointsShare, fav: lang.pointsFav, spin: lang.pointsSpin, redeem: lang.pointsRedeem };
    const isRedeem = h.pts < 0;
    const dateLabel = h.date === getTodayStr() ? lang.pointsToday : lang.pointsYesterday || h.date;
    return `<div class="points-history-item">
      <span class="ph-pts ${isRedeem ? 'negative' : 'positive'}">${isRedeem ? '' : '+'}${h.pts}</span>
      <span class="ph-reason">${reasonMap[h.reason] || h.reason}</span>
      <span class="ph-date">${dateLabel}</span>
    </div>`;
  }).join("") || `<p style="text-align:center;color:#999">---</p>`;

  document.getElementById("pointsModalBody").innerHTML = `
    <div class="points-balance-display">
      <span class="points-balance-num">${data.total}</span>
      <span class="points-balance-label">⭐ ${lang.pointsBalance}</span>
    </div>
    <h3 class="points-section-title">${lang.pointsRedeem}</h3>
    <div class="points-tiers-grid">${tiersHtml}</div>
    <h3 class="points-section-title">${lang.pointsHistory}</h3>
    <div class="points-history-list">${histHtml}</div>`;
  modal.style.display = "flex";
}

function closePointsModal() {
  const modal = document.getElementById("pointsModal");
  if (modal) modal.style.display = "none";
}

function redeemPoints(cost) {
  let data = getPointsData();
  const lang = i18n[currentLang] || i18n.en;
  if (data.total < cost) { alert(lang.pointsNotEnough); return; }
  data.total -= cost;
  data.history.push({ pts: -cost, reason: "redeem", date: getTodayStr(), ts: Date.now() });
  savePointsData(data);
  // Show redeemed message
  const tier = POINTS_TIERS.find(t => t.cost === cost);
  const msg = `${lang.pointsRedeemed}\n${tier ? tier.icon + " " + lang[tier.key] : ""}`;
  alert(msg);
  showPointsModal(); // Refresh modal
}

// Init points on page load
updatePointsBadge();
checkDailyBonus();

// ─── PWA Install Prompt (moved to bottom with AI Chat) ──────

// ─── Service Worker Registration ────────────────────────────
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

// ─── Newsletter ────────────────────────────
function subscribeNewsletter(e, isPopup) {
  e.preventDefault();
  const emailEl = isPopup ? document.getElementById("nlPopupEmail") : document.getElementById("nlEmail");
  const email = emailEl ? emailEl.value.trim() : "";
  if (!email) return;

  // Save subscriber to localStorage
  const subs = JSON.parse(localStorage.getItem("nl_subscribers") || "[]");
  if (!subs.includes(email)) subs.push(email);
  localStorage.setItem("nl_subscribers", JSON.stringify(subs));
  localStorage.setItem("nl_subscribed", "true");
  localStorage.setItem("nl_email", email);

  // Send to Google Sheets (Apps Script web app)
  const sheetUrl = "https://script.google.com/macros/s/AKfycbyKsWkOorDYMOqGQiUDCxHUxGZMj1VLBJhxy3LbQRqOk8_tVVVlTJ0yZpU_9IzCXUMQ/exec";
  fetch(sheetUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, lang: currentLang, date: new Date().toISOString() })
  }).catch(() => {});

  // Track with GA
  gtag?.("event", "newsletter_subscribe", { method: isPopup ? "popup" : "section" });

  // Show success
  if (isPopup) {
    closeNlPopup();
  }
  const form = document.getElementById("newsletterForm");
  const success = document.getElementById("nlSuccess");
  if (form) form.style.display = "none";
  if (success) success.style.display = "flex";

  // Award points
  if (typeof addPoints === "function") addPoints(15, "newsletter");
}

function closeNlPopup() {
  const popup = document.getElementById("nlPopup");
  if (popup) popup.style.display = "none";
  localStorage.setItem("nl_popup_dismissed", "true");
}

// Show newsletter popup after 15s for non-subscribers
setTimeout(() => {
  if (localStorage.getItem("nl_subscribed") || localStorage.getItem("nl_popup_dismissed")) return;
  const popup = document.getElementById("nlPopup");
  if (popup) popup.style.display = "flex";
}, 15000);

// ─── Analytics Tracking ──────────────────────────────────────
(function trackPageview() {
  // Don't track admin pages or localhost
  if (location.pathname.includes("admin")) return;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
  // Avoid double-counting within same session (5 min window)
  const lastTrack = sessionStorage.getItem("ali_last_track");
  const now = Date.now();
  if (lastTrack && (now - parseInt(lastTrack)) < 300000) return;
  sessionStorage.setItem("ali_last_track", String(now));
  // Detect referrer source
  const urlParams = new URLSearchParams(location.search);
  const ref = urlParams.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "");
  // Send pageview (fire-and-forget)
  fetch(`${API_BASE}/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lang: currentLang,
      page: location.pathname,
      ref: ref
    })
  }).catch(() => {}); // silently fail
})();

// ============================================================
//  AI Chat (Claude) Integration
// ============================================================
let aiChatOpen = false;
let aiChatHistory = [];
let aiChatLoading = false;
let aiChatFirstOpen = true;

function toggleAiChat() {
  aiChatOpen = !aiChatOpen;
  const panel = document.getElementById('aiChatPanel');
  const fab = document.getElementById('chatFab');
  panel.classList.toggle('open', aiChatOpen);
  fab.classList.toggle('hidden', aiChatOpen);
  if (aiChatOpen && aiChatFirstOpen) {
    aiChatFirstOpen = false;
    addAiChatMsg('היי! 👋 אני העוזר/ת החכם/ה של עלי תמצא לי.\nספרו לי מה אתם מחפשים ואני אמצא לכם את הדילים הכי טובים! 🛍️', false);
    renderAiChatChips([
      { label: '👗 שמלת ערב', query: 'אני מחפשת שמלת ערב יפה' },
      { label: '⌚ שעון יד', query: 'שעון יד לגבר' },
      { label: '💎 תכשיטים', query: 'תכשיטים במחיר טוב' },
      { label: '🏠 לבית', query: 'מוצרים שימושיים לבית' },
    ]);
  }
  if (aiChatOpen) {
    setTimeout(() => document.getElementById('aiChatInput').focus(), 200);
  }
}

function addAiChatMsg(text, isUser) {
  const container = document.getElementById('aiChatMessages');
  const div = document.createElement('div');
  div.className = 'ai-chat-msg' + (isUser ? ' user' : '');
  div.innerHTML = `
    <div class="ai-chat-msg-avatar">${isUser ? '👤' : '🤖'}</div>
    <div class="ai-chat-msg-bubble">${text.replace(/\n/g, '<br>')}</div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showAiTyping() {
  const container = document.getElementById('aiChatMessages');
  const div = document.createElement('div');
  div.className = 'ai-chat-msg';
  div.id = 'aiTyping';
  div.innerHTML = `
    <div class="ai-chat-msg-avatar">🤖</div>
    <div class="ai-chat-typing"><span></span><span></span><span></span></div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function hideAiTyping() {
  const el = document.getElementById('aiTyping');
  if (el) el.remove();
}

function renderAiChatChips(chips) {
  const container = document.getElementById('aiChatChips');
  container.innerHTML = chips.map(c =>
    `<button class="ai-chat-chip" onclick="aiChipClick('${c.query.replace(/'/g, "\\'")}')">${c.label}</button>`
  ).join('');
}

function aiChipClick(query) {
  document.getElementById('aiChatInput').value = query;
  document.getElementById('aiChatChips').innerHTML = '';
  sendAiChat();
}

function renderAiChatProducts(products, label) {
  const container = document.getElementById('aiChatMessages');
  if (label) {
    const labelDiv = document.createElement('div');
    labelDiv.className = 'ai-chat-msg';
    labelDiv.innerHTML = `<div class="ai-chat-msg-avatar">🤖</div><div class="ai-chat-msg-bubble">🔍 ${label}</div>`;
    container.appendChild(labelDiv);
  }
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'ai-chat-products-scroll';
  products.forEach(p => {
    const price = p.sale_price || p.price || p.target_sale_price || '';
    const img = p.image || p.product_main_image_url || '';
    const title = p.title || p.product_title || '';
    const url = p.affiliate_url || p.affiliate_link || p.product_detail_url || '#';
    scrollDiv.innerHTML += `
      <a href="${url}" target="_blank" rel="noopener" class="ai-chat-product-mini" onclick="gtag('event','ai_chat_product_click',{event_label:'${title.substring(0,30)}'})">
        <img src="${img}" alt="${title}" loading="lazy" onerror="this.src='icons/icon-192.png'">
        <div class="ai-chat-product-mini-info">
          <div class="ai-chat-product-mini-title">${title}</div>
          <div class="ai-chat-product-mini-price">${currentCurrencySymbol}${price}</div>
        </div>
      </a>
    `;
  });
  container.appendChild(scrollDiv);
  container.scrollTop = container.scrollHeight;
}

async function sendAiChat() {
  const input = document.getElementById('aiChatInput');
  const query = input.value.trim();
  if (!query || aiChatLoading) return;

  input.value = '';
  document.getElementById('aiChatChips').innerHTML = '';
  addAiChatMsg(query, true);
  aiChatHistory.push({ role: 'user', content: query });
  aiChatLoading = true;
  showAiTyping();

  gtag('event', 'ai_chat_message', { event_category: 'ai_chat', event_label: query });

  try {
    const resp = await fetch(`${API_BASE}/pets/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: aiChatHistory,
        context: 'general',
        lang: currentLang,
        currency: currentCurrency
      }),
    });

    hideAiTyping();

    if (!resp.ok) throw new Error('Chat API error');
    const data = await resp.json();

    if (data.reply) {
      addAiChatMsg(data.reply, false);
      aiChatHistory.push({ role: 'assistant', content: data.reply });
    }

    // Server-side search results
    if (data.searchResults && data.searchResults.length > 0) {
      for (const sr of data.searchResults) {
        if (sr.products && sr.products.length > 0) {
          renderAiChatProducts(sr.products, sr.label);
        }
      }
    } else if (data.searches && data.searches.length > 0) {
      // Fallback: client-side search
      for (const s of data.searches) {
        try {
          const searchData = await doSearch(s.query, 1);
          if (searchData.products && searchData.products.length > 0) {
            renderAiChatProducts(searchData.products.slice(0, 6), s.label);
          }
        } catch (e) {
          console.error('Chat search error:', e);
        }
      }
    }
  } catch (err) {
    hideAiTyping();
    addAiChatMsg('😔 סליחה, משהו השתבש. נסו שוב עוד רגע!', false);
  }

  aiChatLoading = false;
}

// Enter key to send AI chat
document.addEventListener('DOMContentLoaded', () => {
  const aiInput = document.getElementById('aiChatInput');
  if (aiInput) {
    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendAiChat();
    });
  }
});

// ============================================================
//  Improved PWA Install Banner
// ============================================================
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
});

function shouldShowInstallBanner() {
  if (localStorage.getItem('pwa-install-dismissed')) return false;
  if (window.matchMedia('(display-mode: standalone)').matches) return false;
  if (window.navigator.standalone === true) return false;
  if (window.innerWidth > 768) return false;
  return true;
}

if (shouldShowInstallBanner()) {
  setTimeout(() => {
    const banner = document.getElementById('installBanner');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      const btn = document.getElementById('installBtn');
      if (btn) btn.textContent = 'איך מתקינים?';
    }
    if (banner) banner.style.display = 'block';
  }, 3000);
}

function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') dismissInstall(true);
      deferredInstallPrompt = null;
    });
  } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    alert('כדי להתקין את האפליקציה:\n\n1. לחצו על כפתור השיתוף (Share) בתחתית המסך\n2. גללו למטה ובחרו "Add to Home Screen"\n3. לחצו "Add"\n\nזהו! האפליקציה תופיע במסך הבית 📲');
  } else {
    alert('כדי להתקין:\n\n1. פתחו את התפריט של הדפדפן (⋮)\n2. בחרו "התקן אפליקציה" או "הוסף למסך הבית"\n3. אשרו את ההתקנה\n\nזהו! 📲');
  }
}

function dismissInstall(permanent) {
  const banner = document.getElementById('installBanner');
  if (banner) {
    banner.classList.add('hiding');
    if (permanent !== false) localStorage.setItem('pwa-install-dismissed', '1');
    setTimeout(() => { banner.style.display = 'none'; banner.classList.remove('hiding'); }, 300);
  }
}

// ============================================================
//  Price Comparison (Find Cheaper) Modal
// ============================================================

function onCompareClick(pJson) {
  try {
    const product = JSON.parse(pJson.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
    showCompareModal(product);
  } catch (e) {
    console.error("Compare parse error:", e);
  }
}

function showCompareModal(product) {
  const t = i18n[currentLang] || i18n.en;
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'compare-overlay';
  overlay.onclick = closeCompareModal;

  // Create modal
  const modal = document.createElement('div');
  modal.className = 'compare-modal';
  modal.id = 'compareModal';
  modal.onclick = (e) => e.stopPropagation();

  const currSymbol = currentCurrencySymbol || '₪';

  modal.innerHTML = `
    <button class="compare-close" onclick="closeCompareModal()">✕</button>
    <div class="compare-original-section">
      <div class="compare-section-label">${t.originalProduct || 'Original Product'}</div>
      <div class="compare-original-card">
        <img src="${product.image}" alt="${product.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22 fill=%22%23f0f0f0%22%3E%3Crect width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2216%22%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E'">
        <div class="compare-original-info">
          <div class="compare-original-title">${product.title}</div>
          <div class="compare-original-price">${currSymbol}${product.price}</div>
        </div>
      </div>
    </div>
    <div class="compare-divider">
      <span>${t.cheaperAlts || 'Cheaper Alternatives 💰'}</span>
    </div>
    <div class="compare-results" id="compareResults">
      <div class="compare-loading">
        <div class="compare-spinner"></div>
        <p>${t.comparing || 'Finding cheaper alternatives...'}</p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Fetch alternatives
  const context = typeof getCompareContext === 'function' ? getCompareContext() : '';
  const params = new URLSearchParams({
    title: product.title,
    price: product.price,
    id: product.id,
    currency: currentCurrency || 'ILS',
    country: currentCountry || 'IL',
    context: context,
    lang: currentLang || 'he',
  });

  const controller = new AbortController();
  setTimeout(() => controller.abort(), 15000);

  fetch(`${API_BASE}/find-cheaper?${params}`, { signal: controller.signal })
    .then(res => res.json())
    .then(data => renderCompareResults(data, product))
    .catch(err => {
      const resultsDiv = document.getElementById('compareResults');
      if (resultsDiv) {
        resultsDiv.innerHTML = `<div class="compare-error">
          <p>❌ ${err.name === 'AbortError' ? 'Timeout - try again' : 'Error loading alternatives'}</p>
          <button onclick="closeCompareModal();onCompareClick('${JSON.stringify(product).replace(/'/g, "&#39;").replace(/"/g, "&quot;")}')">🔄 Retry</button>
        </div>`;
      }
    });
}

function renderCompareResults(data, originalProduct) {
  const resultsDiv = document.getElementById('compareResults');
  if (!resultsDiv) return;

  const t = i18n[currentLang] || i18n.en;
  const currSymbol = currentCurrencySymbol || '₪';

  if (!data.alternatives || data.alternatives.length === 0) {
    resultsDiv.innerHTML = `<div class="compare-empty">
      <p>🔍 ${t.noAlternatives || 'No cheaper alternatives found'}</p>
    </div>`;
    return;
  }

  let html = '';

  data.alternatives.forEach((alt, i) => {
    const savingsBadge = alt.savings_percent > 0
      ? `<span class="compare-savings-badge">-${alt.savings_percent}% | ${t.savingsLabel || 'Savings'} ${currSymbol}${alt.savings}</span>`
      : '';

    const aiNote = alt.ai_note
      ? `<div class="compare-ai-note">🤖 ${alt.ai_note}</div>`
      : '';

    const stars = '★'.repeat(Math.round(alt.rating || 0)) + '☆'.repeat(5 - Math.round(alt.rating || 0));

    html += `
      <div class="compare-alt-card">
        <div class="compare-alt-rank">#${i + 1}</div>
        <img src="${alt.image}" alt="${alt.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22 fill=%22%23f0f0f0%22%3E%3Crect width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2216%22%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E'">
        <div class="compare-alt-info">
          <div class="compare-alt-title">${alt.title}</div>
          <div class="compare-alt-price-row">
            <span class="compare-alt-price">${currSymbol}${alt.price}</span>
            ${savingsBadge}
          </div>
          <div class="compare-alt-meta">
            <span class="compare-alt-rating">${stars}</span>
            <span>${(alt.orders || 0).toLocaleString()} ${t.orders || 'orders'}</span>
          </div>
          ${aiNote}
          <a href="${alt.affiliate_url}" target="_blank" rel="noopener" class="compare-alt-cta">${t.viewDeal || 'View & Buy →'}</a>
        </div>
      </div>
    `;
  });

  if (data.ai_summary) {
    html += `<div class="compare-summary">
      <span class="compare-summary-label">🤖 ${t.aiSummary || 'AI Summary'}:</span>
      ${data.ai_summary}
    </div>`;
  }

  resultsDiv.innerHTML = html;
}

function closeCompareModal() {
  const overlay = document.querySelector('.compare-overlay');
  const modal = document.getElementById('compareModal');
  if (overlay) overlay.remove();
  if (modal) modal.remove();
  document.body.style.overflow = '';
}
