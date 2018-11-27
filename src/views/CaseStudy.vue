<template>
  <div>
    <header>
      <div class="layout">
        <Logo />
        <Nav />
      </div>
      <div class="preamble with-intro">
        <div class="breadcrumb">
          <a href="/">Index</a> / Case Studies
        </div>
        <h1 class="main">{{ caseStudy.title }}</h1>
        <div class="intro">
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Morbi magna nunc, pulvinar vitae luctus eget, imperdiet ac mi. Quisque non neque id enim sagittis facilisis eget a leo. Curabitur rutrum ante eu arcu tincidunt, sit amet molestie felis viverra.
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Nav,
    Logo
  },
  props: {
    casestudy: {
      type: Object,
      required: true
    }
  },
  computed: {
    caseStudy() {
      return this.casestudy.entries[0]
    }
  }
}
</script>

<style>
</style>
