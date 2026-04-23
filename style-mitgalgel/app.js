// Style Mitgalgel — Shared client-side helpers

const API = ""; // same origin (worker serves static + API)
const DEMO_MODE = !location.hostname.includes("workers.dev") && !location.hostname.includes("localhost");
const DEMO_ITEMS = [
  {id:1, title:"שמלת זארה לבנה ארוכה - מידה M", price:120, brand:"Zara", size:"M", category:"dress", condition:"like_new", city:"תל אביב", views:42, favorites_count:5, created_at:Math.floor(Date.now()/1000)-3600, status:"active", user_id:99,
   photos:["https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600"],
   seller_name:"דנה", seller_phone:"972501234567", seller_rating:5.0, seller_items_sold:8, seller_joined:Math.floor(Date.now()/1000)-2592000, description:"שמלת ערב מקסימה, נלבשה פעם אחת בלבד לחתונה. במצב מצוין!"},
  {id:2, title:"ג'ינס ליוויס סקיני שחור", price:80, brand:"Levi's", size:"38", category:"jeans", condition:"good", city:"רמת גן", views:23, favorites_count:2, created_at:Math.floor(Date.now()/1000)-7200, status:"active", user_id:98,
   photos:["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"], seller_name:"מיכל", seller_phone:"972501234568", seller_rating:4.8, seller_items_sold:12, seller_joined:Math.floor(Date.now()/1000)-5184000, description:""},
  {id:3, title:"חולצת H&M בז' עם תחרה", price:45, brand:"H&M", size:"S", category:"shirt", condition:"new", city:"חיפה", views:18, favorites_count:7, created_at:Math.floor(Date.now()/1000)-10800, status:"active", user_id:97,
   photos:["https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600"], seller_name:"שרון", seller_phone:"972501234569", seller_rating:5.0, seller_items_sold:3, seller_joined:Math.floor(Date.now()/1000)-1296000, description:"חדש עם תווית! לא התאים במידה."},
  {id:4, title:"מעיל חורף ארוך אפור Mango", price:200, brand:"Mango", size:"M", category:"jacket", condition:"like_new", city:"ירושלים", views:67, favorites_count:11, created_at:Math.floor(Date.now()/1000)-14400, status:"active", user_id:96,
   photos:["https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600"], seller_name:"רותי", seller_phone:"972501234570", seller_rating:4.9, seller_items_sold:21, seller_joined:Math.floor(Date.now()/1000)-7776000, description:"מעיל איכותי, נלבש 2 חורפים."},
  {id:5, title:"נעלי עקב נודה Stradivarius", price:60, brand:"Stradivarius", size:"38", category:"shoes", condition:"good", city:"באר שבע", views:31, favorites_count:4, created_at:Math.floor(Date.now()/1000)-86400, status:"active", user_id:95,
   photos:["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"], seller_name:"עדי", seller_phone:"972501234571", seller_rating:5.0, seller_items_sold:5, seller_joined:Math.floor(Date.now()/1000)-3888000, description:""},
  {id:6, title:"תיק יד שחור Bershka", price:50, brand:"Bershka", size:"", category:"bag", condition:"new", city:"אשדוד", views:14, favorites_count:1, created_at:Math.floor(Date.now()/1000)-172800, status:"active", user_id:94,
   photos:["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"], seller_name:"נועה", seller_phone:"972501234572", seller_rating:4.7, seller_items_sold:9, seller_joined:Math.floor(Date.now()/1000)-2160000, description:"תיק כמעט חדש, הספקתי להשתמש פעמיים."},
];

// ---------- Auth state (localStorage) ----------
const Auth = {
  token: () => localStorage.getItem("smg_token"),
  user:  () => { const u = localStorage.getItem("smg_user"); return u ? JSON.parse(u) : null; },
  set: (token, user) => {
    localStorage.setItem("smg_token", token);
    localStorage.setItem("smg_user", JSON.stringify(user));
  },
  clear: () => {
    localStorage.removeItem("smg_token");
    localStorage.removeItem("smg_user");
  },
  isLoggedIn: () => !!localStorage.getItem("smg_token"),
};

// ---------- Fetch wrapper ----------
async function api(path, opts = {}) {
  // Demo mode: return mock data when backend isn't deployed
  if (DEMO_MODE) return demoApi(path, opts);

  const headers = { ...(opts.headers || {}) };
  const token = Auth.token();
  if (token) headers["Authorization"] = "Bearer " + token;
  if (opts.body && !(opts.body instanceof FormData) && typeof opts.body === "object") {
    headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(opts.body);
  }
  const res = await fetch(API + path, { ...opts, headers });
  let data;
  try { data = await res.json(); } catch { data = {}; }
  if (!res.ok) throw new Error(data.error || `שגיאה (${res.status})`);
  return data;
}

