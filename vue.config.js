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
    const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
    svgRule.exclude = [resolve('src/assets/icons')]
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .end()

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()

    config.when(process.env.NODE_ENV === 'development', config => config.devtool('source-map'))
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
