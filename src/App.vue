<template>
  <div :class="{loading: loading}" id="app">
    <router-view/>
    <Loader/>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['loading'])
  },
  components: {
    Loader
  }
}
</script>

<style lang="scss">
@import '@/sass/_reset.scss';
@import '@/sass/_settings.scss';
@import '@/sass/_fonts.scss';

html,
body,
#app,
#app > div {
  margin: 0;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

body {
  font-family: 'UntitledSans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;

  @media screen and (min-width: 1024px) {
    font-size: 15px;
    line-height: 22px;

    .icon {
      background-size: 35px 35px;
      padding-left: calc(35px + 0.25em);
    }
  }

  @media screen and (min-width: 1366px) {
    font-size: 16px;
    line-height: 23px;

    .icon {
      background-size: 37px 37px;
      padding-left: calc(35px + 0.25em);
    }
  }

  @media screen and (min-width: 1800px) {
    font-size: 18px;
    line-height: 26px;

    .icon {
      background-size: 40px 40px;
      padding-left: calc(35px + 0.5em);
    }
  }

  @media screen and (min-width: 2400px) {
    font-size: 22px;
    line-height: 32px;

    .icon {
      background-size: 44px 44px;
    }
  }
}

a {
  color: $c-blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  margin: 1em 0;
}

/* Scale canvas with resize attribute to full size */
canvas[resize] {
  width: 100vmin;
  height: 100vmin;
}

.hide {
  display: none;
}

strong {
  font-weight: bold;
}

img {
  max-width: 100%;
  display: block;
}

img.inline {
  display: inline;
  max-width: none;
  vertical-align: middle;
}

img.inset {
  max-width: 89%;
  margin: 0 auto 2em;
}

@media screen and (min-width: 1280px) {
  img.inset {
    max-width: 70%;
  }
}

img.shadowed {
  box-shadow: 0px 0 8px 0px #0000003b;
}

.strike {
  text-decoration: line-through;
}

.fit-height {
  min-height: 100%;
}

div.section-title {
  text-transform: uppercase;
  color: #666;
  font-size: 0.75em;

  &.with-icon-left,
  &.with-icon-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      width: 40px;
    }
  }

  &.with-icon-left {
    flex-direction: row-reverse;
  }
}

.heading,
.item--title {
  font-size: 2.7em;
  line-height: 1.3em;
  margin-bottom: 0.5em;
  font-family: 'CanelaDeck';
}

.with-icon-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-eye-blue {
  background: url('/img/icon/eye-solid-blue.svg') no-repeat 0 45%;
  background-size: 36px 36px;
  padding-left: calc(36px);
}

.icon-eye-pink {
  background: url('/img/icon/eye-solid-pink.svg') no-repeat 0 45%;
  background-size: 36px 36px;
  padding-left: calc(36px);
}

@media screen and (min-width: 620px) {
  header .preamble.with-intro,
  section.detail p {
    font-size: 1.1em;
    line-height: 1.5em;
  }
}

@media screen and (min-width: 720px) {
  header .preamble.with-intro .intro p,
  section.detail p {
    font-size: 1.2em;
    line-height: 1.6em;
  }

  section.detail p {
    max-width: 80%;
    margin: 3em auto;
  }
}

@media screen and (min-width: 1057px) {
  header .preamble.with-intro .intro {
    max-width: 850px;
  }

  header .preamble.with-intro .intro p,
  section.detail p {
    font-size: 1.1em;
    line-height: 1.6em;
  }

  section.detail p {
    max-width: 850px;
    margin: 4em auto;
  }
}
</style>
