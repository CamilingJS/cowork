
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';


import Navbar from './NavBar'
import JobDetailSection from './JobDetailSection'
import JobDetailAside from './JobDetailAside'

export default function JobDetail({allJobs}) {

  let { id: idFromUrl } = useParams();
  const selectedJob = allJobs.find((job)=>{
    return job.id === Number(idFromUrl); // if job.id === +idFromUrl return true else return false }
  })

    return (
      <>
      <Navbar />
      <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'40px', width:'75%'}} >
        <JobDetailSection selectedJob={selectedJob} />
        <JobDetailAside selectedJob={selectedJob} />
      </Box>
      </Box>
      </>
    )
  }
  