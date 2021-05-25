import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/temIndex.vue'  // 临时主页
import HonestIndex from '../views/siteReception/HonestIndex.vue'
import Details from '../views/siteReception/DetailsContainer.vue'

import BgLogin from '../views/websiteBackground/BgLogin.vue'
import BgIndex from '../views/websiteBackground/BgIndex.vue'
import BgEmployee from '../views/websiteBackground/BgEmployee.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',  // 默认值，带/#/
  routes: [
    {
      path: '/',
      name: 'index',  
      component: Index
    },
    // 后台
    {
      path: '/honest/login',
      name: 'bgLogin',
      component: BgLogin
    },
    {
      path: '/honest',
      name: 'bgIndex',
      component: BgIndex,
      // meta: {
      //   requireAuth: true   //需要登录后才能访问的受限资源
      // }
    },
    {
      path: '/honest/employee',
      name: 'bgEmployee',
      component: BgEmployee,
      // meta: {
      //   requireAuth: true
      // }
    },
    // 前台
    {
      path: '/honestindex',
      name: 'honestIndex',
      component: HonestIndex
    },
    {
      path: '/company',
      name: 'company',
      component: Details
    },
    {
      path: '/service',
      name: 'service',
      component: Details
    },
  ]
})
