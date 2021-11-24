import { SetStateAction, useContext, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Context } from "../../../App"
import { nanoid } from "nanoid"

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

interface IOwnerModalProps {
    open: SetStateAction<boolean>
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAddOwner {
    ownersName: string
}

const AddOwnerModal = ({ open, handleOpen }: IOwnerModalProps) => {
    const { OwnersDetails , setOwnersDetails } = useContext(Context)
    const [on, setOn] = useState(false)
    const { register, handleSubmit } = useForm<IAddOwner>()
    const onSubmit: SubmitHandler<IAddOwner> = data => {
        let clone = [...OwnersDetails , {...data, id: nanoid()}]
        setOwnersDetails(clone)
        alert("Owner Add But I have not creaeted table yet on this page go to Home page to see it")
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
                            <input type="text" {...register("ownersName")} /><br/>
                            <input type="submit" />
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default AddOwnerModal

