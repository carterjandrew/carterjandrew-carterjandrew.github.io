import React from 'react'
import './App.css'
import { NavLink, useLocation, useRoutes } from 'react-router-dom'
import Root from './layouts/Root'
import { AnimatePresence } from 'framer-motion'

function App() {
	const location = useLocation()
	const router = useRoutes([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <NavLink to='/test'>Test</NavLink>
				},
				{
					path: '/test',
					element: <NavLink to='/'>Home</NavLink>
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
