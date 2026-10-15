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
			preprocess: [
				// mdsvex({
				// 	extensions: ['.md', '.svx'],
				// 	layout: { _: layout },
				// 	layoutPropForwarding: 'runes',
				// 	rehypePlugins: [rehypeUnwrapImages],
				// 	// remarkPlugins: [enhancedImagesMdsvex],
				// 	highlight: {
				// 		highlighter: async (code, lang, metastring) => {
				// 			const twoslash = metastring?.includes('twoslash');
				// 			const highlighter = await highlighterPromise;

				// 			const html = escapeSvelte(
				// 				highlighter.codeToHtml(code, {
				// 					lang: lang ?? 'text',
				// 					themes: { light: catppuccin, dark: tokyoNight },
				// 					defaultColor: 'light-dark()',
				// 					transformers: [
				// 						transformerTwoslash({
				// 							explicitTrigger: !twoslash,
				// 							langs: twoslash ? ['ts'] : undefined
				// 						}),
				// 						codeHeaderTransformer({ meta: { lang } })
				// 					]
				// 				})
				// 			);

				// 			return `{@html \`${html}\`}`;
				// 		}
				// 	}
				// }),
				vitePreprocess({})
			],
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
