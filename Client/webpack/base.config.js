const path = require("path");
const webpack = require("webpack");

// Bundled files dir.
const pathResolve = (route) => path.resolve(__dirname, route);

const API_HOST = process.env.API || "localhost";
const API_PORT = process.env.PORT || 3000;
const PORT = process.env.CLIENT_PORT || 8080;

module.exports = {
  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "../src/index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg)/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
            publicPath: "assets",
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || "development",
      API: process.env.API || `http://${API_HOST}:${API_PORT}/api`,
    }),
  ],
};
