<template>
  <div class="fit-height">
    <div class="sorry">
      <h1>No such luck :/</h1>
      That page wasn't found - you might have followed an outdated link.
      <br />Returning to the
      <router-link :to="{ name: 'home' }">Index</router-link>...
      <Logo class="logo" />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo
  },
  mounted() {
    this.addMetaData();

    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title = "Rootsy | Page Not Found";
      }
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.4em;
  margin-bottom: 1em;
}
div.fit-height {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  line-height: 2em;
  text-align: center;
  padding: 10px;
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 75px;
}
</style>
