import React from "react";
import Logo from "../common/Logo/Logo";
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";
import WidgetUsers from "./WidgetUsers/WidgetUsers";
import './Header.scss'


const Header = (props) => {
  const {isAuth} = props

  return (
    <header className='header'>
      <div className="container">
        <div className='header__body header__body_authorized'>
          <Logo className='header__logo'/>
          {isAuth
            ? <>
              <WidgetUsers className='header__users'/>
              <Account className='header__account'/>
            </>
            : <div className='header__buttons'>
              <NavLink className='header__link header__link_registration'
                       to='/registration'>Зарегистрироваться</NavLink>
              <NavLink className='header__link header__link_login' to='/login'>Войти</NavLink>
            </div>}
        </div>
      </div>
    </header>
  )
}


export default Header