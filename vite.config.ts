import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

const config: UserConfig = {
	plugins: [enhancedImages(), sveltekit()],
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
