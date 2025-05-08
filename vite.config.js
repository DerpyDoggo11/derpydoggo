import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		target: 'es2020'
	},

	terserOptions: {
		compress: {
			hoist_funs: true,
			drop_console: true,
			drop_debugger: true
		}
	}
};

export default config;
