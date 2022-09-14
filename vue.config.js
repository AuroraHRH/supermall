const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // 默认配置路径
  configureWebpack:{
    resolve:{
      // 配置路径别名
      alias:{
        // 已经有一个别名了，@对应的就是src,只有在cli3中下面可以使用@代替src
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}