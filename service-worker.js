const CACHE_NAME = "search-app-cache-v1";
const urlsToCache = [
  "/my-search-app/",
  "/my-search-app/index.html",
  "/my-search-app/script.js",
  "/my-search-app/manifest.json",
  "/my-search-app/icon-192.png",
  "/my-search-app/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
