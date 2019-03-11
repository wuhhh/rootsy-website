<template>
  <div>
    <Header/>
    <CaseStudies/>
    <About/>
    <Clients/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CaseStudies from '@/components/CaseStudies.vue'
import About from '@/components/About.vue'
import Clients from '@/components/Clients.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    CaseStudies,
    About,
    Clients,
    Footer
  },
  mounted() {
    this.addMetaData()
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title = 'Rootsy | Web Design & Development by Huw Roberts'
      }
    }
  }
}
</script>
