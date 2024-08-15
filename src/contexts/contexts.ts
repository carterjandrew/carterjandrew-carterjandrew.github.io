import { createContext } from "react";
import { MdxMappingItem } from "../App";

export const BlogContext = createContext<MdxMappingItem[]>([])
export const ProjectContext = createContext<MdxMappingItem[]>([])
