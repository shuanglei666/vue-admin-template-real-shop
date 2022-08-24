import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/permission' // permission control // 路由守卫


import '@/icons' // icon
import i18n from 'i18n'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const {
//     mockXHR
//   } = require('../mock')
//   mockXHR()
// }


// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true;


// import {
//   setToken,
// } from '@/utils/auth'
// router.beforeEach((to, from, next) => {
//   // to 将访问哪一个路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数,表示放行
//   //   next() 放行 next('/login') 强制跳转
//   if (to.path === '/login') return next()
//   //   获取token
//   //   第一种方案
//   //   const token = window.localStorage.getItem('token') //setToken
//   //   第二种方案
//   const token = setToken(token) //setToken
//   //   console.log(token,'tokennn');
//   if (!token) return next('/login')
//   next()
// })



new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
