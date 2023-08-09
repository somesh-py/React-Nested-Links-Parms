import React from 'react'
import Navbar from './Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './NavBarComponents/Home'
import AboutUs from './NavBarComponents/AboutUs'
import Careers from './NavBarComponents/Careers'
import ContactUS from './NavBarComponents/ContactUS'
import Courses from './NavBarComponents/Courses'
import CourseDiscription from './NavBarComponents/CourseDiscription'

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/careers' element={<Careers/>}/>

        <Route path='/courses'>
        <Route index element={<Courses/>}/>
        <Route path=':Crse' element={<CourseDiscription/>}/>
        </Route>
        
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUS/>}/>
      </Routes>
    </>
  )
}

export default Dashboard
