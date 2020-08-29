const webpack = require('webpack')
const {merge} = require('webpack-merge')
const baseConfig = require('./base.config.js')
const path = require('path')

const PORT = process.env.CLIENT_PORT || 8080;

const DIR_BASE = path.join(__dirname, "../build");

module.exports = merge(baseConfig, {
   devServer: {
    host: "0.0.0.0",
    port: PORT,
    hot: true,
    contentBase: DIR_BASE,
    publicPath: "/",
    historyApiFallback: true, // save history routes
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
