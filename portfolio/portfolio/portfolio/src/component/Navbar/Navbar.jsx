import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
 <div className="container">

<i className="fa-solid fa-code fa-flip fa-3x"></i> 
<div className='ul'>
<h4><Link to ="/">Home</Link></h4>
<h4><Link to ="/about">About</Link></h4>
<h4><Link to="/projects">Projects</Link></h4>
<h4><Link to="/contact">Contact</Link></h4>
</div>
    </div>
  )
}
