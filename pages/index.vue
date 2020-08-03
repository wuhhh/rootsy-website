<template>
  <div>
    <Header />
    <CaseStudies v-if="list" />
    <About />
    <Clients />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('caseStudies/getAll'),
      store.dispatch('fetchAboutMe'),
      store.dispatch('fetchClients')
    ])
  },
  computed: {
    ...mapState({
      list: state => state.caseStudies.list
    })
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title =
          'Rootsy | Freelance Web Designer & Developer | Cardiff, Bristol & Remote'
      }
    }
  }
}
</script>
