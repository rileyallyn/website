import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { enhancedImages as enhancedImagesMdsvex } from 'mdsvex-enhanced-images';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { join } from 'path';
import highlighterPromise from './src/highlighter.mjs';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';
import catppuccin from 'shiki/themes/catppuccin-latte.mjs';
import { transformerTwoslash } from '@shikijs/twoslash';
import codeHeaderTransformer from './src/codehead.mjs';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { sveltekitOG } from '@ethercorps/sveltekit-og/plugin';
// import { rollupWasm } from '@ethercorps/sveltekit-og/plugin';

const layout = join(import.meta.dirname, 'src/lib/layouts/blog.svelte');

const config: UserConfig = {
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			extensions: ['.svelte', '.md', '.svx'],
			preprocess: [
				vitePreprocess({}),
				mdsvex({
					extensions: ['.md', '.svx'],
					layout: { _: layout },
					rehypePlugins: [rehypeUnwrapImages],
					remarkPlugins: [enhancedImagesMdsvex],
					highlight: {
						highlighter: async (code, lang, metastring) => {
							const twoslash = metastring?.includes('twoslash');
							const highlighter = await highlighterPromise;

							const html = escapeSvelte(
								highlighter.codeToHtml(code, {
									lang: lang ?? 'text',
									themes: { light: catppuccin, dark: tokyoNight },
									defaultColor: 'light-dark()',
									transformers: [
										transformerTwoslash({
											explicitTrigger: !twoslash,
											langs: twoslash ? ['ts'] : undefined
										}),
										codeHeaderTransformer({ meta: { lang } })
									]
								})
							);

							return `{@html \`${html}\`}`;
						}
					}
				})
			],
			adapter: adapter(),
			alias: { $lib: 'src/lib', '~/*': 'src/*' },
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
