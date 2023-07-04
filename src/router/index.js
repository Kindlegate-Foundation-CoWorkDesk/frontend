import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/home/index-view.vue'
import BlogView from '../views/blog/index-view.vue'
import ContactView from '../views/contact/index-view.vue'
import GetInvolvedView from '../views/get-involved/index-view.vue'
import MandateView from '../views/mandate/index-view.vue'
import NewsView from '../views/news/index-view.vue'
import ProgramsView from '../views/programs/index-view.vue'
import TribeView from '../views/tribe/index-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/get-involved',
    name: 'get-involved',
    component: GetInvolvedView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/our-mandate',
    name: 'mandate',
    component: MandateView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/programs',
    name: 'programs',
    component: ProgramsView, 
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/our-tribe',
    name: 'our-tribe',
    component: TribeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
