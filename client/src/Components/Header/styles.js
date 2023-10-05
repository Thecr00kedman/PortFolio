import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HeaderContainer=styled(Box)((theme)=>({
     display:"flex",
     flexDirection:'row',
     justifyContent:'center',
     background:'black',
     color:'whitesmoke',
     padding:'2rem 2rem',
     height:'100vh',
     marginTop: '0px', 

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
        borderRadius:'50%',
        boxShadow:"2px 2px 60px 2px  #093987", 

      },
      "@media (min-width:520px max-width: 768px)": {
        /* Styles for screens up to 768px wide */
        width:'9rem',
        paddingTop:'1rem',
        height:'9rem',  

      },
    "@media (max-width: 519px)": {
        /* Styles for screens up to 519px wide */
        width:'12rem',
        height:'12rem',   
        paddingTop:'1rem',
        whiteSpace:'nowrap'
            
      },
}))