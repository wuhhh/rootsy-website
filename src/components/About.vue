<template>
  <section class="fit-height about">
    <Siney/>
    <div class="pad">
      <div class="section-title">About Rootsy</div>
      <div class="layout">
        <img v-if="aboutMe" class="profile" :src="profilePic" alt="Huw Roberts">
        <div class="heading">
          <SpanClipReveal v-if="aboutMe.title">{{ aboutMe.title }}</SpanClipReveal>
        </div>
        <div class="about--description">
          <BaseMarkdown v-if="aboutMe" :content="aboutMe.body"/>
          <p class="availability">
            <SpanClipReveal v-if="aboutMe.next_available">
              <span class="availability--avail">Next Availability:</span>
              {{ aboutMe.next_available }}
            </SpanClipReveal>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpanClipReveal from '@/components/SpanClipReveal.vue'
import Siney from '@/components/Siney.vue'
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchAboutMe')
  },
  computed: {
    ...mapState(['aboutMe']),
    profilePic() {
      return (
        'https://www.rootsy.co.uk/cockpit/storage/uploads' +
        this.aboutMe.profile_pic.path
      )
    }
  },
  components: {
    SpanClipReveal,
    Siney
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

section.about {
  position: relative;
  overflow-x: hidden;

  canvas#siney {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .pad {
    position: relative;
    padding: 6vmin 8vmin;
  }

  .heading {
    position: relative;
    font-size: 9vw;
    order: 1;
    transform: translateX(5%);
    width: 61%;
  }

  .about--description {
    font-size: 0.85em;
    padding: 0 1em;
    width: 100%;
    order: 3;
    margin-top: 1em;
  }

  .layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 106%;
    overflow: hidden;
    margin: 1em 0 2em -3%;
    flex-wrap: wrap;
  }

  img.profile {
    width: 38%;
    height: auto;
    order: 2;
    transform: translateX(-5%);
  }

  p.availability {
    color: black;
    font-size: 0.85em;
    padding: 1em 0 0 0;
    /*color:$c-teal;*/
    span.availability--avail {
      color: $c-blue;
    }
  }

  @media screen and (min-height: 700px) {
    .about--description {
      font-size: 3.7vmin;
      line-height: 1.4em;
    }
  }

  @media screen and (min-width: 731px) {
    .layout {
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      margin: 1em 0 2em 0;
    }

    img.profile {
      width: 30%;
      transform: translateX(0);
      margin: -8% 0 0 -2%;
    }

    .heading {
      font-size: 7.5vw;
      margin-left: auto;
      width: 100%;

      span {
        display: inline-block;
        width: 94%;
      }
    }

    .about--description {
      font-size: 1em;
      width: 44%;
      transform: translate(8%, -8%);
      line-height: 1.4em;
      max-width: 500px;
    }

    &.fit-height {
      min-height: initial;
    }
  }

  @media screen and (min-width: 1000px) {
    .heading {
      font-size: 6.5vw;
    }

    .about--description {
      font-size: 1.1em;
    }
  }

  @media screen and (min-width: 1200px) {
    .about--description {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 1470px) {
    .heading {
      transform: translateX(9%);

      span {
        width: 82%;
      }
    }

    .about--description {
      width: 50%;
      max-width: 520px;
      font-size: 1.2vw;
    }

    img.profile {
      margin: -8% 0 0 2%;
      max-width: 375px;
    }
  }

  @media screen and (min-width: 1700px) {
    .heading {
      transform: translateX(13%);
    }

    .about--description {
      max-width: 600px;
    }
  }

  @media screen and (min-width: 2000px) {
    .heading {
      transform: translateX(14%);
    }

    .about--description {
      max-width: 650px;
    }

    img.profile {
      max-width: 450px;
    }
  }

  @media screen and (min-width: 2250px) {
    .heading {
      font-size: 130px;
      transform: translateX(20%);

      span {
        width: 70%;
      }
    }

    .about--description {
      font-size: 27px;
    }

    img.profile {
      max-width: 466px;
    }
  }
}
</style>
