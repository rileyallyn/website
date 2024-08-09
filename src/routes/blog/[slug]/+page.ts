import { error } from "@sveltejs/kit";
import type { PostMetadata } from "../../../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, url }) => {
	const { slug } = params;
	const { pathname } = url;

	const postPromise = import(`../../../posts/${slug}/index.md`).catch(() => null);

	const [postResult] = await Promise.all([postPromise]);

	if (!postResult) {
		return error(404, 'Not found');
	}

	const { default: page, metadata }: { default: any; metadata: PostMetadata } = postResult;

	if (!page) {
		return error(404, 'Not found');
	}

	const {
		title: postTitle,
		datePublished,
		description
	} = metadata;

	return {
		post: {
			datePublished,
			description,
			postTitle,
			slug,
		},
		slug,
		page,
		meta: {
			title: `${postTitle}`,
			description,
		},
	};
}