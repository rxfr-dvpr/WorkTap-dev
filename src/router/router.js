import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: () => import('@/views/Exchange.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/create-order',
    name: 'create order',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/sign-in',
    name: 'sign in',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'sign up',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot password',
    component: () => import('@/views/ForgotPassword.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next()
})

export default router
