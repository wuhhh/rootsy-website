<template>
  <span class="clipped" :style="{ clipPath: clipPath }">
    <slot></slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      // Set everything in mounted() for ssr compat.
      clipPath: 'none',
      scrollTop: 0
    }
  },
  computed: {
    elOffsetTop() {
      return this.$el.getBoundingClientRect().top + window.scrollY
    }
  },
  mounted() {
    setTimeout(() => {
      this.clipPath = 'inset(0 100% 0 0)'
      this.scrollTop = document.documentElement.scrollTop

      this.clipReveal()

      window.addEventListener(
        'scroll',
        () => {
          this.clipReveal()
        },
        { passive: true }
      )
    }, 500)
  },
  methods: {
    clipReveal() {
      this.scrollTop = document.documentElement.scrollTop

      if (this.scrollTop + window.innerHeight / 1.1 >= this.elOffsetTop) {
        this.clipPath = 'inset(0 0 0 0)'
      }
    }
  }
}
</script>

<style lang="scss">
span.clipped {
  display: inline-block;
  position: relative;
  transition: clip-path 800ms ease;
}
</style>
