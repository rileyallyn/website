import { sveltekit } from '@sveltejs/kit/vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [{ ...threeMinifier(), enforce: 'pre'}, sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}

};

export default config;
