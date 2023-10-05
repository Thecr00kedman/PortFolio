import {Typography,Box} from "@mui/material"
import { HeaderContainer, ImageContainer} from "./styles"
import ProfilePhoto from '../../assets/ProfilePhoto.jpg'


export const Header = ()=>{
    return(
        <>
        <HeaderContainer>
            <div>
            <Typography variant="h4">Hi There,</Typography>
            <Box><Typography variant="h4">I'm</Typography><Typography variant="h4" sx={{color:"red"}}>Aditya Sharma.</Typography></Box>
            <Box><Typography variant="h4">I'm a </Typography><Typography variant="h4" sx={{color:"red"}}>Full Stack Web Developer.</Typography></Box>
            </div>
            <ImageContainer>
                <div><img src={ProfilePhoto} alt="profile photo" /></div>
            </ImageContainer>
        </HeaderContainer>
        </>
    )
}
export default Header