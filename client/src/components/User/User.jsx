import './User.scss'
import defaultAvatar from '../../assets/img/jpg/default_avatar.jpg';


const User = props => {
  const {
    fullName,
    aboutMe,
    phone,
    place,
    _id: id,
    deleteUser,
    selectActiveUser,
    activeUserId
  } = props

  return (
    <div className={`user ${activeUserId === id ? 'active' : ''}`}>
      <div className='user__img' onClick={() => {
        selectActiveUser(id)
      }}>
        <img src={defaultAvatar} alt=""/>
      </div>
      <div className='user__info'>
        <div className='user__fullName subtitle' onClick={() => {
          selectActiveUser(id)
        }}>{fullName}</div>
        <div className='user__aboutMe'>О себе: {aboutMe}</div>
        <div className='user__phone'>Номер телефона: {phone}</div>
        <div className='user__place'>Город: {place}</div>
      </div>
      <div onClick={() => {
        deleteUser(id)
      }} className='user__btnDelete'>x
      </div>
    </div>
  )
}


export default User