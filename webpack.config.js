const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: "/"
    },
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@styles': path.resolve(__dirname, 'src/style'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ]
            },
            {
                test: /\.(svg|webp|pdf)/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext]",
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),

        new ImageminWebpWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinizerPlugin(),
            new TerserPlugin()
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 3006,
    }
}