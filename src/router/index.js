import Vue from 'vue'
import Router from 'vue-router'

import tempIndex from '../views/temIndex.vue'  //临时主页
import Index from '../views/siteReception/index.vue'
import HonestInfo from '../views/siteReception/HonestInfo.vue'

import BgLogin from '../views/websiteBackground/BgLogin.vue'
import BgIndex from '../views/websiteBackground/BgIndex.vue'
import BgEmployee from '../views/websiteBackground/BgEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 默认值，hash带#
  routes: [
    // {
    //   path: '/',
    //   name: 'tempIndex',  
    //   component: tempIndex
    // },
    /**
     * 后台
     */
    // ログインページ
    {
      path: '/honest/login',
      name: 'BgLogin',
      component: BgLogin
    },
    // 管理ページ
    {
      path: '/honest',
      name: 'BgIndex',
      component: BgIndex,
      meta: {
        requireAuth: true   //需要登录后才能访问的受限资源
      }
    },
    // 個人情報
    {
      path: '/honest/employee',
      name: 'BgEmployee',
      component: BgEmployee,
      meta: {
        requireAuth: true
      }
    },
    /**
     * 前台
     */
    // ホームページ
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // 会社案内
    {
      path: '/company',
      name: 'Company',
      component: HonestInfo
    },
    // 事業内容
    {
      path: '/service',
      name: 'Service',
      component: HonestInfo
    },
    // 採用情報
    {
      path: '/recruit',
      name: 'Recruit',
      component: HonestInfo
    },
    // 個人情報保護方針
    {
      path: '/privacy',
      name: 'Privacy',
      component: HonestInfo
    },
    // お問い合わせ
    {
      path: '/contact',
      name: 'Contact',
      component: HonestInfo
    },
  ]
})
