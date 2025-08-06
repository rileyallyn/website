import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { enhancedImages } from 'mdsvex-enhanced-images';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { createHighlighter } from 'shiki';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';

const highlighter = await createHighlighter({ theme: tokyoNight, langs: ['ts', 'js', 'json', 'css', 'html', 'md', 'mdx'] });

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: { _: 'src/lib/layouts/blog.svelte' },
			rehypePlugins: [rehypeUnwrapImages],
			remarkPlugins: [enhancedImages],
			highlight: {
				highlighter: async (code, lang) => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: tokyoNight }));
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
		}
	}
};

export default config;
