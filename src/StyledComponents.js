import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";

const PRIMARY_GREEN = "#39B54A";
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
