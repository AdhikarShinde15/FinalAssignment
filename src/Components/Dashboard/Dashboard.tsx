import Header from "../Header/Header"
import AddTrack from "../AddTrack/AddTrack"
import styles from "../Dashboard/Dashboard.module.scss"
import BasicTable from "../Table/Table"
import { useContext } from "react"
import { Context } from "../../Contexts/Context"

const Dashboard = () => {
    const { trackState, setTrackState } = useContext(Context)
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
