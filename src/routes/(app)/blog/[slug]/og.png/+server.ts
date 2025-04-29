import type { RequestHandler } from '@sveltejs/kit';
import type { PostMetadata } from '~/types';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import { connectLambda, getStore } from '@netlify/blobs';
import OG from './og.svelte';

// lmao.
type LambdaEvent = Parameters<typeof connectLambda>[0];

const fontFile400 = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontData400: ArrayBuffer = await fontFile400.arrayBuffer();

const fontFile700 = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
const fontData700: ArrayBuffer = await fontFile700.arrayBuffer();

export const GET: RequestHandler = async ({ url, platform }) => {
	const slug = url.pathname.split('/')[2];
	const postPromise = import(`~/posts/${slug}/index.md`);

	const [postResult] = await Promise.all([postPromise]);

	if (!postResult) {
		return new Response('Not found', { status: 404 });
	}

	const { metadata }: { metadata: PostMetadata } = postResult;

	if (!metadata) {
		return new Response('Not found', { status: 404 });
	}

	const { title, description, datePublished: date, locked, lastUpdated } = metadata satisfies PostMetadata;

	if (locked) {
		return new Response('Not found', { status: 404 });
	}

	if (!title || !description) {
		return new Response('Missing title or description', { status: 400 });
	}

	connectLambda(platform?.context as LambdaEvent);

	const store = getStore({
		name: 'og-images',
		siteID: process.env.SITE_ID,
		token: process.env.NETLIFY_BLOB
	});

	console.log(process.env);

	// this should be a blob, but it's not
	const data = await store.getWithMetadata(`${slug}.png`, { type: 'arrayBuffer' });
	// cache miss, we need to generate the image
	let shouldReturnCache = true;

	let image: ArrayBuffer | null = null;

	if (!data) {
		shouldReturnCache = false;
		image = null;
	} else {
		image = data.data;
	}

	// if the last updated date is within the last 24 hours, return the cached image
	if (lastUpdated && new Date(lastUpdated).getTime() > Date.now() - 24 * 60 * 60 * 1000) {
		shouldReturnCache = false;
	}

	if (image && shouldReturnCache) {
		return new Response(image, {
			headers: {
				'x-og-image-cache': 'true',
				'Content-Type': 'image/png',
				'Cache-Control': 'public, immutable, no-transform, max-age=31536000'
			}
		});
	}

	const response = new ImageResponse(
		// todo: fix the library to accept a svelte 5 component
		// @ts-expect-error - this is a valid type, but the function is not typed properly. it expects a SvelteComponent not a Component
		OG,
		{
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
		},
		{
			props: {
				title,
				description,
				date
			}
		}
	);
	// really stupid, but blob() consumes the response
	const copiedResponse = response.clone();
	await store.set(`${slug}.png`, await copiedResponse.blob(), {
		metadata: {
			lastModified: new Date().toISOString()
		}
	});

	return response;
};	
