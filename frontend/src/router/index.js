import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'
import RegistrationPage from '../views/RegistrationPage.vue'
import LoginPage from '../views/LoginPage.vue'
import CreateCategories from '../views/CreateCategories.vue'
import WelcomePage from '../views/WelcomePage.vue'
import TokenService from '@/services/storage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: RegistrationPage
  },

  
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'welcome',
    component: WelcomePage
  },

  {
    path: '/create',
    name: 'create categories',
    component: CreateCategories
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // store.dispatch('fetchAccessToken');
  if (to.fullPath === '/create') {
    if (!(TokenService.getAccessToken())) {
      next('/login');
    }
  }
  if (to.fullPath === '/home') {
    if (!(TokenService.getAccessToken())) {
      next('/login');
    }
  }

  if (to.fullPath === '/login') {
    if ((TokenService.getAccessToken())) {
      next('/home');
    }
  }

  // if (to.fullPath === '/api/oauth/google') {
  //   // if ((TokenService.getAccessToken())) {
  //     next('/home');
  //   // }
  //   console.log(to)
  // }
  
  next();
}
);

export default router
