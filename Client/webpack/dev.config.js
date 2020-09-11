const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");

// Bundled files dir.
const pathResolve = (route) => path.resolve(__dirname, route);

const PORT = process.env.CLIENT_PORT || 8080;

module.exports = merge(baseConfig, {
  devServer: {
    port: PORT,
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    publicPath: "/",
    historyApiFallback: true, // save history routes
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
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
