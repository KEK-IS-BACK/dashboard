import {getOwnerData} from "./authReducer";
import {getUsers, setActiveUser} from "./usersReducer";
import {selectRandomApiCards, setActiveApiCard} from "./apiCardsRedecer";

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

  if (!state.auth.isAuth && localStorage.getItem('profileToken')) {  // Если пользователь еще не авторизован и есть токен,
                                                                      // то авторизовать пользователя и получить нужные данные
    await dispatch(getOwnerData())
    await dispatch(getUsers())

    const activeUserId = localStorage.getItem('activeUserId')
    if (activeUserId) {
      await dispatch(setActiveUser(activeUserId))
      await dispatch(selectRandomApiCards())
    }

    const lastApiId = +localStorage.getItem('lastApiId')
    if (lastApiId || lastApiId === 0) { // Если есть активная карточка + доп проверка так как id карточки может быть = 0
      await dispatch(setActiveApiCard(lastApiId))
    }
  }

  dispatch(setInitializeApp())
}

export default initialReducer