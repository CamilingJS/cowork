import Paper from '@mui/material/Paper';
import { FaHeart, FaCheckCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import {Divider} from '@mui/material';
import { Typography, Box } from '@mui/material';

import {PrimaryButton, SecondaryButton, GREY, PRIMARY_GREEN } from './StyledComponents'

export default function JobDetailAside({selectedJob}){
    return(
        <>
        <Paper sx={{width:'1200px', height:'50%'}}>
            <PrimaryButton sx={{mt:'16px', color:'white'}} ><h5>Get Referred</h5></PrimaryButton>
            <SecondaryButton sx={{mt:'16px', color:'green'}} > <FaHeart/> <h5 style={{padding:'0 8px'}} >Save Job</h5></SecondaryButton>
            <Divider sx={{margin:'16px 0', width:'100%'}} />
            <Box sx={{padding:'0 32px'}}>
            <Typography sx={{color:`${GREY}`, textAlign:'left', paddingBottom:'8px'}} >About the client</Typography>
            <Typography sx={{color:`${GREY}`, textAlign:'left', paddingBottom:'8px'}} ><FaCheckCircle /> Client {selectedJob.verified ? "Verified": "not Verified"}</Typography>
            <Typography sx={{color:`${GREY}`, textAlign:'left', paddingBottom:'8px'}} ><FiMapPin/> {selectedJob.location}</Typography>
            </Box>
            <Divider sx={{margin:'16px 0', width:'100%'}} />
            <Box sx={{padding:'0 32px'}}>
            <Typography sx={{color:`${GREY}`, textAlign:'left', fontWeight:'bold', paddingBottom:'8px'}} >Job Link</Typography>
            <Typography sx={{color:`${GREY}`, textAlign:'left', backgroundColor:'whitesmoke', border:`1px solid whitesmoke`, padding:'0 8px', marginBottom:'8px'}} >{selectedJob.link}</Typography>
            <a style={{textDecoration:'none'}} href={selectedJob.link} >
            <Typography sx={{color:`${PRIMARY_GREEN}`, textAlign:'left', fontWeight:'bold'}} >Go To Link</Typography>
            </a>
            
            </Box>
            <Divider sx={{margin:'16px 0', width:'100%'}} />
        </Paper>
        </>
    )
}