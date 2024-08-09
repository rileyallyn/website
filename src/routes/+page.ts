import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ url }) => {
	return {
		meta: {
			title: 'Riley Smith | About',
			description: 'Software Developer',
			image: '/favicon.png',
			url: url.origin
		}
	};
};