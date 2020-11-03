// 打包所有
// node.js里面自带的操作路径的模块
const path = require("path");
const merge = require('webpack-merge');
const webpackLibBaseConfig = require('./webpack.lib.base.js');
// 用于提取css到文件中
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// 用于压缩css代码
const optimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');

module.exports = merge(webpackLibBaseConfig, {
  mode: 'production',
  // devtool: 'source-map',
  devtool: 'none',
  entry: {
    index: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    // 打包过后的文件的输出的路径
    path: path.resolve(__dirname, "../lib"),
    // 打包后生成的js文件
    filename: "[name].js",
    publicPath: "/",
    library: 'dd-ui',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader, // 使用miniCssExtractPlugin.loader代替style-loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            // options: {
            //   implementation: require('dart-sass')
            // }
          }
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: "./fonts/[name].[ext]",
          publicPath: './'
        }
      }
    ]
  },
  plugins: [
    // 新建miniCssExtractPlugin实例并配置
    new miniCssExtractPlugin({
      filename: 'style.css'
    }),
    // 压缩css
    new optimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      },
    }),
  ]
})
