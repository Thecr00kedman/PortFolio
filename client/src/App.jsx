import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import { Services } from "./Pages/Services";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
export const App = ()=>{



  return(
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App