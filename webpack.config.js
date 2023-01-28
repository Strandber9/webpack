const { info } = require('console');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
        about: './src/js/about.js',
    },
    output: {
        filename: './js/[name]_bundle.js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[hash][ext][query]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./dist/css/",
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                // generator: {
                //     filename: 'static/[hash][ext][query]'
                // },
                // use: [
                //     {
                //         loader: "file-loader",
                //         options: {
                //             publicPath: "./dist/img/",
                //         },
                //     },
                // ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html',
            chunks: ['about'],
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: "./css/[id].css",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            // logging: info,
            overlay: true,
            progress: true,
        },
        compress: true,
        port: 9000,
        allowedHosts: 'auto',
        hot: true,
        // liveReload:
    },
};
