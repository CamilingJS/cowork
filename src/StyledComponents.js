import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputBase from '@mui/material/InputBase';

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";
export const GREY = '#5D5C5C'; 


export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "50px",
  width: "80%", 
  height:"30px"

}));

export const LoginInput = styled(Input)(()=>({
    border: `1px solid ${PRIMARY_GREEN}`,
    borderRadius: "5px",
    margin: "8px 0",
    padding: "4px 8px",
    width: "100%"
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
