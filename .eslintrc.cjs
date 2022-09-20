module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  ignorePatterns: ['/*.*'],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/extensions': 0,
    '@typescript-eslint/no-redeclare': 0,
  },
};
