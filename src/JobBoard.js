import * as React from 'react';
import {useState} from 'react'; 
import Box from '@mui/material/Box';


import Navbar from './NavBar'
import BodySearch from './BodySearch';
import JobList from './JobList';
import CategoryMenu from './CategoryMenu'
import { Typography } from '@mui/material';


function RightPanel({jobs, selectedCategory}){
  console.log(jobs)
  return(
    <>
    <Box sx={{width:'80%', display:'flex', flexDirection:'column'}}>
      <BodySearch /> 

    <Box sx={{mt:'48px', borderRadius:'4px'}} >
      <JobList jobs={jobs.filter(job => job.category === selectedCategory)} />   
    </Box>
    </Box>
    </>
  ) 
}

export default function JobBoard({allJobs}) {

  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = []; 
  for(let job of allJobs){
    if(!categories.includes(job.category)){
      categories.push(job.category)
    }
  }
  
  
    return (<>
      <Navbar />
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', padding:'40px 10%'}}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'start'}} >
          <Typography variant="h5" sx={{fontWeight:'bold', margin:'0 24px 0 0'}} gutterBottom >Find Work</Typography>
          <Typography variant="h6" sx={{mt:'48px', fontWeight:'bold'}} >Categories</Typography>
          <CategoryMenu 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            categories={categories} />
        </Box>
        
        <RightPanel 
          selectedCategory={selectedCategory}
          jobs={allJobs} />
      </Box>
    </>);
  }

  