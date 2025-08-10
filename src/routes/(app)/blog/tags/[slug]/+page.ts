import { getBlogPostsByTag } from '$lib/blog';

export const load = async ({ params: { slug: tag } }) => {
	const posts = await getBlogPostsByTag(tag);

	return {
		posts,
		tag: tag,
		meta: {
			title: `Blog | ${tag}`,
			description: `Blog posts tagged with ${tag}`,
			url: `/blog/tags/${tag}`,
			image: `/favicon.png`
		}
	};
};
