import Vue from 'vue'
import Vuex from 'vuex'
import ContentService from '@/services/ContentService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caseStudies: [],
    caseStudy: {},
    aboutMe: ''
  },
  mutations: {
    SET_CASE_STUDIES(state, caseStudies) {
      state.caseStudies = caseStudies
    },
    SET_CASE_STUDY(state, caseStudy) {
      state.caseStudy = caseStudy
    },
    SET_ABOUT_ME(state, aboutMe) {
      state.aboutMe = aboutMe
    }
  },
  actions: {
    fetchCaseStudies({ commit }) {
      ContentService.getCaseStudies()
        .then(response => {
          commit('SET_CASE_STUDIES', response.data)
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    },
    fetchCaseStudy({ commit, getters }, titleslug) {
      // Check if it exists in caseStudies
      /*
      var casestudy = getters.getCaseStudyByID(titleslug)

      if (casestudy) {
        commit('SET_CASE_STUDY', casestudy)
      } else {*/
      return ContentService.getCaseStudy(titleslug)
        .then(response => {
          commit('SET_CASE_STUDY', response.data)
          return response.data
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
      //}
    },
    fetchAboutMe({ commit }) {
      return ContentService.getAboutMe()
        .then(response => {
          commit('SET_ABOUT_ME', response.data)
          return response.data
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    }
  },
  getters: {
    getCaseStudyByID: state => titleslug => {
      return state.caseStudies.find(
        casestudy => casestudy.title_slug === titleslug
      )
    }
  }
})
