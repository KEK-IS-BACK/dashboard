import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReducer";
import settingsPageReducer from "./settingsPageReducer";
import initialReducer from "./initialReducer";

const reducers = combineReducers({
  initial: initialReducer,
  auth: authReducer,
  settingsPage: settingsPageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store