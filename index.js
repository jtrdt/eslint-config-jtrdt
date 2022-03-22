module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['prettier']
};
