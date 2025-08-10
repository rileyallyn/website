import { getBlogPosts } from '$lib/blog';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const posts = await getBlogPosts();
	return {
		posts,
		meta: {
			title: 'Blog',
			description: 'Writing about random things I find interesting.',
			url: url.origin + '/blog',
			image: '/favicon.png'
		}
	};
}
