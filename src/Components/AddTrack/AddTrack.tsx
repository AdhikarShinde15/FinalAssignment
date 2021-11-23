import { SubmitHandler, useForm } from "react-hook-form"
import { ITack } from "./AddTrack.types"
import styles from "../AddTrack/AddTrack.module.scss"
import { nanoid } from 'nanoid'

interface IAddTrackProps  {
    trackState: ITack[]
    setTrackState: React.Dispatch<React.SetStateAction<ITack[]>>
}
 
const AddTrack = ({ trackState, setTrackState }: IAddTrackProps) => {
    
    const { register, handleSubmit } = useForm<ITack>();
    const onSubmit: SubmitHandler<ITack> = data => {
        let clone = [...trackState, {...data, id: nanoid()}]
        setTrackState(clone)
    }
    
    return (
     <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Track Name</label>
      <input type="text" {...register("trackName")} />
      <label>Owner Name</label>
      <input type="text" {...register("ownerName")} />
      <label>Student Name</label>
      <input type="number" {...register("numberOfStudents",{ valueAsNumber: true })} />
      <label>Trainers Name</label>
      <input type="text" {...register("trainerName")} />
      <label>is Online</label>
      <input type="checkbox" {...register("isOnline")} />
      <label>Date</label>
      <input type="date" {...register("date")} />
      <label>Time</label>
      <input type="date" {...register("time")} />
      <input type="submit" />
    </form>
       
    )
}

export default AddTrack
