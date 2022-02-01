module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    "transform": {
      "^.+\\.vue$": "vue-jest",
      "^.+\\.js$": "babel-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": ["src/components/*.vue"], // ["**/*.{js,vue}"],
    "coverageReporters": ["text-summary", "html"]
  }