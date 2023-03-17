import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const Navigationbar = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography align="left"variant="h6" component="div" sx={{ flexGrow: 1 }}>
            welcome to meta world
          </Typography>
          <Button color="inherit"><Link to ='/Login' >Login</Link></Button>
          <Button color="inherit"><Link to ='/Signup'>Signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>    
)
}
        

        
        

  

export default Navigationbar
