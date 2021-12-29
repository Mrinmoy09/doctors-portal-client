import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageAppointments = () => {
    const {user} = useAuth();
    const [appointmets,setAppointments] =useState([])
    const [status,setStatus] = useState("")
    const handleStatus = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
       
      };
    useEffect(()=>{
        const url = 'https://lit-caverns-99762.herokuapp.com/allAppointments'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[])
    const handleUpdate = (id) => {
      
        fetch(`https://lit-caverns-99762.herokuapp.com/allAppointments/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status})
            
        })
        
    };
    return (
        <TableContainer component={Paper}>
      <Table  aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointmets.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right"><form onChange={handleStatus}> <select>
                  <option value={row.status}>{row.status}</option>
                  <option type="text">Approved</option>
                  </select>
                  <button 
              style={{backgroundColor:'black' , border:'0',color:'white' ,cursor:'pointer', padding:'10px' ,borderRadius:'2px'}}
              onClick={()=>handleUpdate(row._id)}>Update</button>
                  </form>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageAppointments;