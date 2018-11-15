<template>
  <div class="fit-height featured-work--item item">
    <div class="pad">
      <div class="layout">
        <div>
          <div class="item--words">
            <div class="item--title">{{ caseStudy.title }}</div>
            <div class="item--description">
              <p>
                {{ caseStudy.excerpt }}
              </p>
              <p>
              <AnchorViewCaseStudy isDark="false" url="#" />
              </p>
            </div>
          </div>
        </div>
        <div class="item--image">
          <img :src="fullImagePath(caseStudy.image.path)" :alt="caseStudy.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnchorViewCaseStudy from '@/components/AnchorViewCaseStudy.vue'

export default {
  components: {
    AnchorViewCaseStudy
  },
  methods: {
    fullImagePath(path) {
      return 'http://www.rootsy.co.uk/cockpit/storage/uploads' + path
    }
  },
  props: {
    caseStudy: Object
  }
}
</script>

<style>
</style>
