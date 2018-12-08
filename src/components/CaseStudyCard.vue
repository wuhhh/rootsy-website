<template>
  <div class="fit-height featured-work--item item">
    <div class="pad">
      <div class="layout">
        <div>
          <div class="item--words">
            <div class="item--title">{{ caseStudy.title }}</div>
            <div class="item--description">
              <p>{{ caseStudy.excerpt }}</p>
              <p>
                <AnchorViewCaseStudy isDark="false" :slug="caseStudy.title_slug"/>
              </p>
            </div>
          </div>
        </div>
        <div class="item--image">
          <ImageSet
            :path="'https://www.rootsy.co.uk/cockpit/storage/uploads' + caseStudy.image.path"
            :alt="caseStudy.title"
            classes="test"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnchorViewCaseStudy from '@/components/AnchorViewCaseStudy.vue'
import ImageSet from '@/components/ImageSet.vue'

export default {
  components: {
    AnchorViewCaseStudy,
    ImageSet
  },
  props: {
    caseStudy: Object
  }
}
</script>

<style>
</style>
