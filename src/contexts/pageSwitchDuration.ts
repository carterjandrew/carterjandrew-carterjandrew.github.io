import { createContext } from "react";

export type PageSwitchDurationType = [number, (newNum: number) => void]

export const pageSwitchDurationContext = createContext([.25, () => null] as PageSwitchDurationType)
