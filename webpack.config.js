const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('babel-register');

const config = {
  mode: 'development',
  entry: ['./src/index.js', './src/assets/sass/app.sass'],
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
              outputPath: '/',
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
      {
        test: /\.png$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './public',
      },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 8080,
  },
};

module.exports = config;
