const TOKEN_KEY = 'tokens'

/**
 * Manage the how Access Tokens are being stored and retrieved from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
**/
const TokenService = {

  saveToken (Token) {
    console.log(Token)
    localStorage.setItem(TOKEN_KEY, Token)
  },
  saveAccessToken (accessToken) {
    console.log(accessToken)
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  saveRefreshToken (refreshToken) {
    console.log(refreshToken)
    localStorage.setItem(TOKEN_KEY, refreshToken)
  },

  getRefreshToken () {
    const refresh = localStorage.getItem(TOKEN_KEY.refreshToken)
    console.log(refresh)
    return refresh
  },

  getToken () {
    return localStorage.getItem(TOKEN_KEY.Token)
  },
  
  getAccessToken () {
    return localStorage.getItem(TOKEN_KEY.accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }

}

export default TokenService
export {TokenService}