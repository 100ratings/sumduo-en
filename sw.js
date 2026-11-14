const CACHE_NAME = 'sumduo-en-v3';
const CACHE_PREFIX = 'sumduo-en-';
const ASSETS = ['./', './index.html', './style.css', './app.js', './manifest.webmanifest', './calc-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key !== CACHE_NAME && (key.startsWith(CACHE_PREFIX) || key === 'calculadora-v1'))
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
