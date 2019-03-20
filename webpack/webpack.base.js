const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Dotenv = require("dotenv-webpack");
const configConstants = require("./constants");

const {
  NODE_ENV,
  ROOT_URL = "localhost",
  TAG = "1.0.0",
  ENV = "local",
  COMMIT_HASH = "00000000",
  GTM_CONTAINER_ID = "", //add GTM_CONTAINER_ID=<Liberty-specific container ID>
  WEBPACK_ANALYZER,
} = process.env;

const config = {
  context: configConstants.SRC_DIR,
  output: {
    path: configConstants.DIST_DIR,
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        loaders: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            query: {
              es5: false,
              svgo: {
                pretty: true,
                plugins: [{ removeStyleElement: true }],
              },
            },
          },
        ],
      },
      {
        test: /\.woff$/,
        use: "url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]",
      },
      {
        test: /\.woff2$/,
        use: "url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]",
      },
      {
        test: /\.[ot]tf$/,
        use: "url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]",
      },
      {
        test: /\.eot$/,
        use:
          "url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]",
      },
    ],
  },
  resolve: {
    modules: [configConstants.NODE_MODULES_DIR, configConstants.SRC_DIR],
    extensions: [".js", ".jsx", ".scss", ".css"],
    alias: {},
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
      ROOT_URL: JSON.stringify(ROOT_URL),
      THE_REACT_MOVIES: {
        COMMIT_HASH: JSON.stringify(COMMIT_HASH),
        TAG: JSON.stringify(TAG),
        ENV: JSON.stringify(ENV),
        gtmContainerID: JSON.stringify(GTM_CONTAINER_ID),
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(configConstants.PUBLIC_DIR, "index.html"),
      hash: true,
      gtmContainerID: GTM_CONTAINER_ID,
    }),
    new CopyWebpackPlugin([
      {
        from: "assets",
        to: "assets",
      },
    ]),
    new Dotenv({
      path: path.join(configConstants.ABSOLUTE_BASE, ".env"),
    }),
    /*eslint-disable*/
    new ProgressBarPlugin({
      format: "  build [:bar] " + ":percent" + " (:elapsed seconds)",
      clear: false,
    }),
    /*eslint-disable*/
    ...(WEBPACK_ANALYZER
      ? [
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerPort: 8888,
            openAnalyzer: true,
          }),
        ]
      : []),
  ],
};

module.exports = config;
