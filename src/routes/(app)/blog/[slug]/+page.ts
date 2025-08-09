import { error, redirect } from '@sveltejs/kit';
import type { PostMetadata } from '~/types';
import type { PageLoad } from './$types';


// TODO: Figure how to prerender with enhanced:img
export const prerender = true;

export const load: PageLoad = async ({ params, url, data }) => {
	const { slug } = params;
	const postPromise = import(`~/posts/${slug}/index.md`).catch(() => null);

	const [postResult] = await Promise.all([postPromise]);
	const { default: page, metadata }: { default: () => { render: () => Promise<string> }; metadata: PostMetadata } = postResult;

	if (!page) {
		return error(404, 'Not found');
	}

	const { title: postTitle, datePublished, lastUpdated, description, locked, tags } = metadata;

	if (locked) {
		redirect(301, `/blog/`);
	}
	return {
		post: {
			datePublished,
			lastUpdated,
			description,
			postTitle,
			slug,
			timeToRead: data.timeToRead,
			tags
		},
		slug,
		page,
		meta: {
			title: postTitle,
			description,
			url: url.origin + '/blog/' + slug,
			image: '/blog/' + slug + '/og.png'
		}
	};
};
