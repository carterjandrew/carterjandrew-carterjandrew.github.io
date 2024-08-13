import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import rehypePrism from 'rehype-prism-plus'
import { ssr } from 'vite-plugin-ssr/plugin'
import rehypeSlug from 'rehype-slug'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mdx({
			rehypePlugins: [
				rehypePrism, 
				rehypeSlug
			]
		}),
		react()
	],
})
