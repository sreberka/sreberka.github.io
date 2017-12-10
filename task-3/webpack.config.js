module.exports = {
    entry: {
        app: './src/app.js'
        //another: './src/NewsList.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
    },
    devtool: 'source-map',
}

