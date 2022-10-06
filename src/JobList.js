import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FiMapPin } from "react-icons/fi";

import {  GREY } from './StyledComponents';

export default function JobList(){

    return (
        <Paper>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', padding:'32px 24px'}} >
                <Typography sx={{fontWeight:'bold', color:`${GREY}`, fontSize:'x-large'}} >
                    Front End Software Developer
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    Hourly: $45.00
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    Posted 50 minutes ago
                </Typography>
                <Typography sx={{fontSize:'medium', fontWeight:'bold', color:`${GREY}`}} variant="h6" gutterBottom>
                    <FiMapPin sx={{color:'green'}} /> Remote, United States 
                </Typography>
                <Typography sx={{fontSize:'medium', color:`${GREY}`, textAlign:'left'}} variant="h6" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Divider />
            </Box>
            <Box>
                <Divider />
            </Box>
            <Box>
                <Divider />
            </Box>
        </Paper>
    )
}