import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useBlog } from '../hooks/contextHooks'
import { useEffect, useState } from 'react'

export default function BlogIndex() {
	const locaiton = useLocation()
	const blog = useBlog()
	const [delayedLocation, setDelayedLocation] = useState(locaiton)

	useEffect(() => {
		setDelayedLocation(locaiton)
	}, [])

	if (delayedLocation.pathname === '/blog') return (
		<>
			{blog.map(({ path }) => (
				<NavLink to={path}>{path}</NavLink>
			))}
		</>
	)
	return (
		<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1200px'}}>
			<Outlet />
		</div>
	)
}
