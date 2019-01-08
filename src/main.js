import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseMarkdown from '@/components/BaseMarkdown.vue'

// Register lodash core
var _ = require('lodash')

// Global component
Vue.component('BaseMarkdown', BaseMarkdown)

// Don't show production tips
Vue.config.productionTip = false

// https://github.com/quasarframework/quasar/issues/1466#issuecomment-414066098
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
