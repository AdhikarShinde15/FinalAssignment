import { ITrackDetailsProps } from "./TrackDetails.types"

const TrackDetails = ({ trackState }: ITrackDetailsProps) => {
    return <div>
        {
            trackState.map(track => <p key={track.id}>{track.id}</p>)
        }
    </div>
}

export default TrackDetails
