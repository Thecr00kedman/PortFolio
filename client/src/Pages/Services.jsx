import { Box,Card,CardContent,Grid,Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import { CardHeading,CardIcon,ServicesCard,MainContainer } from "./styles";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';


export const Services = () =>{
    return(
        <Box sx={{background:'black',color:'whitesmoke',}}>
                    <MainContainer>
                        <div style={{padding:'1rem'}}>
                        <Typography variant="h3" sx={{fontWeight:"600"}}>My Services</Typography>
                        <Typography sx={{color:"red", fontSize:"20px", fontWeight:'700'}}>-What I Provide-</Typography>
                        </div>
                  <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={4} lg={4} sx={{display:'flex'}}>
                                 <ServicesCard> 
                                     <CardIcon><CodeIcon/></CardIcon>
                                     <CardHeading>
                                     <Typography variant="h5" sx={{fontWeight:"500"}}>Web Development</Typography>
                                     </CardHeading> 
                                     <CardContent>
                                     <Typography>Using Front-End libraries, I build fast, interactive websites. I use Node JS and Express app in Back-End side.</Typography>
                                     </CardContent>    
                                 </ServicesCard>
                         </Grid>

                         <Grid item xs={12} sm={12} md={4} lg={4} sx={{display:'flex'}}>
                                <ServicesCard> 
                                    <CardIcon><DesignServicesIcon/></CardIcon>
                                    <CardHeading>
                                    <Typography variant="h5" sx={{fontWeight:"500"}}>Logo Design</Typography>
                                    </CardHeading> 
                                    <CardContent>
                                    <Typography>I'm an experienced logo designer passionate about creating captivating visual identities. With a focus on simplicity and a knack for storytelling.</Typography>
                                    </CardContent>    
                                </ServicesCard>
                         </Grid> 
                        
                         <Grid item xs={12} sm={12} md={4} lg={4} sx={{display:'flex'}}> 
                                <ServicesCard>  
                                    <CardIcon><DevicesIcon/></CardIcon>
                                    <CardHeading>
                                    <Typography variant="h5" sx={{fontWeight:"500"}}>Responsive Web Design</Typography>
                                    </CardHeading> 
                                    <CardContent>
                                    <Typography>I specialize in creating responsive websites that adapt seamlessly to all devices and screen sizes. With a focus on user experience and performance, I ensure that your website looks great and functions flawlessly on desktops, tablets, and mobile devices.</Typography>
                                    </CardContent>    
                                </ServicesCard>
                         </Grid>
  
                  </Grid>  
             </MainContainer>        
                 
        </Box>
    )
}

export default Services