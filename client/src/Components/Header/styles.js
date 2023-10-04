import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HeaderContainer=styled(Box)((theme)=>({
     display:"flex",
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     
     marginTop:'2rem',
    "& div":{
       paddingRight:"9px"
    },
    
        "& div >h4":{
        alignItems:'center',
        paddingBottom:'0.5rem',
       "@media only screen and (min-width: 520px) and (max-width: 768px)": {
            /* Styles for screens up to 768px wide */
              fontSize:"0.8rem",
              padding:'0.2rem 1rem',
              
          },
          "@media only screen and (max-width: 519px)": {
            /* Styles for screens up to 519px wide */
              fontSize:"0.6rem",
              padding:'0.2rem 1rem',
              
                
          },
     }

}))
export const ImageContainer = styled(Box)((theme)=>({
      width:'15rem',
      height:'15rem',  
      "& img":{
        height:"100%",
        width:'100%',
        objectFit:'cover',
        background:'#D1D8BF',
        // border:'1px solid black',
        borderRadius:'100%',
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
      "@media (min-width:520px max-width: 768px)": {
        /* Styles for screens up to 768px wide */
        width:'9rem',
        height:'9rem',  

      },
    "@media (max-width: 519px)": {
        /* Styles for screens up to 519px wide */
        width:'8rem',
        height:'8rem',   
        whiteSpace:'nowrap'
            
      },
}))