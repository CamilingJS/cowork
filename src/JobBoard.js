import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { SECONDARY_NAVY, GREY } from './StyledComponents';

import Navbar from './NavBar'
import { Typography } from '@mui/material';

function LeftPanel(){
  return(
    <>
    <Box sx={{width:'20%', display:'flex', flexDirection:'column', alignItems:'start'}} >
      <Typography sx={{fontWeight:'bold', color:`${GREY}`}} variant="h5" gutterBottom>
        Find Work
      </Typography>
      <Typography sx={{mt:'48px'}} >Categories</Typography>
      <Typography  >Front End Dev</Typography>
      <Typography  >Design</Typography>
      <Typography  >E-Ecommerce</Typography>
      
    </Box>
    </>
  )
}

function RightPanel(){
  return(
    <>
    <Box sx={{width:'80%'}}>
      RightPanel
    </Box>
    </>
  )
    
  
}



export default function JobBoard() {
    return <>
      <Navbar />
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', padding:'46px 10%'}}>
        <LeftPanel  />
        <RightPanel />
      </Box>
    </>;
  }

  