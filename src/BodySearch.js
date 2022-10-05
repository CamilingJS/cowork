import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputBase from '@mui/material/InputBase';

import { PRIMARY_GREEN } from './StyledComponents';

export default function BodySearch(){

    return(
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase sx={{backgroundColor:'white'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
           
          </Search>
    )
}

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0.01)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  
  export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: 'white',
    },
    backgroundColor:'white',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right:'0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: PRIMARY_GREEN,
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    color: 'white'
  }));