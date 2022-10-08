import { Typography, Box } from '@mui/material';
import {Divider} from '@mui/material';
import { FiMapPin } from "react-icons/fi";


import {GREY, PRIMARY_GREEN} from './StyledComponents'


export default function JobDetailSection(){
    return(
        <>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', padding:'0 32px 0 0'}} >
            <Typography variant="h5" sx={{fontWeight:'bold', color:`${GREY}`, paddingBottom:'16px'}}  > Front End Software Developer </Typography>
            <Divider sx={{width:'100%'}} />
            <Typography variant="subtitle1" sx={{fontWeight:'bold', color:`${PRIMARY_GREEN}`, marginTop:'16px'}} >Front End Dev</Typography>
            <Typography variant="subtitle1" sx={{color:`${GREY}`}} >Posted 50 minutes ago</Typography>
            <Typography variant="subtitle1" sx={{color:`${GREY}`, paddingBottom:'16px'}} >
            <FiMapPin sx={{fontWeight:'bold', color:'green'}} />  Remote, United States
            </Typography>
            <Divider sx={{width:'100%'}} />
            <Typography variant="subtitle1" sx={{color:`${GREY}`, textAlign:'left', marginTop:'16px', paddingBottom:'16px'}} >
            Bacon ipsum dolor amet buffalo alcatra tri-tip picanha, cupim bresaola turkey tail meatball rump turducken corned beef pork chop frankfurter pancetta. Filet mignon landjaeger rump strip steak cow pork loin capicola turducken. Leberkas hamburger swine spare ribs, pig shoulder tenderloin filet mignon shankle venison bresaola pork belly pork strip steak. Pork chop bresaola doner ribeye, boudin sirloin chislic sausage meatloaf swine pork belly fatback. Kevin brisket chislic short ribs jerky tenderloin ham hock tri-tip hamburger ribeye porchetta pig shankle.
            </Typography>
            <Divider sx={{width:'100%'}} />
        </Box>
        </>
    )
}