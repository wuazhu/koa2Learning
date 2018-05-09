let Koa = require('koa')
let fs = require('fs')
let app = new Koa()

const PORT = 1399

app.use(async (ctx) => {
  ctx.body = JSON.stringify(ctx)
  let url = ctx.url
  let request = ctx.request
  // query,querystring 可以从 ctx 上下文对象直接获取也可以从 ctx.request 中获取
  let reqQuery = ctx.request.query
  let reqQuery = ctx.query
  let reqQueryString = ctx.querystring
  ctx.body = {
    url,
    request,
    reqQuery,
    reqQueryString
  }
})

app.listen(PORT, () => {
  console.info(`[demo] server is running at localhost:${PORT}`)
})
