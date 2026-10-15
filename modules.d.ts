declare module 'rehype-unwrap-images' {
	import { mdsvex } from 'mdsvex';
	type Plugin = NonNullable<NonNullable<Parameters<typeof mdsvex>[0]>['rehypePlugins']>[0];
	type OriginalPlugin = Extract<Plugin, unknown[]>[0];
	const rehypeUnwrapImages: OriginalPlugin;

	export default rehypeUnwrapImages;
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export default class Comp extends SvelteComponent {}

	export const metadata: Record<string, unknown>;
}
