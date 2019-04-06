const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

const copyPlugin = new CopyWebpackPlugin([
  { from: './assets', to: 'assets' }
]);

const dotEnvPlugin = new DotEnv({
  safe: true,
  systemvars: true
});

module.exports = (_, options) => ({
  entry: {
    polyfill: 'babel-polyfill',
    app: './src/index.js'
  },
  output: {
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|otf|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: options.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { minimize: options.mode === 'production' }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    dotEnvPlugin,
    htmlPlugin,
    cssPlugin,
    copyPlugin
  ],
  devServer: {
    historyApiFallback: true
  }
});
