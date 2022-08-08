// const TOKEN_KEY = 'tokens'

/**
 * Manage the how Access Tokens are being stored and retrieved from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
**/
const TokenService = {

  saveToken (Token) {
    localStorage.setItem('token', Token)
  },
  
  saveAccessToken (accessToken) {
    localStorage.setItem('accessToken', accessToken)
  },

  saveRefreshToken (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
  },

  getRefreshToken () {
    return localStorage.getItem('refreshToken')
  },

  getToken () {
    return localStorage.getItem('token')
  },
  
  getAccessToken () {
    return localStorage.getItem('accessToken')
  },

  removeToken () {
    localStorage.removeItem('token')
  },
  removeAccessToken () {
    localStorage.removeItem('acessToken')
  },
  removeRefreshToken () {
    localStorage.removeItem('refreshToken')
  }

}

export default TokenService
export {TokenService}