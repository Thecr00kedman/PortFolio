import React from "react"
import { Box,Typography,Button } from "@mui/material"
import { Left } from "./styles";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';


export const ContactMe = ()=> {

    const recipientEmail = "Aditya22950@gmail.com";
  const emailSubject = "Regarding Your Portfolio";
  const emailBody = "Hello, I'd like to get in touch with you.";

  const handleContactClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };


    return(
       
       <>
       <div style={{backgroundColor:'black',color:'whitesmoke',paddingBottom:'2rem'}}>
       <Typography variant="h3" sx={{textAlign:'center'}}>Contact Me</Typography>
       <div style={{margin:"0.5rem 2rem",alignItems:'center'}}>
       
           <Left>
                 <Box>
                     <Box><MailIcon />&nbsp;&nbsp;<Typography>Aditya22950@gmail.com</Typography></Box>
                     <Box><PhoneIcon />&nbsp;&nbsp;<Typography>8617235417</Typography></Box> 
                     <Box><LocationCityIcon />&nbsp;&nbsp;<Typography>Kolkata</Typography></Box> 
                 </Box>                     
           </Left>
       </div>
       <Box style={{textAlign:'center',padding:'2rem'}}><Button variant="contained" onClick={handleContactClick}>Contact Me</Button></Box> 
       </div>
       
       </>
    )

}

export default ContactMe