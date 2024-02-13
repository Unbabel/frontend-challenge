module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    // this allows Jest to run in an environment that mimics the browser, even though the tests are executed in Node.js.
    testEnvironment: 'jest-environment-jsdom',
    // here the vue-jest preprocessor converts vue files into a format Jest can work with.
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    // this is for handling static file imports (like images and fonts). Instead of trying to import these files directly, which Jest cannot parse, they are mapped to a mock file. This approach prevents errors related to importing non-JavaScript assets
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(svg|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ani|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
      },
    testMatch: ['<rootDir>/src/tests/**/*.spec.js'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**']
  };
  