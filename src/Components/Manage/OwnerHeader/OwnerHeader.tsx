import { Button } from "@mui/material"
import { useState } from "react"
import AddOwnerModal from "../AddOwnerModal/AddOwnerModal";
import styles from "../OwnerHeader/OwnerHeader.module.scss"


const OwnerHeader = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if(open)
        setOpen(!open)
        else
        setOpen(!open)
    }
    return <> 
      <div className={styles.ownerHeader}>
            <h3>Owners</h3>
            <Button onClick={handleOpen}>Add</Button>
        </div>
        <AddOwnerModal open={open} handleOpen={handleOpen}/>
    </>
}

export default OwnerHeader
