import React from 'react'
import {connect} from 'react-redux'
import {getActiveUserId, getDefaultAvatar} from "../../redux/selectors";
import {deleteUser, selectActiveUser} from "../../redux/usersReducer";
import './User.scss'

const User = props => {
  const {
    fullName,
    aboutMe,
    phone,
    place,
    _id: id,
    deleteUser,
    selectActiveUser,
    activeUserId,
    defaultAvatar
  } = props

  return (
    <div className={`user ${activeUserId === id ? 'active' : ''}`}>
      <div className='user__img'
           onClick={() => {
             selectActiveUser(id)
           }}>
        <img src={defaultAvatar} alt=""/>
      </div>
      <div className='user__info'>
        <div className='user__fullName subtitle'
             onClick={() => {
               selectActiveUser(id)
             }}>
          {fullName}
        </div>
        <div className='user__aboutMe'>О себе: {aboutMe}</div>
        <div className='user__phone'>Номер телефона: {phone}</div>
        <div className='user__place'>Город: {place}</div>
      </div>
      <div className='user__btnDelete'
           onClick={() => {
             deleteUser(id)
           }}>
        x
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  activeUserId: getActiveUserId(state),
  defaultAvatar: getDefaultAvatar(state)
})


export default connect(mapStateToProps, {deleteUser, selectActiveUser})(User)