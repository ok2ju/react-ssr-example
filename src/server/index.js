import path from 'path'
import express from 'express'
import ssrMiddleware from './ssrMiddleware'

const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '..', 'views'))

app
  .use('/static', express.static(path.resolve(__dirname, '..', '..', 'public', 'static')))
  .use('/build', express.static(path.resolve(__dirname, '..', '..', 'public', 'build')))
  .use(ssrMiddleware)

app.listen(port, () => {
  console.info(`Server started at ${port} port`)
})
