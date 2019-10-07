module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['vue', 'gridsome'],
  extends: [
    'xo/esnext',
    // 'xo-vue',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ]
};
