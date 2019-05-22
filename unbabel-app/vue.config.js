const webpack = require('webpack')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/stylesheets/utils/_variables.scss";
          @import "@/assets/stylesheets/mixins/_shadow.scss";
        `
      }
    }
  },
  pwa: {
    name: 'Unbabel App',
    themeColor: '#859EFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: true
  }
}
