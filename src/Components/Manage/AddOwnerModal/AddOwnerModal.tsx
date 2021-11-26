import { useContext, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Context } from "../../../Contexts/Context"
import { nanoid } from "nanoid"
import { IAddOwner, IOwnerModalProps } from "./AddOwnerModal.types"
import { Button, TextField } from "@mui/material"

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

const AddOwnerModal = ({ open, handleOpen }: IOwnerModalProps) => {
    const { OwnersDetails , setOwnersDetails } = useContext(Context)
    const [on, setOn] = useState(false)
    const { register, handleSubmit } = useForm<IAddOwner>()
    const onSubmit: SubmitHandler<IAddOwner> = data => {
        let clone = [...OwnersDetails , {...data, id: nanoid()}]
        setOwnersDetails(clone)
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
                        Add New Owner
                    </Typography>
                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                       <form onSubmit={handleSubmit(onSubmit)}>
                            <label>New Owners Name</label>
                            <TextField variant="standard" type="text" {...register("ownersName")} /><br/>
                            <Button variant="contained" type="submit">Add Owner</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default AddOwnerModal

