// react関連-----------------------------
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppContainer from './containers/AppContainer'

// express関連---------------------------
import express from 'express'
import http from 'http'
// import fetch from 'whatwg-fetch'
import request from 'superagent'
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
        <script src="main.js" />
        <script src="bundle.js" />
      </div>
    )
  )
})

app.get('/image/:keyword', (req, res, next) => {
  const  base_url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&searchType=image&q=`
  const  keyword = req.params.keyword
  const  URL = encodeURIComponent(base_url + keyword)

  request.get(URL)
    .end((err, res) => {
      if (res.ok) {
        console.log(res.status)
        const json = res.json()
        const data = json["items"][1]["link"]
        return { "data": data }
      } else {
        console.log('error')
      }
    })
})
  // fetch(uri)
  //   .thne(parseJson)
  //   .then(getData)
  //   .then(returnJson)
  //
  // function parsejson(res) {
  //   return res.json()
  // }
  //
  // function getData(json) {
  //   const data = json["items"][1]["link"]
  //   return data
  // }
  //
  // function returnJson(data) {
  //   return {"data" : data }
  // }



// start listen
app.listen(3000, () => {
  console.log('SSR app listening on port 3000!')
})
