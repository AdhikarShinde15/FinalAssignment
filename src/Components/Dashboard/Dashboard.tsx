import Header from "../../Header/Header"
import AddTrack from "../AddTrack/AddTrack"
import { ITack } from "../AddTrack/AddTrack.types"
import styles from "../Dashboard/Dashboard.module.scss"
import BasicTable from "../Table/Table"

interface IDashboardProps {
    trackState: ITack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITack[]>>
}

const Dashboard = ({ trackState, setTrackState }: IDashboardProps) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <AddTrack trackState={trackState} setTrackState={setTrackState} />
                <BasicTable trackState={trackState}/>
            </div>
        </div>
    )
}

export default Dashboard
