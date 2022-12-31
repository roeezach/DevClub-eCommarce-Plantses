const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true, // will keep bundle only on one file
        assetModuleFilename: '[name][ext]'
    },
    // target: 'node',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,//open in browser
        hot: true, //hot reload
        compress: true, //gzip compression
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/i, //any file that ends with that extension
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },

        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ],
    },
    resolve: {
        // ...
        fallback: {
            "async_hooks": false,
            'path': require.resolve('path-browserify'),
            "stream": require.resolve("stream-browserify"),
        },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],

    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'webpack app',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
    externals: {
        zlib: 'zlib'
    }
}