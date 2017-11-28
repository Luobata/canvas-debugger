var path = require('path');
var webpack = require('webpack');
var root = path.resolve(__dirname, './');

var bubleOptions = {
    target: process.env.NODE_ENV === 'production' ? null : { chrome: 52, firefox: 48 },
    objectAssign: 'Object.assign'
};

module.exports = {
    entry: {
         canvas: './src/canvas.js',
         //devtools: './src/devtools.js',
         background: './src/background.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            SRC: path.resolve(__dirname, '../src'),
            COMPONENTS: path.resolve(__dirname, '../src/components'),
            LIB: path.resolve(__dirname, '../src/lib')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|build/,
                include: root
            },
            {
                test: /\.(png|woff2)$/,
                loader: 'url-loader?limit=0'
            }
        ]
    },
    performance: {
        hints: false
    },
    devtool: process.env.NODE_ENV !== 'production'
        ? '#inline-source-map'
        : false
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};
