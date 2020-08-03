export const state = () => ({
  aboutMe: '',
  clients: '',
  loading: true,
  menuState: false
})

export const mutations = {
  SET_ABOUT_ME(state, aboutMe) {
    state.aboutMe = aboutMe
  },
  SET_CLIENTS(state, clients) {
    state.clients = clients
  },
  SET_MENU_STATE(state, show) {
    state.menuState = show
  }
}

export const actions = {
  async fetchAboutMe({ commit }) {
    return await this.$axios
      .get('/pages', {
        params: {
          slug: 'about',
          _embed: ''
        }
      })
      .then(response => {
        if (response.status === 200) {
          commit('SET_ABOUT_ME', response.data[0])
          return response.data[0]
        }
      })
  },
  async fetchClients({ commit }) {
    return await this.$axios
      .get('/pages', {
        params: {
          slug: 'clients',
          _embed: ''
        }
      })
      .then(response => {
        if (response.status === 200) {
          commit('SET_CLIENTS', response.data[0])
          return response.data[0]
        }
      })
  },
  setMenuState({ commit }, show) {
    commit('SET_MENU_STATE', show)
  }
}

export const getters = {}
