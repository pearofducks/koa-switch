const _ = require('.')
const Koa = require('koa')
const app = new Koa()
const log = require('debug')('example')

app.use(_.get('/path/params/:foo/:bar', (ctx, { foo, bar }) => {
  log("foo is", foo, "and bar is", bar)
  ctx.status = 204
}))
app.use(_.get('/optional/params/:foo*/:bar', (ctx, params) => ctx.status = 204))
app.use(_.get('/unnamed/params/:foo/(.*)', (ctx, params) => ctx.status = 204))

app.listen(8080, () => console.log("Listening on 8080"))
