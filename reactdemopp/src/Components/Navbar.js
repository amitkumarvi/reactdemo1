import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => { 
     return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/About">About Us </Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Login">Log In</Link>
            <Link to="/Signup">Sign Up</Link>



          </div>
         )
}

export default Navbar