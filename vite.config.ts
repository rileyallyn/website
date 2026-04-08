import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { sveltekitOG } from '@ethercorps/sveltekit-og/plugin';
// import { rollupWasm } from '@ethercorps/sveltekit-og/plugin';

const config: UserConfig = {
	plugins: [tailwindcss(), enhancedImages(), sveltekit(), sveltekitOG()],
	build: {
		rollupOptions: {
			// this is scuffed...
			external: ['@resvg/resvg-js', 'css-tree', '@ethercorps/sveltekit-og']
		}
	},
	server: {
		allowedHosts: ['.trycloudflare.com']
	}
};

export default config;
