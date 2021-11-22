import { ITack } from "../AddTrack/AddTrack.types"

interface ITrackDetailsProps  {
    trackState: ITack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITack[]>>
}

const TrackDetails = ({ trackState }: ITrackDetailsProps) => {
    return <div>
        {
            trackState.map(track => <p key={track.id}>{track.id}</p>)
        }
    </div>
}

export default TrackDetails
