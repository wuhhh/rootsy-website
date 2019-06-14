import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Don't show production tips
Vue.config.productionTip = false

/**
 * Prevent widowing via mixin
 */
import unorphan from 'unorphan'

Vue.mixin({
  mounted: function() {
    unorphan(document.querySelectorAll('p'))
  }
})

/**
 * It looks like modern browsers set the scroll to savedPosition immediately
 * when you navigate using the browser buttons, so returning a promise from
 * scrollBehavior does not fix the flickering issue entirely.
 *
 * https://github.com/quasarframework/quasar/issues/1466#issuecomment-414066098
 *
 * In order to prevent the browser's default behavior, do this:
 */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// Create the root vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
