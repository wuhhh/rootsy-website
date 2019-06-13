import Vue from 'vue'
import Vuex from 'vuex'
import ContentService from '@/services/WPService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caseStudies: [],
    caseStudy: {},
    caseStudySlugs: [],
    aboutMe: '',
    loading: true
  },
  mutations: {
    SET_CASE_STUDIES(state, caseStudies) {
      state.caseStudies = caseStudies
    },
    SET_CASE_STUDY(state, caseStudy) {
      state.caseStudy = caseStudy
    },
    SET_CASE_STUDY_SLUGS(state, caseStudySlugs) {
      state.caseStudySlugs = caseStudySlugs
    },
    SET_ABOUT_ME(state, aboutMe) {
      state.aboutMe = aboutMe
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    fetchCaseStudies({ commit }) {
      return ContentService.getCaseStudies()
        .then(response => {
          commit('SET_CASE_STUDIES', response.data)
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    },
    fetchCaseStudy({ commit, getters }, slug) {
      // Check if it exists in caseStudies
      var casestudy = getters.getCaseStudyBySlug(slug)

      if (casestudy) {
        commit('SET_CASE_STUDY', casestudy)
        return casestudy
      } else {
        return ContentService.getCaseStudy(slug)
          .then(response => {
            commit('SET_CASE_STUDY', response.data[0])
            return response.data[0]
          })
          .catch(error => {
            console.log('There was an error: ', error.response)
          })
      }
    },
    fetchCaseStudySlugs({ commit }) {
      ContentService.getCaseStudySlugs()
        .then(response => {
          commit('SET_CASE_STUDY_SLUGS', response.data)
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    },
    fetchAboutMe({ commit }) {
      return ContentService.getPageBySlug('about')
        .then(response => {
          commit('SET_ABOUT_ME', response.data[0])
          return response.data[0]
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    },
    setLoading({ commit }, loading) {
      commit('SET_LOADING', loading)
    }
  },
  getters: {
    getCaseStudyBySlug: state => slug => {
      if (state.caseStudies.length > 0) {
        return state.caseStudies.find(casestudy => casestudy.slug === slug)
      } else {
        return null
      }
    },
    getCockpitApiUrl: state => {
      return state.cockpitApiUrl
    },
    getCockpitUploadUrl: state => {
      return state.cockpitUploadUrl
    }
  }
})
