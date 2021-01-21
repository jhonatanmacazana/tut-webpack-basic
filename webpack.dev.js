const { merge } = require("webpack-merge");

const common = require("./webpack.base.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    watchContentBase: true,
  },
});
