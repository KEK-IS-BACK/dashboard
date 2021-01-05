import './User.scss'

const User = props => {
  const {fullName, aboutMe, phone, place, _id: id, deleteUser, selectActiveUser, activeUser} = props

  return (
    <div className={`user ${activeUser._id === id ? 'active' : ''}`}>
      <div className='user__fullName'>{fullName}</div>
      <div className='user__aboutMe'>{aboutMe}</div>
      <div className='user__phone'>{phone}</div>
      <div className='user__place'>{place}</div>
      <button onClick={() => {selectActiveUser(id)}}>Выбрать пользователя</button>
      <button onClick={()=>{deleteUser(id)}}>{'Удалить пользователя с ID' + id}</button>
    </div>
  )
}

export default User