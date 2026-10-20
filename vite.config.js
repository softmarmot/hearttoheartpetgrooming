import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves project sites from /<repo>/. Override with BASE_PATH
// (for example BASE_PATH=/ once the site moves to its own domain).
export default defineConfig({
  base: process.env.BASE_PATH ?? '/hearttoheartpetgrooming/',
  plugins: [tailwindcss(), svelte()],
});
