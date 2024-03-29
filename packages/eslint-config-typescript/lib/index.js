const baseConfig = require('@icese7en/eslint-config');
const airbnbTypescript = require('eslint-config-airbnb-typescript/lib/shared');

/**
 * Based on TypeScript ESLint Rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 * @see https://github.com/iamturns/eslint-config-airbnb-typescript
 */
module.exports = {
	extends: [
		// Enable all the recommended rules for @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// Add typescript settings for `eslint-plugin-import`
		'plugin:import/typescript',
		'@icese7en',
	],

	// Use @typescript-eslint/eslint-plugin
	plugins: ['@typescript-eslint'],

	// Use @typescript-eslint/parser
	parser: '@typescript-eslint/parser',

	settings: {
		// Use settings from eslint-config-airbnb-typescript
		...airbnbTypescript.settings,
	},

	// Rules overrides
	rules: {
		// ==================
		// Use rules from eslint-config-airbnb-typescript
		// ==================

		// Disable rules that already checked by the TypeScript compiler
		...airbnbTypescript.overrides[0].rules,

		// Replace Airbnb rules with TypeScript version
		...airbnbTypescript.rules,

		// ==================
		// My own modifications
		// ==================

		/**
		 * allow functions usage before it defines
		 */
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
			},
		],

		/**
		 * Use type-only imports as possible
		 *
		 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
		 */
		'@typescript-eslint/consistent-type-imports': 'error',

		/**
		 * Allow functions in expressions not to be checked
		 *
		 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
		 */
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
			},
		],

		/**
		 * Override airbnb-base rules to enforce .mjs extension
		 *
		 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		 * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L138-L142
		 */
		'import/extensions': [
			baseConfig.rules['import/extensions'][0],
			baseConfig.rules['import/extensions'][1],
			{
				...baseConfig.rules['import/extensions'][2],
				ts: 'never',
				tsx: 'never',
			},
		],

		/**
		 * Add config files of some other tools
		 *
		 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
		 */
		'import/no-extraneous-dependencies': [
			airbnbTypescript.rules['import/no-extraneous-dependencies'][0],
			{
				...airbnbTypescript.rules['import/no-extraneous-dependencies'][1],
				devDependencies: [
					...airbnbTypescript.rules['import/no-extraneous-dependencies'][1]
						.devDependencies,
					'**/.vitepress/*.ts',
					'**/.vuepress/*.ts',
					'**/build.config.ts',
					'**/tsup.config.ts',
					'**/vite.config.ts',
					'**/vitest.config.ts',
					'**/vuepress.config.ts',
				],
			},
		],

		/**
		 * Default export should not be encouraged in typescript
		 *
		 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
		 */
		'import/prefer-default-export': 'off',
	},
};
