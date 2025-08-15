import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: './',
	// Note: build.outDir will be overridden by SvelteKit adapter-static
	// SvelteKit will use 'build' directory as specified in svelte.config.js
});
