module.exports = {
  env: {
    es6: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
      'prettier/prettier': 'error'
  },
};
