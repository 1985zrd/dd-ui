<template>
  <form class="i-form"
    :class="[{
      'el-form--inline': layout === 'inline',
      'el-form--vertical': layout === 'vertical',
      'el-form--horizontal': layout === 'horizontal'
    }]"
  >
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'i-form',
  provide () {
    return {
      'iForm': this
    }
  },
  props: {
    model: Object,
    rules: Object,
    layout: {
      type: String,
      default: 'horizontal' // 'horizontal'|'vertical'|'inline'
    },
    hideRequiredMark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    validate (cb) {
      const fail = false
      const tasks = this.$children
        .filter(item => {
          return item.prop
        })
        .map(item => {
          return item.validate()
        })
      Promise.all(tasks)
        .then((res) => {
          console.log(res)
          cb(res.every(item => item === '' || item === true)) // item是校验完的error message，校验通过为空字符串。true是没定义rules返回的。
        })
        .catch(() => cb(fail))
    }
  }
}
</script>
