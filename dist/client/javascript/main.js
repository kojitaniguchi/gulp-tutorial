'use strict'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
           .then((registration) => {
             console.log(`ServiceWorker registration successful with scope: ${registration.scope}`)
           })
// readyでswがregisterされてactivatedになるまで待機する
  navigator.serviceWorker.ready
           .then((registration) => {
             // ServiceWorkerRegistration インターフェースの pushManager
             return registration.pushManager.getSubscription()
           })
           .then((subscription) => {
             if (subscription !== null) {
                console.log('subscription was registered!')
             } else {
                navigator.serviceWorker.ready
                  .then((registration) => {
                     return registration.pushManager.subscribe({userVisibleOnly: true})
                  })
                  .then((subscription) => {
                     // getKey()の戻り値はArrayBuffer型,Uint8Array型に変換してBase64URLエンコードして文字列に変換
                     // subscription.getKey()の引数には鍵の種類を指定
                     // 公開鍵
                     let rawKey = subscription.getKey ? subscription.getKey('p256dh') : ''
                     let publicKey = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : ''
                     // 鍵生成のための乱数
                     let rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : ''
                     let auth = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : ''
                     // エンドポイント
                     let endpoint = subscription.endpoint
                     const obj = {
                        p256dh: publicKey,
                        auth: auth,
                        endpoint: endpoint
                      }
                     const body = JSON.stringify(obj)
                     const method = "POST"
                     const headers = {'Content-Type': 'application/json'}
                     console.log('check body!' + body)
                     fetch("/create/subscription", {method, headers, body})
                  })
              }
             })
             .catch(console.error.bind(console))
}
