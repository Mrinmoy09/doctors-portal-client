import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'
import cavity from '../../../images/cavity.png'

const services = [
    {
        name:'Fluoride TreatMent',
        description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
        img:fluoride
    },
    {
        name:'Whitening Treatment',
        description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
        img:whitening
    },
    {
        name:'Cavity TreatMent',
        description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
        img:cavity
    }
]

const Services = () => {
    return (
        
        
        <Box sx={{flexGrow:1}}>
        <Container>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" >
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    </Box>
     
        
    );
};

export default Services;