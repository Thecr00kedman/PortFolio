import {Box,styled} from '@mui/material'

export const Nav = styled(Box)((theme)=>({
    maxWidth:'100vw',
    background:'black',
    whiteSpace:'nowrap',
    overflow:'hidden',
    boxShadow: "2px 2px 5px 2px #333",
    "@media only screen and (max-width: 520px)": {
        /* Styles for screens up to 768px wide */
          width: "100%",
          fontSize:'0.4rem',
          background: 'black',
        
      },
    "@media (min-width:521px max-width: 768px)": {
        /* Styles for screens up to 768px wide */
          width: "100%",
          fontSize:'0.8rem',
          background: 'black', 

      }
    
}))


export const Navcontainer= styled(Box)((theme)=>({
    display:"flex",
    alignItems:'center',
    width:'100%',
    justifyContent:'space-between',
    
    "& a":{
        textDecoration:'none',
        padding:'1rem 0.8rem',
        color:'white',
        alignItems:'center',
    },
    "& a:hover":{
        color:'#38B5B1',
        
    },
    
}))