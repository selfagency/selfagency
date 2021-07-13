module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'block-no-empty': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    indentation: 2,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'number-leading-zero': 'always',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested']
      }
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['/^v-/i'] }],
    'string-quotes': 'single',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['apply', 'screen', 'font-face', 'nest']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'variants',
          'responsive',
          'apply',
          'screen',
          'include',
          'if',
          'content',
          'mixin',
          'each',
          'else',
          'else if',
          'extend'
        ]
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-path']
      }
    ],
    'selector-pseudo-element-allowed-list': ['/^v-/i', 'before', 'after', 'last-of-type']
  }
}