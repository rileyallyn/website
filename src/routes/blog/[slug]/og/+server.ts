import type { RequestHandler } from '@sveltejs/kit';
import type { PostMetadata } from '../../../../types';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import OG from './og.svelte';

const fontFile400 = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontData400: ArrayBuffer = await fontFile400.arrayBuffer();

const fontFile700 = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
const fontData700: ArrayBuffer = await fontFile700.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
	const slug = url.pathname.split('/')[2];
	const postPromise = import(`../../../../posts/${slug}/index.md`);

	const [postResult] = await Promise.all([postPromise]);

	if (!postResult) {
		return new Response('Not found', { status: 404 });
	}

	const { metadata }: { metadata: PostMetadata } = postResult;

	if (!metadata) {
		return new Response('Not found', { status: 404 });
	}

	const { title, description, datePublished: date, locked } = metadata satisfies PostMetadata;

	if (locked) {
		return new Response('Not found', { status: 404 });
	}


	if (!title || !description) {
		return new Response('Missing title or description', { status: 400 });
	}

	return new ImageResponse(OG as any, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'Inter Latin',
				data: fontData400,
				weight: 400
			},
			{
				name: 'Inter Latin',
				data: fontData700,
				weight: 700
			}
		]
	}, {
		title,
		description,
		date
	});
};