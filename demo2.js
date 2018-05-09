let Koa = require('koa')
let fs = require('fs')
let app = new Koa()

const PORT = 1399

app.use(async (ctx) => {
  ctx.body = JSON.stringify(ctx)
  let url = ctx.url
  let request = ctx.request
  let reqQuery = ctx.query
  let reqQueryString = ctx.querystring

  // ctx 的 response.type 默认为text/plain
  if (url === '/' && ctx.method === 'GET') {
    ctx.response.type = 'html'
    ctx.body = fs.createReadStream('./demo.html')
  } else if (ctx.url === '/zengtaosb' && ctx.method === 'POST') {
    ctx.response.type = 'json'
    ctx.body = {
      data: {
        name: 'zengtao',
        label: 'sb'
      },
      resCode: 200
    }
  } else {
    ctx.body = '<h1>404</h1>'
  }
})

app.listen(PORT, () => {
  console.info(`[demo] server is running at localhost:${PORT}`)
})
