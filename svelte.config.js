import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: seqPreprocessor([preprocess({ postcss: true })]),

	kit: {
		adapter: adapter({
			edge: false,
			split: false,
		})
	}
};

export default config;
