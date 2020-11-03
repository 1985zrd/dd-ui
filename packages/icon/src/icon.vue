<template>
  <i :class="'i-icon-' + name"></i>
</template>  

<script>
export default {
  name: 'i-icon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

