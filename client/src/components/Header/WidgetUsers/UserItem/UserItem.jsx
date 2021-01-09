import './UserItem.scss'

const UserItem = props => {
  const {fullName, id, selectActiveUser, img, history, activeUserId} = props

  const onClickHandler = () => {
    if(id !== activeUserId){
      selectActiveUser(id)
    }

    history.push('/dashboard')
  }

  return (
    <div className={`userItem ${id === activeUserId ? 'active' : ''}`} onClick={onClickHandler}>
      <div className='userItem__img'>
        <img src={img} alt=""/>
      </div>
      {fullName}
    </div>
  )
}

export default UserItem