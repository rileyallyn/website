import { defineConfig, globalIgnores } from 'eslint/config';

import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import sveltePlugin from 'eslint-plugin-svelte';
import globals from 'globals';
import js from '@eslint/js';

import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default defineConfig([
	{
		languageOptions: {
			parser: tsParser,

			parserOptions: {
				project: ['./tsconfig.json'],
				extraFileExtensions: ['.svelte']
			},

			sourceType: 'module',
			ecmaVersion: 2020,

			globals: {
				...globals.browser,
				...globals.node
			}
		},

		extends: compat.extends(
			'plugin:svelte/prettier',
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'prettier'
		),

		plugins: {
			'@typescript-eslint': typescriptEslint
		}
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parser: sveltePlugin.parser,

			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	},
	globalIgnores(['**/*.cjs']),
	globalIgnores([
		'**/.DS_Store',
		'**/node_modules',
		'build',
		'.svelte-kit',
		'package',
		'**/.env',
		'**/.env.*',
		'!**/.env.example',
		'**/pnpm-lock.yaml',
		'**/package-lock.json',
		'**/yarn.lock'
	])
]);
