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
  }
};

// ============================================================
//  i18n application
// ============================================================

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("ali_lang", lang);

  document.documentElement.lang = lang === "he" ? "he" : "en";
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

  document.getElementById("langHe").classList.toggle("active", lang === "he");
  document.getElementById("langEn").classList.toggle("active", lang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

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
  loadRecentlyViewed();
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
  else { favs.unshift(product); if (favs.length > 50) favs = favs.slice(0, 50); }
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
          <div class="fav-price">\u20aa${p.price}</div>
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
          <div class="rv-card-price">\u20aa${p.price}</div>
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
    <div style="margin-bottom:4px;font-size:0.85rem;color:var(--text-muted)">${i18n[currentLang].priceRange}: \u20aa${product.price}</div>
    <div>\u20aa <input type="number" class="alert-price-input" id="alertPriceInput" value="${suggestedPrice}" min="1"></div>
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
            \u20aa${a.currentPrice}
            ${a.triggered ? `<span class="price-drop-label">\u2193 ${i18n[currentLang].priceDropped}</span>` : ''}
          </div>
          <div style="font-size:0.78rem;color:var(--text-muted)">${i18n[currentLang].targetPrice}: \u20aa${a.targetPrice}</div>
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
  const text = `${i18n[currentLang].shareText}\n${title}\n\u20aa${price}\n${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
}

function shareSearch(query) {
  const url = `${SITE_URL}?q=${encodeURIComponent(query)}`;
  const text = currentLang === "he"
    ? `\u05ea\u05e8\u05d0\u05d9 \u05de\u05d4 \u05de\u05e6\u05d0\u05ea\u05d9! \u05d7\u05e4\u05e9\u05d9 "${query}" \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1:\n${url}`
    : `Check this out! Search "${query}" on AliExpress:\n${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
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

async function doSearch(query, page = 1) {
  const params = new URLSearchParams({
    q: query, lang: currentLang, currency: "ILS", country: "IL", page: String(page),
  });
  const resp = await fetch(`${API_BASE}/search?${params}`);
  return resp.json();
}

async function loadSuggestions() {
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
  const originalPrice = p.discount > 0 ? `<span class="product-original-price">\u20aa${p.original_price}</span>` : "";
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
          <span class="product-price">\u20aa${p.price}</span>
          ${originalPrice}
          ${discount}
        </div>
        <div class="product-meta">
          <span class="product-rating">${stars}</span>
          <span>${(p.orders || 0).toLocaleString()} ${ordersLabel}</span>
        </div>
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

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const query = input.value.trim();
  if (!query || isLoading) return;

  isLoading = true;
  currentQuery = query;
  currentPage = 1;
  currentSort = "popular";
  input.value = "";

  document.getElementById("sortSelect").value = "popular";
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";

  addToHistory(query);
  document.getElementById("chipsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";
  document.getElementById("trendingSection").style.display = "none";
  document.getElementById("recentlyViewed").style.display = "none";

  addMessage(query, true);
  showTyping();
  showSkeletons();

  try {
    const data = await doSearch(query, 1);
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
      loadRelated(query);
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

// Init language & features
setLang(currentLang);
updateFavBadge();
updateAlertBadge();
renderHistory();
loadRecentlyViewed();
