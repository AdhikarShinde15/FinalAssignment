import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
// import { Context } from "../../../App"
import { Context } from '../../../Contexts/Context'
import { useContext, useState } from 'react'
import { Button } from '@mui/material'
import EditOwnerModal from '../EditOwnersModal/EditOwnersModal'


const OwnersTable = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const handleOpen = () => {
        if (open)
            setOpen(!open)
        else
            setOpen(!open)
    }
    const { OwnersDetails, setOwnersDetails } = useContext(Context)
    const rows = [...OwnersDetails]
    const deleteTrainer = (id: string) => {
        setOwnersDetails(OwnersDetails.filter(ele => ele.id !== id))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Owners Name</TableCell>
                        <TableCell >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.ownersName}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Button onClick={() => {
                                    handleOpen();
                                    setId(row.id)
                                }}><EditIcon /></Button>
                                <EditOwnerModal open={open} handleOpen={handleOpen} id={id} />
                                <Button onClick={() => deleteTrainer(row.id)}><DeleteOutlineIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OwnersTable
