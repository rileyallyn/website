import type { PostMetadata } from '~/types';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const mdModules = import.meta.glob('~/posts/**/index.md');
	const tags = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { tags, locked } = metadata;

			if (locked) {
				return null;
			}
			return tags;
		})
	);
	// flatten tags
	const flattenedTags = tags.flat().filter((x) => x !== null);
	const uniqueTags = [...new Set(flattenedTags)];
	return {
		tags: uniqueTags,
		meta: {
			title: 'Blog',
			description: 'Writing about random things I find interesting.',
			url: url.origin + '/blog',
			image: '../favicon.png'
		}
	};
}
