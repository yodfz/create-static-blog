module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
