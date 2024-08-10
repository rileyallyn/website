import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { readingTime } from "reading-time-estimator";

function getReadingTime(input: string) {
	return readingTime(input).text;
}

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const postPromise = import(`../../../posts/${slug}/index.md`).catch(() => null);
	const [postResult] = await Promise.all([postPromise]);
	if (!postResult) {
		return error(404, 'Not found');
	}
	const timeToRead = getReadingTime(postResult.default.render().html);
	return {
		timeToRead,
	}
}