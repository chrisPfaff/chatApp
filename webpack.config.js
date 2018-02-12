const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      },
      {
        test: /\.scss%/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
      test: /\.(png|jp(e*)g|svg$)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: './img/[name].[ext]'
        }
      }]
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),

  },
  plugins: [

    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),

    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   minify: {
    //     collapseWhitespace: true
    //   }
    // }),
    // new ExtractTextPlugin('style.css')
  ]
}
