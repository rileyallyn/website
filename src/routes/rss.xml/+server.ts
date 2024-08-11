import { create } from 'xmlbuilder2';
import type { PostMetadata } from '../../types';

// Some code taken from https://kylenazario.com/blog/full-content-rss-feed-with-sveltekit-part-two

async function getRssXml(url: string) {
	url = url.replace(/^http:/, 'https:');
	const rssUrl = url + '/rss.xml';
	const root = create({ version: '1.0', encoding: 'UTF-8', })
		.ele('rss', {
			version: '2.0',
			'xmlns:atom': 'http://www.w3.org/2005/Atom',
		}).ele('channel')
		.ele('title').txt(`Riley Smith's Blog`).up()
		.ele('lastBuildDate').txt(new Date().toUTCString()).up()
		.ele('link').txt(rssUrl).up()
		.ele('managingEditor').txt('riley@rileysmith.me (Riley Smith)').up()
		.ele('description').txt('Writing about random things I find interesting.').up()
		.ele('atom:link', { rel: 'self', href: rssUrl })
		.up();
	const mdModules = import.meta.glob('../../posts/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]() as { metadata: PostMetadata };
			const { datePublished, title, description, locked } = metadata;
			if (locked) {
				return null;
			}
			return { datePublished, title, description, slug };
		}),
	);
	if (posts.length === 0 || posts.every((post) => post === null)) {
		return root.up().end();
	}

	for (const post of posts) {
		const postUrl = url + '/blog/' + post!.slug;
		const postDate = new Date(post!.datePublished);

		root.ele('item')
			.ele('title').txt(post!.title).up()
			.ele('pubDate').txt(postDate.toUTCString()).up()
			.ele('link').txt(postUrl).up()
			.ele('guid').txt(postUrl).up()
			.ele('description').txt(post!.description).up()
			.up();
	}

	return root.up().end();

}

export async function GET(request: Request) {
	const url = new URL(request.url);
	const xml = await getRssXml(url.origin);
	return new Response(xml, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml',
			'Content-Length': xml.length.toString()
		},
		status: 200
	});

}