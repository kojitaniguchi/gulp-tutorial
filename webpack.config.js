//module.exports = {
//  entry: "./src/main.js",
//  output: {
//    filename: "bundle.js"
//  }
//}

const path = require('path');

module.exports = {
    entry: {
        bundle: './src/client.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
            }
        ]
    }
};
