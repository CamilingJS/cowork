
import Box from '@mui/material/Box';


import Navbar from './NavBar'
import JobDetailSection from './JobDetailSection'
import JobDetailAside from './JobDetailAside'

export default function JobDetail() {
    return (
      <>
      <Navbar />
      <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'40px', width:'75%'}} >
        <JobDetailSection  />
        <JobDetailAside />
      </Box>
      </Box>
      </>
    )
  }
  