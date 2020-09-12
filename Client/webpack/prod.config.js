const { merge } = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestWebpackPlugin = require("webpack-manifest-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const pathResolve = (route) => path.resolve(__dirname, route);

module.exports = merge(baseConfig, {
  devtool: "none",
  output: {
    filename: "js/[name].[hash].js",
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
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendros: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          priority: 1,
          filename: "js/[name].[hash].js",
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              (chunk) =>
                chunk.name !== "vendor" && /[\\/]node_modules[\\/]/.test(name)
            );
          },
        },
      },
    },
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
  ],
});
