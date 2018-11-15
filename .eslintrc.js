module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-unused-components": "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/prettier"
  ]
};
