/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'xo',
		'xo-react',
		'xo-typescript',
		'plugin:unicorn/recommended',
	],
	plugins: ['simple-import-sort'],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	ignorePatterns: ['node_modules/', 'dist/', 'build/'],
	rules: {
		'no-underscore-dangle': ['error', {allow: ['_id', '__v']}],
		'jsx-quotes': ['error', 'prefer-double'],
		// React
		'react/react-in-jsx-scope': 'off',
		// Autosort
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		// Unicorn
		'unicorn/prevent-abbreviations': 'off',
	},
	overrides: [
		{
			rules: {
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						format: ['strictCamelCase', 'UPPER_CASE'],
					},
				],
			},
		},
		{
			files: ['*.jsx'],
			rules: {
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
					},
				],
			},
		},
	],
};
