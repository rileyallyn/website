export interface PostMetadata {
	title: string;
	description: string;
	datePublished: string;
	lastUpdated: string;
	locked: boolean;
	timeToRead?: string;
	tags?: string[];
}

export type BlogPost = {
	metadata: PostMetadata;
	default: () => { render: () => Promise<string> };
};
