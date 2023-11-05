const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFiles: ['index'],
    alias: {}
},
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
    hot: false,
    liveReload: true,
  },
  output: {
    publicPath: "auto",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
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
