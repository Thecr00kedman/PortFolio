import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import Social from '../Components/Social/Social'
import { MainBox } from './styles'
import ContactMe from './ContactMe'
import Projects from '../Pages/Projects'
import Services from './Services'
import Skills from '../Pages/Skills'
import { Box } from '@mui/material'

export const Home = ()=>{

    return(
        <MainBox>
            <Navbar/>
            <Box>
               <Header/>
               <section id="Skills"><Skills/></section>
               <section id="Projects"><Projects/></section>
               <section id="Services"><Services/></section>
               <section id="Contact"><ContactMe/></section>
               <Social/>
            </Box>
        </MainBox>
    )
}

export default Home