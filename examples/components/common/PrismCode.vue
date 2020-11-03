<template>
  <div class="prism-code-wrap">
    <pre :class="languageClassName">
      <code v-html="formatCode" :class="languageClassName"></code>
    </pre>
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
const $prism = function (code, type = 'markup') {
  return Prism.highlight(code, Prism.languages[type], type)
}
const languageTypes = {
  html: 'markup',
  xml: 'markup',
  svg: 'markup',
  mathml: 'markup',
  markup: 'markup',
  css: 'css',
  javascript: 'javascript',
  js: 'javascript'
}
export default {
  name: 'prism-code',
  props: {
    code: {
      required: false,
      default: '',
      type: String
    },
    type: {
      required: false,
      default: 'html',
      type: String
    }
  },
  computed: {
    formatCode () {
      return $prism(this.code, this.realType)
    },
    realType () {
      return languageTypes[String(this.type).toLocaleLowerCase()] || 'markup'
    },
    languageClassName () {
      return `language-${this.realType}`
    }
  }
}
</script>
<style lang="scss" scoped>
  pre[class*="language-"] {
    background: #fff;
    padding: 0 20px;
  }
</style>
