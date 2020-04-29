import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css
import '@/styles/basic.scss' // basic css

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons'

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg)
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
