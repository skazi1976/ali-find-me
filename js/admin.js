/**
 * Ali Find Me - Admin Panel
 * Supports keyword-to-store associations
 */

const API_BASE = "https://ali-findme-api.ohadf1976.workers.dev";
let token = localStorage.getItem("ali_admin_token") || "";
let allKeywords = {};
let allStores = [];
let allCategories = [];
let allSuggestions = [];

// ============================================================
//  Helpers for keyword format
// ============================================================

function kwTranslation(val) {
  if (typeof val === "string") return val;
  if (val && val.translation) return val.translation;
  return "";
}

function kwStores(val) {
  if (typeof val === "string") return [];
  if (val && Array.isArray(val.stores)) return val.stores;
  return [];
}

function storeNameById(id) {
  const s = allStores.find(s => s.id === id);
  return s ? s.name : id;
}

// ============================================================
//  Auth
// ============================================================

async function doLogin() {
  const password = document.getElementById("loginPassword").value;
  const errorEl = document.getElementById("loginError");
  errorEl.style.display = "none";

  try {
    const resp = await fetch(`${API_BASE}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await resp.json();

    if (data.token) {
      token = data.token;
      localStorage.setItem("ali_admin_token", token);
      showPanel();
    } else {
      errorEl.style.display = "block";
    }
  } catch {
    errorEl.textContent = "Connection error";
    errorEl.style.display = "block";
  }
}

function doLogout() {
  token = "";
  localStorage.removeItem("ali_admin_token");
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
}

async function showPanel() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminPanel").style.display = "block";
  await loadAll();
}

// ============================================================
//  API helpers
// ============================================================

function authHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
}

async function api(path, method = "GET", body = null) {
  const opts = { method, headers: authHeaders() };
  if (body) opts.body = JSON.stringify(body);
  const resp = await fetch(`${API_BASE}${path}`, opts);
  if (resp.status === 401) {
    doLogout();
    return null;
  }
  return resp.json();
}

// ============================================================
//  Load all data
// ============================================================

async function loadAll() {
  const [kwData, stData, catData, sugData, setData] = await Promise.all([
    api("/admin/keywords"),
    api("/admin/stores"),
    api("/admin/categories"),
    api("/admin/suggestions"),
    api("/admin/settings"),
  ]);

  if (!kwData) return;

  allKeywords = kwData.keywords || {};
  allStores = stData.stores || [];
  allCategories = catData.categories || [];
  allSuggestions = sugData.suggestions || [];

  renderStats();
  renderKeywords();
  renderStores();
  renderStoreCheckboxes();
  renderCategories();
  renderSuggestions();

  if (setData?.settings) {
    document.getElementById("settingSiteName").value = setData.settings.siteName || "";
    document.getElementById("settingTrackingId").value = setData.settings.trackingId || "";
  }
}

// ============================================================
//  Stats
// ============================================================

function renderStats() {
  document.getElementById("statsGrid").innerHTML = `
    <div class="stat-card"><div class="stat-number">${Object.keys(allKeywords).length}</div><div class="stat-label">מילות מפתח</div></div>
    <div class="stat-card"><div class="stat-number">${allStores.length}</div><div class="stat-label">חנויות</div></div>
    <div class="stat-card"><div class="stat-number">${allCategories.length}</div><div class="stat-label">קטגוריות</div></div>
    <div class="stat-card"><div class="stat-number">${allSuggestions.length}</div><div class="stat-label">הצעות</div></div>
  `;
}

// ============================================================
//  Store checkboxes for keyword form
// ============================================================

function renderStoreCheckboxes() {
  const container = document.getElementById("kwStoresCheckboxes");
  if (!container) return;
  if (allStores.length === 0) {
    container.innerHTML = '<span style="color:var(--text-light);font-size:0.85rem">אין חנויות - הוסף חנויות קודם</span>';
    return;
  }
  container.innerHTML = allStores.map(s => `
    <label style="display:inline-flex;align-items:center;gap:6px;margin:4px 0 4px 16px;cursor:pointer;font-size:0.9rem">
      <input type="checkbox" class="kw-store-cb" value="${s.id}"> ${s.name}
    </label>
  `).join("");
}

function getSelectedStores() {
  const cbs = document.querySelectorAll(".kw-store-cb:checked");
  return Array.from(cbs).map(cb => cb.value);
}

// ============================================================
//  Keywords
// ============================================================

function renderKeywords(filter = "") {
  const tbody = document.getElementById("kwTableBody");
  const entries = Object.entries(allKeywords);
  const filtered = filter
    ? entries.filter(([k, v]) => {
        const trans = kwTranslation(v);
        return k.toLowerCase().includes(filter) || trans.toLowerCase().includes(filter);
      })
    : entries;

  document.getElementById("kwCount").textContent = entries.length;

  tbody.innerHTML = filtered.map(([he, val]) => {
    const trans = kwTranslation(val);
    const stores = kwStores(val);
    const storeNames = stores.map(id => storeNameById(id));
    const storesBadges = storeNames.length > 0
      ? storeNames.map(n => `<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:10px;font-size:0.8rem;margin:2px">${n}</span>`).join(" ")
      : '<span style="color:#999;font-size:0.8rem">כל החנויות</span>';
    return `
    <tr>
      <td><strong>${he}</strong></td>
      <td>${trans}</td>
      <td>${storesBadges}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteKeyword('${he.replace(/'/g, "\\'")}')">מחק</button></td>
    </tr>
  `;
  }).join("");
}

