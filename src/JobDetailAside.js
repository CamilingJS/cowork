import Paper from '@mui/material/Paper';

import {PrimaryButton, SecondaryButton } from './StyledComponents'

export default function JobDetailAside(){
    return(
        <>
        <Paper sx={{width:'1200px', height:'50vh'}}>
            <PrimaryButton sx={{mt:'16px', color:'white'}} >Get Referred</PrimaryButton>
            <SecondaryButton sx={{mt:'16px', color:'green'}} >Save Job</SecondaryButton>
        </Paper>
        </>
    )
}