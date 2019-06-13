<template>
  <nav class="work-prev-next">
    <div class="layout">
      <router-link class="work-prev-next--prev"
        :to="{ name: 'case-study-show', params: { titleslug: previous.slug }}"
        rel="prev"
      >
        <span>Prev</span>
      </router-link>
      <router-link class="work-prev-next--next"
        :to="{ name: 'case-study-show', params: { titleslug: next.slug }}"
        rel="next"
      >
        <span>Next</span>
      </router-link>
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
@import '@/sass/_settings.scss';

nav.work-prev-next {
  margin-top: 8em;

  .layout {
    display: flex;

    & > a {
      width: 50%;
      text-decoration: none;
    }
  }

  .work-prev-next--prev,
  .work-prev-next--next {
    padding: 4em 3em;

    span {
      display: inline-block;
      font-family: 'CanelaDeck';
      /*font-size: 4em;*/
      line-height: normal;
      /*width: 50%;*/
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

  .work-prev-next--prev {
    background-color: lighten($c-pink, 10%);
    display: flex;
    justify-content: flex-end;
    text-align: right;

    span {
      color: $c-blue;
      border-bottom-color: $c-blue;
    }
  }

  .work-prev-next--next {
    background-color: lighten($c-blue, 5%);
    text-align: left;

    span {
      color: lighten($c-pink, 10%);
      border-bottom-color: lighten($c-pink, 10%);
    }
  }
}
</style>
