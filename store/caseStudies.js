export const state = () => ({
  list: [],
  caseStudy: {}
})

export const mutations = {
  SET_CASE_STUDIES(state, caseStudies) {
    state.list = caseStudies
  },
  SET_CASE_STUDY(state, caseStudy) {
    state.caseStudy = caseStudy
  }
}

export const actions = {
  async getAll({ commit, state }) {
    if (state.list.length) return state.list

    return await this.$axios
      .get('/casestudies', {
        params: {
          filter: 'published'
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          commit('SET_CASE_STUDIES', response.data)
          return response.data
        }
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
  }
}

export const getters = {}
