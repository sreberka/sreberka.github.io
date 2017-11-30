module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'dist/',
        library: 'myLibrary',
        libraryTarget: 'var'
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
