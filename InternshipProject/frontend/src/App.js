import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Movies";
import About from "./Pages/about";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact"
import Movies from "./Pages/Movies";
// import Navbar from './Components/Navbar'
function App(){
  return(
   <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/:user' element = {<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path='/movies' element = {<Movies/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    </BrowserRouter>
    </> 
  )
}
export default App