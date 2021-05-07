const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
              'file-loader',
          ],
      },
    ]
  },
  plugins: [
    // Default Template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    // Digunakan untuk mengcopy file
    new CopyWebpackPlugin({
      patterns: [
        {
          // Dari src/public/
          from: path.resolve(__dirname, 'src/public/'),
          // Ke dist/
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
