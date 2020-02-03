module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: [0],
    'no-spaced-func': 2
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
