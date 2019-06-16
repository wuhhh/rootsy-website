<template>
  <div
    :style="{ backgroundColor: caseStudy.acf.background_colour }"
    :class="[{hello: popIt}, {is_dark: caseStudy.acf.dark_mode}]"
    class="fit-height featured-work--item item"
  >
    <div class="pad">
      <div class="layout">
        <div>
          <div class="item--words">
            <div class="item--title">{{ caseStudy.title.rendered }}</div>
            <div class="item--description">
              <div v-html="caseStudy.acf.excerpt"/>
              <p>
                <AnchorViewCaseStudy :isDark="caseStudy.acf.dark_mode" :slug="caseStudy.slug"/>
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

    window.addEventListener(
      'scroll',
      () => {
        this.cardPop()
      },
      { passive: true }
    )
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

<style  lang="scss">
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
