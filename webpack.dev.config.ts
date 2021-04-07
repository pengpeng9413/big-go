/* eslint-disable @typescript-eslint/no-var-requires */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const ESLintPlugin =require("eslint-webpack-plugin");

const smp = new SpeedMeasurePlugin(); // 测量构建速度


const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
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
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options:{
              name(){ // 这里提供了一种思路，我们可以配置一个webpack conf 来实现不同环境（开发|生产）的配置
                if(process.env.NODE_ENV==='development'){
                  return '[path][name][ext]'
                }
                return '[contenthash].[ext]'
              },
              outputPath(url, resourcePath){ // 可控制文件的输入目录
                if (/img/.test(resourcePath)) {
                  return `static/images/${url}`;
                }
                return `static/svg/${url}`
              }
            }
          }
        ]
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
    new HtmlWebpackPlugin({  // 这个插件干嘛使用的:这个插件会自动帮我们生成一个新的html,并把相关的js文件,css 文件做插入
      appMountId: 'root',
      filename: 'index.html',
      template: "/index.html"
    }),
   
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    // new ESLintPlugin({
    //   extensions: ["js", "jsx", "ts", "tsx"], //
    // }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devtool: "inline-source-map", // 完整的内联源代码映射。这允许我们在发布之前调试原始代码
  devServer: {
    contentBase:  path.join(__dirname, "src"),
    historyApiFallback: true,
    compress: false, // 是否开启gzip压缩，默认也是false
    port: 4000,  // 这里可以控制端口号
    open: true,  // 是否自动打开
    hot: true    // 热更新
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return smp.wrap(config);
};