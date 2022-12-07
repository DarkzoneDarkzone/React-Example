import React from 'react'
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs/about-us.jsx'
import Main from '../pages/Main/main.jsx'
import Content from '../pages/Content/content.jsx'
import {Registration, Login} from '../pages/Registration/registration.jsx'
import Parallax from '../pages/parallax/parallax.jsx'
import Navbar from '../components/layouts/navbar.jsx'

import { useSelector } from 'react-redux'

export default function Routers(){
  const statusLogin = useSelector((state) => state.middleware.statusLogin)
  return (
    <Router>
      <Routes>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/login" element={statusLogin?<Navigate to="/" replace/>:<Login/>}/>
          <Route element={<ProtectedRoute isAllowed={statusLogin}/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/services" element={<React.Fragment><Navbar/><h1>services</h1></React.Fragment>}/>
            <Route path="/content" element={<Content/>}/>
            <Route path='/parallax' element={<Parallax/>}/>
          </Route>
      </Routes>
    </Router>
  )
}

const ProtectedRoute = ({isAllowed, children}) => {
  if(!isAllowed) {
    return <Navigate to={'/login'} replace />
  }
  return children?children:<Outlet/>
};