const { merge } = require('webpack-merge')
const baseConfig = require('./base.config.js')
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const DIR_BASE = path.join(__dirname, "build");

module.exports = merge(baseConfig, {
  output: {
    path: DIR_BASE,
    publicPath: "/",
    filename: "[name].js",
  },
  module: {
    rules: [
     {
        test: /\.html/,
        use: ["html-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      title: "DragonBall Store",
      favicon: "./public/favicon.ico",
    })
  ]
})
