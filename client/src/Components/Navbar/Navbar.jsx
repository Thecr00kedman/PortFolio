import { Link } from "react-router-dom"
import { Nav,Navcontainer } from "./styles"
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const Navbar =()=>{

    return(
        <Nav>
            <Navcontainer>
                    <Link style={{  display:'flex', flexDirection:'row',}} to={"/"}><ViewInArIcon /><h3>Portfolio</h3></Link>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Skills"}>Skills</Link>
                    <Link to={'/Projects'}>Projects</Link>
                    <Link to={"/Services"}>Services</Link>
                    <Link to={"/ContactMe"}>Contact</Link>
                </div>
            </Navcontainer>
        </Nav>
    )
}

export default Navbar