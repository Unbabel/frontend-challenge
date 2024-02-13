const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'src/tests/e2e/**/*.js',
    baseUrl: 'http://localhost:8080',
  }
})
