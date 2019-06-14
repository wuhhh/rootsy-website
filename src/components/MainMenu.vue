<template>
  <div id="fixed-menu">
    <Logo/>
    <Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'MainMenu',
  components: {
    Nav,
    Logo
  },
  mounted() {
    let fm = this.$el
    let ot = fm.offsetTop

    let scrollcallback = () => {
      if (window.scrollY >= ot && !fm.classList.contains('fix')) {
        fm.classList.add('fix')
      } else if (window.scrollY < ot && fm.classList.contains('fix')) {
        fm.classList.remove('fix')
      }
    }

    window.addEventListener('scroll', scrollcallback)
  }
}
</script>

<style lang="scss" scoped>
#fixed-menu {
  transition: padding-top 250ms ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
}

#fixed-menu.fix {
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 1vmin 8vmin;
  background: rgba(255, 255, 255, 0.96);
}
</style>
