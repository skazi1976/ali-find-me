# Session Backup - 2026-03-24 (Part B) - Major Upgrade

## Summary
Major upgrade to Ali Find Me search engine + HaCatalog + Tawk.to chat + Brazil fixes.

## Ali Find Me - Search Engine Upgrades

### Color Scheme
- Changed from purple (#6C5CE7) to warm orange (#FF6B00)
- All CSS variables, HTML files, JS, manifests updated
- Dark mode preserved

### Hebrew Gender-Neutral Text
- All i18n strings changed from feminine to neutral plural
- "מצאי" → "מצאו", "חפשי" → "חפשו", "את מחפשת" → "אתם מחפשים"
- Fixed in app.js i18n object (was overriding HTML)
- Fixed across all Hebrew HTML/blog pages

### New Features
1. **Free Shipping Filter** - toggle button, added to all 8 language pages
2. **Quick Price Filters** - buttons: Under ₪50, ₪50-200, ₪200+
3. **Category Dropdown** - filter by category
4. **Deals Toggle** - show only deals
5. **Commission-based Sort** - `boostByCommission()` function, higher commission products ranked first (hidden from user)
6. **Related Searches** - client-side generation with language-specific modifiers
7. **Load More Button** - with loading animation (pulse + spinner)
8. **Hebrew Title Translation** - via Claude Haiku 3.5 + KV cache (background, non-blocking)

### Search Improvements
- **pageSize**: 20 → 50 in Worker API (frontend shows 20 at a time)
- **Expand threshold**: 10 → 20 (search broadens when <20 results)
- **Broader keyword search**: removes last word to find more results
- **Smart category search**: pet queries use product type as mustContain
- **Fallback keywords**: retries with simpler terms

### Mobile Fix
- Badges (hot-deal, top-pick) overlap fixed with max-width: 45%, overflow: hidden
- Smaller font on mobile (@media max-width: 480px)

### Service Worker Cache Busting
- v42 → v43 → v44 (auto-refresh for all users)
- Network-first strategy with cache fallback

## HaCatalog Updates

### Domain
- **hacatalog.com** purchased (Namecheap, $25.36, 2 years)
- WHOIS Privacy: FREE FOREVER (anonymous)
- DNS: 4 A records + CNAME → skazi1976.github.io
- HTTPS enforced via GitHub Pages

### Analytics Dashboard
- **URL**: hacatalog.com/admin.html (password: admin123)
- **Worker**: catalog-analytics.ohadf1976.workers.dev
- Tracks: pageviews, searches, clicks, WhatsApp shares, PWA installs
- Stats: 75 events, 68 views, 4 clicks, 2 PWA installs

### WhatsApp Viral Sharing
- Floating WhatsApp button (bottom-left)
- Auto-popup after 45 seconds
- Per-product share buttons
- Pre-written Hebrew message

### Tawk.to Live Chat
- Widget ID: 69c1918cffb4f81c353b4c5a/1jke213lf
- 3 Departments: XUJO (1,318 products), TOP-B111 (876), ZAD2025 (513)
- First seller invited: jiehu7666@gmail.com (Yang, online)
- Desktop app + mobile app for sellers

## Brazil Landing Page
- Fixed affiliate links (/s/ → /e/ short links)
- Confirmed working from Brazil VPN with affiliate tracking
- Links use afSmartRedirect=y for auto-country detection

## Marketing
- Telegram promo image (Gemini Nano Banana) - Hebrew text perfect
- Facebook sponsored ad text (primary + headline + description)
- WhatsApp catalog promotion texts
- Facebook targeting tip: Interest "Telegram Messenger" + Engaged Shoppers

## FlyLink Discussion
- FlyLink has no API/embed checkout
- Works only via payment links
- User earns commission on all sales through FlyLink
- Plan: add FlyLink links to catalog products

## Worker Deployments
- worker_alifindme.js: Haiku translation, KV cache, 50 results, smart pet search, broader keyword expansion
- Cache key: trending-v6

## Git Commits (ali-find-me)
- `c72b75e` (dev) - Orange theme + gender-neutral Hebrew + filters + more results
- `4566c17` (dev) - Fix mobile badges overlap
- `6f39b6a` (main) - Merge dev: orange theme + filters + SW v43
- `ccf4624` (main) - Fix mobile badge overlap + SW v44

## Git Commits (my-catalog)
- `675f723` - Add admin analytics dashboard + search tracking
- `e0e5888` - Add WhatsApp viral sharing feature
- `e7b08fd` - Track PWA installs + WhatsApp shares
- `a2abda2` - Add CNAME for hacatalog.com custom domain

## Dev Workflow
- **ali-find-me** (main) = production - don't touch directly
- **ali-find-me-dev** (worktree at D:\yupoo\ali-find-me-dev\) = test here first
- Worker changes deploy via: `cd pinterest-bot/cloudflare-worker && python deploy_alifindme.py deploy`
- Frontend: merge dev-improvements → main, bump SW version, git push
- Local dev server: `cd ali-find-me-dev && python serve.py` (port 3500, no-cache headers)

## Infrastructure
- **Frontend**: GitHub Pages → alifindme.com
- **Worker**: ali-findme-api.ohadf1976.workers.dev
- **AI**: Claude Opus (search/image/chat) + Haiku (title translation)
- **Cache**: CF Cache API (trending 1hr) + KV (translations 30 days, analytics)
- **Catalog**: GitHub Pages → hacatalog.com
- **Chat**: Tawk.to (3 departments)
- **Domain**: hacatalog.com (Namecheap, WHOIS privacy)

## Facebook Ads Stats
- 4 campaigns, ~43,000 clicks, ₪400 spent
- Brazil: 22,249 clicks (links were broken, now fixed)
- Israel: 21,212 clicks (need conversion optimization)
