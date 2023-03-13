const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_globalStyle.scss";
          @import "@/scss/_typography.scss";
        `,
      },
    },
  },
});
