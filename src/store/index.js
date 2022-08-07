import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

import {UserService} from '../services/user'
import {CrudService} from '../services/categories'

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
    registrationLoginFailure: false,
    loggedIn: false,
    categoryCreated: false

  },

  getters: {

    returnUser(state){
      return state.user
    },

    returnLoggedIn(state){
      return state.loggedIn
    },

    returnCategoryValues(state){
      return state.categories
    },
    returnCategoryCreated(state){
      return state.categoryCreated
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

      async update({ commit }, user) {

        try {
          const response = await CrudService.update(user)

          commit('registrationSuccess', {response, user})
          router.push('/home')
          console.log("store response from update category endpoint",response, user)
          return true
        
        } catch (e) {
          return false
        }
      },

      async delete({ commit }, item) {
        try {
          const response = await CrudService.delete(item)
          if((response.status === 204)){
            commit('deleteSuccess', item)
            console.log("store response from delete category endpoint",response, item)
            return true
          }
        
        } catch (e) {
          return false
        }
      },
  }


})
