import { Context, createContext } from "react";

export interface IExperienceContext {
  showDetails: boolean
  toggleDetails: () => void
}

const defaultContext = {}

export const ExperienceContext: Context<IExperienceContext> = createContext(defaultContext as IExperienceContext)