import { Button, TextField , Box} from '@mui/material';
import React from 'react';
import bg from '../../../images/bg.png';

const contactBg = {
    backGround:`url(${bg})`,
    marginTop:'50px',
    backgroundColor:'rgba(41, 59, 112  ,0.95)',
    backgroundBlendMode: 'darken, luminosity',
    borderRadius:'5px',
    padding:'10px',
    marginBottom:'30px',
    height:'400px'
}


const ContactForm = () => {

    const handleContact = (e) =>{
        alert('You will reach you soon..')
        e.preventDefault();
    }

    return (
        
              <Box sx={contactBg}>
                  <form onSubmit={handleContact} sx={{mt:4}}>
                         <TextField 
                            type="email"
                            variant="outlined" 
                            placeholder="email address"
                            sx={{ width: '90%', mt: 5 , mb:1,bgcolor:'white'}}
                            id="outlined-basic"
                            size="normal"
                        />
                        <TextField
                            sx={{ width: '90%', m:1,bgcolor:'white' }}
                            id="outlined-size-small"
                            size="normal"
                            placeholder="subject"
                            
                        />
                        
                        <TextField
                            placeholder="Your Comment"
                            sx={{ width: '90%', m:1 ,bgcolor:'white'}}
                            id="outlined-multiline-static"
                            multiline
                            rows={5}
                            size="normal"
                        />
                       <br />
                       <Button type="submit" sx={{bgcolor:'#36DDCC'}} variant="contained">Submit</Button>
             
                  </form>
                  
              </Box>
  
    );
};

export default ContactForm;