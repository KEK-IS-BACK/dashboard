import {usersApi} from "../api/mainApi";
import defaultAvatar from '../assets/img/jpg/default_avatar.jpg'

const SET_USERS = 'dashboard/settingsPage/SET_USERS'
const SET_ACTIVE_USER = 'dashboard/settingsPage/SET_ACTIVE_USER'
const DELETE_ACTIVE_USER = 'dashboard/settingsPage/DELETE_ACTIVE_USER'

const initialState = {
  users: [],
  activeUser: {},
  defaultAvatar: defaultAvatar
}

const settingsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: state.users.find(user => user._id === action.id)
      }
    case DELETE_ACTIVE_USER:
      return {
        ...state,
        activeUser: {}
      }
    default:
      return state
  }
}

export const setUsers = users => ({type: SET_USERS, users})
export const setActiveUser = id => ({type: SET_ACTIVE_USER, id})
export const deleteActiveUser = () => ({type: DELETE_ACTIVE_USER})

export const getUsers = () => async dispatch => {
  try {
    const users = await usersApi.getUsers()

    dispatch(setUsers(users))
  } catch (e) {
  }
}

export const createUser = userData => async dispatch => {
  const {fullName, aboutMe, phone, place} = userData
  try {
    await usersApi.createUser(fullName, aboutMe, phone, place)

    dispatch(getUsers())
  } catch (e) {
  }
}

export const deleteUser = userId => async dispatch => {
  try {
    await usersApi.deleteUser(userId)

    if (localStorage.getItem('activeUserId') === userId) {
      localStorage.removeItem('activeUserId')

      dispatch(deleteActiveUser())
    }

    dispatch(getUsers())
  } catch (e) {
  }
}

export const selectActiveUser = id => dispatch => {
  localStorage.setItem('activeUserId', id)

  dispatch(setActiveUser(id))
}

export default settingsPageReducer