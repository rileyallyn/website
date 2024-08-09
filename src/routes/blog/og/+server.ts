import type { RequestHandler } from '@sveltejs/kit';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import OG from './og.svelte';

const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
	const urlObj = new URL(url);
	// get query parms from url
	const { searchParams } = urlObj;
	const title = searchParams.get('title');
	const description = searchParams.get('description');

	if (!title || !description) {
		return new Response('Missing title or description', { status: 400 });
	}

	return new ImageResponse(OG as any, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'Inter Latin',
				data: fontData,
				weight: 400
			}
		]
	}, {
		title,
		description
	});
};