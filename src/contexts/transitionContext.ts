import { Transition } from "framer-motion";
import { createContext } from "react";

export type TransitionContextType = [Transition, (newNum: Transition) => void]

export const transitionContext = createContext([.25, () => null] as TransitionContextType)
