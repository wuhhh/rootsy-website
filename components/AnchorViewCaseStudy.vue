<template>
  <div class="view-case-study">
     <nuxt-link :to="{ path: `case-study/${slug}`, params: { slug } }"
      @mouseover.native="mouseOver()"
      :class="[{ 'play-transition': playTransition }, 'icon-eye-' + color]"
      class="icon icon-before">View case study</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playTransition: false,
      transitionDuration: 1000
    }
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    color() {
      return this.isDark ? 'pink' : 'blue'
    }
  },
  methods: {
    mouseOver() {
      if (!this.playTransition) {
        this.playTransition = true

        setTimeout(() => {
          this.playTransition = false
        }, this.transitionDuration)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.view-case-study {
  margin-top: 1.5em;

  a {
    position: relative;
    display: inline-block;
    font-weight: bold;
    vertical-align: middle;

    &:after {
      content: '';
      transition: right 300ms ease, left 700ms ease-in-out, opacity 250ms ease;
      position: absolute;
      top: 0;
      right: 100%;
      bottom: 0;
      left: 0;
      opacity: 0;
      background-image: linear-gradient(
        to right,
        #eba7a700 0%,
        #eba7a7ff 15%,
        #eba7a7ff 85%,
        #eba7a700 100%
      );
    }
  }

  a.play-transition:after {
    right: 0;
    left: 100%;
    opacity: 1;
  }
}
</style>
