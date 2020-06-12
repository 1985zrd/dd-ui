<template>
  <div class="ik-result" :class="'ik-result-' + status">
    <div class="ik-result-icon" :style="iconStyle">
      <slot name="icon"><Icon :type="iconType" isIk /></slot>
    </div>
    <div class="ik-result-title" v-if="title || $slots.title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="ik-result-subTitle" v-if="subTitle || $slots.subTitle">
      <slot name="subTitle">{{ subTitle }}</slot>
    </div>
    <div class="ik-result-content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="ik-result-extra" v-if="$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon/'
export default {
  name: 'i-result',
  components: { Icon },
  data () {
    return {
      iconMap: {
        success: 'iconsuccess',
        error: 'iconclear-or-error',
        info: 'iconinfo',
        warning: 'iconwarn'
      },
      iconColor: {
        success: '#48bc81',
        error: '#f2613c',
        info: '#1890ff',
        warning: '#f1a82f'
      }
    }
  },
  props: {
    title: {
      default: '' // String | vnode | slot='title'
    },
    subTitle: {
      default: '' // String | vnode slot='subTitle'
    },
    status: {
      type: String,
      default: 'info' // 'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'
    }
  },
  computed: {
    iconType () {
      return this.iconMap[this.status]
    },
    iconStyle () {
      return {
        color: this.iconColor[this.status]
      }
    }
  }
}
</script>
