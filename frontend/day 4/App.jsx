// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
//import Hello_World from "./components/Hello_World"
import FeesManagement from "./fees/Feesm"
import Quiz from "./user/Quiz"
import MainHome from "./mainhome/mainhome"
import UserLogin from "./user/UserLogin"
import UserHome from "./user/UserHome"
import RegistrationForm from "./user/Regis"
import QuizContainer from "./user/QuizContainer"
import CourseCard from "./user/CourseCard"
import ContactUs from "./user/Contactus"
import AdminLogin from "./Admin/AdminLogin"
import AdminCourse from "./Admin/AdminCourse"
import Signup from "./signup/SignUp"
import Dashboard from "./Admin/Dashboard"
import AdminPanel from "./Admin/AdminPanel"
function App() {

  return (
    <Router>
    <Routes>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/UserHome" element={<UserHome/>}/>
    <Route path="/fees" element={<FeesManagement/>}/>
    <Route path="/register" element={<RegistrationForm/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/quiz" element={<QuizContainer/>}/>
    <Route path="/coursecard" element={<CourseCard/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/AdminCourse" element={<AdminCourse/>}/>
    <Route path="/signup" element={<Signup/>}/>
  
    <Route path="/admin/dashboard" element={<Dashboard/>}/>
  
    <Route path="/sidebar11" element={<AdminPanel/>}/>
    

    
















    <Route path="/" element={<MainHome/>}/>






    
    </Routes>
    </Router>
  
  )
}

export default App
