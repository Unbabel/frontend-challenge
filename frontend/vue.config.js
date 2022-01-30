module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
  
        svgRule.uses.clear()
  
        // https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    }
  }