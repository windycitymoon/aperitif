module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "xo",
    "xo/esnext",
    "plugin:gridsome/recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": [
    "gridsome",
    "vue"
  ],
};
