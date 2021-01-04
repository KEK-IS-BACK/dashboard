import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Settings from "../pages/Settings/Settings";
import Dashboard from "../pages/Dashboard/Dashboard";

const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path='/settings' component={Settings}/>
          <Route exact path='/' component={Dashboard}/>
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