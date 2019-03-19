const merge = require("webpack-merge");
const base = require("./webpack.base");

let config;

if (process.env.NODE_ENV === "production") {
  config = require("./webpack.production");
} else {
  config = require("./webpack.development");
}

module.exports = merge(base, config);
