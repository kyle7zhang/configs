const importedAirbnbRules = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
	/**
	 * avoid cycle resolvable
	 *
	 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
	 */
	'import/no-cycle': 'error',

	/**
	 * Override airbnb-base rules to enforce .mjs extension
	 *
	 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
	 * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L138-L142
	 */
	'import/extensions': [
		importedAirbnbRules.rules['import/extensions'][0],
		importedAirbnbRules.rules['import/extensions'][1],
		{
			...importedAirbnbRules.rules['import/extensions'][2],
			mjs: 'always',
		},
	],

	/**
	 * Add config files of some other tools
	 *
	 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
	 */
	'import/no-extraneous-dependencies': [
		importedAirbnbRules.rules['import/no-extraneous-dependencies'][0],
		{
			...importedAirbnbRules.rules['import/no-extraneous-dependencies'][1],
			devDependencies: [
				...importedAirbnbRules.rules['import/no-extraneous-dependencies'][1]
					.devDependencies,
				'**/.vitepress/*.js',
				'**/.vuepress/*.js',
				'**/build.config.js',
				'**/tsup.config.js',
				'**/vite.config.js',
				'**/vitest.config.js',
				'**/vuepress.config.js',
			],
		},
	],

	/**
	 * Override airbnb-base rules to ensure import order
	 *
	 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
	 * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L144-L147
	 */
	'import/order': [
		'error',
		{
			'groups': [
				'builtin',
				'external',
				'internal',
				'parent',
				'sibling',
				'index',
			],
			'newlines-between': 'ignore',
			'alphabetize': {
				order: 'asc',
				caseInsensitive: true,
			},
		},
	],
};
