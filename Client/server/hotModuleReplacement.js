import webpack from "webpack";

export default (app) => {
  const webpackConfig = require("../webpack/ssr.config");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackBuild = webpack(webpackConfig);
  const configDev = {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(webpackBuild, configDev));
  app.use(
    webpackHotMiddleware(webpackBuild, {
      log: console.log,
      path: "/__webpack_hmr",
    })
  );
};
