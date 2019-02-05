<template>
  <div :class="{hello: popIt}" class="fit-height featured-work--item item">
    <div class="pad">
      <div class="layout">
        <div>
          <div class="item--words">
            <div class="item--title">{{ caseStudy.title }}</div>
            <div class="item--description">
              <BaseMarkdown :content="caseStudy.excerpt"></BaseMarkdown>
              <p>
                <AnchorViewCaseStudy :isDark="caseStudy.is_dark" :slug="caseStudy.title_slug"/>
              </p>
            </div>
          </div>
        </div>
        <div class="item--image">
          <ImageSet
            :width="caseStudy.image.width"
            :height="caseStudy.image.height"
            :backgroundColor="caseStudy.image.colors[3]"
            :path="'https://cockpit.rootsy.co.uk/cockpit/storage/uploads' + caseStudy.image.path"
            :alt="caseStudy.title"
            :loadOnMount="true"
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
  data() {
    return {
      scrollTop: 0,
      popIt: false,
      popAt: [1280, 690]
    }
  },
  computed: {
    elOffsetTop() {
      return this.$el.getBoundingClientRect().top + window.scrollY
    }
  },
  methods: {
    cardPop() {
      // Don't pop if window size under popAt[0] x popAt[1]
      if (
        window.innerWidth < this.popAt[0] ||
        window.innerHeight < this.popAt[1]
      ) {
        return
      }

      this.scrollTop = document.documentElement.scrollTop

      if (this.scrollTop + window.innerHeight / 2 >= this.elOffsetTop) {
        this.popIt = true
      }
      if (this.scrollTop + window.innerHeight / 2 <= this.elOffsetTop) {
        this.popIt = false
      }
    }
  },
  mounted() {
    /**
     * Pop cards
     */
    this.scrollTop = document.documentElement.scrollTop

    this.cardPop()

    window.addEventListener('scroll', () => {
      this.cardPop()
    })
  },
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
