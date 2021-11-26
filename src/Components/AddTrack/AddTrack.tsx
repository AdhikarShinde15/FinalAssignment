import { SubmitHandler, useForm } from "react-hook-form"
import { IAddTrackProps, ITrack } from "./AddTrack.types"
import styles from "../AddTrack/AddTrack.module.scss"
import { nanoid } from 'nanoid'
import { useContext } from "react"
import { Context } from "../../Contexts/Context"
import { Button, Select, TextField } from "@mui/material"


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
                    <option key={value.ownersName} value={value.ownersName}>
                        {value.ownersName}
                    </option>
                ))}
                {
                    OwnersDetails.length === 0 && <option value="none">
                        No Owner Added
                    </option>
                }
            </Select>
            <label>Number of Students</label>
            <TextField  variant="standard" type="number" {...register("numberOfStudents", { valueAsNumber: true, required: "Number of Students Required" })} />
            <label>Trainers Name</label>
            <Select variant="standard" {...register("trainerName")} >
                {TrainerDetails && TrainerDetails.map(value => (
                    <option key={value.trainerName} value={value.trainerName}>
                        {value.trainerName}
                    </option>
                ))}
                {
                    TrainerDetails.length === 0 && <option value="none">
                        No Trainer Added
                    </option>
                }
            </Select>
            <label>Location</label>
            <Select variant="standard" {...register("location", { required: "Location Required" })} >
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Online">Online</option>
            </Select>
            <label>Start Date</label>
            <TextField variant="standard" type="date" {...register("date", { required: "Start Date Reuired" })} />
            <label>Time</label>
            <TextField variant="standard" type="time" {...register("time", { required: "Time Reuired" })} />
            <Button className={styles.btn} variant="contained" type="submit">Add Track</Button>
        </form>

    )
}

export default AddTrack
