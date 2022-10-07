import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FiMapPin } from "react-icons/fi";

import {  GREY } from './StyledComponents';

export default function JobList({allJobs}){

    return (
        <Paper>
           {allJobs.map(job=>{
        return(
            <Box key={job.id}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', padding:'32px 24px'}} >
                <Typography sx={{fontWeight:'bold', color:`${GREY}`, fontSize:'x-large'}} >
                    {job.title}
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    Hourly: ${job.hourlyUSD}
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    Posted {job.postedTime}
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    <FiMapPin sx={{color:'green'}} /> {job.remote? "Remote" : "In Office"}, {job.location} 
                </Typography>
                <Typography sx={{fontSize:'medium', color:`${GREY}`, textAlign:'left'}} variant="h6" gutterBottom>
                {job.description}
                </Typography>
                
                </Box>
                <Divider />
            </Box>
        )
    })}
           
           
        </Paper>
    )
}