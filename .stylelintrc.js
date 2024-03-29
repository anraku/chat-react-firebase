module.exports = {
  plugins: ['stylelint-order'],
  extends: [
		'stylelint-config-standard',
		'./node_modules/prettier-stylelint/config.js'
	],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'declaration-empty-line-before': 'never',
  },
};
