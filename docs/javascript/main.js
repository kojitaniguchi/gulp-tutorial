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
             // getKey()の戻り値はArrayBuffer型,Uint8Array型に変換してBase64URLエンコードして文字列に変換
             // subscription.getKey()の引数には鍵の種類を指定
            // 公開鍵
            let rawKey = subscription.getKey ? subscription.getKey('p256dh') : ''
            let publicKey = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : ''
            console.log('User PublicKey is:' + publicKey)

             // 鍵生成のための乱数
             let rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : ''
             let auth = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : ''
             console.log('User Auth is:' + auth)

             // エンドポイント
             let endpoint = subscription.endpoint
             console.log('GCM EndPoint is:' + endpoint )
           })
           .catch(console.error.bind(console))
}
//
// window.addEventListener('load', async () => {
//   navigator.serviceWorker.register('./serviceworker.js');
//   var sub = await getsubscription();
//   if (!sub) {
//     // ブラウザに通知許可を要求する
//     var permission = await Notification.requestPermission();
//     new Notification('WebPushの設定をしました');
//     if (permission === 'denied') {
//       return alert('ブラウザの通知設定をONにしてください');
//     } else {
//       sub = await initSubscribe();
//     }
//   }
//   console.log(sub);
// });
