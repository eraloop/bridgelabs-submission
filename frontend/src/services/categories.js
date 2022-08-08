import ApiService from './api'

const CrudService = {

  create: async function (payload) {
    const header = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/category/create',
      data: payload
    }

    try {
      const response = await ApiService.customRequest(header)
      // returning the response to the vuex store tobe saved and used to verify routes
      return response.data
    } catch (error) {
      return error
    }
  },

  read : async function () {
    const header = {
      method: 'GET',
      url: 'https://simplor.herokuapp.com/api/category/categories',
    }

    try {
      const response = await ApiService.customRequest(header)
      return response
    } catch (error) {
      return error
    }
  },

  update : async function (payload) {
      const header = {
        method: 'PUT',
        url: `https://simplor.herokuapp.com/api/category/update/${payload.id}`,
        data: payload
      }
  
      try {
        const response = await ApiService.customRequest(header)
        return response
      } catch (error) {
        return error
      }
  },
  
  delete : async function (payload) {
    const header = {
      method: 'DELETE',
      url: `https://simplor.herokuapp.com/api/category/delete/${payload}`,
    }

    try {
      const response = await ApiService.customRequest(header)
      return response
    } catch (error) {
      return error
    }
},
}

export default CrudService
export {CrudService}
