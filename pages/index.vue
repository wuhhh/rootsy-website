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
import { mapState } from "vuex";

import Header from "@/components/Header.vue";
import CaseStudies from "@/components/CaseStudies.vue";
import About from "@/components/About.vue";
import Clients from "@/components/Clients.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    CaseStudies,
    About,
    Clients,
    Footer
  },
  computed: {
    ...mapState({
      list: state => state.caseStudies.list
    })
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch("caseStudies/getAll"),
      store.dispatch("fetchAboutMe"),
      store.dispatch("fetchClients")
    ]);
  },
  mounted() {
    this.addMetaData();
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title =
          "Rootsy | Freelance Web Designer & Developer | Cardiff, Bristol & Remote";
      }
    }
  }
};
</script>
