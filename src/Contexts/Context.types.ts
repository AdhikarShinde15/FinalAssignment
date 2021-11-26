import { ITrack } from "../Components/AddTrack/AddTrack.types";

export interface ITrainerDetails {
    trainerName: string
    trackName: string
    id: string
  }
export interface IOwnersDetails {
    ownersName: string
    id: string
}
  
export interface ContextData {
    trackState: ITrack[]
    OwnersDetails: IOwnersDetails[]
    TrainerDetails: ITrainerDetails[]
    setTrackState: React.Dispatch<React.SetStateAction<ITrack[]>>
    setTrainerDetails: React.Dispatch<React.SetStateAction<ITrainerDetails[]>>
    setOwnersDetails: React.Dispatch<React.SetStateAction<IOwnersDetails[]>>
}