function demoApi(path, opts) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const method = opts.method || "GET";
      // GET /api/items (with optional ?q=&category=)
      if (path.startsWith("/api/items?") || path === "/api/items") {
        const params = new URLSearchParams(path.split("?")[1] || "");
        let items = [...DEMO_ITEMS];
        const q = params.get("q")?.toLowerCase();
        const cat = params.get("category");
        if (q) items = items.filter(i => i.title.toLowerCase().includes(q) || (i.brand || "").toLowerCase().includes(q));
        if (cat) items = items.filter(i => i.category === cat);
        return resolve({ items, page: 1, has_more: false });
      }
      // GET /api/items/:id
      const m = path.match(/^\/api\/items\/(\d+)$/);
      if (m && method === "GET") {
        const item = DEMO_ITEMS.find(i => i.id === parseInt(m[1]));
        return item ? resolve({ item }) : reject(new Error("פריט לא נמצא"));
      }
      // POST /api/items/:id/view
      if (/\/view$/.test(path)) return resolve({ ok: true });
      // POST /api/items/:id/favorite
      if (/\/favorite$/.test(path)) return resolve({ favorited: Math.random() > 0.5 });
      // GET /api/me/favorites or /api/me/items
      if (path === "/api/me/favorites" || path === "/api/me/items") {
        return resolve({ items: DEMO_ITEMS.slice(0, 3) });
      }
      // Auth/login flow stubs
      if (path === "/api/auth/request-otp") return resolve({ ok: true, phone: "972501234567" });
      if (path === "/api/auth/verify-otp") return resolve({ ok: true, token: "demo", user: { id: 1, name: "דמו", phone: "972501234567" } });
      if (path === "/api/auth/logout") return resolve({ ok: true });
      // POST /api/items (upload)
      if (path === "/api/items" && method === "POST") {
        return reject(new Error("DEMO MODE — העלאה לא פעילה כי אין שרת"));
      }
      // Generic fallback
      resolve({ ok: true });
    }, 200);
  });
}

// ---------- Toast notifications ----------
function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2500);
}

// ---------- Hebrew labels ----------
const CATEGORIES = {
  dress: "שמלה",
  shirt: "חולצה",
  pants: "מכנסיים",
  jeans: "ג'ינס",
  skirt: "חצאית",
  jacket: "מעיל / ז'קט",
  shoes: "נעליים",
  bag: "תיק",
  accessories: "אקססוריז",
  swimwear: "בגדי ים",
  underwear: "הלבשה תחתונה",
  kids: "ילדים",
  other: "אחר",
};

const CONDITIONS = {
  new: "חדש עם תווית",
  like_new: "כמו חדש",
  good: "במצב טוב",
  fair: "סביר",
};

const CITIES = [
  "תל אביב", "ירושלים", "חיפה", "ראשון לציון", "פתח תקווה", "אשדוד",
  "נתניה", "באר שבע", "בני ברק", "חולון", "רמת גן", "אשקלון", "רחובות",
  "בת ים", "הרצליה", "כפר סבא", "מודיעין", "רעננה", "אחר",
];

// ---------- Time helpers ----------
function timeAgo(ts) {
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60) return "כרגע";
  if (diff < 3600) return `לפני ${Math.floor(diff / 60)} דק'`;
  if (diff < 86400) return `לפני ${Math.floor(diff / 3600)} שעות`;
  if (diff < 86400 * 7) return `לפני ${Math.floor(diff / 86400)} ימים`;
  if (diff < 86400 * 30) return `לפני ${Math.floor(diff / (86400 * 7))} שבועות`;
  return `לפני ${Math.floor(diff / (86400 * 30))} חודשים`;
}

function formatPrice(price) {
  return `₪${parseInt(price).toLocaleString("he-IL")}`;
}

