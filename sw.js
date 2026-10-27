/* Ablauf-Assistent – DEAKTIVIERT (Kill-Switch Service Worker)
   Dieser SW ersetzt den frueheren. Er cached nichts mehr, leert alle alten
   Caches, meldet sich selbst ab und laedt offene Fenster neu – damit auch
   installierte / offline zwischengespeicherte App-Versionen deaktiviert werden. */
self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    try { var keys = await caches.keys(); await Promise.all(keys.map(function (k) { return caches.delete(k); })); } catch (err) {}
    try { await self.registration.unregister(); } catch (err) {}
    try {
      var cs = await self.clients.matchAll({ type: 'window' });
      cs.forEach(function (c) { try { c.navigate(c.url); } catch (err) {} });
    } catch (err) {}
  })());
});
/* Kein fetch-Handler: alle Anfragen gehen direkt ans Netz (Deaktivierungs-Seite). */
