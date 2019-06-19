const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../../src/lib/index.web.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../build/lib'),
  },
  node: {
    fs: 'empty',
  },
};
