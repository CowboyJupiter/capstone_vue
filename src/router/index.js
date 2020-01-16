import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/SignUp.vue'
import CatsNew from '../views/CatsNew.vue'
import CatsShow from '../views/CatsShow.vue'
import Login from '../views/Login.vue'
import Logout from "../views/Logout.vue"



Vue.use(VueRouter)

const routes = [
  {
    path: '/cats/:id',
    name: 'cats-show',
    component: CatsShow
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  { path: "/login", 
    name: "login", 
    component: Login 
  },
  {
    path: '/cats/new',
    name: 'cats-new',
    component: CatsNew
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
