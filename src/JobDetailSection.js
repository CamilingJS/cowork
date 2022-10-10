import { Typography, Box } from '@mui/material';
import {Divider} from '@mui/material';
import { FiMapPin } from "react-icons/fi";


import {GREY, PRIMARY_GREEN} from './StyledComponents'


export default function JobDetailSection({selectedJob}){
    return(
        <>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', padding:'0 32px 0 0'}} >
            <Typography variant="h5" sx={{fontWeight:'bold', color:`${GREY}`, paddingBottom:'16px'}}  > {selectedJob.title} </Typography>
            <Divider sx={{width:'100%'}} />
            <Typography variant="subtitle1" sx={{fontWeight:'bold', color:`${PRIMARY_GREEN}`, marginTop:'16px'}} >{selectedJob.category}</Typography>
            <Typography variant="subtitle1" sx={{color:`${GREY}`}} >Posted {selectedJob.postedTime}</Typography>
            <Typography variant="subtitle1" sx={{color:`${GREY}`, paddingBottom:'16px'}} >
            <FiMapPin sx={{fontWeight:'bold', color:'green'}} />  {selectedJob.remote ? "Remote" : "In Office"}, {selectedJob.location}
            </Typography>
            <Divider sx={{width:'100%'}} />
            <Typography variant="subtitle1" sx={{color:`${GREY}`, textAlign:'left', marginTop:'16px', paddingBottom:'16px'}} >
            {selectedJob.description}
            </Typography>
            <Divider sx={{width:'100%'}} />
        </Box>
        </>
    )
}