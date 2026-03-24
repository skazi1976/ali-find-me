const CACHE_NAME = 'ali-findme-v38';

// Install: skip waiting + delete ALL old caches immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.skipWaiting())
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

// Fetch: HTML pages = NETWORK ONLY (never serve stale HTML)
// Images/fonts = network-first with cache fallback
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API calls, analytics, external: let browser handle
  if (!url.origin.includes('alifindme') && !url.origin.includes('github.io')) {
    return;
  }

  // HTML pages: ALWAYS fetch from network, never cache
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else (images, CSS, JS): network-first with cache
  event.respondWith(
    fetch(event.request).then(resp => {
      if (resp.status === 200 && event.request.method === 'GET') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return resp;
    }).catch(() => caches.match(event.request))
  );
});
