import express from 'express'
import Router from './src/router/sondaRouter.js'
import config from './config.js'

const PORT = config.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', new Router().start())

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
)
app.on('Error', error => console.log(`Server error: ${error}`))
