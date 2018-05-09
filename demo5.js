let Koa = require('koa')
let Router = require('koa-router')

let app = new Koa()
let router = new Router()
const PORT = 1399

router
  .get('/', (ctx, next) => {
    ctx.body = 'hello my website'
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'hello todopage'
  })
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => {
  console.info(`[demo] server is running at localhost:${PORT}`)
})
