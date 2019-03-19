const configConstants = require("./constants");
const path = require("path");
const { vendors } = require("../package.json");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./index.js"],
    vendor: vendors,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: configConstants.SRC_DIR,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss|css$/,
        include: [path.join(configConstants.SRC_DIR, "scss")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { minimize: true } },
            "postcss-loader",
            "sass-loader",
          ],
        }),
      },
    ],
  },
  plugins: [
    // Enable scope hoisting
    // https://medium.com/webpack/brief-introduction-to-scope-hoisting-in-webpack-8435084c171f
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),

    // Tried hashed modules but the file sizes increased
    // new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
    }),

    new ExtractTextPlugin({
      filename: "css/[name].[contenthash].css",
      allChunks: true,
    }),

    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
