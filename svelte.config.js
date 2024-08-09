import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [vitePreprocess({}), mdsvex({ extensions: ['.md', '.svx'] })],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
