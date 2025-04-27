export const load = async ({ url }) => {
	return {
		meta: {
			title: 'Dog',
			description: 'Dog',
			url: url.origin
		}
	};
};