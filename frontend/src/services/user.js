import ApiService from './api'
import TokenService from './storage'

const UserService = {
  
  login: async function (user) {
    const requestData = {
      method: 'post',
      url: 'https://simplor.herokuapp.com/api/user/login',

      data: {
        email: user.email,
        password: user.password
      }
    }

    try {
      // ApiService.setHeader()
      const response = await ApiService.customRequest(requestData)
      // saving the token and refresh token to the local storage 
      TokenService.saveAccessToken(response.access)
      TokenService.saveToken(response.token)
      TokenService.saveRefreshToken(response.refresh)
      // returning the response to the vuex store tobe saved and used to verify routes
      return response.data
    } catch (error) {
      console.group(error)
      return error
    }
  },

  register: async function (user) {
    const registrationData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/user/register',

      data: {
        first_name : user.fn,
        last_name : user.ln,
        phone: user.phone,
        email: user.email,
        avatar: user.pic,
        password: user.password
    },
    }

    try {
      const response = await ApiService.customRequest(registrationData)
      TokenService.saveToken(response.data.token)
      return response
    } catch (error) {
      return error
    }
  },

  async logout () {
      const requestData = {
        method: 'POST',
        url: 'https://simplor.herokuapp.com/api/user/logout',
      }
  
      try {
        ApiService.setAuthHeader()
        console.log(TokenService.getToken())
        const response = await ApiService.customRequest(requestData)
        // removing the token and refresh toke from the local storage 
        TokenService.removeToken()
        ApiService.removeHeader()
        return response

      } catch (error) {
        console.log(error)
      }
  },
  
}

export default UserService
export {UserService}

