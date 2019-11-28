# koa-switch

an updated (and improved) alternative to koa-route

## install

```console
npm install --save koa-switch
```

```console
yarn add koa-switch
```

## use

See `example.js`.

## key differences

- Full support for named path params
  - Rather than path-params being exposed as an array of arguments to the callback (e.g. `(ctx, foo, bar, next) => {}`), they're now exposed as one object with parameters correlating to the specified path-params (e.g. `(ctx, params, next) => {}`)
  - Documentation for path options can be found at [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- `this` is unavailable in the route callback
  - This seems like it was a legacy/compatibility feature, as the first argument of the callback function was the same as `this` anyhow
- `del` is not available on `exports`
