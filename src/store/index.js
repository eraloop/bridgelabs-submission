import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

import {UserService, AuthenticationError} from '../services/user'
import { TokenService } from '../services/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    refreshToken: '',
    user: {
      email: '',
      name: '',
      avatar: ''
    },
    categories:[],
    registrationLoginFailure: false

  },

  getters: {
    returnUser(state){
      return state.user
    }
  },

  mutations: {
    registrationSuccess(state, payload){
      state.token = payload.response.access,
      state.refreshToken = payload.response.refresh

      state.user.email = payload.response.data.email,
      state.user.name = payload.response.data.last_name,
      state.user.avatar = payload.user.pic
    },

    loginSuccess(state, payload){
      state.token = payload.response.access,
      state.refreshToken = payload.response.refresh

      state.user.email = payload.response.email,
      state.user.name = payload.response.last_name,
      state.user.avatar = payload.user.pic
    },

    registrationFailure(state){
      state.registrationLoginFailure = true
    }
  },
  actions: {

      async loginUser({ commit }, user) {
        commit('loginRequest')
        try {
          const response = await UserService.login(user)
          commit('loginSuccess', { response, user})
          console.log("login response from the store",response, user)
  
          // Redirect the user to the page he first tried to visit or to the home view token
          router.push('/home')
          return true
        } catch (e) {
          if (e instanceof AuthenticationError) {
            // commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
            console.log("yes the is an error that is returned from the request ")
          }
          return false
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

          const loginData = {
            email: user.email,
            password: user.password
          }

          const response2 = await UserService.login(loginData)
          TokenService.saveToken(response2.data.token)
          TokenService.saveRefreshToken(response2.data.refresh)
          TokenService.saveAccessToken(response2.data.access)

          console.log("login after register", response2)
          commit('registrationSuccess', {response, user})
          router.push('/home')
          console.log("store response from register endpoint",response, user)
        
        } catch (e) {
          return false
        }
      },

      async logoutUser() {
        // logout function, makes a request the
        try {

          const response = await UserService.logout()
          console.log("response from logout ",response)
          // router.push('/')
          return true
        } catch (e) {
          return false
        }
      },

      // section contains functions for crud operations , 

      async create({ commit }, payload) {

        try {
          const response = await UserService.register(payload)

          if((response.status === 200)){
            commit('createCategorySuccess', {response, payload})
            // router.push('/home')
            console.log("store response from create category endpoint",response, payload)
            return true
          }
        
        } catch (e) {
          return false
        }
      },

      async read({ commit }, user) {

        try {
          const response = await UserService.register(user)

          if((response.status === 200)){
            commit('registrationSuccess', {response, user})
            // router.push('/home')
            console.log("store response from read category endpoint",response, user)
            return true
          }
        
        } catch (e) {
          return false
        }
      },

      async update({ commit }, user) {

        try {
          const response = await UserService.register(user)

          if((response.status === 200)){
            commit('registrationSuccess', {response, user})
            router.push('/home')
            console.log("store response from update category endpoint",response, user)
            return true
          }
        
        } catch (e) {
          return false
        }
      },

      async delete({ commit }, user) {

        try {
          const response = await UserService.register(user)

          if((response.status === 200)){
            commit('registrationSuccess', {response, user})
            router.push('/home')
            console.log("store response from delete category endpoint",response, user)
            return true
          }
        
        } catch (e) {
          return false
        }
      },
  }


})
