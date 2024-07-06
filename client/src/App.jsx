import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Pages/Contacts/Contacts";
import Signup from "./Pages/Sign/Signup/Signup";
import Signin from "./Pages/Sign/Signin/Signin";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/sign up" element={<Signup/>}/>
      <Route path="/sign in" element={<Signin/>}/>
     
      </Routes>
    
    <Footer/>
    
    </BrowserRouter>
   
    </>
  )
}

export default App
