const CACHE_NAME = 'siva-portfolio-v1';
const ASSETS = [
  './',
  './index.html',
  './profile.jpg',
  './RESUME SIVACHANDIRAN.pdf',
  './projects/healbot.png',
  './projects/heritiq.png',
  './projects/lexi-ai.png',
  './projects/rag-system.png',
  './projects/text-to-sql.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
