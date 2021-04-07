/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 读取同一目录下的 base config
const config = require('./webpack.base.config');
const smp = new SpeedMeasurePlugin(); // 测量构建速度

config.mode="production"

config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
)

// 构建优化，webpack4.0 之后就能跟用户传入的模式（开发还是生产）来获得有意义的配置，当然在optimization中我们也可以覆盖默认配置
config.optimization={ 
    runtimeChunk: 'single',
    minimize:true, // 混淆压缩
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }

module.exports = smp.wrap(config);