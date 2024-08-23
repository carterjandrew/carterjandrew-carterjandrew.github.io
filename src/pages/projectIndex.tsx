import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useProjects } from '../hooks/contextHooks'
import { useEffect, useState } from 'react'
import LazyMdx, { LazyMdxProps, MdxMappingItem } from '../components/lazyMdx';
import { AnimatePresence, Variants } from 'framer-motion';
import EmptyTrigger from '../components/emptyTrigger';


const projectPreviewElements: MdxMappingItem[] = Object.entries(import.meta.glob('../project-previews/**.mdx')).map(([key, mdxFunction]) => ({
	path: key.replace('../project-previews/', '').replace('.mdx', ''),
	element: <LazyMdx importHook={mdxFunction as LazyMdxProps['importHook']} />,
}));

export default function ProjectsIndex() {
	const navigate = useNavigate()
	const locaiton = useLocation()
	const projects = useProjects()
	const [delayedLocation, setDelayedLocation] = useState(locaiton)
	const [currentSlug, setCurrentSlug] = useState<string>()
	const [targetSlug, setTargetSlug] = useState<string>()

	const buttonVariants: Variants = {
		normal: {},
		hover: {
				scale: 1.1,
				x: '-10%'
		},
		nonHover: {
				opacity: .5
		}
	}

	useEffect(() => {
		setDelayedLocation(locaiton)
	}, [])

	useEffect(() => {
		if(!currentSlug) setCurrentSlug(targetSlug)
	}, [targetSlug])

	if (delayedLocation.pathname === '/projects') return (
		<div id='blog-wrapper'>
			<div id='blog-preview-wrapper' style={{ flex: 1 }}>
				<AnimatePresence mode='wait'>
					{targetSlug && currentSlug === targetSlug ? (
						<motion.div
							initial={{ opacity: 0, filter: 'blur(50px)' }}
							animate={{ opacity: 1, filter: 'blur(0px)' }}
							exit={{ opacity: 0, filter: 'blur(10px)' }}
							style={{ maxHeight: '100%', flex: 1}}
						>
							{projectPreviewElements.find(({ path }) => path === currentSlug)!.element}
						</motion.div>
					) : (
						<EmptyTrigger trigger={() => setCurrentSlug(targetSlug)} />
					)}
				</AnimatePresence>
			</div>
			<div id='blog-index'>
				{projects.map(({ path }) => (
					<motion.button
						key={path}
						onClick={() => navigate(path)}
						onMouseEnter={() => setTargetSlug(path)}
						onMouseLeave={() => setTargetSlug(undefined)}
						variants={buttonVariants}
						animate={targetSlug ? path === targetSlug ? 'hover': 'nonHover' : 'normal'}
					>{path}</motion.button>
				))}
			</div>
		</div >
	)
	return (
		<div id='blog-md-wrapper'>
			<Outlet />
		</div>
	)
}
