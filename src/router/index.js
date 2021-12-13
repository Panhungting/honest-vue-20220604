import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index.vue'
import Details from '../views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 默认值，hash带#
  routes: [
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
      component: Details
    },
    // 事業内容
    {
      path: '/service',
      name: 'Service',
      component: Details
    },
    // 採用情報
    {
      path: '/recruit',
      name: 'Recruit',
      component: Details
    },
    // 個人情報保護方針
    {
      path: '/privacy',
      name: 'Privacy',
      component: Details
    },
    // お問い合わせ
    {
      path: '/contact',
      name: 'Contact',
      component: Details
    },
  ]
})
