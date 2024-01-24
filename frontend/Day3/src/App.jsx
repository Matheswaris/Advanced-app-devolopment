// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
//import Hello_World from "./components/Hello_World"
import Signup from "./signup/SignUp"
import Login from "./login/Login"
import Navbar from "./navbar/Navbar"
import Home from "./homepage/Home"

function App() {

  return (
    <Router>
    <Routes>

    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>

    <Route path="/signup" element={<Signup/>}/>
    <Route path="/navbar" element={<Navbar/>}/>



    







    
    </Routes>
    </Router>
  
  )
}

export default App