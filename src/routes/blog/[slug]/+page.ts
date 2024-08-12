import { error, redirect } from '@sveltejs/kit';
import type { PostMetadata } from '../../../types';
import type { PageLoad } from './$types';


// TODO: Figure how to prerender with enhanced:img
export const prerender = false;

export const load: PageLoad = async ({ params, url, data }) => {
	const { slug } = params;
	const postPromise = import(`../../../posts/${slug}/index.md`).catch(() => null);

	const [postResult] = await Promise.all([postPromise]);

	const { default: page, metadata }: { default: any; metadata: PostMetadata } = postResult;

	if (!page) {
		return error(404, 'Not found');
	}

	const { title: postTitle, datePublished, description, locked } = metadata;

	if (locked) {
		redirect(301, `/blog/`);
	}
	return {
		post: {
			datePublished,
			description,
			postTitle,
			slug,
			timeToRead: data.timeToRead
		},
		slug,
		page,
		meta: {
			title: `${postTitle}`,
			description,
			image: url.origin + '/blog/' + slug + '/og.png',
			url: url.origin + '/blog/' + slug
		}
	};
};
