const CACHE_NAME = "atrium-shell-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/css/styles.css",
  "./assets/icons/favicon.svg",
  "./assets/icons/atrium-icon-192.svg",
  "./assets/icons/atrium-icon-512.svg",
  "./assets/icons/atrium-maskable.svg",
];

async function putInCache(request, response) {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function isSameOrigin(requestUrl) {
  return new URL(requestUrl).origin === self.location.origin;
}

async function networkFirst(request, fallbackKey = request) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) {
      await putInCache(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(fallbackKey);
    return cached || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (!isSameOrigin(request.url)) return;

  const requestUrl = new URL(request.url);
  const isStaticAsset = requestUrl.pathname.includes("/assets/") || /\.(css|js|svg|png|json)$/.test(requestUrl.pathname);

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "./index.html"));
    return;
  }

  if (isStaticAsset) {
    event.respondWith(networkFirst(request));
  }
});
