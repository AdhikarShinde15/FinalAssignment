import Header from "../Header/Header"
import AddTrack from "../AddTrack/AddTrack"
import styles from "../Dashboard/Dashboard.module.scss"
import BasicTable from "../Table/Table"
import { IDashboardProps } from "./Dashboard.types"
import { useContext } from "react"
import { Context } from "../../App"

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
