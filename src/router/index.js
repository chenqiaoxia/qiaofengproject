import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
    },
    children:[
      {
        path: '/about',
        name: 'About'
      }
    ]
  },
    {
      path: '/login',
      name: 'login',
      meta: {
        keepAlive: false
      },
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        keepAlive: false
      },
      component: () => import('../views/register.vue')
    },
    {
      path: '/ChooseAddress',
      name: 'ChooseAddress',
      meta: {
        keepAlive: true
      },
      component: () => import('../views/ChooseAddress.vue')
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
