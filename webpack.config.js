//module.exports = {
//  entry: "./src/main.js",
//  output: {
//    filename: "bundle.js"
//  }
//}

const path = require('path')
const fs = require('fs')

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports.server = {
  target: 'node',
  entry: {
    server: './src/server/server.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  externals: nodeModules,
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

module.exports.client = {
  target: 'web',
  entry: {
      bundle: './src/client/client.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
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

// module.exports = {
//     entry: {
//         bundle: './src/client.jsx'
//     },
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 loader: 'babel-loader?cacheDirectory=true',
//                 exclude: /node_modules/,
//                 test: /\.js[x]?$/,
//             }
//         ]
//     }
// }
