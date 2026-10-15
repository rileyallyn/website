import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { sveltekitOG } from '@ethercorps/sveltekit-og/plugin';
import viteMdsvex from '#lib/preprocessor.ts';

const layout = join(import.meta.dirname, 'src/lib/layouts/blog.svelte');

const config: UserConfig = {
	plugins: [
		tailwindcss(),
		viteMdsvex({
			layoutLocation: layout
		}),
		enhancedImages(),
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			extensions: ['.svelte', '.md', '.svx'],
			preprocess: [vitePreprocess({})],
			adapter: adapter(),
			prerender: { handleHttpError: 'warn' }
		}),
		sveltekitOG()
	],
	build: {
		rollupOptions: {
			// this is scuffed...
			external: ['@resvg/resvg-js', 'css-tree', '@ethercorps/sveltekit-og']
		}
	},
	server: {
		allowedHosts: ['.trycloudflare.com']
	}
};

export default config;
