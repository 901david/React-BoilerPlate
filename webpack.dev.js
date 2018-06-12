const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: 3000,
    open: true,
  },
});
