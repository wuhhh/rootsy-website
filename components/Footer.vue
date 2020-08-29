<template>
  <footer>
    <div class="pad">
      <EmailLink />
    </div>
  </footer>
</template>

<script>
import EmailLink from "@/components/EmailLink.vue";

export default {
  components: {
    EmailLink
  }
};
</script>

<style lang="scss">
footer {
  background-color: #252525;
  text-align: center;

  .pad {
    padding: 16vmin 8vmin;
  }

  font-family: "CanelaDeck";
  font-size: 2.3em;

  a {
    color: white;
  }

  @media screen and (min-width: 800px) {
    .pad {
      padding: 12vmin 8vmin;
    }
  }

  @media screen and (min-width: 1400px) {
    .pad {
      padding: 10vmin 8vmin;
    }
  }
}
</style>
