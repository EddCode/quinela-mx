const path = require("path");
const webpack = require("webpack");

const API_HOST = process.env.API || "localhost";
const API_PORT = process.env.PORT || 3000;

module.exports = {
  devtool: "eval-source-map",
  entry: {
    index: path.resolve(__dirname, "../src/index.js"),
    vendor: ["react"],
  },
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
