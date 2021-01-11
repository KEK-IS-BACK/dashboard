import React, {useEffect} from "react";
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeMyApp} from "./redux/initialReducer";
import {getIsAppInitialized, getIsAuth} from "./redux/selectors";
import {connect} from 'react-redux'
import './App.scss';


const App = props => {
  const {isAuth, isAppInitialized, initializeMyApp} = props

  const routes = useRoutes(isAuth)

  useEffect(() => {
    initializeMyApp()
  }, [initializeMyApp])

  if (!isAppInitialized) return <Preloader/>

  return (
    <div className="app">
      <Header isAuth={isAuth}/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isAppInitialized: getIsAppInitialized(state)
})

export default connect(mapStateToProps, {initializeMyApp})(App);
