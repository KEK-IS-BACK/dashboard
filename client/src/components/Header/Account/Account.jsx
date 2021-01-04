import React from "react";
import {NavLink} from "react-router-dom";
import {logout} from "../../../redux/authReducer";
import {connect} from "react-redux";
import './Account.scss'


const Account = props => {
  const {logout} = props

  return (
    <div className='account'>Account
      <NavLink to='/'
               onClick={logout}
               className='account__link'
      >
        Выйти
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {logout})(Account)