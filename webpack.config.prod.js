const webpack = require('webpack');
const path = require('path');

const LIBRARYNAME = 'Vive';

module.exports = {
  entry: {
    [LIBRARYNAME]: ['./src/index.js'],
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    library: LIBRARYNAME,
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: './assets/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less)/,
          enforce: true,
        },
      },
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
