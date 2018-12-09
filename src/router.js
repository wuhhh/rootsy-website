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
            routeTo.params.caseStudy = casestudy
            next()
          })
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }

    return position
  }
})

router.beforeEach((to, from, next) => {
  store.dispatch('setLoading', true)
  // Ensure Loader has enough time to transition
  setTimeout(function() {
    next()
  }, 750)
})

router.afterEach((to, from) => {
  store.dispatch('setLoading', false)
})

export default router
