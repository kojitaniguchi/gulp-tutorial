// react関連-----------------------------
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'

// Container
import AppContainer from './components/serverAppContainer.jsx'

// Store
import { store, sagaMiddleware, rootSaga } from './../assets/store/store.jsx'
sagaMiddleware.run(rootSaga)

// expressでFetchAPIを使うため-----------
import "isomorphic-fetch"
import promise from 'es6-promise'
promise.polyfill()

// dotenv--------------------------------
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.API_KEY
const cxKey = process.env.CX_KEY

// express関連---------------------------
import express from 'express'
import path from 'path'
import webPush from 'web-push'
const app = express()

app.use(express.static('dist/client/'))

import Html from './Html.jsx'

app.get('/', (req, res) => {
  res.send(
        ReactDOMServer.renderToStaticMarkup(
            <Html
                markup={ReactDOMServer.renderToString(
                  <Provider store={store}>
                    <AppContainer />
                  </Provider>
                )}
            />
        )
    )
})


app.post('/push/post', (req, res) => {
  const GCM_API_KEY = process.env.GCM_API_KEY
  webPush.setGCMAPIKey(GCM_API_KEY)

  const { headers, method, url } = req
  let body = []
  req.on('error', (err) => {
    console.error(err)
  }).on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    body = JSON.parse(body.toString())
    console.log(body.endpoint)

    const pushSubscription = {
      endpoint: body.endpoint,
      keys: {
        auth: body.auth,
        p256dh: body.p256dh
      }
    }

    const payload = {
      title: '和田どん',
      message: 'スクール到来',
      icon: 'https://kojitaniguchi.github.io/react_redux/img/neko.jpg',
      tag: 'push7'
    }
    const bufferPayload = Buffer.from(JSON.stringify(payload))

    const options = {
      headers : {'Content-Type' : 'application/json' }
    }

    webPush.sendNotification(pushSubscription, bufferPayload, options)
    .then((result) => {
      console.info('Sucess!', result)
    })
    .catch((err) => {
      console.log('fail', err)
    })
  })
})

app.get('/image/:keyword', (req, res, next) => {
  const keyword = encodeURIComponent(req.params.keyword)
  const URL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&searchType=image&q=` + keyword
  fetch(URL)
    .then(parseJson)
    .then(getSrc)

  function parseJson(res) {
    let json = res.json()
    return json
  }
  function getSrc(json) {
    const src = json["items"][1]["link"]
    res.json({ "data" : src })
  }
})

// start listen
app.listen(process.env.PORT || 5000, () => {
  console.log('SSR app listening on port 5000!')
})
