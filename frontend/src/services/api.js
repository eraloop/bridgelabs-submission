import axios from 'axios'
import TokenService from './storage'

const ApiService = {

  init (baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setAuthHeader () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getAccessToken()}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },

  setHeader(){
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },


  removeHeader () {
    axios.defaults.headers.common = {}
  },

  /**
   * * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/

  customRequest (data) {
    return axios(data)
  }
}

export default ApiService
