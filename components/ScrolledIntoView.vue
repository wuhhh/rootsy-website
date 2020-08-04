<template>
  <div>
    <slot :inRange="inRange"></slot>
  </div>
</template>

<script>
export default {
  name: 'ScrolledIntoView',
  data() {
    return {
      inRange: false,
      observer: null
    }
  },
  props: {
    // Pad horizontal centre up and down
    midPad: {
      type: Number,
      required: false,
      default: 600
    },
    // Offset midPad
    offset: {
      type: Number,
      required: false,
      default: 0
    },
    // Use position of parent El instead of this.$el
    useParent: {
      type: Boolean,
      required: false,
      default: false
    },
    observerOptions: {
      type: Object,
      required: false,
      default: () => {
        return {
          root: null,
          rootMargin: '0px',
          threshold: 1.0
        }
      }
    }
  },
  computed: {
    pad() {
      return this.midPad + this.offset
    }
  },
  mounted() {
    if (
      window &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      // Minimal polyfil of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          'isIntersecting',
          {
            get: function() {
              return this.intersectionRatio > 0
            }
          }
        )
      }

      // Observer callback
      const observerCallback = entries => {
        if (entries[0].isIntersecting) this.inRange = true
      }

      // Create the observer
      this.observer = new IntersectionObserver(
        observerCallback,
        this.observerOptions
      )

      // Watch
      let target = this.useParent ? this.$parent.$el : this.$el
      this.observer.observe(target)
    }
  }
}
</script>

<style></style>
