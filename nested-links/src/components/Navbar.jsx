import React from 'react'
// import {Navlink} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark" style={{height:'50px'}}>
        {/* <a href="/" style={{color:'white',textDecoration: 'none'}}>Home</a>*/}
        {/* <a href="/about-us" style={{color:'white',textDecoration: 'none'}}>About-Us</a>
        <a href="/contact-us" style={{color:'white',textDecoration: 'none'}}>Contact-Us</a>
        <a href="/careers" style={{color:'white',textDecoration: 'none'}}>Careers</a>
        <a href="/courses" style={{color:'white',textDecoration: 'none'}}>Courses</a> */}

        <NavLink to={'/'} style={{color:'white',textDecoration: 'none'}}>Home</NavLink>
        <NavLink to={'/careers'} style={{color:'white',textDecoration: 'none'}}>Careers</NavLink>
        <NavLink to={'/courses'} style={{color:'white',textDecoration: 'none'}}>Courses</NavLink>
        <NavLink to={'/about-us'} style={{color:'white',textDecoration: 'none'}}>About-Us</NavLink>
        <NavLink to={'/contact-us'} style={{color:'white',textDecoration: 'none'}}>Contact-Us</NavLink>
      </nav>
    </>
  )
}

export default Navbar
