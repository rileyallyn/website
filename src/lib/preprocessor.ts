import { compile, escapeSvelte } from 'mdsvex';
import { enhancedImages as enhancedImagesMdsvex } from 'mdsvex-enhanced-images';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { transformerTwoslash } from '@shikijs/twoslash';
import codeHeaderTransformer from '../codehead.mjs';
import highlighterPromise from '../highlighter.mjs';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';
import catppuccin from 'shiki/themes/catppuccin-latte.mjs';
import type { Plugin } from 'vite';

interface ViteMdsvexOpts {
	layoutLocation: string;
}

export default function viteMdsvex(opts: ViteMdsvexOpts): Plugin {
	return {
		name: 'vite-plugin-mdsvex-pre',
		enforce: 'pre',
		transform: {
			order: 'pre',
			async handler(code, id) {
				if (id.endsWith('.md') || id.endsWith('.svx')) {
					// Compile markdown to Svelte markup right here
					const compiled = await compile(code, {
						extensions: ['.md', '.svx'],
						layout: { _: opts.layoutLocation },
						layoutPropForwarding: 'runes',
						remarkPlugins: [enhancedImagesMdsvex],
						rehypePlugins: [rehypeUnwrapImages],
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
					});

					return {
						code: compiled?.code,
						map: compiled?.map || null
					};
				}
			}
		}
	};
}
