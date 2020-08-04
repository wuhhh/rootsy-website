<template>
  <div>
    <Header />

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "@/components/Header.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,

    Footer
  },
  head: {
    title:
      "Rootsy | Freelance Web Designer & Developer | Cardiff, Bristol & Remote"
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
  }
};
</script>
