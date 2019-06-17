<template>
  <div>
    <ScrolledIntoView>
      <template v-slot:default="slotProps">
        <div
          :style="{ backgroundColor: caseStudy.acf.background_colour }"
          :class="[
            { hello: slotProps.inRange },
            { is_dark: caseStudy.acf.dark_mode }
          ]"
          class="fit-height featured-work--item item"
        >
          <div class="pad">
            <div class="layout">
              <div>
                <div class="item--words">
                  <div class="item--title">{{ caseStudy.title.rendered }}</div>
                  <div class="item--description">
                    <div v-html="caseStudy.acf.excerpt" />
                    <p>
                      <AnchorViewCaseStudy
                        :isDark="caseStudy.acf.dark_mode"
                        :slug="caseStudy.slug"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div class="item--image">
                <ImageSet
                  :width="caseStudy.acf.primary_image.width"
                  :height="caseStudy.acf.primary_image.height"
                  :sizes="caseStudy.acf.primary_image.sizes"
                  :alt="caseStudy.acf.primary_image.alt"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </ScrolledIntoView>
  </div>
</template>

<script>
import AnchorViewCaseStudy from '@/components/AnchorViewCaseStudy.vue'
import ImageSet from '@/components/ImageSet.vue'
import ScrolledIntoView from '@/components/ScrolledIntoView.vue'

export default {
  components: {
    AnchorViewCaseStudy,
    ImageSet,
    ScrolledIntoView
  },
  props: {
    caseStudy: Object
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

.item.is_dark {
  color: #bfbfbf;

  .item--title {
    color: #f0f0f0;
  }

  a {
    color: $c-pink;
  }
}
</style>
