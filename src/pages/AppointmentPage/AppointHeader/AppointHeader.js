import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointHeader = ({date,setDate}) => {
    
    return (
       <Container style={{marginTop:'20px'}}>
           <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography style={{textAlign:'center'}} variant='h3'>
                    Appointment
                </Typography>
                <Calender 
                date={date}
                setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={chair} alt="" style={{width:'100%'}} />
            </Grid>
           </Grid>
       </Container>
    )};

export default AppointHeader;