import './WidgetUsers.scss'
import {useState} from "react";
import UserItem from "./UserItem/UserItem";
import {getUsers, selectActiveUser} from "../../../redux/settingsPageReducer";
import {connect} from 'react-redux'
import {getDefaultAvatar} from "../../../redux/selectors";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const WidgetUsers = props => {
  const {users, activeUser, selectActiveUser, defaultAvatar, history} = props
  const [show, setShow] = useState(false)

  const usersElements = users.map((user, index) => <UserItem key={index}
                                                             img={user.img || defaultAvatar}
                                                             fullName={user.fullName}
                                                             id={user._id}
                                                             selectActiveUser={selectActiveUser}
                                                             history={history}/>)

  const activeUserHandler = () => {
    history.push('/settings')
  }

  return (
    <div className='widgetUsers'>
      <div className='widgetUsers__wrap'>
        <div className='widgetUsers__activeUser' onClick={activeUserHandler}>
          <div className='widgetUsers__activeUserImg'>
            <img src={activeUser.img || defaultAvatar} alt=""/>
          </div>
          {activeUser.fullName || 'Активный пользователь не выбран'}
        </div>
        <div className='widgetUsers__btnShow'
             onClick={() => {
               setShow(!show)
             }}>
          ▼
        </div>
      </div>
      <div className={`widgetUsers__body ${show ? 'show' : ''}`}>
        {usersElements}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  defaultAvatar: getDefaultAvatar(state)
})

export default compose(
  withRouter,
  connect(mapStateToProps, {selectActiveUser, getUsers})
)(WidgetUsers)