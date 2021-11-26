import { SubmitHandler, useForm } from "react-hook-form"
import { IAddTrackProps, ITrack } from "./AddTrack.types"
import styles from "../AddTrack/AddTrack.module.scss"
import { nanoid } from 'nanoid'
import { useContext } from "react"
import { Context } from "../../Contexts/Context"
import { Button, MenuItem, Select, TextField } from "@mui/material"


const AddTrack = ({ trackState, setTrackState }: IAddTrackProps) => {
    const { TrainerDetails, OwnersDetails } = useContext(Context)
    const { register, handleSubmit } = useForm<ITrack>();
    const onSubmit: SubmitHandler<ITrack> = data => {
        let clone = [...trackState, { ...data, id: nanoid() }]
        setTrackState(clone)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Track Name</label>
            <TextField  variant="standard" type="text" {...register("trackName", { required: "TrackName Required" })} />
            <label>Owner Name</label>
            <Select variant="standard" {...register("ownerName", { required: "OwnerName Required" })} >
                {OwnersDetails && OwnersDetails.map(value => (
                    <MenuItem key={value.ownersName} value={value.ownersName}>
                        {value.ownersName}
                    </MenuItem>
                ))}
                {
                    OwnersDetails.length === 0 && <MenuItem value="none">
                        No Owner Added
                    </MenuItem>
                }
            </Select>
            <label>Number of Students</label>
            <TextField  variant="standard" type="number" {...register("numberOfStudents", { valueAsNumber: true, required: "Number of Students Required" })} />
            <label>Trainers Name</label>
            <Select variant="standard" {...register("trainerName")} >
                {TrainerDetails && TrainerDetails.map(value => (
                    <MenuItem key={value.trainerName} value={value.trainerName}>
                        {value.trainerName}
                    </MenuItem>
                ))}
                {
                    TrainerDetails.length === 0 && <MenuItem value="none">
                        No Trainer Added
                    </MenuItem>
                }
            </Select>
            <label>Location</label>
            <Select variant="standard" {...register("location", { required: "Location Required" })} >
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
            </Select>
            <label>Start Date</label>
            <TextField variant="standard" type="date" {...register("date", { required: "Start Date Reuired" })} />
            <label>Time</label>
            <TextField variant="standard" type="time" {...register("time", { required: "Time Reuired" })} />
            <div className={styles.btn}><Button variant="contained" type="submit">Add Track</Button></div>
        </form>

    )
}

export default AddTrack
