export interface PostMetadata {
	title: string;
	description: string;
	datePublished: string;
	lastUpdated: string;
	locked: boolean;
	timeToRead?: string;
	tags?: string[];
}

interface CodeHeaderOptions {
	meta: {
		lang: string;
	};
}
