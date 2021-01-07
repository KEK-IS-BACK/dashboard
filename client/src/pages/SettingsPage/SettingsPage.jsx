import './SettingsPage.scss'
import {connect} from 'react-redux'
import {getActiveUser, getSettingsPageUsers} from "../../redux/selectors";
import {createUser, deleteUser, selectActiveUser} from "../../redux/settingsPageReducer";
import User from "../../components/User/User";
import CreateUser from "../../components/CreateUser/CreateUser";
import ActiveUser from "./ActiveUser/ActiveUser";

const SettingsPage = props => {
  const {users, deleteUser, createUser, selectActiveUser, activeUser} = props

  const usersElements = users.map((user, index) => <User key={index} {...user}
                                                         deleteUser={deleteUser}
                                                         selectActiveUser={selectActiveUser}
                                                         activeUser={activeUser}/>)

  return (
    <div className='settingsPage'>
      <div className="container">
        <h1 className='settingsPage__title title'>Settings Page</h1>
        <div className='settingsPage__body'>
          <ActiveUser activeUser={activeUser}/>
          <div className='settingsPage__users'>
            <h1 className='settingsPage__usersTitle subtitle'>Список пользователей</h1>
            <div className="settingsPage__usersBody">
              {usersElements}
            </div>
          </div>
          <CreateUser createUser={createUser}/>
        </div>


      </div>


    </div>)
}
const mapStateToProps = state => ({
  users: getSettingsPageUsers(state),
  activeUser: getActiveUser(state)
})
export default connect(mapStateToProps, {deleteUser, createUser, selectActiveUser})(SettingsPage)