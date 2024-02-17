/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    // Add a rule to disable conflicting formatting for CSS classes
    'react/jsx-sort-props': [2, { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }],
    'no-console': ['warn'],
    eqeqeq: ['error'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-constant-condition': 'warn',
    'no-fallthrough': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
}
