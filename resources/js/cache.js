// cache.js

// Open a cache named 'my-cache'
const cacheName = 'my-cache';

// URLs to be cached
const urlsToCache = [
  'https://nayem567.github.io/PSD-project-1/resources/css/img/contact-bg.webp',
  'https://nayem567.github.io/PSD-project-1/resources/css/img/testimonial-bg.webp',
  'https://nayem567.github.io/PSD-project-1/resources/css/img/portfolio-bg.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/logo.webp',
  'https://nayem567.github.io/PSD-project-1/resources/css/img/skill-bg.webp',
  'https://nayem567.github.io/PSD-project-1/vendors/js/mixitup.min.js',
  'https://nayem567.github.io/PSD-project-1/resources/css/img/team-bg.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/2.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/4.webp',
  'https://nayem567.github.io/PSD-project-1/resources/css/style.css',
  'https://nayem567.github.io/PSD-project-1/vendors/js/jquery.waypoints.min.js',
  'https://nayem567.github.io/PSD-project-1/resources/img/gears.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/gears.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/Rocket.webp',
  'https://nayem567.github.io/PSD-project-1/resources/img/pencil.webp',
  'https://nayem567.github.io/PSD-project-1/vendors/css/normalize.css',
  'https://nayem567.github.io/PSD-project-1/vendors/css/grid.css',
  'https://nayem567.github.io/PSD-project-1/resources/img/Flag.webp',
  'https://nayem567.github.io/PSD-project-1/resources/css/responsive.css',
  'https://nayem567.github.io/PSD-project-1/vendors/js/animated-circle.js',
  'https://nayem567.github.io/PSD-project-1/resources/js/main.js',
  'https://nayem567.github.io/PSD-project-1/vendors/css/animated-circle.css',
  // Add more URLs if needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      // Cache resources during service worker installation
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached response if available
      return response || fetch(event.request);
    })
  );
});
