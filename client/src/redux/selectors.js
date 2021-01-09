//authReducer
export const getIsAuth = state => {
  return state.auth.isAuth
}

export const getOwnerFullName = state => {
  return state.auth.owner.fullName
}

//usersReducer
export const getSettingsPageUsers = state => {
  return state.users.users
}

export const getActiveUser = state => {
  return state.users.activeUser
}

export const getDefaultAvatar = state => {
  return state.users.defaultAvatar
}

//initialReducer
export const getIsAppInitialized = state => {
  return state.initial.isAppInitialized
}

//apiCardsReducer
export const getCurrentApiCards = state => { // Получение трех рандомных карточек
  return state.apiCards.currentApiCards
}

export const getApiResult = state => {
  return state.apiCards.apiResult
}

export const getCurrentApi = state => {
  return state.apiCards.currentApi
}