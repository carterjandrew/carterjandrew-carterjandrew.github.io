import React from 'react'
import './App.css'
import './drac.css'
import './gh.css'
import './rehype.css'
import { NavLink, useLocation, useRoutes } from 'react-router-dom'
import Root from './layouts/Root'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import BlogIndex from './blogs/index.mdx'
import ProjectsIndex from './projects/index.mdx'

function App() {
	const location = useLocation()
	const router = useRoutes([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/blog',
					element: <BlogIndex />
				},
				{
					path: '/projects',
					element: <ProjectsIndex />
				}
			]
		}
	])

	return (
		<AnimatePresence mode='wait'>
			{React.cloneElement(router!, { key: location.pathname })}
		</AnimatePresence>
	)
}

export default App
