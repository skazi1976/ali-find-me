const CACHE_NAME = 'ali-findme-v32';

// Install: skip waiting immediately, DON'T cache anything upfront
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Activate: delete ALL old caches + take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: ALWAYS network-first, cache as backup only
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API calls, analytics, external: network only
  if (!url.origin.includes('alifindme') && !url.origin.includes('github.io')) {
    return;
  }

  // Everything: network-first
  event.respondWith(
    fetch(event.request).then(resp => {
      // Cache successful responses for offline fallback
      if (resp.status === 200 && event.request.method === 'GET') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return resp;
    }).catch(() => {
      // Offline: try cache
      return caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
