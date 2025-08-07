import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { enhancedImages } from 'mdsvex-enhanced-images';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { join } from 'path';
import highlighterPromise from './src/highlighter.mjs';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';
import catppuccin from 'shiki/themes/catppuccin-latte.mjs';
import { transformerTwoslash } from '@shikijs/twoslash';
import codeHeaderTransformer from './src/codehead.mjs';

const layout = join(import.meta.dirname, 'src/lib/layouts/blog.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: { _: layout },
			rehypePlugins: [rehypeUnwrapImages],
			remarkPlugins: [enhancedImages],
			highlight: {
				highlighter: async (code, lang, metastring) => {
					const twoslash = metastring?.includes('twoslash');
					const highlighter = await highlighterPromise;
					const html = escapeSvelte(highlighter.codeToHtml(code, {
						lang, themes: {
							light: catppuccin,
							dark: tokyoNight
						}, defaultColor: 'light-dark()', transformers: [transformerTwoslash({
							explicitTrigger: !twoslash,
							langs: twoslash ? ['ts'] : undefined
						}), codeHeaderTransformer({ meta: { lang } })],
					}));
					return `{@html \`${html}\`}`;
				}
			}
		})
	],
	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		alias: {
			$lib: 'src/lib',
			'~/*': 'src/*'
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
