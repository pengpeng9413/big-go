/* eslint-disable @typescript-eslint/no-var-requires */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const baseConfig = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean:true, // 每次清空dist
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: {
            loader: 'file-loader',
            options:{
                name: 'svg/[path][name].[ext]',
                outputPath:'svg'
            }
          }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options:{
                name: 'images/[path][name].[ext]',
                outputPath:'images'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[path][name].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new WebpackBar(), // 展示构建进度
    new HtmlWebpackPlugin({  // 这个插件干嘛使用的:这个插件会自动帮我们生成一个新的html,并把相关的js文件,css 文件做插入
      appMountId: 'root',
      filename: 'index.html',
      template: "/index.html"
    }),
  ],
};


module.exports=baseConfig