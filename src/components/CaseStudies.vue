<template>
  <section class="featured-work">
    <CaseStudyCard v-for="caseStudy in caseStudies" :key="caseStudy._id" :caseStudy="caseStudy"/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AnchorViewCaseStudy from '@/components/AnchorViewCaseStudy.vue'
import CaseStudyCard from '@/components/CaseStudyCard.vue'

export default {
  components: {
    AnchorViewCaseStudy,
    CaseStudyCard
  },
  computed: {
    ...mapState(['caseStudies'])
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

section.featured-work {
  .featured-work--item {
    overflow: hidden; /* Knock out drop shadow */
  }

  .item .layout {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > div {
      flex-basis: 100%;
    }
  }

  .item a:hover,
  .item a:active {
    text-decoration: none;
  }

  .item .pad {
    padding: 10vmin 8vmin;
    height: 100vh;
    box-sizing: border-box;
    padding-bottom: 0;
  }

  .item--description {
    margin-bottom: 2em;
  }

  .item--image {
    margin-top: auto;
    box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.2);
  }

  .item--title,
  .item--description,
  .item--image,
  .pad {
    transition: transform 750ms ease-in-out;
  }

  .item.hello {
    .pad {
      transform: translateY(-20px);
    }

    .item--title {
      transform: translateY(36px);
    }

    .item--description {
      transform: translateY(36px);
    }

    .item--image {
      transform: translateY(0) scale(1.01);
    }
  }

  @media screen and (orientation: landscape), screen and (min-width: 768px) {
    .item .pad {
      padding-top: 4vmax;
    }

    .item .layout {
      flex-direction: row;

      & > div {
        flex-basis: 50%;
        flex-shrink: 0;
      }
    }

    .item--words {
      padding-right: 3em;
    }

    .item--image {
      margin-top: initial;
    }
  }

  @media screen and (orientation: landscape) and (min-height: 420px),
    screen and (orientation: portrait) and (min-height: 680px) {
    .fit-height {
      min-height: 75vh;
      max-height: 75vh;
    }
  }

  @media screen and (orientation: landscape) and (min-height: 670px),
    screen and (orientation: portrait) and (min-width: 768px) {
    .fit-height {
      min-height: 50vh;
      max-height: 50vh;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 768px) {
    .fit-height {
      min-height: 40vh;
      max-height: 40vh;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 1024px) {
    .fit-height {
      min-height: 400px;
      max-height: 30vh;
    }
  }

  @media screen and (orientation: landscape) and (min-height: 900px) {
    .fit-height {
      min-height: 400px;
      max-height: 23.5vw;
    }
  }

  @media screen and (min-width: 1300px) {
    .item--title {
      font-size: 3.2em;
    }
  }

  @media screen and (min-width: 1500px) {
    .item--words {
      padding-right: 8em;
    }
  }

  @media screen and (min-width: 1700px) {
    .item--words {
      padding-right: 10em;
    }
  }
}
</style>
