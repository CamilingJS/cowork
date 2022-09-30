import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { SECONDARY_NAVY, StyledInputBase, Search, SearchIconWrapper } from './StyledComponents';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:`${SECONDARY_NAVY}`, padding:"0 10%"}} position="static">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}} >
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box>
            <Button color="inherit" sx={{mr:"32px"}} >Find a Referral</Button>
            <Button color="inherit" sx={{mr:"32px"}} >Refer a Job</Button>
            <Button color="inherit">Login</Button>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

  