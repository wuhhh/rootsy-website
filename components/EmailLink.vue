<template>
  <a href="mailto:hello@rootsy.co.uk" @click="track">hello@rootsy.co.uk</a>
</template>

<script>
export default {
  methods: {
    track() {
      this.$ga.event({
        eventCategory: "E-mail Link",
        eventAction: "click",
        eventLabel: "hello@rootsy.co.uk"
      });
    }
  }
};
</script>

<style></style>