function filterKeywords(val) {
  renderKeywords(val.trim().toLowerCase());
}

async function addKeyword() {
  const he = document.getElementById("kwHebrew").value.trim();
  const en = document.getElementById("kwEnglish").value.trim();
  const stores = getSelectedStores();
  if (!he || !en) return toast("יש למלא את שני השדות", "error");

  const data = await api("/admin/keywords", "POST", { keyword: he, translation: en, stores });
  if (data?.success) {
    allKeywords = data.keywords;
    renderKeywords();
    renderStats();
    document.getElementById("kwHebrew").value = "";
    document.getElementById("kwEnglish").value = "";
    // Uncheck all store checkboxes
    document.querySelectorAll(".kw-store-cb").forEach(cb => cb.checked = false);
    toast("מילת מפתח נוספה!");
  }
}

async function deleteKeyword(keyword) {
  if (!confirm(`למחוק את "${keyword}"?`)) return;
  const data = await api("/admin/keywords", "DELETE", { keyword });
  if (data?.success) {
    allKeywords = data.keywords;
    renderKeywords();
    renderStats();
    toast("מילת מפתח נמחקה");
  }
}

// ============================================================
//  Stores
// ============================================================

function renderStores() {
  const tbody = document.getElementById("storeTableBody");
  document.getElementById("storeCount").textContent = allStores.length;

  tbody.innerHTML = allStores.map((s, i) => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td><code>${s.id}</code></td>
      <td>${s.url ? `<a href="${s.url}" target="_blank">link</a>` : "-"}</td>
      <td>
        <label class="toggle">
          <input type="checkbox" ${s.active ? "checked" : ""} onchange="toggleStore('${s.id}', this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteStore('${s.id}')">מחק</button></td>
    </tr>
  `).join("");
}

async function addStore() {
  const name = document.getElementById("storeName").value.trim();
  const id = document.getElementById("storeId").value.trim();
  const url = document.getElementById("storeUrl").value.trim();
  const searchBoost = document.getElementById("storeSearchBoost")?.value.trim() || "";
  if (!name || !id) return toast("יש למלא שם ו-ID", "error");

  const data = await api("/admin/stores", "POST", { name, id, url, searchBoost });
  if (data?.success) {
    allStores = data.stores;
    renderStores();
    renderStoreCheckboxes();
    renderStats();
    document.getElementById("storeName").value = "";
    document.getElementById("storeId").value = "";
    document.getElementById("storeUrl").value = "";
    if (document.getElementById("storeSearchBoost")) document.getElementById("storeSearchBoost").value = "";
    toast("חנות נוספה!");
  }
}

async function toggleStore(id, active) {
  const data = await api("/admin/stores", "PUT", { id, active });
  if (data?.success) {
    allStores = data.stores;
  }
}

async function deleteStore(id) {
  if (!confirm("למחוק את החנות?")) return;
  const data = await api("/admin/stores", "DELETE", { id });
  if (data?.success) {
    allStores = data.stores;
    renderStores();
    renderStoreCheckboxes();
    renderStats();
    toast("חנות נמחקה");
  }
}

// ============================================================
//  Categories
// ============================================================

function renderCategories() {
  const tbody = document.getElementById("catTableBody");
  document.getElementById("catCount").textContent = allCategories.length;

  tbody.innerHTML = allCategories.map((c, i) => `
    <tr>
      <td style="font-size:1.5rem">${c.icon || "\ud83c\udff7\ufe0f"}</td>
      <td><strong>${c.name}</strong></td>
      <td>${c.nameEn || "-"}</td>
      <td>${(c.keywords || []).join(", ")}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteCategory(${i})">מחק</button></td>
    </tr>
  `).join("");
}

async function addCategory() {
  const name = document.getElementById("catName").value.trim();
  const nameEn = document.getElementById("catNameEn").value.trim();
  const icon = document.getElementById("catIcon").value.trim();
  if (!name) return toast("יש למלא שם", "error");

  const data = await api("/admin/categories", "POST", { name, nameEn, icon, keywords: [] });
  if (data?.success) {
    allCategories = data.categories;
    renderCategories();
    renderStats();
    document.getElementById("catName").value = "";
    document.getElementById("catNameEn").value = "";
    document.getElementById("catIcon").value = "";
    toast("קטגוריה נוספה!");
  }
}

async function deleteCategory(index) {
  if (!confirm("למחוק את הקטגוריה?")) return;
  const data = await api("/admin/categories", "DELETE", { index });
  if (data?.success) {
    allCategories = data.categories;
    renderCategories();
    renderStats();
    toast("קטגוריה נמחקה");
  }
}

// ============================================================
//  Suggestions
// ============================================================

function renderSuggestions() {
  const container = document.getElementById("suggestionsList");
  container.innerHTML = allSuggestions.map((s, i) => `
    <span style="display:inline-flex;align-items:center;gap:6px;background:#f0f0ff;padding:8px 14px;border-radius:20px;margin:4px;font-size:0.9rem">
      ${s}
      <button onclick="removeSuggestion(${i})" style="border:none;background:none;cursor:pointer;color:var(--danger);font-size:1.1rem">&times;</button>
    </span>
  `).join("");
}

async function addSuggestion() {
  const val = document.getElementById("newSuggestion").value.trim();
  if (!val) return;
  allSuggestions.push(val);
  await api("/admin/suggestions", "PUT", { suggestions: allSuggestions });
  document.getElementById("newSuggestion").value = "";
  renderSuggestions();
  renderStats();
  toast("הצעה נוספה!");
}

async function removeSuggestion(index) {
  allSuggestions.splice(index, 1);
  await api("/admin/suggestions", "PUT", { suggestions: allSuggestions });
  renderSuggestions();
  renderStats();
}

// ============================================================
//  Settings
// ============================================================

async function saveSettings() {
  const siteName = document.getElementById("settingSiteName").value.trim();
  const trackingId = document.getElementById("settingTrackingId").value.trim();
  await api("/admin/settings", "PUT", { siteName, trackingId });
  toast("הגדרות נשמרו!");
}

async function changePassword() {
  const pw = document.getElementById("newPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  if (!pw || pw.length < 4) return toast("סיסמה חייבת להיות לפחות 4 תווים", "error");
  if (pw !== confirm) return toast("הסיסמאות לא תואמות", "error");

  await api("/admin/settings", "PUT", { newPassword: pw });
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
  toast("סיסמה שונתה!");
}

// ============================================================
//  UI helpers
// ============================================================

function switchTab(name) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".admin-nav button").forEach(b => b.classList.remove("active"));
  document.getElementById(`tab-${name}`).classList.add("active");
  event.target.classList.add("active");
  if (name === "searchlogs") loadSearchLogs();
  if (name === "analytics") loadAnalytics();
}

// ============================================================
//  Analytics Dashboard
// ============================================================

const COUNTRY_NAMES = {
  IL:"ישראל 🇮🇱", US:"ארה\"ב 🇺🇸", GB:"בריטניה 🇬🇧", DE:"גרמניה 🇩🇪", FR:"צרפת 🇫🇷",
  RU:"רוסיה 🇷🇺", SA:"סעודיה 🇸🇦", AE:"אמירויות 🇦🇪", EG:"מצרים 🇪🇬", TR:"טורקיה 🇹🇷",
  BR:"ברזיל 🇧🇷", ES:"ספרד 🇪🇸", PT:"פורטוגל 🇵🇹", IT:"איטליה 🇮🇹", CA:"קנדה 🇨🇦",
  AU:"אוסטרליה 🇦🇺", IN:"הודו 🇮🇳", JP:"יפן 🇯🇵", KR:"דרום קוריאה 🇰🇷", CN:"סין 🇨🇳",
  MA:"מרוקו 🇲🇦", DZ:"אלג'יריה 🇩🇿", TN:"תוניסיה 🇹🇳", IQ:"עירק 🇮🇶", JO:"ירדן 🇯🇴",
  LB:"לבנון 🇱🇧", KW:"כווית 🇰🇼", QA:"קטאר 🇶🇦", BH:"בחריין 🇧🇭", OM:"עומאן 🇴🇲",
  PL:"פולין 🇵🇱", NL:"הולנד 🇳🇱", SE:"שוודיה 🇸🇪", NO:"נורבגיה 🇳🇴", UA:"אוקראינה 🇺🇦",
  MX:"מקסיקו 🇲🇽", AR:"ארגנטינה 🇦🇷", CO:"קולומביה 🇨🇴", CL:"צ'ילה 🇨🇱",
  XX:"לא ידוע 🌐"
};

const LANG_NAMES = {
  he:"עברית 🇮🇱", en:"English 🇺🇸", ar:"العربية 🇸🇦", ru:"Русский 🇷🇺",
  es:"Español 🇪🇸", pt:"Português 🇧🇷", tr:"Türkçe 🇹🇷", fr:"Français 🇫🇷"
};

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

async function loadAnalytics() {
  const range = document.getElementById("analyticsRange")?.value || "30";
  const data = await api(`/admin/analytics?range=${range}`);
  if (!data) return;

  // Main stats
  document.getElementById("anTotalViews").textContent = formatNum(data.total?.views || 0);
  document.getElementById("anMonthViews").textContent = formatNum(data.monthly?.views || 0);
  document.getElementById("anRangeViews").textContent = formatNum(data.range?.views || 0);
  document.getElementById("anCountries").textContent = Object.keys(data.total?.countries || {}).length;

  // Daily chart (bar chart)
  const daily = data.range?.daily || [];
  const maxDaily = Math.max(...daily.map(d => d.views), 1);
  const chartEl = document.getElementById("dailyChart");
  chartEl.innerHTML = daily.map(d => {
    const pct = Math.max((d.views / maxDaily) * 100, 2);
    const dayLabel = d.date.slice(5); // MM-DD
    const isToday = d.date === new Date().toISOString().slice(0, 10);
    const color = isToday ? "#6C5CE7" : "#a29bfe";
    return `<div style="flex:1;min-width:20px;display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:0.75rem;font-weight:700;color:${color};">${d.views}</span>
      <div style="width:100%;height:${pct}%;background:${color};border-radius:4px 4px 0 0;min-height:4px;transition:height 0.5s;"></div>
      <span style="font-size:0.65rem;color:#999;transform:rotate(-45deg);white-space:nowrap;">${dayLabel}</span>
    </div>`;
  }).join("");

  // Countries chart
  renderBarList("countriesChart", data.range?.countries || {}, COUNTRY_NAMES, "#6C5CE7");

  // Languages chart
  renderBarList("langsChart", data.range?.langs || {}, LANG_NAMES, "#00B894");

  // Pages chart
  renderBarList("pagesChart", data.range?.pages || {}, {}, "#0984e3");

  // Referrers chart
  renderBarList("refsChart", data.range?.refs || {}, {}, "#e17055");
}

function renderBarList(elId, dataObj, nameMap, color) {
  const el = document.getElementById(elId);
  const entries = Object.entries(dataObj).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    el.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">אין נתונים עדיין</p>';
    return;
  }
  const maxVal = entries[0][1];
  el.innerHTML = entries.map(([key, val]) => {
    const pct = Math.round((val / maxVal) * 100);
    const label = nameMap[key] || key;
    return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <div style="width:140px;font-size:0.9rem;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${key}">${label}</div>
      <div style="flex:1;height:26px;background:#f0f0f0;border-radius:6px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:${color};border-radius:6px;transition:width 0.5s;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;">
          ${pct > 20 ? `<span style="color:#fff;font-size:0.8rem;font-weight:700;">${val}</span>` : ""}
        </div>
      </div>
      ${pct <= 20 ? `<span style="font-size:0.85rem;font-weight:700;color:${color};min-width:35px;">${val}</span>` : ""}
    </div>`;
  }).join("");
}

