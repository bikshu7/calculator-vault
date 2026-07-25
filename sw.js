const CACHE_NAME = "calculator-vault-v1";

const urlsToCache = [
  "/calculator-vault/",
  "/calculator-vault/index.html",
  "/calculator-vault/manifest.json",
  "/calculator-vault/icon-192.png",
  "/calculator-vault/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
