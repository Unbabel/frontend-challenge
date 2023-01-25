/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "prettier/prettier": 0,
    "vue/multi-word-component-names": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
