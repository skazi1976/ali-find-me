const CACHE_NAME = 'ali-findme-v52';

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

// Fetch: network first, cache fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});

// ---------- Web Push (deals channel — same pool as the /c/ landing pages) ----------
self.addEventListener('push', event => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch (e) { d = { body: (event.data && event.data.text && event.data.text()) || '' }; }
  const options = {
    body: d.body || '',
    icon: d.icon || '/icons/icon-192.png',
    badge: d.badge || '/icons/icon-192.png',
    image: d.image,
    tag: d.tag,
    data: { url: d.url || 'https://alifindme.com' },
    dir: 'rtl', lang: 'he', vibrate: [120, 60, 120]
  };
  event.waitUntil(self.registration.showNotification(d.title || 'אלי תמצא לי 🛍️', options));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || 'https://alifindme.com';
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(ws => {
    for (const w of ws) { if ('focus' in w) return w.focus(); }
    if (clients.openWindow) return clients.openWindow(url);
  }));
});
// Keep subscriptions alive (re-subscribe on browser rotation)
self.addEventListener('pushsubscriptionchange', event => {
  event.waitUntil((async () => {
    try {
      const r = await fetch('/api/push/vapid-public'); const j = await r.json(); if (!j.key) return;
      const pad = '='.repeat((4 - j.key.length % 4) % 4); const b64 = (j.key + pad).replace(/-/g, '+').replace(/_/g, '/'); const raw = atob(b64);
      const ak = new Uint8Array(raw.length); for (let i = 0; i < raw.length; i++) ak[i] = raw.charCodeAt(i);
      const sub = await self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: ak });
      await fetch('/api/push/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ endpoint: sub.endpoint, keys: sub.toJSON().keys, product_id: 'engine' }) });
    } catch (e) {}
  })());
});
