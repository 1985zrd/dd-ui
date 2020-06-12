<template>
  <button :class="classSet" @click="handleClick">
    <slot></slot>  
  </button>  
</template>

<script>
export default {
  name: 'i-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    classSet() {
      return `d-button d-button--${this.type}`
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>
