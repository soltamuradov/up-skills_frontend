const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const RemotePlugin = require('external-remotes-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',

  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'auto'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-react', {
              runtime: 'automatic'
            }]
          ],
        }
      }
    ]
  },

  plugins: [
    new RemotePlugin(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        addquestions: 'addquestions@http://localhost:3001/remoteEntry.js',
        questionslist: 'questionslist@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        react:  {singleton: true},
        'react-dom': {singleton: true}
      }

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}