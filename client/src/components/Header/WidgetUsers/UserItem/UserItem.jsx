import './UserItem.scss'

const UserItem = props => {
  const {fullName, id, selectActiveUser, img, history} = props

  const onClickHandler = () => {
    selectActiveUser(id)
    history.push('/dashboard')
  }

  return (
    <div className='userItem' onClick={onClickHandler}>
      <div className='userItem__img'>
        <img src={img} alt=""/>
      </div>
      {fullName}
    </div>
  )
}

export default UserItem