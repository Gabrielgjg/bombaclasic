// Bio-Bomba Clásica: funciona sin internet una vez abierta la primera vez.
// Si cambias index.html, sube el número de versión para que todos reciban la actualización.
const CACHE = 'bbclasica-v5';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                       // los envíos a Sheets pasan directo
  if (new URL(req.url).hostname.includes('script.google')) return;
  if (req.mode === 'navigate') {                          // la página: primero internet, si no, la copia guardada
    e.respondWith(fetch(req).then(r => {
      const c = r.clone(); caches.open(CACHE).then(ca => ca.put('./index.html', c)); return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {           // fuentes, íconos, librería QR
    const net = fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
