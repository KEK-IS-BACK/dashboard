import React from "react";
import Logo from "../common/Logo/Logo";
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";
import {connect} from "react-redux";
import './Header.scss'
import {getActiveUser, getIsAuth, getSettingsPageUsers} from "../../redux/selectors";
import WidgetUsers from "./WidgetUsers/WidgetUsers";


const Header = (props) => {
  const {isAuth, users, activeUser} = props

  return (
    <header className='header'>
      <div className="container">
        <div className='header__body'>
          <Logo/>
          {isAuth
            ? <>
              <WidgetUsers users={users} activeUser={activeUser}/>
              <Account/>
            </>
            : <div className='header__buttons'>
              <NavLink className='header__link' to='/registration'>Зарегистрироваться</NavLink>
              <NavLink className='header__link' to='/login'>Войти</NavLink>
            </div>}
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  users: getSettingsPageUsers(state),
  activeUser: getActiveUser(state)
})

export default connect(mapStateToProps)(Header)