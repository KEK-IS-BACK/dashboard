import './UserItem.scss'

const UserItem = props => {
  const {fullName, id, selectActiveUser} = props

  return (
    <div className='userItem' onClick={() => {selectActiveUser(id)}}>{fullName}</div>
  )
}

export default UserItem