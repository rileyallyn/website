import { create } from 'xmlbuilder2';
import type { PostMetadata } from '../../types';
import { getBlogPosts, getBlogPostsMetadata } from '$lib/blog';

// Some code taken from https://kylenazario.com/blog/full-content-rss-feed-with-sveltekit-part-two

async function getRssXml(url: string) {
	url = url.replace(/^http:/, 'https:');
	const rssUrl = url + '/rss.xml';
	const root = create({ version: '1.0', encoding: 'UTF-8' })
		.ele('rss', {
			version: '2.0',
			'xmlns:atom': 'http://www.w3.org/2005/Atom'
		})
		.ele('channel')
		.ele('title')
		.txt(`Riley Smith's Blog`)
		.up()
		.ele('lastBuildDate')
		.txt(new Date().toUTCString())
		.up()
		.ele('link')
		.txt(rssUrl)
		.up()
		.ele('managingEditor')
		.txt('riley@rileysmith.me (Riley Smith)')
		.up()
		.ele('description')
		.txt('Writing about random things I find interesting.')
		.up()
		.ele('atom:link', { rel: 'self', href: rssUrl })
		.up();
	const posts = await getBlogPostsMetadata();
	if (posts.length === 0 || posts.every((post) => post === null)) {
		return root.up().end();
	}

	for (const post of posts) {
		const item = root.ele('item');
		item.ele('title').txt(post!.title);
		item.ele('pubDate').txt(new Date(post!.datePublished).toUTCString());
		item.ele('link').txt(url + '/blog/' + post!.slug);
		item.ele('guid').txt(url + '/blog/' + post!.slug);
		item.ele('description').txt(post!.description);
		for (const tag of post.tags || []) {
			item.ele('category', { domain: `${url}/blog/tags/${tag}` }).txt(tag);
		}
		root.up();
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
