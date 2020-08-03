<template>
  <div v-if="caseStudy">
    <header>
      <Menu />
      <div class="preamble with-intro">
        <div class="breadcrumb">
          <n-link to="/">Index</n-link>&nbsp;/ Case Studies
        </div>
        <h1 class="main">{{ caseStudy.title.rendered }}</h1>
      </div>
    </header>

    <section class="detail">
      <div class="chunk">
        <div v-html="caseStudy.acf.intro" />
      </div>
      <div
        class="chunk"
        v-for="(content, index) in caseStudy.acf.content"
        :key="caseStudy.id + '_' + index"
      >
        <div v-if="content.acf_fc_layout == 'text_block'" v-html="content.text" />
        <ImageSet
          v-if="content.acf_fc_layout == 'image_block'"
          :sizes="content.image.sizes"
          :alt="content.image.alt"
          :width="content.image.width"
          :height="content.image.height"
          classes="inset shadowed"
        />
        <video
          v-if="content.acf_fc_layout == 'video_block'"
          class="inset shadowed"
          muted
          autoplay
          loop
        >
          <source :src="content.video.url" :type="content.video.mime_type" />
        </video>
        <Separator v-if="content.acf_fc_layout === 'separator'" />
      </div>
      <div class="chunk" v-if="caseStudy._embedded['wp:term'][0]">
        <Tags :tags="caseStudy._embedded['wp:term'][0]" />
      </div>
    </section>

    <CaseStudyNav :next="caseStudy.next" :previous="caseStudy.previous" />
  </div>
</template>

<script>
import CaseStudyNav from '@/components/CaseStudyNav.vue'
import Logo from '@/components/Logo.vue'
import ImageSet from '@/components/ImageSet.vue'
import Tags from '@/components/Tags.vue'
import Separator from '@/components/Separator.vue'
import { mapState } from 'vuex'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    CaseStudyNav,
    Logo,
    ImageSet,
    Tags,
    Separator,
    Menu
  },
  computed: {
    ...mapState({
      caseStudy: state => state.caseStudies.caseStudy
    })
  },
  async fetch({ store, params, payload }) {
    if (payload) {

      //console.log("doing project route with payload", payload.slug);
      await store.dispatch("caseStudies/get", payload.post);
    } else {
      //console.log("doing project route without payload", params.slug);
      await store.dispatch("caseStudies/get", params.slug);
    }
  },
  mounted() {
    this.addMetaData()
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title =
          'Rootsy | Case Studies | ' + this.caseStudy.title.rendered
      }
    }
  }
}
</script>

<style lang="scss">

.chunk {
  margin: 10vw auto;

  &:first-child {
    margin-top: 0;
  }

  h2 {
    font-weight: 600;
  }

  p,
  ul,
  h2 {
    &:last-child {
      margin-bottom: 0;
    }

    margin-bottom: 5vw;
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 650px) {
      font-size: 1.1em;
      line-height: 1.5em;
      max-width: 80vw;
    }

    @media screen and (min-width: 760px) {
      font-size: 1.1em;
      line-height: 1.6em;
    }

    @media screen and (min-width: 960px) {
      font-size: 1.2em;
      line-height: 1.6em;
    }

    @media screen and (min-width: 1080px) {
      max-width: 70vw;
    }

    @media screen and (min-width: 1260px) {
      max-width: 62vw;
      margin-bottom: 3vw;
    }

    @media screen and (min-width: 1990px) {
      max-width: 1080px;
    }
  }

  @media screen and (min-width: 960px) {
    margin: 7vw auto;
  }

  @media screen and (min-width: 1260px) {
    margin: 5vw auto;
  }
}
</style>
