export const state = () => ({
  list: [],
  caseStudy: {}
});

export const mutations = {
  SET_CASE_STUDIES(state, caseStudies) {
    state.list = caseStudies;
  },
  SET_CASE_STUDY(state, caseStudy) {
    state.caseStudy = caseStudy;
  }
};

export const actions = {
  async getAll({ commit, state }) {
    if (state.list.length) return state.list;

    return await this.$axios
      .get("/casestudies", {
        params: {
          filter: "published",
          orderby: "menu_order",
          order: "asc"
        }
      })
      .then(response => {
        if (response.status === 200) {
          commit("SET_CASE_STUDIES", response.data);
          return response.data;
        }
      });
  },
  async get({ commit }, slug) {
    return await this.$axios
      .get("/casestudies", {
        params: {
          slug: slug,
          _embed: ""
        }
      })
      .then(response => {
        if (response.status === 200) {
          commit("SET_CASE_STUDY", response.data[0]);
          return response.data[0];
        }
      });
  }
};
