import { Button } from "@mui/material"
import {ButtonContainer} from './styles'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Contact =()=>{
    const navigate= useNavigate();

    return(

        <ButtonContainer>
            <Button variant="contained" onClick={()=>navigate('/ContactMe')}>Contact Me</Button>
            <Button variant="contained" onClick={()=>navigate('/Services')}>Services</Button>
        </ButtonContainer>
    )
}

export default Contact