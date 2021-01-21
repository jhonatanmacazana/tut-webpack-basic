const path = require("path");

const includePaths = [path.resolve(__dirname, "./src")];

module.exports = {
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
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
};
