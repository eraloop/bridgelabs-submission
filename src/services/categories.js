import ApiService from './api'

const CrudService = {

  create: async function (payload) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/category/create',
      data: payload
    }

    try {
      const response = await ApiService.customRequest(requestData)
      // returning the response to the vuex store tobe saved and used to verify routes
      return response.data
    } catch (error) {
      return error
    }
  },

  read : async function () {
    const registrationData = {
      method: 'GET',
      url: 'https://simplor.herokuapp.com/api/user/register',
    }

    try {
      const response = await ApiService.customRequest(registrationData)
      return response
    } catch (error) {
      return error
    }
  },

  update : async function (payload) {
      const requestData = {
        method: 'PUT',
        url: `https://simplor.herokuapp.com/api/category/update/${payload.id}`,
      }
  
      try {
        const response = await ApiService.customRequest(requestData)
        return response
      } catch (error) {
        return error
      }
  },
  
  delete : async function (payload) {
    const requestData = {
      method: 'DELETE',
      url: `https://simplor.herokuapp.com/api/category/delete/${payload.id}`,
    }

    try {
      const response = await ApiService.customRequest(requestData)
      return response
    } catch (error) {
      return error
    }
},
}

export default CrudService
