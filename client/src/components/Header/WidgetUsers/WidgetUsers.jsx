import './WidgetUsers.scss'
import {useState} from "react";
import UserItem from "./UserItem/UserItem";
import {selectActiveUser} from "../../../redux/settingsPageReducer";
import {connect} from 'react-redux'

const WidgetUsers = props => {
  const {users, activeUser, selectActiveUser} = props
  const [show, setShow] = useState(false)

  const usersElements = users.map((user,index) => <UserItem key={index} fullName={user.fullName}
                                                            id={user._id}
                                                            selectActiveUser={selectActiveUser}/>)

  return (
    <div className='widgetUsers'>
      <div className='widgetUsers__wrap'>
        <div className='widgetUsers__activeUser'>
          {activeUser.fullName || 'Активный пользователь не выбран'}
        </div>
        <div className='widgetUsers__btnShow'
             onClick={() => {setShow(!show)}}>
          X
        </div>
      </div>
      <div className={`widgetUsers__body ${show ? 'show' : ''}`}>
        {usersElements}
      </div>
    </div>
  )
}

export default connect(null, {selectActiveUser})(WidgetUsers)