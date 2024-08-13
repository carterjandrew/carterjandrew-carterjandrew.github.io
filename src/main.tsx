import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<MDXProvider>
				<App />
			</MDXProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
