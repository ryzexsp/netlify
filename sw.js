importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/bubbles/bubble1.svg",
  "/bubbles/bubble2.svg",
  "/bubbles/bubble3.svg",
  "/bubbles/bubble4.svg",
  "/bubbles/bubble5.svg",
  "/bubbles/bubble6.svg",
  "/bubbles/bubble7.svg",
  "/bubbles/bubble8.svg",
  "/bubbles/bubble9.svg",
  "/bubbles/bubble10.svg",
  "/bubbles/bubble11.svg",
  "/bubbles/bubble12.svg",
  "/bubbles/bubble13.svg",
  "/bubbles/bubble14.svg",
  "/bubbles/bubble15.svg"
], {
  "cacheId": "lokiom-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
