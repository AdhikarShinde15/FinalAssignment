import { useContext, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Context } from "../../../Contexts/Context"
import { nanoid } from "nanoid"
import { IAddTrainer, ITrainerModalProps } from "./AddTrainerModal.types"
import { Button, MenuItem, Select, TextField } from "@mui/material"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const AddTrainerModal = ({ open, handleOpen }: ITrainerModalProps) => {
    const { TrainerDetails, setTrainerDetails } = useContext(Context)
    const [on, setOn] = useState(false)
    const { register, handleSubmit } = useForm<IAddTrainer>()
    const onSubmit: SubmitHandler<IAddTrainer> = data => {
        let clone = [...TrainerDetails, { ...data, id: nanoid() }]
        setTrainerDetails(clone)
        setOn(false)
    }
    useEffect(() => {
        setOn(open)
    }, [open])

    return (
        <div>
            <Modal
                open={on}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New Trainer
                    </Typography>
                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>New Trainers Name</label>
                            <TextField variant="standard" type="text" {...register("trainerName")} /><br/><br/>
                            <label>Select Track</label>
                            <Select fullWidth variant="standard" {...register("trackName")} >
                                <MenuItem value="React">React</MenuItem>
                                <MenuItem value="Angular">Angular</MenuItem>
                                <MenuItem value="Flutter">Flutter</MenuItem>
                            </Select><br/><br/>
                            <Button variant="contained" type="submit">Add Trainner</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default AddTrainerModal
