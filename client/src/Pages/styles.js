import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CardContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: 'column',
  overflow: 'hidden',
  margin: '0.5rem',
  padding:'1rem',
  boxShadow: "2px 2px 5px 2px #333",
  borderRadius:'10px',
  "& p": {
    "@media only screen and (min-width: 521px) and (max-width: 768px)": {
      /* Styles for screens between 521px and 768px wide */
      fontSize: '0.6rem',
    },
    "@media only screen and (min-width: 360px) and (max-width: 520px)": {
      /* Styles for screens between 360px and 520px wide */
      fontSize: '0.4rem',
    },
    "@media only screen and (max-width: 359px)": {
      /* Styles for screens up to 359px wide */
      fontSize: '0.2rem',
    },
  },
}));
export const CardBox = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: 'row',
  alignItems:'center',
  borderRadius:'10px',
  "& p": {
    "@media only screen and (min-width: 521px) and (max-width: 768px)": {
      /* Styles for screens between 521px and 768px wide */
      fontSize: '0.8rem',
      
      
    },
    "@media only screen and (min-width: 360px) and (max-width: 520px)": {
      /* Styles for screens between 360px and 520px wide */
      
      fontSize: '0.6rem',
    },
    "@media only screen and (max-width: 359px)": {
      /* Styles for screens up to 359px wide */
      
      fontSize: '0.4rem',
    },
  },
  "@media only screen and (min-width: 521px) and (max-width: 768px)": {
    /* Styles for screens between 521px and 768px wide */
       
       display:'flex',
       flexDirection:'column',
       border:"none"
    
  },
  "@media only screen and (min-width: 360px) and (max-width: 520px)": {
    /* Styles for screens between 360px and 520px wide */
    
       display:'flex',
       flexDirection:'column',
       border:"none"
  },
  "@media only screen and (max-width: 359px)": {
    /* Styles for screens up to 359px wide */
       display:'flex',
       flexDirection:'column',
       border:"none",
       alignItems:'center'
   
  },

}));

export const VideoContainer = styled(Box)((theme) => ({
  "& video": { borderRadius: '1rem' },
  border:'none',
  padding:"0.5rem",
}));


export const MainBox =styled(Box)((theme)=>({
   width:'100%',
   height:'100vh',
}))

export const CardIcon = styled(Box)((theme)=>({
  "& svg":{
    fontSize:'3rem',
    color:"red"
  }

}))
export const CardHeading = styled(Box)((theme)=>({

}))
export const ServicesCard = styled(Box)((theme)=>({
      flex:'1',
      alignItems:'center',
      padding:"8px 12px",
      boxShadow:"1px 2px 9px 2px black",
      borderRadius:'8px',
      textAlign:'center'
}))
export const MainContainer = styled(Box)((theme)=>({
      margin:"8px 12px",
      alignItems:'center',
      "& div":{
        padding:'0.5rem',

      }
}))
export const Left = styled(Box)((theme)=>({
       borderRadius:"10px",
       display:'flex',
       flexDirection:'column',
       boxShadow:'1px 2px 6px 2px black',
       background:'#F7FAFA',
       padding:'5px 8px',
     
      "& div":{
        justifyContent:'center',
        padding:"0.5rem 0.5rem 1rem 0.2rem",
      },  
      "& div>div":{
        display:'flex',   
        flexDirection:'row',
        justifyContent:'left',

         },
         "& p":{
          fontWeight:600,
          fontSize:"14px",
         },
         "& div>div:hover":{
          background:'#D7D8DA',
          cursor:"pointer"
         }


     }
))

export const CardHeader = styled(Box)((theme)=>({
  textAlign:'center',
  marginTop:'0.8rem',
  "& p":{
    color:'red',
    textAlign:'center'
  }
  
}))
export const CardContent = styled(Box)((theme)=>({
  display:'flex',
  flexDirection:'column',
  textAlign:'center',

}))
export const LeftPart = styled(Box)((theme)=>({

}))
export const RightPart = styled(Box)((theme)=>({
  display:'flex',
  flexDirection:'column',
  margin:'1rem 3rem',
  gap:'10px',
 justifyContent:'center',
 boxShadow:'2px 2px 9px 3px #ccc',
 padding:'1rem 1.5rem',
 

  "& div>div":{
    display:"flex",
    whiteSpace:'nowrap',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  


}))
