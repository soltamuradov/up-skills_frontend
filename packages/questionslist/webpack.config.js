const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", '.ts', '.tsx'],
},
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "questionslist",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/app/App",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-query": {singleton: true},
        typescript: {singleton: true},
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
