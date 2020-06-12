<script>
export default {
  name: 'i-icon',
  props: {
    iconClass: { // svg类名
      type: String,
      default: ''
    },
    type: { // icon类型
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium' // small 12、medium 14、large 16
    },
    component: { // 组件库没有包含的icon图标，可以通过这个props传入。后面版本更新的时候再统一添加到组件库中。antd的扩展方式更好，可以参考antd。
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.type}`
    },
    svgClass () {
      return `svg-icon ${this.iconClass}`
    }
  },
  render (h) {
    if (this.component) { // 如果有自定义图标
      return h('svg', { // 这里svg嵌套了svg，我目前没有什么好方法。
        class: {
          [this.svgClass]: true,
          [`svg-icon-${this.size}`]: true
        },
        domProps: {
          innerHTML: this.component // 这样写是不是不好。。
        }
      })
    }
    return h('svg', {
      ...this.$listeners,
      attrs: {
        'aria-hidden': true
      },
      class: {
        [this.svgClass]: true,
        [`svg-icon-${this.size}`]: true,
        'svg-icon-loading': this.loading
      }
    }, [h('use', {
      attrs: {
        'xlink:href': this.iconName
      }
    })])
  }
}
</script>

