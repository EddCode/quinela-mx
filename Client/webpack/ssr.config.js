const { merge } = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestWebpackPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

const pathResolve = (route) => path.resolve(__dirname, route);

module.exports = merge(baseConfig, {
  devtool: "eval-source-map",
  mode: "development",
  entry: {
    main: [
      path.resolve(__dirname, "../src/index.js"),
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false",
    ],
  },
  resolve: {
    alias: {
      "@pages": pathResolve("../src/pages"),
      "@components": pathResolve("../src/components"),
      "@styledComponents": pathResolve("../src/styled/Components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "index.html",
      title: "DragonBall Store",
      favicon: "public/favicon.ico",
    }),
    new ManifestWebpackPlugin({
      publicPath: "/public",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
