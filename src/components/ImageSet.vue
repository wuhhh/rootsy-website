<template>
  <img :src="defaultIMG" :srcset="srcset" :alt="alt" :class="classes">
</template>

<script>
import ContentService from '@/services/ContentService.js'

export default {
  props: {
    path: {
      type: String,
      default: '',
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      baseURL: ContentService.getBaseURL(),
      accessToken: ContentService.getAccessToken()
    }
  },
  computed: {
    defaultIMG() {
      return (
        this.baseURL +
        '/cockpit/image?token=' +
        this.accessToken +
        '&src=' +
        this.path +
        '&m=fitToWidth&w=600&q=75&o=1'
      )
    },
    srcset() {
      let sets = []

      // 1000w
      sets.push(
        this.baseURL +
          '/cockpit/image?token=' +
          this.accessToken +
          '&src=' +
          this.path +
          '&m=fitToWidth&w=1000&q=75&o=1 1000w'
      )

      // 2000w
      sets.push(
        this.baseURL +
          '/cockpit/image?token=' +
          this.accessToken +
          '&src=' +
          this.path +
          '&m=resize&w=2000&q=75&o=1 2000w'
      )

      return sets.join(',')
    }
  }
}
</script>

<style>
</style>
