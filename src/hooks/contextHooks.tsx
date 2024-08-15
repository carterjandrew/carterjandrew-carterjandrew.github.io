import { useContext } from "react";
import { transitionContext } from "../contexts/transitionContext";
import { BlogContext, ProjectContext} from "../contexts/contexts";

export const useTransition = () => useContext(transitionContext)
export const useBlog = () => useContext(BlogContext)
export const useProjects= () => useContext(ProjectContext)
