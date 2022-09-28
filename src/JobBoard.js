import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import {  GREY } from './StyledComponents';
import Navbar from './NavBar'


function LeftPanel(){
  return(
    <>
    <Box sx={{width:'20%', display:'flex', flexDirection:'column', alignItems:'start'}} >
      <Typography sx={{fontWeight:'bold', color:`${GREY}`, fontSize:'xx-large'}} variant="h5" gutterBottom>
        Find Work
      </Typography>
      <Typography sx={{mt:'48px', fontWeight:'bold', color:`${GREY}`, padding:'8px 0', fontSize:'x-large'}} >Categories</Typography>
      <Typography sx={{color:`${GREY}`, padding:'8px 0', fontSize:'medium'}} >Front End Dev</Typography>
      <Typography sx={{color:`${GREY}`, padding:'8px 0', fontSize:'medium'}} >Design</Typography>
      <Typography sx={{color:`${GREY}`, padding:'8px 0', fontSize:'medium'}} >E-Ecommerce</Typography>
      
    </Box>
    </>
  )
}

function RightPanel(){
  return(
    <>
    <Box sx={{width:'80%', display:'flex', flexDirection:'column'}}>
      <Box>
        Search Bar Goes Here
      </Box>
      <Box sx={{mt:'88px', height:'100vh', backgroundColor:'white', borderRadius:'4px'}} ></Box>
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

  