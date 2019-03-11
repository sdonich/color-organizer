const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['react', 'react-dom']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },

  mode: 'development',

  watch: true,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
        
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
}