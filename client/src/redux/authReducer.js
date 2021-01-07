import {authApi, profileApi} from "../api/mainApi";
import {deleteActiveUser, getUsers, setUsers} from "./settingsPageReducer";

const SET_OWNER_DATA = 'dashboard/auth/SET_OWNER_DATA'
const LOGOUT = 'dashboard/auth/LOGOUT'


const initialState = {
  owner: {
    id: null,
    fullName: null
  },
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OWNER_DATA:
      return {
        ...state,
        owner: {
          ...state.owner,
          id: action.data.id,
          fullName: action.data.fullName
        },
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        owner: {
          ...state.owner,
          id: null,
          fullName: null
        },
        isAuth: false
      }
    default :
      return state
  }
}

const setOwnerData = (id, fullName) => ({type: SET_OWNER_DATA, data: {id, fullName}})

export const signUp = (email, password, fullName) => async dispatch => {
  try {
    const data = await authApi.registration(email, password, fullName)

    if(data.errors){
      console.log(data.errors)
      return
    }

    dispatch(signIn(email, password))
  } catch (e) {}

}
export const signIn = (email, password) => async dispatch => {
  try {
    const data = await authApi.login(email, password)

    if(data.errors) {
      console.log(data.errors)
      return
    }

    await dispatch(setOwnerData(email, password))
    await dispatch(getUsers())

  } catch (e) {}
}
export const getOwnerData = () => async dispatch => {
  try {
    const data = await profileApi.getOwnerProfile()

    dispatch(setOwnerData(data.id, data.fullName))
  } catch (e) {}
}
export const logout = () => dispatch => {
  localStorage.removeItem('userToken')
  localStorage.removeItem('activeUserId')

  dispatch(setUsers([])) //Очистка пользователей при выходе
  dispatch(deleteActiveUser()) //Очистка пользователей при выходе
  dispatch({type: LOGOUT})
}

export default authReducer