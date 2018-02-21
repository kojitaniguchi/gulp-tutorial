'use strict';

const CACHE_NAME = 'cache-v1'
const urlToCache = [
  'index.html',
  './main.js',
  './sw.js',
  './manifest.json',
  './javascript/bundle.js',
  './img/neko.jpg'
]

self.addEventListener('install', (event) => {
  console.log('start install')
  // waitUntil()の内部のコードが成功裡に実行されるまで、Service Workerがインストールされない
  event.waitUntil(
  // open生成されたキャッシュのためにpromiseを返す
    caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlToCache)
          })
  )
})

self.addEventListener('active', (event) => {
  console.log('serviceWorker is active now!')
  var cacheWhiteList = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(console.log(c)).then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  // onfetchイベントハンドラはfetchイベントをlistenし、発火すると、respondWithは制御されたページにpromiseを返す。
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
