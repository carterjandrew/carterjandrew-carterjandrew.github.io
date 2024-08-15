import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useProjects } from '../hooks/contextHooks'
import { useEffect, useState } from 'react'

export default function ProjectsIndex() {
	const locaiton = useLocation()
	const projects = useProjects()
	const [delayedLocation, setDelayedLocation] = useState(locaiton)

	useEffect(() => {
		setDelayedLocation(locaiton)
	}, [])

	if (delayedLocation.pathname === '/projects') return (
		<>
			{projects.map(({ path }) => (
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
