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
             return registration.pushManager.subscribe({userVisibleOnly: true})
           })
           .then((subscription) => {
             // pushSubscriptionの詳細はsubscribeが終了してから

             // 公開鍵
             let rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : ''
             let auth = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : ''
             console.log('User Auth is:' + auth)

             // 鍵生成のための乱数
             let rawKey = subscription.getKey ? subscription.getKey('p256dh') : ''
             let publicKey = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : ''
             console.log('User PublicKey is:' + publicKey)

             // エンドポイント
             let endpoint = subscription.endpoint
             console.log('GCM EndPoint is:' + endpoint )
           })
           .catch(console.error.bind(console))
}
