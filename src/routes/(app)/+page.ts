import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	return {
		meta: {
			title: 'About',
			description: 'Software Developer',
			image: '/favicon.png',
			url: url.origin
		}
	};
};
