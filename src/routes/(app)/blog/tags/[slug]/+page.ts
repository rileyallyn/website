import type { PostMetadata } from "~/types";



export const load = async ({ params: { slug: tag } }) => {
	const mdModules = import.meta.glob('~/posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { datePublished, lastUpdated, title, description, locked, tags } = metadata;
			if (locked) {
				return null;
			}
			if (!tags?.includes(tag)) {
				return null;
			}
			return {
				datePublished,
				lastUpdated,
				title,
				description,
				slug,
				tags
			};
		})
	);

	return {
		posts,
		tag,
		meta: {
			title: `Blog | ${tag}`,
			description: `Blog posts tagged with ${tag}`,
			url: `/blog/tags/${tag}`,
			image: `/favicon.png`
		}
	};
};