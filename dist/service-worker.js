'use strict'

const CACHE_NAME = 'cache-v1'
const urlToCache = [
  './',
]

self.addEventListener('install', (event) => {
  event.waitUntill(
    caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache')

            return cache.addALL(urlToCache)
          })
  )
})

self.addEventListener('active', (event) => {
  var cacheWhitelist = [CACHE_NAME]

  event.waitUntill(
    chches.keys(). then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
