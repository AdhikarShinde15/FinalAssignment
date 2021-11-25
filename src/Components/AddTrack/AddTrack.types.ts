export interface ITrack {
    id: string
    trackName: string
    ownerName: string
    numberOfStudents: number
    trainerName: string
    location: string
    date: ""
    time: ""
}
export interface IAddTrackProps {
    trackState: ITrack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITrack[]>>
}