module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.vue'],
      },
    },
  },
  rules: {
    'import/order': ['error'],
    'import/no-extraneous-dependencies': ['off'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'lf',
        semi: true,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
};
