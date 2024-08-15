import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import './App.css';
import './drac.css';
import './gh.css';
import './rehype.css';
import { useLocation, useRoutes } from 'react-router-dom';
import Root from './layouts/Root';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import Home from './pages/home';
import { BlogContext, ProjectContext } from './contexts/contexts';
import BlogIndex from './pages/blogIndex';
import About from './pages/about';
import ProjectsIndex from './pages/projectIndex';

type MdxModule = {
	default: React.ComponentType
}
type LazyMdxProps = {
	importHook: () => Promise<MdxModule>
}

export type MdxMappingItem = {
	path: string,
	element: Element
}

const LazyMdx: React.FC<LazyMdxProps> = ({ importHook }) => {
	const [module, setModule] = useState<React.ComponentType>()
	const variants: Variants = {
		loading: {
			opacity: 0,
			filter: 'blur(50px)'
		},
		loaded: {
			opacity: 1,
		}
	}
	useEffect(() => {
		importHook().then(module => setModule(module.default))
	}, [])
	return (

		<motion.div
			variants={variants}
			animate={module ? 'loaded' : 'loading'}
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			{module ? module : <></>}
		</motion.div>
	)
}


const blogMdxElements: MdxMappingItem[] = Object.entries(import.meta.glob('./blogs/**.mdx')).map(([key, mdxFunction]) => ({
	path: key.replace('./blogs/', '').replace('.mdx', ''),
	element: <LazyMdx importHook={mdxFunction as LazyMdxProps['importHook']} />,
}));

const projectMdxElements: MdxMappingItem[] = Object.entries(import.meta.glob('./projects/**.mdx')).map(([key, mdxFunction]) => ({
	path: key.replace('./projects/', '').replace('.mdx', ''),
	element: <LazyMdx importHook={mdxFunction as LazyMdxProps['importHook']} />,
}));

function App() {
	const location = useLocation();
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
					path: '/projects/*',
					element: <ProjectsIndex />,
					children: projectMdxElements,
				},
				{
					path: '/blog/*',
					element: <BlogIndex />,
					children: blogMdxElements,
				},
				{
					path: '/projects',
					element: <ProjectsIndex />,
				},
				{
					path: '/about',
					element: <About />
				}
			],
		},
	]);

	return (
		<BlogContext.Provider value={blogMdxElements}>
			<ProjectContext.Provider value={projectMdxElements}>
				<AnimatePresence mode="wait">
					{router && React.cloneElement(router, { key: location.pathname })}
				</AnimatePresence>
			</ProjectContext.Provider>
		</BlogContext.Provider>
	);
}

export default App;

