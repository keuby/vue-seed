const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  configureWebpack: config => {
    if (debug) {
      config.devtool = 'source-map'
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}
