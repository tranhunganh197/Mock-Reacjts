import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import {useGetListRepo} from '../../redux/hook';

function ListRepoComponent() {

  const repos = useSelector((state: RootState) => state.repo)
  useGetListRepo()


  return (
    <div>
      <div className='d-flex justify-content-center align-items-center mb-3'><Link style={{ textDecoration: 'none'}} to="/add-repo">ADD <AddIcon></AddIcon></Link></div>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell align="right"><b>Watchers Count</b></TableCell>
              <TableCell align="right"><b>Open Issues</b></TableCell>
              <TableCell align="right"><b>Private</b></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.repo.map((row:any) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                 <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.watchers_count}</TableCell>
                <TableCell align="right">{row.open_issues}</TableCell>
                <TableCell align="right">{row.private ? 'X' : 'O'}</TableCell>
                <TableCell align="center"><Button>Update</Button></TableCell>
                <TableCell align="center"><Button>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListRepoComponent;