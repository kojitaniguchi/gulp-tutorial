'use strict'

const CACHE_NAME = 'cache-v2'
const urlToCache = [
  './',
  './main.js',
  './sw.js',
  './manifest.json',
  './javascript/bundle.js',
  './img/neko.jpg'
]
// selfでServiceWorkerGlobalScopeを参照
self.addEventListener('install', (event) => {
  console.info('install', event)
  // waitUntil()の内部のコードが成功裡に実行されるまで、Service Workerがインストールされない
  event.waitUntil(
  // open生成されたキャッシュのためにpromiseを返す
    caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlToCache)
          }),
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
            let fetchRequest = event.request.clone()
            return fetch(fetchRequest)
              .then((response) => {
                if(!response || response.status !== 200 || response.type !== 'basic') {
                  return response
                }
                let responseToCache = response.clone()
                caches.opne(CACHE_NAME)
                      .then((cache) => {
                        // cache.putはkey/valueをcacheオブジェクトに追加する
                        cache.put(event.request, responseToCache)
                      })
                return response
              })
          })
  )
})

self.addEventListener('push', (event) => {
  console.info('push', event)
})
