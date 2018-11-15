import Vue from 'vue'
import Vuex from 'vuex'
import ContentService from '@/services/ContentService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caseStudies: {},
    caseStudy: {}
  },
  mutations: {
    SET_CASE_STUDIES(state, caseStudies) {
      state.caseStudies = caseStudies
    }
  },
  actions: {
    fetchCaseStudies({ commit }) {
      ContentService.getCaseStudies()
        .then(response => {
          commit('SET_CASE_STUDIES', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
})
