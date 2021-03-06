const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
  },
};
