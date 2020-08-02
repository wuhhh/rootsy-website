<template>
  <div class="menu--toggle" :class="{ open: menuState }" @click="toggleMenu()">
    <svg viewBox="0 0 40 40" width="40">
      <path
        d="M29,16c0,0.5-0.5,1-1,1H12c-0.6,0-1-0.5-1-1v-1c0-0.6,0.4-1,1-1h16c0.5,0,1,0.4,1,1V16z"
      ></path>
      <path
        d="M29,25c0,0.5-0.5,1-1,1H12c-0.6,0-1-0.5-1-1v-1c0-0.5,0.4-1,1-1h16c0.5,0,1,0.5,1,1V25z"
      ></path>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MenuToggle',
  methods: {
    toggleMenu() {
      //store.dispatch('setMenuState', !store.state.menuState)
    }
  },
  computed: {
    ...mapState(['menuState'])
  }
}
</script>

<style lang="scss" scoped>
.menu--toggle {
  transform: translateX(11px);

  svg path {
    transition: all 175ms ease-in-out;
  }
}

.menu--toggle.open {
  svg path:nth-of-type(1) {
    transform: translate3d(0, 9px, 0);
    fill: $c-blue;
  }
  svg path:nth-of-type(2) {
    transform: translate3d(0, -9px, 0);
    fill: $c-blue;
  }
}

@media screen and (min-width: 768px) {
  .menu--toggle {
    display: none;
  }
}
</style>
