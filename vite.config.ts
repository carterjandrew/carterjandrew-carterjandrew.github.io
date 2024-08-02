import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import rehypePrism from 'rehype-prism-plus'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mdx({
				rehypePlugins: [rehypePrism]
		}),
		react()
	],
})
