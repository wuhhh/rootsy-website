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
          v-if="content.field.type == 'asset' && content.value.video"
          class="inset shadowed"
          muted
          autoplay
          loop
        >
          <source :src="getCockpitUploadUrl + content.value.path" :type="content.value.mime">
        </video>
      </div>
    </section>

    <CaseStudyNav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import CaseStudyNav from '@/components/CaseStudyNav.vue'
import Logo from '@/components/Logo.vue'
import ImageSet from '@/components/ImageSet.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Nav,
    CaseStudyNav,
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
</style>
