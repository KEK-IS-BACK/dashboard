import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import useRoutes from "./hooks/routes";
import {getIsAppInitialized, getIsAuth} from "./redux/selectors";
import {connect} from 'react-redux'
import {getOwnerData} from "./redux/authReducer";
import './App.scss';
import Preloader from "./components/common/Preloader/Preloader";
import {initializeMyApp} from "./redux/initialReducer";


const App = props => {
  const {isAuth, isAppInitialized, initializeMyApp} = props

  const routes = useRoutes(isAuth)

  useEffect(() => {
    initializeMyApp()
  }, [initializeMyApp])

  if(!isAppInitialized) return <Preloader/>

  return (
    <div className="app">
      <Header/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isAppInitialized: getIsAppInitialized(state)
})

export default connect(mapStateToProps, {getOwnerData, initializeMyApp})(App);
