import * as axios from "axios";


let instance = setInstanceWithToken()

function setInstanceWithToken(token = null) {
  const userToken = token || localStorage.getItem('userToken')

  return axios.create({
    baseURL: 'api/',
    headers: {
      'Authorization': 'Bearer ' + userToken
    }
  })
}

export const authApi = {
  async registration(email, password, fullName) {
    try {
      const response = await axios.post('api/auth/registration', {email, password, fullName})

      return response.data
    } catch (e) {
      return e.response.data
    }
  },

  async login(email, password) {
    try {
      const response = await axios.post('api/auth/login', {email, password})
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem('userToken', response.data.token)
      }

      return response.data
    } catch (e) {
      return e.response.data
    }
  }
}

export const profileApi = {
  async getOwnerProfile() {
    try {
      const response = await instance.get('profile/')

      return response.data
    } catch (e) {}
  }
}
