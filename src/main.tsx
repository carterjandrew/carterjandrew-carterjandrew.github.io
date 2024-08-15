import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { init } from '@emailjs/browser'

init({
	publicKey: import.meta.env.VITE_EMAILJS_PK,
	blockHeadless: true,
	limitRate: {
		id: 'app',
		throttle: 10000
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<MDXProvider>
				<App />
			</MDXProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
