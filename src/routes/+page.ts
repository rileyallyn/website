import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		meta: {
			title: 'Riley Smith | About',
			description: 'Software Developer'
		}
	};
};