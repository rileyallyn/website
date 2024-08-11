import { create } from 'xmlbuilder2';
import type { PostMetadata } from '../../types';

// Some code taken from https://kylenazario.com/blog/full-content-rss-feed-with-sveltekit-part-two

async function getRssXml(url: string) {
	let rssUrl = url + '/rss.xml';
	const root = create({ version: '1.0', encoding: 'UTF-8' })
		.ele('feed', {
			xmlns: 'http://www.w3.org/2005/Atom',
		})
		.ele('title').txt(`Riley Smith's Blog`).up()
		.ele('link', { href: rssUrl }).up()
		.ele('updated').txt(new Date().toISOString()).up()
		.ele('id').txt(rssUrl).up()
		.ele('author')
		.ele('name').txt('Riley Smith').up()
		.ele('email').txt('riley@rileysmith.me').up()
		.up()
		.ele('subtitle').txt('Writing about random things I find interesting.').up();
	const mdModules = import.meta.glob('../../posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]() as { metadata: PostMetadata };
			const { datePublished, lastUpdated, title, description, locked } = metadata;
			if (locked) {
				return null;
			}
			return { datePublished, lastUpdated, title, description, slug };
		}),
	);
	if (posts.length === 0 || posts.every((post) => post === null)) {
		return root.end();
	}

	for (const post of posts) {
		const postUrl = url + '/blog/' + post!.slug;
		root.ele('entry')
			.ele('title').txt(post!.title).up()
			.ele('link', { href: postUrl }).up()
			.ele('updated').txt(post!.lastUpdated).up()
			.ele('id').txt(postUrl).up()
			.ele('summary').txt(post!.description).up()
			.up();
	}

	return root.end();

}

export async function GET(request: Request) {
	const url = new URL(request.url);
	const xml = await getRssXml(url.origin);
	return new Response(xml, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/rss+xml'
		},
		status: 200
	});

}