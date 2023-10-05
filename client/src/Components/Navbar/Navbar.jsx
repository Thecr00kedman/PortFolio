import { Link } from "react-router-dom"
import { Nav,Navcontainer } from "./styles"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
// import { useState } from "react";

export const Navbar =()=>{
    // const[open,setOpen] = useState(true)
    // const handleOpen = ()=>{

    // }

    return(
        <Nav>
            <Navcontainer>
                    <a style={{  display:'flex', flexDirection:'row',}} href="#Header"><ViewInArIcon /><h3>Portfolio</h3></a>
                <div>
                    <a href="#Skills" >Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Services">Services</a>
                    <a href="#Contact">Contact</a>
                </div>
            </Navcontainer>
        </Nav>
    )
}

export default Navbar