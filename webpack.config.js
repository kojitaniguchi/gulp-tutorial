//module.exports = {
//  entry: "./src/main.js",
//  output: {
//    filename: "bundle.js"
//  }
//}

const path = require('path')

var serverConfig = {
  target: 'node',
  entry: {
    bundle: './src/server.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
      loaders: [
          {
              loader: 'babel-loader?cacheDirectory=true',
              exclude: /node_modules/,
              test: /\.js[x]?$/,
          }
      ]
  }
};

var clientConfig = {
  target: 'web',
  entry: {
      bundle: './src/client.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'lib.js'
  },
  module: {
      loaders: [
          {
              loader: 'babel-loader?cacheDirectory=true',
              exclude: /node_modules/,
              test: /\.js[x]?$/,
          }
      ]
  }
};

module.exports =  [ serverConfig, clientConfig ];
