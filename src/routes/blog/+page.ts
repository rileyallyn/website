import type { PostMetadata } from "../../types";

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const mdModules = import.meta.glob('../../posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]() as { metadata: PostMetadata };
			const { datePublished, lastUpdated, title, description, locked } = metadata;
			if (locked) {
				return null;
			}
			return { datePublished, lastUpdated, title, description, slug };
		}),
	);
	return {
		posts,
		meta: {
			title: 'Blog | Riley Smith',
			description: 'Writing about random things I find interesting.',
			url: url.origin + '/blog'
		}
	};
}