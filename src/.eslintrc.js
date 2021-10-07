module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    "prettier"
  ],
  rules: {
    "no-var": "error",
    "semi": "error",
    "indent": "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error"
  },
  extends: [
    "airbnb-base", 
    "prettier"
  ]
};
