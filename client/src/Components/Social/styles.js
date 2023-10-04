import styled from "@emotion/styled";
import { Box } from "@mui/material";


export const SocialContainer = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    margin:'0.5rem 2rem',
    padding:"0.1rem 1rem",
    justifyContent:'center',
    gap:'2rem',
    "& div":{
        cursor:"pointer",
    },
    "& a":{
     textDecoration:'none',
     color:"black"
    },
    "&>a>svg":{
     fontSize:"30px"
    },
    "& a>svg:hover":{
     color:'#1976d2',
     transform:"scale(1.5)"
    }
    
}))