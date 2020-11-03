<template>
  <section class="code-box">
    <section class="code-box-demo">
      <slot></slot>
    </section>

    <section class="code-box-meta">
      <h4>{{ title }}</h4>
      <p v-html="description"></p>
      <span class="code-expand-icon">
        <img width="16"
             alt="expand code"
             :src="showCode ? imgCloseUrl : imgOpenUrl"
             @click="showCode = !showCode" />
      </span>
    </section>

    <section class="highlight-wrapper"
             v-show="showCode">
      <prismCode :code="code" />
      <div class="copy"
           v-clipboard:copy="code"
           v-clipboard:success="onCopied">
        <i class="i-icon-copy-document"></i>
        <p>copy</p>
      </div>
    </section>
  </section>
</template>
<script>
import prismCode from './PrismCode'
export default {
  name: 'code-box',
  data () {
    return {
      showCode: false,
      imgOpenUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg',
      imgCloseUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg'
    }
  },
  props: {
    title: {
      required: true,
      default: '',
      type: String
    },
    description: {
      required: true,
      default: '',
      type: String
    },
    type: {
      required: false,
      default: 'html',
      type: String
    },
    code: {
      required: true,
      default: '',
      type: String
    }
  },
  components: {
    prismCode
  },
  methods: {
    onCopied () {
      this.$toast({
        message: '复制成功 🎉'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.code-box {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  transition: all 0.2s;
  &-demo {
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
  }
  &-meta {
    position: relative;
    padding: 18px 32px;
    border-radius: 0 0 2px 2px;
    transition: background-color 0.4s;
    width: 100%;
    font-size: 14px;
  }
  .highlight-wrapper {
    overflow: auto;
    border-radius: 0 0 2px 2px;
    border-top: 1px dashed #ebedf0;
    position: relative;
  }
  .code-expand-icon {
    transition: all 0.4s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    right: 10px;
    top: 15px;
    margin: 0;
    max-width: 100%;
    width: 20px;
    vertical-align: baseline;
    box-shadow: none;
  }
  .code-box-meta {
    position: relative;
    padding: 18px 32px;
    border-radius: 0 0 2px 2px;
    transition: background-color 0.4s;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    h4 {
      position: absolute;
      top: -14px;
      padding: 1px 8px;
      margin-left: -8px;
      color: #777;
      border-radius: 2px 2px 0 0;
      background: #fff;
      font-size: 14px;
      width: auto;
      margin-top: 0;
      margin-bottom: .5em;
    }
    p {
      margin: 0;
      width: 98%;
      font-size: 12px;
      padding-right: 25px;
      word-break: break-word;
    }
  }
  .copy {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #777;
    text-align: center;
  }
}
</style>
