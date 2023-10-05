import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";
import { CardContainer,VideoContainer,CardBox } from "./styles";
import FoodZone from "../assets/Media/FoodZone.mp4";



export const Projects = () => {
  return (
    <>
    <Box sx={{color:"whitesmoke",background:'black'}}>
    <div style={{alignItems:'center'}}>
     <Box><Typography variant="h3" sx={{fontWeight:'500',textAlign:'center'}}>My Projects</Typography></Box>

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
          <CardActions><Button variant="contained" href="https://github.com/Thecr00kedman/Food-Ordering-App">View Source Code</Button></CardActions>

        </CardContainer>
      </div>
    </div>
    
    </Box>
    </>
  );
};

export default Projects;
