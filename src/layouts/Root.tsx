import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { useState } from "react";
import {transitionContext, TransitionContextType} from '../contexts/transitionContext'

export default function Root() {
	const [transition, setTransition] = useState<TransitionContextType[0]>({
		duration: .75,
		ease: 'circInOut'
	})
	const setTransitionHook: TransitionContextType[1] = (newTransition) => setTransition(newTransition)
	return (
		<transitionContext.Provider value={[transition, setTransitionHook]}>
			<NavBar />
			<NavBar style={{opacity: 0, position: 'static'}} />
			<motion.div
				initial={{ opacity: 0, filter: 'blur(50px)' }}
				animate={{ opacity: 1, filter: 'blur(0px)', transition: transition }}
				exit={{ opacity: 0, filter: 'blur(10px)', transition: transition }}
			>
				<Outlet />
			</motion.div>
		</transitionContext.Provider>
	)
}
