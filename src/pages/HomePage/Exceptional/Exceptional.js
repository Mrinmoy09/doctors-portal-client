import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Exceptional = () => {
    return (
    
       <Container xs={{mt:5}}>
             <Grid container spacing={2} sx={{my:3}}>
        <Grid item xs={12} md={5}>
        <img src={treatment} alt="" style={{width:'100%'}} />
        </Grid>
        <Grid item xs={12} md={5} sx={{my:3,mx:2}} style={{textAlign:'left'}}>
          <Box>
          <Typography variant='h4' sx={{fontWeight:400 ,textAlign:'left'}}>
            Exceptional Dental <br/> Care,on your terms
          </Typography>
          <Typography variant="body1" color='text.secondary' sx={{textAlign:'left' , my:3}}> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ducimus reprehenderit sapiente dignissimos.
          Enim voluptatem debitis dolorum veritatis expedita aspernatur animi!
          Fluoride treatments are typically professional treatments containing a 
          high concentration of fluoride that a dentist or hygienist will apply to a person's 
          teeth to improve health and reduce the risk of cavities. 
          These in-office treatments may take the form of a solution, gel, foam, or varnish.
          Ducimus reprehenderit sapiente dignissimos.
          Enim voluptatem debitis dolorum veritatis expedita aspernatur animi!
          Fluoride treatments are typically professional treatments containing a 
          high concentration of fluoride that a dentist or hygienist will apply to a person's 
          teeth to improve health and reduce the risk of cavities. 
          These in-office treatments may take the form of a solution, gel, foam, or varnish.
          </Typography>
          <Button variant="contained" sx={{bgcolor:'#36DDCC'}} style={{fontWeight:500}}>Learn More</Button>
          </Box>
        </Grid>
        </Grid>
       </Container>
    
        )
};

export default Exceptional;