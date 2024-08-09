import type { PostMetadata } from "../../types";

/** @type {import('./$types').PageLoad} */
export async function load() {
	const mdModules = import.meta.glob('../../posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]() as { metadata: PostMetadata };
			const { datePublished, lastUpdated, title, description } = metadata;
			return { datePublished, lastUpdated, title, description, slug };
		}),
	);
	return { posts };
}