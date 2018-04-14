module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g)$/,
                exclude: /node_modules/,
                use: [
                    'url-loader'
                ]
            }]
    },
    devtool: 'source-map',
    devServer : {
        stats: 'errors-only',
        contentBase: './',
        host: 'localhost',
        port: 3000
    }
}

