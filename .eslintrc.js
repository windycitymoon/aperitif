module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['vue', 'gridsome'],
  extends: [
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ]
};
