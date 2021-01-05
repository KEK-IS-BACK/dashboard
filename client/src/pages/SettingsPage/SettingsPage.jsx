import './SettingsPage.scss'
import {connect} from 'react-redux'
import {getActiveUser, getSettingsPageUsers} from "../../redux/selectors";
import {createUser, deleteUser, selectActiveUser} from "../../redux/settingsPageReducer";
import User from "../../components/User/User";
import CreateUser from "../../components/CreateUser/CreateUser";

const SettingsPage = props => {
  const {users, deleteUser, createUser, selectActiveUser, activeUser} = props

  const usersElements = users.map((user, index) => <User key={index} {...user}
                                                         deleteUser={deleteUser}
                                                         selectActiveUser={selectActiveUser}
                                                         activeUser={activeUser}/>)

  return (
    <div className='settingsPage'>
      <div className="container">
        Settings
        <CreateUser createUser={createUser}/>
        <div className='settingsPage__users'>
          {usersElements}
        </div>
      </div>


    </div>)
}
const mapStateToProps = state => ({
  users: getSettingsPageUsers(state),
  activeUser: getActiveUser(state)
})
export default connect(mapStateToProps, {deleteUser, createUser, selectActiveUser})(SettingsPage)