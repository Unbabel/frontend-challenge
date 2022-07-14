module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  testMatch: ['**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  coveragePathIgnorePatterns: ["src/assets/"],
  coverageReporters: ['text', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 22,
      lines: 45,
      statements: 45,
    },
  },
};
