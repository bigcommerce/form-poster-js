var path = require('path');
var pkg = require('./package.json');

module.exports = {
    devtool: 'sourcemap',
    entry: './src/index.js',
    output: {
        filename: 'form-poster.min.js',
        library: 'FormPoster',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader',
                test: /\.(js|ts)$/,
            },
        ],
    },
}
