import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${appointment})`,
    marginTop:'175px',
    backgroundColor:'rgba(64, 64, 75 ,0.58)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width:400 , marginTop:'-110px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={7} md={6} sx={{display:'flex' ,
        justifyContent:'flex-start',
         textAlign:'left',
         alignItems:'center',
      }}>
         <Box>
         <Typography variant="h6" sx={{mb:2}} style={{color:'#36DDCC',fontWeight:600 ,fontSize:'28px'}}>
            Appointment
          </Typography>
          <Typography variant="h6" sx={{mb:2}}  style={{color:'white',fontWeight:600}}>
            Make an Appointment Today
          </Typography>
          <Typography variant="h6" sx={{mb:2}}  style={{color:'white',fontWeight:300,fontSize:'14px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis ratione assumenda doloremque magni nisi, dolorum deserunt eaque molestias unde!
          </Typography>
          <Button variant="contained" sx={{bgcolor:'#36DDCC'}} style={{fontWeight:500}}>Learn More</Button>
         </Box>
        </Grid>
        </Grid>
        </Box>
    );
};

export default AppointmentBanner;