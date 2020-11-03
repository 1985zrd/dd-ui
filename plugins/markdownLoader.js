const markdown = require('markdown-it')

function markLoader (src) {
  this.cacheable(false)
  const md = markdown({
    html: true,
    typographer: true
  })
  const html = encodeURIComponent(md.render(src))
  // const html = md.render(src.replace(/</g, '&lt;').replace(/`.*?&lt;.*?`/g, $0 => $0.replace(/&lt;/g, '<')))
  return `
<template>
  <div class="markdown api-container" id="API" data-html="${html}"></div>
</template>
<script>
  export default {
    mounted () {
      this.$el.innerHTML = decodeURIComponent(this.$el.getAttribute('data-html'))
      this.$el.setAttribute('data-html', '')
    }
  }
</script>
`
}

module.exports = markLoader
