import { createContext } from "react";
import { ContextData } from "./Context.types";
  
export const ContextDefaultValue: ContextData = {
    trackState: [],
    TrainerDetails: [],
    OwnersDetails: [],
    setTrackState: () => null,
    setTrainerDetails: () => null,
    setOwnersDetails: () => null
}
  
export const Context = createContext<ContextData>(ContextDefaultValue);
  