module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'color-hex-length': 'long',
    indentation: 2,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-newline-after': null,
    'length-zero-no-unit': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content',
        ],
      },
    ],
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
};
