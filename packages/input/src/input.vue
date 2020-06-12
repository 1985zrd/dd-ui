<template>
  <div class="i-input-wrap">
    <template v-if="type !== 'textarea'">
      <input
        :type="type"
        :value="value"
        v-on="inputListeners"
        v-bind="$attrs"
        class="i-input"
      />
    </template>

    <textarea
      v-else
      :value="value"
      v-on="inputListeners"
      v-bind="$attrs"
      class="i-input i-textarea"
    />
  </div>
</template>

<script>
export default {
  name: 'i-input',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    inputListeners () {
      const vm = this
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit('input', event.target.value)
          let parent = vm.$parent
          while (!parent.$options.__I_FOEM_ITEM) {
            parent = parent.parent
          }
          parent.$emit('validate')
        }
      })
    }
  }
}
</script>
