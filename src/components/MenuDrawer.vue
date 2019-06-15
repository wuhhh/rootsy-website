<template>
  <div class="menu--drawer" :class="{ open: menuState }">
    <a @click.prevent="handleNav($event)" href="#">Index</a>
    <a
      @click.prevent="handleNav($event)"
      data-to-element="section.featured-work"
      href="#"
    >Case Studies</a>
    <a @click.prevent="handleNav($event)" data-to-element="section.about" href="#">About</a>
    <a href="mailto:hello@rootsy.co.uk">hello@rootsy.co.uk</a>
  </div>
</template>

<script>
import router from '@/router'
import { mapState } from 'vuex'
var VueScrollTo = require('vue-scrollto')

export default {
  name: 'MenuDrawer',
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    handleNav(event) {
      if (window.location.pathname != '/') {
        // Route change
        router.push({ name: 'home' }, () => {
          // Completed
          setTimeout(() => {
            VueScrollTo.scrollTo(event.target.getAttribute('data-to-element'))
          }, 750)
        })
      } else {
        // Scroll
        VueScrollTo.scrollTo(event.target.getAttribute('data-to-element'))
      }
    }
  },
  computed: {
    ...mapState(['menuState'])
  }
}
</script>

<style lang="scss" scoped>
.menu--drawer {
  text-align: right;
  display: none;
}

.menu--drawer.open {
  display: block;
  position: absolute;
  right: 0;
  padding: 1vmin 8vmin;
  top: auto;
  background: white;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.menu--drawer a {
  display: block;
  padding: 0.5em 0;
  /*transition: all 275ms ease;*/
}

/*
.menu--drawer a:nth-of-type(6) {
  transition-delay: 250ms;
}
.menu--drawer a:nth-of-type(5) {
  transition-delay: 200ms;
}
.menu--drawer a:nth-of-type(4) {
  transition-delay: 150ms;
}
.menu--drawer a:nth-of-type(3) {
  transition-delay: 100ms;
}
.menu--drawer a:nth-of-type(2) {
  transition-delay: 50ms;
}
*/

@media screen and (min-width: 768px) {
  .menu--drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: inline-block;
      transform: translateY(0);
      font-size: 0.95em;
      color: #63626b;
      padding-left: 2vw;
      padding-right: 2vw;
    }
  }
}
</style>