// ---------- Login modal (used from any page) ----------
function showLoginModal(onSuccess) {
  let modal = document.getElementById("loginModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "loginModal";
    modal.className = "modal-bg";
    modal.innerHTML = `
      <div class="modal">
        <h2>התחברות לסטייל מתגלגל</h2>
        <div id="step1">
          <div class="form">
            <div>
              <label>מספר טלפון</label>
              <input type="tel" id="phoneInput" placeholder="050-1234567" inputmode="tel" maxlength="13">
            </div>
            <button class="btn" id="sendCodeBtn">שלחי קוד WhatsApp</button>
          </div>
        </div>
        <div id="step2" style="display:none">
          <p class="text-muted text-center" style="margin-bottom:12px">
            שלחנו קוד ל-<span id="phoneDisplay"></span> בWhatsApp
          </p>
          <div class="form">
            <div>
              <label>קוד אימות (6 ספרות)</label>
              <input type="text" id="codeInput" placeholder="123456" inputmode="numeric" maxlength="6">
            </div>
            <div id="nameField" style="display:none">
              <label>איך לקרוא לך?</label>
              <input type="text" id="nameInput" placeholder="השם שלך">
            </div>
            <button class="btn" id="verifyBtn">אישור</button>
            <button class="btn btn-secondary" id="resendBtn">שלחי קוד מחדש</button>
          </div>
        </div>
        <p class="text-center" style="margin-top:14px">
          <button id="closeLoginBtn" class="text-muted" style="background:none">ביטול</button>
        </p>
      </div>
    `;
    document.body.appendChild(modal);

    let pendingPhone = "";

    modal.querySelector("#closeLoginBtn").onclick = () => modal.classList.remove("show");

    modal.querySelector("#sendCodeBtn").onclick = async (e) => {
      const phone = modal.querySelector("#phoneInput").value;
      if (!phone) return toast("מספר חסר");
      e.target.disabled = true;
      try {
        const res = await api("/api/auth/request-otp", { method: "POST", body: { phone } });
        pendingPhone = res.phone;
        modal.querySelector("#phoneDisplay").textContent = pendingPhone;
        modal.querySelector("#step1").style.display = "none";
        modal.querySelector("#step2").style.display = "block";
        modal.querySelector("#codeInput").focus();
      } catch (err) {
        toast(err.message);
      } finally {
        e.target.disabled = false;
      }
    };

    modal.querySelector("#resendBtn").onclick = async () => {
      try {
        await api("/api/auth/request-otp", { method: "POST", body: { phone: pendingPhone } });
        toast("קוד חדש נשלח");
      } catch (err) { toast(err.message); }
    };

    modal.querySelector("#verifyBtn").onclick = async (e) => {
      const code = modal.querySelector("#codeInput").value;
      const name = modal.querySelector("#nameInput").value;
      if (!code) return toast("חסר קוד");
      e.target.disabled = true;
      try {
        const body = { phone: pendingPhone, code };
        if (name) body.name = name;
        const res = await api("/api/auth/verify-otp", { method: "POST", body });
        Auth.set(res.token, res.user);
        toast("ברוכה הבאה!");
        modal.classList.remove("show");
        if (onSuccess) onSuccess(res.user);
        else location.reload();
      } catch (err) {
        if (err.message.includes("שם להרשמה")) {
          modal.querySelector("#nameField").style.display = "block";
          modal.querySelector("#nameInput").focus();
          toast("הרשמה ראשונה — אנא הזיני שם");
        } else {
          toast(err.message);
        }
      } finally {
        e.target.disabled = false;
      }
    };
  }
  modal.classList.add("show");
}

// ---------- Bottom nav ----------
function renderBottomNav(active) {
  const nav = document.createElement("nav");
  nav.className = "bottom-nav";
  const items = [
    { href: "/",          icon: "🏠", label: "בית",        key: "home" },
    { href: "/search.html", icon: "🔍", label: "חיפוש",   key: "search" },
    { href: "/upload.html", icon: "➕", label: "העלאה",   key: "upload" },
    { href: "/favorites.html", icon: "❤️", label: "מועדפים", key: "favorites" },
    { href: "/profile.html", icon: "👤", label: "אני",     key: "profile" },
  ];
  nav.innerHTML = items.map(i =>
    `<a href="${i.href}" class="${i.key === active ? "active" : ""}">
      <span class="nav-icon">${i.icon}</span>
      <span>${i.label}</span>
    </a>`
  ).join("");
  document.body.appendChild(nav);
  document.body.appendChild(Object.assign(document.createElement("div"), { className: "bottom-nav-spacer" }));
}

// ---------- Card renderer ----------
function itemCard(item) {
  const photo = item.photos?.[0] || "/placeholder.png";
  const sold = item.status === "sold";
  return `
    <div class="card" onclick="location.href='/item.html?id=${item.id}'">
      <div class="card-img" style="background-image:url('${photo}')">
        ${sold ? '<div class="badge-sold">נמכר</div>' : ''}
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-price">${formatPrice(item.price)}</div>
        <div class="card-meta">
          <span>${item.brand || ""}</span>
          <span>${item.size ? "מידה " + item.size : ""}</span>
        </div>
      </div>
    </div>
  `;
}
