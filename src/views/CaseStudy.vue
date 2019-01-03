<template>
  <div v-if="caseStudy">
    <header>
      <div class="layout">
        <Logo/>
        <Nav/>
      </div>
      <div class="preamble with-intro">
        <div class="breadcrumb">
          <router-link :to="{ name: 'home' }">Index</router-link>&nbsp;/ Case Studies
        </div>
        <h1 class="main">{{ caseStudy.title }}</h1>
        <div class="intro">
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Morbi magna nunc, pulvinar vitae luctus eget, imperdiet ac mi. Quisque non neque id enim sagittis facilisis eget a leo. Curabitur rutrum ante eu arcu tincidunt, sit amet molestie felis viverra.
          </p>
        </div>
      </div>
    </header>

    <section class="detail">
      <div v-for="(content, index) in caseStudy.content" :key="index">
        <BaseMarkdown v-if="content.field.type == 'markdown'" :content="content.value"></BaseMarkdown>
        <ImageSet
          v-if="content.field.type == 'asset' && content.value.image"
          :path="content.value._id"
          :alt="caseStudy.title"
          classes="inset shadowed"
        />
        <video
          class="inset"
          v-if="content.field.type == 'asset' && content.value.video"
          muted
          autoplay
          loop
        >
          <source :src="getCockpitUploadUrl + content.value.path" :type="content.value.mime">
        </video>
      </div>
    </section>

    <nav class="work-prev-next">
      <div class="layout">
        <a href="#" class="work-prev-next--prev">
          <span href="#" rel="prev">Prev</span>
        </a>
        <a href="#" class="work-prev-next--next">
          <span href="#" rel="next">Next</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'
import ImageSet from '@/components/ImageSet.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Nav,
    Logo,
    ImageSet
  },
  props: {
    caseStudy: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getCockpitUploadUrl'])
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

section.detail {
  img {
    margin-bottom: 2em;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    padding: 0 3em;
    font-size: 0.9em;
    margin-bottom: 3em;
  }
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

section.more-work {
  margin-bottom: 4em;

  .pad {
    padding: 6vmin 10vmin;
  }

  ul.work-list {
    color: #b9b9b9;
    margin: 1em 0;
    font-family: 'CanelaDeck';
    font-size: 1.5em;
    line-height: 1.6em;
  }
}

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
