import { Button } from "@mui/material"
import { useState } from "react"
import AddTrainerModal from "../AddTrainerModal/AddTrainerModal";
import styles from "../TrainerHeader/TrainerHeader.module.scss"


const TrainerHeader = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if(open)
        setOpen(!open)
        else
        setOpen(!open)
    }
    return <> 
      <div className={styles.trainerHeader}>
            <h3>Trainers</h3>
            <Button onClick={handleOpen}>Add</Button>
        </div>
        <AddTrainerModal open={open} handleOpen={handleOpen}/>
    </>
}

export default TrainerHeader
