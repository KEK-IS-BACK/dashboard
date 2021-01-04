import React from "react";
import {NavLink} from "react-router-dom";
import './Logo.scss'

const Logo = () => {
  return (
    <div className='logo'>
      <NavLink to='/' className='logo__link'>Dashboard</NavLink>
    </div>
  )
}

export default Logo
