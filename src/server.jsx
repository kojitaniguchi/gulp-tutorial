import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppContainer from './containers/AppContainer'

const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div className="content">
          <AppContainer />
        </div>
        <script src="bundle.js" />
      </div>
    )
  )
})

get.app('/image', (req, res) => {
  
})



// start listen
app.listen(3000, () => {
  console.log('SSR app listening on port 3000!')
})
