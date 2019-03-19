const path = require("path");
const webpack = require("webpack");
const configConstants = require("./constants");
const { vendors } = require("../package.json");

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.join(configConstants.ABSOLUTE_BASE, "tmp"),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(configConstants.ABSOLUTE_BASE, "tmp", "[name]-manifest.json"),
      name: "[name]_[hash]",
    }),
  ],
};
