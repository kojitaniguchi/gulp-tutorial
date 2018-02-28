'use strict'

const CACHE_NAME = 'cache-v2'
const urlToCache = [
  './',
  './sw.js',
  './manifest.json',
  './javascript/main.js',
  './javascript/bundle.js',
  './img/neko.jpg'
]
// selfでServiceWorkerGlobalScopeを参照
self.addEventListener('install', (event) => {
  console.info('install', event)
  // waitUntil()の内部のコードが解決されるまで、Service Workerがインストールされない
  event.waitUntil(
  // open生成されたキャッシュのためにpromiseを返す
    caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlToCache)
          }),
    self.skipWaiting()
  )
})

self.addEventListener('activate', (event) => {
    console.info('activate', event)
    var cacheWhitelist = [CACHE_NAME]
    event.waitUntil(
        caches.keys().then((cacheNames) => {
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

self.addEventListener('fetch', (event) => {
  console.info('fetch', event)
  // onfetchイベントハンドラはFetchEventをlistenし、発火すると、respondWithはコントロールされたページにpromiseを返す。
  event.respondWith(
  // このpromiseはCacheオブジェクト内で最初にマッチしたURLリクエストで解決する。
    caches.match(event.request)
          .then((response) => {
            if (response) {
              return response
            }
            console.log('fetch network')
            // マッチするものが見つからない場合、ネットワークからレスポンスを取得する。
            // responseとrequestはstreamなのでcloneする

            return fetch(event.request)
              .then((response) => {
                console.log(response)
                return response
              })
          })
  )
})

// ServiceWorkerGlobalScope.onpush
self.addEventListener('push', (event) => {
  console.info('push', event)
  // Push API の PushMessageData インターフェース
  // messageをpayloadしている場合はevent.dataにデータが入っている
  const payload = event.data ? event.data.json() : { error: 'error' }
  const title = payload.title
  const message = payload.message
  const icon = payload.icon
  const tag = payload.tag

  event.waitUntil(
    // showNotification() creates a notification on an active service worker
    self.registration.showNotification(title, {
      body: message,
      icon: icon,
      tag: tag
    }),
  )
})

self.addEventListener('notificationclick', (event) => {
  console.info('notificationclick', event)
  event.notification.close()
})
