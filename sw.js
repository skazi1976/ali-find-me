// Dev mode - no caching
self.addEventListener('install', e => {
  self.skipWaiting();
  caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
});
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
  caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
});
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
