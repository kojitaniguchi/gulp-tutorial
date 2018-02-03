// react関連-----------------------------
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppContainer from './../client/containers/AppContainer.jsx'

// express関連---------------------------
import express from 'express'

// expressでFetchAPIを使うため-----------
import "isomorphic-fetch"
import promise from 'es6-promise'
promise.polyfill()

// dotenv--------------------------------
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.API_KEY
const cxKey = process.env.CX_KEY

const app = express()


app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div className="content">
          <AppContainer />
        </div>
      </div>
    )
  )
})

app.get('/image/:keyword', (req, res, next) => {
  const keyword = encodeURIComponent(req.params.keyword)
  const URL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&searchType=image&q=` + keyword
  fetch(URL)
    .then(parseJson)
    .then(getSrc)
    .then(returnJson)

  function parseJson(res) {
    let json = res.json()
    return json
  }

  function getSrc(json) {
    const src = json["items"][1]["link"]
    return src
  }

  function returnJson(src) {
    const json = { "data": src }
    res.send(json)
  }

})


/* httpsモジュールを使ったgetリクエスト*/
// import https from 'https'
// https.get(URL, (res) => {
//     let body = ''
//     res.on('data', (chunk) => {
//         body += chunk;
//     })
//     res.on('end', (res) => {
//       console.log('end start', json)
//       res = JSON.parse(body || "null")
//       let src = res["items"][0]["link"]
//       json.data = src
//       console.log('end fin', json)
//     })
//      .on('error', (e) => {
//       console.log(e.message) //エラー時
//      })
//   })
// console.log('before send', json)
// res.send(json)

/* superagentを使ったgetリクエスト*/
// import request from 'superagent'
// request.get(URL)
//   .end((err, res) => {
//     if (res.ok) {
//       console.log(res.status)
//       const json = res.json()
//       const data = json["items"][1]["link"]
//       return { "data": data }
//     } else {
//       console.log('error')
//     }
//   })

// start listen
app.listen(3000, () => {
  console.log('SSR app listening on port 3000!')
})
