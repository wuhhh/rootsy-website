<template>
  <img :data-src="defaultIMG" :data-srcset="srcset" :alt="alt" :class="classes" :style="style">
</template>

<script>
import ContentService from '@/services/ContentService.js'
import lozad from 'lozad'

export default {
  name: 'ImageSet',
  props: {
    backgroundColor: {
      type: String,
      default: '#efefef'
    },
    height: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
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
      accessToken: ContentService.getAccessToken(),
      loading: true
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
    },
    aspectRatio() {
      // Calculate the aspect ratio of the image
      // if the width and the height are given.
      if (!this.width || !this.height) return null

      return (this.height / this.width) * 100
    },
    style() {
      // The background color is used as a
      // placeholder while loading the image.
      // You can use the dominant color of the
      // image to improve perceived performance.
      // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
      const style = { backgroundColor: this.backgroundColor }

      if (this.width) style.width = `${this.width}px`

      // If the image is still loading and an
      // aspect ratio could be calculated, we
      // apply the calculated aspect ratio by
      // using padding top.
      const applyAspectRatio = this.loading && this.aspectRatio
      if (applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0
        // Scale the image container according
        // to the aspect ratio.
        style.paddingTop = `${this.aspectRatio}%`
      }

      return style
    }
  },
  mounted() {
    // As soon as the <img> element triggers
    // the `load` event, the loading state is
    // set to `false`, which removes the apsect
    // ratio we've applied earlier.
    const setLoadingState = () => {
      this.loading = false
    }
    this.$el.addEventListener('load', setLoadingState)
    // We remove the event listener as soon as
    // the component is destroyed to prevent
    // potential memory leaks.
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', setLoadingState)
    })

    // We initialize Lozad.js on the root
    // element of our component.
    const observer = lozad(this.$el)
    observer.observe()
  }
}
</script>

<style>
</style>
