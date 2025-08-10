import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getBlogPost } from '$lib/blog';

// TODO: Figure how to prerender with enhanced:img
export const prerender = true;

export const load: PageLoad = async ({ params, url, data }) => {
	const { slug } = params;
	const postResult = await getBlogPost(slug);
	if (!postResult) {
		return error(404, 'Not found');
	}
	const { default: page, metadata } = postResult;

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
