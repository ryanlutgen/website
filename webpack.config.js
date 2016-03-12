var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: ["./app/main.ts"],
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css', '.scss']
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve('index.dev.html'),
            inject: 'head',
            hash: true
        })
    ],
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {test: /\.html?$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.png$/, loader: "url-loader?limit=10000?mimetype=image/png"},
            {test: /\.jpg$/, loader: "file-loader"},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};