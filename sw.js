cacheName='tam-v9';
const URLS = [
  './',
  "./admin_en.html",
  "./admin_fr.html",
  './en.html',
  "./entext.js",
  "./fr.html",
  "./frtext.js",
  "./fullreport.html",
  './functions.js',
  './index.html',
  './intro_en.html',
  './intro_fr.html',
  "./logo.png",
  "./logofr.png",
  "./logo150.png",
  "./logo512.png",
  "./manifest.json",
  './style.css',
  './sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(URLS);
  })());
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
      fetch(e.request).catch(function() {
          return caches.match(e.request,{'ignoreSearch':true})
      })
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      caches.delete(key);
    }))
  }));
});
