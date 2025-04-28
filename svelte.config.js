import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { enhancedImages } from 'mdsvex-enhanced-images';
import rehypeUnwrapImages from 'rehype-unwrap-images';

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
			remarkPlugins: [enhancedImages]
		})
	],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$lib: 'src/lib',
			'~/*': 'src/*'
		}
	}
};

export default config;
