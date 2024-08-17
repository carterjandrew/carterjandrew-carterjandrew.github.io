import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useBlog } from '../hooks/contextHooks'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import LazyMdx, { LazyMdxProps, MdxMappingItem } from '../components/lazyMdx';

const blogPreviewElements: MdxMappingItem[] = Object.entries(import.meta.glob('../blog-previews/**.mdx')).map(([key, mdxFunction]) => ({
	path: key.replace('../blog-previews/', '').replace('.mdx', ''),
	element: <LazyMdx importHook={mdxFunction as LazyMdxProps['importHook']} />,
}));

export default function BlogIndex() {
	const navigate = useNavigate()
	const locaiton = useLocation()
	const blog = useBlog()
	const [delayedLocation, setDelayedLocation] = useState(locaiton)
	const [hoveredSlug, setHoveredSlug] = useState<string>()

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

	if (delayedLocation.pathname === '/blog') return (
		<div id='blog-wrapper'>
			<div id='blog-preview-wrapper' style={{ flex: 1 }}>
				<AnimatePresence mode='wait'>
					{hoveredSlug && (
						<motion.div
							initial={{ opacity: 0, filter: 'blur(50px)' }}
							animate={{ opacity: 1, filter: 'blur(0px)' }}
							exit={{ opacity: 0, filter: 'blur(10px)' }}
							style={{ maxHeight: '100%'}}
						>
							{blogPreviewElements.find(({ path }) => path === hoveredSlug)!.element}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div id='blog-index'>
				{blog.map(({ path }) => (
					<motion.button
						key={path}
						onClick={() => navigate(path)}
						onMouseEnter={() => setHoveredSlug(path)}
						onMouseLeave={() => setHoveredSlug(undefined)}
						variants={buttonVariants}
						animate={hoveredSlug ? path === hoveredSlug ? 'hover': 'nonHover' : 'normal'}
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
