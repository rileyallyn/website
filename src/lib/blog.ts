import type { BlogPost, PostMetadata } from '~/types';

export const mdModules = import.meta.glob('../posts/**/index.md');

export const getBlogPostMetadata = async (slug: string): Promise<PostMetadata | null> => {
	const postPromise = import(`../posts/${slug}/index.md`).catch(() => null);
	const [postResult] = await Promise.all([postPromise]);
	if (!postResult) {
		return null;
	}
	return postResult.metadata;
};

export const getBlogPostsMetadata = async () => {
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { datePublished, title, description, locked, tags } = metadata;
			if (locked) {
				return null;
			}
			return { datePublished, title, description, slug: path.split('/').at(-2), tags };
		})
	);
	return posts.filter((post) => post !== null);
};

export const getBlogPosts = async () => {
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { datePublished, lastUpdated, title, description, locked, tags } = metadata;
			if (locked) {
				return null;
			}
			return { datePublished, lastUpdated, title, description, slug, tags };
		})
	);
	return posts;
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
	const postPromise = import(`../posts/${slug}/index.md`).catch(() => null);
	const [postResult] = await Promise.all([postPromise]);
	if (!postResult) {
		return null;
	}
	return postResult;
};

export const getBlogTags = async () => {
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
	const flattenedTags = tags.flat().filter((x) => x !== null);
	const uniqueTags = [...new Set(flattenedTags)];
	return uniqueTags;
};

export const getBlogPostsByTag = async (tag: string) => {
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { tags, locked } = metadata;
			if (locked) {
				return null;
			}
			if (!tags?.includes(tag)) {
				return null;
			}
			return { ...metadata, slug };
		})
	);
	return posts.filter((post) => post !== null);
};
