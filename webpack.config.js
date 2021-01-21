const path = require("path");

const includePaths = [path.resolve(__dirname, "./src")];

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    watchContentBase: true,
  },
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node-modules/,
        include: includePaths,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node-modules/,
        include: includePaths,
        use: "babel-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
};
