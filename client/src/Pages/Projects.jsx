import {
  CardContent,
  Typography,
  CardActions,

  Button,
  Box
} from "@mui/material";
import { CardContainer,VideoContainer,CardBox } from "./styles";
import Navbar from "../Components/Navbar/Navbar";
import FoodZone from "../assets/Media/FoodZone.mp4";
import Social from "../Components/Social/Social";
import Contact from "../Components/Header/Contacts/Contact";

export const Projects = () => {
  return (
    <>
    <Navbar />
    <Box sx={{margin:'1rem 2rem'}}>
    <div style={{alignItems:'center'}}>
     <Box><Typography variant="h3" sx={{fontWeight:'600'}}>My Projects</Typography></Box>

      <div>
        <CardContainer>
          <CardBox>
          <VideoContainer>
            <video width="100%" controls>
              <source src={FoodZone} type="video/mp4" />
            </video>
          </VideoContainer>
          <CardContent>
            <Typography>
              Welcome to the Food Ordering App, a web application built with the
              MERN stack (MongoDB, Express.js, React, Node.js), Redux Toolkit,
              Material-UI, and Swagger UI for documentation. This app allows
              users to browse restaurants, order food, and track deliveries.
            </Typography>
          </CardContent>
          </CardBox>
          <CardActions><Button variant="outlined" href="https://github.com/Thecr00kedman/Food-Ordering-App">View Source Code</Button></CardActions>

        </CardContainer>
      </div>
    </div>
    <Social/>
    <Contact/>
    
    </Box>
    </>
  );
};

export default Projects;
