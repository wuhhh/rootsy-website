import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseMarkdown from '@/components/BaseMarkdown.vue'

Vue.component('BaseMarkdown', BaseMarkdown)

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
