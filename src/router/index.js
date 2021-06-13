import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/temIndex.vue'  // 临时主页
import HonestInfo from '../views/siteReception/HonestInfo.vue'

import BgLogin from '../views/websiteBackground/BgLogin.vue'
import BgIndex from '../views/websiteBackground/BgIndex.vue'
import BgEmployee from '../views/websiteBackground/BgEmployee.vue'

//テストページ 下path name component 設定
//次はsrc\views\panReception\PanInfo.vue
import PanInfo from '../views/panReception/PanInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',  // 默认值，带/#/
  routes: [
    {
      path: '/',
      name: 'Index',  
      component: Index
    },
    // 后台
    {
      path: '/honest/login',
      name: 'BgLogin',
      component: BgLogin
    },
    {
      path: '/honest',
      name: 'BgIndex',
      component: BgIndex,
      // meta: {
      //   requireAuth: true   //需要登录后才能访问的受限资源
      // }
    },
    {
      path: '/honest/employee',
      name: 'BgEmployee',
      component: BgEmployee,
      // meta: {
      //   requireAuth: true
      // }
    },
    // 前台
    {
      path: '/honestInfo',
      name: 'HonestInfo',
      component: HonestInfo
    },
    {
      path: '/company',
      name: 'Company',
      component: HonestInfo
    },
    {
      path: '/service',
      name: 'Service',
      component: HonestInfo
    },
    // PanInfo
    {
      path: '/panInfo',
      name: 'PanInfo',
      component: PanInfo
    },
    // PanInfo-Features
    {
      path: '/panInfo/features',
      name: 'Features',
      component: PanInfo
    },
    // PanInfo-About
    {
      path: '/panInfo/about',
      name: 'About',
      component: PanInfo
    },
  ]
})
