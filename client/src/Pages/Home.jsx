import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import Social from '../Components/Social/Social'
import Contact from '../Components/Header/Contacts/Contact'
import { MainBox } from './styles'

export const Home = ()=>{

    return(
        <MainBox>
            <Navbar/>
            <Header/>
            <Social/>
            <Contact/>
        </MainBox>
    )
}

export default Home