import './ActiveUser.scss'
import defaultAvatar from '../../../assets/img/jpg/default_avatar.jpg'

const ActiveUser = props => {
  const {activeUser} = props

  return (
    <div className='activeUser'>
      <h1 className='activeUser__title subtitle'>Текущий пользователь</h1>
      <div className='activeUser__img'>
        <img src={defaultAvatar} alt="фотография пользователя"/>
      </div >
      <div className='activeUser__fullName subtitle'>{activeUser.fullName}</div>
      <div className='activeUser__info'>
        <div className='activeUser__aboutMe'>О себе: {activeUser.aboutMe}</div>
        <div className='activeUser__phone'>Номер телефона: {activeUser.phone}</div>
        <div className='activeUser__place'>Город: {activeUser.place}</div>
      </div>
    </div>
  )
}

export default ActiveUser