import {getOwnerData} from "./authReducer";
import {setActiveUser} from "./settingsPageReducer";

const SET_INITIALIZE_APP = 'dashboard/initialReducer/SET_INITIALIZE_APP'

const initialState = {
  isAppInitialized: false
}

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_APP:
      return {
        ...state,
        isAppInitialized: true
      }
    default :
      return state
  }
}

const setInitializeApp = () => ({type: SET_INITIALIZE_APP})

export const initializeMyApp = () => async (dispatch, getState) => {
  const state = getState()

  if (!state.auth.isAuth && localStorage.getItem('userToken')) {
    await dispatch(getOwnerData())
  }

  const activeUserId = localStorage.getItem('activeUserId')
  if(activeUserId) {
    await dispatch(setActiveUser(activeUserId))
  }

  dispatch(setInitializeApp())
}

export default initialReducer