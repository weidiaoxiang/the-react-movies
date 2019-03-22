const webpack = require("webpack");
const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const Jarvis = require("webpack-jarvis");
const configConstants = require("./constants");

const { DEVTOOL = "cheap-eval-module-source-map" } = process.env;

module.exports = {
  cache: true,
  devtool: DEVTOOL,
  devServer: {
    contentBase: configConstants.DIST_DIR,
    hot: true,
    clientLogLevel: "info",
    stats: "errors-only",
    historyApiFallback: true,
    noInfo: false,
    headers: { "Access-Control-Allow-Origin": "*" },
  },

  entry: [
    "@babel/polyfill",
    "react-hot-loader/patch",
    //"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true&noInfo=true",
    "./index.js",
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: configConstants.SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss|css$/,
        include: [path.join(configConstants.SRC_DIR, "scss")],
        use: [
          { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: path.join(configConstants.ABSOLUTE_BASE, "tmp"),
      manifest: require(path.join(configConstants.ABSOLUTE_BASE, "tmp", "vendor-manifest.json")),
      name: "./vendor.dll.js",
    }),
    new CaseSensitivePathsPlugin(),
    new Jarvis({
      port: 1337, // optional: set a port
    }),
  ],
};
