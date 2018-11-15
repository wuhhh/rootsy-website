<template>
  <nav data-menu-name="primary" class="menu menu-primary" :class="{ open: menuOpen }">
    <div @click="toggleMenuOpen()" data-menu-toggle="primary" class="menu--toggle">
      <svg viewBox="0 0 40 40" width="40">
        <path d="M29,16c0,0.5-0.5,1-1,1H12c-0.6,0-1-0.5-1-1v-1c0-0.6,0.4-1,1-1h16c0.5,0,1,0.4,1,1V16z"/>
        <path d="M29,25c0,0.5-0.5,1-1,1H12c-0.6,0-1-0.5-1-1v-1c0-0.5,0.4-1,1-1h16c0.5,0,1,0.5,1,1V25z"/>
      </svg>
    </div>
    <div class="menu--drawer">
      <a href="#">Index</a>
       <router-link :to="{ name: 'case-study-show', params: { id: 1 } }">About</router-link>
      <a href="#">hello@rootsy.co.uk</a>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenuOpen() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style lang="scss">
@import "@/sass/_settings.scss";

nav.menu-primary {
  position: relative;

  .menu--toggle {
    transform: translateX(4px);

    svg path {
      transition: all 175ms ease-in-out;
    }
  }

  .menu--drawer {
    position: absolute;
    right: 0;
    text-align: right;
  }

  .menu--drawer a {
    display: block;
    opacity: 0;
    pointer-events: none;
    margin: 0.125em 0;
    transform: translateY(-6px);
    transition: all 275ms ease;
  }

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

  &.open {
    .menu--toggle {
      svg path:nth-of-type(1) {
        transform: translate3d(0, 9px, 0);
        fill: $c-blue;
      }
      svg path:nth-of-type(2) {
        transform: translate3d(0, -9px, 0);
        fill: $c-blue;
      }
    }

    .menu--drawer {
      display: block;

      a {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  @media screen and (min-width: 600px) {
    & {
      a {
        padding: 0.5em;
        margin: 0 2vmin;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    .menu--toggle {
      display: none;
    }

    .menu--drawer {
      position: relative;
      right: auto;
      text-align: left;
      display: flex;
      justify-content: space-between;
      width: 400px;
    }

    .menu--drawer a {
      opacity: 1;
      display: inline-block;
      transform: translateY(0);
      font-size: 0.85em;
      pointer-events: all;
      color: #63626b;
    }
  }
}
</style>
