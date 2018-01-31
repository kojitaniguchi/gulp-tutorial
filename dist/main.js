'use strict'

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js', {scope: './index.html'})
           .then((registration) => {
             console.log(`ServiceWorker registration successful with scope: ${registration.scope}`)
           })
           .catch(console.error.bind(console))
}
