const data = [
  './index.html',
  './style.css',
  './script.js',
  './home.html',
  './home.css',
  './home.js',
  './login.html',
  './login.css',
  './login.js',
  './acc.html',
  './acc.css',
  './acc.js',
  './images/bg.png',
  './images/carrot.jpeg',
  './images/facebook.png',
  './images/meat.jpeg',
  './images/search.png',
  './images/watermelon.jpeg',
  './images/icon/bag16x16.png',
  './images/icon/bag24x24.png',
  './images/icon/bag32x32.png',
  './images/icon/bag64x64.png',
  './images/icon/bag128x128.png',
  './images/icon/bag256x256.png',
  './images/icon/bag512x512.png',
]
self.addEventListener('install', (e) => {
  // console.log("service worker changed");
  // console.log("service worked updated");
  e.waitUntil(
    caches.open('static').then((cache) => {
      return cache.addAll(data);
    }),
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
