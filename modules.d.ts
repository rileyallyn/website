declare module 'rehype-unwrap-images' {
	import { mdsvex } from 'mdsvex';
	type Plugin = NonNullable<NonNullable<Parameters<typeof mdsvex>[0]>['rehypePlugins']>[0];
	type OriginalPlugin = Extract<Plugin, unknown[]>[0];
	const rehypeUnwrapImages: OriginalPlugin;

	export default rehypeUnwrapImages;
}
