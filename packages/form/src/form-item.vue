<template>
  <div class="i-form-item"
    :class="[{
      'is-required': isRequired || required,
      'is-no-mark': iForm && iForm.hideRequiredMark,
      'with-help': validateMessage
    }]"
  >
    <label class="i-form-item__label" :style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="i-form-item__control">
      <slot></slot>
      <p
        v-if="validateState === 'error' && validateMessage"
        class="i-form-item__error"
      >{{ validateMessage }}</p>
    </div>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'i-form-item',
  __I_FOEM_ITEM: true,
  inject: ['iForm'],
  props: {
    label: String,
    labelStyle: Object,
    for: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      validateMessage: '',
      validateState: ''
    }
  },
  mounted () {
    this.$on('validate', this.validate)
  },
  computed: {
    isRequired () {
      let rules = this.getRules()
      let isRequired = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }

      return isRequired
    }
  },
  methods: {
    // validate (callback = () => {}) {
    validate () {
      const propKey = this.prop
      if (!propKey) return true
      const rules = this.getRules()
      if (!rules || rules.length === 0) {
        console.warn(`你定义了prop属性，如果想做校验，请传入rules。如果不想用校验，我建议删除prop属性。`)
        return true
      }

      const value = this.iForm.model[propKey]

      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }

      const validator = new Schema({ [propKey]: rules })
      return new Promise((resolve) => {
        // validator.validate({ [propKey]: value }, { firstFields: true, suppressWarning: false }, (errors, fields) => {
        validator.validate({ [propKey]: value }, { firstFields: true, suppressWarning: false }, (errors) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''

          resolve(this.validateMessage)
        })
      })
      // 上面自己定义Promise和下面的2种方式都可以
      // return validator.validate({ [propKey]: value }).then(() => {
      //   this.validateMessage = ''
      //   console.log('校验通过')
      //   return true
      // }).catch(({ errors, fields }) => {
      //   console.log(errors[0])
      //   this.validateMessage = errors[0].message
      //   return false
      // })
    },
    getRules () {
      let rules = []
      const propKey = this.prop
      if (!propKey) return rules
      return this.iForm.rules[propKey] || rules
    }
  }
}
</script>
