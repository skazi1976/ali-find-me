const CACHE_NAME = 'ali-findme-v17';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/logo.png',
  '/en/index.html',
  '/ar/index.html',
  '/ru/index.html',
  '/es/index.html',
  '/pt/index.html',
  '/tr/index.html',
  '/fr/index.html',
  '/blog/index.html',
  '/blog/aliexpress-shopping-guide-2026.html',
  '/blog/he/tips-kniya-ali-express-2026.html',
];

// Install: cache static assets + force activate immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: delete ALL old caches + take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API calls: network-only
  if (url.hostname.includes('ali-findme-api') || url.hostname.includes('cloudflare')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Google Analytics: always network, never cache
  if (url.hostname.includes('googletagmanager.com') || url.hostname.includes('google-analytics.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Google Fonts: cache-first (they never change)
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return resp;
        });
      })
    );
    return;
  }

  // HTML, CSS, JS: network-first (always get latest version)
  if (event.request.mode === 'navigate' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js') ||
      url.pathname === '/') {
    event.respondWith(
      fetch(event.request).then(resp => {
        if (resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return resp;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Images & other assets: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(resp => {
        if (resp.status === 200 && url.origin === self.location.origin) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return resp;
      });
    }).catch(() => {
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
    })
  );
});
