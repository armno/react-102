# react-102

Learning React with Egghead.io

```sh
$ npm install -g webpack
$ npm install
$ webpack -w
```

- webpack: is used here to "bundle" our scripts into 1 `bundle.js` file. webpack also takes care of module loading.
- we write react components in CommonJS module. then webpack bundle these modules together and put inside a module loader (in this case, babel loader) so our modules work in the browser.
- in `webpack-config`, we need only to tell which file is the main entry point (main module). webpack will take care of its dependencies and all that. awesome!
- `react-router` is a bit confusing to me (as of now)
- `<Main>` is the outermost component. this one contains `<RouteHandler>` which is like a `<ui-view>`. routes are defined in route-config.
- `mixins`: sharable functions/methods for many components
- `this.getParams().<key>` to get path's named parameters.
- `Profile` component keeps data in its `states` and pass to child components via their `props`
- `propTypes` is used for validating passed properties to a component
