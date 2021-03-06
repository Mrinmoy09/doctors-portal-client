import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const Appointments = ({date}) => {
  const [isDeleted , setIsDeleted] =React.useState(null);
    const {user} = useAuth();
    const [appointmets,setAppointments] =useState([])
    useEffect(()=>{
        const url = `https://lit-caverns-99762.herokuapp.com/appointments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[date,isDeleted])

    const handleDelete = (id) => {
      
      fetch(`https://lit-caverns-99762.herokuapp.com/appointments/${id}`,{
          method:'DELETE',
          headers:{
              'content-type':'application/json'
          }
      })
      .then(res=>res.json())
          .then(result=>{
              if(result.deletedCount){
               setIsDeleted(true)
              }
              else{
                  setIsDeleted(false);
              }
          })
          alert('Are you sure you want to cancel this Booking?')
  }

    return (
        <TableContainer component={Paper}>
      <Table  aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
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
              
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><Button onClick={()=>{handleDelete(row._id)}} variant="contained" sx={{bgcolor:'dark'}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Appointments;