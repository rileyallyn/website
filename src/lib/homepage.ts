export interface Tech {
	name: string;
	// this allows for svelte enhanced images to be used
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	imgSrc: any;
	customClass?: string;
	imgClass?: string;
}

export interface Project {
	name: string;
	description: string;
	link: string;
	language?: string;
	languageColor?: string;
	updatedAt?: string;
	imgSrc?: string;
	customClass?: string;
	featured?: boolean;
}
