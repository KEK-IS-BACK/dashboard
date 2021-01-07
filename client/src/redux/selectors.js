//authReducer
export const getIsAuth = state => {
  return state.auth.isAuth
}

export const getOwnerFullName = state => {
  return state.auth.owner.fullName
}

//settingsPage
export const getSettingsPageUsers = state => {
  return state.settingsPage.users
}

export const getActiveUser = state => {
  return state.settingsPage.activeUser
}

export const getDefaultAvatar = state => {
  return state.settingsPage.defaultAvatar
}

//initialReducer
export const getIsAppInitialized = state => {
  return state.initial.isAppInitialized
}

//apiCardsReducer
export const getApiCards = state => {
  return state.apiCards.apiCards
}

export const getApiResult = state => {
  return state.apiCards.apiResult
}