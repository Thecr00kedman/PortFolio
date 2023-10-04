import { SocialContainer } from "./styles"
import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";


export const Social = ()=>{

    return(
        <SocialContainer>
              <Box component={Link} to="https://github.com/Thecr00kedman" target="blank"><GitHubIcon/></Box>
              <Box component={Link} to="https://www.instagram.com/sumit_jagdishbharadwaj/" target="blank"><InstagramIcon/></Box>
              <Box component={Link} target="blank"><GoogleIcon/></Box>
              <Box component={Link} to="https://www.linkedin.com/in/aditya-sharma-024641202/" target='blank'><LinkedInIcon/></Box>
        </SocialContainer>
    )
}

export default Social