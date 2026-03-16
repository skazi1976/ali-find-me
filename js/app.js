/**
 * Ali Find Me - Search App v2.0
 * Features: trending, filters, favorites, history, share, related searches
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

  // Update sort select options
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
}

// ============================================================
//  Search History (localStorage)
// ============================================================

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("ali_history") || "[]");
  } catch { return []; }
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
  if (history.length === 0) {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";
  chips.innerHTML = history.map(h =>
    `<button class="history-chip" onclick="chipClick('${h.replace(/'/g, "\\'")}')">${h}</button>`
  ).join("") + `<button class="history-clear-btn" onclick="clearHistory()">✕</button>`;
}

// ============================================================
//  Favorites (localStorage)
// ============================================================

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("ali_favorites") || "[]");
  } catch { return []; }
}

function toggleFavorite(product) {
  let favs = getFavorites();
  const idx = favs.findIndex(f => f.id === product.id);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.unshift(product);
    if (favs.length > 50) favs = favs.slice(0, 50);
  }
  localStorage.setItem("ali_favorites", JSON.stringify(favs));
  updateFavBadge();
  return idx < 0; // returns true if added
}

function isFavorite(productId) {
  return getFavorites().some(f => f.id === productId);
}

function updateFavBadge() {
  const count = getFavorites().length;
  const badge = document.getElementById("favBadge");
  if (count > 0) {
    badge.style.display = "inline";
    badge.textContent = count;
  } else {
    badge.style.display = "none";
  }
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

function closeFavorites() {
  document.getElementById("favModal").style.display = "none";
}

function removeFavorite(productId) {
  let favs = getFavorites();
  favs = favs.filter(f => f.id !== productId);
  localStorage.setItem("ali_favorites", JSON.stringify(favs));
  updateFavBadge();
  showFavorites(); // re-render modal
}

// ============================================================
//  Share (WhatsApp)
// ============================================================

function shareProduct(title, price, url) {
  const text = `${i18n[currentLang].shareText}\n${title}\n\u20aa${price}\n${url}`;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}

function shareSearch(query) {
  const url = `${SITE_URL}?q=${encodeURIComponent(query)}`;
  const text = currentLang === "he"
    ? `\u05ea\u05e8\u05d0\u05d9 \u05de\u05d4 \u05de\u05e6\u05d0\u05ea\u05d9! \u05d7\u05e4\u05e9\u05d9 "${query}" \u05d1\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1:\n${url}`
    : `Check this out! Search "${query}" on AliExpress:\n${url}`;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
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

async function doSearch(query, page = 1, sort = "popular", minPrice = null, maxPrice = null) {
  const params = new URLSearchParams({
    q: query,
    lang: currentLang,
    currency: "ILS",
    country: "IL",
    page: String(page),
  });

  // Add sort suffix to query for backend processing
  if (sort && sort !== "popular") {
    // We pass sort as part of the query so the backend extracts it
  }

  const resp = await fetch(`${API_BASE}/search?${params}`);
  return resp.json();
}

async function loadSuggestions() {
  try {
    const resp = await fetch(`${API_BASE}/suggestions`);
    const data = await resp.json();
    renderChips(data.suggestions || []);
  } catch {
    renderChips([]);
  }
}

async function loadCategories() {
  try {
    const resp = await fetch(`${API_BASE}/categories`);
    const data = await resp.json();
    renderCategories(data.categories || []);
  } catch {
    renderCategories([]);
  }
}

async function loadTrending() {
  try {
    const resp = await fetch(`${API_BASE}/trending`);
    const data = await resp.json();
    if (data.products && data.products.length > 0) {
      renderTrending(data.products);
      document.getElementById("trendingSection").style.display = "block";
    }
  } catch {
    document.getElementById("trendingSection").style.display = "none";
  }
}

async function loadRelated(query) {
  try {
    const resp = await fetch(`${API_BASE}/related?q=${encodeURIComponent(query)}`);
    const data = await resp.json();
    if (data.related && data.related.length > 0) {
      renderRelatedSearches(data.related);
    } else {
      document.getElementById("relatedSearches").style.display = "none";
    }
  } catch {
    document.getElementById("relatedSearches").style.display = "none";
  }
}

// ============================================================
//  UI rendering
// ============================================================

function renderChips(suggestions) {
  const container = document.getElementById("chipsContainer");
  container.innerHTML = suggestions.map(s =>
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
      </div>
    `;
  }).join("");
}

function renderTrending(products) {
  const grid = document.getElementById("trendingGrid");
  grid.innerHTML = products.slice(0, 8).map(p => buildProductCard(p)).join("");
}

function renderRelatedSearches(related) {
  const container = document.getElementById("relatedSearches");
  const chips = document.getElementById("relatedChips");
  chips.innerHTML = related.map(r =>
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
    <div class="message-bubble">${text}</div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function showTyping() {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "message bot-message";
  div.id = "typingMsg";
  div.innerHTML = `
    <div class="message-avatar">\ud83e\udd16</div>
    <div class="message-bubble">
      <div class="typing-indicator"><span></span><span></span><span></span></div>
    </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById("typingMsg");
  if (el) el.remove();
}

function showSkeletons() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = Array(6).fill("").map(() => `
    <div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
    </div>
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

  // Escape product data for inline onclick
  const pJson = JSON.stringify({
    id: p.id, title: p.title, price: p.price, image: p.image,
    affiliate_url: p.affiliate_url, rating: p.rating, orders: p.orders
  }).replace(/'/g, "&#39;").replace(/"/g, "&quot;");

  return `
    <div class="product-card" id="product-${p.id}">
      <div class="product-img-wrap">
        <a href="${p.affiliate_url}" target="_blank" rel="noopener">
          <img class="product-image" src="${p.image}" alt="${p.title}" loading="lazy" onerror="retryImg(this,'${(p.image_alt||'').replace(/'/g,"\\'")}')">
        </a>
        <button class="${favClass}" onclick="onFavClick(this, '${pJson}')" title="הוסף למועדפים">
          ${isFav ? "❤️" : "🤍"}
        </button>
        <button class="share-btn" onclick="shareProduct('${p.title.replace(/'/g,"\\'")}','${p.price}','${p.affiliate_url}')" title="שתף">
          📤
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
        <a href="${p.affiliate_url}" target="_blank" rel="noopener" class="product-cta">${ctaLabel}</a>
      </div>
    </div>
  `;
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
  btn.innerHTML = added ? "❤️" : "🤍";
  btn.classList.toggle("active", added);

  // Animate
  btn.style.transform = "scale(1.3)";
  setTimeout(() => btn.style.transform = "", 200);
}

function renderProducts(products, append = false) {
  const grid = document.getElementById("productGrid");
  const html = products.map(p => buildProductCard(p)).join("");
  if (append) {
    grid.innerHTML += html;
  } else {
    grid.innerHTML = html;
  }
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
  currentMinPrice = null;
  currentMaxPrice = null;
  input.value = "";

  // Reset filters UI
  document.getElementById("sortSelect").value = "popular";
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";

  // Save to history
  addToHistory(query);

  // Hide chips
  document.getElementById("chipsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";

  // Hide trending
  document.getElementById("trendingSection").style.display = "none";

  // Show user message
  addMessage(query, true);

  // Show typing
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
        <button class="share-search-btn" onclick="shareSearch('${currentQuery.replace(/'/g,"\\'")}')" title="שתף חיפוש">📤 שתף</button>`;
      document.getElementById("resultsSection").style.display = "block";
      const hasMore = (data.total || 0) > currentPage * 50;
      document.getElementById("loadMore").style.display = hasMore ? "block" : "none";

      // Load related searches
      loadRelated(query);
    } else {
      const msg = data.message || i18n[currentLang].noResults;
      addMessage(msg);
      document.getElementById("productGrid").innerHTML = `
        <div class="no-results" style="grid-column: 1/-1">
          <div class="no-results-icon">\ud83d\udd0d</div>
          <h3>${i18n[currentLang].noResults}</h3>
        </div>
      `;
      document.getElementById("relatedSearches").style.display = "none";

      if (data.suggestions && data.suggestions.length > 0) {
        document.getElementById("chipsContainer").style.display = "flex";
        renderChips(data.suggestions);
      }
    }
  } catch (err) {
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

  // Build query with sort hint
  const sortWord = currentSort === "popular" ? "" : currentSort;
  const q = sortWord ? `${currentQuery} ${sortWord}` : currentQuery;

  showSkeletons();
  try {
    const data = await doSearch(q, 1);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products);
      document.getElementById("resultsTitle").innerHTML =
        `${currentQuery} (${data.total || data.products.length})
        <button class="share-search-btn" onclick="shareSearch('${currentQuery.replace(/'/g,"\\'")}')" title="שתף חיפוש">📤 שתף</button>`;
      const hasMore = (data.total || 0) > currentPage * 50;
      document.getElementById("loadMore").style.display = hasMore ? "block" : "none";
    }
  } catch {}
}

async function applyPriceFilter() {
  if (!currentQuery) return;
  const min = document.getElementById("priceMin").value;
  const max = document.getElementById("priceMax").value;
  currentPage = 1;

  let q = currentQuery;
  if (min && max) {
    q += ` ${min}-${max}`;
  } else if (max) {
    q += ` \u05e2\u05d3 ${max}`;
  } else if (min) {
    q += ` ${min}-99999`;
  }

  showSkeletons();
  try {
    const data = await doSearch(q, 1);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products);
      const hasMore = (data.total || 0) > currentPage * 50;
      document.getElementById("loadMore").style.display = hasMore ? "block" : "none";
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
      const hasMore = (data.total || 0) > currentPage * 50;
      document.getElementById("loadMore").style.display = hasMore ? "block" : "none";
    } else {
      document.getElementById("loadMore").style.display = "none";
    }
  } catch {
    currentPage--;
  }

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
}

// ============================================================
//  Init
// ============================================================

document.getElementById("chatInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

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
renderHistory();