// ============================================================
//  Search Logs
// ============================================================

function loadSearchLogs() {
  const logs = JSON.parse(localStorage.getItem("search_logs") || "[]");

  // Stats
  const total = logs.length;
  const unique = new Set(logs.map(l => l.q)).size;
  const noResults = logs.filter(l => l.results === 0).length;
  const imageSearches = logs.filter(l => l.q.startsWith("[IMAGE]")).length;

  document.getElementById("statTotalSearches").textContent = total;
  document.getElementById("statUniqueQueries").textContent = unique;
  document.getElementById("statNoResults").textContent = noResults;
  document.getElementById("statImageSearches").textContent = imageSearches;

  // Top queries
  const queryCounts = {};
  logs.forEach(l => {
    const q = l.q.toLowerCase().trim();
    if (!q) return;
    queryCounts[q] = (queryCounts[q] || 0) + 1;
  });
  const sorted = Object.entries(queryCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
  const maxCount = sorted.length > 0 ? sorted[0][1] : 1;

  let chartHtml = "";
  sorted.forEach(([query, count]) => {
    const pct = Math.round((count / maxCount) * 100);
    const color = query.startsWith("[image]") ? "#1976d2" : "#6C5CE7";
    chartHtml += `<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <div style="width:180px;font-size:0.9rem;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${query}">${query}</div>
      <div style="flex:1;height:24px;background:#f0ecff;border-radius:6px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:${color};border-radius:6px;transition:width 0.5s;"></div>
      </div>
      <div style="width:40px;font-weight:700;font-size:0.9rem;color:${color};">${count}</div>
    </div>`;
  });
  document.getElementById("topQueriesChart").innerHTML = chartHtml || "<p style='color:#999;'>אין נתונים עדיין</p>";

  // No results table
  const noResultQueries = {};
  logs.filter(l => l.results === 0).forEach(l => {
    const key = l.q + "|" + (l.t || "") + "|" + l.lang;
    if (!noResultQueries[key]) noResultQueries[key] = { q: l.q, t: l.t, lang: l.lang, count: 0 };
    noResultQueries[key].count++;
  });
  const noResultSorted = Object.values(noResultQueries).sort((a, b) => b.count - a.count);
  let noResultHtml = "";
  noResultSorted.forEach(item => {
    noResultHtml += `<tr>
      <td><strong>${item.q}</strong></td>
      <td style="color:#636e72;">${item.t || "-"}</td>
      <td>${item.lang}</td>
      <td style="color:#e74c3c;font-weight:700;">${item.count}</td>
    </tr>`;
  });
  document.querySelector("#noResultsTable tbody").innerHTML = noResultHtml || "<tr><td colspan='4' style='color:#999;text-align:center;'>אין חיפושים ללא תוצאות 🎉</td></tr>";

  // All logs table (newest first)
  const recentLogs = [...logs].reverse().slice(0, 200);
  let logsHtml = "";
  recentLogs.forEach(l => {
    const date = new Date(l.ts).toLocaleString("he-IL", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    const resultColor = l.results === 0 ? "#e74c3c" : "#2e7d32";
    logsHtml += `<tr>
      <td style="font-size:0.85rem;color:#636e72;white-space:nowrap;">${date}</td>
      <td><strong>${l.q}</strong></td>
      <td style="color:#636e72;">${l.t || "-"}</td>
      <td>${l.lang}</td>
      <td style="color:${resultColor};font-weight:700;">${l.results}</td>
    </tr>`;
  });
  document.querySelector("#searchLogsTable tbody").innerHTML = logsHtml || "<tr><td colspan='5' style='color:#999;text-align:center;'>אין חיפושים עדיין</td></tr>";
}

function filterSearchLogs() {
  const filter = document.getElementById("searchLogFilter").value.toLowerCase();
  const rows = document.querySelectorAll("#searchLogsTable tbody tr");
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
}

function exportSearchLogs() {
  const logs = JSON.parse(localStorage.getItem("search_logs") || "[]");
  if (logs.length === 0) { toast("אין נתונים לייצוא", "error"); return; }

  let csv = "Date,Original Query,Translated,Language,Currency,Country,Results\n";
  logs.forEach(l => {
    csv += `"${l.ts}","${(l.q || "").replace(/"/g, '""')}","${(l.t || "").replace(/"/g, '""')}","${l.lang}","${l.currency || ""}","${l.country || ""}","${l.results}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "search_logs_" + new Date().toISOString().slice(0, 10) + ".csv";
  a.click();
  URL.revokeObjectURL(url);
  toast("ייצוא CSV הצליח!");
}

function clearSearchLogs() {
  if (!confirm("האם אתה בטוח שרוצה לנקות את כל לוג החיפושים?")) return;
  localStorage.removeItem("search_logs");
  loadSearchLogs();
  toast("לוג החיפושים נוקה");
}

function toast(msg, type = "success") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = `toast ${type}`;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 3000);
}

// ============================================================
//  Init
// ============================================================

if (token) {
  api("/admin/keywords").then(data => {
    if (data) showPanel();
    else doLogout();
  });
} else {
  document.getElementById("loginScreen").style.display = "flex";
}
