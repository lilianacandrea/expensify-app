//entry -> output 
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    
// Loader - lets you customize the behavior of web pack when it loads a given file. And in this case, the file 
//  will run though babel
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader' ,
                'css-loader',
                'sass-loader'
              ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      // This tells the devServer that we're going to be handling routing via our client side code and that it should return this page for all routes.
      historyApiFallback: true
    }
};



