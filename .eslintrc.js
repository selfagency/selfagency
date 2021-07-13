const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:security/recommended',
    'stylelint'
  ],
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }),
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['security'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'callback-return': ['error'],
    camelcase: ['warn'],
    'handle-callback-err': ['error'],
    indent: ['off'],
    'key-spacing': ['off'],
    'linebreak-style': ['warn', 'unix'],
    'no-eval': ['error'],
    'no-mixed-requires': ['error'],
    'no-script-url': ['error'],
    'no-undef': ['off'],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: 'i|res|next|^err'
      }
    ],
    'no-useless-escape': ['off'],
    'node/no-extraneous-import': ['off'],
    'node/no-unsupported-features/es-syntax': ['off'],
    'node/no-unpublished-require': ['off'],
    'padding-line-between-statements': ['warn'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'security/detect-non-literal-fs-filename': ['off'],
    'security/detect-non-literal-regexp': ['off'],
    'security/detect-non-literal-require': ['off'],
    'security/detect-object-injection': ['off'],
    semi: ['warn', 'never'],
    strict: ['off'],
    'vue/html-self-closing': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/no-v-html': ['off'],
    'wrap-iife': ['error', 'inside']
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts']
    }
  }
}
