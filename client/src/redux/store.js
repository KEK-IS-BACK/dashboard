import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import initialReducer from "./initialReducer";
import apiCardsReducer from "./apiCardsRedecer";

const reducers = combineReducers({
  initial: initialReducer,
  auth: authReducer,
  users: usersReducer,
  apiCards: apiCardsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Подключение расширения redux-devtools
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store