import { Box,Typography } from "@mui/material"
import { CardHeader,CardContent,RightPart } from "./styles"
import Navbar from "../Components/Navbar/Navbar"


export const Skills = ()=>{


    return(
          <Box sx={{background:'black',color:'whitesmoke',height:'100vh'}}>
            <CardHeader>
               <Typography variant="h3">My Skills</Typography>
                <Typography>-What I know-</Typography>
            </CardHeader>
            <CardContent>
           
                <RightPart>
                  <Box>
                  <div><Typography>React,Javascript</Typography>&nbsp;&nbsp;<Typography>70%</Typography></div>
                  <div className="progress" data-progress="70%"></div>
                  </Box>
                  <Box>
                  <div><Typography>Front-End Developement </Typography>&nbsp;&nbsp;<Typography>80%</Typography></div>
                  <div className="progress" data-progress="80%"></div>
                  </Box>
                  <Box>
                  <div><Typography>Backend Developement</Typography>&nbsp;&nbsp;<Typography>70%</Typography></div>
                  <div className="progress" data-progress="70%"></div>
                  </Box>
                  <Box>
                  <div><Typography>C++</Typography>&nbsp;&nbsp;<Typography>60%</Typography></div>
                  <div className="progress" data-progress="60%"></div>
                  </Box>
                </RightPart>
            </CardContent>
          </Box>
    )
}
export default Skills