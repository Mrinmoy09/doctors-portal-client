import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background:`url(${bg})`,
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 , mt:5 ,mb:3}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{textAlign:'left'}} sx={{display:'flex',alignItems:'center'}}>
          <Box>
          <Typography variant="h4" sx={{mb:2 , fontWeight:500}}>
            Your New Smile <br /> Starts Here
          </Typography>
          <Typography variant="body1" sx={{fontSize:'14px',color:'gray' ,fontWeight:300 ,mb:2}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus reprehenderit sapiente dignissimos. 
            Enim voluptatem debitis dolorum veritatis expedita aspernatur animi!
          </Typography>
          <Button variant="contained" sx={{bgcolor:'#36DDCC'}} style={{fontWeight:500}}>Get Appointment</Button>
 
          </Box>
          </Grid>
        <Grid item xs={12} md={7}>
          <img src={chair} alt="" style={{width:'100%'}} />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;