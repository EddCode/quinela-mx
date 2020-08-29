import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// App component
import App from '../components/App'

const app = express()

app.use(express.static('static'))

app.use('/', (req, res) => {
  const context ={}
  const app = ReactDom.renderToString(
    <StaticRouter  location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  const indexHtml = path.resolve(__dirname, '../../static/index.html')
  fs.readFile(indexHtml, 'utf8', (err, html) => {
    if(err) {
      console.err(err)
      return res,status(500).send('Some error happend')
    }

    if (context.status === 404) {
            res.status(404);
    }

    return res.send(
      data.replace('<main id="app"></main>', `<main id="app">${app}</main>`)
    )
  })
})

app.listen(5000, ()=> console.log('😎 server runing on port 5000'))
