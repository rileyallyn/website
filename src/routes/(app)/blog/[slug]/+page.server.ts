import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { readingTime } from 'reading-time-estimator';
import type { EntryGenerator } from './$types';
import type { PostMetadata } from '~/types';
import { render } from 'svelte/server';

function getReadingTime(input: string) {
	return readingTime(input, 200).text;
}

export const entries: EntryGenerator = async () => {
	const mdModules = import.meta.glob('~/posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = (await mdModules[path]()) as { metadata: PostMetadata };
			const { locked } = metadata;
			if (locked || typeof slug !== 'string') {
				return null;
			}
			return { slug };
		})
	);
	return posts.filter((x) => x !== null);
};

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const postPromise = import(`~/posts/${slug}/index.md`).catch(() => null);
	const [postResult] = await Promise.all([postPromise]);
	if (!postResult) {
		return error(404, 'Not found');
	}
	const body = render(postResult.default).body;
	const timeToRead = getReadingTime(body);

	return {
		timeToRead
	};
};
