<template>
  <footer>
    <div class="pad">
      <a href="mailto:hello@rootsy.co.uk">hello@rootsy.co.uk</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
  background-color: #252525;
  text-align: center;

  .pad {
    padding: 16vmin 8vmin;
  }

  font-family: 'CanelaDeck';
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
