import {authApi, profileApi} from "../api/mainApi";
import {deleteActiveUser, getUsers, setUsers} from "./usersReducer";

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
    const response = await authApi.registration(email, password, fullName)

    if (response.status === 201) dispatch(signIn(email, password))

    return response.data
  } catch (e) {
    return e.response.data
  }

}

export const signIn = (email, password) => async dispatch => {
  try {
    const response = await authApi.login(email, password)

    if (response.status === 200) {
      await dispatch(setOwnerData(response.data.userId, response.data.fullName))
      await dispatch(getUsers())
    }

  } catch (e) {
    return e.response.data
  }
}

export const getOwnerData = () => async dispatch => {
  try {
    const data = await profileApi.getOwnerProfile()

    dispatch(setOwnerData(data.id, data.fullName))
  } catch (e) {
  }
}

export const logout = () => dispatch => {
  localStorage.clear()

  dispatch(setUsers([])) //Очистка пользователей при выходе
  dispatch(deleteActiveUser()) //Очистка пользователей при выходе
  dispatch({type: LOGOUT})
}

export default authReducer