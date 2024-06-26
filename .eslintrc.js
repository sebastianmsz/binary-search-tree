module.exports = {
	env: {
		browser: true,
		es2021: true,
		amd: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
