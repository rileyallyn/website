import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);


const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ['@resvg/resvg-js', 'css-tree']
		},
	},
	optimizeDeps: {
		exclude: ['@resvg/resvg-js']
	},
};

export default config;
