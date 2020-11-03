var path = require('path')

module.exports = {
  configureWebpack: config => {
    config.entry.app = ['./examples/main.js']

    config.module.rules.push(
      {
        // 处理markdown文件
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: require.resolve('./plugins/markdownLoader')
          }
        ]
      }
    )
    // config.plugins.push(createThemeColorReplacerPlugin())
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('src'))

    config.module
      .rule('eslint')
      .exclude.add(path.resolve('lib'))
      .end()
      .exclude.add(path.resolve('examples/docs'))
      .end()

    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  runtimeCompiler: true,
  // 以下是pwa配置
  pwa: {
    iconPaths: {
      favicon32: './examples/favicon.ico',
      favicon16: './examples/favicon.ico',
      appleTouchIcon: './examples/favicon.ico',
      maskIcon: './examples/favicon.ico',
      msTileImage: './examples/favicon.ico'
    }
  }
}
