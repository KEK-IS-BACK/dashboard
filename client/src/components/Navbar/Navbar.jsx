import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="container">
        <div className='navbar__body'>
          <NavLink exact to='/' className='navbar__link'>Главная</NavLink>
          <NavLink to='/settings' className='navbar__link'>Настройки</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar