const { METHODS } = require('http')
const { pathToRegexp, match } = require('path-to-regexp')
const log = require('debug')('koa-switch')

METHODS.forEach(method => module.exports[method.toLowerCase()] = create(method))

function create(method) {
  return function(path, fn){
    const pathMatcher = match(path, { decode: decodeURIComponent })
    log('%s %s -> %s', method || 'ALL', path, re)

    const createRoute = function(routeFunc){
      return function (ctx, next){
        if (!methodMatcher(ctx, method)) return next() // method doesn't match
        const matchData = pathMatcher(ctx.path)
        if (matchData) {
          const { params: args } = matchData
          ctx.routePath = path
          log('%s %s matches %s %j', ctx.method, path, ctx.path, args)
          return Promise.resolve(routeFunc(ctx, args, next))
        }
        return next() // path doesn't match
      }
    }
    if (fn) return createRoute(fn)
    else return createRoute
  }
}

function methodMatcher(ctx, method) {
  if (!method) return true
  if (ctx.method === method) return true
  if (method === 'GET' && ctx.method === 'HEAD') return true
  return false
}
