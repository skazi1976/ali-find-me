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
  if (stores.length === 0) return toast("יש לבחור לפחות חנות אחת", "error");

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
  if (!name || !id) return toast("יש למלא שם ו-ID", "error");

  const data = await api("/admin/stores", "POST", { name, id, url });
  if (data?.success) {
    allStores = data.stores;
    renderStores();
    renderStoreCheckboxes();
    renderStats();
    document.getElementById("storeName").value = "";
    document.getElementById("storeId").value = "";
    document.getElementById("storeUrl").value = "";
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
