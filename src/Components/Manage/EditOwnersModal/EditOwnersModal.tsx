import { useContext, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Context } from "../../../App"
import { Button } from "@mui/material"
import { IEditOwner, IOwnersModalProps } from "./EditOwnersModal.types"

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

const EditOwnerModal = ({ open, handleOpen, id }: IOwnersModalProps) => {
    const { OwnersDetails, setOwnersDetails } = useContext(Context)
    const [on, setOn] = useState(false)
    const { register, handleSubmit } = useForm<IEditOwner>()
    const onSubmit: SubmitHandler<IEditOwner> = data => {
        let clone = OwnersDetails.map((ele) => {
            if(ele.id === id)
            {
                ele.ownersName = data.ownerName
                return ele
            }
            else
            return ele
        })
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
                        Edit Trainer
                    </Typography>
                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Edit Trainers Name</label>
                            <input type="text" {...register("ownerName")} /><br />
                            <input type="submit" />
                            <Button onClick={() => handleOpen}>Close</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default EditOwnerModal

