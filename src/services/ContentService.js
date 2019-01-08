import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://www.rootsy.co.uk/cockpit/api`,
  withCredentials: false, // This is the default,
  params: {
    token: 'e7d1063e853ff16e508fbef93fca09'
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBaseURL() {
    return apiClient.defaults.baseURL
  },
  getAccessToken() {
    return apiClient.defaults.params.token
  },
  getCaseStudies() {
    return apiClient.post('/collections/get/casestudies', {
      filter: { published: true }
    })
  },
  getCaseStudy(titleslug) {
    return apiClient.post('/collections/get/casestudies', {
      filter: {
        title_slug: titleslug
      }
    })
  },
  getCaseStudySlugs() {
    return apiClient.post('/casestudyslugs')
  },
  getAboutMe() {
    return apiClient.post('/singletons/get/about')
  }
}
