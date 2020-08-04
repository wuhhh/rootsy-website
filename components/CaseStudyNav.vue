<template>
  <nav class="work-nav">
    <div class="work-nav--prev">
      <n-link
        v-if="previous"
        :to="{ path: `/case-study/${previous.slug}`, params: { slug: previous.slug } }"
        rel="prev"
      >
        <span>Prev</span>
      </n-link>
    </div>
    <div class="work-nav--next">
      <n-link
        v-if="next"
        :to="{ path: `/case-study/${next.slug}`, params: { slug: next.slug } }"
        rel="next"
      >
        <span>Next</span>
      </n-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CaseStudyNav',
  props: {
    next: {
      type: Object,
      required: false
    },
    previous: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss">
nav.work-nav {
  margin-top: 8em;
  display: flex;

  .work-nav--prev,
  .work-nav--next {
    padding: 4em 3em;
    flex-basis: 50%;

    span {
      display: inline-block;
      font-family: 'CanelaDeck';
      line-height: normal;
      font-size: 2.5em;
      width: 100%;
      border-bottom: 2px solid;
      transition: width 350ms ease;

      @media screen and (min-width: 400px) {
        width: 90%;
      }

      @media screen and (min-width: 600px) {
        font-size: 3em;
        width: 70%;
      }

      @media screen and (min-width: 800px) {
        width: 55%;
      }

      @media screen and (min-width: 1000px) {
        width: 45%;
      }
    }

    &:hover {
      span {
        width: 100%;
      }
    }
  }

  .work-nav--prev {
    background-color: lighten($c-pink, 10%);
    text-align: right;

    span {
      color: $c-blue;
      border-bottom-color: $c-blue;
    }
  }

  .work-nav--next {
    background-color: lighten($c-blue, 5%);
    text-align: left;

    span {
      color: lighten($c-pink, 10%);
      border-bottom-color: lighten($c-pink, 10%);
    }
  }
}
</style>
