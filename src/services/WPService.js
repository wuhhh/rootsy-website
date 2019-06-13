import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://wp.rootsy.co.uk/wp-json/wp/v2`,
  withCredentials: false, // This is the default,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBaseURL() {
    return apiClient.defaults.baseURL
  },
  getCaseStudies() {
    return apiClient.get('/casestudies', {
      params: {
        orderby: 'menu_order',
        order: 'asc',
        _embed: ''
      }
    })
  },
  getCaseStudy(slug) {
    return apiClient.get('/casestudies', {
      params: {
        slug: slug,
        _embed: ''
      }
    })
  },
  getPageBySlug(slug) {
    return apiClient.get('/pages', {
      params: {
        slug: slug,
        _embed: ''
      }
    })
  },
  getCaseStudySlugs() {
    //return apiClient.post('/casestudyslugs')
  },
  getAboutMe() {
    //return apiClient.post('/singletons/get/about')
  }
}
