<template>
  <div class="separator">
    <img width="124" :src="require('~/assets/images/separator.svg')">
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.separator {
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    img {
      width: 174px;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      width: 196px;
    }
  }

  @media screen and (min-width: 1480px) {
    img {
      width: 248px;
    }
  }
}
</style>
