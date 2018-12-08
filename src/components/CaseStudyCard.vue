<template>
  <div :class="{hello: popIt}" class="fit-height featured-work--item item">
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
