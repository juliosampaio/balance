const path = require('path');
require('babel-register');

const config = {
  mode: 'development',
  entry: ['./src/index.js', './src/sass/main.sass'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  externals: ['foundation-sites'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:sass|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: 'assets/css/',
            },
          },
          'extract-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            query: {
              includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')],
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
