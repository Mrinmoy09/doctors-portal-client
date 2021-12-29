import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const[email,setEmail] = useState('')
    const [success,setSuccess] = useState(false)
    const {token}=useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = (e) => {
        const user ={email}
        fetch('https://lit-caverns-99762.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
                console.log(data);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField
             sx={{my:2,width:'50%'}}
             type='email'
             label="Email"
             onBlur={handleOnBlur} 
             variant="standard" />
             <br/>
             <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
           {success && <Alert severity="success">
         <AlertTitle>Success</AlertTitle>
            You have made a admin successfully — <strong>Congrats!</strong>
        </Alert>}
        </div>
    );
};

export default MakeAdmin;