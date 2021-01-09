import * as axios from "axios";


let instanceWithToken = setInstanceWithToken()

function setInstanceWithToken(token = null) {
  const userToken = token || localStorage.getItem('userToken')

  return axios.create({
    baseURL: '/api/',
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

      if (response.status === 200) {
        localStorage.setItem('userToken', response.data.token)
        instanceWithToken = setInstanceWithToken(response.data.token)
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
      const response = await instanceWithToken.get('profile/')

      return response.data
    } catch (e) {
    }
  }
}

export const usersApi = {
  async createUser(fullName, aboutMe, phone, place) {
    try {
      const response = await instanceWithToken.post('users/create', {fullName, aboutMe, phone, place})

      return response.data
    } catch (e) {
      return e.response.data
    }
  },

  async getUsers() {
    try {
      const response = await instanceWithToken.get('users/')

      return response.data
    } catch (e) {
      return e.response.data
    }
  },

  async deleteUser(userId) {
    try {
      const response = await instanceWithToken.delete(`users/${userId}`)

      return response.data
    } catch (e) {
      return e.response.data
    }
  },

  async updateUser(userId, info) {
    try{
      const response = await instanceWithToken.put(`users/update/${userId}`, info)

      return response
    } catch (e) {}
  }
}