var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

var config = {
    entry: NODE_ENV == 'dev' ? "./src/core/bootstrap.js" : './src/core/bootstrap-dist.js',
    //devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        chunkFilename: 'js/bundle_'+ NODE_ENV +'.[name].js',
        filename: 'js/bundle_'+ NODE_ENV +'.js'
    },
    resolve: {
        root: __dirname + '/src/'

    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        noParse: [],
        loaders: [

            //{ test: /\.png$/, loader: "url-loader?limit=100000" },

            // JS
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'ng-annotate!babel'
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'html-loader'
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false,
        //     compress: { warnings: false }
        // }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),

        new HtmlWebpackPlugin({
            template: '!!pug!src/index.pug'
        })
    ]
};

module.exports = config;
