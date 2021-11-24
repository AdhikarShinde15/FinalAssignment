import { SubmitHandler, useForm } from "react-hook-form"
import { ITack } from "./AddTrack.types"
import styles from "../AddTrack/AddTrack.module.scss"
import { nanoid } from 'nanoid'
import { useContext } from "react"
import { Context } from "../../App"

interface IAddTrackProps {
    trackState: ITack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITack[]>>
}

const AddTrack = ({ trackState, setTrackState }: IAddTrackProps) => {
    const { TrainerDetails, OwnersDetails } = useContext(Context)
    const { register, handleSubmit } = useForm<ITack>();
    const onSubmit: SubmitHandler<ITack> = data => {
        let clone = [...trackState, { ...data, id: nanoid() }]
        setTrackState(clone)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Track Name</label>
            <input type="text" {...register("trackName")} />
            <label>Owner Name</label>
            <select {...register("ownerName")} >
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
            </select>
            <label>Number of Students</label>
            <input type="number" {...register("numberOfStudents", { valueAsNumber: true })} />
            <label>Trainers Name</label>
            <select {...register("trainerName")} >
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
            </select>
            <label>Location</label>
            <select {...register("location")} >
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Online">Online</option>
            </select>
            <label>Start Date</label>
            <input type="date" {...register("date")} />
            <label>Time</label>
            <input type="time" {...register("time")} />
            <input type="submit" />
        </form>

    )
}

export default AddTrack
