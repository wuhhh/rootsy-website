import Vue from 'vue'

const Widows = {}

Widows.install = function(Vue, options) {
  // Add a directive
  Vue.directive('no-widow', {
    bind(el, binding) {
      el.innerHTML = el.textContent.replace(/\s(?=[^\s]*$)/g, '&nbsp;')
    },
    unbind(el) {}
  })
}

Vue.use(Widows, {
  addClass: '--no-widows'
})
