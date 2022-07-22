const importedAirbnbRules = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
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
};
