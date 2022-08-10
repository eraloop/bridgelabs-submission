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
    isAuth : false,
    token: TokenService.getToken(),
    accessToken: TokenService.getAccessToken(),
    refreshToken: TokenService.getRefreshToken(),

    user: TokenService.getCurrentUser(),
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

      // if(!(state.token === '')){
      //   return state.loggedIn = true
      // }else{
      //   return state.loggedIn = false
      // }
      // if((TokenService.getAccessToken() || state.token)){
      //   return state.loggedIn = true
      // }
      return !!(TokenService.getAccessToken() || state.accessToken)
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

      // state.user.email = payload.response.email,
      // state.user.name = payload.response.last_name,
      // state.user.avatar = payload.user.pic,

      state.obj = { ...state.obj, loggedIn: true }
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
            commit("loginError", response)
            return false
          }
          
          if(!(response.token === '')){
            commit('loginSuccess', { response, user})
            // Redirect the user to the page he first tried to visit or to the home view token
            // router.push('/home')
            // router.go("/home")
            router.replace({ path: '/home' })
          }

          // router.go('/home')
          // router.push('/home')
          router.go("/home")
          
        } catch (e) {
          return e
        }
      },

      googleOauth (){

        try{
          
          const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

          const options = {
              redirect_uri: "http://localhost:8080/api/oauth/google",
              client_id: "585778916374-gqoboaih37s12pvmqhvvbija0dqphrqt.apps.googleusercontent.com",
              access_type: 'offline',
              response_type: 'code',
              prompt: 'consent',
              scope: [
              'https://www.googleapis.com/auth/userinfo.profile',
              'https://www.googleapis.com/auth/userinfo.email',
              ].join(' '),
              state: "/",
          };

          const qs = new URLSearchParams(options)

          return `${rootUrl}?${qs.toString()}`

        }catch(e){
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
            commit("registrationError", response)
            return false
          }
        
        } catch (e) {
          return false
        }
      },

      async logoutUser({commit}) {
        // logout function, makes a request the
        try {

          if(!(TokenService.getRefreshToken === '')){
            const response = await UserService.logout()

            if(response.status === 200){
              TokenService.removeToken()
              TokenService.removeAccessToken()
              TokenService.removeRefreshToken()
              commit('loggoutSuccess')
              router.go('/login')
            }
          }
        } catch (e) {
          return false
        }
      },

      // section contains functions for crud operations , 

      async create({ commit }, payload) {

        try {
          const response = await CrudService.create(payload)
          if((response.status === 200)){
            commit('createCategorySuccess')
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
          return true
        
        } catch (e) {
          return false
        }
      },

      async delete({ commit }, item) {
        try {
          const response = await CrudService.delete(item)
          commit('deleteSuccess', response)   
          return response
        } catch (e) {
          return e
        }
      },
  }


})