import React from "react";
import {NavLink} from "react-router-dom";
import {logout} from "../../../redux/authReducer";
import {connect} from "react-redux";
import {getOwnerFullName} from "../../../redux/selectors";
import './Account.scss'


const Account = props => {
  const {logout, ownerFullName, className} = props

  const array = ownerFullName.split(' ')
  let shortName

  if (array.length === 1) { // Сокращает Имя и Фамилию до формата "Имя Ф.О."
    shortName = array[0]
  } else if (array.length === 2) {
    shortName = array[0] + ' ' + array[1][0] + '. '
  } else if (array.length === 3) {
    shortName = array[0] + ' ' + array[1][0] + '. ' + array[2][0] + '.'
  } else {
    shortName = array[0]
  }

  return (
    <div className={`account ${className}`}>
      <div className="account__fullName">{shortName}</div>
      <NavLink to='/'
               onClick={logout}
               className='account__link'>
        Выйти
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  ownerFullName: getOwnerFullName(state)
})

export default connect(mapStateToProps, {logout})(Account)