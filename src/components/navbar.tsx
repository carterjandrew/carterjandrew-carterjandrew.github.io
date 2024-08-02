import { motion } from "framer-motion"
import { useState} from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useTransition } from "../hooks/contextHooks"

type NavBarProps = {
		style?: React.CSSProperties
}

const NavBar: React.FC<NavBarProps> = ({style}) => {
	const location = useLocation()
	const [delayedLocation, ] = useState(location)
	const [transition, ]= useTransition()

	const links = ['blog', 'projects', 'about']

	return (
		<motion.div
			id='navbar'
			initial={{ y: '-100%' }}
			animate={{ y: 0, transition: transition }}
			exit={{ y: '-100%', transition: transition }}
			style={style}
		>
			<div id='inner-navbar'>
				<NavLink to='/' className={delayedLocation.pathname === '/' ? 'delayed-active' : ''} >Carter Andrew</NavLink>
				<h2 style={{ flex: 1 }} >{delayedLocation.pathname}</h2>
				{links.map((link) => {
					const path = `/${link}`
					const name = link.charAt(0).toUpperCase() + link.slice(1)
					const className = delayedLocation.pathname === path? 'delayed-active' : ''
					return <NavLink key={link} to={path} className={className}>{name}</NavLink>
				})}
			</div>
		</motion.div>
	)
}

export default NavBar
