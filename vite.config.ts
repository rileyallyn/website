import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { sveltekitOG } from '@ethercorps/sveltekit-og/plugin';

const config: UserConfig = {
	plugins: [tailwindcss(), enhancedImages(), sveltekit(), sveltekitOG()],
	build: {
		rollupOptions: {
			external: ['@resvg/resvg-js', 'css-tree']
		}
	},
	optimizeDeps: {
		exclude: ['@resvg/resvg-js']
	},
	server: {
		allowedHosts: ['.trycloudflare.com']
	}
};

export default config;
