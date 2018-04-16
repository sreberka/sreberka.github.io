module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
    },
    resolve: {
      extensions: [ '.js', '.jsx']
    },
    devtool: 'source-map',
}
