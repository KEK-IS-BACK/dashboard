//authReducer
export const getIsAuth = state => {
  return state.auth.isAuth
}

//settingsPage
export const getSettingsPageUsers = state => {
  return state.settingsPage.users
}

export const getActiveUser = state => {
  return state.settingsPage.activeUser
}

//initialReducer
export const getIsAppInitialized = state => {
  return state.initial.isAppInitialized
}