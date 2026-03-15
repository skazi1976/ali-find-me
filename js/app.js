/**
 * Ali Find Me - Search App
 */

const API_BASE = "https://ali-findme-api.ohadf1976.workers.dev";

let currentLang = localStorage.getItem("ali_lang") || "he";
let currentPage = 1;
let currentQuery = "";
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
    howTitle: "\ud83d\udca1 \u05d0\u05d9\u05da \u05d6\u05d4 \u05e2\u05d5\u05d1\u05d3?",
    step1Title: "\u05d7\u05e4\u05e9\u05d9 \u05de\u05d5\u05e6\u05e8",
    step1Desc: "\u05db\u05ea\u05d1\u05d9 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d0\u05d5 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea \u05de\u05d4 \u05d0\u05ea \u05de\u05d7\u05e4\u05e9\u05ea",
    step2Title: "\u05e7\u05d1\u05dc\u05d9 \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea",
    step2Desc: "\u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05de\u05d7\u05e4\u05e9\u05ea \u05d0\u05ea \u05d4\u05d3\u05d9\u05dc\u05d9\u05dd \u05d4\u05db\u05d9 \u05d8\u05d5\u05d1\u05d9\u05dd",
    step3Title: "\u05e7\u05e0\u05d9 \u05d1\u05d6\u05d5\u05dc",
    step3Desc: "\u05dc\u05d7\u05e6\u05d9 \u05e2\u05dc \u05d4\u05de\u05d5\u05e6\u05e8 \u05d5\u05ea\u05d5\u05e2\u05d1\u05e8\u05d9 \u05d9\u05e9\u05d9\u05e8\u05d5\u05ea \u05dc\u05d0\u05dc\u05d9 \u05d0\u05e7\u05e1\u05e4\u05e8\u05e1",
    disclaimer: "\u05d4\u05d0\u05ea\u05e8 \u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd (affiliate). \u05d4\u05e8\u05db\u05d9\u05e9\u05d4 \u05e9\u05dc\u05da \u05dc\u05d0 \u05ea\u05d4\u05d9\u05d4 \u05d9\u05e7\u05e8\u05d4 \u05d9\u05d5\u05ea\u05e8, \u05d0\u05da \u05d0\u05e0\u05d5 \u05e2\u05e9\u05d5\u05d9\u05d9\u05dd \u05dc\u05e7\u05d1\u05dc \u05e2\u05de\u05dc\u05d4 \u05e7\u05d8\u05e0\u05d4.",
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
    howTitle: "\ud83d\udca1 How it works?",
    step1Title: "Search",
    step1Desc: "Type what you're looking for in Hebrew or English",
    step2Title: "Get results",
    step2Desc: "Our system finds the best deals for you",
    step3Title: "Buy cheap",
    step3Desc: "Click on a product and go directly to AliExpress",
    disclaimer: "This site uses affiliate links. Your purchase won't cost more, but we may receive a small commission.",
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

  // Apply all i18n texts
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  loadSuggestions();
  loadCategories();
}

// ============================================================
//  API calls
// ============================================================

async function doSearch(query, page = 1) {
  const params = new URLSearchParams({
    q: query,
    lang: currentLang,
    currency: "ILS",
    country: "IL",
    page: String(page),
  });

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

function renderProducts(products, append = false) {
  const grid = document.getElementById("productGrid");
  const lang = currentLang;
  const ordersLabel = i18n[lang].orders;
  const ctaLabel = i18n[lang].viewProduct;

  const html = products.map(p => {
    const stars = "\u2605".repeat(Math.round(p.rating || 0)) + "\u2606".repeat(5 - Math.round(p.rating || 0));
    const discount = p.discount > 0 ? `<span class="product-discount">-${p.discount}%</span>` : "";
    const originalPrice = p.discount > 0 ? `<span class="product-original-price">\u20aa${p.original_price}</span>` : "";

    return `
      <div class="product-card">
        <a href="${p.affiliate_url}" target="_blank" rel="noopener">
          <img class="product-image" src="${p.image}" alt="${p.title}" loading="lazy" onerror="if(this.dataset.retry!=='1'&&'${p.image_alt||''}'){this.dataset.retry='1';this.src='${p.image_alt||''}';}else{this.closest('.product-card').style.display='none';}">
        </a>
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
  }).join("");

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
  input.value = "";

  // Hide chips
  document.getElementById("chipsContainer").style.display = "none";

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
      document.getElementById("resultsTitle").textContent = `${currentQuery} (${data.total || data.products.length})`;
      document.getElementById("resultsSection").style.display = "block";
      document.getElementById("loadMore").style.display = data.products.length >= 20 ? "block" : "none";
    } else {
      const msg = data.message || i18n[currentLang].noResults;
      addMessage(msg);
      document.getElementById("productGrid").innerHTML = `
        <div class="no-results" style="grid-column: 1/-1">
          <div class="no-results-icon">\ud83d\udd0d</div>
          <h3>${i18n[currentLang].noResults}</h3>
        </div>
      `;

      // Show suggestions if available
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

async function loadMore() {
  if (isLoading || !currentQuery) return;
  isLoading = true;
  currentPage++;

  try {
    const data = await doSearch(currentQuery, currentPage);
    if (data.products && data.products.length > 0) {
      renderProducts(data.products, true);
      document.getElementById("loadMore").style.display = data.products.length >= 20 ? "block" : "none";
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
  currentQuery = "";
  currentPage = 1;
  loadSuggestions();
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

// Init language
setLang(currentLang);
