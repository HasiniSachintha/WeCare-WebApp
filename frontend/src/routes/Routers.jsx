import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Doctors  from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'
import { Route, Routes } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/doctors/:id" element={<DoctorDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Routers