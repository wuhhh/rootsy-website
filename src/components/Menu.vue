<template>
  <div id="menu">
    <div class="layout">
      <Logo/>
      <MenuToggle/>
    </div>
    <MenuDrawer/>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import MenuToggle from '@/components/MenuToggle.vue'
import MenuDrawer from '@/components/MenuDrawer.vue'

export default {
  name: 'Menu',
  components: {
    Nav,
    Logo,
    MenuToggle,
    MenuDrawer
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
#menu {
  transition: padding-top 250ms ease;
  width: 100%;
  box-sizing: border-box;

  .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

#menu.fix {
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 1vmin 8vmin;
  background: rgba(255, 255, 255, 1);
}

@media screen and (min-width: 768px) {
  #menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
