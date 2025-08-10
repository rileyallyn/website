import { getBlogTags } from '$lib/blog';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const tags = await getBlogTags();
	// flatten tags
	const flattenedTags = tags.flat().filter((x) => x !== null);
	const uniqueTags = [...new Set(flattenedTags)];
	return {
		tags: uniqueTags,
		meta: {
			title: 'Blog',
			description: 'Writing about random things I find interesting.',
			url: url.origin + '/blog',
			image: '/favicon.png'
		}
	};
}
