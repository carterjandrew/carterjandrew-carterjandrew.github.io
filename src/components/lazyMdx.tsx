import { Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export type MdxModule = {
	default: React.ComponentType
}
export type LazyMdxProps = {
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
			style={{ display: 'flex', flexDirection: 'column', flex: 1}}
		>
			{module ? module : <></>}
		</motion.div>
	)
}

export default LazyMdx
