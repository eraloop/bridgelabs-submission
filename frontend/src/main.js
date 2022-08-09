import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import GAuth from 'vue-google-oauth2'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const gauthOption = {

  clientId: "585778916374-gqoboaih37s12pvmqhvvbija0dqphrqt.apps.googleusercontent.com",
  redirect_uri: "http://localhost:8000/api/oauth/google",
  access_type: 'offline',
  response_type: 'code',
  scope:[
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ].join(' '),

  prompt: 'consent'
}


// make google-oauth module available for vuejs 
Vue.use(GAuth, gauthOption)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
