import webpack from "webpack";

export default (app) => {
  const webpackConfig = require("../webpack/ssr.config");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackBuild = webpack(webpackConfig);
  const configDev = {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    port: 5000,
    noInfo: true,
  };

  app.use(webpackDevMiddleware(webpackBuild, configDev));
  app.use(webpackHotMiddleware(webpackBuild, { path: "/__webpack_hmr" }));
};
