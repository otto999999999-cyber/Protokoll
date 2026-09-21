/* Service Worker – Ablauf-Assistent der Wohnraumverwaltung
   Cache-first mit Netzwerk-Fallback. Bei jedem Release CACHE-Namen erhöhen,
   damit die neue Version sicher ausgeliefert wird. */
const CACHE = 'ablauf-assistent-20260921b';
const ASSETS = [
  './',
  'index.html',
  'chatbot.html',
  'daten.js',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // nichts Fremdes cachen

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (cached) {
      const network = fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline: bei Navigationen die App-Seite aus dem Cache liefern
        if (req.mode === 'navigate') return caches.match('chatbot.html', { ignoreSearch: true });
        return cached;
      });
      return cached || network;
    })
  );
});
