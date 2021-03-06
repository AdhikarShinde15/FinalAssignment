import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ITableProps } from './Table.types'

export default function BasicTable({ trackState }: ITableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track Name</TableCell>
            <TableCell align="right">Owner Name</TableCell>
            <TableCell align="right">Number of Students</TableCell>
            <TableCell align="right">Trainers Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackState.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.trackName}
              </TableCell>
              <TableCell align="right">{row.ownerName}</TableCell>
              <TableCell align="right">{row.numberOfStudents}</TableCell>
              <TableCell align="right">{row.trainerName}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

