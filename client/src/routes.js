import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

const useRoutes = (isAuth) => {

  if (isAuth) {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path='/settings'><SettingsPage/></Route>
          <Route path='/details/:component'><DetailsPage/></Route>
          <Route exact path='/'><DashboardPage/></Route>
          <Redirect to='/'/>
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path='/registration'><Registration/></Route>
      <Route path='/login'><Login/></Route>
      <Redirect to='/login'/>
    </Switch>
  )
}

export default useRoutes