module.exports = {
    entry: "./app/app",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    plugins: [
    ],
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.png$/, loader: "url-loader?limit=10000?mimetype=image/png"},
            {test: /\.jpg$/, loader: "file-loader"},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
};