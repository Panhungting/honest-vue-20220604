// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.use(Vuex)
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

import { mapState } from 'vuex'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   navIndex: state => state.navIndex,

  //   // 传字符串参数 'navIndex' 等同于 `state => state.navIndex`
  //   navIndexAlias: 'navIndex',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   getNavIndex (state) {
  //     return state.navIndex
  //   }
  // })
})
