const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/style')
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
                test: /\.html/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.svg/,
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
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src','assets'),
                    to: "assets"
                }
            ]
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 3006
    }
}