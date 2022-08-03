module.exports = {
	root: true,
	overrides: [
		{
			files: ['*.js'],
			extends: '@icese7en/prettier',
		},
		{
			files: ['*.jsx'],
			extends: '@icese7en/prettier-react',
		},
		{
			files: ['*.ts'],
			extends: '@icese7en/typescript',
			parserOptions: {
				project: ['tsconfig.json'],
			},
		},
		{
			files: ['*.tsx'],
			extends: [
				'@icese7en/react/lib/a11y',
				'@icese7en/react/lib/hooks',
				'@icese7en/prettier-typescript-react',
			],
			parserOptions: {
				project: ['tsconfig.json'],
			},
		},
	],
};
