import React from "react";
import Header from "./components/Header/Header";
import useRoutes from "./hooks/routes";
import {getIsAuth} from "./redux/selectors";
import {connect} from 'react-redux'
import {getOwnerData} from "./redux/authReducer";
import './App.scss';
import useInitial from "./hooks/initial-hook";
import Preloader from "./components/common/Preloader/Preloader";


const App = props => {
  const {isAuth} = props
  const isInitialized = useInitial(isAuth)
  const routes = useRoutes(isAuth)

  if(!isInitialized) return <Preloader/>

  return (
    <div className="app">
      <Header/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {getOwnerData})(App);
