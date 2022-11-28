const importRules = require('./import-rules');
const viteRules = require('./vite');

/**
 * Based on Airbnb JavaScript Base Style
 *
 * @see https://github.com/airbnb/javascript
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 */
module.exports = {
	extends: [
		// Airbnb JavaScript Base Style
		'airbnb-base',
	],
	plugins: ['import'],

	// Rules overrides
	rules: {
		/**
		 * Disable checking for-in loops guard
		 *
		 * @see https://eslint.org/docs/rules/guard-for-in
		 * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/best-practices.js#L60-L62
		 */
		'guard-for-in': 'off',

		/**
		 * Allow await in loop
		 *
		 * @see https://eslint.org/docs/rules/no-await-in-loop
		 * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/errors.js#L15-L17
		 */
		'no-await-in-loop': 'off',

		/**
		 * Allow bitwise operators
		 *
		 * @see https://eslint.org/docs/rules/no-bitwise
		 * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L275-L277
		 */
		'no-bitwise': 'off',

		/**
		 * Allow "continue" statements
		 *
		 * @see https://eslint.org/docs/rules/no-continue
		 * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L279-L281
		 */
		'no-continue': 'off',

		/**
		 * Override airbnb-base rules to allow for-of and for-in
		 *
		 * @see https://eslint.org/docs/rules/no-restricted-syntax
		 * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L334-L354
		 */
		'no-restricted-syntax': [
			'error',
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		/**
		 * Override airbnb-base rules to allow reassign params props
		 *
		 * @see https://eslint.org/docs/rules/no-param-reassign
		 * @see https://github.com/airbnb/javascript/issues/1217
		 * @see https://github.com/airbnb/javascript#functions--mutate-params
		 */
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],

		/**
		 * Override airbnb-base rules to ensure import order
		 *
		 * @see https://eslint.org/docs/rules/sort-imports
		 * @see https://github.com/airbnb/javascript/blob/4ee732639396362c6981b1aa4730934c3baa7919/packages/eslint-config-airbnb-base/rules/es6.js#L165-L172
		 */
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				allowSeparatedGroups: false,
			},
		],

		/**
		 * allow functions usage before it defines
		 */
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
			},
		],

		/**
		 * allow control characters in regular expressions
		 *
		 * @see https://eslint.org/docs/latest/rules/no-control-regex
		 */
		'no-control-regex': 0,

		/**
		 * allow use of the RegExp constructor
		 *
		 * @see https://eslint.org/docs/latest/rules/prefer-regex-literals#rule-details
		 */
		'prefer-regex-literals': 0,

		/**
		 * disallow assignment operators in conditional expressions except if they are enclosed in parentheses
		 *
		 * @see https://eslint.org/docs/latest/rules/no-cond-assign#rule-details
		 */
		'no-cond-assign': ['error', 'except-parens'],

		// rules related to vite
		...viteRules,
		// rules related to eslint-plugin-import
		...importRules,
	},
};
