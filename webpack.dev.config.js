/* eslint-disable @typescript-eslint/no-var-requires */
// 读取同一目录下的 base config
const path = require('path');
const config = require('./webpack.base.config');

config.mode="development"

config.output ={
  filename:'[name].[hash].js'
} 

// 热更新服务器
config.devServer={
    proxy: { // proxy URLs to backend development server，此处可解决跨域
      '/api': 'http://localhost:3000'  
    },
    contentBase:  path.join(__dirname, "src"),  // 相对根目录指向src
    historyApiFallback: true,
    compress: false, // 是否开启gzip压缩，默认也是false
    port: 4200,  // 这里可以控制端口号
    open: true,  // 是否自动打开
    hot: true    // 热更新
}

// source-map
config.devtool="eval-source-map"   // 完整的内联源代码映射。这允许我们在发布之前调试原始代码

module.exports = config