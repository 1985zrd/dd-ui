<template>
  <div>
    <h1>
      hello {{ msg }}
    </h1>
    <div>
      <i-icon type="love" size="small"/>
      <i-icon type="love" size="medium"/>
      <i-icon type="love" size="large"/>
    </div>
    <CodeBox
      title="result示例"
      description="默认示例。"
      :code="base"
    >
      <i-result
        title="给一个默认的内容"
        subTitle="副标题"
      ></i-result>
    </CodeBox>
    <div>
      <i-button @click="toastHandler">我的按钮</i-button>
    </div>
    <div>
      <i-form ref="form" :model="form" :rules="rules" :layout="layout">
        <i-form-item label="用户名：" prop="user">
          <i-input v-model.number="form.user" />
        </i-form-item>
        <i-form-item label="密码：" prop="pass">
          <i-input type="password" v-model="form.pass" />
        </i-form-item>
        <i-form-item label="描述：" prop="desc">
          <i-input type="textarea" v-model="form.desc" />
        </i-form-item>
        <i-button
          @click="submitHandler"
        >提交</i-button>
      </i-form>
    </div>
    <MarkdownRender mdFileName="button" />
  </div>
</template>

<script>
import { base } from './code.js'
export default {
  data () {
    return {
      msg: 'di-ui',
      layout: 'horizontal',
      form: {
        user: '',
        pass: '',
        desc: ''
      },
      rules: {
        user: [{ type: 'number', message: '必须为数字' }],
        pass: [{ required: true, message: '请输入密码' }],
        desc: [{ min: 3, max: 5, message: '长度在 3 到 5 个字符' }]
      },
      base
    }
  },
  methods: {
    toastHandler () {
      this.$toast({
        message: 'Hello,Toast演示',
        duration: 1500
      })
    },
    submitHandler () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
