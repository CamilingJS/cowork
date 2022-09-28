import { PrimaryButton, LoginInput } from "./StyledComponents";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';



export default function Login({setLoggedIn}) {
  return (
    <>
      <Box sx={{width:"100%", 
        height:"100vh", 
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }} >
        <Box sx={{width:"400px", 
        height:"300px",
        backgroundColor:"white", 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius:"8px"
        }} >

        <Typography sx={{color:"#666666"}} variant="h4" gutterBottom>
        Log in
        </Typography>
        
        <FormControl sx={{width: "80%"}} >
            <LoginInput
                id="email-username"
                placeholder="Email or Username"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
            />
        </FormControl>
            
        <FormControl sx={{width: "80%"}} >
            <LoginInput id="password" placeholder="Password" />
        </FormControl>
    
         <PrimaryButton sx={{margin:"24px 0"}} variant="contained"
          onClick={()=>{setLoggedIn(true)}}
         >Continue with Email</PrimaryButton>
                  
        </Box>
      </Box>
      
    </>
  );
}
