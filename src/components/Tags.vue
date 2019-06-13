<template>
  <p class="tag-list" v-html="tagList"></p>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  computed: {
    tagList() {
      let tags = this.tags.map(tag => {
        return tag.name
      })

      let sep = '<span class="separator"> / </span>'
      return tags.join(sep)
    }
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

.tag-list {
  width: 70%;
  text-align: center;
  padding-top: 2em;
  font-size: 0.8em;
  color: #808080;
  span.separator {
    color: $c-teal;
    font-weight: normal;
  }
}
</style>
