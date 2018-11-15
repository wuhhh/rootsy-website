<template>
  <div>
    <Header />
    <h1>Welcome to Case Study #1</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  props: ["id"],
  components: {
    Header
  }
};
</script>

<style>
</style>
