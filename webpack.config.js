var path = require('path');

module.exports = {
    devtool: 'source-map',

    entry: {
        'form-poster': './src/index.ts',
    },

    output: {
        filename: '[name].min.js',
        library: 'FormPoster',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
}
