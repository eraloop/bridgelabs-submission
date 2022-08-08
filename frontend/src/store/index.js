import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

import {UserService} from '../services/user'
import {CrudService} from '../services/categories'

import { TokenService } from '../services/storage'
import { AxiosError } from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token: TokenService.getToken(),
    accessToken: TokenService.getAccessToken(),
    refreshToken: TokenService.getRefreshToken(),

    user: {
      email: '',
      name: '',
      avatar: ''
    },
    categories:[],
    registrationLoginFailure: false,
    loggedIn: false,
    categoryCreated: false,
    loginError: {
      message: "",
      status: ""
    }

  },

  getters: {

    returnUser(state){
      return state.user
    },

    returnLoggedIn(state){

      if(!(TokenService.getToken === '')){
        return state.loggedIn = true
      }
      
      return state.loggedIn = false
    },

    returnCategoryValues(state){
      return state.categories
    },
    returnCategoryCreated(state){
      return state.categoryCreated
    },

    returnItemForUpdate: (state) => (id) => {
      return state.categories.find(cat => cat.id === id)
    },
     
    returnLoginError(state){
      return state.loginError
    }

  },

  mutations: {
    registrationSuccess(state, payload){
      state.token = payload.response.access,
      state.refreshToken = payload.response.refresh

      state.user.email = payload.response.data.email,
      state.user.name = payload.response.data.last_name,
      state.user.avatar = payload.user.pic,
      state.loggedIn = true
    },

    loginSuccess(state, payload){
      state.token = payload.response.access,
      state.refreshToken = payload.response.refresh

      state.user.email = payload.response.email,
      state.user.name = payload.response.last_name,
      state.user.avatar = payload.user.pic,
      state.loggedIn = true
    },

    registrationFailure(state){
      state.registrationLoginFailure = true
    },

    categoryFetchSuccess(state, payload){
      state.categories = payload
    },

    createCategorySuccess(state){
      state.categoryCreated = true
    },

    deleteSuccess(state, item){
      state.categories.filter(cat => {
        return cat.id !== item
      })
    },

    loginError(state, payload){
      state.loginError.message = payload.response.data.detail,
      state.loginError.status = payload.response.status
    },

    loggoutSuccess(state){
      state.loggedIn = false
      state.user = {}
      state.token = ''
      state.accessToken = ''
      state.refreshToken = ''
    }

  },
  actions: {

      async loginUser({commit}, user) {
        try {

          const response = await UserService.login(user)

          if(response instanceof AxiosError){
            console.log(response)
            commit("loginError", response)
            return false
          }
          if(!(response.token === '')){
            commit('loginSuccess', { response, user})
            console.log("login response from the store",response, user)
            // Redirect the user to the page he first tried to visit or to the home view token
            router.push('/home')
          }
          
        } catch (e) {
          return e
        }
      },
  
      async registerUser({ commit }, user) {

        try {
          const response = await UserService.register(user)

          if(!(response.status === 200) || !(response.data.token === '')){
            commit("registrationFailure", response)
            router.push("/login")
            return
          }

          if(response instanceof AxiosError){
            console.log(response)
            commit("registrationError", response)
          }

          const loginData = {
            email: user.email,
            password: user.password
          }

          const response2 = await UserService.login(loginData)

          if(response2.status === 200){
              TokenService.saveToken(response2.data.token)
              TokenService.saveRefreshToken(response2.data.refresh)
              TokenService.saveAccessToken(response2.data.access)

              console.log("login after register", response2)
              commit('registrationSuccess', {response, user})
              router.push('/home')
              console.log("store response from register endpoint",response, user)
          }
          
        
        } catch (e) {
          return false
        }
      },

      async logoutUser({commit}) {
        // logout function, makes a request the
        try {
          const response = await UserService.logout()
          if(response.status === 200){
            commit('loggoutSuccess')
            router.push('/login')
          }
          return true
        } catch (e) {
          return false
        }
      },

      // section contains functions for crud operations , 

      async create({ commit }, payload) {

        try {
          const response = await CrudService.create(payload)
          console.log(response)
          if((response.status === 200)){
            commit('createCategorySuccess')
            console.log("store response from create category endpoint",response, payload)
            return true
          }
        
        } catch (e) {
          return false
        }
      },

      async read({ commit }) {

        try {
          const response = await CrudService.read()
          if(response.status === 200){
            commit('categoryFetchSuccess', response)
            console.log("store response from read category endpoint",response)
            return true
          }
        
        } catch (e) {
          return false
        }
      },

      async update({ commit }, item) {

        try {
          const response = await CrudService.update(item)

          commit('updateSuccess', response)
          // router.push('/home')
          console.log("store response from update category endpoint",response, item)
          return true
        
        } catch (e) {
          return false
        }
      },

      async delete({ commit }, item) {
        try {
          const response = await CrudService.delete(item)
            commit('deleteSuccess', item)
            router.push('/home')
            console.log("store response from delete category endpoint",response, item)
            return response
        } catch (e) {
          return e
        }
      },
  }


})
