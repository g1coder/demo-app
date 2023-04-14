/** Разрешенные импорты (с публичными API) */
const ALLOWED_PATH_GROUPS = ['shared', 'shared/**', 'pages', 'features'].map((pattern) => ({
  pattern,
  group: 'internal',
  position: 'after',
}));
const DENIED_PATH_GROUPS = [
  'app/**',
  'pages/**',
  'features/**',
  'shared/*/**',
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/shared',
];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/first': 2,
    'import/no-unresolved': 0,
    'import/order': [
      2,
      {
        pathGroups: ALLOWED_PATH_GROUPS,
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [2, {patterns: DENIED_PATH_GROUPS}],
    'prefer-const': 2,
    'no-var': 2,
    'no-else-return': 2,
    'max-len': [1, {code: 140}],
    'dot-notation': 2,
    'no-alert': 2,
    'no-console': 0,
  },
};
