import React from 'react'
import User from "../../components/User/User";
import CreateUser from "../../components/CreateUser/CreateUser";
import ActiveUser from "./ActiveUser/ActiveUser";
import {connect} from 'react-redux'
import {getSettingsPageUsers} from "../../redux/selectors";
import './SettingsPage.scss'

const SettingsPage = props => {
  const {users} = props

  const usersElements = users.map((user, index) => <User key={index} {...user}/>)

  return (
    <div className='settingsPage'>
      <div className="container">
        <h1 className='settingsPage__title title'>Settings Page</h1>
        <div className='settingsPage__body'>
          <ActiveUser/>
          <div className='settingsPage__users'>
            <h1 className='settingsPage__usersTitle subtitle'>Список пользователей</h1>
            <div className="settingsPage__usersBody">
              {usersElements}
            </div>
          </div>
          <CreateUser className='settingsPage__createUser'/>
        </div>
      </div>
    </div>)
}

const mapStateToProps = state => ({
  users: getSettingsPageUsers(state),
})

export default connect(mapStateToProps)(SettingsPage)