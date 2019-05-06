<template>
  <div v-html="markdown"></div>
</template>

<script>
var md = require('markdown-it')({
  html: true,
  breaks: true
})

export default {
  props: {
    content: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    markdown() {
      return md.render(this.content)
    }
  }
}
</script>
