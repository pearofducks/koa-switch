const _ = require('.')
const Koa = require('koa')
const app = new Koa()
const log = require('debug')('example')

app.use(_.get('/path/params/:foo/:bar', (_, params) => log(params)))
app.use(_.get('/optional/params/:foo*/:bar', (_, params) => log(params)))
app.use(_.get('/unnamed/params/:foo/(.*)', (_, params) => log(params)))

app.listen(8080, () => console.log("Listening on 8080"))
