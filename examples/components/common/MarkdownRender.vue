<template>
  <component :is="dynamicComponent"></component>
</template>
<script>
let dynamicComponent
export default {
  name: 'markdownRender',
  props: ['mdFileName'],
  data () {
    return {
      dynamicComponent: 'button'
    }
  },
  created () {
    let mdFileName = this.mdFileName
    dynamicComponent = this.dynamicComponent = () => import(`@/apiDoc/${mdFileName}.md`)
  },
  components: {
    dynamicComponent
  },
  beforeDestroy () {
    dynamicComponent = null
  }
}
</script>

<style lang="scss">
  @import './markdown'
</style>
