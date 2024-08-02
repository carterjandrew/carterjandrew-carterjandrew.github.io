import React from 'react'
import './App.css'
import './drac.css'
import { NavLink, useLocation, useRoutes } from 'react-router-dom'
import Root from './layouts/Root'
import { AnimatePresence } from 'framer-motion'
import Test from './blogs/Test.mdx'
import BlogLayout from './layouts/blogLayout'
import { MDXProps } from 'mdx/types'

function App() {
	const location = useLocation()
	const router = useRoutes([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <NavLink style={{ height: '200vh' }} to='/blog'>Test</NavLink>
				},
				{
					path: '/blog',
					element: <BlogLayout />,
					children: [
						{
							index: true,
							element: (
								<Test />
							)
						}
					]
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
