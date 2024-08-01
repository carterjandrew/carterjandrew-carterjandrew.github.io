import { useContext } from "react";
import { transitionContext } from "../contexts/transitionContext";

export const useTransition = () => useContext(transitionContext)
