const path = require("path");
const webpack = require("webpack");

const API_HOST = process.env.API || "localhost";
const API_PORT = process.env.PORT || 3000;

const DIR_BASE = path.join(__dirname, "../build");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.js"),
    vendors: ["react", "react-dom", "react-router-dom"],
  },
  output: {
    path: DIR_BASE,
    publicPath: "/public",
    filename: "js/[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  watchOptions: {
    ignored: "/node_modules/",
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
            outputPath: "public/",
            publicPath: "/",
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || "development",
      API: process.env.API || `http://localhost:5000/api`,
    }),
  ],
};
