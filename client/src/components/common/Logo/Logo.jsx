import React from "react";
import {NavLink} from "react-router-dom";
import './Logo.scss'

const Logo = props => {
  const {className} = props

  return (
    <div className={`logo ${className || ''}`}>
      <NavLink to='/' className='logo__link'>Dashboard</NavLink>
    </div>
  )
}

export default Logo
