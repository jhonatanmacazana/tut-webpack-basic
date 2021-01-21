const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public"),
          to: path.resolve(__dirname, "./dist"),
        },
      ],
    }),
  ],
});
