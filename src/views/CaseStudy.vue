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
      </div>
    </header>

    <section class="detail">
      <div class="chunk">
        <BaseMarkdown v-if="caseStudy.intro" :content="caseStudy.intro"></BaseMarkdown>
      </div>
      <div
        class="chunk"
        v-for="(content, index) in caseStudy.content"
        :key="caseStudy._id + '_' + index"
      >
        <BaseMarkdown v-if="content.field.type == 'markdown'" :content="content.value"></BaseMarkdown>
        <ImageSet
          v-if="content.field.type == 'asset' && content.value.image"
          :path="content.value._id"
          :alt="content.value.title"
          :width="content.value.width"
          :height="content.value.height"
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
      <div class="chunk" v-if="caseStudy.tags">
        <Tags :tags="caseStudy.tags"/>
      </div>
    </section>

    <CaseStudyNav :current="caseStudy._id"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import CaseStudyNav from '@/components/CaseStudyNav.vue'
import Logo from '@/components/Logo.vue'
import ImageSet from '@/components/ImageSet.vue'
import Tags from '@/components/Tags.vue'
import { mapGetters } from 'vuex'
import store from '@/store'

export default {
  components: {
    Nav,
    CaseStudyNav,
    Logo,
    ImageSet,
    Tags
  },
  props: {
    caseStudy: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getCockpitUploadUrl'])
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    // We do this bcause: https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
    store
      .dispatch('fetchCaseStudy', routeTo.params.titleslug)
      .then(casestudy => {
        routeTo.params.caseStudy = casestudy
        next()
      })
  },
  mounted() {
    this.addMetaData()
  },
  methods: {
    addMetaData() {
      if (document) {
        document.title = 'Rootsy | Case Studies | ' + this.caseStudy.title
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

.chunk {
  margin: 10vw auto;

  &:first-child {
    margin-top: 0;
  }

  p,
  ul {
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
