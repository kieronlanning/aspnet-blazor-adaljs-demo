// webpack.config.js
const webpack = require('webpack')
const path = require('path')

const config = {
    context: path.resolve(__dirname, 'blazorApp'),
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader', // Create style nodes from JS strings
                }, {
                    loader: 'css-loader', // Translates CSS in CommonJS
                },
                {
                    loader: 'sass-loader', // Compiles Sass to CSS
                    options: {
                        includePaths: ['./scss/']
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
}

module.exports = config;
