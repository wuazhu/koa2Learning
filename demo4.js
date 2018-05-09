let Koa = require('koa')
let fs = require('fs')
let path = require('path')
let bodyparser = require('koa-bodyparser')()
let app = new Koa()
const PORT = 1399


app.use(async (ctx) => {
  ctx.body = JSON.stringify(ctx)
  let url = ctx.url
  const str = 'a/b/\3'
  console.log(str.split(path.sep))
  // ctx 的 response.type 默认为text/plain
  ctx.response.type = 'html'
  if (url === '/' && ctx.method === 'GET') {
    ctx.body = fs.createReadStream(path.resolve('./pages/index.html'))
  } else if (ctx.url === '/todo' && ctx.method === 'GET') {
    ctx.body = fs.createReadStream(path.resolve('./pages/todo.html'))
  } else if (ctx.url === '/404' && ctx.method === 'GET'){
    ctx.body = fs.createReadStream(path.resolve('./pages/404.html'))
  } else {
    ctx.body = fs.createReadStream(path.resolve('./pages/404.html'))
  }
})

app.listen(PORT, () => {
  console.info(`[demo] server is running at localhost:${PORT}`)
})
