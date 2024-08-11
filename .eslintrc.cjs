module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:svelte/prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		// ...
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte'] // This is a required setting in `@typescript-eslint/parser` v4.24.0.
	},

	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
		// ...
	],
	ignorePatterns: ['*.cjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
