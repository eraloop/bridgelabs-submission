
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

  saveCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
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

  getCurrentUser () {
    return localStorage.getItem('user')
  },

  // remove tokens from storage

  removeToken () {
    // window.localStorage.removeItem('token')
    window.localStorage.clear(); 
  },
  removeAccessToken () {
    // window.localStorage.removeItem('acessToken')
    window.localStorage.clear(); 
  },
  removeRefreshToken () {
    // window.localStorage.removeItem('refreshToken')
    window.localStorage.clear(); 
  }

}

export default TokenService
export {TokenService}