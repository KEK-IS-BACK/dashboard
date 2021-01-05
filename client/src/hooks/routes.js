import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path='/settings' component={SettingsPage}/>
          <Route exact path='/' component={DashboardPage}/>
          <Redirect to='/'/>
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path='/registration' component={Registration}/>
      <Route path='/login' component={Login}/>
      <Redirect to='/login'/>
    </Switch>
  )
}

export default useRoutes