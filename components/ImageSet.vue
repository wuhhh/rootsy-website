<template>
  <img
    :data-src="defaultIMG"
    :data-srcset="srcset"
    :alt="alt"
    :class="classes"
    :style="style"
  />
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'ImageSet',
  props: {
    backgroundColor: {
      type: String,
      default: '#eba7a7'
    },
    height: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    sizes: {
      type: Object,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    },
    // Load on mounted()
    loadOnMount: {
      type: Boolean,
      required: false
    },
    // Allow load trigger by setting to true
    triggerLoad: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      loading: true,
      observer: null
    }
  },
  watch: {
    // Watch for changes to triggerLoad prop
    triggerLoad: function() {
      this.observer.triggerLoad(this.$el)
    }
  },
  computed: {
    defaultIMG() {
      return this.sizes['rootsy-small']
    },
    srcset() {
      let sets = []

      // 1000w
      sets.push(this.sizes['rootsy-medium'] + ' 1000w')

      // 2000w
      sets.push(this.sizes['rootsy-large'] + ' 2000w')

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

      if (this.width) style.width = '100%'

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
    const setLoadingState = event => {
      this.loading = false
      this.$emit('imageDidLoad', event)
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
    this.observer = lozad(this.$el)
    this.observer.observe()

    // Don't wait for viewport scroll, load immediately
    if (this.loadOnMount) this.observer.triggerLoad(this.$el)
  }
}
</script>

<style></style>
