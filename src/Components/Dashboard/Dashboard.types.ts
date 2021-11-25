import { ITrack } from "../AddTrack/AddTrack.types";

export interface IDashboardProps {
    trackState: ITrack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITrack[]>>
}