import { ITrack } from "../AddTrack/AddTrack.types";

export interface ITrackDetailsProps  {
    trackState: ITrack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITrack[]>>
}