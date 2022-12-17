/* eslint-env node */
module.exports = {
  extends: [
    '@antfu',
  ],
  overrides: [
    {
      files: ['tests/cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {
    '@typescript-eslint/brace-style': 'off',
    'curly': 'off',
  },
}
