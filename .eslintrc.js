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
	ignorePatterns: ['node_modules/', 'dist/', 'build/', 'public/', 'app/legacy/'],
	rules: {
		'no-underscore-dangle': ['error', {allow: ['_id', '__v']}],
		'jsx-quotes': ['error', 'prefer-double'],
		// React
		'react/react-in-jsx-scope': 'off',
		// Autosort
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		// Unicorn
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					env: false,
					props: false,
					params: false,
				},
			},
		],
	},
};
