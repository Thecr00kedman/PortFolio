import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HeaderContainer=styled(Box)((theme)=>({
     display:"flex",
     flexDirection:'row',
     justifyContent:'center',
     background:'black',
     color:'whitesmoke',
     padding:'1rem 2rem',
     height:'500px',
     alignItems:'center',
     
            "@media only screen and (max-width: 519px)": {
                      /* Styles for screens up to 519px wide */  
                      display:'flex',
                      flexDirection:"column-reverse",
                      padding:'1rem',
                      textAlign:'center'                 
                    },
      "& div":{
        padding:"0.2rem"
      },


}))
export const ImageContainer = styled(Box)((theme)=>({
      width:'20rem',
      height:'20rem', 
      borderRadius:'50%',
      "& img":{
        height:"100%",
        width:'100%',
        objectFit:'cover',
        background:'#D1D8BF',
        borderRadius:'50%',
        boxShadow:"2px 2px 35px 2px #38B6CF", 

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