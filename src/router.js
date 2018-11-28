import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CaseStudy from './views/CaseStudy.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/case-study/:titleslug',
      name: 'case-study-show',
      component: CaseStudy,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('fetchCaseStudy', routeTo.params.titleslug)
          .then(casestudy => {
            routeTo.params.casestudy = casestudy
            next()
          })
      }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  store.dispatch('setLoading', true)
  setTimeout(() => {
    next()
  }, 1000)
})

router.afterEach(() => {
  store.dispatch('setLoading', false)
})

export default router
